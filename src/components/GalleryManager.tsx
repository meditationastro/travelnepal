
'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Item = {
  id: string;
  title: string;
  src: string;
};

const seed: Item[] = [
  { id: 'g1', title: 'Pashupatinath Temple', src: '/images/gallery/pashupati.jpg' },
  { id: 'g2', title: 'Himalayan Sunrise', src: '/images/gallery/sunrise.jpg' },
  { id: 'g3', title: 'Prayer Flags', src: '/images/gallery/flags.jpg' },
];

export default function GalleryManager() {
  const [items, setItems] = React.useState<Item[]>(seed);

  return (
    <Card className="rounded-3xl border-stone-200/20 bg-white/5">
      <CardHeader>
        <CardTitle className="text-lg">Gallery</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3">
        {items.map((it) => (
          <div
            key={it.id}
            className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
          >
            <div>
              <div className="font-medium text-white">{it.title}</div>
              <div className="text-xs text-white/60">{it.src}</div>
            </div>
            <Button variant="outline" onClick={() => setItems((prev) => prev.filter((x) => x.id !== it.id))}>
              Remove
            </Button>
          </div>
        ))}

        <p className="text-xs text-white/60">
          Placeholder manager (build-safe). Replace seed items with DB records later.
        </p>
      </CardContent>
    </Card>
  );
}
