import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

// Netlify/Next: ensure Prisma runs in Node.js (not Edge)
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any).role !== 'ADMIN') return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const posts = await prisma.blogPost.findMany({ orderBy: { createdAt: 'desc' } });
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any).role !== 'ADMIN') return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const data = await request.json();
    const post = await prisma.blogPost.create({
      data: {
        title: data.title,
        metaTitle: data.metaTitle || null,
        metaDescription: data.metaDescription || null,
        ogImage: data.ogImage || null,
        canonicalUrl: data.canonicalUrl || null,
        slug: data.slug,
        content: data.content,
        excerpt: data.excerpt || null,
        imageUrl: data.imageUrl || null,
        category: data.category || null,
        tags: data.tags || [],
        isPublished: data.isPublished || false,
        publishedAt: data.isPublished ? new Date() : null,
      },
    });
    return NextResponse.json(post, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
