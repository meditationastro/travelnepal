import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', type = 'text', ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={`flex h-10 w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 placeholder:text-stone-400 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';
