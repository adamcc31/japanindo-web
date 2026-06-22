"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import AetherHero from "./AetherHero";
import Image from "next/image";
import RadialOrbitalTimeline, { TimelineItem } from "./RadialOrbitalTimeline";

// ---------------------------------------------------------
// Helper Components for Animations (No dependencies needed)
// ---------------------------------------------------------

function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] transform motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function CountUp({
  end,
  suffix = "",
  duration = 1500,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(end);
      return;
    }

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Easing out quad
      const easedProgress = progress * (2 - progress);
      setCount(Math.floor(easedProgress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return (
    <span ref={ref} className="font-mono tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

// ---------------------------------------------------------
// Main Landing Page
// ---------------------------------------------------------

export default function TechServicesPage() {
  const [heroMounted, setHeroMounted] = useState(false);

  useEffect(() => {
    setHeroMounted(true);
  }, []);

  const useCasesData: TimelineItem[] = [
    {
      id: 1,
      title: "Multi-Agent Support",
      date: "Real-Time Routing",
      content: "Consolidate customer inquiries from multiple platforms into a single, unified WhatsApp interface. Routes chat events in real-time to active agents, maintaining state and customer history.",
      category: "Support",
      icon: "forum",
      relatedIds: [2, 3],
      status: "completed",
      energy: 98,
    },
    {
      id: 2,
      title: "Pension & Travel Broadcasts",
      date: "Automated Notifications",
      content: "Dispatch critical alerts, sim card payment reminder, travel itineraries and pension program updates using official Meta-approved templates. Fully automated through system triggers and integrated scheduling pipelines.",
      category: "Broadcast",
      icon: "notifications_active",
      relatedIds: [1, 4],
      status: "completed",
      energy: 95,
    },
    {
      id: 3,
      title: "Real-Time Brand Routing",
      date: "Brand Parsing",
      content: "Intelligent parsing of incoming messages to route users to the appropriate brand channel (JP Smart Sim, travel services, or consulting) under the PT Japanindo Travel group umbrella.",
      category: "Routing",
      icon: "alt_route",
      relatedIds: [1, 4],
      status: "completed",
      energy: 92,
    },
    {
      id: 4,
      title: "Co-Existing Sync Mode",
      date: "Symmetric Sync",
      content: "Enables operations via standard mobile WhatsApp apps alongside our cloud-based database. Events are synced symmetrically in real-time, preventing message duplication or state conflicts.",
      category: "Synchronization",
      icon: "sync",
      relatedIds: [2, 3],
      status: "in-progress",
      energy: 85,
    },
  ];

  return (
    <div className="bg-[#000000] text-white font-sans selection:bg-blue-600/30 min-h-screen pb-32">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none h-[50rem]" />

      {/* Floating Header */}
      <header className="border-b border-[#1F1F1F] bg-black/60 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition">
            <Image
              src="/assets/eg.svg"
              alt="Japanindo Tech Logo"
              width={28}
              height={28}
              className="rounded-lg"
            />
            <span className="font-semibold text-sm tracking-wider uppercase text-white font-mono">JAPANINDO <span className="text-blue-500">TECH</span></span>
          </Link>
          <div className="hidden sm:flex items-center gap-6">
            <Link href="#use-cases" className="text-sm text-[#A1A1AA] hover:text-white transition">Use Cases</Link>
            <Link href="#architecture" className="text-sm text-[#A1A1AA] hover:text-white transition">Architecture</Link>
            <Link href="#compliance" className="text-sm text-[#A1A1AA] hover:text-white transition">Compliance</Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <AetherHero
        title={
          <>
            Enterprise WhatsApp Infrastructure,{" "}
            <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-white bg-clip-text text-transparent">
              Fully Managed.
            </span>
          </>
        }
        subtitle="Powering reliable and compliant customer communication pipelines for PT Japanindo Travel Connection's affiliated brands via the Meta Cloud API."
        height="90vh"
        badges={
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-medium bg-blue-500/10 border border-blue-500/30 text-blue-400">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              Meta Cloud API Partner
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-medium bg-[#111111] border border-[#2D2D2D] text-[#A1A1AA]">
              WhatsApp Tech Provider
            </span>
          </div>
        }
        stats={
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto p-4 rounded-2xl bg-[#0a0a0a]/80 backdrop-blur-sm border border-[#1F1F1F] mt-10">
            <div className="text-center">
              <div className="text-lg md:text-2xl font-bold text-white">
                <CountUp end={99} suffix=".9%" />
              </div>
              <div className="text-[10px] md:text-xs text-[#52525B] uppercase tracking-wider font-medium">Uptime</div>
            </div>
            <div className="text-center border-x border-[#1F1F1F]">
              <div className="text-lg md:text-2xl font-bold text-blue-500">
                <CountUp end={50} suffix="K+" />
              </div>
              <div className="text-[10px] md:text-xs text-[#52525B] uppercase tracking-wider font-medium">Messages/Mo</div>
            </div>
            <div className="text-center">
              <div className="text-lg md:text-2xl font-bold text-white">
                <CountUp end={4} suffix=" Brands" />
              </div>
              <div className="text-[10px] md:text-xs text-[#52525B] uppercase tracking-wider font-medium">Connected</div>
            </div>
          </div>
        }
      />

      {/* Use Cases Section */}
      <section id="use-cases" className="py-24 border-t border-[#1F1F1F]">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white tracking-tight mb-4">Core Use Cases</h2>
            <p className="text-[#A1A1AA]">
              Purpose-built messaging architectures tailored for high-frequency operations, notifications, and customer workflows.
            </p>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto">
            <RadialOrbitalTimeline timelineData={useCasesData} />
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-24 border-t border-[#1F1F1F] bg-[#050505]">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white tracking-tight mb-4">Core Tech Stack</h2>
            <p className="text-[#A1A1AA]">
              Powering our messaging infrastructure with developer-first tools and hosting platforms built for scale.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Tech 1 */}
            <ScrollReveal delay={100} className="h-full">
              <div className="bg-[#0a0a0a] border border-[#1F1F1F] rounded-2xl p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="text-blue-500 font-semibold text-xs uppercase tracking-wider mb-2">Gateway</div>
                  <div className="mb-2">
                    <Image
                      src="/assets/Meta_Platforms_Inc._logo.svg"
                      alt="Meta Business Platform"
                      width={200}
                      height={64}
                    />
                  </div>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">
                    Direct access to the WhatsApp Business API. Ensures rapid message delivery, secure HTTPS webhook processing, and support for interactive media templates.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Tech 2 */}
            <ScrollReveal delay={200} className="h-full">
              <div className="bg-[#0a0a0a] border border-[#1F1F1F] rounded-2xl p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="text-blue-500 font-semibold text-xs uppercase tracking-wider mb-2">Data Engine</div>
                  <div className="mb-2">
                    <Image
                      src="/assets/supabase-logo.svg"
                      alt="Supabase"
                      width={200}
                      height={64}
                    />
                  </div>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">
                    Utilizes PostgreSQL databases, real-time sync networks, and lightweight edge serverless functions to orchestrate message storage and state triggers.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Tech 3 */}
            <ScrollReveal delay={300} className="h-full">
              <div className="bg-[#0a0a0a] border border-[#1F1F1F] rounded-2xl p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="text-blue-500 font-semibold text-xs uppercase tracking-wider mb-2">Frontend</div>
                  <div className="mb-2">
                    <Image
                      src="/assets/Next.js_wordmark.svg"
                      alt="nextjs"
                      width={180}
                      height={64}
                    />
                  </div>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">
                    Powers the internal support dashboards. Provides responsive, server-side rendered interfaces to load chat sessions instantly and reduce latency.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Tech 4 */}
            <ScrollReveal delay={400} className="h-full">
              <div className="bg-[#0a0a0a] border border-[#1F1F1F] rounded-2xl p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="text-blue-500 font-semibold text-xs uppercase tracking-wider mb-2">Hosting</div>
                  <div className="mb-2">
                    <Image
                      src="/assets/railway.svg"
                      alt="railway"
                      width={180}
                      height={64}
                    />
                  </div>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">
                    Hosting environments utilizing isolated Docker containers and serverless runtimes to guarantee high availability and geographical proximity to users.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Business Model Section */}
      <section className="py-24 border-t border-[#1F1F1F]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <ScrollReveal>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-2">
                  Operational Model
                </div>
                <h2 className="text-3xl font-bold text-white tracking-tight mb-4">
                  Managed Infrastructure Agency Model
                </h2>
                <p className="text-[#A1A1AA] text-sm leading-relaxed mb-4">
                  PT Japanindo Travel Connection operates strictly as an in-house technology consultant and managed provider. We set up, run, and secure the WhatsApp Business Platform exclusively for affiliated brands and sister entities within the corporate group.
                </p>
                <p className="text-[#A1A1AA] text-sm leading-relaxed">
                  We do not offer a public SaaS interface or open enrollment to un-audited third parties. This allows us to enforce strict data compliance policies and maintain high standards of performance and support.
                </p>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-6">
              <ScrollReveal delay={150}>
                <div className="bg-[#0a0a0a] border border-[#1F1F1F] rounded-2xl p-6 md:p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mt-1 flex-shrink-0">
                      <span className="material-icons-round text-sm">corporate_fare</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">Corporate Client Isolation</h4>
                      <p className="text-xs text-[#A1A1AA] leading-relaxed">
                        Each affiliated brand (such as JP Smart Sim) possesses a separate WhatsApp Business Account (WABA) registered under their own official Facebook Business Manager.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 border-t border-[#1F1F1F] pt-6">
                    <div className="h-8 w-8 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mt-1 flex-shrink-0">
                      <span className="material-icons-round text-sm">settings_suggest</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">Managed Integration Lifecycle</h4>
                      <p className="text-xs text-[#A1A1AA] leading-relaxed">
                        PT Japanindo manages Webhook integrations, API key rotation, template submissions, and server resource allocation on behalf of each brand.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 border-t border-[#1F1F1F] pt-6">
                    <div className="h-8 w-8 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mt-1 flex-shrink-0">
                      <span className="material-icons-round text-sm">lock_person</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">Strict Group Adherence</h4>
                      <p className="text-xs text-[#A1A1AA] leading-relaxed">
                        No sharing of WhatsApp Business assets or phone lines between brands. All metadata, credentials, and API lines remain completely siloed.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Data Architecture Section */}
      <section id="architecture" className="py-24 border-t border-[#1F1F1F] bg-[#050505]">
        <div className="container mx-auto px-6 max-w-5xl">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white tracking-tight mb-4">Secure Data Architecture</h2>
            <p className="text-[#A1A1AA]">
              A localized and role-isolated pipeline designed to route, sync, and persist messaging events with maximum security.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* CSS & SVG Flow Diagram */}
            <div className="lg:col-span-7 flex justify-center">
              <ScrollReveal className="w-full">
                <div className="bg-[#0a0a0a] border border-[#1F1F1F] rounded-3xl p-6 md:p-8 flex flex-col items-center">
                  <div className="text-xs text-[#52525B] uppercase tracking-wider font-semibold mb-6">Real-Time Messaging Flow</div>

                  {/* Flow Steps */}
                  <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-2">
                    {/* Node 1 */}
                    <div className="flex flex-col items-center bg-[#111111] border border-[#1F1F1F] rounded-2xl p-4 w-40 text-center">
                      <div className="h-8 w-8 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 mb-2">
                        <span className="material-icons-round text-sm">phone_iphone</span>
                      </div>
                      <span className="text-xs font-bold block">User Device</span>
                      <span className="text-[10px] text-[#52525B] block mt-0.5">WhatsApp App</span>
                    </div>

                    {/* Arrow 1 */}
                    <div className="flex flex-col items-center justify-center text-[#52525B] h-8 w-8 md:rotate-0 rotate-90">
                      <span className="material-icons-round text-xl text-blue-500">east</span>
                    </div>

                    {/* Node 2 */}
                    <div className="flex flex-col items-center bg-[#111111] border border-[#1F1F1F] rounded-2xl p-4 w-40 text-center relative">
                      <div className="absolute -top-2.5 px-2 py-0.5 rounded bg-blue-600 text-[8px] font-bold text-white uppercase tracking-wider">
                        Secure SSL
                      </div>
                      <div className="h-8 w-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-2">
                        <span className="material-icons-round text-sm">cloud</span>
                      </div>
                      <span className="text-xs font-bold block">Meta Gateway</span>
                      <span className="text-[10px] text-[#52525B] block mt-0.5">Cloud API Hub</span>
                    </div>

                    {/* Arrow 2 */}
                    <div className="flex flex-col items-center justify-center text-[#52525B] h-8 w-8 md:rotate-0 rotate-90">
                      <span className="material-icons-round text-xl text-blue-500">east</span>
                    </div>

                    {/* Node 3 */}
                    <div className="flex flex-col items-center bg-[#111111] border border-blue-500/40 rounded-2xl p-4 w-40 text-center relative shadow-[0_0_15px_rgba(37,99,235,0.1)]">
                      <div className="absolute -top-2.5 px-2 py-0.5 rounded bg-green-600 text-[8px] font-bold text-white uppercase tracking-wider">
                        Isolated DB
                      </div>
                      <div className="h-8 w-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-2">
                        <span className="material-icons-round text-sm">storage</span>
                      </div>
                      <span className="text-xs font-bold block">Supabase Suite</span>
                      <span className="text-[10px] text-[#52525B] block mt-0.5">Postgres + RLS</span>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-[#1F1F1F] pt-6 w-full text-center">
                    <p className="text-[11px] text-[#52525B] leading-relaxed">
                      All connections are secured using TLS 1.3 encryption. PostgreSQL Row-Level Security (RLS) ensures complete data containment for each connected brand.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Architecture Details */}
            <div className="lg:col-span-5 space-y-6">
              <ScrollReveal delay={150}>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Technical Data Handling</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">Data Storage &amp; Isolation</h4>
                      <p className="text-xs text-[#A1A1AA] leading-relaxed">
                        Message logs are securely archived inside a dedicated Supabase PostgreSQL schema. Row-Level Security (RLS) restricts access policies so that agents of Brand A can never read message flows associated with Brand B.
                      </p>
                    </div>

                    <div className="border-t border-[#1F1F1F] pt-4">
                      <h4 className="text-sm font-semibold text-white mb-1">Data Processing Scope</h4>
                      <p className="text-xs text-[#A1A1AA] leading-relaxed">
                        We process chat text and attachment binary objects (images, PDFs), customer phone numbers, message statuses (sent, delivered, read), and agent session mappings.
                      </p>
                    </div>

                    <div className="border-t border-[#1F1F1F] pt-4">
                      <h4 className="text-sm font-semibold text-white mb-1">Access Control &amp; Privacy</h4>
                      <p className="text-xs text-[#A1A1AA] leading-relaxed">
                        Group support staff are assigned granular roles (Support Agent, Brand Manager, System Admin). No data is rented, sold, or shared with third parties under any circumstances.
                      </p>
                    </div>

                    <div className="border-t border-[#1F1F1F] pt-4">
                      <h4 className="text-sm font-semibold text-white mb-1">Retention Policy</h4>
                      <p className="text-xs text-[#A1A1AA] leading-relaxed">
                        Messages logs are retained for <strong className="text-white">30 days</strong> for active customer resolution before deletion, while contact profiles are kept indefinitely or until deletion is formally requested by the subject.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Legal & Compliance Section */}
      <section id="compliance" className="py-24 border-t border-[#1F1F1F]">
        <div className="container mx-auto px-6 max-w-4xl">
          <ScrollReveal className="text-center mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-2">
              Legal Disclosure
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight mb-4">Legal &amp; Compliance</h2>
            <p className="text-[#A1A1AA] text-sm">
              PT Japanindo Travel Connection operates in full compliance with Indonesian personal data protection regulations and Meta Platform policies.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="bg-[#0a0a0a] border border-[#1F1F1F] rounded-3xl p-6 md:p-8 space-y-8">
              {/* Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-base font-bold text-white border-b border-[#1F1F1F] pb-2">Regulatory Adherence</h3>
                  
                  <div>
                    <h4 className="text-xs font-semibold text-blue-400">Governing Law</h4>
                    <p className="text-xs text-[#A1A1AA] mt-1 leading-relaxed">
                      We strictly adhere to the Laws of the Republic of Indonesia, specifically <strong className="text-white">Law No. 27 of 2022 on Personal Data Protection (UU PDP)</strong> governing processing, consent, and storage of user metrics.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-blue-400">Meta Policy Alignment</h4>
                    <p className="text-xs text-[#A1A1AA] mt-1 leading-relaxed">
                      Adherence to all Meta Platform Terms, Developer Policies, and WhatsApp Business API terms. We submit template layouts for official pre-approval prior to broadcast.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-base font-bold text-white border-b border-[#1F1F1F] pb-2">Security Measures</h3>

                  <div>
                    <h4 className="text-xs font-semibold text-blue-400">Encryption Protocols</h4>
                    <p className="text-xs text-[#A1A1AA] mt-1 leading-relaxed">
                      All communication is encrypted using TLS 1.3 in transit and stored using AES-256 block encryption standards at rest within Postgres clusters.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-blue-400">Data Subject Rights</h4>
                    <p className="text-xs text-[#A1A1AA] mt-1 leading-relaxed">
                      Users have the right to request access to their conversation records, demand immediate corrections, or request complete removal from the contacts database.
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions & Links */}
              <div className="border-t border-[#1F1F1F] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-left">
                  <div className="text-xs font-semibold text-white">Need to request data deletion?</div>
                  <div className="text-[11px] text-[#A1A1AA] mt-0.5">Contact the Data Protection Officer via email.</div>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="mailto:privacy@japanindotravel.id"
                    className="inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-bold bg-[#111111] hover:bg-[#1f1f1f] border border-[#1f1f1f] hover:border-[#2D2D2D] text-white transition"
                  >
                    privacy@japanindotravel.id
                  </a>
                  <Link
                    href="/privacy-policy"
                    className="inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white transition"
                  >
                    Read Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1F1F1F] py-8 text-center bg-[#000000]">
        <div className="container mx-auto px-6 max-w-4xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#52525B]">
            &copy; {new Date().getFullYear()} PT Japanindo Travel Connection. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link href="/" className="text-xs text-[#52525B] hover:text-white transition">Home</Link>
            <Link href="/privacy-policy" className="text-xs text-[#52525B] hover:text-white transition">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
