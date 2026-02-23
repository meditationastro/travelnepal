import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { 
  TrendingUp, Calendar, Package, FileText, MessageSquare, 
  Star, Users, Home, Image, ShoppingBag, Settings, BarChart3
} from 'lucide-react';

const adminNav = [
  { label: 'Overview', href: '/admin', icon: TrendingUp },
  { label: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
  { label: 'Bookings', href: '/admin/bookings', icon: Calendar },
  { label: 'Retreats', href: '/admin/programs', icon: Package },
  { label: 'Blog Posts', href: '/admin/blog', icon: FileText },
  { label: 'Gallery', href: '/admin/gallery', icon: Image },
  { label: 'Messages', href: '/admin/messages', icon: MessageSquare },
  { label: 'Shop Orders', href: '/admin/shop', icon: ShoppingBag },
  { label: 'Testimonials', href: '/admin/testimonials', icon: Star },
  { label: 'Astrology', href: '/admin/astrology', icon: Star },
  { label: 'Users', href: '/admin/users', icon: Users },
  { label: 'Settings', href: '/admin/settings', icon: Settings },
];

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  let session = null as any;
  try {
    session = await getServerSession(authOptions);
  } catch {
    // If auth is misconfigured (e.g., missing NEXTAUTH_SECRET), avoid hard crashing.
    // Redirect to login so the site remains usable.
    redirect('/auth/login');
  }
  if (!session || (session.user as any)?.role !== 'ADMIN') redirect('/auth/login');

  return (
    <div className="min-h-screen pt-20" style={{ background: '#f5f5f4' }}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid lg:grid-cols-[220px_1fr] gap-6">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden sticky top-24">
              <div className="p-4 border-b border-stone-100" style={{ background: 'linear-gradient(135deg,#1c1917,#2d1a00)' }}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">⚙️</span>
                  <span className="font-semibold text-white text-sm">Admin Panel</span>
                </div>
                <div className="text-stone-400 text-xs truncate">{session.user?.email}</div>
              </div>
              <nav className="p-2 space-y-0.5">
                {adminNav.map((item) => (
                  <Link key={item.href} href={item.href}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-stone-600 hover:bg-amber-50 hover:text-stone-900 transition-all group">
                    <item.icon className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" style={{ color: '#C5A253' }} />
                    {item.label}
                  </Link>
                ))}
                <div className="pt-2 mt-2 border-t border-stone-100">
                  <Link href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-stone-400 hover:text-stone-600 transition-colors">
                    <Home className="w-4 h-4" /> View Site
                  </Link>
                </div>
              </nav>
            </div>
          </aside>
          {/* Main */}
          <main className="min-w-0">{children}</main>
        </div>
      </div>
    </div>
  );
}
