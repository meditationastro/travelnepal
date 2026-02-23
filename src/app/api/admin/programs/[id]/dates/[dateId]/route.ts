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

export async function DELETE(_req: Request, { params }: { params: { id: string; dateId: string } }) {
  if (!await isAdmin()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  await prisma.retreatDate.delete({ where: { id: params.dateId } });
  return NextResponse.json({ success: true });
}
