'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { BookOpen, Flame, Lotus, Mail, ArrowRight } from 'lucide-react';

type Track = 'patanjali' | 'ashtanga' | 'ashtavakra';

const tracks: Record<Track, {
  title: string;
  emoji: string;
  icon: any;
  blurb: string;
  bullets: string[];
  color: string;
}> = {
  patanjali: {
    title: 'Patanjali Yoga Sutra',
    emoji: '📜',
    icon: BookOpen,
    blurb: 'Eight limbs (Ashtanga) as a complete science of mind: ethics, discipline, posture, breath, and samadhi.',
    bullets: ['Yama & Niyama: the foundation of character', 'Asana as steady seat (not just fitness)', 'Pranayama & pratyahara: nervous-system mastery', 'Dharana → Dhyana → Samadhi: the inner ascent'],
    color: '#C5A253',
  },
  ashtanga: {
    title: 'Ashtanga Vinyasa',
    emoji: '🔥',
    icon: Flame,
    blurb: 'Breath-synchronized movement to purify body + mind. Strong, dynamic, and deeply meditative.',
    bullets: ['Primary series structure + safe modifications', 'Bandha & drishti fundamentals', 'Mysore-style self-practice guidance', 'Build heat, clarity, and discipline'],
    color: '#16a34a',
  },
  ashtavakra: {
    title: 'Ashtavakra Gita',
    emoji: '🪷',
    icon: Lotus,
    blurb: 'Non-dual wisdom: freedom is not achieved—it is recognized. Direct insight into Self and liberation.',
    bullets: ['Witness consciousness and dis-identification', 'Freedom from mental stories', 'Living as awareness in daily life', 'Meditation as recognition, not effort'],
    color: '#7c2d12',
  },
};

export default function YogaPhilosophyCourse() {
  const [track, setTrack] = useState<Track>('patanjali');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  const meta = useMemo(() => tracks[track], [track]);
  const Icon = meta.icon;

  async function join() {
    setStatus(null);
    if (!email) {
      setStatus('Please enter your email.');
      return;
    }

    const formName = 'yoga-course-interest';
    const payload: Record<string, string> = {
      'form-name': formName,
      email,
      track,
    };

    try {
      const body = new URLSearchParams(payload).toString();
      await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body });
      setStatus('Submitted ✅ We will contact you with course schedule.');
      setEmail('');
    } catch {
      setStatus('Could not submit right now. Please try again.');
    }
  }

  return (
    <div className="rounded-3xl border border-stone-100 bg-white p-6 md:p-8 shadow-sm">
      {/* Netlify hidden form */}
      <form name="yoga-course-interest" data-netlify="true" hidden>
        <input name="email" />
        <input name="track" />
      </form>

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold"
            style={{ background: 'rgba(197,162,83,0.14)', color: '#8B6914', border: '1px solid rgba(197,162,83,0.28)' }}>
            🧠 Philosophy + Practice
          </div>
          <h2 className="mt-4 font-display text-3xl font-semibold text-stone-900">Yoga is a path of transformation</h2>
          <p className="mt-2 text-stone-600 max-w-2xl">Choose a tradition below to explore its core teachings, then join a guided course at Himalaya Retreat Nepal.</p>
        </div>
        <div className="flex gap-2">
          {(['patanjali', 'ashtanga', 'ashtavakra'] as Track[]).map((k) => (
            <button
              key={k}
              onClick={() => setTrack(k)}
              className={`rounded-2xl px-4 py-3 text-sm font-semibold border transition-all ${track === k ? 'bg-stone-900 text-white border-stone-900' : 'bg-white hover:bg-stone-50 border-stone-200'}`}
            >
              {tracks[k].emoji} {tracks[k].title.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid lg:grid-cols-2 gap-6">
        <div className="rounded-3xl p-6" style={{ background: `linear-gradient(135deg, ${meta.color}25, rgba(0,0,0,0))`, border: `1px solid ${meta.color}35` }}>
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: `${meta.color}25` }}>
              <Icon className="w-6 h-6" style={{ color: meta.color }} />
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold text-stone-900">{meta.emoji} {meta.title}</h3>
              <p className="text-stone-700 mt-1">{meta.blurb}</p>
            </div>
          </div>
          <ul className="mt-5 space-y-2">
            {meta.bullets.map((b) => (
              <li key={b} className="text-sm text-stone-700">• {b}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-stone-100 bg-stone-50 p-6">
          <h3 className="font-display text-xl font-semibold text-stone-900">Join the course</h3>
          <p className="text-sm text-stone-600 mt-1">Drop your email and we’ll send schedule + requirements. You can also WhatsApp us.</p>

          <label className="mt-4 block text-xs font-semibold text-stone-600">Email</label>
          <div className="mt-1 flex gap-2">
            <div className="flex items-center gap-2 rounded-2xl border border-stone-200 bg-white px-4 py-3 w-full">
              <Mail className="w-4 h-4 text-stone-500" />
              <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" className="w-full outline-none text-sm bg-transparent" />
            </div>
            <button onClick={join} className="rounded-2xl px-5 py-3 text-sm font-semibold text-white" style={{ background: 'linear-gradient(135deg, #c5a253, #8b5a00)' }}>
              Join
            </button>
          </div>
          {status && <p className="mt-2 text-sm text-stone-700">{status}</p>}

          <div className="mt-5 grid sm:grid-cols-2 gap-3">
            <Link href="/yoga/teacher-training" className="rounded-2xl border border-stone-200 bg-white px-5 py-3 text-sm font-semibold hover:bg-stone-50 inline-flex items-center justify-center gap-2">
              Teacher Training <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`https://wa.me/9779851187267?text=${encodeURIComponent(`Namaste! I want to join the ${meta.title} course. My email: ${email || '-'}`)}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-stone-200 bg-white px-5 py-3 text-sm font-semibold hover:bg-stone-50 inline-flex items-center justify-center gap-2"
            >
              WhatsApp <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
