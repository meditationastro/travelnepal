import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import Stripe from 'stripe';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * IMPORTANT:
 * Do NOT initialize Stripe at module scope with a possibly-empty key.
 * Next.js may import/evaluate route modules during `next build` ("collect page data").
 * Initializing Stripe with an empty/invalid key can throw and break the build.
 */
function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  // Let the SDK choose the default API version for the installed stripe package.
  return new Stripe(key);
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const { programId, dateId, roomType, addons, notes, totalAmount } = await request.json();

    const booking = await prisma.booking.create({
      data: {
        userId: (session.user as any).id,
        programId,
        dateId,
        roomType,
        totalAmount,
        notes,
        status: 'PENDING',
        addons: {
          create: (addons || []).map((type: string) => ({
            type,
            price: getAddonPrice(type),
          })),
        },
      },
      include: { program: true },
    });

    const stripe = getStripe();
    if (stripe) {
      const checkoutSession = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: booking.program.title,
                description: `${booking.program.duration}-Day Retreat at Himalaya Retreat Nepal`,
              },
              unit_amount: Math.round(Number(totalAmount) * 100),
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/bookings/${booking.id}?success=1`,
        cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/retreats/${booking.program.id}`,
        metadata: { bookingId: booking.id },
      });

      return NextResponse.json({ checkoutUrl: checkoutSession.url, bookingId: booking.id });
    }

    // If Stripe isn't configured, still return the booking id (useful for dev environments).
    return NextResponse.json({ bookingId: booking.id });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to create booking' }, { status: 500 });
  }
}

export async function GET(_request: Request) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const bookings = await prisma.booking.findMany({
    where: { userId: (session.user as any).id },
    include: { program: true, date: true, addons: true },
    orderBy: { createdAt: 'desc' },
  });

  return NextResponse.json(bookings);
}

function getAddonPrice(type: string): number {
  const prices: Record<string, number> = {
    VEDIC_BIRTH_CHART: 120,
    KARMA_READING: 150,
    COMPATIBILITY_READING: 130,
    CAREER_GUIDANCE: 110,
    MEDITATION_INTEGRATION: 200,
  };
  return prices[type] || 100;
}
