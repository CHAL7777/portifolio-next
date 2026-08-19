"use client";

import { aiWorkflows } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import { Bot, Brain, DatabaseZap, FileSearch, GitBranch, MessageSquareText, Network, ShieldCheck, Sparkles, Cpu } from "lucide-react";
import { useState } from "react";

const pipeline = [
  { label: "Documents", Icon: FileSearch, detail: "Ingest PDF, Markdown, API logs", color: "#00E5FF" },
  { label: "Chunks", Icon: GitBranch, detail: "Split content into semantic blocks", color: "#22D3EE" },
  { label: "Embeddings", Icon: Network, detail: "Generate vector representations", color: "#818CF8" },
  { label: "Vector store", Icon: DatabaseZap, detail: "Store in Pinecone / Qdrant", color: "#A855F7" },
  { label: "Prompt", Icon: MessageSquareText, detail: "Construct contextual prompt", color: "#F472B6" },
  { label: "LLM", Icon: Brain, detail: "Synthesize response with guardrails", color: "#FF6B6B" },
  { label: "Tools", Icon: Bot, detail: "Execute function calls & APIs", color: "#FBBF24" },
  { label: "Review", Icon: ShieldCheck, detail: "Validate output & track costs", color: "#34D399" },
];

export default function AIEngineering() {
  return (
    <section id="ai-engineering" className="section-band relative overflow-hidden">
      <div className="site-shell relative z-10">
        {/* Centered header */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="section-kicker">AI Systems & RAG Architecture</p>
            <h2 className="display-title mt-4 text-4xl md:text-5xl">
              AI features should be useful, explainable, and constrained.
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="body-copy mx-auto mt-5 max-w-2xl text-lg">
              I build AI that helps people work with information: search document archives, summarize context, automate repetitive steps, and make better decisions.
            </p>
          </Reveal>
        </div>

        {/* RAG Pipeline */}
        <Reveal delay={0.1}>
          <div className="mx-auto mt-14 max-w-5xl">
            <RagIllustration />
          </div>
        </Reveal>

        {/* Workflow cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {aiWorkflows.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.06}>
              <article className="h-full rounded-xl border border-[var(--line)] bg-[var(--surface)] p-6 backdrop-blur-2xl transition-colors hover:border-[var(--line-strong)]">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/5 px-3 py-1 text-xs font-semibold text-[var(--accent)] font-[family-name:var(--mono-font)]">Workflow 0{i + 1}</span>
                  <Cpu size={18} className="text-[var(--accent)] opacity-40" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-[var(--ink)] leading-snug">{w.title}</h3>
                <p className="body-copy mt-3 text-sm leading-relaxed">{w.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function RagIllustration() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)] backdrop-blur-2xl">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-[var(--line)] pb-4">
        <div>
          <p className="section-kicker">Interactive RAG Pipeline</p>
          <h3 className="mt-1 text-2xl font-bold text-[var(--ink)]">Retrieval Augmented Generation</h3>
        </div>
        <div className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-1 text-xs font-medium text-[var(--accent)]">
          <Sparkles size={13} /><span>Context First</span>
        </div>
      </div>

      <div className="relative mt-6 overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--surface-solid)] p-4">
        <div className="relative grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {pipeline.map((step, i) => {
            const isActive = activeStep === i;
            return (
              <button key={step.label} type="button" onClick={() => setActiveStep(i)} className={`relative rounded-xl border p-3 text-left transition-colors cursor-pointer ${isActive ? "border-[var(--accent)] bg-[var(--accent)]/5" : "border-[var(--line)] bg-[var(--surface)] hover:border-[var(--line-strong)]"}`}>
                <step.Icon className={`h-5 w-5 ${isActive ? "text-[var(--accent)]" : "text-[var(--muted)]"}`} />
                <p className="mt-2.5 text-xs font-bold text-[var(--ink)]">{step.label}</p>
                <p className="mt-0.5 text-[0.68rem] font-medium text-[var(--muted)]">{i < 4 ? "Retrieval" : "Synthesis"}</p>
              </button>
            );
          })}
        </div>

        <div className="mt-4 rounded-xl border border-[var(--accent)]/20 bg-[var(--accent)]/5 p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[var(--accent)]">Stage 0{activeStep + 1}: {pipeline[activeStep].label}</span>
            <span className="text-[0.68rem] font-[family-name:var(--mono-font)] text-[var(--accent)]">{activeStep < 4 ? "Context Retrieval" : "LLM Inference"}</span>
          </div>
          <p className="mt-1 text-xs font-medium text-[var(--muted)]">{pipeline[activeStep].detail}</p>
        </div>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-3 text-xs">
        {[
          { t: "Embeddings", d: "Turn text into searchable vectors for high-precision semantic lookup." },
          { t: "Vector Database", d: "Indexes document vectors and performs similarity ranking for user queries." },
          { t: "Guardrails", d: "Restricts model output strictly to retrieved context with schema validation." },
        ].map((item) => (
          <div key={item.t} className="rounded-xl border border-[var(--line)] p-3 bg-[var(--surface-strong)]">
            <p className="font-bold text-[var(--ink)]">{item.t}</p>
            <p className="body-copy mt-1 leading-relaxed">{item.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
