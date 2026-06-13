import React from 'react';
import Image from 'next/image';
import SectionHeader from '../ui/SectionHeader';
import Badge from '../ui/Badge';
import ScrollReveal from '../ui/ScrollReveal';

export default function LeadershipSection() {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal direction="up">
          <SectionHeader
            label="Leadership"
            title="Message from the Principal"
            align="center"
            className="mb-16"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left" delay={0.2} className="relative group">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-sm:aspect-square md:aspect-square lg:aspect-[4/5] shadow-xl">
              <Image
                src="https://wallpapercave.com/wp/wp9180586.jpg"
                alt="Principal Dr. Chota Bheem"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <Badge variant="highlight" className="mb-4">
                  Excellence in Education
                </Badge>
                <h3 className="text-white text-2xl font-bold">Dr. Chota Bheem</h3>
                <p className="text-slate-200 mt-1">Principal, DholakPur Public School</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.4} className="flex flex-col gap-6 text-lg text-slate-600">
            <p className="font-medium text-slate-800 text-xl leading-relaxed">
              &quot;At DholakPur Public School, we believe that education is not just about academic excellence, but about character building and holistic development. Our mission is to nurture young minds to become responsible global citizens.&quot;
            </p>
            <p>
              With state-of-the-art facilities, a dedicated faculty, and a comprehensive curriculum, we strive to create an environment where every student can discover their true potential and pursue their passions.
            </p>
            <p>
              We invite you to join our vibrant community and embark on a journey of learning, discovery, and growth. Together, let us shape a brighter future for our children.
            </p>

            <div className="mt-6">
              <span className="font-serif italic text-2xl text-slate-800">Dr. Chota Bheem</span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
