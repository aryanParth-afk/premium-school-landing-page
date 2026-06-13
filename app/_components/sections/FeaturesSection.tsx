import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import ScrollReveal from '../ui/ScrollReveal';

const FeatureIcon = ({ name }: { name: string }) => {
  switch (name) {
    case 'classroom':
      return <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>;
    case 'faculty':
      return <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
    case 'sports':
      return <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
    case 'digital':
      return <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
    case 'safety':
      return <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
    case 'creative':
      return <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>;
    default:
      return null;
  }
};

const features = [
  {
    id: 1,
    title: 'Smart Classrooms',
    description: 'Interactive boards, dedicated projectors, and ergonomic seating for an engaging learning experience.',
    icon: 'classroom',
    colSpan: 'md:col-span-2 lg:col-span-2',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    id: 2,
    title: 'Experienced Faculty',
    description: 'Highly qualified educators dedicated to mentoring and guiding students to success.',
    icon: 'faculty',
    colSpan: 'md:col-span-1 lg:col-span-1',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  },
  {
    id: 3,
    title: 'Sports Excellence',
    description: 'Olympic-standard facilities for multiple sports to build physical fitness and teamwork.',
    icon: 'sports',
    colSpan: 'md:col-span-1 lg:col-span-1',
    color: 'text-amber-600',
    bgColor: 'bg-amber-100'
  },
  {
    id: 4,
    title: 'Digital Learning',
    description: 'State-of-the-art computer labs and digital resources integrated into the core curriculum.',
    icon: 'digital',
    colSpan: 'md:col-span-2 lg:col-span-2',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100'
  },
  {
    id: 5,
    title: 'Safety & Security',
    description: '24/7 CCTV surveillance, secure transport, and strict access control for student safety.',
    icon: 'safety',
    colSpan: 'md:col-span-2 lg:col-span-2',
    color: 'text-rose-600',
    bgColor: 'bg-rose-100'
  },
  {
    id: 6,
    title: 'Creative Development',
    description: 'Dedicated studios for art, music, dance, and drama to foster creativity.',
    icon: 'creative',
    colSpan: 'md:col-span-1 lg:col-span-1',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100'
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-slate-50 relative" id="features">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal direction="up" className="mb-16">
          <SectionHeader 
            label="Why Choose Us" 
            title="Discover the DholakPur Advantage" 
            description="We provide a comprehensive educational environment that nurtures every aspect of student development."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <ScrollReveal 
              key={feature.id} 
              direction="up" 
              delay={index * 0.1}
              className={`${feature.colSpan} h-full`}
            >
              <Card className="h-full flex flex-col p-8 group overflow-hidden relative">
                {/* Background decorative blob */}
                <div className={`absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-20 blur-2xl transition-transform duration-500 group-hover:scale-150 ${feature.bgColor}`}></div>
                
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110 ${feature.bgColor} ${feature.color}`}>
                  <FeatureIcon name={feature.icon} />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed relative z-10">{feature.description}</p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
