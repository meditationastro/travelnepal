import Link from 'next/link';
import type { ReactNode } from 'react';
import { Calendar, CreditCard, FileText, Package, MessageCircle, Settings } from 'lucide-react';

type SessionLike = {
  user: {
    id: string;
    name?: string | null;
    email?: string | null;
  };
};

const items = [
  { icon: Package, label: 'Dashboard', href: '/dashboard' },
  { icon: Calendar, label: 'My Bookings', href: '/dashboard/bookings' },
  { icon: FileText, label: 'Astrology Reports', href: '/dashboard/reports' },
  { icon: CreditCard, label: 'Payments', href: '/dashboard/payments' },
  { icon: MessageCircle, label: 'Support', href: '/dashboard/support' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
];

export default function DashboardScaffold({
  session,
  activeHref,
  children,
}: {
  session: SessionLike;
  activeHref: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen pt-20" style={{ background: '#fdf8f0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100">
              <div className="text-center mb-6">
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center text-2xl font-display font-semibold text-white"
                  style={{ background: 'linear-gradient(135deg, #C5A253, #E8891A)' }}
                >
                  {session.user?.name?.[0] || 'U'}
                </div>
                <div className="font-semibold text-stone-900">{session.user?.name}</div>
                <div className="text-stone-400 text-sm">{session.user?.email}</div>
              </div>
              <nav className="space-y-1">
                {items.map((item) => {
                  const active = activeHref === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        active ? 'text-white' : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'
                      }`}
                      style={active ? { background: 'linear-gradient(135deg, #C5A253, #E8891A)' } : {}}
                    >
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main */}
          <div className="lg:col-span-3 space-y-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
