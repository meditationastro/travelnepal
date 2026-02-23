import { prisma } from '@/lib/prisma';
import { fallbackBlogList } from '@/lib/fallbackContent';

export const dynamic = 'force-dynamic';
import Link from 'next/link';
import { format } from 'date-fns';

async function getPosts() {
  try {
    return await prisma.blogPost.findMany({
      where: { isPublished: true },
      orderBy: { publishedAt: 'desc' },
    });
  } catch {
    return [];
  }
}

const fallbackPosts = fallbackBlogList;

const categoryColors: Record<string, string> = {
  Astrology: '#C5A253',
  Meditation: '#4a7e50',
  Travel: '#C4663A',
  Spirituality: '#7c3aed',
};

export default async function BlogPage() {
  const posts = await getPosts();
  const display = posts.length > 0 ? posts : fallbackPosts;

  return (
    <div className="pt-20" style={{ background: '#fdf8f0' }}>
      <div className="py-20 text-center" style={{ background: 'linear-gradient(135deg, #1c1917, #1a0a00)' }}>
        <div className="text-5xl mb-4">✍️</div>
        <h1 className="font-display text-5xl text-white font-semibold mb-4">Wisdom Library</h1>
        <p className="text-stone-400 text-xl">Meditation guides, astrology insights, and Himalayan wisdom.</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-12">
          {['All', 'Meditation', 'Astrology', 'Travel', 'Spirituality'].map(cat => (
            <button key={cat} className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${cat === 'All' ? 'text-white' : 'text-stone-600 bg-white border border-stone-200 hover:border-stone-300'}`}
              style={cat === 'All' ? { background: 'linear-gradient(135deg, #C5A253, #E8891A)' } : {}}>
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {display.map((post: any) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="card-hover group bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100">
              <div className="relative h-52 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${post.imageUrl})` }}
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ background: categoryColors[post.category] || '#C5A253' }}>
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-stone-400 text-xs mb-2">{format(new Date(post.publishedAt), 'MMMM d, yyyy')}</div>
                <h2 className="font-display text-xl font-semibold text-stone-900 mb-3 group-hover:text-himalaya-600 transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-stone-500 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                <div className="mt-4 text-sm font-medium" style={{ color: '#C5A253' }}>
                  Read more →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
