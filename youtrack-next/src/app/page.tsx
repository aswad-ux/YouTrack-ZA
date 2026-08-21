import { Hero } from '@/components/Hero';
import { BentoGrid } from '@/components/BentoGrid';
import { AppShowcase } from '@/components/AppShowcase';
import { Packages } from '@/components/Packages';
import { HowItWorks } from '@/components/HowItWorks';
import { ContactForm } from '@/components/ContactForm';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <Hero variant="personal" />
      <Packages variant="personal" />
      <BentoGrid variant="personal" />
      <HowItWorks />
      <AppShowcase />
      <ContactForm variant="personal" />
    </main>
  );
}
