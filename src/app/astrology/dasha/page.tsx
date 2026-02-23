import Link from 'next/link';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Vimshottari Dasha Guide | Himalaya Retreat Nepal',
  description: 'Learn how dashas describe life timing in Vedic astrology, and how to use them for planning retreats and spiritual practice.',
};

export default function DashaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-stone-950 to-stone-900 pt-24 pb-16">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-stone-800 bg-stone-950/40 p-8 md:p-10 shadow-2xl">
          <div className="text-4xl">🪐</div>
          <h1 className="text-3xl md:text-5xl font-semibold text-stone-100 mt-3">Vimshottari Dasha Guide</h1>
          <p className="text-stone-300 mt-4">
            Dashas are timing periods—helpful for answering “why now?” Use them as a planning compass, not a fear tool.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/astrology/guides/dashas-intro" className="inline-flex items-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-stone-950 hover:bg-amber-400 transition">
              Read the intro guide →
            </Link>
            <Link href="/vedic-astrology/booking" className="inline-flex items-center rounded-full border border-stone-700 bg-stone-950/40 px-6 py-3 text-sm font-semibold text-stone-100 hover:bg-stone-900 transition">
              Book consultation 🪔
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
