'use client';
import { useState } from 'react';

const statuses = ['PENDING', 'CONFIRMED', 'COMPLETED', 'CANCELLED'];

export function BookingStatusUpdater({ bookingId, currentStatus }: { bookingId: string; currentStatus: string }) {
  const [status, setStatus] = useState(currentStatus);
  const [loading, setLoading] = useState(false);

  const update = async (newStatus: string) => {
    setLoading(true);
    const res = await fetch(`/api/admin/bookings/${bookingId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus }),
    });
    if (res.ok) setStatus(newStatus);
    setLoading(false);
  };

  return (
    <select
      value={status}
      onChange={e => update(e.target.value)}
      disabled={loading}
      className="text-xs border border-stone-200 rounded-lg px-2 py-1.5 bg-white text-stone-700 focus:outline-none focus:border-yellow-400 cursor-pointer"
    >
      {statuses.map(s => <option key={s} value={s}>{s}</option>)}
    </select>
  );
}
