'use client';

import { useMemo, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

type Row = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
};

const seed: Row[] = [
  { id: 'c1', name: 'Asha', email: 'asha@example.com', message: 'I want a Panchakarma retreat plan.', createdAt: '2026-02-23' },
  { id: 'c2', name: 'Tim', email: 'tim@example.com', message: 'Can you help with Nepal visa + airport pickup?', createdAt: '2026-02-21' },
];

export default function ContactSubmissionsManager() {
  const [q, setQ] = useState('');
  const [rows, setRows] = useState<Row[]>(seed);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return rows;
    return rows.filter(r => (r.name + ' ' + r.email + ' ' + r.message).toLowerCase().includes(s));
  }, [q, rows]);

  return (
    <Card className="rounded-3xl">
      <CardHeader>
        <CardTitle>Contact Submissions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div className="max-w-md w-full"><Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search name/email/message…" /></div>
          <Button variant="outline" className="rounded-xl" onClick={() => setRows(seed)}>Reset Seed</Button>
        </div>

        <div className="space-y-3">
          {filtered.map(r => (
            <div key={r.id} className="rounded-2xl border border-stone-100 bg-white p-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <div className="font-medium text-stone-900">{r.name}</div>
                  <div className="text-xs text-stone-500">{r.email}</div>
                </div>
                <div className="text-xs text-stone-400">{r.createdAt}</div>
              </div>
              <p className="mt-3 text-sm text-stone-700">{r.message}</p>
            </div>
          ))}
          {filtered.length === 0 && <div className="text-center text-sm text-stone-400 py-8">No submissions found.</div>}
        </div>
      </CardContent>
    </Card>
  );
}
