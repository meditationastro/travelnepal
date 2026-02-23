'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export default function TestimonialUploadForm() {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [quote, setQuote] = useState('');
  const [rating, setRating] = useState(5);
  const [saved, setSaved] = useState(false);

  return (
    <Card className="rounded-3xl">
      <CardHeader>
        <CardTitle>Add Testimonial</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Name</Label>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Guest name" />
          </div>
          <div className="space-y-2">
            <Label>Country</Label>
            <Input value={country} onChange={(e) => setCountry(e.target.value)} placeholder="e.g. Nepal / USA" />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label>Testimonial</Label>
            <textarea className="w-full rounded-2xl border border-stone-200 p-3 text-sm" rows={5}
              value={quote} onChange={(e) => setQuote(e.target.value)} placeholder="Write the experience…" />
          </div>
          <div className="space-y-2">
            <Label>Rating (1–5)</Label>
            <Input type="number" min={1} max={5} value={rating} onChange={(e) => setRating(parseInt(e.target.value || '5', 10))} />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button className="rounded-xl" onClick={() => setSaved(true)}>
            Save (Placeholder)
          </Button>
          {saved && <span className="text-sm text-green-600">Saved locally (connect DB later).</span>}
        </div>
      </CardContent>
    </Card>
  );
}
