"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isFleet = pathname === '/fleet';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Packages', href: '#packages' },
    { name: 'How it Works', href: '#how-it-works' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If it's a cross-page link (like /fleet), let standard Link behavior happen
    if (!href.startsWith('#')) return;
    
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0F172A]/95 backdrop-blur-sm shadow-md py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 z-50 shrink-0 max-w-[70vw]">
          <img src="/assets/logo_hd.svg" alt="YouTrack ZA Logo" className="h-6 sm:h-7 md:h-10 w-auto object-contain" />
        </Link>

        {/* Center Toggle Switch (Desktop) */}
        <div className="hidden md:flex items-center bg-white/10 backdrop-blur-sm p-1 rounded-sm border border-white/20">
          <Link 
            href="/"
            className={`px-6 py-2 text-sm font-bold tracking-wide transition-all ${
              !isFleet ? 'bg-white text-[#0F172A] shadow-sm rounded-sm' : 'text-white hover:text-white/80'
            }`}
          >
            Personal
          </Link>
          <Link 
            href="/fleet"
            className={`px-6 py-2 text-sm font-bold tracking-wide transition-all ${
              isFleet ? 'bg-white text-[#0F172A] shadow-sm rounded-sm' : 'text-white hover:text-white/80'
            }`}
          >
            For Fleets
          </Link>
        </div>

        {/* Right Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-slate-300 hover:text-white text-sm font-semibold transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="bg-[#1C5795] text-white px-6 py-2.5 text-sm font-bold tracking-tight hover:bg-[#154273] transition-colors rounded-sm shadow-sm"
          >
            Request a Quote
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden z-50 text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-[#0F172A] z-40 flex flex-col items-center justify-center gap-8 pt-16"
            >
              {/* Mobile Toggle */}
              <div className="flex items-center bg-white/10 backdrop-blur-sm p-1 rounded-sm border border-white/20 mb-4">
                <Link 
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-6 py-2 text-lg font-bold tracking-wide transition-all ${
                    !isFleet ? 'bg-white text-[#0F172A] shadow-sm rounded-sm' : 'text-white hover:text-white/80'
                  }`}
                >
                  Personal
                </Link>
                <Link 
                  href="/fleet"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-6 py-2 text-lg font-bold tracking-wide transition-all ${
                    isFleet ? 'bg-white text-[#0F172A] shadow-sm rounded-sm' : 'text-white hover:text-white/80'
                  }`}
                >
                  For Fleets
                </Link>
              </div>

              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-3xl font-extrabold text-white tracking-tighter hover:text-slate-300 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="bg-[#1C5795] text-white px-8 py-4 text-xl font-bold tracking-tight mt-4 rounded-sm shadow-sm"
              >
                Request a Quote
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
