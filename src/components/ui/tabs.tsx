'use client';

import * as React from 'react';

type TabsContextValue = {
  value: string;
  setValue: (v: string) => void;
};

const TabsContext = React.createContext<TabsContextValue | null>(null);

export function Tabs({ defaultValue, value, onValueChange, children, className }: {
  defaultValue?: string;
  value?: string;
  onValueChange?: (v: string) => void;
  children: React.ReactNode;
  className?: string;
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? '');
  const current = value ?? internal;

  const setValue = (v: string) => {
    if (onValueChange) onValueChange(v);
    if (value === undefined) setInternal(v);
  };

  return (
    <TabsContext.Provider value={{ value: current, setValue }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`inline-flex gap-2 rounded-2xl bg-stone-900/60 p-1 border border-stone-700 ${className ?? ''}`}>
      {children}
    </div>
  );
}

export function TabsTrigger({ value, children, className }: { value: string; children: React.ReactNode; className?: string }) {
  const ctx = React.useContext(TabsContext);
  if (!ctx) throw new Error('TabsTrigger must be used within Tabs');

  const active = ctx.value === value;
  return (
    <button
      type="button"
      onClick={() => ctx.setValue(value)}
      className={`px-4 py-2 rounded-xl text-sm transition ${active ? 'bg-amber-500 text-black' : 'text-stone-200 hover:bg-stone-800'} ${className ?? ''}`}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children, className }: { value: string; children: React.ReactNode; className?: string }) {
  const ctx = React.useContext(TabsContext);
  if (!ctx) throw new Error('TabsContent must be used within Tabs');
  if (ctx.value !== value) return null;
  return <div className={className}>{children}</div>;
}
