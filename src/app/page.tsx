"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { TechStack } from "@/components/TechStack";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Loader } from "@/components/Loader";

// Subtle section divider component matching the wireframe grid
function SectionDivider() {
  return (
    <div className="relative w-full">
      <div className="absolute inset-x-0 h-px bg-white/[0.06] pointer-events-none" />
    </div>
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  // For SEO crawlers (server side), we render the full content.
  // On the client side, we wait until the loading sequence is complete before mounting.
  const showContent = !mounted || !isLoading;

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Background Vertical Gridlines (motion.dev blueprint layout style) */}
      {showContent && (
        <div className="fixed inset-y-0 left-0 right-0 pointer-events-none z-0 flex justify-center">
          <div className="w-full max-w-[1400px] h-full flex justify-between px-6">
            <div className="w-px h-full bg-white/[0.03]" />
            <div className="w-px h-full bg-white/[0.03] hidden md:block" />
            <div className="w-px h-full bg-white/[0.03] hidden md:block" />
            <div className="w-px h-full bg-white/[0.03]" />
          </div>
        </div>
      )}

      {/* Welcome Preloader */}
      <Loader onComplete={() => setIsLoading(false)} />

      {showContent && (
        <div className="relative z-10">
          {/* Navigation */}
          <Navbar />

          {/* Page Sections with Dividers */}
          <Hero />
          <SectionDivider />
          <About />
          <SectionDivider />
          <Services />
          <SectionDivider />
          <TechStack />
          <SectionDivider />
          <Projects />
          <SectionDivider />
          <Experience />
          <SectionDivider />
          <Contact />
          <SectionDivider />
          <Footer />
        </div>
      )}
    </main>
  );
}
