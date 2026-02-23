import Link from 'next/link';
import { format } from 'date-fns';
import { prisma } from '@/lib/prisma';
import { Users, Calendar, DollarSign, Package, TrendingUp, FileText, Star } from 'lucide-react';

async function getStats() {
  try {
    const [bookings, users, programs, posts, testimonials] = await Promise.all([
      prisma.booking.findMany({
        include: { program: true, user: true, date: true },
        orderBy: { createdAt: 'desc' },
        take: 8,
      }),
      prisma.user.count(),
      prisma.retreatProgram.count({ where: { isActive: true } }),
      prisma.blogPost.count(),
      prisma.testimonial.count(),
    ]);
    const revenue = bookings.filter(b => b.status === 'CONFIRMED').reduce((s, b) => s + b.paidAmount, 0);
    const confirmed = bookings.filter(b => b.status === 'CONFIRMED').length;
    return { bookings, totalUsers: users, totalPrograms: programs, revenue, confirmed, totalPosts: posts, totalTestimonials: testimonials };
  } catch {
    return { bookings: [], totalUsers: 0, totalPrograms: 3, revenue: 0, confirmed: 0, totalPosts: 0, totalTestimonials: 0 };
  }
}

const statusColors: Record<string, string> = {
  PENDING: '#f59e0b', CONFIRMED: '#10b981', CANCELLED: '#ef4444', COMPLETED: '#6366f1',
};

export default async function AdminPage() {
  const { bookings, totalUsers, totalPrograms, revenue, confirmed, totalPosts, totalTestimonials } = await getStats();

  const stats = [
    { label: 'Total Users', value: totalUsers, icon: Users, color: '#4a7e50' },
    { label: 'Total Bookings', value: bookings.length, icon: Calendar, color: '#C5A253' },
    { label: 'Confirmed', value: confirmed, icon: Package, color: '#E8891A' },
    { label: 'Revenue', value: `$${revenue.toLocaleString()}`, icon: DollarSign, color: '#C4663A' },
    { label: 'Active Retreats', value: totalPrograms, icon: TrendingUp, color: '#7c3aed' },
    { label: 'Blog Posts', value: totalPosts, icon: FileText, color: '#0891b2' },
    { label: 'Testimonials', value: totalTestimonials, icon: Star, color: '#db2777' },
    { label: 'Today', value: format(new Date(), 'MMM d'), icon: Calendar, color: '#64748b' },
  ];

  const quickActions = [
    { label: 'New Blog Post', href: '/admin/blog/new', icon: '✍️' },
    { label: 'Add Retreat', href: '/admin/programs/new', icon: '🏔️' },
    { label: 'Add Retreat Date', href: '/admin/programs', icon: '📅' },
    { label: 'Add Testimonial', href: '/admin/testimonials/new', icon: '⭐' },
    { label: 'View Bookings', href: '/admin/bookings', icon: '📋' },
    { label: 'Manage Users', href: '/admin/users', icon: '👥' },
    { label: 'Astrology Reports', href: '/admin/astrology', icon: '🔮' },
    { label: 'View Live Site', href: '/', icon: '🌐' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-semibold text-stone-900">Dashboard Overview</h1>
        <span className="text-stone-400 text-sm">{format(new Date(), 'MMMM d, yyyy')}</span>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(stat => (
          <div key={stat.label} className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100">
            <div className="flex items-center justify-between mb-3">
              <span className="text-stone-400 text-xs">{stat.label}</span>
              <stat.icon className="w-4 h-4" style={{ color: stat.color }} />
            </div>
            <div className="font-display text-2xl font-semibold text-stone-900">{stat.value}</div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-6">
        <h2 className="font-semibold text-stone-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {quickActions.map(action => (
            <Link key={action.label} href={action.href}
              className="flex flex-col items-center gap-2 p-4 rounded-xl border border-stone-100 hover:border-stone-200 hover:bg-stone-50 transition-all text-center">
              <span className="text-2xl">{action.icon}</span>
              <span className="text-xs font-medium text-stone-700">{action.label}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
        <div className="p-6 border-b border-stone-100 flex items-center justify-between">
          <h2 className="font-semibold text-stone-900">Recent Bookings</h2>
          <Link href="/admin/bookings" className="text-sm font-medium" style={{ color: '#C5A253' }}>View all →</Link>
        </div>
        {bookings.length === 0 ? (
          <div className="p-8 text-center text-stone-400">No bookings yet.</div>
        ) : (
          <div className="divide-y divide-stone-50">
            {bookings.map((booking) => (
              <div key={booking.id} className="px-6 py-3 flex items-center justify-between hover:bg-stone-50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                    style={{ background: 'linear-gradient(135deg, #C5A253, #E8891A)' }}>
                    {booking.user.name?.[0] || 'U'}
                  </div>
                  <div>
                    <div className="font-medium text-stone-900 text-sm">{booking.user.name}</div>
                    <div className="text-stone-400 text-xs">{booking.program.title}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-stone-900 font-medium text-sm">${booking.totalAmount}</div>
                  <span className="px-2 py-0.5 rounded-full text-xs font-medium text-white"
                    style={{ background: statusColors[booking.status] }}>
                    {booking.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
