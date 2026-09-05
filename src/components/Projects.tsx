"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
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
    linkLabel: "View On Web",
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
    linkLabel: "View On Web",
    glowColor: "rgba(20, 184, 166, 0.25)", // Teal glow
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "frontend", label: "Frontend" },
  { id: "fullstack", label: "Full Stack" },
];

function ProjectCard({
  project,
  index,
  isInView,
}: {
  project: (typeof projects)[number];
  index: number;
  isInView: boolean;
}) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  // Each card tracks its own scroll progress, so the image drifts independently as it passes through view.
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  const isInternal = project.link.startsWith("/");
  return (
    <motion.a
      ref={cardRef}
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
      className={`relative aspect-[4/3] rounded-[2rem] overflow-hidden group cursor-pointer block border border-foreground/10 hover:border-foreground/20 transition-colors duration-300 shadow-2xl bg-transparent ${
        index === 0 ? "md:aspect-[21/9] md:col-span-2" : ""
      }`}
    >
      {/* Image background, parallax-shifted by scroll, with a separate CSS hover-zoom */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.div style={{ y: imageY }} className="absolute inset-[-8%]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </motion.div>
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
        <span className="px-4 py-2 rounded-full bg-[#0c0c0e]/95 border border-foreground/5 text-foreground/90 text-[11px] font-medium tracking-wide">
          {project.type}
        </span>
      </div>

      {/* Bottom Info bar */}
      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
        <h3 className={`font-semibold text-white tracking-tight ${index === 0 ? "text-2xl md:text-3xl" : "text-2xl"}`}>
          {project.title}
        </h3>
        <span className="flex items-center gap-1.5 text-sm font-medium text-foreground/90 transition-colors">
          <span>{project.linkLabel}</span>
          <ArrowUpRight className="w-4.5 h-4.5 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" />
        </span>
      </div>
    </motion.a>
  );
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-background section-alt">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-foreground/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-purple/20 text-purple-light border-purple/30 hover:bg-purple/30">
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
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
                  ? "bg-foreground text-background hover:bg-foreground/90 border-0 cursor-pointer"
                  : "border-foreground/30 text-foreground hover:bg-foreground/10 hover:text-foreground cursor-pointer"
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
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} isInView={isInView} />
          ))}
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
            className="border-foreground/30 text-foreground hover:bg-foreground/10 group cursor-pointer"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
