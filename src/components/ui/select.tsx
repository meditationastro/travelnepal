import * as React from 'react';

/**
 * Minimal Select API compatible with common shadcn-style imports used in the repo.
 * This is intentionally lightweight (no Radix dependency) to avoid build issues.
 */

type SelectContextValue = {
  value?: string;
  onValueChange?: (v: string) => void;
};

const SelectContext = React.createContext<SelectContextValue>({});

export function Select({
  value,
  onValueChange,
  children,
}: {
  value?: string;
  onValueChange?: (v: string) => void;
  children: React.ReactNode;
}) {
  return (
    <SelectContext.Provider value={{ value, onValueChange }}>{children}</SelectContext.Provider>
  );
}

export function SelectTrigger({
  className = '',
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  // Structural wrapper only; the actual control is SelectContent below.
  return <div className={className}>{children}</div>;
}

export function SelectValue({ placeholder }: { placeholder?: string }) {
  const ctx = React.useContext(SelectContext);
  return <span>{ctx.value || placeholder || ''}</span>;
}

export function SelectContent({
  className = '',
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const ctx = React.useContext(SelectContext);

  // Render as native <select> for maximal compatibility.
  // NOTE: SelectItem below must be used to define options.
  const options: Array<{ value: string; label: string }> = [];
  React.Children.forEach(children, (child: any) => {
    if (child?.type?.displayName === 'SelectItem') {
      options.push({ value: child.props.value, label: child.props.children });
    }
  });

  return (
    <select
      className={`flex h-10 w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${className}`}
      value={ctx.value}
      onChange={(e) => ctx.onValueChange?.(e.target.value)}
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}

export function SelectItem({
  value,
  children,
}: {
  value: string;
  children: string;
}) {
  // Used only for parsing by SelectContent
  return <>{children}</>;
}
SelectItem.displayName = 'SelectItem';
