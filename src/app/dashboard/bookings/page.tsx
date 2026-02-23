import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { format } from 'date-fns';

import DashboardScaffold from '@/components/dashboard/DashboardScaffold';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export default async function DashboardBookingsPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/auth/login');

  const bookings = await prisma.booking.findMany({
    where: { userId: session.user.id },
    include: { program: true, date: true, addons: true },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <DashboardScaffold session={session as any} activeHref="/dashboard/bookings">
      <div className="rounded-3xl p-8" style={{ background: 'linear-gradient(135deg, #1c1917, #1a0a00)' }}>
        <div className="text-4xl mb-3">📅</div>
        <h1 className="font-display text-2xl text-white font-semibold mb-1">My Bookings</h1>
        <p className="text-stone-400">View retreat bookings, add-ons, and dates.</p>
      </div>

      {bookings.length === 0 ? (
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100 text-center">
          <div className="text-4xl mb-3">🏔️</div>
          <h2 className="font-display text-xl font-semibold text-stone-900 mb-2">No bookings yet</h2>
          <p className="text-stone-500 mb-6">Pick a retreat and start your Himalayan journey.</p>
          <Link href="/retreats" className="btn-gold inline-block px-8 py-3 rounded-xl font-semibold text-white">
            Explore Retreats
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {bookings.map((b) => (
            <div key={b.id} className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <div className="font-display text-lg font-semibold text-stone-900">{b.program.title}</div>
                  <div className="text-stone-500 text-sm mt-1">
                    {format(new Date(b.date.startDate), 'MMM d, yyyy')} – {format(new Date(b.date.endDate), 'MMM d, yyyy')}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{
                      background:
                        b.status === 'CONFIRMED'
                          ? 'rgba(34,197,94,0.12)'
                          : b.status === 'PENDING'
                            ? 'rgba(234,179,8,0.18)'
                            : 'rgba(148,163,184,0.18)',
                      color:
                        b.status === 'CONFIRMED' ? '#15803d' : b.status === 'PENDING' ? '#92400e' : '#475569',
                      border: '1px solid rgba(0,0,0,0.06)',
                    }}
                  >
                    {b.status}
                  </span>
                  <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-stone-100 text-stone-600">
                    {b.roomType}
                  </span>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="rounded-2xl p-4" style={{ background: '#fdf8f0' }}>
                  <div className="text-xs text-stone-500">Total</div>
                  <div className="font-display text-xl font-semibold text-stone-900">${b.totalAmount.toFixed(0)}</div>
                </div>
                <div className="rounded-2xl p-4" style={{ background: '#fdf8f0' }}>
                  <div className="text-xs text-stone-500">Paid</div>
                  <div className="font-display text-xl font-semibold text-stone-900">${b.paidAmount.toFixed(0)}</div>
                </div>
                <div className="rounded-2xl p-4" style={{ background: '#fdf8f0' }}>
                  <div className="text-xs text-stone-500">Add-ons</div>
                  <div className="text-sm text-stone-700 mt-1">
                    {b.addons?.length ? (
                      <div className="flex flex-wrap gap-2">
                        {b.addons.slice(0, 4).map((a) => (
                          <span key={a.id} className="px-2.5 py-1 rounded-full bg-white border border-stone-200 text-xs">
                            🔮 {a.type.replaceAll('_', ' ')}
                          </span>
                        ))}
                        {b.addons.length > 4 && (
                          <span className="px-2.5 py-1 rounded-full bg-white border border-stone-200 text-xs">
                            +{b.addons.length - 4} more
                          </span>
                        )}
                      </div>
                    ) : (
                      <span className="text-stone-400">None</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/nepal/packing-list"
                  className="px-5 py-2.5 rounded-xl font-semibold text-stone-900 border border-stone-200 hover:bg-stone-50 text-center"
                >
                  🧳 Packing List
                </Link>
                <Link
                  href="/nepal/travel-guide"
                  className="px-5 py-2.5 rounded-xl font-semibold text-stone-900 border border-stone-200 hover:bg-stone-50 text-center"
                >
                  🗺️ Travel Guide
                </Link>
                <a
                  href="https://wa.me/9779851187267?text=Namaste! I have a question about my booking."
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl font-semibold text-white text-center"
                  style={{ background: 'linear-gradient(135deg, #C5A253, #E8891A)' }}
                >
                  💬 Support on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </DashboardScaffold>
  );
}
