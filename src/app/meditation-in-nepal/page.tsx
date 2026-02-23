import Link from 'next/link';
import { getPagesByCategory } from '@/lib/seoPages';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meditation in Nepal | Retreats, Guided Sessions & Spiritual Practice',
  description: 'Discover meditation in Nepal — Himalayan traditions, guided sessions, retreat options, and how to plan a safe, meaningful practice journey in Kathmandu valley and beyond.',
};

export default function Page() {
  const guides = getPagesByCategory('meditation').slice(0, 12);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="rounded-3xl border bg-gradient-to-br from-stone-950 to-stone-800 p-10 text-white shadow-sm">
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-white/70">Meditation in Nepal</p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight">Find stillness in the Himalayas — safely, ethically, and with real guidance.</h1>
        <p className="mt-4 max-w-2xl text-white/80">
          Whether you&apos;re new to meditation or deepening your practice, Nepal offers lineage traditions, sacred sites, and nature that supports inner work.
          Use this hub to explore practices, etiquette, what to expect, and how to book guided sessions.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/meditation/booking" className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white">Book a guided session</Link>
          <Link href="/retreats" className="rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white">Explore retreats</Link>
          <Link href="/learn/meditation" className="rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white">Read meditation guides</Link>
        </div>
      </div>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          { title: 'Beginner-friendly', body: 'Clear steps, simple posture, breath basics, and realistic routines.' },
          { title: 'Himalayan context', body: 'Practice with cultural respect — temples, teachers, and traditions.' },
          { title: 'Integration', body: 'Bring the retreat benefits home with habits you can keep.' },
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
            <h2 className="text-2xl font-semibold">Popular meditation guides</h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">Quick, practical reads designed to rank and to help real travelers.</p>
          </div>
          <Link href="/learn/meditation" className="text-sm font-semibold hover:underline">View all</Link>
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
        <h2 className="text-2xl font-semibold">Ready to go deeper?</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Combine meditation with a spiritual retreat in Nepal, plus optional Vedic astrology consultation and Ayurveda support.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/spiritual-retreat-nepal" className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white">Spiritual Retreat Nepal</Link>
          <Link href="/vedic-astrology/booking" className="rounded-full border px-5 py-2.5 text-sm font-semibold">Book astrology consult</Link>
          <Link href="/contact" className="rounded-full border px-5 py-2.5 text-sm font-semibold">Ask a question</Link>
        </div>
      </section>
    </main>
  );
}
