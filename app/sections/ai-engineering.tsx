"use client";

import { aiWorkflows } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import { Bot, Brain, DatabaseZap, FileSearch, GitBranch, MessageSquareText, Network, ShieldCheck, Sparkles, Cpu } from "lucide-react";
import { useState } from "react";

const pipeline = [
  { label: "Documents", Icon: FileSearch, detail: "Ingest PDF, Markdown, API logs" },
  { label: "Chunks", Icon: GitBranch, detail: "Split content into semantic blocks" },
  { label: "Embeddings", Icon: Network, detail: "Generate vector representations" },
  { label: "Vector store", Icon: DatabaseZap, detail: "Store in Pinecone / Qdrant" },
  { label: "Prompt", Icon: MessageSquareText, detail: "Construct contextual prompt" },
  { label: "LLM", Icon: Brain, detail: "Synthesize response with guardrails" },
  { label: "Tools", Icon: Bot, detail: "Execute function calls & APIs" },
  { label: "Review", Icon: ShieldCheck, detail: "Validate output & track token costs" },
];

export default function AIEngineering() {
  return (
    <section id="ai-engineering" className="section-band bg-[var(--surface-alt)] relative overflow-hidden">
      <div className="site-shell relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
          <Reveal>
            <div>
              <p className="section-kicker">AI Systems & RAG Architecture</p>
              <h2 className="display-title mt-4 text-4xl text-[var(--ink)] md:text-5xl font-black">
                AI features should be useful, explainable, and constrained.
              </h2>
              <p className="body-copy mt-5 text-lg leading-relaxed">
                I am interested in AI that helps people work with information: search document archives, summarize context, automate repetitive steps, and make better decisions without hiding how the answer was produced.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <RagIllustration />
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {aiWorkflows.map((workflow, index) => (
            <Reveal key={workflow.title} delay={index * 0.06}>
              <article className="glass-card interactive-card group h-full rounded-xl border border-[var(--line)] bg-[var(--surface)] p-6 shadow-md transition-all hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[var(--accent)]/15 px-3 py-1 text-xs font-black text-[var(--accent)]">
                    Workflow 0{index + 1}
                  </span>
                  <Cpu size={18} className="text-[var(--accent)] opacity-40 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="mt-5 text-xl font-black text-[var(--ink)] leading-snug">{workflow.title}</h3>
                <p className="body-copy mt-3 text-sm leading-relaxed">{workflow.text}</p>
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
    <div className="cinematic-surface rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 shadow-xl backdrop-blur-2xl">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-[var(--line)] pb-4">
        <div>
          <p className="section-kicker">Interactive RAG Pipeline</p>
          <h3 className="mt-1 text-2xl font-black text-[var(--ink)]">Retrieval Augmented Generation</h3>
        </div>
        <div className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-1 text-xs font-bold text-[var(--accent)]">
          <Sparkles size={13} />
          <span>Context First</span>
        </div>
      </div>

      <div className="relative mt-6 overflow-hidden rounded-xl border border-[var(--line)] bg-[#0c0f0c] p-4 shadow-inner">
        <div className="architectural-grid absolute inset-0 opacity-25" />
        
        <div className="relative grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {pipeline.map((step, index) => {
            const isActive = activeStep === index;

            return (
              <button
                key={step.label}
                type="button"
                onClick={() => setActiveStep(index)}
                className={`relative rounded-xl border p-3 text-left transition-all cursor-pointer ${
                  isActive
                    ? "border-emerald-400 bg-white/10 shadow-lg scale-[1.02]"
                    : "border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.08]"
                }`}
              >
                <step.Icon className={`h-5 w-5 ${isActive ? "text-emerald-400" : "text-white/60"}`} />
                <p className="mt-2.5 text-xs font-black text-white">{step.label}</p>
                <p className="mt-0.5 text-[0.68rem] font-medium text-white/50">
                  {index < 4 ? "Retrieval" : "Synthesis"}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detail Card */}
        <div className="mt-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-400">
              Stage 0{activeStep + 1}: {pipeline[activeStep].label}
            </span>
            <span className="text-[0.68rem] font-mono text-emerald-300">
              {activeStep < 4 ? "Context Retrieval Phase" : "LLM Inference Phase"}
            </span>
          </div>
          <p className="mt-1 text-xs font-medium text-white/85">{pipeline[activeStep].detail}</p>
        </div>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-3 text-xs">
        <div className="rounded-lg border border-[var(--line)] p-3 bg-[var(--surface-strong)]">
          <p className="font-black text-[var(--ink)]">Embeddings</p>
          <p className="body-copy mt-1 leading-relaxed">Turn text into searchable vector vectors for high-precision semantic lookup.</p>
        </div>
        <div className="rounded-lg border border-[var(--line)] p-3 bg-[var(--surface-strong)]">
          <p className="font-black text-[var(--ink)]">Vector Database</p>
          <p className="body-copy mt-1 leading-relaxed">Indexes document vectors and performs similarity ranking for user queries.</p>
        </div>
        <div className="rounded-lg border border-[var(--line)] p-3 bg-[var(--surface-strong)]">
          <p className="font-black text-[var(--ink)]">Guardrails</p>
          <p className="body-copy mt-1 leading-relaxed">Restricts model output strictly to retrieved context with schema validation.</p>
        </div>
      </div>
    </div>
  );
}

