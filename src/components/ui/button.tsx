import * as React from 'react';

export type ButtonVariant =
  | 'default'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'destructive'
  | 'link';

export type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const base =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 disabled:pointer-events-none disabled:opacity-50';

const variants: Record<ButtonVariant, string> = {
  default: 'bg-amber-500 text-black hover:bg-amber-400',
  secondary: 'bg-stone-800 text-white hover:bg-stone-700',
  outline: 'border border-stone-300 bg-white/0 text-white hover:bg-white/10',
  ghost: 'bg-transparent text-white hover:bg-white/10',
  destructive: 'bg-red-600 text-white hover:bg-red-500',
  link: 'bg-transparent text-amber-300 underline-offset-4 hover:underline',
};

const sizes: Record<ButtonSize, string> = {
  default: 'h-10 px-4 py-2',
  sm: 'h-9 px-3',
  lg: 'h-11 px-6',
  icon: 'h-10 w-10',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';
