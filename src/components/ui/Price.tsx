'use client';

import { useMemo } from 'react';
import { useCurrency } from '@/components/providers/CurrencyProvider';
import { formatMoney, usdToNpr } from '@/lib/currency';

/**
 * Lightweight price renderer.
 * Canonical value is USD; NPR is computed using NEXT_PUBLIC_USD_TO_NPR.
 */
export function Price({
  usd,
  nprOverride,
  className,
}: {
  usd: number;
  nprOverride?: number;
  className?: string;
}) {
  const { currency } = useCurrency();

  const text = useMemo(() => {
    if (currency === 'NPR') {
      const npr = Number.isFinite(nprOverride as number) ? Number(nprOverride) : usdToNpr(usd);
      return formatMoney(npr, 'NPR');
    }
    return formatMoney(usd, 'USD');
  }, [currency, nprOverride, usd]);

  return <span className={className}>{text}</span>;
}
