'use client';
import { useState } from 'react';
import { Eye, EyeOff, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function TestimonialActions({ testimonialId, isPublished }: { testimonialId: string; isPublished: boolean }) {
  const router = useRouter();
  const [published, setPublished] = useState(isPublished);
  const [loading, setLoading] = useState(false);

  const toggle = async () => {
    setLoading(true);
    const res = await fetch(`/api/admin/testimonials/${testimonialId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isPublished: !published }),
    });
    if (res.ok) setPublished(!published);
    setLoading(false);
  };

  const remove = async () => {
    if (!confirm('Delete this testimonial?')) return;
    await fetch(`/api/admin/testimonials/${testimonialId}`, { method: 'DELETE' });
    router.refresh();
  };

  return (
    <div className="flex items-center gap-2 flex-shrink-0">
      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${published ? 'bg-green-100 text-green-700' : 'bg-stone-100 text-stone-500'}`}>
        {published ? 'Published' : 'Draft'}
      </span>
      <button onClick={toggle} disabled={loading}
        className="p-1.5 rounded-lg hover:bg-stone-100 text-stone-400 hover:text-stone-700 transition-colors"
        title={published ? 'Unpublish' : 'Publish'}>
        {published ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
      </button>
      <button onClick={remove}
        className="p-1.5 rounded-lg hover:bg-red-50 text-stone-400 hover:text-red-500 transition-colors">
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
}
