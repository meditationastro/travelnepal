import Link from 'next/link';
import { SEO_CATEGORIES, getPagesByCategory } from '@/lib/seoPages';
import LearnExplorer from '@/components/interactive/LearnExplorer';

const CATEGORY_LABELS: Record<string, string> = {
  meditation: 'Meditation',
  astrology: 'Astrology',
  nepali: 'Learn Nepali Online',
  'explore-nepal': 'Explore Nepal',
  'treks-abc': 'ABC Trekking',
  'treks-ebc': 'EBC Trekking',
  'spiritual-immersion': 'Spiritual Immersion',
};

export default function LearnPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="rounded-3xl p-10 mb-10" style={{ background: 'linear-gradient(135deg, #0f1f0f, #1c1917)' }}>
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold" style={{ background: 'rgba(197,162,83,0.18)', color: '#E8C870', border: '1px solid rgba(197,162,83,0.28)' }}>
            📚 Learn Hub • Nepal • Meditation • Jyotish • Language
          </div>
          <h1 className="mt-5 font-display text-4xl md:text-5xl text-white font-semibold">Learn, practice, and transform</h1>
          <p className="mt-3 text-stone-300 text-lg">
            Bite-sized guides that lead to real action: a calmer mind, a clearer chart, a smoother Nepal trip, and a deeper spiritual path.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/vedic-astrology" className="inline-flex items-center justify-center rounded-2xl px-6 py-3 font-semibold text-stone-900" style={{ background: 'linear-gradient(135deg, #C5A253, #E8C870)' }}>
              🔮 Try the Birth Chart Tool
            </Link>
            <Link href="/travel-consultant" className="inline-flex items-center justify-center rounded-2xl px-6 py-3 font-semibold text-white border border-white/20 hover:bg-white/10">
              ✈️ Get Travel Consultant
            </Link>
          </div>
        </div>
      </div>

      <LearnExplorer />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {SEO_CATEGORIES.map((cat) => {
          const pages = getPagesByCategory(cat).slice(0, 4);
          return (
            <div key={cat} className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-xl font-semibold">{CATEGORY_LABELS[cat] ?? cat}</h2>
                <Link className="text-sm text-primary hover:underline" href={`/learn/${cat}`}>View all</Link>
              </div>
              <ul className="mt-4 space-y-2">
                {pages.map((p) => (
                  <li key={p.slug}>
                    <Link className="hover:underline" href={`/learn/${p.category}/${p.slug}`}>{p.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </main>
  );
}
