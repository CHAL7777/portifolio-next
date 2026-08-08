"use client";

import { systemFlows, systemPrinciples } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import { Cloud, Database, KeyRound, Layers3, RadioTower, Route, ServerCog, Workflow, ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";

const architectureTopics = [
  {
    title: "Microservices boundaries",
    text: "Separate services only when ownership, scaling, or deployment pressure makes the extra complexity worth it.",
    Icon: Layers3,
    color: "#38BDF8",
  },
  {
    title: "API communication",
    text: "Requests need clear contracts, versioning strategy, validation, and error shapes the frontend can use.",
    Icon: Route,
    color: "#23D48D",
  },
  {
    title: "Authentication flow",
    text: "Identity should be boring and traceable: session rules, token handling, permission checks, and safe failure states.",
    Icon: KeyRound,
    color: "#F59E0B",
  },
  {
    title: "Database architecture",
    text: "Schema decisions should protect integrity first, then query performance, then reporting and future product questions.",
    Icon: Database,
    color: "#A855F7",
  },
  {
    title: "Caching and queues",
    text: "Use cache for repeat reads and queues for slow or unreliable work, with invalidation rules written down early.",
    Icon: RadioTower,
    color: "#EC4899",
  },
  {
    title: "Cloud deployment",
    text: "A deployable system needs environment boundaries, logs, build checks, and a simple rollback story.",
    Icon: Cloud,
    color: "#3B82F6",
  },
  {
    title: "Scalable backend",
    text: "Scaling starts with clear data ownership and observability before it becomes an infrastructure problem.",
    Icon: ServerCog,
    color: "#10B981",
  },
  {
    title: "AI pipeline",
    text: "AI features need context retrieval, prompt contracts, output validation, and review paths where mistakes are expensive.",
    Icon: Workflow,
    color: "#F43F5E",
  },
];

export default function SystemDesign() {
  return (
    <section id="system-design" className="section-band bg-[var(--background)] relative overflow-hidden">
      <div className="site-shell relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
          <Reveal>
            <div>
              <p className="section-kicker">System Design & Architecture</p>
              <h2 className="display-title mt-4 text-4xl text-[var(--ink)] md:text-5xl font-black">
                I think in flows, boundaries, and failure modes.
              </h2>
              <p className="body-copy mt-5 text-lg leading-relaxed">
                A good system does not need to be complicated. It needs to make the important paths clear:
                who can do what, where the data lives, what happens when something fails, and how the team can
                evolve it later.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <ArchitectureMap />
          </Reveal>
        </div>

        {/* System Principles */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {systemPrinciples.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 0.06}>
              <article className="glass-card interactive-card group flex h-full flex-col p-6 rounded-xl border border-[var(--line)] bg-[var(--surface)] shadow-md transition-all hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[var(--accent)]/15 px-3 py-1 text-xs font-black text-[var(--accent)]">
                    Principle 0{index + 1}
                  </span>
                  <CheckCircle size={18} className="text-[var(--accent)] opacity-40 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="mt-5 text-xl font-black text-[var(--ink)] leading-snug">{principle.title}</h3>
                <p className="body-copy mt-3 text-sm leading-relaxed">{principle.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Core Architecture Modules */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {architectureTopics.map((topic, index) => (
            <Reveal key={topic.title} delay={index * 0.035}>
              <article className="glass-card interactive-card group h-full rounded-xl border border-[var(--line)] bg-[var(--surface)] p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-md">
                <div
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--line)] bg-[var(--surface-strong)] transition-transform group-hover:scale-110"
                  style={{ color: topic.color }}
                >
                  <topic.Icon size={20} />
                </div>
                <h3 className="mt-4 text-base font-black text-[var(--ink)]">{topic.title}</h3>
                <p className="body-copy mt-2 text-xs leading-relaxed opacity-85">{topic.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArchitectureMap() {
  const [activeStep, setActiveStep] = useState(0);

  const stepDetails = [
    "Client initiates HTTPS request with JWT session & payload validation.",
    "API Gateway validates rate limits, CORS headers, and routes payload.",
    "Auth guard verifies permissions & executes transactional domain logic.",
    "Data persisted to PostgreSQL DB & cached in Redis; telemetry logged.",
  ];

  return (
    <div className="cinematic-surface rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 shadow-xl backdrop-blur-2xl">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-[var(--line)] pb-4">
        <div>
          <p className="section-kicker">Interactive Request Lifecycle</p>
          <h3 className="mt-1 text-2xl font-black text-[var(--ink)]">Production Execution Path</h3>
        </div>
        <div className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-1 text-xs font-mono font-bold text-[var(--accent)]">
          Auth / Cache / Queue / DB / Logs
        </div>
      </div>

      <div className="relative mt-6 overflow-hidden rounded-xl border border-[var(--line)] bg-[#0d0f0d] p-5 shadow-inner">
        <div className="architectural-grid absolute inset-0 opacity-25" />
        
        <div className="relative grid gap-3 sm:grid-cols-4">
          {systemFlows.map((step, index) => {
            const isActive = activeStep === index;

            return (
              <button
                key={step}
                type="button"
                onClick={() => setActiveStep(index)}
                className={`relative min-h-[7rem] rounded-xl border p-4 text-left transition-all ${
                  isActive
                    ? "border-[var(--accent)] bg-[var(--surface-strong)] shadow-lg"
                    : "border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.08]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-mono font-black ${isActive ? "text-[var(--accent)]" : "text-white/40"}`}>
                    0{index + 1}
                  </span>
                  {isActive && <span className="h-2 w-2 rounded-full bg-[var(--accent)] animate-ping" />}
                </div>
                <p className="mt-3 text-sm font-black text-white leading-tight">{step}</p>
                <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full bg-[var(--accent)] transition-all duration-300"
                    style={{ width: `${(index + 1) * 25}%` }}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Step Explainer Pill */}
        <div className="mt-4 rounded-xl border border-[var(--accent)]/30 bg-[var(--surface-strong)] p-4">
          <div className="flex items-center gap-2 text-xs font-bold text-[var(--accent)]">
            <span>Step 0{activeStep + 1} Breakdown:</span>
          </div>
          <p className="mt-1 text-xs font-medium text-white/80">{stepDetails[activeStep]}</p>
        </div>
      </div>

      <p className="body-copy mt-5 text-xs md:text-sm leading-relaxed text-[var(--muted)]">
        Tracing request lifecycles before building exposes missing permissions, slow queries that require message queues, and edge failure cases before hitting production.
      </p>
    </div>
  );
}

