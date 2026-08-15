"use client";

import { systemFlows, systemPrinciples } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import { Cloud, Database, KeyRound, Layers3, RadioTower, Route, ServerCog, Workflow, CheckCircle } from "lucide-react";
import { useState } from "react";

const architectureTopics = [
  { title: "Microservices boundaries", text: "Separate services only when ownership, scaling, or deployment pressure makes the extra complexity worth it.", Icon: Layers3, color: "#00E5FF" },
  { title: "API communication", text: "Requests need clear contracts, versioning strategy, validation, and error shapes the frontend can use.", Icon: Route, color: "#A855F7" },
  { title: "Authentication flow", text: "Identity should be boring and traceable: session rules, token handling, permission checks, and safe failure states.", Icon: KeyRound, color: "#FBBF24" },
  { title: "Database architecture", text: "Schema decisions should protect integrity first, then query performance, then reporting.", Icon: Database, color: "#818CF8" },
  { title: "Caching and queues", text: "Use cache for repeat reads and queues for slow or unreliable work, with invalidation rules written down early.", Icon: RadioTower, color: "#F472B6" },
  { title: "Cloud deployment", text: "A deployable system needs environment boundaries, logs, build checks, and a simple rollback story.", Icon: Cloud, color: "#60A5FA" },
  { title: "Scalable backend", text: "Scaling starts with clear data ownership and observability before it becomes an infrastructure problem.", Icon: ServerCog, color: "#34D399" },
  { title: "AI pipeline", text: "AI features need context retrieval, prompt contracts, output validation, and review paths.", Icon: Workflow, color: "#FF6B6B" },
];

export default function SystemDesign() {
  return (
    <section id="system-design" className="section-band bg-[var(--background)] relative overflow-hidden">
      <div className="section-glow h-[40rem] w-[40rem] bg-[var(--accent-2)] -right-[10%] top-[10%]" />
      <div className="site-shell relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
          <Reveal>
            <div>
              <p className="section-kicker">System Design & Architecture</p>
              <h2 className="display-title mt-4 text-4xl text-[var(--ink)] md:text-5xl">
                I think in flows, boundaries, and failure modes.
              </h2>
              <p className="body-copy mt-5 text-lg leading-relaxed">
                A good system makes the important paths clear: who can do what, where the data lives, what happens when something fails.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <ArchitectureMap />
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {systemPrinciples.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <article className="aurora-card group flex h-full flex-col p-6 rounded-2xl border border-[var(--line)] bg-[var(--surface)]">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 px-3 py-1 text-xs font-semibold text-[var(--accent)] font-[family-name:var(--mono-font)]">Principle 0{i + 1}</span>
                  <CheckCircle size={18} className="text-[var(--accent)] opacity-30 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-[var(--ink)] leading-snug">{p.title}</h3>
                <p className="body-copy mt-3 text-sm leading-relaxed">{p.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {architectureTopics.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.035}>
              <article className="aurora-card group h-full rounded-xl border border-[var(--line)] bg-[var(--surface)] p-5">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] transition-all group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.1)]" style={{ color: t.color }}>
                  <t.Icon size={20} />
                </div>
                <h3 className="mt-4 text-base font-bold text-[var(--ink)]">{t.title}</h3>
                <p className="body-copy mt-2 text-xs leading-relaxed opacity-80">{t.text}</p>
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
    <div className="aurora-card rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 shadow-xl backdrop-blur-2xl">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-[var(--line)] pb-4">
        <div>
          <p className="section-kicker">Interactive Request Lifecycle</p>
          <h3 className="mt-1 text-2xl font-bold text-[var(--ink)]">Production Execution Path</h3>
        </div>
        <div className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-1 text-xs font-[family-name:var(--mono-font)] font-medium text-[var(--accent)]">
          Auth / Cache / Queue / DB
        </div>
      </div>

      <div className="relative mt-6 overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--surface-solid)] p-5">
        <div className="architectural-grid absolute inset-0 opacity-20" />
        <div className="relative grid gap-3 sm:grid-cols-4">
          {systemFlows.map((step, i) => {
            const isActive = activeStep === i;
            return (
              <button key={step} type="button" onClick={() => setActiveStep(i)} className={`relative min-h-[7rem] rounded-xl border p-4 text-left transition-all ${isActive ? "border-[var(--accent)] bg-[var(--accent)]/5 shadow-[0_0_25px_rgba(0,229,255,0.08)]" : "border-[var(--line)] bg-white/[0.02] hover:border-[var(--line-strong)] hover:bg-white/[0.04]"}`}>
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-[family-name:var(--mono-font)] font-bold ${isActive ? "text-[var(--accent)]" : "text-[var(--muted)]"}`}>0{i + 1}</span>
                  {isActive && <span className="h-2 w-2 rounded-full bg-[var(--accent)] animate-ping" />}
                </div>
                <p className="mt-3 text-sm font-bold text-[var(--ink)] leading-tight">{step}</p>
                <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-white/[0.06]">
                  <div className="h-full bg-[var(--accent)] transition-all duration-300" style={{ width: `${(i + 1) * 25}%` }} />
                </div>
              </button>
            );
          })}
        </div>
        <div className="mt-4 rounded-xl border border-[var(--accent)]/20 bg-[var(--accent)]/5 p-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-[var(--accent)]">Step 0{activeStep + 1} Breakdown:</div>
          <p className="mt-1 text-xs font-medium text-[var(--muted)]">{stepDetails[activeStep]}</p>
        </div>
      </div>
    </div>
  );
}
