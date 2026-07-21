import { aiWorkflows } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import { Bot, Brain, DatabaseZap, FileSearch, GitBranch, MessageSquareText, Network, ShieldCheck } from "lucide-react";

const pipeline = [
  { label: "Documents", Icon: FileSearch },
  { label: "Chunks", Icon: GitBranch },
  { label: "Embeddings", Icon: Network },
  { label: "Vector store", Icon: DatabaseZap },
  { label: "Prompt", Icon: MessageSquareText },
  { label: "LLM", Icon: Brain },
  { label: "Tools", Icon: Bot },
  { label: "Review", Icon: ShieldCheck },
];

export default function AIEngineering() {
  return (
    <section id="ai-engineering" className="section-band bg-[var(--surface-alt)]">
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
          <Reveal>
            <div>
              <p className="section-kicker">AI engineering</p>
              <h2 className="display-title mt-4 text-4xl text-[var(--ink)] md:text-4xl">
                AI features should be useful, explainable, and constrained.
              </h2>
              <p className="body-copy mt-5 text-lg">
                I am interested in AI that helps people work with information: search documents, summarize
                context, automate repetitive steps, and make better decisions without hiding how the answer was
                produced.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <RagIllustration />
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {aiWorkflows.map((workflow, index) => (
            <Reveal key={workflow.title} delay={index * 0.06}>
              <article className="glass-card interactive-card h-full p-5">
                <p className="text-sm font-black text-[var(--accent)]">0{index + 1}</p>
                <h3 className="mt-4 text-xl font-black text-[var(--ink)]">{workflow.title}</h3>
                <p className="body-copy mt-3 text-sm">{workflow.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function RagIllustration() {
  return (
    <div className="cinematic-surface p-5 md:p-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-kicker">RAG workflow</p>
          <h3 className="mt-2 text-2xl font-black text-[var(--ink)]">Give the model the right context before asking for output.</h3>
        </div>
        <div className="rounded-lg border border-[var(--line)] px-3 py-2 text-xs font-black text-[var(--accent)]">
          Context first
        </div>
      </div>

      <div className="relative mt-6 overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--surface-strong)] p-4">
        <div className="absolute inset-0 architectural-grid opacity-35" />
        <div className="relative grid gap-3 sm:grid-cols-4">
          {pipeline.map((step, index) => (
            <div key={step.label} className="relative rounded-lg border border-[var(--line)] bg-[var(--surface)] p-4">
              <step.Icon className="h-6 w-6 text-[var(--accent-2)]" />
              <p className="mt-4 text-sm font-black text-[var(--ink)]">{step.label}</p>
              <p className="mt-1 text-xs font-bold text-[var(--muted)]">
                {index < 4 ? "Prepare context" : "Generate safely"}
              </p>
              {index < pipeline.length - 1 && (
                <span className="absolute -right-2 top-1/2 hidden h-px w-4 bg-[var(--accent)] sm:block" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <div>
          <p className="text-sm font-black text-[var(--ink)]">Embeddings</p>
          <p className="body-copy mt-1 text-sm">Turn text into searchable meaning so related information can be found quickly.</p>
        </div>
        <div>
          <p className="text-sm font-black text-[var(--ink)]">Vector database</p>
          <p className="body-copy mt-1 text-sm">Stores those meanings and retrieves the most relevant context for a question.</p>
        </div>
        <div>
          <p className="text-sm font-black text-[var(--ink)]">Inference flow</p>
          <p className="body-copy mt-1 text-sm">Combines instructions, retrieved context, tool results, and validation into one response path.</p>
        </div>
      </div>
    </div>
  );
}
