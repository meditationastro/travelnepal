'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

type Answers = {
  age: string;
  bodyFrame: string;
  skin: string;
  appetite: string;
  digestion: string;
  sleep: string;
  stress: string;
  climate: string;
  energy: string;
  mind: string;
};

const options = {
  age: ['Under 25', '25–40', '40+'],
  bodyFrame: ['Light / slim', 'Medium / athletic', 'Broad / heavy'],
  skin: ['Dry / rough', 'Warm / oily / sensitive', 'Cool / moist'],
  appetite: ['Irregular', 'Strong', 'Steady / slow'],
  digestion: ['Gas / bloating', 'Acid / burning', 'Heavy / sluggish'],
  sleep: ['Light / interrupted', 'Moderate', 'Deep / long'],
  stress: ['Worry / anxiety', 'Irritability / anger', 'Withdrawal / inertia'],
  climate: ['Cold / windy bothers me', 'Heat bothers me', 'Damp / cold bothers me'],
  energy: ['Quick bursts then tired', 'Intense / driven', 'Slow but enduring'],
  mind: ['Creative / fast thoughts', 'Focused / sharp', 'Calm / steady but attached'],
} as const;

function scoreDosha(a: Answers) {
  const score = { Vata: 0, Pitta: 0, Kapha: 0 };
  const map: Record<keyof Answers, ('Vata' | 'Pitta' | 'Kapha')[]> = {
    age: ['Vata', 'Pitta', 'Kapha'],
    bodyFrame: ['Vata', 'Pitta', 'Kapha'],
    skin: ['Vata', 'Pitta', 'Kapha'],
    appetite: ['Vata', 'Pitta', 'Kapha'],
    digestion: ['Vata', 'Pitta', 'Kapha'],
    sleep: ['Vata', 'Pitta', 'Kapha'],
    stress: ['Vata', 'Pitta', 'Kapha'],
    climate: ['Vata', 'Pitta', 'Kapha'],
    energy: ['Vata', 'Pitta', 'Kapha'],
    mind: ['Vata', 'Pitta', 'Kapha'],
  };

  (Object.keys(map) as (keyof Answers)[]).forEach((k) => {
    const v = a[k];
    const idx = (options as any)[k].indexOf(v);
    if (idx >= 0) score[map[k][idx]] += 1;
  });

  const ordered = Object.entries(score).sort((x, y) => y[1] - x[1]);
  return { score, primary: ordered[0][0], secondary: ordered[1][0] };
}

export default function DoshaDiscoveryPage() {
  const [answers, setAnswers] = useState<Answers>({
    age: '',
    bodyFrame: '',
    skin: '',
    appetite: '',
    digestion: '',
    sleep: '',
    stress: '',
    climate: '',
    energy: '',
    mind: '',
  });
  const [show, setShow] = useState(false);

  const completed = useMemo(() => Object.values(answers).filter(Boolean).length, [answers]);
  const total = Object.keys(answers).length;

  const result = useMemo(() => {
    if (!show) return null;
    return scoreDosha(answers);
  }, [answers, show]);

  const whatsappText = useMemo(() => {
    if (!result) return '';
    const lines = [
      'Namaste! I completed the Dosha Discovery form.',
      `Result: ${result.primary} (secondary: ${result.secondary})`,
      `Answers: ${JSON.stringify(answers)}`,
      'Please recommend a simple food + herb routine.',
    ];
    return encodeURIComponent(lines.join('\n'));
  }, [answers, result]);

  return (
    <div className="min-h-screen bg-stone-50">
      <section className="pt-28 pb-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-semibold text-stone-900">
                🌿 Discover Your Dosha
              </h1>
              <p className="mt-3 text-stone-600 max-w-2xl">
                Answer a few questions and get a quick, practical dosha estimate (Vata / Pitta / Kapha).
                For a full assessment, we confirm on WhatsApp.
              </p>
            </div>
            <div className="bg-white border border-stone-100 shadow-sm rounded-3xl p-4">
              <div className="text-sm text-stone-600">Progress</div>
              <div className="mt-1 text-2xl font-semibold text-stone-900">
                {completed}/{total}
              </div>
              <div className="mt-2 h-2 rounded-full bg-stone-100 overflow-hidden">
                <div className="h-full bg-amber-400" style={{ width: `${Math.round((completed / total) * 100)}%` }} />
              </div>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-5">
            {(Object.keys(options) as (keyof typeof options)[]).map((k) => (
              <div key={k} className="bg-white rounded-3xl p-6 border border-stone-100 shadow-sm">
                <div className="text-sm font-medium text-stone-700 capitalize">
                  {k.replace(/([A-Z])/g, ' $1')}
                </div>
                <div className="mt-3 grid gap-2">
                  {options[k].map((opt) => {
                    const active = (answers as any)[k] === opt;
                    return (
                      <button
                        key={opt}
                        onClick={() => setAnswers((p) => ({ ...p, [k]: opt }))}
                        className={`text-left px-4 py-3 rounded-2xl border transition ${
                          active
                            ? 'border-amber-300 bg-amber-50 text-stone-900'
                            : 'border-stone-200 bg-white hover:bg-stone-50 text-stone-700'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-sm font-medium">{opt}</span>
                          {active && <CheckCircle2 className="w-4 h-4 text-amber-600" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white rounded-3xl p-8 border border-stone-100 shadow-sm">
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
              <div>
                <h2 className="text-2xl font-display font-semibold text-stone-900">Get your result</h2>
                <p className="mt-1 text-stone-600">
                  This is a quick estimate. For herbs, diet, and lifestyle recommendations, book a dosha consultation.
                </p>
              </div>
              <button
                onClick={() => setShow(true)}
                disabled={completed < total}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition ${
                  completed < total
                    ? 'bg-stone-200 text-stone-500 cursor-not-allowed'
                    : 'bg-stone-900 text-white hover:bg-stone-800'
                }`}
              >
                Show Result <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {result && (
              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <div className="rounded-3xl p-6 bg-amber-50 border border-amber-100">
                  <div className="text-sm text-amber-900 font-medium">Primary</div>
                  <div className="mt-1 text-3xl font-display font-semibold text-stone-900">{result.primary}</div>
                </div>
                <div className="rounded-3xl p-6 bg-stone-50 border border-stone-100">
                  <div className="text-sm text-stone-700 font-medium">Secondary</div>
                  <div className="mt-1 text-3xl font-display font-semibold text-stone-900">{result.secondary}</div>
                </div>
                <div className="rounded-3xl p-6 bg-white border border-stone-200">
                  <div className="text-sm text-stone-700 font-medium">Next step</div>
                  <p className="mt-2 text-sm text-stone-600">
                    Want food + herb guidance tailored to your routine?
                  </p>
                  <a
                    className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-himalaya-700 text-white font-medium hover:bg-himalaya-800 transition w-full"
                    href={`https://wa.me/9779851187267?text=${whatsappText}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp for Dosha Plan <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )}

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/ayurveda"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-stone-200 bg-white text-stone-800 font-medium hover:bg-stone-50 transition"
              >
                Back to Ayurveda
              </Link>
              <Link
                href="/retreats"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-stone-200 bg-white text-stone-800 font-medium hover:bg-stone-50 transition"
              >
                Explore Retreats
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
