"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { MapPin, Calendar, GraduationCap, Target, Heart, Award, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";



const highlights = [
  { icon: Target, text: "Focused on clean, maintainable code" },
  { icon: Heart, text: "Passionate about user experience" },
  { icon: GraduationCap, text: "Continuous learner & problem solver" },
];

const awards = [
  { id: "hirepro", image: "/award/hirepro_bandos.jpg", title: "NICC Bandos Acceleration Program - HirePro Top 10" },
  { id: "jci-award", image: "/award/jci_award.jpg", title: "2025 YLP Best Performing Award" },
  { id: "jci-grad", image: "/award/jci_graduation.jpg", title: "JCI Phnom Penh Graduation 2025 - 2 Projects Breakfast Talk and BDME" },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedAward, setSelectedAward] = useState<{image: string, title: string} | null>(null);

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-white/10 text-white border-white/30 hover:bg-white/20">
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Get to Know <span className="gradient-text">Who I Am</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            A passionate developer on a mission to build impactful digital solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Avatar Area */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-white/5 rounded-2xl blur-xl opacity-30" />
              
              {/* Main Image Container */}
              <div className="relative glass-card rounded-2xl p-8 overflow-hidden">
                <div className="aspect-square rounded-xl overflow-hidden relative">
                  <Image
                    src="/profile.jpg"
                    alt="Laxmi Sharma — About Me"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">
                Crafting Digital Experiences with{" "}
                <span className="gradient-text">Passion & Precision</span>
              </h3>
              <p className="text-white/70 leading-relaxed">
                As a junior software developer, I bring fresh perspectives and modern approaches 
                to every project. I&apos;m passionate about creating web applications that not only 
                look stunning but also provide seamless user experiences.
              </p>
              <p className="text-white/70 leading-relaxed">
                I believe in writing clean, maintainable code and staying up-to-date with the 
                latest technologies. My goal is to grow as a developer while contributing 
                meaningful solutions that make a real difference.
              </p>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 rounded-lg glass-card">
                <MapPin className="w-5 h-5 text-blue-light" />
                <div>
                  <div className="text-xs text-white/60">Location</div>
                  <div className="text-sm font-medium text-white">Phnom Penh, Cambodia</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg glass-card">
                <Calendar className="w-5 h-5 text-blue-light" />
                <div>
                  <div className="text-xs text-white/60">Experience</div>
                  <div className="text-sm font-medium text-white">1+ Years</div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-blue-light" />
                  </div>
                  <span className="text-sm text-white">{item.text}</span>
                </motion.div>
              ))}
            </div>
            {/* Mini Badges / Awards */}
            <div className="mt-8 pt-8 border-t border-white/5">
              <div className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Award className="w-4 h-4" />
                Recognitions & Milestones
              </div>
              <div className="flex gap-4">
                {awards.map((award, index) => (
                  <motion.button
                    key={award.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedAward({ image: award.image, title: award.title })}
                    className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 opacity-70 hover:opacity-100 hover:border-blue-light/50 transition-all cursor-pointer shadow-lg group"
                    title={`View ${award.title}`}
                  >
                    <Image
                      src={award.image}
                      alt={award.title}
                      fill
                      className="object-cover transition-all duration-300"
                      sizes="48px"
                    />
                  </motion.button>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>

      {/* Full-screen Image Modal */}
      <AnimatePresence>
        {selectedAward && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedAward(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full aspect-auto rounded-2xl overflow-hidden shadow-2xl bg-black"
            >
              <button
                onClick={() => setSelectedAward(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors backdrop-blur-md border border-white/10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="relative w-full" style={{ maxHeight: '80vh', height: '900px' }}>
                <Image
                  src={selectedAward.image}
                  alt={selectedAward.title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  quality={100}
                />
              </div>
              {/* Text Caption Overlay at bottom of modal */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 text-center">
                <p className="text-white text-lg font-medium tracking-wide">
                  {selectedAward.title}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
