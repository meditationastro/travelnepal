'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

/**
 * Lightweight placeholder to satisfy builds.
 * Replace with real product upload integration (S3/Cloudinary/DB) when ready.
 */
export default function ProductUploadForm() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  return (
    <div className="bg-white rounded-2xl border border-stone-100 p-6 space-y-4">
      <div>
        <h3 className="font-semibold text-stone-900">Add Product</h3>
        <p className="text-sm text-stone-500">Quick placeholder form (build-safe). Submits to Netlify Forms.</p>
      </div>

      <form name="product-upload" method="POST" data-netlify="true" className="space-y-4">
        <input type="hidden" name="form-name" value="product-upload" />

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="product-name">Product name</Label>
            <Input id="product-name" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Example: Herbal Tea" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="product-price">Price</Label>
            <Input id="product-price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Example: 19" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="product-image">Image URL (optional)</Label>
          <Input id="product-image" name="image" placeholder="https://..." />
        </div>

        <div className="flex items-center gap-3">
          <Button type="submit">Save</Button>
          <span className="text-xs text-stone-400">(You can upgrade to real admin uploads later.)</span>
        </div>
      </form>
    </div>
  );
}
