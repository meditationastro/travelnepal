'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

/**
 * Build-safe gallery uploader placeholder.
 * Uses Netlify Forms so you can receive submissions without backend.
 */
export default function GalleryUploadForm() {
  const [title, setTitle] = useState('');

  return (
    <div className="bg-white rounded-2xl border border-stone-100 p-6 space-y-4">
      <div>
        <h3 className="font-semibold text-stone-900">Add Gallery Image</h3>
        <p className="text-sm text-stone-500">Submit an image URL + title (placeholder). Replace with DB later.</p>
      </div>

      <form name="gallery-upload" method="POST" data-netlify="true" className="space-y-4">
        <input type="hidden" name="form-name" value="gallery-upload" />

        <div className="space-y-2">
          <Label htmlFor="gallery-title">Title</Label>
          <Input id="gallery-title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Example: Sunrise over Annapurna" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="gallery-src">Image URL</Label>
          <Input id="gallery-src" name="src" placeholder="https://..." />
        </div>

        <div className="space-y-2">
          <Label htmlFor="gallery-tags">Tags (optional)</Label>
          <Input id="gallery-tags" name="tags" placeholder="trekking, nepal, retreat" />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
