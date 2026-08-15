"use client";

import AnimatedCounter from "@/components/animated-counter";
import Reveal from "@/components/reveal";
import TypingEffect from "@/components/typing-effect";
import { heroMetrics, profile, trustSignals, typingPhrases, toolchain } from "@/app/data/portfolio";
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
  Layers,
  Sparkles,
  Cpu,
  Terminal,
  Zap,
} from "lucide-react";
import Image from "next/image";

const socialLinks = [
  { label: "GitHub", href: profile.links.github, Icon: Github },
  { label: "LinkedIn", href: profile.links.linkedin, Icon: Linkedin },
  { label: "Telegram", href: profile.links.telegram, Icon: Send },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden py-20 md:py-28">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Radial glow from top-left */}
        <div className="absolute -left-[20%] -top-[30%] h-[50rem] w-[50rem] rounded-full bg-[radial-gradient(circle,rgba(0,229,255,0.12),transparent_60%)]" />
        {/* Radial glow from right */}
        <div className="absolute -right-[10%] top-[20%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.08),transparent_60%)]" />
        {/* Grid overlay */}
        <div className="line-grid absolute inset-0 opacity-30" />
        {/* Bottom fade */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_70%,var(--background))]" />
      </div>

      <div className="site-shell">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Main Copy Column */}
          <div>
            <Reveal>
              <div className="mb-6 flex flex-wrap items-center gap-3">
                {/* Availability Badge */}
                <div className="inline-flex items-center gap-2.5 rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/5 px-4 py-2 backdrop-blur-xl">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                  </span>
                  <span className="text-xs font-semibold text-[var(--accent)]">
                    Available for full-stack & AI roles
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-3.5 py-1.5 text-xs font-medium text-[var(--muted)] backdrop-blur-xl">
                  <MapPin size={13} className="text-[var(--accent-2)]" />
                  <span>{profile.location}</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="display-title max-w-3xl text-4xl text-[var(--ink)] sm:text-5xl lg:text-6xl">
                I build{" "}
                <span className="gradient-text">production-grade</span>{" "}
                software with{" "}
                <TypingEffect phrases={typingPhrases} />
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="body-copy mt-6 max-w-2xl text-base leading-relaxed md:text-lg">
                Full-stack engineer turning complex product ideas into reliable web applications,
                scalable APIs, and AI-driven workflows. I care about the parts users notice —
                and the parts future engineers have to maintain.
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#projects" className="button-base button-primary group inline-flex items-center gap-2">
                  <span>View my work</span>
                  <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a href="#contact" className="button-base button-secondary inline-flex items-center gap-2">
                  <Mail size={16} />
                  <span>Get in touch</span>
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
                {heroMetrics.map((metric, i) => (
                  <div
                    key={metric.label}
                    className="aurora-card group relative rounded-xl border border-[var(--line)] bg-[var(--surface)] p-5 transition-all"
                  >
                    <p className="text-3xl font-bold tracking-tight text-[var(--ink)]">
                      <AnimatedCounter value={metric.value} />
                    </p>
                    <p className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                      {metric.label}
                    </p>
                    <p className="body-copy mt-1.5 text-xs opacity-80">{metric.detail}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Trust Signals */}
            <Reveal delay={0.4}>
              <div className="mt-8 grid gap-2.5 text-xs font-medium text-[var(--muted)] sm:grid-cols-2">
                {trustSignals.map((signal) => (
                  <span key={signal} className="inline-flex items-center gap-2">
                    <CheckCircle2 size={14} className="shrink-0 text-[var(--accent)]" />
                    <span>{signal}</span>
                  </span>
                ))}
              </div>
            </Reveal>

            {/* Social Links */}
            <Reveal delay={0.46}>
              <div className="mt-8 flex items-center gap-3 border-t border-[var(--line)] pt-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--muted)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)] hover:shadow-[0_0_20px_rgba(0,229,255,0.1)]"
                    aria-label={link.label}
                  >
                    <link.Icon size={18} />
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
            className="group mt-16 inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
          >
            <span>Scroll to explore</span>
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={14} />
            </motion.span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* framer-motion import for scroll indicator bounce */
import { motion } from "framer-motion";

const diagramNodes = [
  { label: "Product need", className: "left-[4%] top-[14%]", status: "Input", color: "#00E5FF" },
  { label: "API contract", className: "left-[36%] top-[8%]", status: "Schema", color: "#A855F7" },
  { label: "Auth & Security", className: "right-[4%] top-[18%]", status: "Guard", color: "#FBBF24" },
  { label: "Domain logic", className: "left-[18%] top-[42%]", status: "Core", color: "#818CF8" },
  { label: "PostgreSQL", className: "right-[12%] top-[48%]", status: "Data", color: "#60A5FA" },
  { label: "AI Engine", className: "left-[38%] bottom-[22%]", status: "RAG", color: "#F472B6" },
];

function EngineeringIllustration() {
  return (
    <div className="aurora-card shimmer-line relative w-full rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 shadow-xl backdrop-blur-2xl">
      {/* Visual Header */}
      <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--accent)] font-[family-name:var(--mono-font)]">
            <Layers size={14} />
            <span>Architecture Canvas</span>
          </div>
          <p className="mt-1 text-base font-bold text-[var(--ink)]">
            User Intent → Scalable Architecture
          </p>
        </div>
        <div className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-1 text-xs font-medium text-[var(--accent)]">
          <Sparkles size={13} />
          <span>Interactive</span>
        </div>
      </div>

      {/* Diagram Node Canvas */}
      <div className="relative mt-5 aspect-[1.05/1] min-h-[26rem] w-full overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--surface-solid)] p-5">
        <div className="architectural-grid absolute inset-0 opacity-30" />

        {/* Connection Traces */}
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 420 420" aria-hidden="true">
          <path
            d="M72 84 C154 54 210 74 264 86 S354 125 366 174"
            fill="none"
            stroke="var(--accent)"
            strokeDasharray="8 8"
            strokeWidth="1.5"
            className="pulse-trace"
            style={{ opacity: 0.5 }}
          />
          <path
            d="M94 210 C155 160 220 190 268 222 S321 278 230 344"
            fill="none"
            stroke="var(--accent-2)"
            strokeDasharray="6 8"
            strokeWidth="1.5"
            className="pulse-trace"
            style={{ opacity: 0.4 }}
          />
          <path
            d="M164 228 C228 222 279 220 330 238"
            fill="none"
            stroke="var(--accent-3)"
            strokeDasharray="5 7"
            strokeWidth="1"
            className="pulse-trace"
            style={{ opacity: 0.35 }}
          />
        </svg>

        {/* Dynamic Nodes */}
        {diagramNodes.map((node, index) => (
          <div
            key={node.label}
            className={`absolute ${node.className} float-soft flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-1.5 shadow-md backdrop-blur-xl transition-all hover:scale-105 hover:border-[var(--accent)]`}
            style={{ animationDelay: `${index * 0.35}s` }}
          >
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: node.color, boxShadow: `0 0 8px ${node.color}40` }} />
            <div className="flex flex-col">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted)] font-[family-name:var(--mono-font)]">
                {node.status}
              </span>
              <span className="text-xs font-bold text-[var(--ink)]">{node.label}</span>
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
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-[var(--accent)] text-[10px] font-bold text-[var(--ink-contrast)]">
                    {index + 1}
                  </span>
                  <span className="text-xs font-semibold text-[var(--ink)]">{step.title}</span>
                </div>
                <span className="mt-1 hidden text-[11px] text-[var(--muted)] sm:block">
                  {step.detail}
                </span>
              </div>
            ))}
          </div>
          <p className="body-copy mt-2.5 text-xs text-[var(--muted)]">
            Systems designed to be traced, debugged, and evolved without friction.
          </p>
        </div>
      </div>
    </div>
  );
}