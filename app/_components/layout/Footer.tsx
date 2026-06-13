import React from 'react';
import { PhoneIcon } from '../icons';

export default function Footer() {
  return (
    <footer className="bg-primary text-slate-300 py-16 lg:py-20 border-t border-white/10 relative overflow-hidden" id="contact">
      {/* Decorative background gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand & Socials */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <a href="#" className="flex items-center gap-3 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-dark text-white text-lg font-bold shadow-md group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-300">
                D
              </div>
              <div className="leading-tight">
                <span className="text-base font-bold text-white block tracking-tight">
                  DholakPur Public
                </span>
                <span className="text-[11px] text-slate-400 uppercase tracking-widest">
                  School
                </span>
              </div>
            </a>
            <p className="text-sm leading-relaxed text-slate-400">
              Nurturing creative thinkers, compassionate leaders, and lifelong learners through a modern, holistic education experience.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2">
              {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 hover:-translate-y-1" aria-label={social}>
                  <div className="w-3.5 h-3.5 rounded-full bg-current opacity-70"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              {['About Us', 'Academics', 'Admissions', 'Student Life', 'Careers'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-accent-light transition-colors duration-200 flex items-center gap-2 text-sm group">
                    <span className="w-1 h-1 rounded-full bg-accent-light opacity-50 group-hover:w-2 group-hover:opacity-100 transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg tracking-wide">Contact Us</h4>
            <ul className="space-y-5 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent-light shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="leading-relaxed">123 Education Boulevard,<br/>Knowledge City, DK 110001</span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon size={20} className="text-accent-light shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-accent-light shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span>admissions@dholakpur.edu</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg tracking-wide">Newsletter</h4>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              Subscribe to our newsletter for the latest updates, event details, and announcements.
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                aria-label="Email address for newsletter"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                required
              />
              <button 
                type="submit"
                className="w-full bg-accent hover:bg-accent-light text-white font-semibold rounded-xl px-4 py-3 text-sm transition-colors duration-300 shadow-md"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} DholakPur Public School. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
