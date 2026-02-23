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
  try {
    const bookings = await prisma.booking.findMany({
      include: { user: true, program: true, date: true, addons: true },
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(bookings);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
