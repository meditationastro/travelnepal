import Link from 'next/link';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Nakshatra Guide | Himalaya Retreat Nepal',
  description: 'A beginner-friendly nakshatra overview with practical ways to use nakshatra themes in meditation and retreat practice.',
};

export default function NakshatraPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-stone-950 to-stone-900 pt-24 pb-16">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-stone-800 bg-stone-950/40 p-8 md:p-10 shadow-2xl">
          <div className="text-4xl">🌙</div>
          <h1 className="text-3xl md:text-5xl font-semibold text-stone-100 mt-3">Nakshatra Guide</h1>
          <p className="text-stone-300 mt-4">
            Nakshatra describes the Moon’s “flavor”—how your mind processes emotion, desire, and rest. Use it gently to choose supportive practices.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/astrology/guides/moon-sign-nakshatra" className="inline-flex items-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-stone-950 hover:bg-amber-400 transition">
              Read the full guide →
            </Link>
            <Link href="/vedic-astrology#birth-chart-generator" className="inline-flex items-center rounded-full border border-stone-700 bg-stone-950/40 px-6 py-3 text-sm font-semibold text-stone-100 hover:bg-stone-900 transition">
              Use birth chart tool 🧿
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
