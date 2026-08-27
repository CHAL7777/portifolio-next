"use client";

import { systemFlows, systemPrinciples } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import SystemDiagram from "@/components/system-diagram";
import {
  Cloud,
  Database,
  KeyRound,
  Layers3,
  RadioTower,
  Route,
  ServerCog,
  Workflow,
} from "lucide-react";
import { useState } from "react";

const architectureTopics = [
  { title: "Microservices boundaries", text: "Separate services only when ownership, scaling, or deployment pressure makes the extra complexity worth it.", Icon: Layers3 },
  { title: "API communication", text: "Requests need clear contracts, versioning strategy, validation, and error shapes the frontend can use.", Icon: Route },
  { title: "Authentication flow", text: "Identity should be boring and traceable: session rules, token handling, permission checks, and safe failure states.", Icon: KeyRound },
  { title: "Database architecture", text: "Schema decisions should protect integrity first, then query performance, then reporting.", Icon: Database },
  { title: "Caching and queues", text: "Use cache for repeat reads and queues for slow or unreliable work, with invalidation rules written down early.", Icon: RadioTower },
  { title: "Cloud deployment", text: "A deployable system needs environment boundaries, logs, build checks, and a simple rollback story.", Icon: Cloud },
  { title: "Scalable backend", text: "Scaling starts with clear data ownership and observability before it becomes an infrastructure problem.", Icon: ServerCog },
  { title: "AI pipeline", text: "AI features need context retrieval, prompt contracts, output validation, and review paths.", Icon: Workflow },
];

/** One detail per entry in `systemFlows` — kept in lockstep with the data file. */
const flowDetails: string[] = [
  "The browser sends an HTTPS request with a validated payload and session credentials.",
  "The gateway applies rate limits and CORS rules, then routes to the right service.",
  "Identity and permissions are resolved before any business logic runs.",
  "Domain logic executes inside a transaction, with explicit error shapes on failure.",
  "Hot reads are served from cache, with invalidation rules defined alongside the write path.",
  "Slow or unreliable work is queued so the request can return without waiting on it.",
  "PostgreSQL holds the source of truth, protected by constraints rather than conventions.",
  "Logs, traces, and metrics are emitted so the path can be reconstructed after the fact.",
];

export default function SystemDesign() {
  return (
    <section id="system-design" className="section-band relative">
      <div className="site-shell relative z-10">
        <SectionHeading
          index="02"
          kicker="System design & architecture"
          title={
            <>
              I think in flows,
              <br />
              boundaries, and failure modes.
            </>
          }
          lede="A good system makes the important paths clear: who can do what, where the data lives, and what happens when something fails."
        />

        {/* ─── Interactive request lifecycle ─── */}
        <Reveal delay={0.1}>
          <div className="drafted mt-16 p-6 md:p-8">
            <div className="flex flex-col gap-2 border-b border-[var(--line)] pb-5 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="display-title text-2xl">Request lifecycle</h3>
              <span className="meta-mono">Fig. 02 — Select a stage</span>
            </div>
            <RequestLifecycle />
          </div>
        </Reveal>

        {/* ─── The same system, drawn ─── */}
        <Reveal delay={0.1}>
          <div className="drafted mt-6 p-6 md:p-8">
            <div className="mb-6 flex items-baseline justify-between">
              <h3 className="display-title text-2xl">Service topology</h3>
              <span className="meta-mono">Fig. 03</span>
            </div>
            <SystemDiagram />
          </div>
        </Reveal>

        {/* ─── Principles as a ruled list, not cards ─── */}
        <div className="mt-20 grid border-t border-[var(--line)] md:grid-cols-3">
          {systemPrinciples.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <article className="h-full border-b border-[var(--line)] py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0">
                <span className="meta-mono text-[var(--accent)]">P/0{i + 1}</span>
                <h3 className="display-title mt-4 text-xl">{p.title}</h3>
                <p className="body-copy mt-3 text-sm">{p.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* ─── Topics: a dense index, monochrome so the accent stays meaningful ─── */}
        <div className="mt-16 grid gap-px border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-4">
          {architectureTopics.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.03}>
              <article className="group h-full bg-[var(--background)] p-6 transition-colors hover:bg-[var(--surface)]">
                <t.Icon
                  size={18}
                  className="text-[var(--muted)] transition-colors group-hover:text-[var(--accent)]"
                />
                <h3 className="display-title mt-5 text-base">{t.title}</h3>
                <p className="body-copy mt-2 text-xs">{t.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function RequestLifecycle() {
  const [activeStep, setActiveStep] = useState(0);
  const total = systemFlows.length;

  return (
    <div className="mt-6">
      {/* Progress rail: fills across the whole sequence, not per-card */}
      <div className="h-px w-full bg-[var(--line)]">
        <div
          className="h-px bg-[var(--accent)] transition-all duration-500"
          style={{ width: `${((activeStep + 1) / total) * 100}%` }}
        />
      </div>

      <div className="mt-5 grid gap-px bg-[var(--line)] sm:grid-cols-4">
        {systemFlows.map((step, i) => {
          const isActive = activeStep === i;
          return (
            <button
              key={step}
              type="button"
              onClick={() => setActiveStep(i)}
              aria-pressed={isActive}
              className={`flex min-h-[5.5rem] flex-col justify-between p-4 text-left transition-colors ${
                isActive
                  ? "bg-[var(--surface-strong)]"
                  : "bg-[var(--background)] hover:bg-[var(--surface)]"
              }`}
            >
              <span
                className={`meta-mono ${
                  isActive ? "text-[var(--accent)]" : "text-[var(--muted)]"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={`mt-3 text-sm leading-tight ${
                  isActive ? "text-[var(--ink)]" : "text-[var(--ink-soft)]"
                }`}
              >
                {step}
              </span>
            </button>
          );
        })}
      </div>

      {/* Fixed-height detail rail so selection never shifts the layout */}
      <div className="mt-5 flex min-h-[3.5rem] items-start gap-4 border-t border-[var(--line)] pt-4">
        <span className="meta-mono shrink-0 text-[var(--accent)]">
          {String(activeStep + 1).padStart(2, "0")} /{" "}
          {String(total).padStart(2, "0")}
        </span>
        <p className="body-copy text-sm">{flowDetails[activeStep]}</p>
      </div>
    </div>
  );
}
