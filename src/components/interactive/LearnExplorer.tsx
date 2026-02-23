'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Sparkles, Search, Compass, BookOpen, Mountain, Stars } from 'lucide-react';
import { SEO_CATEGORIES, getPagesByCategory } from '@/lib/seoPages';

const labels: Record<string, { title: string; icon: any; blurb: string; color: string }> = {
  meditation: { title: 'Meditation', icon: Compass, blurb: 'Breath, stillness, nervous system reset.', color: '#C5A253' },
  astrology: { title: 'Vedic Astrology', icon: Stars, blurb: 'Birth chart basics + remedies + timing.', color: '#7c2d12' },
  nepali: { title: 'Learn Nepali', icon: BookOpen, blurb: 'Useful phrases for Nepal travel & life.', color: '#2563eb' },
  'explore-nepal': { title: 'Explore Nepal', icon: Mountain, blurb: 'Visa, culture, food, safety, transport.', color: '#16a34a' },
};

type Choice = 'peace' | 'travel' | 'jyotish' | 'language' | 'all';

export default function LearnExplorer() {
  const [choice, setChoice] = useState<Choice>('all');
  const [q, setQ] = useState('');

  const recommendedCats = useMemo(() => {
    if (choice === 'peace') return ['meditation', 'inner-journey'];
    if (choice === 'travel') return ['explore-nepal', 'nepal'];
    if (choice === 'jyotish') return ['astrology', 'vedic-astrology'];
    if (choice === 'language') return ['nepali', 'learn-nepali-online'];
    return SEO_CATEGORIES;
  }, [choice]);

  const quickHits = useMemo(() => {
    const pages = recommendedCats.flatMap((c) => {
      try {
        return getPagesByCategory(c);
      } catch {
        return [];
      }
    });
    const needle = q.trim().toLowerCase();
    const filtered = needle
      ? pages.filter((p) => (p.title + ' ' + (p.description || '')).toLowerCase().includes(needle))
      : pages;
    return filtered.slice(0, 8);
  }, [recommendedCats, q]);

  return (
    <section className="rounded-3xl border bg-white p-6 md:p-8 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold"
            style={{ background: 'rgba(197,162,83,0.14)', color: '#8B6914', border: '1px solid rgba(197,162,83,0.28)' }}>
            <Sparkles className="w-4 h-4" /> Quick learning path
          </div>
          <h2 className="mt-4 font-display text-3xl font-semibold text-stone-900">What do you want to learn today?</h2>
          <p className="mt-2 text-stone-600 max-w-2xl">Choose a vibe, search topics, and jump into the most useful pages. Everything here is designed for fast reading + practical action.</p>
        </div>

        <div className="w-full md:w-[360px]">
          <label className="text-xs font-semibold text-stone-600">Search</label>
          <div className="mt-1 flex items-center gap-2 rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3">
            <Search className="w-4 h-4 text-stone-500" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Try: visa, nakshatra, mantra, trek…" className="w-full bg-transparent outline-none text-sm" />
          </div>
        </div>
      </div>

      <div className="mt-6 grid sm:grid-cols-5 gap-2">
        {([
          { key: 'all', label: '✨ Everything' },
          { key: 'peace', label: '🧘 Calm mind' },
          { key: 'jyotish', label: '🪐 Jyotish' },
          { key: 'travel', label: '🏔️ Nepal travel' },
          { key: 'language', label: '🗣️ Nepali' },
        ] as const).map((b) => (
          <button
            key={b.key}
            onClick={() => setChoice(b.key)}
            className={`rounded-2xl px-4 py-3 text-sm font-semibold border transition-all ${choice === b.key ? 'bg-stone-900 text-white border-stone-900' : 'bg-white hover:bg-stone-50 border-stone-200'}`}
          >
            {b.label}
          </button>
        ))}
      </div>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="rounded-3xl border border-stone-100 bg-stone-50 p-6">
          <h3 className="font-display text-xl font-semibold text-stone-900">Recommended topics</h3>
          <p className="text-sm text-stone-600 mt-1">Pick a section and explore. (All pages are server-rendered for speed.)</p>
          <div className="mt-4 grid sm:grid-cols-2 gap-3">
            {recommendedCats.slice(0, 4).map((c) => {
              const meta = labels[c] || { title: c, icon: Compass, blurb: 'Explore guides and tools.', color: '#C5A253' };
              const Icon = meta.icon;
              return (
                <Link key={c} href={`/learn/${c}`} className="group rounded-3xl bg-white border border-stone-100 p-5 hover:shadow-sm transition-all">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: `${meta.color}20` }}>
                      <Icon className="w-5 h-5" style={{ color: meta.color }} />
                    </div>
                    <div>
                      <div className="font-semibold text-stone-900 group-hover:underline">{meta.title}</div>
                      <div className="text-xs text-stone-600 mt-1">{meta.blurb}</div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="rounded-3xl border border-stone-100 bg-white p-6">
          <h3 className="font-display text-xl font-semibold text-stone-900">Quick hits</h3>
          <p className="text-sm text-stone-600 mt-1">Top pages matched to your selection/search.</p>
          <ul className="mt-4 space-y-2">
            {quickHits.map((p) => (
              <li key={`${p.category}-${p.slug}`} className="flex items-center justify-between gap-3 rounded-2xl border border-stone-100 px-4 py-3 hover:bg-stone-50">
                <Link className="font-medium text-stone-900 hover:underline" href={`/learn/${p.category}/${p.slug}`}>{p.title}</Link>
                <span className="text-[11px] text-stone-500">{p.category}</span>
              </li>
            ))}
            {quickHits.length === 0 && <li className="text-sm text-stone-500">No results. Try a different keyword.</li>}
          </ul>
        </div>
      </div>
    </section>
  );
}
