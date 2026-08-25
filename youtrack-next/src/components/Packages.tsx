"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Link from 'next/link';

const pricingPackages = [
  {
    name: "Trace",
    title: "YouTrack Trace",
    subtitle: "Fleet Management Light",
    price: "R150",
    features: [
      "Mobile App & Web App",
      "Live Tracking",
      "Geo-Fencing Alerts",
      "History Report",
      "Automated Tax Logbook"
    ],
    popular: false
  },
  {
    name: "Shield",
    title: "YouTrack Shield",
    subtitle: "Reporting & Immobilization",
    price: "R199",
    features: [
      "Mobile App & Web App",
      "Live Tracking",
      "Geo-Fencing Alerts",
      "History Report",
      "Remote Engine Immobilization",
      "Harsh Driving Alerts",
      "Automated Tax Logbook"
    ],
    popular: false
  },
  {
    name: "Witness",
    title: "YouTrack Witness",
    subtitle: "Live Video Telematics",
    price: "R250",
    features: [
      "Mobile App & Web App",
      "Live Tracking",
      "Geo-Fencing Alerts",
      "History Report",
      "Dual Live HD Dashcam"
    ],
    popular: false
  },
  {
    name: "Overwatch",
    title: "YouTrack Overwatch",
    subtitle: "Complete Video & Security",
    price: "R300",
    features: [
      "Dual Live HD Dashcam",
      "Remote Engine Immobilization",
      "Battery Disconnect Alerts",
      "Harsh Driving Alerts",
      "Automated Tax Logbook"
    ],
    popular: true
  }
];

export function Packages({ variant = 'personal' }: { variant?: 'personal' | 'fleet' }) {
  return (
    <section id="packages" className="py-24 relative z-10 bg-slate-50 border-t border-border-subtle overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold tracking-tighter text-text-primary mb-4">Transparent Pricing.</h2>
          <p className="text-text-secondary font-light">No hidden fees. Choose the level of intelligence your vehicles need. Bulk fleet discounts available.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {pricingPackages.map((pkg, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              key={pkg.name}
              className={`relative bg-white p-8 flex flex-col rounded-sm transition-transform hover:-translate-y-1 ${
                pkg.popular 
                  ? 'border-t-4 border-t-[#1C5795] shadow-xl ring-1 ring-black/5 z-10 lg:-mt-4 lg:mb-4' 
                  : 'border border-border-subtle shadow-sm mt-0'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1C5795] text-white px-4 py-1 text-xs font-bold tracking-widest uppercase rounded-full whitespace-nowrap shadow-md">
                  Most Popular
                </div>
              )}
              
              <div className="mt-2 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-text-primary tracking-tight mb-2">{pkg.title}</h3>
                <p className="text-text-secondary text-sm font-light h-10">{pkg.subtitle}</p>
                
                <div className="my-6 pt-6 border-t border-border-subtle">
                  <span className="text-4xl font-extrabold tracking-tighter text-text-primary">{pkg.price}</span>
                  <span className="text-text-secondary font-light">/mo</span>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 shrink-0 ${pkg.popular ? 'text-[#1C5795]' : 'text-slate-400'}`} />
                      <span className="text-text-primary font-light text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                href={`?package=${pkg.name}#contact`}
                className={`mt-auto w-full py-3 text-center block font-bold tracking-tight rounded-sm transition-colors ${
                  pkg.popular 
                    ? 'bg-[#1C5795] text-white hover:bg-[#154273] shadow-md' 
                    : 'bg-white text-text-primary border border-slate-200 hover:border-[#1C5795] hover:text-[#1C5795]'
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Self-Monitoring Disclaimer */}
        <div className="mt-12 p-6 bg-white border border-slate-200 shadow-sm rounded-sm max-w-3xl mx-auto flex gap-4 items-start text-left">
          <div className="text-[#1C5795] mt-0.5 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed m-0">
            <strong>Please Note:</strong> Our standard packages are designed as self-managed telematics solutions. You retain full control and visibility of your vehicles directly through our web and mobile applications. Physical armed response and stolen vehicle recovery services are not included in these standard monthly subscription tiers.
          </p>
        </div>

        {variant === 'fleet' && (
          <div className="mt-24 pt-16 border-t border-border-subtle">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h3 className="text-2xl font-extrabold tracking-tighter text-text-primary mb-4">Advanced Fleet Solutions</h3>
              <p className="text-text-secondary font-light">Specialized hardware and software integrations for large scale logistics and heavy commercial vehicles.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-8 border border-border-subtle shadow-sm rounded-sm flex flex-col hover:-translate-y-1 transition-transform">
                <h4 className="text-xl font-bold text-text-primary mb-2">Fuel Monitoring</h4>
                <p className="text-text-secondary text-sm font-light mb-6 flex-grow">Stop syndicates in their tracks. High-precision fuel probes detect siphoning and sudden drops in fuel levels instantly.</p>
                <div className="text-2xl font-extrabold text-[#E11D48] mb-6 tracking-tight">Custom Quote</div>
                <Link href="?package=Fuel#contact" className="w-full py-3 text-center block font-bold tracking-tight rounded-sm transition-colors bg-white text-text-primary border border-slate-200 hover:border-[#1C5795] hover:text-[#1C5795]">Request Quote</Link>
              </div>
              <div className="bg-white p-8 border border-border-subtle shadow-sm rounded-sm flex flex-col hover:-translate-y-1 transition-transform">
                <h4 className="text-xl font-bold text-text-primary mb-2">Dual-Camera Dashcams</h4>
                <p className="text-text-secondary text-sm font-light mb-6 flex-grow">Live video streaming of both the road and the cabin. Automatic incident backups to the cloud and driver coaching.</p>
                <div className="text-2xl font-extrabold text-[#E11D48] mb-6 tracking-tight">Custom Quote</div>
                <Link href="?package=Dashcams#contact" className="w-full py-3 text-center block font-bold tracking-tight rounded-sm transition-colors bg-white text-text-primary border border-slate-200 hover:border-[#1C5795] hover:text-[#1C5795]">Request Quote</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
