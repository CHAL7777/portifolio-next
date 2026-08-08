"use client";

import { skillGroups } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import { BrainCircuit, FileCheck2, Gauge, Layers3, Sparkles, Terminal } from "lucide-react";
import { useState } from "react";

const strengths = [
  {
    title: "Read the problem before choosing the stack",
    text: "I try to understand the user path, the data shape, and the failure cases before writing the first component.",
    Icon: BrainCircuit,
  },
  {
    title: "Design the handoff between layers",
    text: "Frontend decisions are easier when the API contract, validation rules, and database ownership are clear.",
    Icon: Layers3,
  },
  {
    title: "Keep quality visible",
    text: "Loading states, empty states, accessibility, and deployment checks are part of the product, not cleanup work.",
    Icon: Gauge,
  },
  {
    title: "Document what matters",
    text: "I prefer concise notes that explain why a decision exists, so future changes start with context.",
    Icon: FileCheck2,
  },
];

export default function Skills() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredGroups =
    selectedFilter === "all"
      ? skillGroups
      : skillGroups.filter((g) => g.title.toLowerCase().includes(selectedFilter.toLowerCase()));

  return (
    <section id="skills" className="section-band bg-[var(--background)] relative overflow-hidden">
      <div className="site-shell relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.36fr_0.64fr]">
          <Reveal>
            <div>
              <p className="section-kicker">Capabilities & Tech Stack</p>
              <h2 className="display-title mt-4 text-4xl text-[var(--ink)] md:text-5xl font-black">
                Skills grouped by the problems they help solve.
              </h2>
              <p className="body-copy mt-5 text-lg leading-relaxed">
                Tools change fast, but software engineering principles endure: knowing when to simplify, when to separate concerns, and how to build reliable systems.
              </p>

              {/* Filter Chips */}
              <div className="mt-8 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedFilter("all")}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${
                    selectedFilter === "all"
                      ? "bg-[var(--accent)] text-black shadow-md"
                      : "border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] hover:border-[var(--accent)]"
                  }`}
                >
                  All Domains
                </button>
                {skillGroups.map((g) => {
                  const key = g.title.split(" ")[0].toLowerCase();
                  const isSelected = selectedFilter === key;

                  return (
                    <button
                      key={g.title}
                      type="button"
                      onClick={() => setSelectedFilter(isSelected ? "all" : key)}
                      className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${
                        isSelected
                          ? "bg-[var(--accent)] text-black shadow-md"
                          : "border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] hover:border-[var(--accent)]"
                      }`}
                    >
                      {g.title.split(" ")[0]}
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {filteredGroups.map((group, groupIndex) => (
              <Reveal key={group.title} delay={groupIndex * 0.05}>
                <article className="glass-card interactive-card group flex h-full flex-col p-6 rounded-xl border border-[var(--line)] bg-[var(--surface)] shadow-md transition-all hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] text-[var(--accent)] transition-colors group-hover:bg-[var(--accent)] group-hover:text-black">
                      <group.Icon className="text-xl" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-[var(--ink)]">{group.title}</h3>
                      <p className="body-copy mt-1.5 text-xs leading-relaxed text-[var(--muted)]">{group.description}</p>
                    </div>
                  </div>

                  <div className="mt-5 rounded-lg border-l-2 border-[var(--accent)] bg-[var(--surface-strong)] p-3 text-xs font-bold leading-relaxed text-[var(--ink)]">
                    <span className="block text-[0.68rem] font-black uppercase tracking-wider text-[var(--accent)]">
                      Primary Outcome:
                    </span>
                    <span className="mt-0.5 block">{group.outcome}</span>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2 pt-2 border-t border-[var(--line)]">
                    {group.skills.map((skill) => (
                      <span
                        key={`${group.title}-${skill}`}
                        className="rounded-lg border border-[var(--line)] bg-[var(--surface-strong)] px-3 py-1 text-xs font-bold text-[var(--ink)] transition-colors group-hover:border-[var(--accent)]/40"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {strengths.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="glass-card interactive-card group h-full rounded-xl border border-[var(--line)] bg-[var(--surface)] p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-md">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--line)] bg-[var(--surface-strong)] text-[var(--accent-2)] transition-colors group-hover:bg-[var(--accent-2)] group-hover:text-black">
                  <item.Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-black text-[var(--ink)]">{item.title}</h3>
                <p className="body-copy mt-2 text-xs leading-relaxed opacity-85">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

