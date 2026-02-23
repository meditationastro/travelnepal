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
  const programs = await prisma.retreatProgram.findMany({
    include: { dates: true, _count: { select: { bookings: true } } },
    orderBy: { createdAt: 'desc' },
  });
  return NextResponse.json(programs);
}

export async function POST(request: Request) {
  if (!await isAdmin()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const data = await request.json();
    const program = await prisma.retreatProgram.create({
      data: {
        title: data.title,
        slug: data.slug,
        description: data.description,
        duration: data.duration,
        price: data.price,
        earlyBirdPrice: data.earlyBirdPrice || null,
        maxParticipants: data.maxParticipants,
        imageUrl: data.imageUrl || null,
        isActive: data.isActive ?? true,
        includes: data.includes || [],
        highlights: data.highlights || [],
      },
    });
    return NextResponse.json(program, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
