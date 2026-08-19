"use client";

import AnimatedCounter from "@/components/animated-counter";
import Reveal from "@/components/reveal";
import { heroMetrics, profile, trustSignals, toolchain } from "@/app/data/portfolio";
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
} from "lucide-react";
import Image from "next/image";

const socialLinks = [
  { label: "GitHub", href: profile.links.github, Icon: Github },
  { label: "LinkedIn", href: profile.links.linkedin, Icon: Linkedin },
  { label: "Telegram", href: profile.links.telegram, Icon: Send },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden py-24 md:py-32"
    >
      {/* ─── Ambient Glow (static, no animation) ─── */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-[18%] -top-[25%] h-[48rem] w-[48rem] rounded-full bg-[radial-gradient(circle,rgba(0,229,255,0.1),transparent_60%)]" />
        <div className="absolute -right-[12%] top-[25%] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.07),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_75%,var(--background))]" />
      </div>

      <div className="site-shell">
        {/* ─── Top: Centered intro block ─── */}
        <div className="mx-auto max-w-4xl text-center">
          {/* Status badges */}
          <Reveal>
            <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
              {/* Availability — static green dot, no ping */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/5 px-4 py-2 backdrop-blur-xl">
                <span className="inline-flex h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_8px_rgba(0,229,255,0.5)]" />
                <span className="text-xs font-semibold text-[var(--accent)]">
                  Open to opportunities
                </span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-3.5 py-1.5 text-xs font-medium text-[var(--muted)] backdrop-blur-xl">
                <MapPin size={13} className="text-[var(--accent-2)]" />
                <span>{profile.location}</span>
              </div>
            </div>
          </Reveal>

          {/* Main heading — no typing effect, clean static text */}
          <Reveal delay={0.06}>
            <h1 className="display-title mx-auto max-w-3xl text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]">
              {profile.name.split(" ")[0]}{" "}
              <span className="gradient-text">Gobena</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-3 max-w-xl text-lg font-medium text-[var(--ink-soft)] md:text-xl">
              {profile.role}
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="body-copy mx-auto mt-5 max-w-2xl text-base md:text-lg">
              I build reliable web products, scalable APIs, and AI-driven workflows —
              with careful attention to both the parts users notice and the parts future
              engineers have to maintain.
            </p>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#projects"
                className="button-base button-primary group inline-flex items-center gap-2"
              >
                <span>View my work</span>
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="#contact"
                className="button-base button-secondary inline-flex items-center gap-2"
              >
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

          {/* Social icons */}
          <Reveal delay={0.24}>
            <div className="mt-8 flex items-center justify-center gap-3">
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

        {/* ─── Metrics + Trust — Bento grid below the intro ─── */}
        <Reveal delay={0.3}>
          <div className="mx-auto mt-16 max-w-5xl">
            {/* Metric cards */}
            <div className="grid gap-4 sm:grid-cols-3">
              {heroMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="group relative rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-2xl transition-colors hover:border-[var(--line-strong)]"
                >
                  <p className="text-3xl font-bold tracking-tight text-[var(--ink)]">
                    <AnimatedCounter value={metric.value} />
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[var(--accent)] font-[family-name:var(--mono-font)]">
                    {metric.label}
                  </p>
                  <p className="body-copy mt-2 text-xs">{metric.detail}</p>
                </div>
              ))}
            </div>

            {/* Trust signals */}
            <div className="mt-6 grid gap-2.5 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-2xl sm:grid-cols-2">
              {trustSignals.map((signal) => (
                <span
                  key={signal}
                  className="inline-flex items-center gap-2.5 text-sm font-medium text-[var(--muted)]"
                >
                  <CheckCircle2 size={15} className="shrink-0 text-[var(--accent)]" />
                  <span>{signal}</span>
                </span>
              ))}
            </div>

            {/* Toolchain strip */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-6 py-5 backdrop-blur-2xl">
              <span className="mr-2 text-xs font-semibold uppercase tracking-wider text-[var(--muted)] font-[family-name:var(--mono-font)]">
                Stack
              </span>
              <span className="h-4 w-px bg-[var(--line-strong)]" />
              {toolchain.map((tool) => (
                <span
                  key={tool.name}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-1.5 text-xs font-medium text-[var(--ink-soft)] transition-colors hover:border-[var(--accent)]/30 hover:text-[var(--ink)]"
                >
                  <tool.Icon className="h-3.5 w-3.5" />
                  <span>{tool.name}</span>
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Scroll cue — static, no bounce */}
        <Reveal delay={0.36}>
          <div className="mt-16 flex justify-center">
            <a
              href="#projects"
              className="group inline-flex flex-col items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
            >
              <span>Scroll to explore</span>
              <ArrowDown size={14} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}