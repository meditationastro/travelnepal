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
  const program = await prisma.retreatProgram.findUnique({
    where: { id: params.id },
    include: { dates: { orderBy: { startDate: 'asc' } } },
  });
  if (!program) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(program);
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  if (!await isAdmin()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const data = await request.json();
    const program = await prisma.retreatProgram.update({
      where: { id: params.id },
      data: {
        title: data.title,
        slug: data.slug,
        description: data.description,
        duration: data.duration,
        price: data.price,
        earlyBirdPrice: data.earlyBirdPrice || null,
        maxParticipants: data.maxParticipants,
        imageUrl: data.imageUrl || null,
        isActive: data.isActive,
        includes: data.includes || [],
        highlights: data.highlights || [],
      },
    });
    return NextResponse.json(program);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  if (!await isAdmin()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  await prisma.retreatProgram.delete({ where: { id: params.id } });
  return NextResponse.json({ success: true });
}
