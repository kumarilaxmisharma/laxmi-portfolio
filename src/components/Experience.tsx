"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Calendar, MapPin, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    type: "work",
    title: "Project Manager",
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
            Journey
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white ">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-blue/50" />

              {/* Experience Items */}
              <div className="space-y-8">
                {allExperiences.map((exp, index) => (
                  <motion.div
                    key={`${exp.title}-${exp.company}`}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="relative pl-20"
                  >
                    {/* Icon */}
                    <div
                      className={`absolute left-4 w-8 h-8 rounded-full flex items-center justify-center ${
                        exp.current
                          ? "bg-blue shadow-md"
                          : "bg-white/10 border-2 border-white/30"
                      }`}
                    >
                      {exp.type === "work" ? (
                        <Briefcase className={`w-4 h-4 ${exp.current ? 'text-white' : 'text-white/70'}`} />
                      ) : (
                        <GraduationCap className="w-4 h-4 text-white/70" />
                      )}
                    </div>

                    {/* Content Card */}
                    <div className="p-6 rounded-2xl glass-card hover:border-white/30 transition-all group">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white group-hover:text-blue-light transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-white/60">{exp.company}</p>
                        </div>
                        {exp.current && (
                          <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                            Current
                          </Badge>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-white/60 mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>

                      <p className="text-white/60 mb-4">{exp.description}</p>

                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-light mt-2 shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="sticky top-24 space-y-6">
              <div className="p-6 rounded-2xl glass-card">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
                  <span className="w-2 h-2 rounded-full bg-blue-light" />
                  Certifications
                </h3>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.a
                      key={cert.name}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group cursor-pointer block"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-medium text-sm text-white group-hover:text-blue-light transition-colors">
                            {cert.name}
                          </h4>
                          <p className="text-xs text-white/60 mt-1">
                            {cert.issuer} • {cert.year}
                          </p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="p-6 rounded-2xl glass-card">
                <h3 className="text-lg font-semibold mb-4 text-white">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 rounded-xl bg-white/5">
                    <div className="text-2xl font-bold text-white">1+</div>
                    <div className="text-xs text-white/60">Years Exp.</div>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-white/5">
                    <div className="text-2xl font-bold text-white">10+</div>
                    <div className="text-xs text-white/60">Projects</div>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-white/5">
                    <div className="text-2xl font-bold text-white">3</div>
                    <div className="text-xs text-white/60">Certifications</div>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-white/5">
                    <div className="text-2xl font-bold text-white">15+</div>
                    <div className="text-xs text-white/60">Technologies</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
