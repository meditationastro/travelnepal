import Link from 'next/link';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Astrology Guides | Himalaya Retreat Nepal',
  description: 'Vedic astrology guides, birth chart education, navagraha mantras, remedies, dashas, and timing—written for beginners.',
};

export default function AstrologyHubPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-stone-950 to-stone-900 pt-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-stone-800 bg-gradient-to-br from-stone-950 via-stone-950 to-indigo-950/40 p-8 md:p-12 shadow-2xl">
          <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
            <div>
              <div className="text-4xl mb-3">🔮</div>
              <h1 className="text-3xl md:text-5xl font-semibold text-stone-100 leading-tight">
                Vedic Astrology Guides
              </h1>
              <p className="text-stone-300 mt-4 max-w-2xl">
                Learn Jyotish in a calm, practical way—birth chart basics, nakshatra, dashas, navagraha mantras, and beginner‑safe remedies.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/astrology/guides" className="inline-flex items-center rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-stone-950 hover:bg-amber-400 transition">
                  Explore all guides →
                </Link>
                <Link href="/vedic-astrology" className="inline-flex items-center rounded-full border border-stone-700 bg-stone-950/40 px-5 py-2.5 text-sm font-semibold text-stone-100 hover:bg-stone-900 transition">
                  Birth chart tool 🧿
                </Link>
              </div>
            </div>

            <div className="w-full md:w-[420px] grid grid-cols-2 gap-3">
              {[
                { t: 'Birth chart basics', e: '🧿', href: '/astrology/guides/vedic-birth-chart-basics' },
                { t: 'Nakshatra', e: '🌙', href: '/astrology/guides/moon-sign-nakshatra' },
                { t: 'Dashas', e: '🪐', href: '/astrology/guides/dashas-intro' },
                { t: 'Mantras', e: '📿', href: '/astrology/guides/navagraha-mantras' },
              ].map((c) => (
                <Link key={c.t} href={c.href} className="group rounded-2xl border border-stone-800 bg-stone-950/40 p-4 hover:bg-stone-900/40 transition">
                  <div className="text-2xl">{c.e}</div>
                  <div className="text-stone-100 font-semibold mt-2">{c.t}</div>
                  <div className="text-stone-400 text-sm mt-1 group-hover:text-stone-300 transition">Read guide</div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            { title: 'Generate your chart', emoji: '🧿', desc: 'Use our birth chart generator for a quick sidereal preview + predictions.', href: '/vedic-astrology' },
            { title: 'Navagraha mantra practice', emoji: '📿', desc: 'Simple routines you can keep during your retreat for clarity and balance.', href: '/astrology/guides/navagraha-mantras' },
            { title: 'Book consultation', emoji: '🪔', desc: 'For deeper analysis, remedies, muhurta and tailored spiritual guidance.', href: '/vedic-astrology/booking' },
          ].map((b) => (
            <div key={b.title} className="rounded-3xl border border-stone-800 bg-stone-950/40 p-6 shadow-xl">
              <div className="text-3xl">{b.emoji}</div>
              <h2 className="text-xl font-semibold text-stone-100 mt-3">{b.title}</h2>
              <p className="text-stone-300 mt-2">{b.desc}</p>
              <Link href={b.href} className="inline-flex mt-4 text-amber-400 hover:text-amber-300 font-semibold">
                Open →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
