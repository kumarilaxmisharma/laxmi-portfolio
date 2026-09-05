"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code,
  Palette,
  Smartphone,
  Shield,
  Zap,
  Settings,
  Monitor,
  Layers,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Code,
    title: "Mobile & Web Development",
    description:
      "Building modern, responsive web applications using the latest frameworks and best practices.",
    features: ["Flutter", "React & Next.js", "TypeScript", "REST APIs"],
  },
  {
    icon: Palette,
    title: "UI/UX Implementation",
    description:
      "Transforming designs into pixel-perfect, interactive user interfaces with smooth animations.",
    features: ["Figma to Code", "TailwindCSS", "Animations"],
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Creating seamless experiences across all devices and screen sizes with mobile-first approach.",
    features: ["Mobile First", "Cross-Browser", "Accessibility"],
  },
  {
    icon: Shield,
    title: "Backend & Security",
    description:
      "Building secure backend integrations with authentication, data protection, and secure API practices.",
    features: ["API Security", "Authentication", "Data Protection", "Secure APIs"],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Optimizing web applications for speed, SEO, and core web vitals to enhance user experience.",
    features: ["Fast Loading", "SEO Friendly", "Core Web Vitals"],
  },
  {
    icon: Settings,
    title: "DevOps & Version Control",
    description:
      "Managing code with Git workflows, automating deployments, and ensuring smooth CI/CD pipelines.",
    features: ["Git & GitHub", "CI/CD", "Docker", "Deployment"],
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 relative overflow-hidden section-alt">
      {/* Background */}
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-foreground/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-purple/20 text-purple-light border-purple/30 hover:bg-purple/30">
            Services
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            What I <span className="gradient-text">Can Do</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Comprehensive development services to bring your vision to life
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-card border-foreground/10 hover:border-foreground/30 transition-all duration-300 hover-lift h-full group bg-transparent">
                <CardHeader>
                  <div className="w-12 h-12 rounded-2xl bg-purple mb-4 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                    <service.icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-purple-light transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-foreground/60">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-3 py-1 rounded-full bg-foreground/10 text-foreground/80 border border-foreground/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 p-8 rounded-2xl glass-card relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-foreground/5" />
          <div className="relative z-10 text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Why Work <span className="gradient-text">With Me?</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="space-y-2">
                <div className="w-12 h-12 mx-auto rounded-2xl bg-purple flex items-center justify-center mb-4 shadow-lg">
                  <Monitor className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <h4 className="font-semibold text-foreground">Modern Solutions</h4>
                <p className="text-sm text-foreground/60">
                  Using cutting-edge technologies to build future-proof applications
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 mx-auto rounded-2xl bg-foreground flex items-center justify-center mb-4 shadow-lg">
                  <Layers className="w-5 h-5 text-background" strokeWidth={2.5} />
                </div>
                <h4 className="font-semibold text-foreground">Clean Code</h4>
                <p className="text-sm text-foreground/60">
                  Writing maintainable, scalable, and well-documented code
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 mx-auto rounded-2xl bg-purple flex items-center justify-center mb-4 shadow-lg">
                  <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <h4 className="font-semibold text-foreground">Fast Delivery</h4>
                <p className="text-sm text-foreground/60">
                  Efficient workflow ensuring timely delivery without compromising quality
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
