'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Plus, Trash2 } from 'lucide-react';
import { format } from 'date-fns';

export default function ManageDatesPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [program, setProgram] = useState<any>(null);
  const [dates, setDates] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [newDate, setNewDate] = useState({ startDate: '', endDate: '', seatsTotal: 12 });

  useEffect(() => {
    fetch(`/api/admin/programs/${params.id}`)
      .then(r => r.json())
      .then(data => { setProgram(data); setDates(data.dates || []); });
  }, [params.id]);

  const addDate = async () => {
    if (!newDate.startDate || !newDate.endDate) return;
    setLoading(true);
    const res = await fetch(`/api/admin/programs/${params.id}/dates`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...newDate, seatsTotal: Number(newDate.seatsTotal) }),
    });
    const date = await res.json();
    setDates(d => [...d, date]);
    setNewDate({ startDate: '', endDate: '', seatsTotal: 12 });
    setLoading(false);
  };

  const deleteDate = async (dateId: string) => {
    if (!confirm('Delete this date?')) return;
    await fetch(`/api/admin/programs/${params.id}/dates/${dateId}`, { method: 'DELETE' });
    setDates(d => d.filter(x => x.id !== dateId));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Link href="/admin/programs" className="p-2 rounded-xl hover:bg-stone-100 text-stone-400">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="font-display text-2xl font-semibold text-stone-900">Manage Dates</h1>
          <p className="text-stone-400 text-sm">{program?.title}</p>
        </div>
      </div>

      {/* Add new date */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
        <h3 className="font-semibold text-stone-900 mb-4">Add New Date</h3>
        <div className="grid sm:grid-cols-4 gap-4">
          <div>
            <label className="block text-xs font-medium text-stone-500 mb-1.5">Start Date</label>
            <input type="date" value={newDate.startDate}
              onChange={e => setNewDate(d => ({ ...d, startDate: e.target.value }))}
              className="input-himalaya w-full px-4 py-2.5 rounded-xl text-sm" />
          </div>
          <div>
            <label className="block text-xs font-medium text-stone-500 mb-1.5">End Date</label>
            <input type="date" value={newDate.endDate}
              onChange={e => setNewDate(d => ({ ...d, endDate: e.target.value }))}
              className="input-himalaya w-full px-4 py-2.5 rounded-xl text-sm" />
          </div>
          <div>
            <label className="block text-xs font-medium text-stone-500 mb-1.5">Total Seats</label>
            <input type="number" min="1" value={newDate.seatsTotal}
              onChange={e => setNewDate(d => ({ ...d, seatsTotal: Number(e.target.value) }))}
              className="input-himalaya w-full px-4 py-2.5 rounded-xl text-sm" />
          </div>
          <div className="flex items-end">
            <button onClick={addDate} disabled={loading}
              className="w-full py-2.5 rounded-xl btn-gold font-semibold text-white text-sm flex items-center justify-center gap-2">
              <Plus className="w-4 h-4" /> Add Date
            </button>
          </div>
        </div>
      </div>

      {/* Existing dates */}
      <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
        <div className="p-6 border-b border-stone-100">
          <h3 className="font-semibold text-stone-900">All Dates ({dates.length})</h3>
        </div>
        {dates.length === 0 ? (
          <div className="p-8 text-center text-stone-400">No dates added yet.</div>
        ) : (
          <div className="divide-y divide-stone-50">
            {dates.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()).map(date => {
              const isPast = new Date(date.endDate) < new Date();
              return (
                <div key={date.id} className={`px-6 py-4 flex items-center justify-between ${isPast ? 'opacity-50' : ''}`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-2 h-2 rounded-full ${isPast ? 'bg-stone-300' : date.seatsBooked >= date.seatsTotal ? 'bg-red-400' : 'bg-green-400'}`} />
                    <div>
                      <div className="font-medium text-stone-900 text-sm">
                        {format(new Date(date.startDate), 'MMM d')} – {format(new Date(date.endDate), 'MMM d, yyyy')}
                      </div>
                      <div className="text-stone-400 text-xs">
                        {date.seatsBooked}/{date.seatsTotal} seats booked
                        {isPast && ' · Past'}
                        {date.seatsBooked >= date.seatsTotal && !isPast && ' · Full'}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-sm text-stone-500">{date.seatsTotal - date.seatsBooked} available</div>
                    {!date.seatsBooked && (
                      <button onClick={() => deleteDate(date.id)}
                        className="p-1.5 rounded-lg hover:bg-red-50 text-stone-400 hover:text-red-500">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
