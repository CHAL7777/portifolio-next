import AnimatedCounter from "@/components/animated-counter";
import Reveal from "@/components/reveal";
import { heroMetrics, profile, trustSignals } from "@/app/data/portfolio";
import {
  ArrowDown,
  ArrowUpRight,
  CheckCircle2,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  ShieldCheck,
  Zap,
  Layers,
  Sparkles,
  Cpu,
  Terminal,
} from "lucide-react";
import Image from "next/image";

const socialLinks = [
  { label: "GitHub", href: profile.links.github, Icon: Github },
  { label: "LinkedIn", href: profile.links.linkedin, Icon: Linkedin },
  { label: "Telegram", href: profile.links.telegram, Icon: Send },
];

const diagramNodes = [
  { label: "Product need", className: "left-[4%] top-[14%]", status: "Input", color: "#23D48D" },
  { label: "API contract", className: "left-[36%] top-[8%]", status: "Schema", color: "#38BDF8" },
  { label: "Auth & Security", className: "right-[4%] top-[18%]", status: "Guard", color: "#F59E0B" },
  { label: "Domain logic", className: "left-[18%] top-[42%]", status: "Core", color: "#A855F7" },
  { label: "PostgreSQL", className: "right-[12%] top-[48%]", status: "Data", color: "#3B82F6" },
  { label: "AI Engine", className: "left-[38%] bottom-[22%]", status: "RAG", color: "#EC4899" },
];

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden py-16 md:py-24">
      {/* Background Ambience & Media Layer */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          aria-hidden="true"
          className="h-full w-full object-cover opacity-[0.14] grayscale sepia contrast-125 dark:opacity-[0.18]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/video/video.mp4" type="video/mp4" />
        </video>
        {/* Ambient Glow Orbs */}
        <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
        
        {/* Soft Mesh Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-[var(--background)] to-[var(--background)] opacity-80" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--background)_0%,rgba(247,243,234,0.85)_40%,rgba(247,243,234,0.4)_100%)] dark:bg-[linear-gradient(90deg,var(--background)_0%,rgba(8,10,8,0.92)_40%,rgba(8,10,8,0.55)_100%)]" />
        <div className="architectural-grid absolute inset-0 opacity-25" />
      </div>

      <div className="site-shell">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          {/* Main Copy Column */}
          <div>
            <Reveal>
              <div className="mb-6 flex flex-wrap items-center gap-4">
                {/* Profile Photo Badge */}
                <div className="flex items-center gap-3 rounded-full border border-[var(--line)] bg-[var(--surface-strong)] p-1.5 pr-4 shadow-md backdrop-blur-xl">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[var(--accent)] shadow-inner">
                    <Image
                      src={profile.avatar}
                      alt={profile.name}
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-black bg-emerald-400 animate-pulse" />
                  </div>
                  <div>
                    <span className="block text-xs font-black text-[var(--ink)]">{profile.name}</span>
                    <span className="block text-[0.68rem] font-bold text-emerald-600 dark:text-emerald-400">
                      Open for full-stack & AI roles
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-3.5 py-1.5 text-xs font-semibold text-[var(--ink)] backdrop-blur-md shadow-sm">
                  <ShieldCheck size={14} className="shrink-0 text-[var(--accent)]" />
                  <span>Full-Stack, Systems & AI Workflows</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="display-title max-w-4xl text-4xl font-black tracking-tight text-[var(--ink)] sm:text-6xl lg:text-5xl lg:leading-[1.14]">
                Building reliable software products with{" "}
                <span className="gradient-text">thoughtful UX & resilient architecture.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="body-copy mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
                I help founders and product teams turn complex ideas into software products that
                feel effortless on the surface and robust underneath: clear backend APIs, scalable databases, and AI systems with guardrails.
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#projects" className="button-base button-primary group inline-flex items-center gap-2">
                  <span>Explore case studies</span>
                  <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a href="#contact" className="button-base button-secondary inline-flex items-center gap-2">
                  <Mail size={16} />
                  <span>Talk through a build</span>
                </a>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-base button-ghost inline-flex items-center gap-2"
                >
                  <Download size={16} />
                  <span>Resume</span>
                </a>
              </div>
            </Reveal>

            {/* Metric Cards */}
            <Reveal delay={0.32}>
              <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
                {heroMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="glass-card group relative overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4 shadow-sm transition-all hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-md"
                  >
                    <p className="text-3xl font-black tracking-tight text-[var(--ink)]">
                      <AnimatedCounter value={metric.value} />
                    </p>
                    <p className="mt-1 text-xs font-black uppercase tracking-wider text-[var(--accent)]">{metric.label}</p>
                    <p className="body-copy mt-1 text-xs opacity-80">{metric.detail}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Trust Signals */}
            <Reveal delay={0.4}>
              <div className="mt-8 grid gap-2.5 text-xs font-semibold text-[var(--muted)] sm:grid-cols-2">
                {trustSignals.map((signal) => (
                  <span key={signal} className="inline-flex items-center gap-2">
                    <CheckCircle2 size={15} className="shrink-0 text-[var(--accent)]" />
                    <span>{signal}</span>
                  </span>
                ))}
              </div>
            </Reveal>

            {/* Social & Meta */}
            <Reveal delay={0.46}>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[var(--line)] pt-6 text-xs font-bold text-[var(--muted)]">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={15} className="text-[var(--accent-2)]" />
                  {profile.location}
                </span>
                <span className="h-3 w-px bg-[var(--line)]" aria-hidden="true" />
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-[var(--ink)]"
                  >
                    <link.Icon size={15} />
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Interactive Visual Canvas */}
          <Reveal delay={0.18} className="lg:justify-self-end w-full">
            <EngineeringIllustration />
          </Reveal>
        </div>

        {/* Scroll Indicator */}
        <Reveal delay={0.5}>
          <a
            href="#projects"
            className="group mt-12 inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
          >
            <span>See work structure</span>
            <ArrowDown size={14} className="transition-transform group-hover:translate-y-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function EngineeringIllustration() {
  return (
    <div className="cinematic-surface shimmer-line relative w-full rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 shadow-xl backdrop-blur-2xl">
      {/* Visual Header */}
      <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
            <Layers size={14} />
            <span>Architecture & Workflow Canvas</span>
          </div>
          <p className="mt-1 text-base font-black text-[var(--ink)]">
            User Intent → Scalable Architecture
          </p>
        </div>
        <div className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-1 text-xs font-semibold text-[var(--ink)] shadow-sm">
          <Sparkles size={13} className="text-[var(--accent)]" />
          <span>Interactive Blueprint</span>
        </div>
      </div>

      {/* Diagram Node Canvas */}
      <div className="relative mt-5 aspect-[1.05/1] min-h-[26rem] w-full overflow-hidden rounded-xl border border-[var(--line)] bg-[linear-gradient(135deg,rgba(15,107,74,0.08),rgba(255,250,240,0.6)_45%,rgba(166,120,58,0.08))] p-5 dark:bg-[linear-gradient(135deg,rgba(51,208,138,0.08),rgba(17,20,15,0.85)_45%,rgba(215,179,106,0.08))]">
        <div className="architectural-grid absolute inset-0 opacity-30" />
        
        {/* Connection Traces */}
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 420 420" aria-hidden="true">
          <path
            d="M72 84 C154 54 210 74 264 86 S354 125 366 174"
            fill="none"
            stroke="var(--accent)"
            strokeDasharray="8 8"
            strokeWidth="2"
            className="pulse-trace"
          />
          <path
            d="M94 210 C155 160 220 190 268 222 S321 278 230 344"
            fill="none"
            stroke="var(--accent-2)"
            strokeDasharray="6 8"
            strokeWidth="2"
            className="pulse-trace"
          />
          <path
            d="M164 228 C228 222 279 220 330 238"
            fill="none"
            stroke="var(--accent-3)"
            strokeDasharray="5 7"
            strokeWidth="1.5"
            className="pulse-trace"
          />
        </svg>

        {/* Dynamic Nodes */}
        {diagramNodes.map((node, index) => (
          <div
            key={node.label}
            className={`absolute ${node.className} float-soft flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-1.5 shadow-md backdrop-blur-xl transition-all hover:scale-105 hover:border-[var(--accent)]`}
            style={{ animationDelay: `${index * 0.35}s` }}
          >
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: node.color }} />
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted)]">
                {node.status}
              </span>
              <span className="text-xs font-black text-[var(--ink)]">{node.label}</span>
            </div>
          </div>
        ))}

        {/* Bottom Process Steps */}
        <div className="absolute inset-x-4 bottom-4 rounded-xl border border-[var(--line)] bg-[var(--surface-strong)]/90 p-4 shadow-lg backdrop-blur-xl">
          <div className="grid grid-cols-3 gap-2 border-b border-[var(--line)] pb-3">
            {[
              { title: "Validate", detail: "Contracts & Schema" },
              { title: "Design", detail: "Domain Architecture" },
              { title: "Ship", detail: "Telemetry & Logs" },
            ].map((step, index) => (
              <div key={step.title} className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-[var(--ink)] text-[10px] font-black text-[var(--ink-contrast)]">
                    {index + 1}
                  </span>
                  <span className="text-xs font-bold text-[var(--ink)]">{step.title}</span>
                </div>
                <span className="mt-1 hidden text-[11px] text-[var(--muted)] sm:block">
                  {step.detail}
                </span>
              </div>
            ))}
          </div>
          <p className="body-copy mt-2.5 text-xs text-[var(--muted)]">
            Constructing systems that can be reasoned about easily, traced in production logs, and evolved without friction.
          </p>
        </div>
      </div>
    </div>
  );
}