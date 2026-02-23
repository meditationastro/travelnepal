'use client';

import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

type BlogRow = {
  id: string;
  title: string;
  slug: string;
  status: 'PUBLIC' | 'DRAFT' | 'HIDDEN';
};

const seed: BlogRow[] = [
  { id: 'seed-1', title: 'Retreat in Nepal: What to Expect', slug: 'retreat-in-nepal-what-to-expect', status: 'PUBLIC' },
  { id: 'seed-2', title: 'Vedic Astrology: Lagna Basics', slug: 'vedic-astrology-lagna-basics', status: 'DRAFT' },
  { id: 'seed-3', title: 'Meditation in the Himalayas', slug: 'meditation-in-the-himalayas', status: 'HIDDEN' },
];

export default function BlogVisibilityManager() {
  const [q, setQ] = useState('');
  const [rows, setRows] = useState<BlogRow[]>(seed);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return rows;
    return rows.filter(r => (r.title + ' ' + r.slug).toLowerCase().includes(s));
  }, [q, rows]);

  const cycle = (status: BlogRow['status']): BlogRow['status'] => {
    if (status === 'PUBLIC') return 'HIDDEN';
    if (status === 'HIDDEN') return 'DRAFT';
    return 'PUBLIC';
  };

  return (
    <Card className="rounded-3xl">
      <CardHeader>
        <CardTitle>Blog Visibility</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div className="max-w-md w-full">
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search title or slug…" />
          </div>
          <div className="text-xs text-stone-500">This is a build-safe placeholder UI. Hook it to DB later.</div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-stone-100">
          <div className="grid grid-cols-12 bg-stone-50 px-4 py-2 text-xs text-stone-500">
            <div className="col-span-6">Title</div>
            <div className="col-span-4">Slug</div>
            <div className="col-span-2 text-right">Status</div>
          </div>
          <div className="divide-y divide-stone-50">
            {filtered.map((r) => (
              <div key={r.id} className="grid grid-cols-12 px-4 py-3 items-center">
                <div className="col-span-6 text-sm font-medium text-stone-800">{r.title}</div>
                <div className="col-span-4 text-xs text-stone-500">/{r.slug}</div>
                <div className="col-span-2 flex justify-end">
                  <Button
                    variant="outline"
                    className="h-8 rounded-xl"
                    onClick={() => setRows(prev => prev.map(x => x.id === r.id ? { ...x, status: cycle(x.status) } : x))}
                  >
                    {r.status}
                  </Button>
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="px-4 py-8 text-center text-sm text-stone-400">No posts found.</div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
