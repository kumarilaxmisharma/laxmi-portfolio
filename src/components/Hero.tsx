"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Github, Linkedin, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PixelIcon } from "@/components/PixelIcon";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Content recedes (fades, lifts, shrinks) as the user scrolls past the Hero,
  // while the background text zooms in - a parallax exit.
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const bgTextScale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
  const bgTextOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >

      {/* Dot pattern background, fading out toward the edges */}
      <DotPattern
        cr={1.5}
        className={cn(
          "fill-foreground/20",
          "[mask-image:radial-gradient(650px_circle_at_center,white,transparent)]",
        )}
      />

      {/* Large Glassmorphic Background Text - zooms in as you scroll past */}
      <motion.div
        style={{ scale: bgTextScale, opacity: bgTextOpacity }}
        className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="relative"
        >
          <h1 className="text-[12vw] md:text-[14vw] lg:text-[180px] font-bold tracking-tighter select-none whitespace-nowrap"
            style={{
              WebkitTextStroke: '2px color-mix(in srgb, var(--foreground) 15%, transparent)',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 80px color-mix(in srgb, var(--foreground) 10%, transparent)',
            }}
          >
            DEVELOPER
          </h1>
        </motion.div>
      </motion.div>

      {/* Ring decorations removed for flat clean look */}

      {/* Pixel-art accents */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
        transition={{
          opacity: { duration: 0.5, delay: 1 },
          scale: { duration: 0.5, delay: 1, type: "spring" },
          y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 },
        }}
        className="absolute top-[16%] left-[8%] hidden sm:block pointer-events-none"
        style={{ rotate: -6 }}
      >
        <PixelIcon shape="burst" size={5} colorClassName="bg-yellow-400" className="drop-shadow-[0_4px_0_rgba(0,0,0,0.25)]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, y: [0, 12, 0] }}
        transition={{
          opacity: { duration: 0.5, delay: 1.2 },
          scale: { duration: 0.5, delay: 1.2, type: "spring" },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
        }}
        className="absolute top-[52%] left-[5%] hidden md:block pointer-events-none"
        style={{ rotate: 10 }}
      >
        <PixelIcon shape="chevron" size={6} colorClassName="bg-green-400" className="drop-shadow-[0_4px_0_rgba(0,0,0,0.25)]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
        transition={{
          opacity: { duration: 0.5, delay: 1.4 },
          scale: { duration: 0.5, delay: 1.4, type: "spring" },
          y: { duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 1.4 },
        }}
        className="absolute top-[38%] right-[8%] hidden sm:block pointer-events-none"
        style={{ rotate: 8 }}
      >
        <PixelIcon shape="exclaim" size={9} colorClassName="bg-blue-light" className="drop-shadow-[0_4px_0_rgba(0,0,0,0.25)]" />
      </motion.div>

      {/* Floating Orange Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
        className="absolute top-[20%] right-[15%] md:right-[20%]"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue flex items-center justify-center shadow-md"
        >
          <div className="text-center">
            <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-white mx-auto" />
            <span className="text-[8px] md:text-[10px] text-white font-bold">MODERN</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Main Content - fades, lifts, and shrinks slightly as you scroll past */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY, scale: contentScale }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="max-w-5xl mx-auto">
          {/* Top Info Bar */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16 text-foreground/70 text-sm"
          >
            {["Web Development", "Flutter", "React & Next.js", "TypeScript", "Modern Stack"].map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-light" />
                {item}
              </motion.span>
            ))}
          </motion.div>

          {/* Main Title - Centered over the glassmorphic text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight mb-4"
              style={{ textShadow: '0 4px 30px rgba(0,0,0,0.2)' }}
            >
              KUMARI LAXMI
              <br />
              <span className="text-foreground">
                SHARMA
              </span>
            </h2>
          </motion.div>

          {/* Subtitle & Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-12 text-foreground"
          >
            <div className="text-center">
              <div className="text-lg md:text-xl font-bold">Laxmi</div>
              <div className="text-sm text-foreground/60">Junior Developer</div>
            </div>
            <div className="text-center">
              <div className="text-lg md:text-xl font-bold">Portfolio</div>
              <div className="text-sm text-foreground/60">2026</div>
            </div>
            <div className="text-center">
              <div className="text-lg md:text-xl font-bold">Available</div>
              <div className="text-sm text-foreground/60 flex items-center gap-1 justify-center">
                For Hire
                <span className="relative flex h-2 w-2 ml-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="bg-foreground text-background hover:bg-foreground/90 transition-all shadow-lg shadow-foreground/20 px-8 font-semibold"
            >
              View My Work
              <ArrowDown className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#contact")}
              className="border-foreground/30 text-foreground hover:bg-foreground/10 hover:border-foreground/50 px-8"
            >
              Let&apos;s Connect
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center justify-center gap-4 mt-12"
          >
            {[
              { icon: Github, href: "https://github.com/kumarilaxmisharma", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/kumari-laxmi-sharma-682433187", label: "LinkedIn" },
              { icon: Send, href: "https://t.me/Kumarilaxmisharma", label: "Telegram" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-foreground/10 backdrop-blur-sm border border-foreground/20 flex items-center justify-center text-foreground/80 hover:text-foreground hover:bg-foreground/20 hover:border-foreground/40 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Corner Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-8 text-foreground/50"
      >
        <div className="text-xs font-bold tracking-widest">SIMPLE</div>
        <div className="text-xs font-bold tracking-widest">DESIGN</div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-foreground/30 flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 rounded-full bg-foreground/60"
          />
        </motion.div>
      </motion.div>

      {/* Rotating Text Circle */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, type: "spring" }}
        className="absolute bottom-16 right-8 md:bottom-20 md:right-16"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-20 h-20 md:w-24 md:h-24"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text className="fill-white/50 text-[11px] font-medium tracking-widest">
              <textPath href="#circlePath">
                PROBLEM SOLVING • CREATIVE •
              </textPath>
            </text>
          </svg>
        </motion.div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-foreground/50" />
        </div>
      </motion.div>

      {/* Dashed Line Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px">
        <div className="w-full h-full border-t-2 border-dashed border-foreground/20" />
      </div>
    </section>
  );
}
