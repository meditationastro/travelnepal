import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', ...props }, ref) => (
    <div
      ref={ref}
      className={`rounded-2xl border border-white/10 bg-stone-900/40 shadow-sm ${className}`}
      {...props}
    />
  ),
);
Card.displayName = 'Card';

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className = '', ...props }, ref) => (
    <div ref={ref} className={`p-6 ${className}`} {...props} />
  ),
);
CardHeader.displayName = 'CardHeader';

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className = '', ...props }, ref) => (
    <div ref={ref} className={`px-6 pb-6 ${className}`} {...props} />
  ),
);
CardContent.displayName = 'CardContent';

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className = '', ...props }, ref) => (
    <div ref={ref} className={`px-6 pb-6 ${className}`} {...props} />
  ),
);
CardFooter.displayName = 'CardFooter';
