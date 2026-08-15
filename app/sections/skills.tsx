"use client";

import { skillGroups } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import { BrainCircuit, FileCheck2, Gauge, Layers3 } from "lucide-react";
import { useState } from "react";

const strengths = [
  { title: "Read the problem first", text: "Understand the user path, data shape, and failure cases before writing the first component.", Icon: BrainCircuit },
  { title: "Design layer handoffs", text: "Frontend decisions are easier when the API contract, validation rules, and database ownership are clear.", Icon: Layers3 },
  { title: "Keep quality visible", text: "Loading states, empty states, accessibility, and deployment checks are part of the product.", Icon: Gauge },
  { title: "Document what matters", text: "Concise notes that explain why a decision exists, so future changes start with context.", Icon: FileCheck2 },
];

export default function Skills() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const filteredGroups = selectedFilter === "all" ? skillGroups : skillGroups.filter((g) => g.title.toLowerCase().includes(selectedFilter.toLowerCase()));

  return (
    <section id="skills" className="section-band bg-[var(--background)] relative overflow-hidden">
      <div className="section-glow h-[35rem] w-[35rem] bg-[var(--accent)] -left-[10%] top-[30%]" />
      <div className="site-shell relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.36fr_0.64fr]">
          <Reveal>
            <div>
              <p className="section-kicker">Capabilities & Tech Stack</p>
              <h2 className="display-title mt-4 text-4xl text-[var(--ink)] md:text-5xl">
                Skills grouped by the problems they solve.
              </h2>
              <p className="body-copy mt-5 text-lg leading-relaxed">
                Tools change fast, but engineering principles endure: knowing when to simplify, when to separate concerns, and how to build reliable systems.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                <button type="button" onClick={() => setSelectedFilter("all")} className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${selectedFilter === "all" ? "bg-[var(--accent)] text-[var(--ink-contrast)] shadow-[0_0_20px_rgba(0,229,255,0.2)]" : "border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] hover:border-[var(--accent)]"}`}>
                  All Domains
                </button>
                {skillGroups.map((g) => {
                  const key = g.title.split(" ")[0].toLowerCase();
                  const isSelected = selectedFilter === key;
                  return (
                    <button key={g.title} type="button" onClick={() => setSelectedFilter(isSelected ? "all" : key)} className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${isSelected ? "bg-[var(--accent)] text-[var(--ink-contrast)] shadow-[0_0_20px_rgba(0,229,255,0.2)]" : "border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] hover:border-[var(--accent)]"}`}>
                      {g.title.split(" ")[0]}
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {filteredGroups.map((group, i) => (
              <Reveal key={group.title} delay={i * 0.05}>
                <article className="aurora-card group flex h-full flex-col p-6 rounded-2xl border border-[var(--line)] bg-[var(--surface)]">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] text-[var(--accent)] transition-all group-hover:bg-[var(--accent)] group-hover:text-[var(--ink-contrast)] group-hover:shadow-[0_0_20px_rgba(0,229,255,0.15)]">
                      <group.Icon className="text-xl" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[var(--ink)]">{group.title}</h3>
                      <p className="body-copy mt-1.5 text-xs leading-relaxed">{group.description}</p>
                    </div>
                  </div>
                  <div className="mt-5 rounded-xl border-l-2 border-[var(--accent)] bg-[var(--surface-strong)] p-3 text-xs font-medium leading-relaxed text-[var(--ink)]">
                    <span className="block text-[0.68rem] font-semibold uppercase tracking-wider text-[var(--accent)] font-[family-name:var(--mono-font)]">Primary Outcome:</span>
                    <span className="mt-0.5 block">{group.outcome}</span>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2 pt-2 border-t border-[var(--line)]">
                    {group.skills.map((s) => (
                      <span key={`${group.title}-${s}`} className="rounded-lg border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-1 text-xs font-medium text-[var(--ink)] transition-colors group-hover:border-[var(--accent)]/30">
                        {s}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {strengths.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <article className="aurora-card group h-full rounded-xl border border-[var(--line)] bg-[var(--surface)] p-6">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] text-[var(--accent-2)] transition-all group-hover:bg-[var(--accent-2)] group-hover:text-[var(--ink-contrast)] group-hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]">
                  <item.Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-[var(--ink)]">{item.title}</h3>
                <p className="body-copy mt-2 text-xs leading-relaxed opacity-80">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
