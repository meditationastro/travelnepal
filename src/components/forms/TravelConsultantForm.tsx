'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  MapPin,
  Plane,
  Users,
  Wallet,
} from 'lucide-react';

export default function TravelConsultantForm() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [arrival, setArrival] = useState('');
  const [departure, setDeparture] = useState('');
  const [airportPickup, setAirportPickup] = useState(true);
  const [groupSize, setGroupSize] = useState('1');
  const [budget, setBudget] = useState('Mid-range');
  const [needs, setNeeds] = useState<string[]>(['Visa help', 'Airport pickup']);
  const [notes, setNotes] = useState('');

  const waText = useMemo(() => {
    const lines = [
      'Namaste! I want a travel planning consultation for Nepal.',
      name ? `Name: ${name}` : '',
      contact ? `Contact: ${contact}` : '',
      arrival ? `Arrival date: ${arrival}` : '',
      departure ? `Departure date: ${departure}` : '',
      `Group size: ${groupSize}`,
      `Budget: ${budget}`,
      `Needs: ${needs.join(', ')}`,
      `Airport pickup: ${airportPickup ? 'Yes' : 'No'}`,
      notes ? `Notes: ${notes}` : '',
    ].filter(Boolean);
    return encodeURIComponent(lines.join('\n'));
  }, [airportPickup, arrival, budget, contact, departure, groupSize, name, needs, notes]);

  const toggleNeed = (n: string) =>
    setNeeds((p) => (p.includes(n) ? p.filter((x) => x !== n) : [...p, n]));

  return (
    <div className="min-h-screen bg-stone-50">
      <section className="pt-28 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-semibold text-stone-900">
                ✈️ Get a Travel Consultant
              </h1>
              <p className="mt-4 text-stone-600 text-lg max-w-xl">
                Tell us your dates and needs. We’ll reply on WhatsApp with a practical plan for
                flights, visa guidance, pickup, hotels, and local transport in Nepal.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: <MapPin className="w-5 h-5" />,
                    title: 'Local expertise',
                    desc: 'Kathmandu, Lalitpur, Pokhara, temples, safe routes.',
                  },
                  {
                    icon: <CalendarDays className="w-5 h-5" />,
                    title: 'Timing & seasons',
                    desc: 'Best months for trekking, retreats, weather planning.',
                  },
                  {
                    icon: <Users className="w-5 h-5" />,
                    title: 'Solo or groups',
                    desc: 'Pickups, guides, stays for couples, families, teams.',
                  },
                  {
                    icon: <BadgeCheck className="w-5 h-5" />,
                    title: 'Stress-free',
                    desc: 'Avoid common travel mistakes and hidden costs.',
                  },
                ].map((c) => (
                  <div
                    key={c.title}
                    className="bg-white rounded-3xl p-6 border border-stone-100 shadow-sm"
                  >
                    <div className="text-amber-700">{c.icon}</div>
                    <div className="mt-3 font-display font-semibold text-stone-900">{c.title}</div>
                    <div className="mt-1 text-sm text-stone-600">{c.desc}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/retreats"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-stone-200 bg-white text-stone-800 font-medium hover:bg-stone-50 transition"
                >
                  Explore Retreats
                </Link>
                <a
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-stone-900 text-white font-medium hover:bg-stone-800 transition"
                  href={`https://wa.me/9779800000000?text=${waText}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp Consultant <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-stone-100 shadow-sm p-6 md:p-8">
              <div className="flex items-center gap-2 text-stone-900 font-display font-semibold text-xl">
                <Plane className="w-5 h-5 text-amber-700" /> Travel Consultation Form
              </div>
              <p className="mt-2 text-sm text-stone-600">
                Fill this and tap “Send on WhatsApp”. We’ll respond with your travel plan.
              </p>

              <div className="mt-6 grid gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="grid gap-1">
                    <span className="text-sm font-medium text-stone-700">Your name</span>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="px-4 py-3 rounded-2xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
                      placeholder="Full name"
                    />
                  </label>
                  <label className="grid gap-1">
                    <span className="text-sm font-medium text-stone-700">WhatsApp / Email</span>
                    <input
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      className="px-4 py-3 rounded-2xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
                      placeholder="+977... or email"
                    />
                  </label>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="grid gap-1">
                    <span className="text-sm font-medium text-stone-700">Arrival date</span>
                    <input
                      type="date"
                      value={arrival}
                      onChange={(e) => setArrival(e.target.value)}
                      className="px-4 py-3 rounded-2xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </label>
                  <label className="grid gap-1">
                    <span className="text-sm font-medium text-stone-700">Departure date</span>
                    <input
                      type="date"
                      value={departure}
                      onChange={(e) => setDeparture(e.target.value)}
                      className="px-4 py-3 rounded-2xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </label>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <label className="grid gap-1">
                    <span className="text-sm font-medium text-stone-700">Group size</span>
                    <input
                      value={groupSize}
                      onChange={(e) => setGroupSize(e.target.value)}
                      className="px-4 py-3 rounded-2xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
                      placeholder="1"
                    />
                  </label>
                  <label className="grid gap-1">
                    <span className="text-sm font-medium text-stone-700">Budget</span>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="px-4 py-3 rounded-2xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    >
                      <option>Budget</option>
                      <option>Mid-range</option>
                      <option>Comfort</option>
                      <option>Luxury</option>
                    </select>
                  </label>
                  <label className="grid gap-1">
                    <span className="text-sm font-medium text-stone-700">Airport pickup</span>
                    <button
                      type="button"
                      onClick={() => setAirportPickup((p) => !p)}
                      className={`px-4 py-3 rounded-2xl border text-left transition focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                        airportPickup
                          ? 'border-amber-200 bg-amber-50 text-stone-900'
                          : 'border-stone-200 bg-white text-stone-700'
                      }`}
                    >
                      {airportPickup ? 'Yes' : 'No'}
                    </button>
                  </label>
                </div>

                <div className="rounded-2xl border border-stone-200 p-4">
                  <div className="flex items-center gap-2 font-medium text-stone-800">
                    <Wallet className="w-4 h-4 text-amber-700" /> What do you need help with?
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      'Visa help',
                      'Airport pickup',
                      'Hotel booking',
                      'Domestic flights',
                      'Local transport',
                      'Temple tour',
                      'Trekking add-on',
                      'Food/diet needs',
                    ].map((n) => {
                      const active = needs.includes(n);
                      return (
                        <button
                          key={n}
                          type="button"
                          onClick={() => toggleNeed(n)}
                          className={`px-3 py-2 rounded-full text-sm border transition ${
                            active
                              ? 'bg-stone-900 text-white border-stone-900'
                              : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                          }`}
                        >
                          {active ? '✅ ' : ''}
                          {n}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <label className="grid gap-1">
                  <span className="text-sm font-medium text-stone-700">Notes</span>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="px-4 py-3 rounded-2xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-400 min-h-[120px]"
                    placeholder="Flights, cities you want to visit, hotel preference, dietary needs, anything…"
                  />
                </label>

                <a
                  className="mt-2 inline-flex items-center justify-center w-full px-6 py-3 rounded-2xl bg-amber-600 text-white font-semibold hover:bg-amber-500 transition"
                  href={`https://wa.me/9779800000000?text=${waText}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Send on WhatsApp <ArrowRight className="w-4 h-4 ml-2" />
                </a>

                <div className="text-xs text-stone-500">
                  Tip: If you don’t have WhatsApp, put your email in the contact field and we’ll
                  respond there.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
