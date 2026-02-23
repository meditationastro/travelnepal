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

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  if (!await isAdmin()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const data = await req.json();
  const product = await prisma.product.update({
    where: { id: params.id },
    data: {
      ...(data.slug !== undefined && { slug: data.slug }),
      ...(data.name !== undefined && { name: data.name }),
      ...(data.category !== undefined && { category: data.category }),
      ...(data.description !== undefined && { description: data.description }),
      ...(data.features !== undefined && { features: data.features }),
      ...(data.price !== undefined && { price: Number(data.price) }),
      ...(data.originalPrice !== undefined && { originalPrice: data.originalPrice === null ? null : Number(data.originalPrice) }),
      ...(data.rating !== undefined && { rating: Number(data.rating) }),
      ...(data.reviews !== undefined && { reviews: Number(data.reviews) }),
      ...(data.badge !== undefined && { badge: data.badge || null }),
      ...(data.imageUrl !== undefined && { imageUrl: data.imageUrl || null }),
      ...(data.icon !== undefined && { icon: data.icon || '🕉️' }),
      ...(data.isActive !== undefined && { isActive: !!data.isActive }),
      ...(data.sortOrder !== undefined && { sortOrder: Number(data.sortOrder) }),
    },
  });
  return NextResponse.json(product);
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  if (!await isAdmin()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  await prisma.product.delete({ where: { id: params.id } });
  return NextResponse.json({ ok: true });
}
