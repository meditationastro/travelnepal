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

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  if (!await isAdmin()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const body = await request.json();
    const booking = await prisma.booking.update({
      where: { id: params.id },
      data: {
        ...(body.status !== undefined && { status: body.status }),
        ...(body.paidAmount !== undefined && { paidAmount: Number(body.paidAmount) }),
        ...(body.totalAmount !== undefined && { totalAmount: Number(body.totalAmount) }),
        ...(body.roomType !== undefined && { roomType: body.roomType }),
        ...(body.notes !== undefined && { notes: body.notes || null }),
      },
    });
    return NextResponse.json(booking);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  if (!await isAdmin()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const booking = await prisma.booking.findUnique({
    where: { id: params.id },
    include: { user: true, program: true, date: true, addons: true },
  });
  return NextResponse.json(booking);
}
