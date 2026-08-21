"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function ROICalculator() {
  const [vehicles, setVehicles] = useState(5);
  const [fuelSpend, setFuelSpend] = useState(15000);

  // Simple calculation logic
  const fuelSavings = fuelSpend * 0.12; // Assume 12% savings from eco-routing and theft prevention
  const wearAndTearSavings = vehicles * 800; // Assume R800 saved per vehicle/mo on maintenance
  const totalSavings = fuelSavings + wearAndTearSavings;

  return (
    <section id="roi-calculator" className="py-32 relative z-10 bg-page-surface border-t border-border-subtle">
      <div className="container mx-auto px-4">
        
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-text-primary mb-4">Calculate Your <span className="text-brand-blue">Savings.</span></h2>
          <p className="text-text-secondary text-lg font-light">See how quickly YouTrack pays for itself through reduced fuel consumption and lower maintenance costs.</p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          
          <div className="w-full md:w-1/2 space-y-12">
            <div>
              <div className="flex justify-between mb-4">
                <label className="text-text-primary font-bold">Fleet Size</label>
                <span className="text-text-secondary font-light">{vehicles} Vehicles</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="50" 
                value={vehicles} 
                onChange={(e) => setVehicles(Number(e.target.value))}
                className="w-full h-1 bg-border-subtle rounded-none appearance-none cursor-pointer accent-text-primary"
              />
            </div>

            <div>
              <div className="flex justify-between mb-4">
                <label className="text-text-primary font-bold">Monthly Fuel Spend</label>
                <span className="text-text-secondary font-light">R {fuelSpend.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="5000" 
                max="100000" 
                step="1000"
                value={fuelSpend} 
                onChange={(e) => setFuelSpend(Number(e.target.value))}
                className="w-full h-1 bg-border-subtle rounded-none appearance-none cursor-pointer accent-text-primary"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-page-bg p-8 border border-border-subtle text-center md:text-left">
            <h3 className="text-xl font-bold text-text-primary mb-8 tracking-tight">Estimated Monthly Savings</h3>
            
            <div className="space-y-6 mb-8 border-b border-border-subtle pb-8">
              <div className="flex justify-between">
                <span className="text-text-secondary font-light">Fuel Optimization (12%)</span>
                <span className="text-text-primary font-bold">R {fuelSavings.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary font-light">Maintenance Reduction</span>
                <span className="text-text-primary font-bold">R {wearAndTearSavings.toLocaleString()}</span>
              </div>
            </div>

            <div>
              <p className="text-sm text-text-secondary font-light mb-2 uppercase tracking-widest">Total Estimated Return</p>
              <p className="text-5xl font-extrabold tracking-tighter text-text-primary">R {totalSavings.toLocaleString()}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
