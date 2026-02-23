
'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Props = {
  onUploaded?: () => void;
};

export default function ProductUploadForm({ onUploaded }: Props) {
  const [saving, setSaving] = React.useState(false);

  return (
    <Card className="rounded-3xl border-stone-200/20 bg-white/5">
      <CardHeader>
        <CardTitle className="text-lg">Add Product</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          className="grid gap-4"
          onSubmit={async (e) => {
            e.preventDefault();
            setSaving(true);
            // Placeholder: integrate your DB/API later.
            await new Promise((r) => setTimeout(r, 600));
            setSaving(false);
            onUploaded?.();
            (e.currentTarget as HTMLFormElement).reset();
          }}
        >
          <div className="grid gap-2">
            <Label htmlFor="productName">Product name</Label>
            <Input id="productName" name="productName" placeholder="Herbal tea, Mala, Incense..." required />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="productPrice">Price (NPR)</Label>
            <Input id="productPrice" name="productPrice" type="number" min={0} step="1" placeholder="1200" required />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="productImage">Image URL</Label>
            <Input id="productImage" name="productImage" placeholder="https://..." />
          </div>

          <Button type="submit" disabled={saving}>
            {saving ? 'Saving...' : 'Save product'}
          </Button>

          <p className="text-xs text-white/60">
            Note: This is a build-safe placeholder. Connect it to your DB/API whenever you’re ready.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
