'use client';

import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from 'react';
import type { Currency } from '@/lib/currency';

type CurrencyMode = 'AUTO' | Currency;

interface CurrencyCtx {
  mode: CurrencyMode;
  currency: Currency;
  setMode: (m: CurrencyMode) => void;
}

const Ctx = createContext<CurrencyCtx>({
  mode: 'AUTO',
  currency: 'USD',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setMode: () => {},
});

function detectCurrency(): Currency {
  if (typeof window === 'undefined') return 'USD';
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const locale = navigator.language || '';
    const isNepal = tz === 'Asia/Kathmandu' || locale.toLowerCase().includes('ne');
    return isNepal ? 'NPR' : 'USD';
  } catch {
    return 'USD';
  }
}

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<CurrencyMode>('AUTO');

  useEffect(() => {
    const saved = (localStorage.getItem('currencyMode') as CurrencyMode | null) || 'AUTO';
    if (saved === 'USD' || saved === 'NPR' || saved === 'AUTO') setModeState(saved);
  }, []);

  const setMode = (m: CurrencyMode) => {
    setModeState(m);
    localStorage.setItem('currencyMode', m);
  };

  const currency = useMemo<Currency>(() => {
    if (mode === 'USD' || mode === 'NPR') return mode;
    return detectCurrency();
  }, [mode]);

  return <Ctx.Provider value={{ mode, currency, setMode }}>{children}</Ctx.Provider>;
}

export function useCurrency() {
  return useContext(Ctx);
}
