import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`glass rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200/50 ${className}`}>
      {children}
    </div>
  );
}
