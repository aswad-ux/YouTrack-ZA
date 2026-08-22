"use client";
import React from 'react';
import { motion } from 'framer-motion';

const screens = [
  "/assets/app_live_tracking_1786989390133.webp",
  "/assets/app_trip_history_1786989402247.webp"
];

export function AppShowcase() {
  return (
    <section className="py-32 relative z-10 bg-[#0F172A] overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white mb-6">
            <span className="text-[#1C5795]">Intelligence</span> in Your Pocket.
          </h2>
          <p className="text-slate-300 text-lg font-light">Monitor your vehicles, manage drivers, and respond to alerts from anywhere in the world.</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-16 lg:gap-32">
          
          {/* Text Features (Left) */}
          <div className="w-full md:w-1/2 max-w-md space-y-12 order-2 md:order-1">
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight mb-2">Live Fleet View</h3>
              <p className="text-slate-300 font-light leading-relaxed">See the exact location of every vehicle in real-time. Instantly identify idle vehicles or unauthorized usage.</p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight mb-2">Instant Action</h3>
              <p className="text-slate-300 font-light leading-relaxed">Receive instant push notifications for tampering or geofence breaches, and cut the engine remotely if necessary.</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight mb-2">Detailed Reports</h3>
              <p className="text-slate-300 font-light leading-relaxed">Generate automated SARS tax logbooks and driver behavior reports directly from your phone.</p>
            </div>
          </div>

          {/* App Mocks (Right) */}
          <div className="w-full md:w-1/2 relative h-[500px] md:h-[600px] flex justify-center md:justify-start items-center order-1 md:order-2">
            {screens.map((src, idx) => (
              <motion.div
                key={idx}
                className={`absolute w-56 md:w-64 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 ${idx === 0 ? 'z-20' : 'z-10'}`}
                initial={{ opacity: 0, y: 50, x: idx * 40 - 20, rotate: idx * 5 - 2 }}
                whileInView={{ opacity: 1, y: 0, x: idx * 60 - 30, rotate: idx * 6 - 3 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.2, type: "spring" }}
              >
                <img src={src} alt="App Screenshot" loading="lazy" className="w-full h-auto block" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
