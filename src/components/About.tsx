"use client";

import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { MapPin, Calendar, GraduationCap, Target, Heart, Award, X, Folder, MousePointer2 } from "lucide-react";
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

  // Photo drifts at a different rate than the text column while the section scrolls by.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-foreground/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <Badge className="mb-10 bg-foreground/10 text-foreground border-foreground/30 hover:bg-foreground/20">
            About Me
          </Badge>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-x-12 gap-y-20 items-start">
          {/* Left - Image composition (parallax layer) */}
          <motion.div style={{ y: photoY }} className="relative lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-foreground/5 rounded-2xl blur-xl opacity-30" />

              {/* Main Image Container */}
              <div className="aspect-square rounded-xl overflow-hidden relative">
                <Image
                  src="/profile.jpg"
                  alt="Laxmi Sharma — About Me"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
              </div>

              {/* Design-tool selection frame overlay */}
              <div className="absolute -inset-2 pointer-events-none hidden sm:block">
                <div className="absolute inset-0 rounded-2xl border-2 border-blue/70" />
                {/* Corner handles */}
                <div className="absolute -top-1.5 -left-1.5 w-3.5 h-3.5 rounded-full bg-background border-2 border-blue" />
                <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-background border-2 border-blue" />
                <div className="absolute -bottom-1.5 -left-1.5 w-3.5 h-3.5 rounded-full bg-background border-2 border-blue" />
                <div className="absolute -bottom-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-background border-2 border-blue" />
                {/* Edge handles */}
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-6 h-3 rounded-full bg-background border-2 border-blue" />
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-6 h-3 rounded-full bg-background border-2 border-blue" />
                <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-6 rounded-full bg-background border-2 border-blue" />
                <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-6 rounded-full bg-background border-2 border-blue" />
                {/* Folder tab accent */}
                <div className="absolute -top-4 right-10 w-9 h-9 rounded-lg bg-blue flex items-center justify-center shadow-lg rotate-6">
                  <Folder className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Floating info chips pinned to the photo */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="absolute -bottom-6 -left-4 sm:-left-8 flex items-center gap-2 px-3 py-2 rounded-xl glass-card shadow-lg -rotate-3"
              >
                <MapPin className="w-4 h-4 text-blue-light shrink-0" />
                <div className="text-left">
                  <div className="text-[10px] text-foreground/50 leading-none mb-0.5">Location</div>
                  <div className="text-xs font-medium text-foreground leading-none whitespace-nowrap">Phnom Penh, Cambodia</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.75, duration: 0.4 }}
                className="absolute -bottom-10 -right-2 sm:-right-6 flex items-center gap-2 px-3 py-2 rounded-xl glass-card shadow-lg rotate-3"
              >
                <Calendar className="w-4 h-4 text-blue-light shrink-0" />
                <div className="text-left">
                  <div className="text-[10px] text-foreground/50 leading-none mb-0.5">Experience</div>
                  <div className="text-xs font-medium text-foreground leading-none whitespace-nowrap">1+ Years</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7 space-y-8 mt-12 lg:mt-0"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                <MousePointer2 className="inline w-5 h-5 md:w-7 md:h-7 text-blue-light -rotate-12 mr-2 align-middle" />
                Get to Know{" "}
                <span className="relative inline-block px-3 py-0.5 mt-2">
                  <span className="absolute inset-0 rounded-lg border-2 border-blue/60" />
                  <span className="absolute -top-1.5 -left-1.5 w-2.5 h-2.5 rounded-full bg-background border-2 border-blue" />
                  <span className="absolute -top-1.5 -right-1.5 w-2.5 h-2.5 rounded-full bg-background border-2 border-blue" />
                  <span className="absolute -bottom-1.5 -left-1.5 w-2.5 h-2.5 rounded-full bg-background border-2 border-blue" />
                  <span className="absolute -bottom-1.5 -right-1.5 w-2.5 h-2.5 rounded-full bg-background border-2 border-blue" />
                  <span className="relative gradient-text">Who I Am</span>
                </span>
              </h2>
              <p className="text-foreground/70 max-w-xl">
                A passionate developer on a mission to build impactful digital solutions
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-foreground/5">
              <h3 className="text-xl font-semibold text-foreground">
                Crafting Digital Experiences with{" "}
                <span className="gradient-text">Passion & Precision</span>
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                As a junior software developer, I bring fresh perspectives and modern approaches
                to every project. I&apos;m passionate about creating web applications that not only
                look stunning but also provide seamless user experiences.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                I believe in writing clean, maintainable code and staying up-to-date with the
                latest technologies. My goal is to grow as a developer while contributing
                meaningful solutions that make a real difference.
              </p>
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
                  <div className="w-8 h-8 rounded-lg bg-foreground/10 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-blue-light" />
                  </div>
                  <span className="text-sm text-foreground">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Mini Badges / Awards */}
            <div className="pt-8 border-t border-foreground/5">
              <div className="text-xs font-semibold text-foreground/40 uppercase tracking-wider mb-4 flex items-center gap-2">
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
                    className="relative w-12 h-12 rounded-full overflow-hidden border border-foreground/10 opacity-70 hover:opacity-100 hover:border-blue-light/50 transition-all cursor-pointer shadow-lg group"
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
