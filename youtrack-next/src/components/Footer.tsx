"use client";
import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1C5795] text-white py-20 relative z-10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-extrabold text-2xl tracking-tighter text-white">YouTrack<span className="text-white/70">ZA</span></span>
            </div>
            <p className="text-white/80 font-light text-sm leading-relaxed max-w-xs">
              Modern intelligence and absolute security for your personal vehicles and commercial fleets.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-bold text-lg mb-6 tracking-tight text-white">Platform</h4>
            <ul className="space-y-4">
              <li><a href="#solutions" className="text-white/80 hover:text-white transition-colors text-sm font-light">Solutions</a></li>
              <li><a href="#packages" className="text-white/80 hover:text-white transition-colors text-sm font-light">Pricing</a></li>
              <li><a href="#how-it-works" className="text-white/80 hover:text-white transition-colors text-sm font-light">How it Works</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-colors text-sm font-light">Contact Us</a></li>
            </ul>
          </div>

          {/* Compliance Links */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-bold text-lg mb-6 tracking-tight text-white">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="/privacy" className="text-white/80 hover:text-white transition-colors text-sm font-light">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-white/80 hover:text-white transition-colors text-sm font-light">Terms of Service</Link></li>
              <li><Link href="/cookie-policy" className="text-white/80 hover:text-white transition-colors text-sm font-light">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-bold text-lg mb-6 tracking-tight text-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/80 text-sm font-light">
                <Phone size={16} className="text-white/70" />
                <a href="tel:0821234567" className="hover:text-white transition-colors">082 123 4567</a>
              </li>
              <li className="flex items-center gap-3 text-white/80 text-sm font-light">
                <Mail size={16} className="text-white/70" />
                <a href="mailto:info@youtrack.co.za" className="hover:text-white transition-colors">info@youtrack.co.za</a>
              </li>
              <li className="flex items-start gap-3 text-white/80 text-sm font-light">
                <MapPin size={16} className="text-white/70 shrink-0 mt-1" />
                <span>Johannesburg,<br/>South Africa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/80 text-xs font-light tracking-wide">
            &copy; {currentYear} YouTrack ZA. All rights reserved.
          </p>
          <div className="text-white/80 text-xs font-light tracking-wide">
            ASWAD design
          </div>
        </div>
      </div>
    </footer>
  );
}
