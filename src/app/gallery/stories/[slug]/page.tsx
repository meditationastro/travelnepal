import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { GALLERY_SEO_PAGES, getGallerySeoPage } from '@/lib/gallerySeoPages';

export function generateStaticParams() {
  return GALLERY_SEO_PAGES.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = getGallerySeoPage(params.slug);
  if (!page) return {};
  return {
    title: `${page.title} | Himalaya Retreat Nepal`,
    description: page.description,
    keywords: page.keywords,
    openGraph: {
      title: page.title,
      description: page.description,
      images: [{ url: page.imageUrl }],
    },
  };
}

export default function GalleryStoryPage({ params }: { params: { slug: string } }) {
  const page = getGallerySeoPage(params.slug);
  if (!page) return notFound();

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link className="hover:underline" href="/gallery">Gallery</Link>
        <span>/</span>
        <Link className="hover:underline" href="/gallery/stories">Photo stories</Link>
      </div>

      <h1 className="mt-3 text-3xl font-semibold">{page.title}</h1>
      <p className="mt-3 text-muted-foreground">{page.description}</p>

      <div className="mt-6 overflow-hidden rounded-2xl border bg-white">
        <div className="relative h-[260px] sm:h-[360px]">
          <Image src={page.imageUrl} alt={page.title} fill className="object-cover" priority />
        </div>
      </div>

      <div className="mt-8 grid gap-5">
        {page.sections.map((s) => (
          <section key={s.heading} className="rounded-2xl border bg-white/60 p-6 shadow-sm">
            <h2 className="text-xl font-semibold">{s.heading}</h2>
            <p className="mt-2 text-muted-foreground leading-relaxed">{s.body}</p>
          </section>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border bg-gradient-to-br from-white to-white/60 p-6">
        <h2 className="text-xl font-semibold">Recommended next steps</h2>
        <p className="mt-2 text-muted-foreground">
          Use this story as a starting point. If your goal is a deeper spiritual retreat in Nepal, combine mindful
          travel days with a structured practice container.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link className="px-4 py-2 rounded-xl bg-black text-white" href="/retreats">Retreat packages</Link>
          <Link className="px-4 py-2 rounded-xl border" href="/meditation-in-nepal">Meditation in Nepal</Link>
          <Link className="px-4 py-2 rounded-xl border" href="/vedic-astrology/booking">Book Vedic astrology</Link>
          <Link className="px-4 py-2 rounded-xl border" href="/shop">Shop Nepal spiritual items</Link>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-lg font-semibold">More photo stories</h3>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {GALLERY_SEO_PAGES.filter((p) => p.slug !== page.slug)
            .slice(0, 6)
            .map((p) => (
              <Link
                key={p.slug}
                href={`/gallery/stories/${p.slug}`}
                className="rounded-xl border bg-white/50 p-4 hover:shadow-sm transition"
              >
                <div className="font-medium">{p.title}</div>
                <div className="mt-1 text-sm text-muted-foreground line-clamp-2">{p.description}</div>
              </Link>
            ))}
        </div>
      </div>
    </main>
  );
}
