import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { format } from 'date-fns';

import DashboardScaffold from '@/components/dashboard/DashboardScaffold';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

function prettyType(t: string) {
  return t
    .toLowerCase()
    .split('_')
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(' ');
}

export default async function DashboardReportsPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/auth/login');

  const reports = await prisma.astrologyReport.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <DashboardScaffold session={session as any} activeHref="/dashboard/reports">
      <div className="rounded-3xl p-8" style={{ background: 'linear-gradient(135deg, #0b1220, #1a0a00)' }}>
        <div className="text-4xl mb-3">🔮</div>
        <h1 className="font-display text-2xl text-white font-semibold mb-1">Astrology Reports</h1>
        <p className="text-stone-300">Track your report requests, status, and downloads.</p>
      </div>

      {reports.length === 0 ? (
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100 text-center">
          <div className="text-4xl mb-3">✨</div>
          <h2 className="font-display text-xl font-semibold text-stone-900 mb-2">No reports yet</h2>
          <p className="text-stone-500 mb-6">Book a consultation or add an astrology report to your retreat.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/vedic-astrology/booking" className="px-6 py-3 rounded-xl font-semibold text-white" style={{ background: 'linear-gradient(135deg, #C5A253, #E8891A)' }}>
              Book Consultation
            </Link>
            <Link href="/retreats" className="px-6 py-3 rounded-xl font-semibold text-stone-900 border border-stone-200 hover:bg-stone-50">
              Explore Retreats
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {reports.map((r) => (
            <div key={r.id} className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <div className="font-display text-lg font-semibold text-stone-900">{prettyType(r.type)}</div>
                  <div className="text-stone-500 text-sm mt-1">Requested {format(new Date(r.createdAt), 'MMM d, yyyy')}</div>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{
                      background:
                        r.status === 'COMPLETED'
                          ? 'rgba(34,197,94,0.12)'
                          : r.status === 'PENDING'
                            ? 'rgba(234,179,8,0.18)'
                            : 'rgba(59,130,246,0.14)',
                      color:
                        r.status === 'COMPLETED' ? '#15803d' : r.status === 'PENDING' ? '#92400e' : '#1d4ed8',
                      border: '1px solid rgba(0,0,0,0.06)',
                    }}
                  >
                    {r.status}
                  </span>
                  {r.scheduledAt && (
                    <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-stone-100 text-stone-600">
                      🗓️ {format(new Date(r.scheduledAt), 'MMM d')}
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-5 grid md:grid-cols-2 gap-3">
                <div className="rounded-2xl p-4" style={{ background: '#fdf8f0' }}>
                  <div className="text-xs text-stone-500">Birth Details</div>
                  <div className="text-sm text-stone-700 mt-1">
                    {r.birthPlace || r.birthDate || r.birthTime ? (
                      <>
                        <div>📍 {r.birthPlace || '—'}</div>
                        <div>🎂 {r.birthDate ? format(new Date(r.birthDate), 'MMM d, yyyy') : '—'}</div>
                        <div>🕰️ {r.birthTime || '—'}</div>
                      </>
                    ) : (
                      <span className="text-stone-400">Not provided</span>
                    )}
                  </div>
                </div>
                <div className="rounded-2xl p-4" style={{ background: '#fdf8f0' }}>
                  <div className="text-xs text-stone-500">Delivery</div>
                  <div className="text-sm text-stone-700 mt-1">
                    {r.reportUrl ? (
                      <a className="font-semibold" href={r.reportUrl} target="_blank" rel="noreferrer">
                        📄 Open report
                      </a>
                    ) : (
                      <span className="text-stone-400">Report link will appear when ready.</span>
                    )}
                    {r.zoomLink && (
                      <div className="mt-2">
                        <a className="font-semibold" href={r.zoomLink} target="_blank" rel="noreferrer">
                          🎥 Zoom link
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/9779851187267?text=Namaste! I want an update on my astrology report."
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl font-semibold text-white text-center"
                  style={{ background: 'linear-gradient(135deg, #C5A253, #E8891A)' }}
                >
                  💬 Ask for Update
                </a>
                <Link
                  href="/vedic-astrology"
                  className="px-5 py-2.5 rounded-xl font-semibold text-stone-900 border border-stone-200 hover:bg-stone-50 text-center"
                >
                  Learn Astrology Services
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </DashboardScaffold>
  );
}
