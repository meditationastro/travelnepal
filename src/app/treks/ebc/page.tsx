import Link from 'next/link';
import { getPagesByCategory } from '@/lib/seoPages';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EBC Trekking | Himalaya Retreat Nepal',
  description: 'Everest Base Camp trekking resources — routes, acclimatization, Lukla flight tips, permits, packing, and high-altitude safety for a successful trek.',
};

export default function Page() {
  const pages = getPagesByCategory('treks-ebc');
  const top = pages.slice(0, 12);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <section className="rounded-3xl border bg-gradient-to-br from-slate-950 to-stone-900 p-10 text-white shadow-sm">
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-white/70">EBC Trekking</p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight">EBC Trekking</h1>
        <p className="mt-4 max-w-2xl text-white/80">Everest Base Camp trekking resources — routes, acclimatization, Lukla flight tips, permits, packing, and high-altitude safety for a successful trek.</p>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/learn/treks-ebc" className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white">Browse EBC trekking guides</Link>
          <Link href="/explore-nepal" className="rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white">Explore Nepal</Link>
          <Link href="/contact" className="rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white">Contact</Link>
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          { title: 'Actionable lessons', body: 'Short, focused guides designed for real situations and confident progress.' },
          { title: 'Culture included', body: 'Etiquette, temple manners, and local nuance — so you feel respectful and relaxed.' },
          { title: 'Practice plans', body: 'Light routines you can do before your trip or retreat: 10–15 minutes a day.' },
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
            <h2 className="text-2xl font-semibold">Start here</h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">Popular guides with clear steps and internal links to deeper topics.</p>
          </div>
          <Link href="/learn/treks-ebc" className="text-sm font-semibold hover:underline">Browse all</Link>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {top.map((p) => (
            <Link key={p.slug} href={`/learn/${p.category}/${p.slug}`} className="rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow">
              <div className="text-base font-semibold">{p.title}</div>
              <div className="mt-2 text-sm text-muted-foreground">{p.description}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-3xl border bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold">FAQ</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {[
            {
              q: 'How much should I learn before coming to Nepal?',
              a: 'Even a small starter set helps. Focus on greetings, numbers, directions, and food orders.',
            },
            {
              q: 'Do I need to learn script?',
              a: 'Not required, but basics help with signs and pronunciation. We include a gentle intro where relevant.',
            },
            {
              q: 'Will locals understand English?',
              a: 'In tourist areas, often. In smaller towns and on treks, simple phrases are very helpful and appreciated.',
            },
            {
              q: 'Can I learn while on retreat?',
              a: 'Yes—use a light routine. Keep it respectful to silence rules and your retreat schedule.',
            },
          ].map((item) => (
            <div key={item.q} className="rounded-2xl border p-5">
              <div className="font-semibold">{item.q}</div>
              <div className="mt-2 text-sm text-muted-foreground">{item.a}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/learn/treks-ebc" className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white">Explore all guides</Link>
          <Link href="/contact" className="rounded-full border px-5 py-2.5 text-sm font-semibold">Ask a question</Link>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Related hubs</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Meditation in Nepal', href: '/meditation-in-nepal', desc: 'Meditation hub, booking, and retreat paths.' },
            { title: 'Vedic Astrology Consultation', href: '/vedic-astrology-consultation-nepal', desc: 'Jyotish guidance, timing, and remedies.' },
            { title: 'Spiritual Retreat Nepal', href: '/spiritual-retreat-nepal', desc: 'Retreat options, logistics, and what to expect.' },
          ].map((x) => (
            <Link key={x.href} href={x.href} className="rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow">
              <div className="font-semibold">{x.title}</div>
              <div className="mt-2 text-sm text-muted-foreground">{x.desc}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">All guides</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pages.map((p) => (
            <Link key={p.slug} href={`/learn/${p.category}/${p.slug}`} className="rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow">
              <div className="text-lg font-medium">{p.title}</div>
              <div className="mt-2 text-sm text-muted-foreground">{p.description}</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
