"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    type: "work",
    title: "Technical Project Coordinator",
    company: "Dojology Tech & Venture",
    location: "Phnom Penh, Cambodia",
    period: "2026 - Present",
    description:
      "Manages the development of mobile applications for the main product",
    achievements: [
      "Create project plan and manage team",
      "Develop software development life cycle document and allocate resources",
      "Keep track of team progress and initiate team meeting",
    ],
    current: true,
  },
  {
    type: "work",
    title: "Mobile Developer Intern",
    company: "Dojology Tech & Venture",
    location: "Phnom Penh, Cambodia",
    period: "2025 - 2026",
    description:
      "Gained hands-on experience in mobile development, working on real-world projects and learning industry best practices.",
    achievements: [
      "Built and maintained mobile applications for the main product",
      "Collaborated with senior developers on feature implementation",
      "Learned version control and CI/CD workflows",
    ],
    current: false,
  },
];

const education = [
  {
    type: "education",
    title: "Bachelor's Degree in Software Engineering",
    company: "Camtech University",
    location: "Phnom Penh, Cambodia",
    period: "2023 - 2027",
    description:
      "Studied computer science fundamentals including algorithms, data structures, software engineering, and web development.",
    achievements: [
      "GPA: 3.5/4.0",
      "Relevant coursework: Web Development, Database Systems, Software Engineering",
      "Participated in coding competitions and hackathons",
    ],
    current: false,
  },
];

const certifications = [
  {
    name: "Object-Oriented Programming in Python",
    issuer: "DataCamp",
    year: "2024",
    link: "/certificate_oop_datacamp.pdf"
  },
  {
    name: "Fundamental Project Management",
    issuer: "Coursera",
    year: "2024",
    link: "/Coursera Project Management.pdf"
  },
  {
    name: "JCI Graduation",
    issuer: "JCI",
    year: "2025",
    link: "/jci_graduation.jpg"
  },
];

// Tints of the single site accent (var(--blue)) - never a different hue, only intensity.
const cardTints = [
  { bg: "var(--blue)", bold: true },
  { bg: "color-mix(in srgb, var(--blue) 45%, white)", bold: false },
  { bg: "color-mix(in srgb, var(--blue) 18%, white)", bold: false },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const allExperiences = [...experiences, ...education].sort((a, b) => {
    // Primary: Work always before education
    if (a.type === "work" && b.type !== "work") return -1;
    if (b.type === "work" && a.type !== "work") return 1;

    // Secondary: Sort by end year descending
    const endYearA = parseInt(a.period.split(" - ")[1] === "Present" ? "2099" : a.period.split(" - ")[1]);
    const endYearB = parseInt(b.period.split(" - ")[1] === "Present" ? "2099" : b.period.split(" - ")[1]);
    if (endYearB !== endYearA) return endYearB - endYearA;

    // Tertiary: sort by start year descending
    const startYearA = parseInt(a.period.split(" - ")[0]);
    const startYearB = parseInt(b.period.split(" - ")[0]);
    return startYearB - startYearA;
  });

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
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
            Journey
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground ">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </motion.div>

        {/* Bold Cards + Certifications, one row */}
        <div className="grid md:grid-cols-[2fr_2fr_2fr_1.3fr] gap-6 items-stretch">
          {allExperiences.map((exp, index) => {
            const tint = cardTints[index] ?? cardTints[cardTints.length - 1];
            const textStrong = tint.bold ? "text-white" : "text-[#12172B]";
            const textMedium = tint.bold ? "text-white/80" : "text-[#12172B]/70";
            const textDim = tint.bold ? "text-white/60" : "text-[#12172B]/55";
            const Icon = exp.type === "work" ? Briefcase : GraduationCap;

            return (
              <motion.div
                key={`${exp.title}-${exp.company}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                className="relative rounded-3xl p-6 flex flex-col justify-between overflow-hidden shadow-lg border border-foreground/5 group"
                style={{ backgroundColor: tint.bg }}
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="w-10 h-10 rounded-xl bg-[#12172B] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  {exp.current && (
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${tint.bold ? "bg-white/15 text-white" : "bg-[#12172B]/10 text-[#12172B]"}`}>
                      Current
                    </span>
                  )}
                </div>

                <div>
                  <div className={`text-sm font-semibold mb-2 ${textDim}`}>
                    {String(index + 1).padStart(2, "0")}.
                  </div>
                  <h3 className={`text-xl md:text-2xl font-bold mb-2 leading-tight ${textStrong}`}>
                    {exp.title}
                  </h3>
                  <p className={`text-sm mb-4 ${textMedium}`}>
                    {exp.company} · {exp.period}
                  </p>
                  <p className={`text-sm leading-relaxed mb-4 ${textMedium}`}>
                    {exp.description}
                  </p>
                  <ul className="space-y-1.5">
                    {exp.achievements.slice(0, 2).map((achievement, i) => (
                      <li key={i} className={`flex items-start gap-2 text-xs ${textDim}`}>
                        <span className={`w-1 h-1 rounded-full mt-1.5 shrink-0 ${tint.bold ? "bg-white/60" : "bg-[#12172B]/40"}`} />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.div
                  className={`absolute bottom-6 right-6 w-9 h-9 rounded-full border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity ${
                    tint.bold ? "border-white/40 text-white" : "border-[#12172B]/30 text-[#12172B]"
                  }`}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.div>
            );
          })}

          {/* Certifications - same row, narrower */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="p-5 rounded-3xl glass-card h-full"
          >
            <h3 className="text-sm font-semibold mb-4 flex items-center gap-2 text-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-light shrink-0" />
              Certifications
            </h3>
            <div className="space-y-2.5">
              {certifications.map((cert, index) => (
                <motion.a
                  key={cert.name}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="p-2.5 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors group cursor-pointer block"
                >
                  <h4 className="font-medium text-xs text-foreground group-hover:text-blue-light transition-colors leading-snug">
                    {cert.name}
                  </h4>
                  <p className="text-[11px] text-foreground/60 mt-0.5">
                    {cert.issuer} • {cert.year}
                  </p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
