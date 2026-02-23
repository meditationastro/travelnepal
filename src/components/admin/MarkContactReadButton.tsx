'use client';

import { useState } from 'react';

export function MarkContactReadButton({ id }: { id: string }) {
  const [loading, setLoading] = useState(false);

  const mark = async () => {
    setLoading(true);
    try {
      await fetch(`/api/admin/contacts/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ read: true }),
      });
      // Simple refresh to update server component list
      window.location.reload();
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={mark}
      disabled={loading}
      className="text-xs px-3 py-1.5 rounded-lg bg-amber-50 text-amber-700 hover:bg-amber-100 font-medium disabled:opacity-60"
    >
      {loading ? 'Saving…' : 'Mark read'}
    </button>
  );
}
