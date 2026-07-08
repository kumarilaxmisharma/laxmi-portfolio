"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Send } from "lucide-react";

const footerLinks = {
  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],
  social: [
    { icon: Linkedin, href: "https://www.linkedin.com/in/kumari-laxmi-sharma-682433187", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/kumarilaxmisharma", label: "GitHub" },
    { icon: Send, href: "https://t.me/kumarilaxmisharma", label: "Telegram" },
  ],
};

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative pt-24 overflow-hidden bg-background">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-dots opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Large Editorial Heading */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Lets create
            <br />
            <span className="text-white/35">incredible work together.</span>
          </h2>
        </div>

        {/* Middle Info Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-8 pb-12 border-b border-white/10">
          {/* Email Info */}
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-white/40 block">Email</span>
            <a
              href="mailto:kumarilaxmisharma34@gmail.com"
              className="text-lg md:text-xl text-white hover:text-blue-light transition-colors font-medium"
            >
              kumarilaxmisharma34@gmail.com
            </a>
          </div>

          {/* Socials Info */}
          <div className="space-y-3 sm:text-right">
            <span className="text-xs uppercase tracking-[0.2em] text-white/40 block sm:text-right">Socials</span>
            <div className="flex gap-3 justify-start sm:justify-end">
              {footerLinks.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white text-slate-950 flex items-center justify-center hover:bg-white/80 transition-all shadow-md group cursor-pointer"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Nav Links and Small Info bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-12 pb-16">
          {/* Horizontal Navigation List */}
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {footerLinks.navigation.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Location & Copyright */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-x-12 gap-y-2 text-sm text-white/40 w-full md:w-auto justify-between">
            <p>Based in Phnom Penh, Cambodia</p>
            <p>© {new Date().getFullYear()} Kumari Laxmi Sharma</p>
          </div>
        </div>

        {/* Oversized Background Watermark Name */}
        <div className="w-full h-[10.5vw] overflow-hidden pointer-events-none select-none flex items-end justify-center">
          <h1 className="text-[13vw] font-bold tracking-tighter text-white leading-none translate-y-[2vw] whitespace-nowrap">
            Laxmi Sharma
          </h1>
        </div>
      </div>
    </footer>
  );
}
