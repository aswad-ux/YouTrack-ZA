"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Is YouTrack ZA approved by South African insurance companies?",
    answer: "Yes, our vehicle tracking and recovery devices meet stringent SABS and local insurance requirements. Installing a YouTrack ZA device can significantly lower your monthly insurance premiums."
  },
  {
    question: "How does the Stolen Vehicle Recovery service work?",
    answer: "If your vehicle is stolen or hijacked, you simply tap the 'Report Stolen' button in the app or call our 24/7 emergency control room. Our nationwide response teams immediately mobilize to locate and recover your vehicle using GPS and RF technology."
  },
  {
    question: "How long does installation take and where is it done?",
    answer: "A standard installation takes about 45 to 60 minutes. We have a network of approved mobile fitment specialists across South Africa who can install the device at your home or office for your convenience."
  },
  {
    question: "Will the tracker drain my car battery?",
    answer: "No. Our devices are ultra-low power and feature smart-sleep technology. They draw minimal current when the vehicle is parked, ensuring your car battery remains healthy."
  },
  {
    question: "Can I manage multiple vehicles on one app?",
    answer: "Absolutely. Our platform is designed for both individuals and businesses. You can monitor a single personal car or an entire fleet of 500+ vehicles seamlessly from one single dashboard."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-24 bg-page-bg border-t border-border-subtle relative z-10">
      {/* Inject JSON-LD Schema for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-text-primary mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-text-secondary font-light max-w-2xl mx-auto">
            Everything you need to know about our vehicle tracking and recovery services in South Africa.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-page-surface border border-border-subtle rounded-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1C5795]"
              >
                <span className="font-semibold text-lg text-text-primary pr-8">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-[#1C5795]" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-text-secondary leading-relaxed font-light border-t border-border-subtle/50 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
