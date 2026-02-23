import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

async function isAdmin() {
  const session = await getServerSession(authOptions);
  return session && (session.user as any).role === 'ADMIN';
}

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  if (!await isAdmin()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const post = await prisma.blogPost.findUnique({ where: { id: params.id } });
  if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(post);
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  if (!await isAdmin()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const data = await request.json();
    const post = await prisma.blogPost.update({
      where: { id: params.id },
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
        isPublished: data.isPublished,
        publishedAt: data.isPublished ? (data.publishedAt ? new Date(data.publishedAt) : new Date()) : null,
      },
    });
    return NextResponse.json(post);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  if (!await isAdmin()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  await prisma.blogPost.delete({ where: { id: params.id } });
  return NextResponse.json({ success: true });
}
