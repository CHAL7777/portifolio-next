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
} from "lucide-react";

const socialLinks = [
  { label: "GitHub", href: profile.links.github, Icon: Github },
  { label: "LinkedIn", href: profile.links.linkedin, Icon: Linkedin },
  { label: "Telegram", href: profile.links.telegram, Icon: Send },
];

const diagramNodes = [
  { label: "Product need", className: "left-[7%] top-[16%]" },
  { label: "API contract", className: "left-[38%] top-[9%]" },
  { label: "Auth", className: "right-[8%] top-[22%]" },
  { label: "Domain logic", className: "left-[23%] top-[45%]" },
  { label: "PostgreSQL", className: "right-[18%] top-[52%]" },
  { label: "AI context", className: "left-[42%] bottom-[12%]" },
];

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-14 pb-14 md:pt-20 md:pb-20">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          aria-hidden="true"
          className="h-full w-full object-cover opacity-[0.16] grayscale sepia contrast-125 dark:opacity-[0.2]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/video/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--background)_0%,rgba(247,243,234,0.9)_36%,rgba(247,243,234,0.5)_100%)] dark:bg-[linear-gradient(90deg,var(--background)_0%,rgba(8,10,8,0.9)_36%,rgba(8,10,8,0.58)_100%)]" />
        <div className="absolute inset-0 architectural-grid opacity-35" />
      </div>

      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <Reveal>
              <div className="inline-flex max-w-full items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-3 py-2 text-sm font-bold text-[var(--ink)] backdrop-blur-xl">
                <ShieldCheck size={16} className="shrink-0 text-[var(--accent)]" />
                Building product surfaces, backend contracts, and AI workflows
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="display-title mt-6 max-w-5xl text-5xl text-[var(--ink)] sm:text-6xl lg:text-7xl">
                Reliable software for teams who need clarity before speed.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="body-copy mt-6 max-w-2xl text-lg md:text-xl">
                I help founders, product teams, and engineering leads turn rough ideas into web products that
                feel calm on the surface and deliberate underneath: clear APIs, readable data models,
                thoughtful interfaces, and AI features with guardrails.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#projects" className="button-base button-primary">
                  Explore case studies
                  <ArrowUpRight size={16} />
                </a>
                <a href="#contact" className="button-base button-secondary">
                  Talk through a build
                  <Mail size={16} />
                </a>
                <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="button-base button-ghost">
                  <Download size={16} />
                  Resume
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-9 grid max-w-3xl gap-3 sm:grid-cols-3">
                {heroMetrics.map((metric) => (
                  <div key={metric.label} className="glass-card p-4">
                    <p className="text-3xl font-black text-[var(--ink)]">
                      <AnimatedCounter value={metric.value} />
                    </p>
                    <p className="mt-2 text-sm font-black text-[var(--ink)]">{metric.label}</p>
                    <p className="body-copy mt-1 text-xs">{metric.detail}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-8 grid gap-3 text-sm font-bold text-[var(--muted)] sm:grid-cols-2">
                {trustSignals.map((signal) => (
                  <span key={signal} className="inline-flex items-start gap-2">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[var(--accent)]" />
                    {signal}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.46}>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-bold text-[var(--muted)]">
                <span className="inline-flex items-center gap-2">
                  <MapPin size={16} className="text-[var(--accent-2)]" />
                  {profile.location}
                </span>
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 transition-colors hover:text-[var(--ink)]"
                  >
                    <link.Icon size={16} />
                    {link.label}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18} className="lg:justify-self-end">
            <EngineeringIllustration />
          </Reveal>
        </div>

        <Reveal delay={0.5}>
          <a
            href="#projects"
            className="mt-10 inline-flex items-center gap-2 text-sm font-black text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
          >
            See how the work is structured
            <ArrowDown size={15} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function EngineeringIllustration() {
  return (
    <div className="cinematic-surface shimmer-line w-full max-w-[36rem] p-4 md:p-5">
      <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
        <div>
          <p className="section-kicker">Engineering map</p>
          <p className="mt-1 text-lg font-black text-[var(--ink)]">From user intent to reliable system behavior</p>
        </div>
        <div className="hidden rounded-lg border border-[var(--line)] px-3 py-2 text-xs font-black text-[var(--accent)] sm:block">
          Live thinking
        </div>
      </div>

      <div className="relative mt-5 aspect-[1.02/1] min-h-[25rem] overflow-hidden rounded-lg border border-[var(--line)] bg-[linear-gradient(135deg,rgba(15,107,74,0.12),rgba(255,250,240,0.72)_42%,rgba(166,120,58,0.12))] p-5 dark:bg-[linear-gradient(135deg,rgba(51,208,138,0.12),rgba(17,20,15,0.82)_42%,rgba(215,179,106,0.11))]">
        <div className="absolute inset-0 architectural-grid opacity-45" />
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 420 420" aria-hidden="true">
          <path
            d="M72 84 C154 54 210 74 264 86 S354 125 366 174"
            fill="none"
            stroke="var(--accent)"
            strokeDasharray="10 12"
            strokeWidth="2"
            className="pulse-trace"
          />
          <path
            d="M94 210 C155 160 220 190 268 222 S321 278 230 344"
            fill="none"
            stroke="var(--accent-2)"
            strokeDasharray="8 10"
            strokeWidth="2"
            className="pulse-trace"
          />
          <path
            d="M164 228 C228 222 279 220 330 238"
            fill="none"
            stroke="var(--accent-3)"
            strokeDasharray="6 10"
            strokeWidth="2"
            className="pulse-trace"
          />
        </svg>

        {diagramNodes.map((node, index) => (
          <div
            key={node.label}
            className={`absolute ${node.className} float-soft rounded-lg border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-2 text-xs font-black text-[var(--ink)] shadow-[var(--shadow-soft)] backdrop-blur-xl`}
            style={{ animationDelay: `${index * 0.4}s` }}
          >
            {node.label}
          </div>
        ))}

        <div className="absolute inset-x-5 bottom-5 rounded-lg border border-[var(--line)] bg-[var(--surface-strong)] p-4 backdrop-blur-xl">
          <div className="grid gap-3 sm:grid-cols-3">
            {["Validate", "Design", "Ship"].map((step, index) => (
              <div key={step} className="flex items-center gap-2 text-sm font-black text-[var(--ink)]">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[var(--ink)] text-xs text-[var(--ink-contrast)]">
                  {index + 1}
                </span>
                {step}
              </div>
            ))}
          </div>
          <p className="body-copy mt-3 text-sm">
            I like systems that can be explained in a room, traced in logs, and improved without drama.
          </p>
        </div>
      </div>
    </div>
  );
}
