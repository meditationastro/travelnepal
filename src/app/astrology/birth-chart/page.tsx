import Link from 'next/link';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Vedic Birth Chart Generator | Himalaya Retreat Nepal',
  description: 'Generate a quick Vedic (sidereal) birth chart preview with Lagna, Moon sign, nakshatra and beginner-friendly predictions.',
};

export default function BirthChartLanding() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-stone-950 to-stone-900 pt-24 pb-16">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-stone-800 bg-gradient-to-br from-stone-950 via-stone-950 to-indigo-950/40 p-8 md:p-12 shadow-2xl">
          <div className="text-4xl mb-3">🧿</div>
          <h1 className="text-3xl md:text-5xl font-semibold text-stone-100">Vedic Birth Chart Generator</h1>
          <p className="text-stone-300 mt-4 max-w-3xl">
            Use our chart tool to get a quick sidereal preview (Lagna, Moon sign, nakshatra) with simple, calming interpretations.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/vedic-astrology#birth-chart-generator" className="inline-flex items-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-stone-950 hover:bg-amber-400 transition">
              Open the chart tool →
            </Link>
            <Link href="/vedic-astrology/booking" className="inline-flex items-center rounded-full border border-stone-700 bg-stone-950/40 px-6 py-3 text-sm font-semibold text-stone-100 hover:bg-stone-900 transition">
              Book consultation 🪔
            </Link>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            { e: '🌙', t: 'Moon & mind', d: 'Understand emotional patterns and supportive meditation styles.' },
            { e: '🪐', t: 'Timing', d: 'Dashas + transits explain “why now?” in life cycles.' },
            { e: '📿', t: 'Remedies', d: 'Beginner-safe mantra + charity routines that build steadiness.' },
          ].map((x) => (
            <div key={x.t} className="rounded-3xl border border-stone-800 bg-stone-950/40 p-6 shadow-xl">
              <div className="text-3xl">{x.e}</div>
              <div className="text-stone-100 font-semibold text-xl mt-3">{x.t}</div>
              <div className="text-stone-300 mt-2">{x.d}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] border border-stone-800 bg-stone-950/40 p-8 shadow-2xl">
          <h2 className="text-2xl font-semibold text-stone-100">Learn more</h2>
          <p className="text-stone-300 mt-2">Explore short guides to understand the terms you’ll see in your chart.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/astrology/guides/lagna-ascendant-guide" className="rounded-full border border-stone-700 bg-stone-950/40 px-5 py-2.5 text-sm font-semibold text-stone-100 hover:bg-stone-900 transition">Lagna</Link>
            <Link href="/astrology/guides/moon-sign-nakshatra" className="rounded-full border border-stone-700 bg-stone-950/40 px-5 py-2.5 text-sm font-semibold text-stone-100 hover:bg-stone-900 transition">Nakshatra</Link>
            <Link href="/astrology/guides/dashas-intro" className="rounded-full border border-stone-700 bg-stone-950/40 px-5 py-2.5 text-sm font-semibold text-stone-100 hover:bg-stone-900 transition">Dashas</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
