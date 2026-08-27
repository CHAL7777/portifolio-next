"use client";

import Reveal from "@/components/reveal";
import SystemDiagram from "@/components/system-diagram";
import { heroMetrics, profile, toolchain } from "@/app/data/portfolio";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Send } from "lucide-react";

const socialLinks = [
  { label: "GitHub", href: profile.links.github, Icon: Github },
  { label: "LinkedIn", href: profile.links.linkedin, Icon: Linkedin },
  { label: "Telegram", href: profile.links.telegram, Icon: Send },
];

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="site-shell">
        {/* ─── Sheet header: the title block of a technical drawing ─── */}
        <Reveal>
          <div className="section-index">
            <span className="meta-mono text-[var(--accent)]">00</span>
            <span className="meta-mono">
              {profile.location} — {profile.timezone}
            </span>
          </div>
        </Reveal>

        {/* ─── The one oversized typographic moment ─── */}
        <Reveal delay={0.05}>
          <h1 className="display-hero mt-8 sm:mt-10">
            Chala
            <br />
            Gobena
            <span
              className="ml-[0.12em] align-super text-[0.3em] text-[var(--accent)]"
              aria-hidden="true"
            >
              ●
            </span>
          </h1>
        </Reveal>

        {/* ─── Positioning statement, set against the signature diagram ─── */}
        <div className="mt-10 grid gap-x-12 gap-y-12 sm:mt-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <p className="display-lede text-[1.55rem] sm:text-[1.75rem]">
                Software engineer building products where interface, systems, and
                engineering meet.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="body-copy mt-6 max-w-md text-base">
                I care about the parts users notice and the parts the next engineer has
                to maintain — backend contracts, considered interfaces, and AI features
                with guardrails.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="#projects" className="button-base button-primary group">
                  <span>Selected work</span>
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
                <a href="#contact" className="button-base button-secondary">
                  <Mail size={15} />
                  <span>Get in touch</span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-[var(--line)] pt-6">
                <span className="inline-flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  <span className="meta-mono text-[var(--ink-soft)]">
                    Open to opportunities
                  </span>
                </span>
                <div className="flex items-center gap-1">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-[3px] text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                      aria-label={link.label}
                    >
                      <link.Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* ─── Signature visual ─── */}
          <Reveal delay={0.18} className="lg:col-span-7">
            <div className="drafted p-4 sm:p-6 md:p-8">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
                <span className="meta-mono">Fig. 01 — Request path</span>
                <span className="meta-mono text-[var(--accent)]">Interactive</span>
              </div>
              <SystemDiagram />
            </div>
          </Reveal>
        </div>

        {/* ─── Facts as a ruled table, not floating cards ─── */}
        <Reveal delay={0.32}>
          <dl className="mt-16 grid border-t border-[var(--line)] sm:grid-cols-3">
            {heroMetrics.map((metric) => (
              <div
                key={metric.label}
                className="border-b border-[var(--line)] py-6 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0"
              >
                <dt className="display-title text-4xl">{metric.value}</dt>
                <dd className="mt-3">
                  <span className="meta-mono block text-[var(--ink-soft)]">
                    {metric.label}
                  </span>
                  <span className="body-copy mt-2 block text-sm">{metric.detail}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* ─── Stack as a quiet running list, not a wall of logos ─── */}
        <Reveal delay={0.36}>
          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[var(--line)] pt-6">
            <span className="meta-mono shrink-0">Stack</span>
            {toolchain.map((tool) => (
              <span
                key={tool.name}
                className="inline-flex items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
              >
                <tool.Icon className="h-3.5 w-3.5" aria-hidden="true" />
                {tool.name}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <a
            href="#projects"
            className="meta-mono mt-14 inline-flex items-center gap-2 transition-colors hover:text-[var(--accent)]"
          >
            <ArrowDown size={13} />
            <span>Scroll</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
