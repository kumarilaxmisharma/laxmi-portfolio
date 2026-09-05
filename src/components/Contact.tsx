"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Clock,
  CheckCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "kumarilaxmisharma34@gmail.com",
    href: "mailto:kumarilaxmisharma34@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(+855) 98611183",
    href: "tel:+85598611183",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Phnom Penh, Cambodia",
    href: "#",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: "#",
  },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/kumarilaxmisharma" },
  { icon: Linkedin, label: "LinkedIn", href: "www.linkedin.com/in/kumari-laxmi-sharma-682433187" },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setIsSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });

      // Reset success state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      // Clear error after 5 seconds
      setTimeout(() => setError(""), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden section-alt">
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
            Contact
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Let&apos;s <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Have a project in mind? I&apos;d love to hear from you. Let&apos;s create something amazing together.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid lg:grid-cols-3 gap-4">
          {/* Contact Form - the big bento card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="glass-card border-foreground/10 p-2 bg-transparent h-full">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-foreground/5 border border-foreground/20 focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none transition-all placeholder:text-foreground/40 text-foreground"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-foreground/5 border border-foreground/20 focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none transition-all placeholder:text-foreground/40 text-foreground"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-foreground/5 border border-foreground/20 focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none transition-all placeholder:text-foreground/40 text-foreground"
                      placeholder="Project Collaboration"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-foreground/5 border border-foreground/20 focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none transition-all placeholder:text-foreground/40 text-foreground resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Error Message */}
                  {error && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                      {error}
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="w-full bg-foreground text-background hover:bg-foreground/90 transition-opacity h-12 text-base font-semibold"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : isSubmitted ? (
                      <span className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Message Sent!
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right column - stack of smaller bento cards */}
          <div className="flex flex-col gap-4">
            {/* Get in Touch - solid accent card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="rounded-2xl p-6 bg-blue flex flex-col justify-center min-h-[140px]"
            >
              <Send className="w-6 h-6 mb-3 text-white/90" />
              <h3 className="text-xl font-bold text-white mb-1.5">Get in Touch</h3>
              <p className="text-sm text-white/75 leading-relaxed">
                Feel free to reach out for collaborations, opportunities, or just to say hello!
              </p>
            </motion.div>

            {/* Contact info - 2x2 stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="p-4 rounded-2xl glass-card hover:border-foreground/30 transition-all group flex flex-col justify-between gap-3 min-h-[110px]"
                >
                  <div className="w-9 h-9 rounded-lg bg-foreground/10 flex items-center justify-center group-hover:bg-blue transition-all">
                    <item.icon className="w-4 h-4 text-purple-light group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-[11px] text-foreground/50 mb-0.5">{item.label}</div>
                    <div className="text-sm font-medium text-foreground group-hover:text-blue-light transition-colors leading-tight break-words">
                      {item.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Socials - solid accent card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="rounded-2xl p-5 bg-purple flex items-center justify-between"
            >
              <span className="text-sm font-medium text-white/90">Find me on</span>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-all"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
