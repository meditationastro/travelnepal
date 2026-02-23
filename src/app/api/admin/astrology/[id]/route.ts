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
  try {
    const data = await req.json();
    const report = await prisma.astrologyReport.update({
      where: { id: params.id },
      data: {
        status: data.status,
        assignedTo: data.assignedTo,
        zoomLink: data.zoomLink,
        scheduledAt: data.scheduledAt ? new Date(data.scheduledAt) : undefined,
        notes: data.notes,
        reportUrl: data.reportUrl,
      },
    });
    return NextResponse.json(report);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  if (!await isAdmin()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  await prisma.astrologyReport.delete({ where: { id: params.id } });
  return NextResponse.json({ success: true });
}
