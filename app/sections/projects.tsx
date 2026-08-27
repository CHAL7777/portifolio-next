"use client";

import { projects } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Github, Search, X } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

/** Keeps the section headline in sync with the data instead of hardcoding a count. */
const NUMBER_WORDS = [
  "Zero", "One", "Two", "Three", "Four", "Five",
  "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve",
];
const projectCountWord = NUMBER_WORDS[projects.length] ?? String(projects.length);
const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Project = (typeof projects)[number];
type DetailMode = "case-study" | "details";

const architectureSteps: Record<string, string[]> = {
  Commerce: ["Catalog UI", "Cart state", "Order API", "Checkout"],
  Hospitality: ["Availability", "Room compare", "Booking", "Confirmation"],
  Operations: ["KPI widgets", "Analytics", "Inventory", "Reports"],
  Content: ["Metadata", "Search", "Categories", "Reading flow"],
  SaaS: ["Workspace", "Tasks", "Progress", "Persistence"],
  AI: ["Assessment", "AI roadmap", "State recovery", "Analytics"],
};

/**
 * Three distinct case-study layouts, assigned per project so no two adjacent
 * entries read the same way.
 *  - "lead"      : full-width hero treatment for the featured project
 *  - "split"     : text left / visual right
 *  - "split-alt" : visual left / text right
 */
type Layout = "lead" | "split" | "split-alt";

function layoutFor(project: Project, index: number): Layout {
  if (project.visual.size === "featured" || index === 0) return "lead";
  return index % 2 === 1 ? "split" : "split-alt";
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [activeDetail, setActiveDetail] = useState<{ title: string; mode: DetailMode } | null>(null);
  const [previewImage, setPreviewImage] = useState<{ src: string; title: string; alt: string } | null>(null);
  const reduceMotion = useReducedMotion();

  const filteredProjects = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchCat = activeCategory === "All" || p.category === activeCategory;
      const searchable = [
        p.title, p.summary, p.problem, p.goal, p.architecture, p.category,
        p.role, p.status, p.visual.label,
        p.technologies.join(" "), p.features.join(" "), p.decisions.join(" "),
      ].join(" ").toLowerCase();
      return matchCat && (!q || searchable.includes(q));
    });
  }, [activeCategory, query]);

  function toggleDetail(title: string, mode: DetailMode) {
    setActiveDetail((c) => (c?.title === title && c.mode === mode ? null : { title, mode }));
  }

  return (
    <section id="projects" aria-labelledby="projects-heading" className="section-band relative">
      <div className="site-shell relative z-10">
        <SectionHeading
          index="01"
          kicker="Selected work"
          title={
            <span id="projects-heading">
              {projectCountWord} products,
              <br />
              documented like engineering work.
            </span>
          }
          lede="Each entry carries the problem it solved, the architecture behind it, and the decisions I would defend in a review."
        />

        {/* Filters — a control bar, not decoration */}
        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-col gap-4 border-y border-[var(--line)] py-4 md:flex-row md:items-center md:justify-between">
            <div className="no-scrollbar flex gap-1 overflow-x-auto">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    aria-pressed={isActive}
                    className={`meta-mono shrink-0 px-3 py-2 transition-colors ${
                      isActive
                        ? "text-[var(--accent)]"
                        : "text-[var(--muted)] hover:text-[var(--ink)]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
            <label className="relative block md:w-72">
              <span className="sr-only">Search projects</span>
              <Search
                size={15}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)]"
              />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="input-field h-11 w-full pl-9 text-sm"
                placeholder="Search tech, features…"
                type="search"
              />
            </label>
          </div>
        </Reveal>

        {/* Case studies */}
        <div className="mt-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const detailMode =
                activeDetail?.title === project.title ? activeDetail.mode : null;
              return (
                <ProjectEntry
                  key={project.title}
                  project={project}
                  index={index}
                  layout={layoutFor(project, index)}
                  detailMode={detailMode}
                  onDetailToggle={(mode) => toggleDetail(project.title, mode)}
                  onPreviewImage={() =>
                    setPreviewImage({
                      src: project.image,
                      title: project.title,
                      alt: project.visual.alt,
                    })
                  }
                  reduceMotion={Boolean(reduceMotion)}
                />
              );
            })}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="border-t border-[var(--line)] py-16 text-center">
            <p className="display-title text-xl">No projects match that search.</p>
            <p className="body-copy mt-2 text-sm">
              Try AI, dashboard, checkout, content, or motion.
            </p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {previewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[92vh] max-w-5xl overflow-hidden rounded border border-[var(--line-strong)] bg-[var(--surface-solid)] p-3"
            >
              <div className="mb-3 flex items-center justify-between border-b border-[var(--line)] px-1 pb-3">
                <span className="meta-mono">{previewImage.title}</span>
                <button
                  type="button"
                  onClick={() => setPreviewImage(null)}
                  className="rounded-[3px] border border-[var(--line)] p-1.5 text-[var(--muted)] transition hover:text-[var(--ink)]"
                  aria-label="Close preview"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="relative max-h-[80vh] overflow-y-auto bg-black">
                <Image
                  src={previewImage.src}
                  alt={previewImage.alt}
                  width={1400}
                  height={900}
                  className="w-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectEntry({
  project,
  index,
  layout,
  detailMode,
  onDetailToggle,
  onPreviewImage,
  reduceMotion,
}: {
  project: Project;
  index: number;
  layout: Layout;
  detailMode: DetailMode | null;
  onDetailToggle: (mode: DetailMode) => void;
  onPreviewImage: () => void;
  reduceMotion: boolean;
}) {
  const slug = slugify(project.title);
  const detailId = `${slug}-detail`;
  const titleId = `${slug}-title`;
  const isLead = layout === "lead";

  const visual = (
    <button
      type="button"
      onClick={onPreviewImage}
      aria-label={`View screenshot for ${project.title}`}
      className={`group/visual relative block w-full overflow-hidden border border-[var(--line)] bg-[var(--surface-alt)] p-2 transition-colors hover:border-[var(--line-strong)] ${
        isLead ? "aspect-[16/9]" : "aspect-[16/10]"
      }`}
    >
      <Image
        src={project.image}
        alt={project.visual.alt}
        fill
        priority={index === 0}
        sizes={isLead ? "(min-width:1024px) 78vw, 100vw" : "(min-width:1024px) 46vw, 100vw"}
        className="object-contain object-center p-2"
      />
      <span className="meta-mono pointer-events-none absolute bottom-3 left-3 bg-[var(--background)] px-2 py-1 text-[var(--ink)] opacity-0 transition-opacity group-hover/visual:opacity-100">
        View full screenshot
      </span>
    </button>
  );

  const body = (
    <div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
        <span className="meta-mono text-[var(--accent)]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="meta-mono">{project.category}</span>
        <span className="meta-mono">{project.year}</span>
        <span className="meta-mono">{project.status}</span>
      </div>

      <h3
        id={titleId}
        className={`display-title mt-5 ${isLead ? "text-4xl md:text-6xl" : "text-3xl md:text-4xl"}`}
      >
        {project.title}
      </h3>

      <p className={`body-copy mt-5 ${isLead ? "max-w-2xl text-lg" : "text-base"}`}>
        {project.summary}
      </p>

      {/* The lead entry earns extra depth; the rest stay tighter */}
      {isLead ? (
        <dl className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-3">
          <FactBlock label="Role" value={project.role} />
          <FactBlock label="Problem" value={project.problem} />
          <FactBlock label="Architecture" value={project.architecture} />
        </dl>
      ) : (
        <ul className="mt-6 grid gap-2">
          {project.features.slice(0, 4).map((f) => (
            <li key={f} className="flex gap-3 text-sm text-[var(--muted)]">
              <span className="mt-2 h-px w-3 shrink-0 bg-[var(--accent)]" />
              {f}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2">
        {project.technologies.map((t) => (
          <span key={t} className="meta-mono text-[var(--ink-soft)]">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rule-link"
          aria-label={`${project.title} live site`}
        >
          Live <ArrowUpRight size={13} />
        </a>
        <a
          href={project.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rule-link"
          aria-label={`${project.title} source on GitHub`}
        >
          <Github size={13} /> Source
        </a>
        <button
          type="button"
          onClick={() => onDetailToggle("case-study")}
          aria-expanded={detailMode === "case-study"}
          aria-controls={detailId}
          className="rule-link"
        >
          Case study
          <ChevronDown
            size={13}
            className={detailMode === "case-study" ? "rotate-180" : ""}
          />
        </button>
        <button
          type="button"
          onClick={() => onDetailToggle("details")}
          aria-expanded={detailMode === "details"}
          aria-controls={detailId}
          className="rule-link"
        >
          Decisions
          <ChevronDown
            size={13}
            className={detailMode === "details" ? "rotate-180" : ""}
          />
        </button>
      </div>
    </div>
  );

  return (
    <motion.article
      id={slug}
      layout
      aria-labelledby={titleId}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -14 }}
      transition={{ duration: 0.45, delay: reduceMotion ? 0 : index * 0.05, ease }}
      className="border-t border-[var(--line)] py-16 md:py-24"
    >
      {isLead ? (
        <div className="grid gap-12">
          {body}
          {visual}
        </div>
      ) : (
        <div
          className={`grid items-start gap-10 lg:grid-cols-2 lg:gap-16 ${
            layout === "split-alt" ? "" : ""
          }`}
        >
          <div className={layout === "split-alt" ? "lg:order-2" : ""}>{body}</div>
          <div className={layout === "split-alt" ? "lg:order-1" : ""}>{visual}</div>
        </div>
      )}

      <AnimatePresence initial={false} mode="wait">
        {detailMode && (
          <ProjectDetailPanel
            key={detailMode}
            id={detailId}
            project={project}
            mode={detailMode}
          />
        )}
      </AnimatePresence>
    </motion.article>
  );
}

function ProjectDetailPanel({
  id,
  project,
  mode,
}: {
  id: string;
  project: Project;
  mode: DetailMode;
}) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3, ease }}
      className="overflow-hidden"
    >
      <div className="mt-12 border-t border-[var(--line)] pt-10">
        {mode === "case-study" ? (
          <div>
            <div className="grid gap-8 md:grid-cols-3">
              <CaseBlock label="Problem" text={project.problem} />
              <CaseBlock label="Goal" text={project.goal} />
              <CaseBlock label="Architecture" text={project.architecture} />
            </div>
            <ArchitectureTrail category={project.category} />
          </div>
        ) : (
          <div className="grid gap-10 md:grid-cols-2">
            <div className="grid gap-8">
              <CaseBlock label="Challenge" text={project.challenges} />
              <CaseBlock label="Solution" text={project.solution} />
              <CaseBlock label="Lesson" text={project.lessons} />
            </div>
            <div>
              <p className="meta-mono text-[var(--accent)]">Decisions</p>
              <ul className="mt-4 grid gap-3">
                {project.decisions.map((d) => (
                  <li key={d} className="flex gap-3 text-sm leading-6 text-[var(--muted)]">
                    <span className="mt-2.5 h-px w-3 shrink-0 bg-[var(--line-strong)]" />
                    {d}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-[var(--line)] pt-5">
                {project.metrics.map((m) => (
                  <span key={m} className="meta-mono text-[var(--ink-soft)]">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function ArchitectureTrail({ category }: { category: string }) {
  const steps = architectureSteps[category] ?? ["Interface", "State", "API", "Data"];
  return (
    <div className="mt-10 grid gap-px border border-[var(--line)] bg-[var(--line)] sm:grid-cols-4">
      {steps.map((step, i) => (
        <div key={step} className="bg-[var(--background)] px-4 py-5">
          <span className="meta-mono text-[var(--accent)]">
            {String(i + 1).padStart(2, "0")}
          </span>
          <p className="mt-2 text-sm text-[var(--ink-soft)]">{step}</p>
        </div>
      ))}
    </div>
  );
}

function CaseBlock({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="meta-mono text-[var(--accent)]">{label}</p>
      <p className="body-copy mt-3 text-sm">{text}</p>
    </div>
  );
}

function FactBlock({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="border-t border-[var(--line)] pt-4">
      <dt className="meta-mono">{label}</dt>
      <dd className="body-copy mt-2 text-sm">{value}</dd>
    </div>
  );
}

function slugify(v: string) {
  return v.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
