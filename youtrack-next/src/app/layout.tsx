import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YouTrack ZA | Modern Fleet Intelligence",
  description: "Smart Vehicle Tracking & Fleet Management You Can Trust.",
};

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className={`${inter.className} min-h-full flex flex-col bg-page-bg text-text-primary`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
