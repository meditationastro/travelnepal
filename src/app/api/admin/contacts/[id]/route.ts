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
  const body = await request.json();
  const contact = await prisma.contact.update({
    where: { id: params.id },
    data: {
      read: typeof body.read === 'boolean' ? body.read : true,
    },
  });
  return NextResponse.json(contact);
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  if (!await isAdmin()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    await prisma.contact.delete({ where: { id: params.id } });
    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
