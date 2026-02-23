import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPagesByCategory, SEO_CATEGORIES } from '@/lib/seoPages';

export async function generateStaticParams() {
  return SEO_CATEGORIES.map(category => ({ category }));
}

export default function LearnCategoryPage({ params }: { params: { category: string } }) {
  const { category } = params;
  if (!SEO_CATEGORIES.includes(category)) return notFound();
  const pages = getPagesByCategory(category);

  const nice = category
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold">{nice}</h1>
        <p className="mt-2 text-muted-foreground">
          Guides and resources to help you learn, plan, and go deeper — curated for Himalayan retreats and Nepal travel.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {pages.map((p) => (
          <Link
            key={p.slug}
            href={`/learn/${p.category}/${p.slug}`}
            className="rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow"
          >
            <div className="text-lg font-medium">{p.title}</div>
            <div className="mt-2 text-sm text-muted-foreground">{p.description}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
