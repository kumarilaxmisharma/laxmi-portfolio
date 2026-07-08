"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiGit,
  SiGithub,
  SiFigma,
  SiDocker,
  SiLinux,
  SiVercel,
  SiPrisma,
  SiFramer,
  SiFlutter,
} from "react-icons/si";

const techCategories = [
  {
    title: "Frontend",
    techs: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TailwindCSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
      { name: "Flutter", icon: SiFlutter },
    ],
  },
  {
    title: "Backend",
    techs: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "Python", icon: SiPython },
      { name: "Prisma", icon: SiPrisma },
    ],
  },
  {
    title: "Database",
    techs: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    title: "Tools & Others",
    techs: [
      { name: "GitHub", icon: SiGithub },
      { name: "Figma", icon: SiFigma },
      { name: "Docker", icon: SiDocker },
      { name: "Linux", icon: SiLinux },
      { name: "Vercel", icon: SiVercel },
    ],
  },
];

export function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="techstack" className="py-24 relative overflow-hidden">
      {/* Background */}
      {/* Background Effects */}
      <div className="absolute inset-0 bg-dots opacity-20" />
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
            Tech Stack
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            A curated collection of technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Tech Categories */}
        <div className="space-y-12">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2 text-white">
                <span className="w-2 h-2 rounded-full bg-blue-light" />
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                {category.techs.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.1 + techIndex * 0.05,
                      type: "spring",
                    }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group"
                  >
                    <div className="flex flex-col items-center gap-3 p-4 rounded-2xl glass-card hover:bg-white/10 hover:border-white/30 transition-all cursor-default">
                      <tech.icon className="w-8 h-8 text-white/80 group-hover:text-white transition-colors" />
                      <span className="text-xs font-medium text-white/70 group-hover:text-white transition-colors text-center">
                        {tech.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-white/50 text-sm">
            Always learning and exploring new technologies
          </p>
        </motion.div>
      </div>
    </section>
  );
}
