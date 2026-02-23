import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { format } from 'date-fns';

import DashboardScaffold from '@/components/dashboard/DashboardScaffold';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export default async function DashboardPaymentsPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/auth/login');

  const bookings = await prisma.booking.findMany({
    where: { userId: session.user.id },
    include: { program: true, date: true },
    orderBy: { createdAt: 'desc' },
  });

  const totals = bookings.reduce(
    (acc, b) => {
      acc.total += b.totalAmount;
      acc.paid += b.paidAmount;
      return acc;
    },
    { total: 0, paid: 0 }
  );

  return (
    <DashboardScaffold session={session as any} activeHref="/dashboard/payments">
      <div className="rounded-3xl p-8" style={{ background: 'linear-gradient(135deg, #1c1917, #0b1220)' }}>
        <div className="text-4xl mb-3">💳</div>
        <h1 className="font-display text-2xl text-white font-semibold mb-1">Payments</h1>
        <p className="text-stone-300">Payment summary and receipts for your bookings.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100">
          <div className="text-sm text-stone-500">Total</div>
          <div className="font-display text-3xl font-semibold text-stone-900">${totals.total.toFixed(0)}</div>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100">
          <div className="text-sm text-stone-500">Paid</div>
          <div className="font-display text-3xl font-semibold text-stone-900">${totals.paid.toFixed(0)}</div>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100">
          <div className="text-sm text-stone-500">Balance</div>
          <div className="font-display text-3xl font-semibold text-stone-900">${Math.max(0, totals.total - totals.paid).toFixed(0)}</div>
        </div>
      </div>

      {bookings.length === 0 ? (
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100 text-center">
          <div className="text-4xl mb-3">🧾</div>
          <h2 className="font-display text-xl font-semibold text-stone-900 mb-2">No payments yet</h2>
          <p className="text-stone-500 mb-6">Once you book a retreat, payment details will show here.</p>
          <Link href="/retreats" className="btn-gold inline-block px-8 py-3 rounded-xl font-semibold text-white">
            Book Now
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100">
          <h2 className="font-display text-lg font-semibold text-stone-900 mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {bookings.map((b) => (
              <div key={b.id} className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 p-4 rounded-2xl" style={{ background: '#fdf8f0' }}>
                <div>
                  <div className="font-semibold text-stone-900">{b.program.title}</div>
                  <div className="text-stone-500 text-sm">
                    {format(new Date(b.createdAt), 'MMM d, yyyy')} • {format(new Date(b.date.startDate), 'MMM d')}–{format(new Date(b.date.endDate), 'MMM d')}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-display text-lg font-semibold text-stone-900">
                    ${b.paidAmount.toFixed(0)} / ${b.totalAmount.toFixed(0)}
                  </div>
                  <div className="text-xs text-stone-400">{b.stripePaymentId ? 'Stripe payment linked' : 'Manual / pending payment'}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/9779851187267?text=Namaste! I need help with a payment."
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl font-semibold text-white text-center"
              style={{ background: 'linear-gradient(135deg, #C5A253, #E8891A)' }}
            >
              💬 Payment Support
            </a>
            <Link
              href="/pricing"
              className="px-5 py-2.5 rounded-xl font-semibold text-stone-900 border border-stone-200 hover:bg-stone-50 text-center"
            >
              View Pricing
            </Link>
          </div>
        </div>
      )}
    </DashboardScaffold>
  );
}
