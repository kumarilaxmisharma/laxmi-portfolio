import Link from "next/link";
import { ArrowLeft, Lock, Shield, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function InternalSystemCaseStudy() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <Link 
          href="/#projects" 
          className="inline-flex items-center text-foreground/60 hover:text-foreground mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>

        {/* Header Section */}
        <div className="space-y-6 mb-16">
          <div className="flex items-center gap-3">
            <Badge className="bg-blue/20 text-blue-light border-blue/30 px-3 py-1 hover:bg-blue/30">
              Case Study
            </Badge>
            <Badge variant="outline" className="border-amber-500/30 text-amber-500 bg-amber-500/10 px-3 py-1 flex items-center gap-1.5">
              <Lock className="w-3 h-3" />
              Confidential Client
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            RNSG CRM <span className="gradient-text text-3xl md:text-4xl block mt-2">(Internal Operations Management)</span>
          </h1>
          
          <p className="text-xl text-foreground/70 leading-relaxed">
            A secure, role-based internal management system built to streamline daily operations and automate manual workflows for an enterprise client.
          </p>
        </div>

        {/* Project Images */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="rounded-2xl border border-foreground/10 overflow-hidden shadow-2xl">
            <img 
              src="/rnsg/auth.png" 
              alt="System Authentication" 
              className="w-full h-auto hover:scale-105 transition-transform duration-700" 
            />
          </div>
          <div className="rounded-2xl border border-foreground/10 overflow-hidden shadow-2xl">
            <img 
              src="/rnsg/report.png" 
              alt="System Reporting Dashboard" 
              className="w-full h-auto hover:scale-105 transition-transform duration-700" 
            />
          </div>
        </div>

        {/* Content Details */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Column */}
          <div className="md:col-span-2 space-y-12">
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-light" />
                Engineering & Architecture
              </h2>
              <ul className="space-y-4 text-foreground/70 leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-light shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Cloud Architecture & Routing:</strong> Architected AWS EC2 infrastructure for staging and production. Configured Nginx reverse proxies for secure subdomain routing and utilized PM2 for zero-downtime deployments.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-light shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Backend & Database:</strong> Developed scalable Node.js/NestJS services using PostgreSQL and Prisma to manage complex financial tracking and logistics relational data.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-light shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Core Features:</strong> Built modules for retailer profile management, tiered promotions, and a delivery logistics system featuring photo proof-of-delivery.
                  </div>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                <Lock className="w-5 h-5 text-blue-light" />
                Security & OWASP Compliance
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                Security was prioritized from day one, adhering to OWASP Top 10 guidelines:
              </p>
              <ul className="space-y-3 mt-4 text-foreground/70">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-light mt-2 shrink-0" />
                  <span><strong>Access Control (A01):</strong> Implemented strict RBAC to enforce data isolation among sales staff and automated administrative approval gates.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-light mt-2 shrink-0" />
                  <span><strong>Injection Defense (A03):</strong> Leveraged Prisma for parameterized queries and rigorous input sanitization on all API endpoints.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-light mt-2 shrink-0" />
                  <span><strong>Misconfiguration (A05):</strong> Hardened AWS environments by resolving port collisions and securing Nginx configurations.</span>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-light" />
                Coordination & QA Testing
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                Directed the technical integration between the web-based admin portal and a Telegram Mini-App workflow. Established rigorous staging-to-production release pipelines and translated complex business needs into automated system workflows.
              </p>
              <p className="text-foreground/70 leading-relaxed mt-2">
                Designed comprehensive unit and integration testing pipelines to validate business logic, access control matrices, and seamless data flow across the entire platform.
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="p-6 rounded-2xl glass-card">
              <h3 className="text-sm font-semibold text-foreground/90 uppercase tracking-wider mb-4">
                Core Tech Stack
              </h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 p-2 rounded-lg bg-foreground/5 border border-foreground/10">
                  <div className="w-8 h-8 flex items-center justify-center bg-blue/20 rounded text-blue-light">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>
                  </div>
                  <span className="text-sm text-foreground/80">Next.js, Telegram Mini-App</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg bg-foreground/5 border border-foreground/10">
                  <div className="w-8 h-8 flex items-center justify-center bg-green-500/20 rounded text-green-400">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>
                  </div>
                  <span className="text-sm text-foreground/80">Node.js, NestJS</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg bg-foreground/5 border border-foreground/10">
                  <div className="w-8 h-8 flex items-center justify-center bg-purple-500/20 rounded text-purple-400">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
                  </div>
                  <span className="text-sm text-foreground/80">PostgreSQL, Prisma</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg bg-foreground/5 border border-foreground/10">
                  <div className="w-8 h-8 flex items-center justify-center bg-amber-500/20 rounded text-amber-400">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19a4.5 4.5 0 0 0 .5-8.97 7 7 0 0 0-13.9 1.44 3.5 3.5 0 0 0 1.4 6.53"/></svg>
                  </div>
                  <span className="text-sm text-foreground/80">AWS EC2, Nginx, PM2</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl glass-card">
              <h3 className="text-sm font-semibold text-foreground/90 uppercase tracking-wider mb-4">
                Project Scope
              </h3>
              <ul className="space-y-3 text-sm text-foreground/70">
                <li className="flex justify-between border-b border-foreground/5 pb-2">
                  <span>Role</span>
                  <span className="text-foreground text-right">Full Stack &<br/>Cloud Engineer</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span>Status</span>
                  <span className="text-green-400">Deployed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
