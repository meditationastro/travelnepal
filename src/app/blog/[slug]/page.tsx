import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { fallbackBlogPosts } from '@/lib/fallbackContent';
import ShareButtons from '@/components/blog/ShareButtons';
import { parseMarkdown } from '@/lib/markdown';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await prisma.blogPost.findUnique({ where: { slug: params.slug } });
  const fallback = !post ? fallbackBlogPosts[params.slug] : null;
  if (!post && !fallback) return { title: 'Blog | Himalaya Retreat' };

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://spiritsx.netlify.app';
  const safePost = (post ?? fallback)!;
  const title = safePost.metaTitle || safePost.title;
  const description = safePost.metaDescription || safePost.excerpt || safePost.content.slice(0, 160);
  const canonical = safePost.canonicalUrl || `${siteUrl}/blog/${safePost.slug}`;
  const image = (safePost.ogImage || safePost.imageUrl) ?? undefined;

  return {
    title: `${title} | Himalaya Retreat`,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      images: image ? [{ url: image }] : [],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : [],
    },
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  let post = await prisma.blogPost.findUnique({ where: { slug: params.slug } });
  if (!post) {
    const fallback = fallbackBlogPosts[params.slug];
    if (!fallback) notFound();
    // adapt fallback content into a shape similar to Prisma model
    post = {
      ...fallback,
      isPublished: true,
      createdAt: fallback.publishedAt,
      updatedAt: fallback.publishedAt,
      publishedAt: fallback.publishedAt,
      category: fallback.category ?? null,
      imageUrl: fallback.imageUrl ?? null,
      ogImage: fallback.ogImage ?? null,
      metaTitle: fallback.metaTitle ?? null,
      metaDescription: fallback.metaDescription ?? null,
      canonicalUrl: fallback.canonicalUrl ?? null,
      tags: fallback.tags ?? [],
    } as any;
  }
  if (!(post as any).isPublished && process.env.NODE_ENV === 'production') notFound();

  // prisma.findUnique returns `T | null`. After the fallback/notFound checks above,
  // `post` is guaranteed to exist, but TS may still consider it nullable.
  const safePost = post as NonNullable<typeof post>;

  const related = await prisma.blogPost.findMany({
    where: {
      isPublished: true,
      slug: { not: safePost.slug },
      OR: [
        safePost.category ? { category: safePost.category } : undefined,
        safePost.tags?.length ? { tags: { hasSome: safePost.tags } } : undefined,
      ].filter(Boolean) as any,
    },
    orderBy: [{ publishedAt: 'desc' }, { createdAt: 'desc' }],
    take: 3,
  });

  const { html, toc } = parseMarkdown(safePost.content);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: safePost.metaTitle || safePost.title,
    description: safePost.metaDescription || safePost.excerpt,
    image: [safePost.ogImage || safePost.imageUrl].filter(Boolean),
    datePublished: safePost.publishedAt ? safePost.publishedAt.toISOString() : undefined,
    dateModified: safePost.updatedAt?.toISOString?.() || undefined,
    author: { '@type': 'Organization', name: 'Himalaya Retreat' },
    publisher: { '@type': 'Organization', name: 'Himalaya Retreat' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${process.env.NEXT_PUBLIC_SITE_URL || ''}/blog/${safePost.slug}`,
    },
  };

  return (
    <div className="pt-20" style={{ background: '#fdf8f0' }}>
      <section className="max-w-4xl mx-auto px-4 py-10">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Link href="/blog" className="text-sm text-stone-600 hover:text-stone-900">← Back to Blog</Link>

        <h1 className="font-display text-4xl sm:text-5xl font-semibold text-stone-900 mt-4">{safePost.title}</h1>
        {safePost.excerpt ? <p className="text-stone-600 mt-3">{safePost.excerpt}</p> : null}

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-stone-500">
            {safePost.category ? <span>{safePost.category}</span> : null}
            {safePost.publishedAt ? <span>{safePost.category ? ' • ' : ''}{new Date(safePost.publishedAt).toLocaleDateString()}</span> : null}
          </div>
          <ShareButtons title={safePost.title} />
        </div>

        {safePost.imageUrl ? (
          <div className="mt-8 relative w-full aspect-[16/9] rounded-3xl overflow-hidden border border-stone-100">
            <Image src={safePost.imageUrl} alt={safePost.title} fill className="object-cover" />
          </div>
        ) : null}

        <div className="mt-10 grid lg:grid-cols-[1fr_260px] gap-8">
          <article
            className="prose prose-stone max-w-none prose-headings:scroll-mt-28"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: html }}
          />

          <aside className="hidden lg:block">
            {toc.length > 0 ? (
              <div className="sticky top-28 bg-white rounded-3xl border border-stone-100 shadow-sm p-5">
                <div className="text-sm font-semibold text-stone-900">Table of contents</div>
                <nav className="mt-3 space-y-2">
                  {toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block text-sm text-stone-600 hover:text-himalaya-700 transition ${
                        item.level === 3 ? 'pl-3' : ''
                      }`}
                    >
                      {item.text}
                    </a>
                  ))}
                </nav>
              </div>
            ) : null}
          </aside>
        </div>

        {related.length > 0 ? (
          <div className="mt-12">
            <h2 className="font-display text-2xl font-semibold text-stone-900">Related posts</h2>
            <div className="mt-4 grid md:grid-cols-3 gap-4">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/blog/${p.slug}`}
                  className="group bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden hover:shadow-md transition p-5"
                >
                  <div className="text-xs text-stone-500">
                    {p.publishedAt ? new Date(p.publishedAt).toLocaleDateString() : ''}
                  </div>
                  <div className="mt-2 font-semibold text-stone-900 group-hover:text-himalaya-700 transition">
                    {p.title}
                  </div>
                  {p.excerpt ? <p className="mt-2 text-sm text-stone-600 line-clamp-3">{p.excerpt}</p> : null}
                </Link>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-10 bg-white rounded-3xl border border-stone-100 shadow-sm p-6">
          <h3 className="font-display text-xl font-semibold text-stone-900">Want help choosing the right retreat?</h3>
          <p className="text-stone-600 text-sm mt-2">
            Tell us your dates and goals—we’ll recommend the best program and send a simple plan.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="btn-gold px-7 py-3 rounded-2xl font-semibold text-white">Contact</Link>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '9779800000000'}?text=${encodeURIComponent(
                'Hi! I read your blog and want to choose a retreat. Can you help?'
              )}`}
              className="px-7 py-3 rounded-2xl font-semibold border border-stone-200 text-stone-800 hover:bg-stone-50"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
