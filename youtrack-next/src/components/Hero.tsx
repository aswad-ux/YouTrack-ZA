"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function Hero({ variant = 'personal' }: { variant?: 'personal' | 'fleet' }) {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (videoRef.current) {
      // Force playback on mount to bypass strict browser autoplay policies
      videoRef.current.defaultMuted = true;
      videoRef.current.play().catch(error => {
        console.log("Autoplay was prevented by the browser:", error);
      });
    }
  }, []);

  const title = variant === 'fleet' 
    ? <>Optimize Your Fleet.<br/>Protect Your Assets.</> 
    : <>Protect Your Car.<br/>Protect Your Family.</>;
    
  const subtitle = variant === 'fleet'
    ? "Industry-leading telematics and recovery solutions for commercial fleets. Advanced reporting, real-time dashcams, and fuel monitoring."
    : "The ultimate tracking and recovery solution for your personal vehicles. Instant alerts, intuitive apps, and 24/7 recovery teams.";

  const bgImage = variant === 'fleet' ? "url('/assets/hero_highway_fleet.webp')" : "url('/assets/hero_personal.webp')";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0F172A]">
      
      {/* Cinematic Background */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        {/* Video Background */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster={variant === 'fleet' ? '/assets/hero_highway_fleet.webp' : '/assets/hero_personal.webp'}
          className="absolute inset-0 w-full h-full object-cover"
        >
          {/* High-quality placeholder videos from a public CDN - Replace these URLs with your actual hosted videos later */}
          <source 
            src={variant === 'fleet' 
              ? 'https://cdn.coverr.co/videos/coverr-driving-on-a-highway-at-night-2646/1080p.mp4' 
              : 'https://cdn.coverr.co/videos/coverr-driving-in-the-city-at-night-4228/1080p.mp4'} 
            type="video/mp4" 
          />
        </video>
        
        {/* Subtle dark vignette mask for text readability without washing out the video */}
        <div 
          className="absolute inset-0" 
          style={{ background: 'linear-gradient(to right, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.6) 40%, rgba(15, 23, 42, 0.1) 100%)' }}
        />
        
        {/* Mobile-specific darkening at the top for navbar readability */}
        <div 
          className="absolute inset-0 md:hidden" 
          style={{ background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.8) 0%, transparent 40%)' }}
        />
      </motion.div>

      {/* Content Area */}
      <div className="container relative z-10 mx-auto px-4 pt-20 flex flex-col justify-center h-full">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.95] text-white mb-8">
            {title}
          </h1>
          <p className="text-lg md:text-2xl text-slate-300 max-w-xl font-light tracking-tight leading-relaxed mb-10">
            {subtitle}
          </p>

          {/* Primary CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block bg-[#1C5795] text-white px-10 py-4 font-bold tracking-tight hover:bg-[#154273] transition-colors text-lg rounded-sm shadow-2xl ring-1 ring-white/10"
            >
              Get Started Today
            </a>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
