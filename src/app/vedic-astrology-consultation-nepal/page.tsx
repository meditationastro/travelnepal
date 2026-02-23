import Link from 'next/link';
import { getPagesByCategory } from '@/lib/seoPages';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vedic Astrology Consultation Nepal | Jyotish Reading & Birth Chart',
  description: 'Book a Vedic astrology (Jyotish) consultation in Nepal — birth chart reading, karma insights, timing (Dasha), remedies, and practical next steps for your path.',
};

export default function Page() {
  const guides = getPagesByCategory('astrology').slice(0, 12);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="rounded-3xl border bg-gradient-to-br from-indigo-950 to-slate-900 p-10 text-white shadow-sm">
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-white/70">Vedic Astrology Consultation Nepal</p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight">A clear Jyotish reading — practical, compassionate, and rooted in tradition.</h1>
        <p className="mt-4 max-w-2xl text-white/80">
          Get a complete birth chart overview (Lagna, houses, nakshatras), timing via Dasha, and grounded guidance you can actually use.
          Available in-person in Kathmandu valley or online.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/vedic-astrology/booking" className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white">Book a consultation</Link>
          <Link href="/vedic-astrology" className="rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white">Learn about the service</Link>
          <Link href="/learn/astrology" className="rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white">Read astrology guides</Link>
        </div>
      </div>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          { title: 'Birth chart (Kundali)', body: 'Understand your strengths, challenges, and life themes with clarity.' },
          { title: 'Timing (Dasha)', body: 'See the rhythm of life cycles — when to act, wait, and recalibrate.' },
          { title: 'Remedies (Upaya)', body: 'Mantra, lifestyle, and charity suggestions — ethical and optional.' },
        ].map((c) => (
          <div key={c.title} className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="text-lg font-semibold">{c.title}</div>
            <div className="mt-2 text-sm text-muted-foreground">{c.body}</div>
          </div>
        ))}
      </section>

      <section className="mt-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold">Popular astrology guides</h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">Helpful reads that answer the questions people actually search for.</p>
          </div>
          <Link href="/learn/astrology" className="text-sm font-semibold hover:underline">View all</Link>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((p) => (
            <Link key={p.slug} href={`/learn/${p.category}/${p.slug}`} className="rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow">
              <div className="text-base font-semibold">{p.title}</div>
              <div className="mt-2 text-sm text-muted-foreground">{p.description}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-3xl border bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold">Pair your reading with a retreat</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Many guests combine a Jyotish consultation with meditation and spiritual retreat days for deeper insight and integration.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/retreats" className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white">Explore retreats</Link>
          <Link href="/spiritual-retreat-nepal" className="rounded-full border px-5 py-2.5 text-sm font-semibold">Spiritual Retreat Nepal</Link>
          <Link href="/contact" className="rounded-full border px-5 py-2.5 text-sm font-semibold">Ask a question</Link>
        </div>
      </section>
    </main>
  );
}
