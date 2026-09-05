"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { IconType } from "react-icons";
import { Badge } from "@/components/ui/badge";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPython,
  SiPrisma,
  SiPostgresql,
  SiFirebase,
  SiGithub,
  SiFigma,
  SiDocker,
  SiLinux,
  SiVercel,
  SiFramer,
  SiFlutter,
  SiSentry,
  SiAmazonwebservices,
} from "react-icons/si";

const allTechs: { name: string; icon: IconType }[] = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "Framer Motion", icon: SiFramer },
  { name: "Flutter", icon: SiFlutter },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "NestJS", icon: SiNestjs },
  { name: "Python", icon: SiPython },
  { name: "Prisma", icon: SiPrisma },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Firebase", icon: SiFirebase },
  { name: "GitHub", icon: SiGithub },
  { name: "Figma", icon: SiFigma },
  { name: "Docker", icon: SiDocker },
  { name: "Linux", icon: SiLinux },
  { name: "Vercel", icon: SiVercel },
  { name: "Sentry", icon: SiSentry },
  { name: "Amazon Lightsail", icon: SiAmazonwebservices },
];

const midpoint = Math.ceil(allTechs.length / 2);
const rowOne = allTechs.slice(0, midpoint);
const rowTwo = allTechs.slice(midpoint);

function MarqueeRow({
  items,
  direction,
  duration,
}: {
  items: { name: string; icon: IconType }[];
  direction: "left" | "right";
  duration: number;
}) {
  const track = [...items, ...items];

  return (
    <div
      className="relative overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {track.map((tech, i) => (
          <div
            key={`${tech.name}-${i}`}
            className="flex flex-col items-center gap-3 p-4 rounded-2xl glass-card hover:bg-foreground/10 hover:border-foreground/30 transition-all cursor-default w-28 shrink-0"
          >
            <tech.icon className="w-8 h-8 text-foreground/80" />
            <span className="text-xs font-medium text-foreground/70 text-center leading-tight">
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="techstack" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-foreground/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-foreground/10 text-foreground border-foreground/30 hover:bg-foreground/20">
            Tech Stack
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A curated collection of technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Moving logo rows */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <MarqueeRow items={rowOne} direction="left" duration={55} />
          <MarqueeRow items={rowTwo} direction="right" duration={60} />
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-foreground/50 text-sm">
            Always learning and exploring new technologies
          </p>
        </motion.div>
      </div>
    </section>
  );
}
