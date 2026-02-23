import Link from 'next/link';
import { notFound } from 'next/navigation';
import { NEPAL_GUIDES } from '@/data/guides/nepalGuides';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return NEPAL_GUIDES.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const g = NEPAL_GUIDES.find((x) => x.slug === params.slug);
  if (!g) return { title: 'Guide | Himalaya Retreat Nepal' };
  return {
    title: `${g.title} | Nepal Guides`,
    description: g.excerpt,
  };
}

export default function NepalGuidePage({ params }: { params: { slug: string } }) {
  const g = NEPAL_GUIDES.find((x) => x.slug === params.slug);
  if (!g) return notFound();

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-stone-950 to-stone-900 pt-24 pb-16">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-stone-800 bg-stone-950/40 p-8 md:p-10 shadow-2xl">
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div>
              <div className="text-4xl">{g.emoji}</div>
              <h1 className="text-3xl md:text-5xl font-semibold text-stone-100 mt-3">{g.title}</h1>
              <p className="text-stone-300 mt-4">{g.excerpt}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/nepal/guides" className="inline-flex items-center rounded-full border border-stone-700 bg-stone-950/40 px-5 py-2.5 text-sm font-semibold text-stone-100 hover:bg-stone-900 transition">
                  ← All guides
                </Link>
                <Link href="/travel-consultant" className="inline-flex items-center rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-stone-950 hover:bg-amber-400 transition">
                  Travel consultant ✈️
                </Link>
              </div>
            </div>
            <div className="rounded-3xl border border-stone-800 bg-gradient-to-br from-stone-950 to-amber-950/30 p-5 w-full sm:w-[340px]">
              <div className="text-stone-100 font-semibold">Quick links</div>
              <div className="mt-3 grid gap-2">
                {g.sections.map((s) => (
                  <a key={s.heading} href={`#${slugify(s.heading)}`} className="text-stone-300 hover:text-amber-300 transition">
                    • {s.heading}
                  </a>
                ))}
              </div>
              <div className="mt-4 text-xs text-stone-400">
                Tip: bookmark this page for your arrival week.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6">
          {g.sections.map((s) => (
            <section key={s.heading} id={slugify(s.heading)} className="rounded-3xl border border-stone-800 bg-stone-950/40 p-7 shadow-xl">
              <h2 className="text-2xl font-semibold text-stone-100">{s.heading}</h2>
              {s.body ? <p className="text-stone-300 mt-3 leading-relaxed">{s.body}</p> : null}
              {s.bullets ? (
                <ul className="mt-4 grid gap-2 text-stone-300 list-disc list-inside">
                  {s.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              ) : null}
              {s.qa ? (
                <div className="mt-4 grid gap-3">
                  {s.qa.map((qa) => (
                    <div key={qa.q} className="rounded-2xl border border-stone-800 bg-stone-950/40 p-4">
                      <div className="text-stone-100 font-semibold">Q: {qa.q}</div>
                      <div className="text-stone-300 mt-1">A: {qa.a}</div>
                    </div>
                  ))}
                </div>
              ) : null}
            </section>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] border border-stone-800 bg-gradient-to-br from-stone-950 via-stone-950 to-amber-950/30 p-8 shadow-2xl">
          <div className="text-3xl">🧭</div>
          <h3 className="text-2xl font-semibold text-stone-100 mt-2">Want a personalized plan?</h3>
          <p className="text-stone-300 mt-2">
            Tell us your dates, interests, and comfort level. We’ll suggest a smooth itinerary around your retreat schedule.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/travel-consultant" className="inline-flex items-center rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-stone-950 hover:bg-amber-400 transition">
              Get travel consultation →
            </Link>
            <Link href="/retreats" className="inline-flex items-center rounded-full border border-stone-700 bg-stone-950/40 px-5 py-2.5 text-sm font-semibold text-stone-100 hover:bg-stone-900 transition">
              Browse retreats
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
