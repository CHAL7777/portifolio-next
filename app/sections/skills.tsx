"use client";

import { skillGroups } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
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
    <section id="skills" className="section-band relative">
      <div className="site-shell relative z-10">
        <SectionHeading
          index="04"
          kicker="Capabilities & tech stack"
          title={
            <>
              Skills grouped by
              <br />
              the problems they solve.
            </>
          }
          lede="Tools change fast, but engineering principles endure: knowing when to simplify, when to separate concerns, and how to build reliable systems."
        />

        {/* Filters as a ruled control bar */}
        <Reveal delay={0.1}>
          <div className="no-scrollbar mt-14 flex gap-1 overflow-x-auto border-y border-[var(--line)] py-3">
            <button
              type="button"
              onClick={() => setSelectedFilter("all")}
              aria-pressed={selectedFilter === "all"}
              className={`meta-mono shrink-0 px-3 py-2 transition-colors ${
                selectedFilter === "all"
                  ? "text-[var(--accent)]"
                  : "text-[var(--muted)] hover:text-[var(--ink)]"
              }`}
            >
              All
            </button>
            {skillGroups.map((g) => {
              const key = g.title.split(" ")[0].toLowerCase();
              const isSelected = selectedFilter === key;
              return (
                <button
                  key={g.title}
                  type="button"
                  onClick={() => setSelectedFilter(isSelected ? "all" : key)}
                  aria-pressed={isSelected}
                  className={`meta-mono shrink-0 px-3 py-2 transition-colors ${
                    isSelected
                      ? "text-[var(--accent)]"
                      : "text-[var(--muted)] hover:text-[var(--ink)]"
                  }`}
                >
                  {g.title.split(" ")[0]}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Skill groups */}
        <div className="mt-10 grid gap-px border border-[var(--line)] bg-[var(--line)] md:grid-cols-2 lg:grid-cols-3">
          {filteredGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.05}>
              <article className="flex h-full flex-col bg-[var(--background)] p-7 transition-colors hover:bg-[var(--surface)]">
                <group.Icon className="text-lg text-[var(--accent)]" aria-hidden="true" />
                <h3 className="display-title mt-5 text-xl">{group.title}</h3>
                <p className="body-copy mt-2 text-sm">{group.description}</p>

                <p className="mt-6 border-l border-[var(--accent)] pl-4 text-sm text-[var(--ink-soft)]">
                  <span className="meta-mono block text-[var(--accent)]">Outcome</span>
                  <span className="mt-1.5 block">{group.outcome}</span>
                </p>

                <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 pt-7">
                  {group.skills.map((s) => (
                    <span key={`${group.title}-${s}`} className="meta-mono text-[var(--ink-soft)]">
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* How I work */}
        <div className="mt-16 grid border-t border-[var(--line)] md:grid-cols-2 lg:grid-cols-4">
          {strengths.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <article className="h-full border-b border-[var(--line)] py-8 lg:border-b-0 lg:border-r lg:px-7 lg:first:pl-0 lg:last:border-r-0">
                <item.Icon className="h-4 w-4 text-[var(--muted)]" />
                <h3 className="display-title mt-5 text-base">{item.title}</h3>
                <p className="body-copy mt-2 text-xs">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
