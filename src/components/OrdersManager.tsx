
'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Order = {
  id: string;
  customer: string;
  total: string;
  status: 'PAID' | 'PENDING' | 'REFUNDED';
};

const seed: Order[] = [
  { id: 'o1', customer: 'Guest User', total: 'NPR 12,000', status: 'PAID' },
  { id: 'o2', customer: 'Tim', total: 'NPR 8,500', status: 'PENDING' },
];

export default function OrdersManager() {
  const [items, setItems] = React.useState<Order[]>(seed);

  return (
    <Card className="rounded-3xl border-stone-200/20 bg-white/5">
      <CardHeader>
        <CardTitle className="text-lg">Orders</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3">
        {items.map((o) => (
          <div
            key={o.id}
            className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
          >
            <div>
              <div className="font-medium text-white">{o.customer}</div>
              <div className="text-xs text-white/60">
                {o.total} • {o.status}
              </div>
            </div>
            <Button variant="outline" onClick={() => setItems((prev) => prev.filter((x) => x.id !== o.id))}>
              Archive
            </Button>
          </div>
        ))}

        <p className="text-xs text-white/60">
          Placeholder orders list (build-safe). Hook to payments/orders table later.
        </p>
      </CardContent>
    </Card>
  );
}
