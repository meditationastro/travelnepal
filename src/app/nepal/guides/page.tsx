import Link from 'next/link';
import { NEPAL_GUIDES } from '@/data/guides/nepalGuides';

export const dynamic = 'force-static';

export const metadata = {
  title: 'All Nepal Guides | Himalaya Retreat Nepal',
  description: 'Browse Nepal travel guides: visa, safety, culture, trekking, packing, temples, and retreat-friendly planning.',
};

export default function NepalGuidesIndexPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-stone-950 to-stone-900 pt-24 pb-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <div className="text-4xl">🇳🇵</div>
            <h1 className="text-3xl md:text-5xl font-semibold text-stone-100 mt-2">All Nepal Guides</h1>
            <p className="text-stone-300 mt-3 max-w-2xl">
              Practical, retreat-friendly information. Pick a topic and start planning.
            </p>
          </div>
          <Link href="/travel-consultant" className="inline-flex items-center rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-stone-950 hover:bg-amber-400 transition">
            Get travel help ✈️
          </Link>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {NEPAL_GUIDES.map((g) => (
            <Link key={g.slug} href={`/nepal/guides/${g.slug}`} className="group rounded-3xl border border-stone-800 bg-stone-950/40 p-6 hover:bg-stone-900/40 transition shadow-xl">
              <div className="flex items-start justify-between gap-4">
                <div className="text-3xl">{g.emoji}</div>
                <div className="text-xs text-stone-400 border border-stone-800 rounded-full px-2 py-1">{g.tags[0]}</div>
              </div>
              <h2 className="text-xl font-semibold text-stone-100 mt-4 group-hover:text-amber-200 transition">{g.title}</h2>
              <p className="text-stone-300 mt-2">{g.excerpt}</p>
              <div className="mt-4 text-amber-400 font-semibold group-hover:text-amber-300 transition">Open guide →</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
