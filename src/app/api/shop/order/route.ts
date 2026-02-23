import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { prisma } from '@/lib/prisma';
import { formatMoney, usdToNpr } from '@/lib/currency';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, address, city, country, postalCode, items, total, paymentMethod, notes, currency: currencyRaw } = body;
    const currency = currencyRaw === 'NPR' ? 'NPR' : 'USD';

    const subtotal = Array.isArray(items)
      ? items.reduce((s: number, it: any) => s + Number(it.price || 0) * Number(it.qty || 0), 0)
      : 0;
    // Client currently includes shipping in `total` as a string.
    const totalNum = Number(total || 0);
    const shipping = Math.max(0, totalNum - subtotal);

    const orderNumber = `HRN-${Date.now().toString().slice(-6)}`;

    // Persist order to DB (admin dashboard reads from here)
    try {
      await prisma.shopOrder.create({
        data: {
          orderNumber,
          customerName: String(name || ''),
          email: String(email || ''),
          phone: phone ? String(phone) : null,
          address: String(address || ''),
          city: String(city || ''),
          country: String(country || ''),
          postalCode: postalCode ? String(postalCode) : null,
          notes: notes ? String(notes) : null,
          paymentMethod:
            paymentMethod === 'transfer' ? 'TRANSFER' : paymentMethod === 'whatsapp' ? 'WHATSAPP' : 'COD',
          currency,
          subtotal,
          shipping,
          total: totalNum || subtotal,
          items: {
            create: (Array.isArray(items) ? items : []).map((it: any) => ({
              name: String(it?.name || ''),
              qty: Number(it?.qty || 0),
              price: Number(it?.price || 0),
            })),
          },
        },
      });
    } catch (e) {
      console.error('Failed saving shop order:', e);
      // Do not fail checkout UX if DB write fails.
    }

    // Send email if configured
    const emailUser = process.env.EMAIL_SERVER_USER;
    const emailPass = process.env.EMAIL_SERVER_PASSWORD;

    if (emailUser && emailPass) {
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_SERVER_HOST || 'smtp.gmail.com',
        port: Number(process.env.EMAIL_SERVER_PORT || 587),
        auth: { user: emailUser, pass: emailPass },
      });

      const money = (usd: number, nprOverride?: number | null) => {
        if (currency === 'NPR') {
          const npr = Number.isFinite(Number(nprOverride)) ? Number(nprOverride) : usdToNpr(usd);
          return formatMoney(Math.round(npr), 'NPR');
        }
        return formatMoney(usd, 'USD');
      };

      const itemsHtml = items.map((item: any) =>
        `<tr><td style="padding:8px;border-bottom:1px solid #eee">${item.name}</td><td style="padding:8px;border-bottom:1px solid #eee">x${item.qty}</td><td style="padding:8px;border-bottom:1px solid #eee">${money(Number(item.price || 0) * Number(item.qty || 0), item.nprPrice ? Number(item.nprPrice) * Number(item.qty || 0) : null)}</td></tr>`
      ).join('');

      await transporter.sendMail({
        from: `"Himalya Retreat Nepal" <${emailUser}>`,
        to: 'meditationastro1@gmail.com',
        subject: `New Shop Order ${orderNumber} — ${name}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
            <h2 style="color:#C5A253">New Order: ${orderNumber}</h2>
            <p><strong>Currency:</strong> ${currency}</p>
            <p><strong>Payment:</strong> ${paymentMethod === 'cod' ? '💵 Cash on Delivery' : paymentMethod === 'transfer' ? '🏦 Bank Transfer' : '💬 WhatsApp'}</p>
            <h3>Customer Details</h3>
            <p>Name: ${name}<br>Email: ${email}<br>Phone: ${phone}</p>
            <p>Address: ${address}, ${city}, ${country} ${postalCode}</p>
            ${notes ? `<p>Notes: ${notes}</p>` : ''}
            <h3>Items Ordered</h3>
            <table style="width:100%;border-collapse:collapse">
              <tr style="background:#f5f5f5"><th style="padding:8px;text-align:left">Item</th><th style="padding:8px">Qty</th><th style="padding:8px">Price</th></tr>
              ${itemsHtml}
              <tr><td colspan="2" style="padding:8px;font-weight:bold">Total</td><td style="padding:8px;font-weight:bold;color:#C5A253">${money(totalNum || subtotal)}</td></tr>
            </table>
            <p style="color:#888;font-size:12px;margin-top:24px">Himalya Retreat Nepal · Khumaltar, Lalitpur · meditationastro1@gmail.com · +977 9851187267</p>
          </div>
        `,
      });

      // Send confirmation to customer
      await transporter.sendMail({
        from: `"Himalya Retreat Nepal" <${emailUser}>`,
        to: email,
        subject: `Order Confirmed: ${orderNumber} — Himalya Retreat Nepal`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
            <h2 style="color:#C5A253">🙏 Thank You for Your Order!</h2>
            <p>Namaste ${name},</p>
            <p>Your order <strong>${orderNumber}</strong> has been received. We will process and ship from Lalitpur, Nepal within 3–5 business days.</p>
            <p><strong>Currency:</strong> ${currency}</p>
            <p><strong>Payment:</strong> ${paymentMethod === 'cod' ? 'Cash on Delivery — pay when package arrives' : 'Bank Transfer — our team will send payment details'}</p>
            <p>Questions? WhatsApp: <a href="https://wa.me/9779851187267">+977 9851187267</a> or email: meditationastro1@gmail.com</p>
            <p style="color:#888;font-size:12px;margin-top:24px">Himalya Retreat Nepal · Khumaltar, Lalitpur, Nepal</p>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true, orderNumber });
  } catch (err: any) {
    console.error('Order error:', err);
    // Still return success with order number so UX doesn't break even if email fails
    const orderNumber = `HRN-${Date.now().toString().slice(-6)}`;
    return NextResponse.json({ success: true, orderNumber });
  }
}
