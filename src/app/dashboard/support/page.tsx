import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';

import DashboardScaffold from '@/components/dashboard/DashboardScaffold';
import { authOptions } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export default async function DashboardSupportPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/auth/login');

  return (
    <DashboardScaffold session={session as any} activeHref="/dashboard/support">
      <div className="rounded-3xl p-8" style={{ background: 'linear-gradient(135deg, #1c1917, #083344)' }}>
        <div className="text-4xl mb-3">🧑‍💬</div>
        <h1 className="font-display text-2xl text-white font-semibold mb-1">Support</h1>
        <p className="text-stone-300">Fast help for bookings, payments, and travel questions.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100">
          <h2 className="font-display text-lg font-semibold text-stone-900">WhatsApp (Recommended)</h2>
          <p className="text-stone-600 text-sm mt-2">
            Get the fastest replies—our team is most active on WhatsApp.
          </p>
          <a
            href="https://wa.me/9779851187267?text=Namaste! I need support with my booking."
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-semibold text-white w-full"
            style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
          >
            💬 Chat on WhatsApp
          </a>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100">
          <h2 className="font-display text-lg font-semibold text-stone-900">Helpful Pages</h2>
          <div className="mt-4 space-y-2">
            {[
              { label: '📌 FAQ', href: '/faq' },
              { label: '🗺️ Nepal Travel Guide', href: '/nepal/travel-guide' },
              { label: '🧳 Packing List', href: '/nepal/packing-list' },
              { label: '🛂 Visa + Arrival', href: '/nepal/visa' },
            ].map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className="block px-4 py-3 rounded-2xl border border-stone-200 hover:bg-stone-50 text-stone-900 font-medium"
              >
                {i.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </DashboardScaffold>
  );
}
