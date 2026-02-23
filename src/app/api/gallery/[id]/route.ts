import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    const image = await prisma.galleryImage.update({
      where: { id: params.id },
      data: {
        title: body.title,
        caption: body.caption,
        category: body.category,
        emoji: body.emoji,
        src: body.src,
        imageUrl: body.src,
      },
    });
    return NextResponse.json(image);
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Failed to update' }, { status: 500 });
  }
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  try {
    await prisma.galleryImage.delete({ where: { id: params.id } });
    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Failed to delete' }, { status: 500 });
  }
}
