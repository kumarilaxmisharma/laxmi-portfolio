"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "RNSG CRM (Internal Operations Management)",
    type: "Enterprise Software",
    description: "A secure, role-based internal management system built for a corporate client to streamline their daily operations.",
    image: "/rnsg/auth.png",
    tags: ["Next.js", "TypeScript", "Tailwind", "Internal Tool"],
    category: "fullstack",
    link: "/projects/internal-system",
    linkLabel: "Read Case Study (Confidential)",
    glowColor: "rgba(100, 116, 139, 0.25)",
  },
  {
    title: "Denteeth",
    type: "AI Dental Assistant",
    description: "A framework focused on zero re-renders for React apps, optimising performance.",
    image: "/Denteeth.png",
    tags: ["React", "TypeScript", "Performance"],
    category: "frontend",
    link: "https://denteeth.pages.dev/",
    linkLabel: "View on GitHub",
    glowColor: "rgba(99, 102, 241, 0.25)", // Indigo glow
  },

  {
    title: "tinh mac ecommerce",
    type: "E-commerce",
    description: "Ecommerce website for Mac products with real-time stock updates and user authentication.",
    image: "/rnsg/thumbnail.png",
    tags: ["React", "Tailwind", "Sadcn"],
    category: "fullstack",
    link: "https://tinh-mac-new.vercel.app",
    linkLabel: "View Case Study",
    glowColor: "rgba(20, 184, 166, 0.25)", // Teal glow
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "frontend", label: "Frontend" },
  { id: "fullstack", label: "Full Stack" },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-background">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-blue/20 text-blue-light border-blue/30 hover:bg-blue/30">
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            A selection of my recent work showcasing my skills and creativity
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category.id)}
              className={
                activeCategory === category.id
                  ? "bg-white text-blue hover:bg-white/90 border-0 cursor-pointer"
                  : "border-white/30 text-white hover:bg-white/10 hover:text-white cursor-pointer"
              }
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => {
            const isInternal = project.link.startsWith("/");
            return (
              <motion.a
                key={project.title}
                href={project.link}
                target={isInternal ? undefined : "_blank"}
                rel={isInternal ? undefined : "noopener noreferrer"}
                layout
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative aspect-[4/3] rounded-[2rem] overflow-hidden group cursor-pointer block border border-white/10 hover:border-white/20 transition-colors duration-300 shadow-2xl bg-transparent"
            >
              {/* Image background with scale zoom on hover */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Ambient bottom-left gradient glow overlay */}
              <div 
                className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-60 group-hover:opacity-100" 
                style={{
                  background: `radial-gradient(circle at bottom left, ${project.glowColor} 0%, transparent 60%)`
                }}
              />

              {/* Dark shading overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-black/10" />

              {/* Card Contents */}
              
              {/* Top Left Badge */}
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 rounded-full bg-[#0c0c0e]/95 border border-white/5 text-white/90 text-[11px] font-medium tracking-wide">
                  {project.type}
                </span>
              </div>

              {/* Bottom Info bar */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-white tracking-tight">
                  {project.title}
                </h3>
                <span className="flex items-center gap-1.5 text-sm font-medium text-white/90 transition-colors">
                  <span>{project.linkLabel}</span>
                  <ArrowUpRight className="w-4.5 h-4.5 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </div>
            </motion.a>
            );
          })}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 group cursor-pointer"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
