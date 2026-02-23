'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

type Booking = {
  id: string;
  status: string;
  roomType: string;
  totalAmount: number;
  paidAmount: number;
  notes: string | null;
};

export function BookingEditorButton({ bookingId }: { bookingId: string }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [booking, setBooking] = useState<Booking | null>(null);

  useEffect(() => {
    if (!open) return;
    setLoading(true);
    fetch(`/api/admin/bookings/${bookingId}`, { cache: 'no-store' })
      .then(r => r.json())
      .then(data => setBooking(data))
      .finally(() => setLoading(false));
  }, [open, bookingId]);

  const save = async () => {
    if (!booking) return;
    setSaving(true);
    try {
      await fetch(`/api/admin/bookings/${bookingId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          paidAmount: booking.paidAmount,
          totalAmount: booking.totalAmount,
          roomType: booking.roomType,
          notes: booking.notes,
        }),
      });
      window.location.reload();
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-xs px-2.5 py-1.5 rounded-lg border border-stone-200 hover:bg-stone-50 text-stone-700 font-medium"
      >
        Edit
      </button>

      {open && (
        <div className="fixed inset-0 z-[200] bg-black/50 flex items-center justify-center p-4" onClick={() => setOpen(false)}>
          <div className="bg-white rounded-3xl p-7 max-w-lg w-full shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-xl font-semibold text-stone-900">Edit booking</h3>
              <button onClick={() => setOpen(false)} className="p-2 rounded-full hover:bg-stone-100"><X className="w-5 h-5" /></button>
            </div>

            {loading || !booking ? (
              <div className="text-sm text-stone-400">Loading…</div>
            ) : (
              <div className="space-y-4">
                <label className="block">
                  <div className="text-xs text-stone-400 mb-1">Room type</div>
                  <select value={booking.roomType} onChange={e => setBooking(b => b ? ({ ...b, roomType: e.target.value }) : b)} className="w-full border border-stone-200 rounded-xl px-3 py-2 text-sm">
                    {['SHARED','PRIVATE','DELUXE'].map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                </label>

                <div className="grid grid-cols-2 gap-3">
                  <label>
                    <div className="text-xs text-stone-400 mb-1">Total amount</div>
                    <input type="number" value={booking.totalAmount} onChange={e => setBooking(b => b ? ({ ...b, totalAmount: Number(e.target.value) }) : b)} className="w-full border border-stone-200 rounded-xl px-3 py-2 text-sm" />
                  </label>
                  <label>
                    <div className="text-xs text-stone-400 mb-1">Paid amount</div>
                    <input type="number" value={booking.paidAmount} onChange={e => setBooking(b => b ? ({ ...b, paidAmount: Number(e.target.value) }) : b)} className="w-full border border-stone-200 rounded-xl px-3 py-2 text-sm" />
                  </label>
                </div>

                <label className="block">
                  <div className="text-xs text-stone-400 mb-1">Internal notes</div>
                  <textarea value={booking.notes || ''} onChange={e => setBooking(b => b ? ({ ...b, notes: e.target.value }) : b)} className="w-full border border-stone-200 rounded-xl px-3 py-2 text-sm min-h-[90px]" />
                </label>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button onClick={() => setOpen(false)} className="px-4 py-2 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50 text-sm">Cancel</button>
                  <button onClick={save} disabled={saving} className="px-4 py-2 rounded-xl bg-amber-600 text-white hover:bg-amber-700 text-sm font-semibold disabled:opacity-60">{saving ? 'Saving…' : 'Save'}</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
