"use client";
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { sendEmailAction } from '../app/actions/sendEmail';

function FormContent({ variant }: { variant: 'personal' | 'fleet' }) {
  const searchParams = useSearchParams();
  
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    fleetSize: '',
    industry: '',
    vehicleMake: '',
    vehicleYear: '',
    tier: '',
    email: '',
    phone: '',
    agree: false
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    const packageParam = searchParams.get('package');
    if (packageParam) {
      setFormData(prev => ({
        ...prev,
        tier: packageParam.charAt(0).toUpperCase() + packageParam.slice(1)
      }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const data = new FormData(e.currentTarget);
      const result = await sendEmailAction(data);
      
      if (result.success) {
        setStatus('success');
        // Reset after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      setStatus('error');
      alert(`Unexpected Error: ${error}`);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-page-bg relative z-10 border-t border-border-subtle">
      <div className="container mx-auto px-4 max-w-3xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-page-surface border border-border-subtle p-8 md:p-12 shadow-sm rounded-sm"
        >
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold tracking-tighter text-text-primary mb-4">Request a Quote</h2>
            <p className="text-text-secondary font-light">
              Provide your details below and our {variant === 'fleet' ? 'corporate sales' : 'customer service'} team will contact you within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 flex flex-col">
                <label className="text-sm font-semibold text-text-primary">Full Name</label>
                <input 
                  type="text" name="name" required placeholder="John Doe" 
                  value={formData.name} onChange={handleChange}
                  className="w-full bg-page-bg border border-border-subtle focus:border-brand-blue outline-none text-text-primary px-4 py-3 transition-colors rounded-sm"
                />
              </div>
              
              {variant === 'fleet' ? (
                <div className="space-y-2 flex flex-col">
                  <label className="text-sm font-semibold text-text-primary">Company Name</label>
                  <input 
                    type="text" name="company" required placeholder="ACME Logistics" 
                    value={formData.company} onChange={handleChange}
                    className="w-full bg-page-bg border border-border-subtle focus:border-brand-blue outline-none text-text-primary px-4 py-3 transition-colors rounded-sm"
                  />
                </div>
              ) : (
                <div className="space-y-2 flex flex-col">
                  <label className="text-sm font-semibold text-text-primary">Phone Number</label>
                  <input 
                    type="tel" name="phone" required placeholder="082 123 4567" 
                    value={formData.phone} onChange={handleChange}
                    className="w-full bg-page-bg border border-border-subtle focus:border-brand-blue outline-none text-text-primary px-4 py-3 transition-colors rounded-sm"
                  />
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 flex flex-col">
                <label className="text-sm font-semibold text-text-primary">Email Address</label>
                <input 
                  type="email" name="email" required placeholder="john@email.com" 
                  value={formData.email} onChange={handleChange}
                  className="w-full bg-page-bg border border-border-subtle focus:border-brand-blue outline-none text-text-primary px-4 py-3 transition-colors rounded-sm"
                />
              </div>
              {variant === 'fleet' && (
                <div className="space-y-2 flex flex-col">
                  <label className="text-sm font-semibold text-text-primary">Phone Number</label>
                  <input 
                    type="tel" name="phone" required placeholder="082 123 4567" 
                    value={formData.phone} onChange={handleChange}
                    className="w-full bg-page-bg border border-border-subtle focus:border-brand-blue outline-none text-text-primary px-4 py-3 transition-colors rounded-sm"
                  />
                </div>
              )}
              {variant === 'personal' && (
                <div className="space-y-2 flex flex-col">
                  <label className="text-sm font-semibold text-text-primary">Package of Interest</label>
                  <select 
                    name="tier" required value={formData.tier} onChange={handleChange}
                    className="w-full bg-page-bg border border-border-subtle focus:border-brand-blue outline-none text-text-primary px-4 py-3 transition-colors rounded-sm"
                  >
                    <option value="" disabled>Select Package</option>
                    <option value="Trace">YouTrack Trace</option>
                    <option value="Shield">YouTrack Shield</option>
                    <option value="Guard">YouTrack Guard</option>
                    <option value="Sentinel">YouTrack Sentinel</option>
                  </select>
                </div>
              )}
            </div>

            {variant === 'fleet' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 flex flex-col">
                  <label className="text-sm font-semibold text-text-primary">Package of Interest</label>
                  <select 
                    name="tier" required value={formData.tier} onChange={handleChange}
                    className="w-full bg-page-bg border border-border-subtle focus:border-brand-blue outline-none text-text-primary px-4 py-3 transition-colors rounded-sm"
                  >
                    <option value="" disabled>Select Package</option>
                    <option value="Trace">YouTrack Trace</option>
                    <option value="Shield">YouTrack Shield</option>
                    <option value="Guard">YouTrack Guard</option>
                    <option value="Sentinel">YouTrack Sentinel</option>
                    <option value="Dashcams">Dashcams Only</option>
                    <option value="Fuel">Fuel Monitoring Only</option>
                    <option value="Custom">Custom Solution</option>
                  </select>
                </div>
                <div className="space-y-2 flex flex-col">
                  <label className="text-sm font-semibold text-text-primary">Estimated Fleet Size</label>
                  <select 
                    name="fleetSize" required value={formData.fleetSize} onChange={handleChange}
                    className="w-full bg-page-bg border border-border-subtle focus:border-brand-blue outline-none text-text-primary px-4 py-3 transition-colors rounded-sm"
                  >
                    <option value="" disabled>Select Size</option>
                    <option value="1-5">1 - 5 Vehicles</option>
                    <option value="6-20">6 - 20 Vehicles</option>
                    <option value="21-50">21 - 50 Vehicles</option>
                    <option value="50+">50+ Vehicles</option>
                  </select>
                </div>
              </div>
            )}

            {variant === 'personal' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 flex flex-col">
                  <label className="text-sm font-semibold text-text-primary">Vehicle Make/Model</label>
                  <input 
                    type="text" name="vehicleMake" required placeholder="e.g. Toyota Hilux" 
                    value={formData.vehicleMake} onChange={handleChange}
                    className="w-full bg-page-bg border border-border-subtle focus:border-brand-blue outline-none text-text-primary px-4 py-3 transition-colors rounded-sm"
                  />
                </div>
                <div className="space-y-2 flex flex-col">
                  <label className="text-sm font-semibold text-text-primary">Vehicle Year</label>
                  <input 
                    type="text" name="vehicleYear" required placeholder="e.g. 2023" 
                    value={formData.vehicleYear} onChange={handleChange}
                    className="w-full bg-page-bg border border-border-subtle focus:border-brand-blue outline-none text-text-primary px-4 py-3 transition-colors rounded-sm"
                  />
                </div>
              </div>
            )}

            <div className="flex flex-col items-start gap-4 pt-6 border-t border-border-subtle">
              <label className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="checkbox" name="agree" required checked={formData.agree} onChange={handleChange}
                  className="accent-[#1C5795] w-4 h-4 cursor-pointer rounded-sm"
                />
                <span className="text-text-secondary text-sm font-light">I agree to the privacy policy and terms of service.</span>
              </label>

              <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-[#1C5795] text-white py-4 font-bold tracking-tight hover:bg-[#154273] transition-colors rounded-sm disabled:opacity-70"
              >
                {status === 'loading' && 'Sending...'}
                {status === 'success' && 'Sent Successfully ✓'}
                {status === 'error' && 'Failed to Send - Try Again'}
                {status === 'idle' && 'Request Quote'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export function ContactForm({ variant = 'personal' }: { variant?: 'personal' | 'fleet' }) {
  return (
    <Suspense fallback={<div className="py-24 text-center">Loading form...</div>}>
      <FormContent variant={variant} />
    </Suspense>
  );
}
