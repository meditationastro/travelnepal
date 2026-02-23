import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

import DashboardScaffold from '@/components/dashboard/DashboardScaffold';
import SettingsClient from '@/components/dashboard/SettingsClient';
import { authOptions } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export default async function DashboardSettingsPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/auth/login');

  return (
    <DashboardScaffold session={session as any} activeHref="/dashboard/settings">
      <div className="rounded-3xl p-8" style={{ background: 'linear-gradient(135deg, #1c1917, #1a0a00)' }}>
        <div className="text-4xl mb-3">⚙️</div>
        <h1 className="font-display text-2xl text-white font-semibold mb-1">Settings</h1>
        <p className="text-stone-300">Your account preferences and notifications.</p>
      </div>

      <SettingsClient />
    </DashboardScaffold>
  );
}
