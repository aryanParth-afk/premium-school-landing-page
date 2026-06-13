import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import ScrollReveal from '../ui/ScrollReveal';

const announcements = [
  {
    id: 1,
    date: 'August 15, 2026',
    title: 'Independence Day Celebrations',
    description: 'Join us for a grand celebration of our nation\'s independence with cultural performances and flag hoisting ceremonies at the main ground.',
    isNew: true
  },
  {
    id: 2,
    date: 'September 5, 2026',
    title: 'Teacher\'s Day Special Assembly',
    description: 'Students are organizing a special assembly to honor our dedicated teaching staff. Parents are welcome to attend virtually.',
    isNew: true
  },
  {
    id: 3,
    date: 'October 10, 2026',
    title: 'Annual Sports Meet',
    description: 'The much-awaited annual sports meet will be held at the main stadium. All parents are invited to cheer for our young athletes.',
    isNew: false
  },
  {
    id: 4,
    date: 'November 1, 2026',
    title: 'Science & Innovation Exhibition',
    description: 'Explore innovative projects and working models created by our talented students across all grades in the main auditorium.',
    isNew: false
  }
];

export default function AnnouncementsSection() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <ScrollReveal direction="up">
          <SectionHeader 
            label="Updates" 
            title="School Announcements" 
            description="Stay informed about the latest events, activities, and important notices from DholakPur Public School."
            className="mb-16"
          />
        </ScrollReveal>

        <div className="relative">
          {/* Vertical line for timeline - hidden on mobile, visible on md+ */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 transform -translate-x-1/2"></div>

          <div className="space-y-8 md:space-y-12">
            {announcements.map((announcement, index) => (
              <ScrollReveal 
                key={announcement.id} 
                direction={index % 2 === 0 ? 'left' : 'right'} 
                delay={index * 0.15}
                className={`relative flex flex-col md:flex-row items-center justify-between ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Center dot - hidden on mobile */}
                <div className="hidden md:block absolute left-1/2 w-4 h-4 bg-indigo-500 rounded-full border-4 border-white transform -translate-x-1/2 z-10 shadow-sm"></div>

                {/* Content Card */}
                <div className="w-full md:w-[45%]">
                  <Card className="relative hover:-translate-y-1 hover:shadow-lg transition-all duration-300 bg-white/80">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-sm font-semibold text-indigo-600">{announcement.date}</span>
                      {announcement.isNew && (
                        <Badge variant="highlight">New</Badge>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{announcement.title}</h3>
                    <p className="text-slate-600">{announcement.description}</p>
                  </Card>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
