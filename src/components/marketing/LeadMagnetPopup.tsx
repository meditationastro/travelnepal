'use client';

import { useEffect, useMemo, useState } from 'react';

type LeadMagnetPopupProps = {
  storageKey?: string;
};

export function LeadMagnetPopup({ storageKey = 'lead_magnet_dismissed_v1' }: LeadMagnetPopupProps) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const canShow = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return !window.localStorage.getItem(storageKey);
  }, [storageKey]);

  useEffect(() => {
    if (!canShow) return;
    const t = window.setTimeout(() => setOpen(true), 9000);
    return () => window.clearTimeout(t);
  }, [canShow]);

  function close() {
    try {
      window.localStorage.setItem(storageKey, '1');
    } catch {}
    setOpen(false);
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    // lightweight: store as a contact message for admin inbox
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Newsletter Subscriber',
          email,
          service: 'Lead Magnet — Free Guided Meditation',
          message: 'Request: Send the free 10-minute Himalaya grounding meditation audio + Nepal retreat guide.',
        }),
      });
    } catch {}

    close();
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center bg-black/40 p-4 sm:items-center">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-wide text-muted-foreground">FREE GIFT</p>
            <h3 className="mt-1 text-xl font-semibold">10‑minute Guided Meditation + Nepal Retreat Checklist</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Get a calming audio practice + a practical packing & preparation checklist for spiritual retreat in Nepal.
            </p>
          </div>
          <button
            aria-label="Close"
            onClick={close}
            className="rounded-full border px-3 py-1 text-sm hover:bg-muted"
          >
            ✕
          </button>
        </div>

        <form onSubmit={submit} className="mt-4 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
          >
            Send it
          </button>
        </form>

        <p className="mt-3 text-xs text-muted-foreground">
          No spam. Unsubscribe anytime. We’ll also send occasional Nepal meditation & retreat updates.
        </p>
      </div>
    </div>
  );
}
