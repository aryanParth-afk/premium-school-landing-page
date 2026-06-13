'use client';

import { motion } from 'motion/react';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* ---- Background layers ---- */}

      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary" />

      {/* Mesh-gradient blobs */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(ellipse at 20% 50%, rgba(99,102,241,0.3) 0%, transparent 50%),' +
            'radial-gradient(ellipse at 80% 20%, rgba(139,92,246,0.25) 0%, transparent 50%),' +
            'radial-gradient(ellipse at 60% 80%, rgba(168,85,247,0.2) 0%, transparent 50%)',
        }}
      />

      {/* ---- Floating geometric shapes ---- */}
      <motion.div
        className="absolute top-[15%] left-[10%] h-64 w-64 rounded-full border border-accent/20"
        animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[20%] right-[8%] h-48 w-48 rounded-2xl border border-accent-light/15 rotate-45"
        animate={{ y: [15, -15, 15], rotate: [45, 50, 45] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-[60%] left-[65%] h-32 w-32 rounded-full bg-gradient-to-br from-accent/10 to-transparent"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ---- Particle dots ---- */}
      {[
        { top: '25%', left: '15%', dur: 3.5, del: 0 },
        { top: '40%', left: '80%', dur: 4,   del: 0.5 },
        { top: '70%', left: '25%', dur: 3,   del: 1 },
        { top: '55%', left: '60%', dur: 4.5, del: 1.5 },
        { top: '30%', left: '50%', dur: 3.2, del: 0.8 },
        { top: '80%', left: '70%', dur: 3.8, del: 0.3 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-accent/40"
          style={{ top: p.top, left: p.left }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            delay: p.del,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* ---- Content ---- */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center py-32 sm:py-40">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/30 px-4 py-1.5 text-sm text-accent-light backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-light animate-pulse-glow" />
            Admissions Open 2025–26
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="mt-8 heading-xl text-white mx-auto max-sm:text-[2rem] max-sm:leading-[1.25] max-sm:max-w-[15ch]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Where Curiosity Meets{' '}
          <br className="hidden sm:block" />
          <span className="text-gradient">Infinite Possibility</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-white/70 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Nurturing creative thinkers, compassionate leaders, and lifelong learners
          through a modern, holistic education experience.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <a
            href="#contact"
            className="inline-flex h-13 w-full sm:w-auto items-center justify-center rounded-xl bg-accent px-8 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-accent-dark hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:-translate-y-0.5"
            id="hero-cta-apply"
          >
            Start Your Journey
          </a>
          <a
            href="#about"
            className="inline-flex h-13 w-full sm:w-auto items-center justify-center rounded-xl border-2 border-white/30 px-8 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5"
            id="hero-cta-discover"
          >
            Discover More
          </a>
        </motion.div>
      </div>

      {/* ---- Scroll indicator ---- */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="h-10 w-6 rounded-full border-2 border-white/30 flex justify-center">
          <motion.div
            className="mt-2 h-2 w-2 rounded-full bg-white/80"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
