import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }

    const contact = await prisma.contact.create({
      data: {
        name: String(name).trim(),
        email: String(email).trim().toLowerCase(),
        phone: phone ? String(phone).trim() : null,
        service: service ? String(service).trim() : null,
        message: String(message).trim(),
      },
    });

    return NextResponse.json({ success: true, id: contact.id });
  } catch (err) {
    console.error('[contact/route] POST error:', err);
    return NextResponse.json({ error: 'Failed to submit message. Please try again.' }, { status: 500 });
  }
}
