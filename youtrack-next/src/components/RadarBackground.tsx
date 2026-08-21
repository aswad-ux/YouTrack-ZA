"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function RadarBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-cover pointer-events-none opacity-40">
      {/* Radar sweep animation */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -ml-[400px] -mt-[400px] rounded-full border border-blue-500/20"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-1/2 h-1/2 bg-gradient-to-tr from-accent-blue/30 to-transparent rounded-tl-full origin-bottom-right" />
      </motion.div>

      {/* Simulated Vehicles (Dots) */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-accent-orange rounded-full shadow-[0_0_10px_rgba(245,158,11,0.8)]"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${10 + Math.random() * 80}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0, 1, 1, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
