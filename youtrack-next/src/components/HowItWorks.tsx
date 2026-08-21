"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick, Wrench, ShieldCheck } from 'lucide-react';

const steps = [
  {
    icon: <MousePointerClick className="w-10 h-10 text-white" />,
    title: "1. Choose Your Plan",
    description: "Select the level of intelligence you need. From essential tracking to dual-camera telematics, we have a solution for every vehicle."
  },
  {
    icon: <Wrench className="w-10 h-10 text-white" />,
    title: "2. Discreet Installation",
    description: "Our certified technicians come to you. Installation is fast, completely hidden, and won't void your vehicle's warranty."
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-white" />,
    title: "3. Total Control",
    description: "Download the YouTrack app. You now have 24/7 visibility, instant alerts, and the power to immobilize your vehicle from anywhere."
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative z-10 bg-page-bg border-t border-border-subtle">
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-text-primary mb-6">Security, Simplified.</h2>
          <p className="text-text-secondary text-lg font-light">Getting started with YouTrack ZA is effortless. We handle the heavy lifting so you can focus on the road ahead.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center p-10 bg-page-surface border border-border-subtle shadow-sm rounded-sm"
            >
              <div className="flex items-center justify-center w-20 h-20 mb-8 bg-[#1C5795] rounded-sm shadow-md">
                {step.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-text-primary tracking-tight mb-4">{step.title}</h3>
              <p className="text-text-secondary font-light leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
