import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const programs = await prisma.retreatProgram.findMany({
      where: { isActive: true },
      include: {
        dates: {
          where: { isActive: true, startDate: { gte: new Date() } },
          orderBy: { startDate: 'asc' },
        },
      },
    });
    return NextResponse.json(programs);
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch programs' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any).role !== 'ADMIN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const data = await request.json();
    const program = await prisma.retreatProgram.create({ data });
    return NextResponse.json(program, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to create program' }, { status: 500 });
  }
}
