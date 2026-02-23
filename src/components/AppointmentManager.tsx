'use client';

import { useMemo, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

type Appt = {
  id: string;
  name: string;
  service: string;
  date: string;
  time: string;
  status: 'REQUESTED' | 'CONFIRMED' | 'COMPLETED';
};

const seed: Appt[] = [
  { id: 'a1', name: 'Dinesh', service: 'Vedic Consultation', date: '2026-03-01', time: '10:00', status: 'REQUESTED' },
  { id: 'a2', name: 'Sarah', service: 'Travel Planning', date: '2026-03-02', time: '16:30', status: 'CONFIRMED' },
];

export default function AppointmentManager() {
  const [q, setQ] = useState('');
  const [rows, setRows] = useState<Appt[]>(seed);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return rows;
    return rows.filter(r => (r.name + ' ' + r.service + ' ' + r.status).toLowerCase().includes(s));
  }, [q, rows]);

  const nextStatus = (s: Appt['status']): Appt['status'] => (s === 'REQUESTED' ? 'CONFIRMED' : s === 'CONFIRMED' ? 'COMPLETED' : 'REQUESTED');

  return (
    <Card className="rounded-3xl">
      <CardHeader>
        <CardTitle>Appointments</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div className="max-w-md w-full"><Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search name/service/status…" /></div>
          <div className="text-xs text-stone-500">Placeholder manager (safe for build).</div>
        </div>

        <div className="divide-y divide-stone-50 rounded-2xl border border-stone-100 overflow-hidden">
          <div className="grid grid-cols-12 bg-stone-50 px-4 py-2 text-xs text-stone-500">
            <div className="col-span-4">Name</div>
            <div className="col-span-4">Service</div>
            <div className="col-span-2">When</div>
            <div className="col-span-2 text-right">Status</div>
          </div>
          {filtered.map(r => (
            <div key={r.id} className="grid grid-cols-12 px-4 py-3 items-center">
              <div className="col-span-4 text-sm font-medium text-stone-900">{r.name}</div>
              <div className="col-span-4 text-sm text-stone-700">{r.service}</div>
              <div className="col-span-2 text-xs text-stone-500">{r.date} {r.time}</div>
              <div className="col-span-2 flex justify-end">
                <Button variant="outline" className="h-8 rounded-xl" onClick={() => setRows(prev => prev.map(x => x.id === r.id ? { ...x, status: nextStatus(x.status) } : x))}>
                  {r.status}
                </Button>
              </div>
            </div>
          ))}
          {filtered.length === 0 && <div className="px-4 py-8 text-center text-sm text-stone-400">No appointments.</div>}
        </div>
      </CardContent>
    </Card>
  );
}
