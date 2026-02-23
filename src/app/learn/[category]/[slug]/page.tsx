import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getSeoPage, getPagesByCategory, SEO_CATEGORIES } from '@/lib/seoPages';

export async function generateStaticParams() {
  const { SEO_PAGES_ALL } = await import('@/lib/seoPages');
  return SEO_PAGES_ALL.map((p) => ({ category: p.category, slug: p.slug }));
}

export function generateMetadata({ params }: { params: { category: string; slug: string } }): Metadata {
  const page = getSeoPage(params.category, params.slug);
  if (!page) return {};
  const title = `${page.title} | Himalaya Retreat Nepal`;
  return {
    title,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: `/learn/${page.category}/${page.slug}` },
    openGraph: { title, description: page.description, type: 'article' },
  };
}

export default function LearnSlugPage({ params }: { params: { category: string; slug: string } }) {
  const page = getSeoPage(params.category, params.slug);
  if (!page) return notFound();

  const related = getPagesByCategory(page.category)
    .filter((p) => p.slug !== page.slug)
    .slice(0, 6);

  const nice = page.category.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <nav className="text-sm text-muted-foreground">
        <Link href="/learn" className="hover:underline">Learn</Link>
        <span> / </span>
        <Link href={`/learn/${page.category}`} className="hover:underline">{nice}</Link>
      </nav>

      <h1 className="mt-3 text-3xl font-semibold">{page.title}</h1>
      <p className="mt-3 text-muted-foreground">{page.description}</p>

      <article className="prose prose-neutral mt-8 max-w-none">
        {page.sections.map((s) => (
          <section key={s.heading}>
            <h2>{s.heading}</h2>
            <p>{s.body}</p>
          </section>
        ))}
      </article>

      <section className="mt-10 rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Next steps</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          If you’re planning a spiritual retreat in Nepal, use these quick links to book support or explore structured programs.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/retreats" className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white">Explore retreats</Link>
          <Link href="/meditation/booking" className="rounded-full border px-5 py-2.5 text-sm font-semibold">Book meditation</Link>
          <Link href="/vedic-astrology/booking" className="rounded-full border px-5 py-2.5 text-sm font-semibold">Book astrology</Link>
          <Link href="/contact" className="rounded-full border px-5 py-2.5 text-sm font-semibold">Message us</Link>
        </div>
      </section>

      <section className="mt-10 rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Helpful resources</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A few reputable references for travelers and seekers. (External links open in a new tab.)
        </p>
        <ul className="mt-4 list-disc pl-5 text-sm text-muted-foreground">
          <li><a className="hover:underline" href="https://www.who.int/health-topics/mental-health" target="_blank" rel="noreferrer">WHO: mental health basics</a></li>
          <li><a className="hover:underline" href="https://www.nepalimmigration.gov.np/" target="_blank" rel="noreferrer">Nepal immigration (visa info)</a></li>
          <li><a className="hover:underline" href="https://www.ntb.gov.np/" target="_blank" rel="noreferrer">Nepal Tourism Board</a></li>
        </ul>
      </section>

      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-semibold">Related</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/learn/${p.category}/${p.slug}`}
                className="rounded-xl border bg-white p-4 shadow-sm transition hover:shadow"
              >
                <div className="font-medium">{p.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{p.description}</div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
