export type Currency = 'USD' | 'NPR';

// Canonical pricing is stored in USD throughout the app.
// NPR display is computed using a configurable conversion rate.
// Override via NEXT_PUBLIC_USD_TO_NPR (e.g. "133.5").

export function getUsdToNprRate(): number {
  const raw = process.env.NEXT_PUBLIC_USD_TO_NPR;
  const n = raw ? Number(raw) : NaN;
  // Safe default (editable via env). Avoid crashing if env missing.
  return Number.isFinite(n) && n > 0 ? n : 133;
}

export function usdToNpr(usd: number, rate = getUsdToNprRate()): number {
  if (!Number.isFinite(usd)) return 0;
  return usd * rate;
}

export function formatMoney(amount: number, currency: Currency): string {
  try {
    // en-NP prints Nepal-friendly grouping; that's preferred for NPR.
    const locale = currency === 'NPR' ? 'en-NP' : 'en-US';
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    }).format(amount);
  } catch {
    return currency === 'NPR' ? `NPR ${Math.round(amount)}` : `$${Math.round(amount)}`;
  }
}
