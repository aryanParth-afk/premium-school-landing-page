import React from 'react';
import AnimatedCounter from '../ui/AnimatedCounter';
import ScrollReveal from '../ui/ScrollReveal';

const stats = [
  { label: 'Students', value: 5000, suffix: '+' },
  { label: 'Expert Faculty', value: 250, suffix: '+' },
  { label: 'Years of Excellence', value: 25, suffix: '+' },
  { label: 'Academic Programs', value: 50, suffix: '+' },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-primary relative overflow-hidden text-white">
      {/* Subtle decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.1}>
              <div className="flex flex-col items-center justify-center p-4">
                <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 flex items-center justify-center">
                  <AnimatedCounter value={stat.value} />
                  <span>{stat.suffix}</span>
                </div>
                <div className="text-accent-light font-medium uppercase tracking-wide text-sm">
                  {stat.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
