'use client';

import { useMemo, useState } from 'react';
import { ArrowRight, Loader2, Phone } from 'lucide-react';

type Props = {
  title?: string;
  defaultService?: string;
  whatsappNumber?: string; // e.g. 97798...
};

export default function ConsultationBookingForm({
  title = 'Book a Consultation',
  defaultService = 'Vedic Astrology Consultation',
  whatsappNumber = '9779851187267',
}: Props) {
  const [name, setName] = useState('');
  const [emailOrWhatsapp, setEmailOrWhatsapp] = useState('');
  const [service, setService] = useState(defaultService);
  const [topic, setTopic] = useState('');
  const [birthDetails, setBirthDetails] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const waText = useMemo(() => {
    const parts = [
      'Namaste! I want to book a consultation.',
      `Service: ${service}`,
      name ? `Name: ${name}` : '',
      emailOrWhatsapp ? `Contact: ${emailOrWhatsapp}` : '',
      topic ? `Focus: ${topic}` : '',
      preferredTime ? `Preferred time: ${preferredTime}` : '',
      birthDetails ? `Birth details: ${birthDetails}` : '',
    ].filter(Boolean);
    return encodeURIComponent(parts.join('\n'));
  }, [birthDetails, emailOrWhatsapp, name, preferredTime, service, topic]);

  const submit = () => {
    setSubmitted(true);
    const url = `https://wa.me/${whatsappNumber}?text=${waText}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-display font-semibold text-stone-900">{title}</h3>
          <p className="mt-2 text-stone-600">
            Fill the form and we&apos;ll confirm on WhatsApp. You can also add your birth details for a faster reading.
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full bg-amber-50 border border-amber-100 text-amber-900">
          <Phone className="w-4 h-4" />
          <span className="text-sm font-medium">Fast WhatsApp confirmation</span>
        </div>
      </div>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-sm font-medium text-stone-700">Your name</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full rounded-2xl border border-stone-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-400"
            placeholder="Harry"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-stone-700">WhatsApp or email</span>
          <input
            value={emailOrWhatsapp}
            onChange={(e) => setEmailOrWhatsapp(e.target.value)}
            className="mt-1 w-full rounded-2xl border border-stone-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-400"
            placeholder="+97798… or name@email.com"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-stone-700">Service</span>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="mt-1 w-full rounded-2xl border border-stone-200 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-400"
          >
            <option>Vedic Astrology Consultation</option>
            <option>Navagraha Puja / Remedies</option>
            <option>Life Matrix Mapping</option>
            <option>Ayurvedic Dosha Consultation</option>
            <option>Retreat Planning Call</option>
          </select>
        </label>

        <label className="block">
          <span className="text-sm font-medium text-stone-700">Preferred time (optional)</span>
          <input
            value={preferredTime}
            onChange={(e) => setPreferredTime(e.target.value)}
            className="mt-1 w-full rounded-2xl border border-stone-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-400"
            placeholder="Any evening, Nepal time"
          />
        </label>

        <label className="block md:col-span-2">
          <span className="text-sm font-medium text-stone-700">What do you want to focus on?</span>
          <input
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="mt-1 w-full rounded-2xl border border-stone-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-400"
            placeholder="Career, marriage, health, spiritual path…"
          />
        </label>

        <label className="block md:col-span-2">
          <span className="text-sm font-medium text-stone-700">Birth details (optional)</span>
          <textarea
            value={birthDetails}
            onChange={(e) => setBirthDetails(e.target.value)}
            rows={3}
            className="mt-1 w-full rounded-2xl border border-stone-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-400"
            placeholder="Date, time, place (city/country). Example: 1996-03-11, 06:45, Kathmandu"
          />
        </label>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <button
          onClick={submit}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-stone-900 text-white font-medium hover:bg-stone-800 transition"
        >
          {submitted ? <Loader2 className="w-4 h-4 animate-spin" /> : <ArrowRight className="w-4 h-4" />}
          Send on WhatsApp
        </button>
        <p className="text-xs text-stone-500 sm:self-center">
          By sending, you agree to contact via WhatsApp for scheduling & reminders.
        </p>
      </div>
    </div>
  );
}
