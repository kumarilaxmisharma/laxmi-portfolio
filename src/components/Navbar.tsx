"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Tech Stack", href: "#techstack" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/kumarilaxmisharma" },
  { name: "LinkedIn", href: "https://linkedin.com/in/kumari-laxmi-sharma-682433187" },
  { name: "Telegram", href: "https://t.me/Kumarilaxmisharma" },
];

const backdropVariants = {
  closed: { opacity: 0 },
  opened: { opacity: 1 },
};

const menuVariants = {
  closed: {
    x: "100%",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  opened: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
} as const;

const linkVariants = {
  closed: {
    x: 50,
    opacity: 0,
  },
  opened: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },
} as const;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    // Add a tiny delay so the drawer closing animation starts before we scroll
    setTimeout(() => {
      const element = document.getElementById(href.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <>
      {/* Brand logo fixed in the top-left */}
      <div className="fixed top-6 left-6 z-50">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#home");
          }}
          className="flex items-center gap-2 group"
        >
          <div className="relative w-10 h-10 rounded-lg overflow-hidden transition-all duration-300 bg-white/5 border border-white/10 group-hover:scale-105">
            <Image src="/2.svg" alt="Laxmi Logo" width={40} height={40} className="w-full h-full object-cover" />
          </div>
        </a>
      </div>

      {/* Top right buttons (Hamburger menu trigger) */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
        
        {/* Floating circular hamburger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative w-12 h-12 rounded-full flex flex-col items-center justify-center transition-all duration-300 shadow-lg border outline-none group cursor-pointer z-50 ${
            isOpen
              ? "bg-blue border-blue text-white"
              : "bg-white border-slate-200 text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
          }`}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5 items-center justify-center">
            <motion.span
              animate={isOpen ? { rotate: 45, y: 4.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className={`w-6 h-[2px] rounded-full transition-colors ${
                isOpen ? "bg-white" : "bg-slate-900 dark:bg-white"
              }`}
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className={`w-6 h-[2px] rounded-full transition-colors ${
                isOpen ? "bg-white" : "bg-slate-900 dark:bg-white"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Full-screen menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial="closed"
              animate="opened"
              exit="closed"
              variants={backdropVariants}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 cursor-pointer"
              transition={{ duration: 0.3 }}
            />

            {/* Menu drawer */}
            <motion.div
              initial="closed"
              animate="opened"
              exit="closed"
              variants={menuVariants}
              className="fixed top-0 right-0 h-screen w-full sm:w-[450px] bg-slate-950 border-l border-white/10 z-40 flex flex-col justify-between p-8 sm:p-12 shadow-2xl overflow-y-auto"
            >
              {/* Top Padding to clear the floating buttons */}
              <div className="pt-20">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/40 block mb-8">
                  Navigation
                </span>
                
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.href.replace("#", "");
                    return (
                      <motion.div key={item.name} variants={linkVariants}>
                        <button
                          onClick={() => scrollToSection(item.href)}
                          className="group relative flex items-center text-4xl sm:text-5xl font-bold text-left outline-none py-1 cursor-pointer w-full"
                        >
                          <span className={`transition-all duration-300 ${
                            isActive
                              ? "text-blue-light pl-6"
                              : "text-white hover:text-blue-light hover:pl-6"
                          }`}>
                            {item.name}
                          </span>
                          
                          {/* Dot indicator */}
                          {isActive && (
                            <motion.span
                              layoutId="activeDot"
                              className="absolute left-0 w-2.5 h-2.5 rounded-full bg-blue"
                              transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                          )}
                        </button>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              {/* Socials Section */}
              <div className="mt-12 pt-6 border-t border-white/5">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/40 block mb-4">
                  Socials
                </span>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-white/60 hover:text-white transition-colors cursor-pointer"
                      whileHover={{ y: -2 }}
                    >
                      {social.name}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
