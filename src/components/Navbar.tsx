"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Tech Stack", href: "#techstack" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
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
    const element = document.getElementById(href.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          className="flex items-center gap-2 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#home");
          }}
        >
          <div className="relative w-10 h-10 rounded-lg overflow-hidden group-hover:shadow-lg group-hover:shadow-white/30 transition-shadow">
            <Image src="/2.svg" alt="Laxmi Logo" width={40} height={40} className="w-full h-full object-cover" />
          </div>
          
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all relative ${
                activeSection === item.href.replace("#", "")
                  ? "text-white"
                  : "text-white/70 hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeSection === item.href.replace("#", "") && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-white/20 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Theme Toggle & CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button
            onClick={() => scrollToSection("#contact")}
            className="bg-white text-blue-600 hover:bg-white/90 transition-opacity font-semibold dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
          >
            Let&apos;s Talk
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="glass border-white/20 w-[300px] dark:bg-slate-900/95 dark:border-slate-700/50">
            <div className="flex flex-col gap-4 mt-8">
              {/* Theme Toggle in Mobile */}
              <div className="flex items-center justify-between px-4 py-2">
                <span className="text-white/70 text-sm">Theme</span>
                <ThemeToggle />
              </div>
              <div className="h-px bg-white/10 dark:bg-slate-700/50" />
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-left px-4 py-3 rounded-lg text-lg font-medium transition-all ${
                    activeSection === item.href.replace("#", "")
                      ? "bg-white/20 text-white dark:bg-slate-700/50"
                      : "text-white/70 hover:text-white hover:bg-white/10 dark:hover:bg-slate-700/30"
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
              <Button
                onClick={() => scrollToSection("#contact")}
                className="mt-4 bg-white text-blue-600 hover:bg-white/90 font-semibold dark:bg-slate-100 dark:text-slate-900"
              >
                Let&apos;s Talk
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  );
}
