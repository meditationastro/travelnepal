
'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Props = {
  onUploaded?: () => void;
};

export default function GalleryUploadForm({ onUploaded }: Props) {
  const [saving, setSaving] = React.useState(false);

  return (
    <Card className="rounded-3xl border-stone-200/20 bg-white/5">
      <CardHeader>
        <CardTitle className="text-lg">Add Gallery Image</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          className="grid gap-4"
          onSubmit={async (e) => {
            e.preventDefault();
            setSaving(true);
            await new Promise((r) => setTimeout(r, 600));
            setSaving(false);
            onUploaded?.();
            (e.currentTarget as HTMLFormElement).reset();
          }}
        >
          <div className="grid gap-2">
            <Label htmlFor="galleryTitle">Title</Label>
            <Input id="galleryTitle" name="galleryTitle" placeholder="Sunrise in Pokhara" required />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="gallerySrc">Image URL</Label>
            <Input id="gallerySrc" name="gallerySrc" placeholder="https://..." required />
          </div>

          <Button type="submit" disabled={saving}>
            {saving ? 'Uploading...' : 'Add image'}
          </Button>

          <p className="text-xs text-white/60">
            Placeholder uploader (build-safe). Replace with real upload storage anytime.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
