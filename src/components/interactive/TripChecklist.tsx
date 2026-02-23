'use client';

import { useMemo, useState } from 'react';

const defaultItems = [
  { id: 'visa', label: '🛂 Visa plan ready (online / arrival)' },
  { id: 'sim', label: '📶 SIM / eSIM plan' },
  { id: 'cash', label: '💵 Some cash (NPR) + a card' },
  { id: 'layers', label: '🧥 Layers for mornings/evenings' },
  { id: 'shoes', label: '🥾 Comfortable shoes + sandals' },
  { id: 'insurance', label: '🧾 Travel insurance (recommended)' },
  { id: 'adapter', label: '🔌 Plug adapter (Type C/D/M)' },
  { id: 'water', label: '🚰 Refillable bottle' },
];

export default function TripChecklist() {
  const [done, setDone] = useState<Record<string, boolean>>({});

  const progress = useMemo(() => {
    const total = defaultItems.length;
    const completed = defaultItems.filter((i) => done[i.id]).length;
    return { total, completed, pct: Math.round((completed / total) * 100) };
  }, [done]);

  return (
    <div className="bg-white rounded-3xl p-7 md:p-10 shadow-sm border border-stone-100">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <div className="text-sm font-semibold text-stone-500 tracking-widest uppercase">Interactive</div>
          <h3 className="font-display text-2xl font-semibold text-stone-900 mt-2">Nepal Trip Checklist</h3>
          <p className="text-stone-500 mt-2">Tick items as you prepare—your progress stays in this page session.</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-display font-bold" style={{ color: '#C5A253' }}>{progress.pct}%</div>
          <div className="text-xs text-stone-500">{progress.completed}/{progress.total} done</div>
        </div>
      </div>

      <div className="mt-6 grid md:grid-cols-2 gap-3">
        {defaultItems.map((i) => (
          <button
            key={i.id}
            type="button"
            onClick={() => setDone((d) => ({ ...d, [i.id]: !d[i.id] }))}
            className={`p-4 rounded-2xl border text-left transition-colors ${
              done[i.id] ? 'border-green-200 bg-green-50' : 'border-stone-200 hover:bg-stone-50'
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <div className={`text-sm font-medium ${done[i.id] ? 'text-stone-500 line-through' : 'text-stone-900'}`}>{i.label}</div>
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${done[i.id] ? 'bg-green-200 text-green-900' : 'bg-stone-100 text-stone-600'}`}>
                {done[i.id] ? 'DONE' : 'TODO'}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
