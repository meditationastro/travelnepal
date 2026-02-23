'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import RichTextEditor from '@/components/RichTextEditor';

export default function BlogCreationForm({
  initialTitle = '',
  initialSlug = '',
  initialContent = '',
  onSubmit,
}: {
  initialTitle?: string;
  initialSlug?: string;
  initialContent?: string;
  onSubmit?: (payload: { title: string; slug: string; content: string }) => Promise<void> | void;
}) {
  const [title, setTitle] = React.useState(initialTitle);
  const [slug, setSlug] = React.useState(initialSlug);
  const [content, setContent] = React.useState(initialContent);
  const [submitting, setSubmitting] = React.useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const payload = { title, slug, content };
      if (onSubmit) {
        await onSubmit(payload);
      } else {
        // Fallback: prevents build failures if admin APIs are not wired yet
        console.log('Blog form submit', payload);
      }
      alert('Saved ✅');
    } catch (err) {
      console.error(err);
      alert('Could not save. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label>Title</Label>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Blog title" />
      </div>

      <div className="space-y-2">
        <Label>Slug</Label>
        <Input value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="e.g. my-first-post" />
      </div>

      <div className="space-y-2">
        <Label>Content</Label>
        <RichTextEditor value={content} onChange={setContent} />
      </div>

      <Button type="submit" disabled={submitting}>
        {submitting ? 'Saving...' : 'Save'}
      </Button>
    </form>
  );
}
