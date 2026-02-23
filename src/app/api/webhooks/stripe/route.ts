import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

let stripe: Stripe | null = null;

function getStripe() {
  if (stripe) return stripe;
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error('Missing STRIPE_SECRET_KEY');
  }
  stripe = new Stripe(key, {});
  return stripe;
}

export async function POST(request: Request) {
  const body = await request.text();
  const sig = request.headers.get('stripe-signature') || '';

  let stripeClient: Stripe;
  try {
    stripeClient = getStripe();
  } catch (e) {
    return NextResponse.json({ error: 'Stripe is not configured on this deployment.' }, { status: 500 });
  }

  let event: Stripe.Event;
  try {
    event = stripeClient.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET || '');
  } catch (err) {
    return NextResponse.json({ error: 'Webhook signature failed' }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const checkoutSession = event.data.object as Stripe.Checkout.Session;
    const bookingId = checkoutSession.metadata?.bookingId;

    if (bookingId) {
      await prisma.booking.update({
        where: { id: bookingId },
        data: {
          status: 'CONFIRMED',
          paidAmount: (checkoutSession.amount_total || 0) / 100,
          stripePaymentId: checkoutSession.payment_intent as string,
        },
      });

      // Update seat count
      const booking = await prisma.booking.findUnique({ where: { id: bookingId } });
      if (booking) {
        await prisma.retreatDate.update({
          where: { id: booking.dateId },
          data: { seatsBooked: { increment: 1 } },
        });
      }
    }
  }

  return NextResponse.json({ received: true });
}
