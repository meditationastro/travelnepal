'use client';

import { useEffect, useState, useMemo } from 'react';
import { format } from 'date-fns';
import { Search, RefreshCw, Download } from 'lucide-react';
import { BookingStatusUpdater } from '@/components/admin/BookingStatusUpdater';
import { BookingEditorButton } from '@/components/admin/BookingEditorButton';

type Booking = {
  id: string;
  status: string;
  roomType: string;
  totalAmount: number;
  paidAmount: number;
  notes: string | null;
  createdAt: string;
  user: { id: string; name: string | null; email: string; phone: string | null };
  program: { id: string; title: string; duration: number };
  date: { startDate: string; endDate: string };
  addons: { id: string; type: string; price: number }[];
};

const statusColors: Record<string, string> = {
  PENDING: 'bg-yellow-100 text-yellow-700',
  CONFIRMED: 'bg-green-100 text-green-700',
  CANCELLED: 'bg-red-100 text-red-700',
  COMPLETED: 'bg-purple-100 text-purple-700',
};

export default function AdminBookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');

  const load = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/bookings', { cache: 'no-store' });
      if (res.ok) setBookings(await res.json());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const filtered = useMemo(() => {
    return bookings.filter(b => {
      const q = search.toLowerCase();
      const matchSearch = !search ||
        (b.user.name || '').toLowerCase().includes(q) ||
        b.user.email.toLowerCase().includes(q) ||
        b.program.title.toLowerCase().includes(q);
      const matchStatus = statusFilter === 'ALL' || b.status === statusFilter;
      return matchSearch && matchStatus;
    });
  }, [bookings, search, statusFilter]);

  const revenue = bookings.filter(b => b.status === 'CONFIRMED').reduce((s, b) => s + b.paidAmount, 0);
  const totalRevenue = bookings.filter(b => b.status !== 'CANCELLED').reduce((s, b) => s + b.totalAmount, 0);

  const exportCSV = () => {
    const rows = [
      ['ID', 'Guest', 'Email', 'Retreat', 'Start', 'End', 'Room', 'Total', 'Paid', 'Status', 'Created'],
      ...filtered.map(b => [
        b.id, b.user.name || '', b.user.email, b.program.title,
        format(new Date(b.date.startDate), 'yyyy-MM-dd'),
        format(new Date(b.date.endDate), 'yyyy-MM-dd'),
        b.roomType, b.totalAmount, b.paidAmount, b.status,
        format(new Date(b.createdAt), 'yyyy-MM-dd'),
      ]),
    ];
    const csv = rows.map(r => r.map(v => `"${v}"`).join(',')).join('\n');
    const a = document.createElement('a');
    a.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv);
    a.download = `bookings-${format(new Date(), 'yyyy-MM-dd')}.csv`;
    a.click();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="font-display text-2xl font-semibold text-stone-900">Bookings</h1>
          <p className="text-stone-400 text-sm mt-1">
            {bookings.length} total · <span className="text-green-600 font-medium">${revenue.toLocaleString()} paid</span>
            {' · '}<span className="text-amber-600 font-medium">${totalRevenue.toLocaleString()} total committed</span>
          </p>
        </div>
        <div className="flex gap-2">
          <button onClick={exportCSV} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50 text-sm">
            <Download className="w-4 h-4" /> Export CSV
          </button>
          <button onClick={load} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50 text-sm">
            <RefreshCw className="w-4 h-4" /> Refresh
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {(['PENDING', 'CONFIRMED', 'COMPLETED', 'CANCELLED'] as const).map(status => (
          <button key={status} onClick={() => setStatusFilter(statusFilter === status ? 'ALL' : status)}
            className={`rounded-2xl p-4 shadow-sm border text-center transition-all ${statusFilter === status ? 'border-amber-300 shadow-amber-100' : 'border-stone-100 bg-white hover:border-stone-200'}`}
            style={statusFilter === status ? { background: '#fffbeb' } : {}}>
            <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${statusColors[status]}`}>{status}</div>
            <div className="font-display text-2xl font-semibold text-stone-900">
              {bookings.filter(b => b.status === status).length}
            </div>
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search guest name, email, or retreat…"
            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-200" />
        </div>
        {statusFilter !== 'ALL' && (
          <button onClick={() => setStatusFilter('ALL')} className="px-4 py-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-sm font-medium">
            Clear: {statusFilter} ×
          </button>
        )}
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-stone-400">Loading bookings…</div>
        ) : filtered.length === 0 ? (
          <div className="p-12 text-center text-stone-400">{search || statusFilter !== 'ALL' ? 'No bookings match your filter.' : 'No bookings yet.'}</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-stone-100 bg-stone-50">
                  {['Guest', 'Retreat', 'Dates', 'Amount', 'Status', 'Update', 'Edit'].map(h => (
                    <th key={h} className="text-left px-5 py-3 text-xs uppercase tracking-wider text-stone-400 font-medium">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-50">
                {filtered.map(booking => (
                  <tr key={booking.id} className="hover:bg-stone-50 transition-colors">
                    <td className="px-5 py-4">
                      <div className="font-medium text-stone-900 text-sm">{booking.user.name}</div>
                      <div className="text-stone-400 text-xs">{booking.user.email}</div>
                      {booking.user.phone && <div className="text-stone-400 text-xs">{booking.user.phone}</div>}
                    </td>
                    <td className="px-5 py-4">
                      <div className="text-stone-700 text-sm">{booking.program.title}</div>
                      <div className="text-stone-400 text-xs">{booking.roomType} · {booking.addons.length} add-ons</div>
                    </td>
                    <td className="px-5 py-4 text-stone-600 text-sm whitespace-nowrap">
                      {format(new Date(booking.date.startDate), 'MMM d')} – {format(new Date(booking.date.endDate), 'MMM d, yy')}
                    </td>
                    <td className="px-5 py-4">
                      <div className="font-semibold text-stone-900 text-sm">${booking.totalAmount}</div>
                      <div className="text-stone-400 text-xs">Paid: ${booking.paidAmount}</div>
                    </td>
                    <td className="px-5 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[booking.status]}`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <BookingStatusUpdater bookingId={booking.id} currentStatus={booking.status} />
                    </td>
                    <td className="px-5 py-4">
                      <BookingEditorButton bookingId={booking.id} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
