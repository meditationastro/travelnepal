
'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Product = {
  id: string;
  name: string;
  priceNpr: number;
};

const seed: Product[] = [
  { id: 'p1', name: 'Himalayan Herbal Tea', priceNpr: 1200 },
  { id: 'p2', name: 'Rudraksha Mala', priceNpr: 2200 },
  { id: 'p3', name: 'Temple Incense Pack', priceNpr: 800 },
];

export default function ProductManager() {
  const [items, setItems] = React.useState<Product[]>(seed);

  return (
    <Card className="rounded-3xl border-stone-200/20 bg-white/5">
      <CardHeader>
        <CardTitle className="text-lg">Products</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3">
        {items.map((p) => (
          <div
            key={p.id}
            className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
          >
            <div>
              <div className="font-medium text-white">{p.name}</div>
              <div className="text-xs text-white/60">NPR {p.priceNpr}</div>
            </div>
            <Button variant="outline" onClick={() => setItems((prev) => prev.filter((x) => x.id !== p.id))}>
              Remove
            </Button>
          </div>
        ))}

        <p className="text-xs text-white/60">
          Placeholder manager (build-safe). Hook to Prisma/API for real CRUD.
        </p>
      </CardContent>
    </Card>
  );
}
