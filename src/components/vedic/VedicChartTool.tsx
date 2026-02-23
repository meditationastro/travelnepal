
'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Sparkles, Info, ArrowRight, Loader2, Share2, Mail } from 'lucide-react';
import { cities } from '@/data/cities';

type Sign = { name: string; emoji: string; element: string; keywords: string };

type ChartResult = {
  utcISO: string;
  ayanamsha: number;
  sun: { sign: Sign; degIn: number };
  moon: { sign: Sign; degIn: number };
  asc: { sign: Sign; degIn: number };
  nakshatra: { name: string; degIn: number };
  rashiChart: { house: number; sign: Sign }[];
  predictions: { title: string; text: string; emoji: string }[];
  summary: string[];
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs px-3 py-2 rounded-full"
      style={{ background: 'rgba(197,162,83,0.12)', border: '1px solid rgba(197,162,83,0.25)', color: '#8B6914' }}>
      {children}
    </span>
  );
}

export default function VedicChartTool() {
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [tzOffset, setTzOffset] = useState('+05:45');
  const [lat, setLat] = useState('27.7172');
  const [lon, setLon] = useState('85.3240');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cityKey, setCityKey] = useState('Kathmandu|Nepal');
  const [shareStatus, setShareStatus] = useState<string | null>(null);
  const [emailStatus, setEmailStatus] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ChartResult | null>(null);

  const selectedCity = useMemo(() => {
    const [label, country] = cityKey.split('|');
    return cities.find((c) => c.label === label && c.country === country) || cities[0];
  }, [cityKey]);

  function applyCity() {
    if (!selectedCity) return;
    setLat(String(selectedCity.lat));
    setLon(String(selectedCity.lon));
    setTzOffset(selectedCity.tzOffset);
  }

  async function share() {
    setShareStatus(null);
    const shareText = `Vedic Birth Chart Preview\nName: ${name || '-'}\nBirth: ${birthDate} ${birthTime} (TZ ${tzOffset})\nPlace: ${lat}, ${lon}`;
    const url = typeof window !== 'undefined' ? window.location.href : '';
    try {
      // @ts-ignore
      if (navigator?.share) {
        // @ts-ignore
        await navigator.share({ title: 'Vedic Birth Chart', text: shareText, url });
        setShareStatus('Shared successfully ✅');
        return;
      }
      await navigator.clipboard.writeText(`${shareText}\n${url}`);
      setShareStatus('Copied to clipboard ✅');
    } catch {
      setShareStatus('Unable to share on this device.');
    }
  }

  async function emailMe() {
    setEmailStatus(null);
    if (!email) {
      setEmailStatus('Please enter your email to send.');
      return;
    }
    if (!result) {
      setEmailStatus('Generate your chart first.');
      return;
    }

    // Netlify Forms submission — configure Netlify notifications to forward this to your email.
    const formName = 'vedic-chart-lead';
    const payload: Record<string, string> = {
      'form-name': formName,
      name: name || '-',
      email,
      birthDate,
      birthTime,
      tzOffset,
      lat,
      lon,
      asc: `${result.asc.sign.name} ${result.asc.degIn}°`,
      sun: `${result.sun.sign.name} ${result.sun.degIn}°`,
      moon: `${result.moon.sign.name} ${result.moon.degIn}°`,
      nakshatra: `${result.nakshatra.name} ${result.nakshatra.degIn}°`,
      summary: result.summary.join(' | '),
    };

    try {
      const body = new URLSearchParams(payload).toString();
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });
      setEmailStatus('Sent ✅ (check your inbox / spam).');
    } catch {
      setEmailStatus('Could not send right now. Please try again.');
    }
  }

  async function generate() {
    setError(null);
    setResult(null);

    if (!birthDate || !birthTime) {
      setError('Please enter birth date and time.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/vedic-chart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          birthDate,
          birthTime,
          tzOffset,
          lat: Number(lat),
          lon: Number(lon),
          name,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data?.error || 'Unable to generate chart.');
        return;
      }
      setResult(data as ChartResult);
    } catch (e) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-stone-100">
      {/* Netlify form (hidden) so submissions are captured and can be emailed via Netlify notifications */}
      <form name="vedic-chart-lead" data-netlify="true" hidden>
        <input name="name" />
        <input name="email" />
        <input name="birthDate" />
        <input name="birthTime" />
        <input name="tzOffset" />
        <input name="lat" />
        <input name="lon" />
        <input name="asc" />
        <input name="sun" />
        <input name="moon" />
        <input name="nakshatra" />
        <input name="summary" />
      </form>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl font-semibold text-stone-900">Free Vedic Birth Chart Generator</h3>
          <p className="text-stone-600 text-sm mt-1">
            Generate a quick Jyotish preview (sidereal signs + nakshatra + house wheel). For full planet placements, dashas, and remedies—book a reading.
          </p>
        </div>
        <Pill><Info className="w-4 h-4" /> Fast server-generated chart</Pill>
      </div>

      <div className="grid md:grid-cols-6 gap-3 mt-6">
        <div className="md:col-span-2">
          <label className="text-xs font-semibold text-stone-600">Name (optional)</label>
          <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-amber-300" placeholder="Your name" />
        </div>

        <div className="md:col-span-2">
          <label className="text-xs font-semibold text-stone-600">City (optional)</label>
          <div className="mt-1 flex gap-2">
            <select value={cityKey} onChange={(e) => setCityKey(e.target.value)} className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-amber-300">
              {cities.map((c) => (
                <option key={`${c.label}|${c.country}`} value={`${c.label}|${c.country}`}>{c.label}, {c.country}</option>
              ))}
            </select>
            <button type="button" onClick={applyCity} className="rounded-2xl px-4 py-3 text-sm font-semibold border border-stone-200 bg-white hover:bg-stone-50">Use</button>
          </div>
          <p className="mt-1 text-[11px] text-stone-500">Auto-fills latitude/longitude + timezone (you can still edit manually).</p>
        </div>
        <div className="md:col-span-2">
          <label className="text-xs font-semibold text-stone-600">Birth date</label>
          <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} className="mt-1 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-amber-300" />
        </div>
        <div className="md:col-span-2">
          <label className="text-xs font-semibold text-stone-600">Birth time</label>
          <input type="time" value={birthTime} onChange={(e) => setBirthTime(e.target.value)} className="mt-1 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-amber-300" />
        </div>

        <div className="md:col-span-2">
          <label className="text-xs font-semibold text-stone-600">Email (to receive chart)</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-amber-300" placeholder="you@email.com" />
        </div>

        <div className="md:col-span-2">
          <label className="text-xs font-semibold text-stone-600">Timezone</label>
          <input value={tzOffset} onChange={(e) => setTzOffset(e.target.value)} className="mt-1 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-amber-300" placeholder="+05:45" />
          <p className="mt-1 text-[11px] text-stone-500">Format: +HH:MM (Nepal is +05:45)</p>
        </div>

        <div className="md:col-span-2">
          <label className="text-xs font-semibold text-stone-600">Latitude</label>
          <input value={lat} onChange={(e) => setLat(e.target.value)} className="mt-1 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-amber-300" />
        </div>
        <div className="md:col-span-2">
          <label className="text-xs font-semibold text-stone-600">Longitude</label>
          <input value={lon} onChange={(e) => setLon(e.target.value)} className="mt-1 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-amber-300" />
        </div>
      </div>

      <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:items-center">
        <button
          onClick={generate}
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-white disabled:opacity-60"
          style={{ background: 'linear-gradient(135deg, #c5a253, #8b5a00)' }}
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
          {loading ? 'Generating…' : 'Generate Chart'}
        </button>

        <Link href="/vedic-astrology/booking" className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold border border-stone-200 bg-white hover:bg-stone-50">
          Book full Jyotish reading <ArrowRight className="w-4 h-4" />
        </Link>

        <button type="button" onClick={share} className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold border border-stone-200 bg-white hover:bg-stone-50">
          Share <Share2 className="w-4 h-4" />
        </button>

        <button type="button" onClick={emailMe} className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold border border-stone-200 bg-white hover:bg-stone-50">
          Email me <Mail className="w-4 h-4" />
        </button>

        {error && <p className="text-sm text-red-600">{error}</p>}
        {shareStatus && <p className="text-sm text-stone-600">{shareStatus}</p>}
        {emailStatus && <p className="text-sm text-stone-600">{emailStatus}</p>}
      </div>

      {result && (
        <div className="mt-8 grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-stone-100 bg-stone-50 p-6">
            <h4 className="font-display text-lg font-semibold text-stone-900">Your core placements</h4>
            <div className="mt-4 grid sm:grid-cols-3 gap-3">
              <div className="rounded-2xl bg-white border border-stone-100 p-4">
                <div className="text-xs text-stone-500">Ascendant (Lagna)</div>
                <div className="mt-1 text-lg font-semibold text-stone-900">{result.asc.sign.emoji} {result.asc.sign.name}</div>
                <div className="text-xs text-stone-600">{result.asc.degIn}°</div>
              </div>
              <div className="rounded-2xl bg-white border border-stone-100 p-4">
                <div className="text-xs text-stone-500">Sun</div>
                <div className="mt-1 text-lg font-semibold text-stone-900">{result.sun.sign.emoji} {result.sun.sign.name}</div>
                <div className="text-xs text-stone-600">{result.sun.degIn}°</div>
              </div>
              <div className="rounded-2xl bg-white border border-stone-100 p-4">
                <div className="text-xs text-stone-500">Moon</div>
                <div className="mt-1 text-lg font-semibold text-stone-900">{result.moon.sign.emoji} {result.moon.sign.name}</div>
                <div className="text-xs text-stone-600">{result.moon.degIn}° • {result.nakshatra.name}</div>
              </div>
            </div>

            <div className="mt-5 space-y-2">
              {result.summary.map((s, i) => (
                <p key={i} className="text-sm text-stone-700">• {s}</p>
              ))}
            </div>

            <div className="mt-5 text-xs text-stone-500">
              Ayanamsha (approx): {result.ayanamsha}° • UTC: {new Date(result.utcISO).toUTCString()}
            </div>
          </div>

          <div className="rounded-3xl border border-stone-100 bg-white p-6">
            <h4 className="font-display text-lg font-semibold text-stone-900">Rashi chart (house wheel)</h4>
            <p className="text-sm text-stone-600 mt-1">House 1 starts at your Lagna. This is a fast preview to guide you—book for a full chart + dashas.</p>

            <div className="mt-4 grid grid-cols-3 gap-3">
              {result.rashiChart.map((h) => (
                <div key={h.house} className="rounded-2xl border border-stone-100 bg-stone-50 p-3">
                  <div className="text-[11px] text-stone-500">House {h.house}</div>
                  <div className="mt-1 font-semibold text-stone-900">{h.sign.emoji} {h.sign.name}</div>
                  <div className="text-[11px] text-stone-600">{h.sign.element}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-3xl p-5" style={{ background: 'linear-gradient(135deg, rgba(197,162,83,0.18), rgba(0,0,0,0))', border: '1px solid rgba(197,162,83,0.25)' }}>
              <h5 className="font-semibold text-stone-900">Instant predictions</h5>
              <div className="mt-3 space-y-3">
                {result.predictions.map((p, i) => (
                  <div key={i} className="text-sm text-stone-700">
                    <span className="mr-2">{p.emoji}</span>
                    <span className="font-semibold">{p.title}:</span> {p.text}
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <Link href="/vedic-astrology/booking" className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-white" style={{ background: 'linear-gradient(135deg, #1c1917, #7c2d12)' }}>
                  Get full chart & remedies <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(`Namaste! I generated my Vedic chart preview on your website and want a full Jyotish reading.\n\nName: ${name || '-'}\nBirth: ${birthDate} ${birthTime} (TZ ${tzOffset})\nPlace: ${lat}, ${lon}\n\nPlease guide me.`)}`}
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold border border-stone-200 bg-white hover:bg-stone-50"
                  rel="noreferrer"
                >
                  WhatsApp for analysis <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
