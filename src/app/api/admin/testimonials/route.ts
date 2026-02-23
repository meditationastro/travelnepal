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

export async function POST(request: Request) {
  if (!await isAdmin()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const data = await request.json();
    const t = await prisma.testimonial.create({
      data: {
        name: data.name,
        country: data.country || null,
        retreat: data.retreat || null,
        content: data.content,
        rating: data.rating || 5,
        isPublished: data.isPublished ?? true,
      },
    });
    return NextResponse.json(t, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
