import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { format, differenceInDays } from 'date-fns';

import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import DashboardScaffold from '@/components/dashboard/DashboardScaffold';

export const dynamic = 'force-dynamic';

async function getUserData(userId: string) {
  try {
    const [bookings, reports] = await Promise.all([
      prisma.booking.findMany({
        where: { userId },
        include: { program: true, date: true },
        orderBy: { createdAt: 'desc' },
        take: 5,
      }),
      prisma.astrologyReport.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' },
        take: 5,
      }),
    ]);
    return { bookings, reports };
  } catch {
    return { bookings: [], reports: [] };
  }
}

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/auth/login');

  const { bookings, reports } = await getUserData(session.user.id);
  const upcomingBooking = bookings.find(b => b.status === 'CONFIRMED');

  return (
    <DashboardScaffold session={session as any} activeHref="/dashboard">
      {/* Welcome */}
      <div className="rounded-3xl p-8" style={{ background: 'linear-gradient(135deg, #1c1917, #1a0a00)' }}>
        <div className="text-4xl mb-3">🙏</div>
        <h1 className="font-display text-2xl text-white font-semibold mb-1">
          Namaste, {session.user?.name?.split(' ')[0]}
        </h1>
        <p className="text-stone-400">Your spiritual journey dashboard.</p>
      </div>

      {/* Upcoming retreat */}
      {upcomingBooking ? (
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100">
          <h2 className="font-display text-lg font-semibold text-stone-900 mb-4">Your Upcoming Retreat</h2>
          <div className="flex items-center justify-between p-4 rounded-2xl" style={{ background: '#fdf8f0' }}>
            <div>
              <div className="font-semibold text-stone-900">{upcomingBooking.program.title}</div>
              <div className="text-stone-500 text-sm mt-1">
                {format(new Date(upcomingBooking.date.startDate), 'MMM d, yyyy')} –{' '}
                {format(new Date(upcomingBooking.date.endDate), 'MMM d, yyyy')}
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold" style={{ color: '#C5A253' }}>
                {differenceInDays(new Date(upcomingBooking.date.startDate), new Date())}
              </div>
              <div className="text-stone-400 text-xs">days away</div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {['What to Pack', 'Travel Guide', 'Visa Info'].map(item => (
              <button
                key={item}
                className="p-3 rounded-xl border border-stone-200 text-sm text-stone-600 hover:border-stone-300 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100 text-center">
          <div className="text-4xl mb-3">🏔️</div>
          <h3 className="font-display text-xl font-semibold text-stone-900 mb-2">No upcoming retreats</h3>
          <p className="text-stone-500 mb-6">Ready to begin your Himalayan journey?</p>
          <Link href="/retreats" className="btn-gold inline-block px-8 py-3 rounded-xl font-semibold text-white">
            Explore Retreats
          </Link>
        </div>
      )}

      {/* Quick stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'Retreats', value: bookings.length, icon: '🏔️' },
          { label: 'Reports', value: reports.length, icon: '🔮' },
          { label: 'Status', value: 'Active', icon: '✅' },
        ].map(stat => (
          <div key={stat.label} className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100 text-center">
            <div className="text-2xl mb-2">{stat.icon}</div>
            <div className="font-display text-2xl font-semibold text-stone-900">{stat.value}</div>
            <div className="text-stone-400 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Preparation Checklist */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100">
        <h2 className="font-display text-lg font-semibold text-stone-900 mb-4">Preparation Checklist</h2>
        <div className="space-y-3">
          {[
            { done: true, task: 'Account created' },
            { done: bookings.length > 0, task: 'Retreat booked' },
            { done: false, task: 'Meditation preparation guide reviewed' },
            { done: false, task: 'Nepal visa arranged' },
            { done: false, task: 'Travel insurance organized' },
            { done: false, task: 'What to pack list completed' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                  item.done ? 'bg-green-500' : 'border-2 border-stone-200'
                }`}
              >
                {item.done && <span className="text-white text-xs">✓</span>}
              </div>
              <span className={`text-sm ${item.done ? 'text-stone-400 line-through' : 'text-stone-700'}`}>{item.task}</span>
            </div>
          ))}
        </div>
      </div>
    </DashboardScaffold>
  );
}
