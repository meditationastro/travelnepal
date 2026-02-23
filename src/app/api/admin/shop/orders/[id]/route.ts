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

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  if (!await isAdmin()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const data = await req.json();
  const order = await prisma.shopOrder.update({
    where: { id: params.id },
    data: {
      ...(data.status !== undefined && { status: data.status }),
    },
  });
  return NextResponse.json(order);
}

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  if (!await isAdmin()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const order = await prisma.shopOrder.findUnique({ where: { id: params.id }, include: { items: true } });
  return NextResponse.json(order);
}
