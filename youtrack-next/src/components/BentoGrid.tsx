"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Crosshair, ShieldAlert, Video, Activity, Fuel, CheckCircle2, MapPin, Smartphone, BatteryWarning } from 'lucide-react';

type CardStyle = 'image' | 'white' | 'charcoal';

const fleetFeatures = [
  {
    title: "Live Tracking & Geofencing",
    description: "Know exactly where your vehicles are at all times, and get notified the moment they enter or leave important areas.",
    icon: <Crosshair className="w-8 h-8 text-white" />,
    span: "col-span-1 md:col-span-2",
    bgImage: "/assets/fleet_tracking_sun_1787259082624.jpg",
    cardStyle: 'image' as CardStyle
  },
  {
    title: "Remote Engine Cut-Off",
    description: "Stop a stolen vehicle in its tracks with a single tap on your mobile app.",
    icon: <ShieldAlert className="w-8 h-8 text-[#E11D48]" />,
    span: "col-span-1 md:col-span-1",
    bgImage: "/assets/fleet_immobilizer_sun_1787259092261.jpg",
    cardStyle: 'image' as CardStyle
  },
  {
    title: "Fuel Theft Prevention",
    description: "Get alerts for sudden drops in fuel levels, helping you stop syndicates in their tracks.",
    icon: <Fuel className="w-8 h-8 text-[#E11D48]" />,
    span: "col-span-1 md:col-span-1",
    bgImage: "/assets/fleet_fuel_sun_1787259103510.jpg",
    cardStyle: 'image' as CardStyle
  },
  {
    title: "Dual-Camera Dashcams",
    description: "Record the road and the cabin simultaneously for complete peace of mind and accident evidence.",
    icon: <Video className="w-8 h-8 text-white" />,
    span: "col-span-1 md:col-span-2",
    bgImage: "/assets/fleet_dashcam_sun_1787259116146.jpg",
    cardStyle: 'image' as CardStyle
  },
  {
    title: "Driver Safety & Eco-Routing",
    description: "Encourage safer driving by monitoring harsh braking, rapid acceleration, and cornering.",
    icon: <Activity className="w-8 h-8 text-white" />,
    span: "col-span-1 md:col-span-2",
    bgImage: "/assets/fleet_safety_sun_1787259127749.jpg",
    cardStyle: 'image' as CardStyle
  },
  {
    title: "SARS Tax Logbook",
    description: "Automated mileage tracking makes submitting your annual tax returns a breeze.",
    icon: <CheckCircle2 className="w-8 h-8 text-[#60A5FA]" />,
    span: "col-span-1 md:col-span-1",
    bgImage: "/assets/fleet_logbook_sun_1787259137926.jpg",
    cardStyle: 'image' as CardStyle
  }
];

const personalFeatures = [
  {
    title: "Pinpoint Live Tracking",
    description: "Track your car's exact location in real-time, whether it's parked at the mall or on the highway.",
    icon: <MapPin className="w-8 h-8 text-white" />,
    span: "col-span-1 md:col-span-2",
    bgImage: "/assets/personal_tracking_sun_1787259211588.jpg",
    cardStyle: 'image' as CardStyle
  },
  {
    title: "Remote Engine Cut-Off",
    description: "Prevent unauthorized movement by remotely immobilizing your vehicle from your phone.",
    icon: <ShieldAlert className="w-8 h-8 text-[#E11D48]" />,
    span: "col-span-1 md:col-span-1",
    bgImage: "/assets/personal_immobilizer_sun_1787259222098.jpg",
    cardStyle: 'image' as CardStyle
  },
  {
    title: "Stolen Vehicle Recovery",
    description: "24/7 dedicated armed response and recovery teams ready to act the moment you need them.",
    icon: <Crosshair className="w-8 h-8 text-[#E11D48]" />,
    span: "col-span-1 md:col-span-1",
    bgImage: "/assets/personal_recovery_sun_1787259233005.jpg",
    cardStyle: 'image' as CardStyle
  },
  {
    title: "Mobile App Access",
    description: "Full control in the palm of your hand. View history, manage alerts, and lock your vehicle easily.",
    icon: <Smartphone className="w-8 h-8 text-white" />,
    span: "col-span-1 md:col-span-2",
    bgImage: "/assets/personal_app_sun_1787259243075.jpg",
    cardStyle: 'image' as CardStyle
  },
  {
    title: "Smart Geo-Fencing",
    description: "Create virtual zones around your home, work, or school, and get push notifications when your car enters or leaves.",
    icon: <Activity className="w-8 h-8 text-white" />,
    span: "col-span-1 md:col-span-2",
    bgImage: "/assets/personal_geofence_sun_1787259252754.jpg",
    cardStyle: 'image' as CardStyle
  },
  {
    title: "Battery Alerts",
    description: "Receive an immediate warning if your vehicle's battery is disconnected or running dangerously low.",
    icon: <BatteryWarning className="w-8 h-8 text-[#60A5FA]" />,
    span: "col-span-1 md:col-span-1",
    bgImage: "/assets/personal_battery_sun_1787259263528.jpg",
    cardStyle: 'image' as CardStyle
  }
];

export function BentoGrid({ variant = 'personal' }: { variant?: 'personal' | 'fleet' }) {
  const features = variant === 'fleet' ? fleetFeatures : personalFeatures;

  return (
    <section id="solutions" className="py-24 bg-[#0F172A] relative z-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-6 text-white">Everything You Need to Stay <span className="text-[#60A5FA]">Secure.</span></h2>
          <p className="text-slate-300 text-lg md:text-xl font-light">
            {variant === 'fleet' 
              ? "Smart features designed to protect your commercial assets and simplify your logistics, powered by highly reliable, discreet hardware."
              : "Smart features designed to protect your personal vehicles and simplify your life, giving you complete peace of mind."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl auto-rows-auto">
          {features.map((feature, idx) => {
            const isImage = feature.cardStyle === 'image';
            const isWhite = feature.cardStyle === 'white';
            const isCharcoal = feature.cardStyle === 'charcoal';

            let bgClass = '';
            if (isImage) bgClass = 'bg-[#0F172A]';
            else if (isWhite) bgClass = 'bg-white border border-border-subtle shadow-sm ring-1 ring-black/5';
            else if (isCharcoal) bgClass = 'bg-[#0F172A] shadow-lg';

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`group relative overflow-hidden rounded-sm flex flex-col p-8 min-h-[350px] ${bgClass} ${feature.span}`}
              >
                {isImage && feature.bgImage && (
                  <>
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-85"
                      style={{ backgroundImage: `url(${feature.bgImage})` }}
                    />
                    {/* Dark gradient for text readability over image */}
                    <div 
                      className="absolute inset-0" 
                      style={{ background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.4) 40%, transparent 80%)' }}
                    />
                  </>
                )}
                
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className={`w-14 h-14 mb-4 rounded-sm flex items-center justify-center ${
                    isWhite ? 'bg-gray-50 border border-gray-100' : 'bg-white/10 backdrop-blur-sm border border-white/20'
                  }`}>
                    {feature.icon}
                  </div>
                  <div className="mt-auto">
                    <h3 className={`text-2xl font-bold mb-3 tracking-tight ${
                      isWhite ? 'text-text-primary' : 'text-white'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`leading-relaxed font-light ${
                      isWhite ? 'text-text-secondary' : 'text-slate-300'
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
