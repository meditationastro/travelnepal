'use client';

import { useEffect, useMemo, useState } from 'react';
import { ChevronDown } from 'lucide-react';

type Item = { label: string; href: string };

export default function VedicToolsMenu({
  items,
  placeholder = 'Jump to…',
}: {
  items: Item[];
  placeholder?: string;
}) {
  const [value, setValue] = useState('');

  const options = useMemo(() => [{ label: placeholder, href: '' }, ...items], [items, placeholder]);

  useEffect(() => {
    if (!value) return;
    const el = document.querySelector(value);
    if (el && 'scrollIntoView' in el) {
      (el as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // reset so user can re-select the same item later
    const t = setTimeout(() => setValue(''), 400);
    return () => clearTimeout(t);
  }, [value]);

  return (
    <div className="relative inline-flex items-center">
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="appearance-none pl-4 pr-10 py-2.5 rounded-full border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-400"
      >
        {options.map((o) => (
          <option key={o.label} value={o.href}>
            {o.label}
          </option>
        ))}
      </select>
      <ChevronDown className="w-4 h-4 text-stone-500 absolute right-4 pointer-events-none" />
    </div>
  );
}
