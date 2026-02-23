'use client';

import { Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function DeleteBlogButton({ postId }: { postId: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onDelete = async () => {
    if (!confirm('Delete this post?')) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/blog/${postId}`, { method: 'DELETE' });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        alert((data as any).error || 'Failed to delete');
        return;
      }
      router.refresh();
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={onDelete}
      disabled={loading}
      className="p-1.5 rounded-lg hover:bg-red-50 text-stone-400 hover:text-red-500 transition-colors disabled:opacity-50"
      aria-label="Delete post"
      title="Delete"
    >
      <Trash2 className="w-4 h-4" />
    </button>
  );
}
