'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export default function HomepageCMS() {
  const [headline, setHeadline] = useState('Spiritual Retreats in Nepal');
  const [sub, setSub] = useState('Yoga • Meditation • Ayurveda • Vedic Astrology');
  const [cta, setCta] = useState('Book Now');
  const [saved, setSaved] = useState(false);

  return (
    <Card className="rounded-3xl">
      <CardHeader>
        <CardTitle>Homepage CMS</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Hero Headline</Label>
            <Input value={headline} onChange={(e) => setHeadline(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>Hero Subtitle</Label>
            <Input value={sub} onChange={(e) => setSub(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>CTA Label</Label>
            <Input value={cta} onChange={(e) => setCta(e.target.value)} />
          </div>
        </div>

        <div className="rounded-2xl border border-stone-100 bg-stone-50 p-4">
          <div className="text-xs text-stone-500 mb-1">Preview</div>
          <div className="font-display text-xl font-semibold text-stone-900">{headline}</div>
          <div className="text-sm text-stone-600 mt-1">{sub}</div>
          <div className="mt-3 inline-flex items-center rounded-xl px-3 py-2 text-sm font-medium text-white" style={{ background: 'linear-gradient(135deg, #C5A253, #E8891A)' }}>
            {cta}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button className="rounded-xl" onClick={() => setSaved(true)}>Save (Placeholder)</Button>
          {saved && <span className="text-sm text-green-600">Saved locally (connect DB later).</span>}
        </div>
      </CardContent>
    </Card>
  );
}
