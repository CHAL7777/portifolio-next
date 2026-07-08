import { skillGroups } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import { BrainCircuit, FileCheck2, Gauge, Layers3 } from "lucide-react";

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
  return (
    <section id="skills" className="section-band bg-[var(--background)]">
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr]">
          <Reveal>
            <div>
              <p className="section-kicker">Capabilities</p>
              <h2 className="display-title mt-4 text-4xl text-[var(--ink)] md:text-6xl">
                Skills grouped by the problems they help solve.
              </h2>
              <p className="body-copy mt-5 text-lg">
                The tools matter, but the judgment matters more: when to simplify, when to separate concerns,
                and when a product needs stronger foundations before more features.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            {skillGroups.map((group, groupIndex) => (
              <Reveal key={group.title} delay={groupIndex * 0.05}>
                <article className="glass-card interactive-card h-full p-5">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[var(--line)] bg-[var(--surface-strong)] text-[var(--accent)]">
                      <group.Icon className="text-xl" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-[var(--ink)]">{group.title}</h3>
                      <p className="body-copy mt-2 text-sm">{group.description}</p>
                    </div>
                  </div>

                  <p className="mt-5 border-l-2 border-[var(--accent)] pl-4 text-sm font-bold leading-relaxed text-[var(--ink)]">
                    {group.outcome}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={`${group.title}-${skill}`} className="tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {strengths.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="solid-card interactive-card h-full p-5">
                <item.Icon className="h-7 w-7 text-[var(--accent-2)]" />
                <h3 className="mt-5 text-lg font-black text-[var(--ink)]">{item.title}</h3>
                <p className="body-copy mt-2 text-sm">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
