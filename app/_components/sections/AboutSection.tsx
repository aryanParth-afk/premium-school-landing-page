import React from 'react';
import Image from 'next/image';
import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';
import Badge from '../ui/Badge';

const features = ['Holistic Education', 'Modern Campus', 'Global Perspective', 'Values-Based', 'Innovation Driven'];

export default function AboutSection() {
  return (
    <section className="py-24 bg-white overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <ScrollReveal direction="left" className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-square shadow-2xl">
              <Image 
                src="/images/school-campus.jpg" 
                alt="School Campus" 
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-primary/10"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl -z-10"></div>
          </ScrollReveal>

          {/* Content Side */}
          <ScrollReveal direction="right" className="flex flex-col gap-6 order-1 lg:order-2">
            <SectionHeader 
              label="About Our School" 
              title="A Legacy of Excellence in Education" 
              align="left" 
            />
            
            <div className="text-slate-600 text-lg leading-relaxed space-y-4">
              <p>
                Founded on the principles of academic rigor and moral integrity, DholakPur Public School has been at the forefront of quality education for over two decades. We believe in nurturing the unique potential within every child.
              </p>
              <p>
                Our campus provides a stimulating environment where students are encouraged to question, explore, and innovate. We combine traditional values with modern teaching methodologies to prepare our students for the challenges of tomorrow.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              {features.map((feature, idx) => (
                <ScrollReveal key={idx} direction="up" delay={0.2 + idx * 0.1}>
                  <Badge variant="default" className="px-4 py-2 bg-slate-50 border border-slate-200 text-slate-700 shadow-sm cursor-default">
                    {feature}
                  </Badge>
                </ScrollReveal>
              ))}
            </div>

            <div className="pt-6">
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-accent-dark hover:shadow-lg hover:-translate-y-0.5">
                Learn More About Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
