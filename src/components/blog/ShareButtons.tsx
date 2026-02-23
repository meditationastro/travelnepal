'use client';

import { useMemo } from 'react';

export default function ShareButtons({ title }: { title: string }) {
  const url = useMemo(() => (typeof window !== 'undefined' ? window.location.href : ''), []);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  async function onNativeShare() {
    try {
      if (navigator.share) {
        await navigator.share({ title, url });
      }
    } catch {
      // ignore
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        type="button"
        onClick={onNativeShare}
        className="px-4 py-2 rounded-xl bg-stone-900 text-white text-sm hover:bg-stone-800"
      >
        Share
      </button>
      <a
        className="px-4 py-2 rounded-xl border border-stone-200 text-sm text-stone-700 hover:bg-stone-50"
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noreferrer"
      >
        X
      </a>
      <a
        className="px-4 py-2 rounded-xl border border-stone-200 text-sm text-stone-700 hover:bg-stone-50"
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noreferrer"
      >
        Facebook
      </a>
      <a
        className="px-4 py-2 rounded-xl border border-stone-200 text-sm text-stone-700 hover:bg-stone-50"
        href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>
    </div>
  );
}
