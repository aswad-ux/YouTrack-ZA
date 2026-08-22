"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none"
        >
          <div className="max-w-5xl mx-auto pointer-events-auto">
            <div className="bg-[#112240]/95 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">🍪</span>
                  <h3 className="text-white font-semibold text-lg">We value your privacy</h3>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                  By clicking "Accept All", you consent to our use of cookies as described in our{' '}
                  <Link href="/cookie-policy" className="text-accent-primary hover:underline font-medium">
                    Cookie Policy
                  </Link>.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                <Link 
                  href="/cookie-policy"
                  className="px-6 py-2.5 rounded-xl border border-white/10 text-text-secondary hover:text-white hover:bg-white/5 transition-colors text-sm font-medium text-center"
                >
                  Learn More
                </Link>
                <button
                  onClick={acceptCookies}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary text-black font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(245,158,11,0.3)] text-sm"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
