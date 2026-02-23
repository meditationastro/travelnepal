'use client';

import { useMemo, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

function digitsFromDate(iso: string) {
  // iso: YYYY-MM-DD
  const d = iso.replace(/-/g, '');
  return d.split('').map((c) => parseInt(c, 10)).filter((n) => !Number.isNaN(n));
}

function reduceTo1to9(n: number) {
  let x = n;
  while (x > 9) x = String(x).split('').reduce((a, c) => a + parseInt(c, 10), 0);
  return x || 0;
}

function buildMatrix(nums: number[]) {
  // 1..9 count (simple numerology-style mapping)
  const counts: Record<number, number> = { 1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0 };
  nums.forEach((n) => {
    if (n >= 1 && n <= 9) counts[n] += 1;
  });
  return counts;
}

export default function LifeMatrixMapper() {
  const [birthDate, setBirthDate] = useState('');
  const [focus, setFocus] = useState('Clarity');
  const [energy, setEnergy] = useState('Low');
  const [resultOpen, setResultOpen] = useState(false);

  const counts = useMemo(() => {
    if (!birthDate) return null;
    const nums = digitsFromDate(birthDate).map(reduceTo1to9);
    return buildMatrix(nums);
  }, [birthDate]);

  const insights = useMemo(() => {
    if (!counts) return null;

    const strong = Object.entries(counts).filter(([_, v]) => v >= 2).map(([k]) => k);
    const missing = Object.entries(counts).filter(([_, v]) => v === 0).map(([k]) => k);

    const focusHint =
      focus === 'Clarity'
        ? 'Pick one decision and define a 14-day experiment.'
        : focus === 'Relationships'
        ? 'One honest conversation + one boundary this week.'
        : focus === 'Career'
        ? 'Choose a single skill to deepen for 30 days.'
        : 'Build a simple daily routine and protect it.';

    const energyHint =
      energy === 'Low'
        ? 'Start tiny: 7 minutes daily, same time.'
        : energy === 'Medium'
        ? 'Add consistency: 20 minutes daily + weekly review.'
        : 'Channel intensity: 1 priority per day, avoid overcommitment.';

    return { strong, missing, focusHint, energyHint };
  }, [counts, energy, focus]);

  return (
    <div className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h3 className="text-2xl font-display font-semibold text-stone-900">🧭 Interactive Life Matrix</h3>
          <p className="mt-2 text-stone-600">
            Enter your birth date to generate a simple life matrix (numbers 1–9). Then choose your focus to get a practical plan.
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full bg-amber-50 border border-amber-100 text-amber-900">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">Instant guidance</span>
        </div>
      </div>

      <div className="mt-6 grid md:grid-cols-3 gap-4">
        <label className="block">
          <span className="text-sm font-medium text-stone-700">Birth date</span>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="mt-1 w-full rounded-2xl border border-stone-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-400"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-stone-700">Focus area</span>
          <select
            value={focus}
            onChange={(e) => setFocus(e.target.value)}
            className="mt-1 w-full rounded-2xl border border-stone-200 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-400"
          >
            <option>Clarity</option>
            <option>Relationships</option>
            <option>Career</option>
            <option>Health</option>
          </select>
        </label>

        <label className="block">
          <span className="text-sm font-medium text-stone-700">Current energy</span>
          <select
            value={energy}
            onChange={(e) => setEnergy(e.target.value)}
            className="mt-1 w-full rounded-2xl border border-stone-200 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-400"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </label>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <button
          onClick={() => setResultOpen(true)}
          disabled={!birthDate}
          className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition ${
            birthDate ? 'bg-stone-900 text-white hover:bg-stone-800' : 'bg-stone-200 text-stone-500 cursor-not-allowed'
          }`}
        >
          Generate Matrix <ArrowRight className="w-4 h-4" />
        </button>
        <p className="text-xs text-stone-500 sm:self-center">
          Tip: This is a reflective tool, not medical advice.
        </p>
      </div>

      {resultOpen && counts && insights && (
        <div className="mt-8">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-3xl border border-stone-200 bg-stone-50 p-6">
              <div className="text-sm font-semibold text-stone-900">Your Matrix (1–9)</div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[1,2,3,4,5,6,7,8,9].map((n) => (
                  <div key={n} className="bg-white rounded-2xl border border-stone-100 p-4 text-center">
                    <div className="text-xs text-stone-500">#{n}</div>
                    <div className="mt-1 text-2xl font-display font-semibold text-stone-900">{counts[n]}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-sm text-stone-600">
                <span className="font-medium text-stone-800">Strong numbers:</span>{' '}
                {insights.strong.length ? insights.strong.join(', ') : '—'} ·{' '}
                <span className="font-medium text-stone-800">Missing:</span>{' '}
                {insights.missing.length ? insights.missing.join(', ') : '—'}
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-stone-100 shadow-sm p-6">
              <div className="text-sm font-semibold text-stone-900">Your 30-day action plan</div>
              <ul className="mt-4 space-y-2 text-stone-600">
                <li>• Focus: <span className="font-medium text-stone-800">{insights.focusHint}</span></li>
                <li>• Energy: <span className="font-medium text-stone-800">{insights.energyHint}</span></li>
                <li>• Ritual: 10 minutes breath + 10 minutes silent sit daily 🧘</li>
                <li>• Review: every Sunday — write 3 wins + 1 adjustment ✍️</li>
              </ul>

              <div className="mt-6 rounded-3xl bg-amber-50 border border-amber-100 p-5">
                <div className="text-sm font-semibold text-amber-900">Want this mapped with Jyotish + meditation?</div>
                <p className="mt-1 text-sm text-stone-700">
                  Book a Life Matrix consultation and we’ll create a personalized matrix + integration plan.
                </p>
                <a
                  className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-himalaya-700 text-white font-medium hover:bg-himalaya-800 transition w-full"
                  href="https://wa.me/9779851187267?text=Namaste! I want a Life Matrix Mapping consultation."
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp to Book <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
