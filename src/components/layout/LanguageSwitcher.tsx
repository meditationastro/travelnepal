'use client';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { LANGUAGES, Lang } from '@/lib/i18n';
import { useLang } from '@/components/providers/LanguageProvider';

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = LANGUAGES.find(l => l.code === lang) || LANGUAGES[0];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 rounded-lg font-medium transition-all ${
          compact
            ? 'px-2 py-1.5 text-xs text-white hover:bg-white/10'
            : 'px-3 py-2 text-sm text-stone-700 bg-stone-100 hover:bg-stone-200 border border-stone-200'
        }`}
      >
        <Globe className="w-3.5 h-3.5" />
        <span>{current.flag}</span>
        {!compact && <span>{current.native}</span>}
        <ChevronDown className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute top-full right-0 mt-1 w-44 bg-white rounded-2xl shadow-2xl border border-stone-100 py-2 z-[300]">
          {LANGUAGES.map(l => (
            <button
              key={l.code}
              onClick={() => { setLang(l.code as Lang); setOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                lang === l.code
                  ? 'bg-amber-50 text-amber-800 font-semibold'
                  : 'text-stone-700 hover:bg-stone-50'
              }`}
            >
              <span className="text-lg">{l.flag}</span>
              <div className="text-left">
                <div className="font-medium">{l.native}</div>
                <div className="text-xs text-stone-400">{l.label}</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
