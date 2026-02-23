'use client';

import { useMemo, useState } from 'react';

function buildWhatsAppUrl(message: string) {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';
  // If no phone is configured, fall back to wa.me without a number (opens WhatsApp with manual selection).
  const base = phone ? `https://wa.me/${phone.replace(/[^\d]/g, '')}` : 'https://wa.me/';
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function MeditationBookingForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [goal, setGoal] = useState('Calm & anxiety');
  const [preferredTime, setPreferredTime] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const message = useMemo(() => {
    const lines = [
      '🙏 Meditation Booking Request',
      '',
      `Name: ${name || '-'} `,
      `Email: ${email || '-'} `,
      `Phone: ${phone || '-'} `,
      `Goal: ${goal}`,
      `Preferred time: ${preferredTime || '-'}`,
      notes ? `Notes: ${notes}` : null,
      '',
      'Please confirm the session details and next steps.',
    ].filter(Boolean) as string[];
    return lines.join('\n');
  }, [email, goal, name, notes, phone, preferredTime]);

  const whatsappUrl = useMemo(() => buildWhatsAppUrl(message), [message]);

  return (
    <div className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-stone-700">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-himalaya-200"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-700">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="mt-2 w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-himalaya-200"
            placeholder="you@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-700">WhatsApp number</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-2 w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-himalaya-200"
            placeholder="+1 555 123 4567"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-700">Goal</label>
          <select
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="mt-2 w-full px-4 py-3 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-himalaya-200"
          >
            <option>Calm & anxiety</option>
            <option>Focus & clarity</option>
            <option>Better sleep</option>
            <option>Beginner foundations</option>
            <option>Emotional balance</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-stone-700">Preferred time (your timezone)</label>
          <input
            value={preferredTime}
            onChange={(e) => setPreferredTime(e.target.value)}
            className="mt-2 w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-himalaya-200"
            placeholder="e.g., Tue 7pm, UTC+5:30"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-stone-700">Notes (optional)</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={4}
            className="mt-2 w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-himalaya-200"
            placeholder="Anything you want us to know?"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-green-600 text-white font-medium hover:bg-green-700 transition"
          onClick={() => setSubmitted(true)}
        >
          Send via WhatsApp
        </a>
        <p className="text-sm text-stone-500">
          We typically reply within 24 hours.
        </p>
      </div>

      {submitted && (
        <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-4 text-sm text-green-800">
          ✅ Request drafted for WhatsApp. If WhatsApp didn’t open, copy the message from your
          browser bar or try again.
        </div>
      )}
    </div>
  );
}
