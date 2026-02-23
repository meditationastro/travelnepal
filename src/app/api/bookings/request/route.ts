import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, whatsapp, nationality, programTitle, programSlug, selectedDate,
      roomType, addons, total, notes, dietaryNeeds, experience, paymentMethod } = body;

    const bookingRef = `BK-${Date.now().toString().slice(-7)}`;

    // Persist the request so it shows up in the Admin dashboard.
    // We store booking requests as Contact records to avoid requiring user accounts.
    try {
      if (name && email) {
        const lines: string[] = [
          `Booking Reference: ${bookingRef}`,
          `Program: ${programTitle || programSlug || '—'}`,
          `Selected date: ${selectedDate || 'Flexible — to be confirmed'}`,
          `Room type: ${roomType || '—'}`,
          `Add-ons: ${Array.isArray(addons) && addons.length ? addons.join(', ') : 'None'}`,
          `Estimated total: ${typeof total === 'number' || typeof total === 'string' ? `$${total}` : '—'}`,
          `Payment method: ${paymentMethod || '—'}`,
          `Phone: ${phone || '—'}`,
          `WhatsApp: ${whatsapp || '—'}`,
          `Nationality: ${nationality || '—'}`,
          `Experience: ${experience || '—'}`,
          `Dietary needs: ${dietaryNeeds || '—'}`,
        ];
        if (notes) lines.push(`Notes: ${notes}`);

        await prisma.contact.create({
          data: {
            name: String(name).trim(),
            email: String(email).trim().toLowerCase(),
            phone: phone ? String(phone).trim() : null,
            service: `Booking Request${programTitle ? ` — ${String(programTitle).trim()}` : ''}`,
            message: lines.join('\n'),
          },
        });
      }
    } catch (persistErr) {
      console.error('[bookings/request] failed to persist request:', persistErr);
    }

    const emailUser = process.env.EMAIL_SERVER_USER;
    const emailPass = process.env.EMAIL_SERVER_PASSWORD;

    if (emailUser && emailPass) {
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_SERVER_HOST || 'smtp.gmail.com',
        port: Number(process.env.EMAIL_SERVER_PORT || 587),
        auth: { user: emailUser, pass: emailPass },
      });

      // Admin notification
      await transporter.sendMail({
        from: `"Himalya Retreat Nepal" <${emailUser}>`,
        to: 'meditationastro1@gmail.com',
        subject: `New Retreat Booking Request ${bookingRef} — ${name}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px">
            <h2 style="color:#C5A253;margin-bottom:4px">New Booking Request</h2>
            <p style="color:#888;margin-top:0">Ref: ${bookingRef}</p>
            <table style="width:100%;border-collapse:collapse;margin-top:16px">
              <tr style="background:#f9f5ee"><td style="padding:10px;border:1px solid #e5e5e5;font-weight:bold">Retreat</td><td style="padding:10px;border:1px solid #e5e5e5">${programTitle}</td></tr>
              <tr><td style="padding:10px;border:1px solid #e5e5e5;font-weight:bold">Dates</td><td style="padding:10px;border:1px solid #e5e5e5">${selectedDate || 'Flexible — to be confirmed'}</td></tr>
              <tr style="background:#f9f5ee"><td style="padding:10px;border:1px solid #e5e5e5;font-weight:bold">Room Type</td><td style="padding:10px;border:1px solid #e5e5e5">${roomType}</td></tr>
              <tr><td style="padding:10px;border:1px solid #e5e5e5;font-weight:bold">Add-ons</td><td style="padding:10px;border:1px solid #e5e5e5">${addons?.join(', ') || 'None'}</td></tr>
              <tr style="background:#f9f5ee"><td style="padding:10px;border:1px solid #e5e5e5;font-weight:bold">Estimated Total</td><td style="padding:10px;border:1px solid #e5e5e5;color:#C5A253;font-weight:bold">$${total}</td></tr>
              <tr><td style="padding:10px;border:1px solid #e5e5e5;font-weight:bold">Name</td><td style="padding:10px;border:1px solid #e5e5e5">${name}</td></tr>
              <tr style="background:#f9f5ee"><td style="padding:10px;border:1px solid #e5e5e5;font-weight:bold">Email</td><td style="padding:10px;border:1px solid #e5e5e5"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding:10px;border:1px solid #e5e5e5;font-weight:bold">Phone</td><td style="padding:10px;border:1px solid #e5e5e5">${phone || '—'}</td></tr>
              <tr style="background:#f9f5ee"><td style="padding:10px;border:1px solid #e5e5e5;font-weight:bold">WhatsApp</td><td style="padding:10px;border:1px solid #e5e5e5">${whatsapp || '—'}</td></tr>
              <tr><td style="padding:10px;border:1px solid #e5e5e5;font-weight:bold">Nationality</td><td style="padding:10px;border:1px solid #e5e5e5">${nationality || '—'}</td></tr>
              <tr style="background:#f9f5ee"><td style="padding:10px;border:1px solid #e5e5e5;font-weight:bold">Experience</td><td style="padding:10px;border:1px solid #e5e5e5">${experience || '—'}</td></tr>
              <tr><td style="padding:10px;border:1px solid #e5e5e5;font-weight:bold">Dietary Needs</td><td style="padding:10px;border:1px solid #e5e5e5">${dietaryNeeds || '—'}</td></tr>
              ${notes ? `<tr style="background:#f9f5ee"><td style="padding:10px;border:1px solid #e5e5e5;font-weight:bold">Notes</td><td style="padding:10px;border:1px solid #e5e5e5">${notes}</td></tr>` : ''}
            </table>
            <p style="margin-top:20px"><a href="https://wa.me/${(whatsapp || phone || '').replace(/\D/g, '')}?text=Namaste ${encodeURIComponent(name)}! Thank you for your booking request (${bookingRef})..." style="background:#25D366;color:white;padding:10px 20px;border-radius:8px;text-decoration:none">Reply on WhatsApp</a></p>
          </div>
        `,
      });

      // Customer confirmation
      await transporter.sendMail({
        from: `"Himalya Retreat Nepal" <${emailUser}>`,
        to: email,
        subject: `Booking Request Received: ${bookingRef} — Himalya Retreat Nepal`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px">
            <h1 style="color:#C5A253">🙏 Namaste, ${name}!</h1>
            <p>Thank you for your booking request for <strong>${programTitle}</strong>.</p>
            <p>Your reference number is: <strong style="color:#C5A253">${bookingRef}</strong></p>
            <p>Our team will review your request and confirm availability within <strong>24 hours</strong>.</p>
            <h3>Next Steps</h3>
            <ol>
              <li>We will confirm dates and availability</li>
              <li>You'll receive payment instructions (bank transfer or secure online)</li>
              <li>A 30% deposit secures your spot</li>
              <li>Balance due 30 days before arrival</li>
            </ol>
            <p>For faster response, contact us on WhatsApp:</p>
            <a href="https://wa.me/9779851187267?text=Namaste! My booking ref is ${bookingRef}" style="display:inline-block;background:#25D366;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold">+977 9851187267</a>
            <p style="margin-top:24px;color:#888">📍 Khumaltar, Lalitpur, Nepal<br>✉️ meditationastro1@gmail.com</p>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true, bookingRef });
  } catch (err: any) {
    console.error('Booking request error:', err);
    const bookingRef = `BK-${Date.now().toString().slice(-7)}`;
    return NextResponse.json({ success: true, bookingRef });
  }
}
