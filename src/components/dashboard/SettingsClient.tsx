'use client';

import { useState } from 'react';

export default function SettingsClient() {
  const [prefs, setPrefs] = useState({
    emails: true,
    whatsapp: true,
    reminders: true,
  });

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100">
      <h2 className="font-display text-lg font-semibold text-stone-900">Preferences</h2>
      <p className="text-stone-500 text-sm mt-1">These toggles are UI-only right now (safe to deploy).</p>

      <div className="mt-5 space-y-3">
        {[
          { key: 'emails', label: '📧 Email updates', desc: 'Booking confirmations and important trip info.' },
          { key: 'whatsapp', label: '💬 WhatsApp messages', desc: 'Fast support + last-minute coordination.' },
          { key: 'reminders', label: '⏰ Gentle reminders', desc: 'Packing list and preparation checklist nudges.' },
        ].map((i) => (
          <button
            key={i.key}
            type="button"
            onClick={() => setPrefs((p) => ({ ...p, [i.key]: !(p as any)[i.key] }))}
            className="w-full text-left p-4 rounded-2xl border border-stone-200 hover:bg-stone-50 transition-colors"
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="font-semibold text-stone-900">{i.label}</div>
                <div className="text-sm text-stone-500 mt-0.5">{i.desc}</div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  (prefs as any)[i.key] ? 'bg-green-100 text-green-700' : 'bg-stone-100 text-stone-600'
                }`}
              >
                {(prefs as any)[i.key] ? 'ON' : 'OFF'}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
