'use client';

import { motion } from 'motion/react';
import { CloseIcon } from '../icons';

interface MobileNavProps {
  links: { label: string; href: string }[];
  onClose: () => void;
}

export default function MobileNav({ links, onClose }: MobileNavProps) {
  return (
    <>
      {/* Backdrop overlay */}
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out drawer */}
      <motion.nav
        className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white z-50 shadow-2xl flex flex-col"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        id="mobile-nav-drawer"
        aria-label="Mobile navigation"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between p-5 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-dark text-white text-sm font-bold">
              D
            </div>
            <span className="font-bold text-primary text-sm">DholakPur Public School</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-text-muted hover:text-accent transition-colors rounded-lg hover:bg-accent-glow"
            aria-label="Close navigation menu"
          >
            <CloseIcon size={20} />
          </button>
        </div>

        {/* Navigation links */}
        <div className="flex-1 p-5 space-y-1 overflow-y-auto">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={onClose}
              className="flex items-center px-4 py-3 text-base font-medium text-text-body rounded-xl transition-colors hover:text-accent hover:bg-accent-glow"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="p-5 border-t border-border">
          <a
            href="#contact"
            onClick={onClose}
            className="flex items-center justify-center w-full rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-accent-dark transition-all"
          >
            Apply Now
          </a>
          <p className="mt-3 text-center text-xs text-text-muted">
            📞 +91 98765 43210
          </p>
        </div>
      </motion.nav>
    </>
  );
}
