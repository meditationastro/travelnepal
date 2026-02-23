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

export async function GET() {
  if (!await isAdmin()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const products = await prisma.product.findMany({ orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }] });
  return NextResponse.json(products);
}

export async function POST(req: Request) {
  if (!await isAdmin()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const data = await req.json();
  const product = await prisma.product.create({
    data: {
      slug: data.slug,
      name: data.name,
      category: data.category,
      description: data.description || '',
      features: data.features || [],
      price: Number(data.price || 0),
      originalPrice: data.originalPrice === null || data.originalPrice === undefined ? null : Number(data.originalPrice),
      rating: Number(data.rating || 4.8),
      reviews: Number(data.reviews || 0),
      badge: data.badge || null,
      imageUrl: data.imageUrl || null,
      icon: data.icon || '🕉️',
      isActive: data.isActive ?? true,
      sortOrder: Number(data.sortOrder || 0),
    },
  });
  return NextResponse.json(product, { status: 201 });
}
