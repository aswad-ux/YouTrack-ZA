import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YouTrack ZA | Stolen Vehicle Recovery & Fleet Management South Africa",
  description: "Insurance-approved vehicle tracking, AI fleet management, and 24/7 stolen vehicle recovery across South Africa. Protect your car or optimize your fleet today.",
  keywords: ["vehicle tracking South Africa", "stolen vehicle recovery RSA", "car tracker", "fleet management software", "AI dashcam South Africa", "insurance approved tracker"],
  alternates: {
    canonical: 'https://youtrackza.com',
  },
  openGraph: {
    title: "YouTrack ZA | Modern Fleet Intelligence",
    description: "Smart Vehicle Tracking & Fleet Management You Can Trust.",
    url: 'https://youtrackza.com',
    siteName: 'YouTrack ZA',
    locale: 'en_ZA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "YouTrack ZA | Vehicle Tracking South Africa",
    description: "Insurance-approved vehicle tracking and fleet management.",
  },
};

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'YouTrack ZA',
    image: 'https://youtrackza.com/assets/logo.png',
    description: 'Insurance-approved vehicle tracking, fleet management, and 24/7 stolen vehicle recovery across South Africa.',
    '@id': 'https://youtrackza.com',
    url: 'https://youtrackza.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Johannesburg',
      addressRegion: 'Gauteng',
      addressCountry: 'ZA'
    },
    areaServed: 'ZA',
    sameAs: [
      'https://www.facebook.com/youtrackza',
      'https://www.linkedin.com/company/youtrackza'
    ]
  };

  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} min-h-full flex flex-col bg-page-bg text-text-primary`}>
        <Navbar />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
