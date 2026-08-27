"use client";

import { aiWorkflows } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import { Bot, Brain, DatabaseZap, FileSearch, GitBranch, MessageSquareText, Network, ShieldCheck } from "lucide-react";
import { useState } from "react";

const pipeline = [
  { label: "Documents", Icon: FileSearch, detail: "Ingest PDF, Markdown, API logs" },
  { label: "Chunks", Icon: GitBranch, detail: "Split content into semantic blocks" },
  { label: "Embeddings", Icon: Network, detail: "Generate vector representations" },
  { label: "Vector store", Icon: DatabaseZap, detail: "Store in Pinecone / Qdrant" },
  { label: "Prompt", Icon: MessageSquareText, detail: "Construct contextual prompt" },
  { label: "LLM", Icon: Brain, detail: "Synthesize response with guardrails" },
  { label: "Tools", Icon: Bot, detail: "Execute function calls & APIs" },
  { label: "Review", Icon: ShieldCheck, detail: "Validate output & track costs" },
];

export default function AIEngineering() {
  return (
    <section id="ai-engineering" className="section-band relative">
      <div className="site-shell relative z-10">
        <SectionHeading
          index="03"
          kicker="AI systems & RAG architecture"
          title={
            <>
              AI features should be useful,
              <br />
              explainable, and constrained.
            </>
          }
          lede="I build AI that helps people work with information: search document archives, summarize context, automate repetitive steps, and make better decisions."
        />

        {/* RAG Pipeline */}
        <Reveal delay={0.1}>
          <div className="mt-16">
            <RagIllustration />
          </div>
        </Reveal>

        {/* Workflows as a ruled index */}
        <div className="mt-16 grid gap-px border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-4">
          {aiWorkflows.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.05}>
              <article className="h-full bg-[var(--background)] p-6 transition-colors hover:bg-[var(--surface)]">
                <span className="meta-mono text-[var(--accent)]">W/0{i + 1}</span>
                <h3 className="display-title mt-4 text-lg">{w.title}</h3>
                <p className="body-copy mt-3 text-sm">{w.text}</p>
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
    <div className="drafted p-6 md:p-8">
      <div className="flex flex-col gap-2 border-b border-[var(--line)] pb-5 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="display-title text-2xl">Retrieval-augmented generation</h3>
        <span className="meta-mono">Fig. 04 — Select a stage</span>
      </div>

      <div className="mt-6">
        <div className="h-px w-full bg-[var(--line)]">
          <div
            className="h-px bg-[var(--accent)] transition-all duration-500"
            style={{ width: `${((activeStep + 1) / pipeline.length) * 100}%` }}
          />
        </div>

        <div className="mt-5 grid grid-cols-2 gap-px bg-[var(--line)] sm:grid-cols-4">
          {pipeline.map((step, i) => {
            const isActive = activeStep === i;
            return (
              <button
                key={step.label}
                type="button"
                onClick={() => setActiveStep(i)}
                aria-pressed={isActive}
                className={`p-4 text-left transition-colors ${
                  isActive
                    ? "bg-[var(--surface-strong)]"
                    : "bg-[var(--background)] hover:bg-[var(--surface)]"
                }`}
              >
                <step.Icon
                  className={`h-4 w-4 ${isActive ? "text-[var(--accent)]" : "text-[var(--muted)]"}`}
                />
                <p
                  className={`mt-3 text-sm leading-tight ${
                    isActive ? "text-[var(--ink)]" : "text-[var(--ink-soft)]"
                  }`}
                >
                  {step.label}
                </p>
                <p className="meta-mono mt-1 text-[0.6rem]">
                  {i < 4 ? "Retrieval" : "Synthesis"}
                </p>
              </button>
            );
          })}
        </div>

        <div className="mt-5 flex min-h-[3.5rem] items-start gap-4 border-t border-[var(--line)] pt-4">
          <span className="meta-mono shrink-0 text-[var(--accent)]">
            {String(activeStep + 1).padStart(2, "0")} /{" "}
            {String(pipeline.length).padStart(2, "0")}
          </span>
          <p className="body-copy text-sm">{pipeline[activeStep].detail}</p>
        </div>
      </div>

      <div className="mt-8 grid gap-8 border-t border-[var(--line)] pt-6 md:grid-cols-3">
        {[
          { t: "Embeddings", d: "Turn text into searchable vectors for high-precision semantic lookup." },
          { t: "Vector database", d: "Indexes document vectors and performs similarity ranking for user queries." },
          { t: "Guardrails", d: "Restricts model output strictly to retrieved context with schema validation." },
        ].map((item) => (
          <div key={item.t}>
            <p className="meta-mono text-[var(--ink-soft)]">{item.t}</p>
            <p className="body-copy mt-2 text-sm">{item.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
