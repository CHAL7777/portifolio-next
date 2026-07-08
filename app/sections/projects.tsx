"use client";

import { projects } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Boxes, ExternalLink, Github, Search } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

const categories = ["All", ...Array.from(new Set(projects.map((project) => project.category)))];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory = activeCategory === "All" || project.category === activeCategory;
      const searchable = [
        project.title,
        project.summary,
        project.problem,
        project.goal,
        project.architecture,
        project.category,
        project.technologies.join(" "),
        project.features.join(" "),
        project.decisions.join(" "),
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [activeCategory, query]);

  return (
    <section id="projects" className="section-band bg-[var(--surface-alt)]">
      <div className="site-shell">
        <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
          <Reveal>
            <div>
              <p className="section-kicker">Selected work</p>
              <h2 className="display-title mt-4 text-4xl text-[var(--ink)] md:text-6xl">
                Case studies that show the thinking behind the build.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div>
              <p className="body-copy max-w-2xl text-lg">
                Each project is framed around the problem, the architecture, and the tradeoffs behind the
                interface. The screenshots matter, but the reasoning matters more.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto]">
                <label className="relative block">
                  <span className="sr-only">Search projects</span>
                  <Search size={17} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)]" />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    className="input-field pl-10"
                    placeholder="Search project reasoning, tech, or architecture..."
                    type="search"
                  />
                </label>
                <div className="no-scrollbar flex gap-2 overflow-x-auto">
                  {categories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`button-base min-h-11 shrink-0 border px-3 py-2 text-xs ${
                        activeCategory === category
                          ? "border-[var(--ink)] bg-[var(--ink)] text-[var(--ink-contrast)]"
                          : "border-[var(--line)] bg-[var(--surface)] text-[var(--ink)]"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.38, delay: index * 0.04 }}
                className="cinematic-surface interactive-card overflow-hidden"
              >
                <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block min-h-[22rem] overflow-hidden bg-[var(--surface-solid)]"
                  >
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fill
                      sizes="(min-width: 1024px) 46vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,10,8,0.64),transparent_54%)]" />
                    <div className="absolute left-4 top-4 rounded-lg border border-white/24 bg-black/44 px-3 py-2 text-xs font-black text-white backdrop-blur-xl">
                      {project.category} / {project.year}
                    </div>
                    <div className="absolute inset-x-4 bottom-4 rounded-lg border border-white/18 bg-black/46 p-4 text-white backdrop-blur-xl">
                      <p className="text-sm font-black">Screenshot evidence</p>
                      <p className="mt-1 text-sm text-white/78">{project.summary}</p>
                    </div>
                  </a>

                  <div className="p-5 md:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="section-kicker">{project.category}</p>
                        <h3 className="mt-3 text-3xl font-black leading-tight text-[var(--ink)] md:text-4xl">
                          {project.title}
                        </h3>
                      </div>
                      <div className="flex shrink-0 gap-2">
                        <a
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} source code`}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] transition-colors hover:bg-[var(--tag-bg)]"
                        >
                          <Github size={17} />
                        </a>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} live demo`}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--ink)] text-[var(--ink-contrast)] transition-transform hover:-translate-y-0.5"
                        >
                          <ExternalLink size={17} />
                        </a>
                      </div>
                    </div>

                    <div className="mt-6 grid gap-5 md:grid-cols-2">
                      <CaseBlock label="Problem" text={project.problem} />
                      <CaseBlock label="Goal" text={project.goal} />
                    </div>

                    <div className="mt-6 border-t border-[var(--line)] pt-6">
                      <div className="flex items-center gap-2 text-sm font-black text-[var(--ink)]">
                        <Boxes size={17} className="text-[var(--accent)]" />
                        Architecture
                      </div>
                      <p className="body-copy mt-2 text-sm">{project.architecture}</p>
                      <ProjectDiagram />
                    </div>

                    <div className="mt-6 grid gap-5 md:grid-cols-[1fr_0.92fr]">
                      <div>
                        <p className="text-sm font-black text-[var(--ink)]">Technical decisions</p>
                        <ul className="mt-3 grid gap-2 text-sm text-[var(--muted)]">
                          {project.decisions.map((decision) => (
                            <li key={decision} className="flex gap-2">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                              {decision}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="grid gap-4">
                        <CaseBlock label="Challenge" text={project.challenges} />
                        <CaseBlock label="Solution" text={project.solution} />
                        <CaseBlock label="Lesson learned" text={project.lessons} />
                      </div>
                    </div>

                    <div className="mt-6 border-t border-[var(--line)] pt-6">
                      <p className="text-sm font-black text-[var(--ink)]">Metrics and proof points</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.metrics.map((metric) => (
                          <span key={metric} className="tag">
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="rule-link mt-6 text-sm">
                      Open live project
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="glass-card mt-8 p-8 text-center">
            <p className="font-black text-[var(--ink)]">No projects match that search.</p>
            <p className="body-copy mt-2 text-sm">Try a term like API, dashboard, checkout, content, or SaaS.</p>
          </div>
        )}
      </div>
    </section>
  );
}

function CaseBlock({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="text-sm font-black text-[var(--ink)]">{label}</p>
      <p className="body-copy mt-1 text-sm">{text}</p>
    </div>
  );
}

function ProjectDiagram() {
  return (
    <div className="mt-4 grid grid-cols-4 items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--surface-strong)] p-3 text-center text-[0.68rem] font-black text-[var(--ink)] sm:text-xs">
      {["UI", "State", "API", "Data"].map((step, index) => (
        <div key={step} className="relative rounded-lg border border-[var(--line)] bg-[var(--surface)] px-2 py-3">
          {step}
          {index < 3 && (
            <span
              className="absolute left-[calc(100%+0.2rem)] top-1/2 hidden h-px w-[0.7rem] -translate-y-1/2 bg-[var(--accent)] sm:block"
              aria-hidden="true"
            />
          )}
        </div>
      ))}
    </div>
  );
}
