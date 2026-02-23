'use client';

import * as React from 'react';

export default function RichTextEditor({
  value,
  onChange,
  placeholder,
  className,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl border border-stone-700 bg-stone-900/40 ${className ?? ''}`}>
      <div className="px-4 py-3 border-b border-stone-700 text-sm text-stone-300 flex items-center justify-between">
        <span>Editor</span>
        <span className="text-xs text-stone-400">Markdown supported</span>
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder ?? 'Write here...'}
        className="w-full min-h-[260px] bg-transparent p-4 outline-none text-stone-100 placeholder:text-stone-500"
      />
    </div>
  );
}
