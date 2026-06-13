'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { PhoneIcon, MenuIcon } from '../icons';
import MobileNav from './MobileNav';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Academics', href: '#features' },
  { label: 'Notices', href: '#announcements' },
  { label: 'Values', href: '#values' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Lock body scroll when mobile nav is open */
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <>
      <header
        className={`fixed top-9 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'glass shadow-lg'
            : 'bg-white/95 backdrop-blur-sm'
        }`}
        id="site-header"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">

            {/* Logo */}
            <a href="#" className="flex items-center gap-3 shrink-0 group" id="site-logo">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-dark text-white text-lg font-bold shadow-md group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-shadow duration-300">
                D
              </div>
              <div className="leading-tight hidden sm:block">
                <span className="text-base font-bold text-primary block tracking-tight">
                  DholakPur Public School
                </span>
                <span className="text-[11px] text-text-muted">
                  Excellence in Education
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" id="desktop-nav" aria-label="Main navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3.5 py-2 text-sm font-medium text-text-body rounded-lg transition-all duration-200 hover:text-accent hover:bg-accent-glow"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-1.5 text-sm text-text-muted hover:text-accent transition-colors"
              >
                <PhoneIcon size={16} />
                <span>+91 98765 43210</span>
              </a>
              <a
                href="#contact"
                className="rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-accent-dark hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-300 hover:-translate-y-0.5"
                id="header-cta"
              >
                Apply Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-text-muted hover:text-accent transition-colors rounded-lg hover:bg-accent-glow"
              onClick={() => setIsMobileOpen(true)}
              aria-label="Open navigation menu"
              id="mobile-menu-toggle"
            >
              <MenuIcon size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <MobileNav
            links={navLinks}
            onClose={() => setIsMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
