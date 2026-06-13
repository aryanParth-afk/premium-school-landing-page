import React from 'react';

type BadgeProps = {
  children: React.ReactNode;
  variant?: 'default' | 'highlight';
  className?: string;
};

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const baseClasses = "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase transition-colors";
  const variantClasses = {
    default: "bg-slate-100 text-slate-600 border border-slate-200",
    highlight: "bg-indigo-100 text-indigo-700 border border-indigo-200"
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}
