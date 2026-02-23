'use client';

import { useMemo, useState } from 'react';
import { HERBS_108, type Herb108 } from '@/data/ayurveda/herbs108';
import { Search, X } from 'lucide-react';

export default function HerbsCatalog() {
  const [q, setQ] = useState('');
  const [active, setActive] = useState<Herb108 | null>(null);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return HERBS_108;
    return HERBS_108.filter(h =>
      h.name.toLowerCase().includes(s) ||
      h.dosha.toLowerCase().includes(s) ||
      h.actions.toLowerCase().includes(s) ||
      h.taste.toLowerCase().includes(s)
    );
  }, [q]);

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-stone-100">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h3 className="font-display text-2xl font-semibold text-stone-900">108 Himalayan Herbs (Ayurveda)</h3>
          <p className="text-stone-600 text-sm mt-1">Search by herb name, dosha, taste, or action. Tap a card for details.</p>
        </div>
        <div className="relative w-full md:w-[360px]">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search: vata, digestion, bitter, tulsi…"
            className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-10 py-3 text-sm outline-none focus:ring-2 focus:ring-amber-300"
          />
          {q && (
            <button
              onClick={() => setQ('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((h) => (
          <button
            key={h.name}
            onClick={() => setActive(h)}
            className="text-left rounded-3xl border border-stone-100 bg-gradient-to-b from-white to-stone-50 p-5 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="font-semibold text-stone-900">{h.name}</div>
                <div className="text-xs text-stone-500 mt-1">{h.part} · {h.dosha}</div>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: 'rgba(197,162,83,0.18)', color: '#8B6914', border: '1px solid rgba(197,162,83,0.35)' }}>
                🌿
              </span>
            </div>
            <div className="text-sm text-stone-700 mt-3 line-clamp-2">{h.actions}</div>
            <div className="text-xs text-stone-500 mt-2">Taste: {h.taste}</div>
          </button>
        ))}
      </div>

      {/* Modal */}
      {active && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <button className="absolute inset-0 bg-black/50" onClick={() => setActive(null)} aria-label="Close" />
          <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-stone-100">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h4 className="font-display text-3xl font-semibold text-stone-900">{active.name}</h4>
                <p className="text-stone-600 text-sm mt-1">{active.part} · Balances: {active.dosha}</p>
              </div>
              <button onClick={() => setActive(null)} className="rounded-full p-2 hover:bg-stone-100" aria-label="Close">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="rounded-2xl p-4" style={{ background: '#fdf8f0', border: '1px solid #f0e6d6' }}>
                <div className="text-xs font-bold text-stone-500 uppercase tracking-wider">Key actions</div>
                <div className="text-stone-800 mt-2">{active.actions}</div>
              </div>
              <div className="rounded-2xl p-4" style={{ background: '#f5f0e8', border: '1px solid #eadfce' }}>
                <div className="text-xs font-bold text-stone-500 uppercase tracking-wider">Taste & energetics</div>
                <div className="text-stone-800 mt-2">{active.taste}</div>
              </div>
            </div>

            <div className="rounded-2xl p-4 mt-4 border border-stone-100 bg-stone-50">
              <div className="text-xs font-bold text-stone-500 uppercase tracking-wider">Traditional uses</div>
              <p className="text-stone-700 mt-2 leading-relaxed">{active.uses}</p>
            </div>

            <div className="rounded-2xl p-4 mt-4" style={{ background: 'rgba(197,162,83,0.10)', border: '1px solid rgba(197,162,83,0.25)' }}>
              <div className="text-xs font-bold uppercase tracking-wider" style={{ color: '#8B6914' }}>Safety note</div>
              <p className="text-stone-700 mt-2 text-sm leading-relaxed">{active.caution}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <a
                href="https://wa.me/9779851187267?text=Namaste! I want an Ayurvedic herb recommendation (dosha + symptoms)."
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full font-semibold text-white text-center"
                style={{ background: '#25D366' }}
              >
                💬 Ask an Ayurvedic Doctor
              </a>
              <a
                href="/ayurveda/dosha"
                className="px-6 py-3 rounded-full font-semibold text-stone-900 text-center"
                style={{ background: 'linear-gradient(135deg, #C5A253, #E8C870)' }}
              >
                🌿 Discover Your Dosha
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
