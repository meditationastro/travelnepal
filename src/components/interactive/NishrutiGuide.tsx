'use client';

import { useEffect, useMemo, useState } from 'react';
import { Pause, Play, RotateCcw } from 'lucide-react';

type Step = { title: string; seconds: number; hint: string; emoji: string };

const DEFAULT_STEPS: Step[] = [
  { title: 'Arrive & Smile', seconds: 30, hint: 'Relax your face and let the breath soften. A small smile signals safety to the nervous system.', emoji: '😊' },
  { title: 'Breath Anchor', seconds: 60, hint: 'Feel the inhale/exhale at the nostrils or belly. Don’t force it—just notice.', emoji: '🌬️' },
  { title: 'Inner Sound / Mantra', seconds: 120, hint: 'Repeat a gentle inner phrase (or a simple “So…Hum”). Let it ride on the breath.', emoji: '📿' },
  { title: 'Witness Thoughts', seconds: 90, hint: 'When thoughts appear, label softly: “thinking”… and return to breath/mantra.', emoji: '👁️' },
  { title: 'Gratitude Close', seconds: 30, hint: 'Feel gratitude for the practice. Set a small intention for your day.', emoji: '🙏' },
];

function fmt(s: number) {
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${String(r).padStart(2, '0')}`;
}

export default function NishrutiGuide() {
  const [running, setRunning] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [remaining, setRemaining] = useState(DEFAULT_STEPS[0].seconds);

  const total = useMemo(() => DEFAULT_STEPS.reduce((a, b) => a + b.seconds, 0), []);
  const done = useMemo(() => DEFAULT_STEPS.slice(0, stepIndex).reduce((a, b) => a + b.seconds, 0) + (DEFAULT_STEPS[stepIndex].seconds - remaining), [stepIndex, remaining]);
  const pct = Math.max(0, Math.min(100, Math.round((done / total) * 100)));

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => {
      setRemaining((r) => {
        if (r > 1) return r - 1;
        // advance
        const next = stepIndex + 1;
        if (next >= DEFAULT_STEPS.length) {
          setRunning(false);
          return 0;
        }
        setStepIndex(next);
        return DEFAULT_STEPS[next].seconds;
      });
    }, 1000);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running, stepIndex]);

  const step = DEFAULT_STEPS[Math.min(stepIndex, DEFAULT_STEPS.length - 1)];

  const reset = () => {
    setRunning(false);
    setStepIndex(0);
    setRemaining(DEFAULT_STEPS[0].seconds);
  };

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-stone-100">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl font-semibold text-stone-900">Nishruti Meditation · Interactive Guide</h3>
          <p className="text-stone-600 text-sm mt-1">A simple step-by-step practice for calm, clarity, and gentle self-inquiry.</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setRunning(r => !r)}
            className="px-5 py-3 rounded-full font-semibold text-stone-900 shadow-sm border border-stone-200 hover:bg-stone-50 inline-flex items-center gap-2"
          >
            {running ? <><Pause className="w-4 h-4" /> Pause</> : <><Play className="w-4 h-4" /> Start</>}
          </button>
          <button
            onClick={reset}
            className="px-5 py-3 rounded-full font-semibold text-stone-700 border border-stone-200 hover:bg-stone-50 inline-flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" /> Reset
          </button>
        </div>
      </div>

      <div className="mt-6 rounded-3xl p-6" style={{ background: 'linear-gradient(135deg, rgba(197,162,83,0.18), rgba(39,66,43,0.08))', border: '1px solid rgba(197,162,83,0.25)' }}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-sm font-semibold" style={{ color: '#8B6914' }}>Step {Math.min(stepIndex + 1, DEFAULT_STEPS.length)} of {DEFAULT_STEPS.length}</div>
            <div className="font-display text-3xl text-stone-900 mt-1">{step.emoji} {step.title}</div>
            <p className="text-stone-700 mt-3 leading-relaxed">{step.hint}</p>
          </div>
          <div className="text-right">
            <div className="text-xs text-stone-500">Time left</div>
            <div className="font-display text-4xl text-stone-900">{fmt(remaining)}</div>
            <div className="text-xs text-stone-500 mt-1">Progress: {pct}%</div>
          </div>
        </div>
        <div className="h-2 rounded-full bg-white/60 mt-5 overflow-hidden">
          <div className="h-full rounded-full" style={{ width: `${pct}%`, background: 'linear-gradient(90deg, #C5A253, #27422b)' }} />
        </div>
      </div>

      <div className="grid md:grid-cols-5 gap-3 mt-6">
        {DEFAULT_STEPS.map((s, i) => (
          <button
            key={s.title}
            onClick={() => { setRunning(false); setStepIndex(i); setRemaining(DEFAULT_STEPS[i].seconds); }}
            className={`rounded-2xl p-3 border text-left transition-all ${i === stepIndex ? 'bg-stone-900 text-white border-stone-900' : 'bg-stone-50 border-stone-200 hover:bg-white'}`}
          >
            <div className="text-xs font-semibold opacity-80">{s.emoji} {s.title}</div>
            <div className={`text-xs mt-1 ${i === stepIndex ? 'text-white/80' : 'text-stone-500'}`}>{fmt(s.seconds)}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
