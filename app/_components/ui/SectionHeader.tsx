import React from 'react';

type SectionHeaderProps = {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center';
};

export default function SectionHeader({ label, title, description, className = '', align = 'center' }: SectionHeaderProps) {
  const alignmentClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={`flex flex-col gap-3 ${alignmentClass} ${className}`}>
      {label && <span className="section-label">{label}</span>}
      <h2 className="heading-lg text-gradient">{title}</h2>
      {description && (
        <p className={`text-slate-500 text-lg max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
}
