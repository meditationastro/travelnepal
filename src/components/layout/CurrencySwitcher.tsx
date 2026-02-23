'use client';

import { ChevronDown } from 'lucide-react';
import { useCurrency } from '@/components/providers/CurrencyProvider';

export function CurrencySwitcher({ compact }: { compact?: boolean }) {
  const { mode, currency, setMode } = useCurrency();

  return (
    <div className="relative">
      <label className="sr-only">Currency</label>
      <div className="relative">
        <select
          value={mode}
          onChange={(e) => setMode(e.target.value as any)}
          className={
            compact
              ? 'appearance-none bg-white/10 text-white text-xs font-semibold px-3 py-2 pr-8 rounded-xl border border-white/20 shadow-lg hover:bg-white/15 hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-amber-400/40 transition'
              : 'appearance-none bg-white text-stone-800 text-sm font-semibold px-3 py-2 pr-8 rounded-xl border border-stone-200'
          }
          title={`Currency: ${currency}`}
        >
          <option value="AUTO">Auto ({currency})</option>
          <option value="USD">USD ($)</option>
          <option value="NPR">NPR (रू)</option>
        </select>
        <ChevronDown
          className={
            compact
              ? 'pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/80'
              : 'pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500'
          }
        />
      </div>
    </div>
  );
}
