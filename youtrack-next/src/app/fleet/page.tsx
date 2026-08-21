import { Hero } from '@/components/Hero';
import { BentoGrid } from '@/components/BentoGrid';
import { AppShowcase } from '@/components/AppShowcase';
import { Packages } from '@/components/Packages';
import { HowItWorks } from '@/components/HowItWorks';
import { ContactForm } from '@/components/ContactForm';
import { ROICalculator } from '@/components/ROICalculator';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YouTrack ZA | Commercial Fleet Solutions",
  description: "Advanced telematics, fuel monitoring, and dual-camera dashcams for commercial logistics.",
};

export default function FleetPage() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <Hero variant="fleet" />
      <Packages variant="fleet" />
      <BentoGrid variant="fleet" />
      <HowItWorks />
      <AppShowcase />
      <ROICalculator />
      <ContactForm variant="fleet" />
    </main>
  );
}
