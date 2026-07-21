"use client";

import { projects } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { MotionStyle } from "framer-motion";
import {
  ArrowUpRight,
  Boxes,
  CheckCircle2,
  ChevronDown,
  Code2,
  ExternalLink,
  Github,
  Layers3,
  Search,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import type { PointerEvent, ReactNode } from "react";
import { useMemo, useState } from "react";

const categories = ["All", ...Array.from(new Set(projects.map((project) => project.category)))];
const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Project = (typeof projects)[number];
type DetailMode = "case-study" | "details";
type ProjectStyle = MotionStyle & {
  "--project-accent": string;
  "--project-rgb": string;
  "--project-secondary": string;
};

const architectureSteps: Record<string, string[]> = {
  Commerce: ["Menu UI", "Cart State", "Order API", "Checkout"],
  Operations: ["KPI Widgets", "Analytics", "Inventory", "Reports"],
  Content: ["Metadata", "Search", "Categories", "Reading Flow"],
  SaaS: ["Workspace", "Tasks", "Progress", "Persistence"],
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [activeDetail, setActiveDetail] = useState<{ title: string; mode: DetailMode } | null>(null);
  const reduceMotion = useReducedMotion();

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
        project.role,
        project.status,
        project.visual.label,
        project.technologies.join(" "),
        project.features.join(" "),
        project.decisions.join(" "),
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [activeCategory, query]);

  function toggleDetail(title: string, mode: DetailMode) {
    setActiveDetail((current) => {
      if (current?.title === title && current.mode === mode) {
        return null;
      }

      return { title, mode };
    });
  }

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="premium-projects section-band relative isolate overflow-hidden border-y border-white/10 bg-[#080907] text-white"
    >
      <div className="site-shell relative z-10">
        <div className="grid gap-8 lg:grid-cols-[0.43fr_0.57fr] lg:items-end">
          <Reveal>
            <div>
              <p className="section-kicker text-[#23d48d]">Selected work</p>
              <h2 id="projects-heading" className="display-title mt-4 text-4xl text-white md:text-5xl">
                Production-grade products, visualized like systems.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div>
              <p className="max-w-2xl text-lg leading-8 text-white/68">
                Each project gets a custom visual language: commerce flows, analytics surfaces, content systems,
                and AI-assisted workspaces instead of ordinary screenshots.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]">
                <label className="relative block">
                  <span className="sr-only">Search projects</span>
                  <Search
                    size={17}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/45"
                  />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    className="h-12 w-full rounded-lg border border-white/12 bg-white/[0.08] pl-10 pr-4 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition focus:border-[#23d48d] focus:bg-white/[0.11] focus:outline-none focus:ring-4 focus:ring-[#23d48d]/15"
                    placeholder="Search tech, architecture, features..."
                    type="search"
                  />
                </label>
                <div className="no-scrollbar flex gap-2 overflow-x-auto">
                  {categories.map((category) => {
                    const isActive = activeCategory === category;

                    return (
                      <button
                        key={category}
                        type="button"
                        onClick={() => setActiveCategory(category)}
                        className={`button-base min-h-12 shrink-0 border px-4 py-2 text-xs ${
                          isActive
                            ? "border-white bg-white text-[#080907] shadow-[0_14px_42px_rgba(255,255,255,0.14)]"
                            : "border-white/12 bg-white/[0.07] text-white/72 hover:border-white/22 hover:bg-white/[0.11] hover:text-white"
                        }`}
                      >
                        {category}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-12 lg:auto-rows-[minmax(24rem,auto)]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const detailMode = activeDetail?.title === project.title ? activeDetail.mode : null;

              return (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  detailMode={detailMode}
                  onDetailToggle={(mode) => toggleDetail(project.title, mode)}
                  reduceMotion={Boolean(reduceMotion)}
                />
              );
            })}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="mt-8 rounded-lg border border-white/12 bg-white/[0.07] p-8 text-center shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-2xl">
            <p className="font-black text-white">No projects match that search.</p>
            <p className="mt-2 text-sm leading-6 text-white/62">
              Try a term like API, dashboard, checkout, content, SaaS, or motion.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  detailMode,
  onDetailToggle,
  reduceMotion,
}: {
  project: Project;
  index: number;
  detailMode: DetailMode | null;
  onDetailToggle: (mode: DetailMode) => void;
  reduceMotion: boolean;
}) {
  const slug = slugify(project.title);
  const isFeatured = project.visual.size === "featured";
  const detailId = `${slug}-project-detail`;
  const titleId = `${slug}-project-title`;
  const style = {
    "--project-accent": project.visual.accent,
    "--project-rgb": project.visual.accentRgb,
    "--project-secondary": project.visual.secondary,
  } as ProjectStyle;

  return (
    <motion.article
      id={slug}
      layout
      aria-labelledby={titleId}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -14 }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.42, delay: reduceMotion ? 0 : index * 0.045, ease }}
      style={style}
      className={`premium-project-card group relative isolate flex min-h-[34rem] flex-col overflow-hidden rounded-lg border border-white/12 bg-white/[0.07] shadow-[0_26px_90px_rgba(0,0,0,0.3)] backdrop-blur-2xl ${layoutClass(
        project.visual.size,
      )}`}
    >
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open live demo for ${project.title}`}
        className={`project-visual-shell relative block overflow-hidden border-b border-white/10 bg-[#0c0f0c] ${
          isFeatured ? "min-h-[22rem] md:min-h-[27rem]" : "min-h-[18rem]"
        }`}
      >
        <Image
          src={project.image}
          alt={project.visual.alt}
          fill
          sizes={isFeatured ? "(min-width: 1024px) 54vw, 100vw" : "(min-width: 1024px) 38vw, 100vw"}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,9,7,0.66),transparent_46%,rgba(8,9,7,0.08))]" />
        <div className="absolute left-4 top-4 rounded-lg border border-white/14 bg-black/32 px-3 py-2 text-[0.68rem] font-black uppercase tracking-[0.16em] text-white/82 backdrop-blur-xl">
          {project.visual.label}
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-2">
          <VisualBadge icon={<Sparkles size={13} />} label={project.category} />
          <VisualBadge icon={<Code2 size={13} />} label={project.role} />
        </div>
      </a>

      <div className="relative flex flex-1 flex-col p-5 md:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <MetaPill>{project.year}</MetaPill>
          <MetaPill>{project.status}</MetaPill>
        </div>

        <div className="mt-5 grid gap-4">
          <div>
            <h3
              id={titleId}
              className={`font-black leading-[1.02] tracking-normal text-white ${
                isFeatured ? "text-4xl md:text-5xl" : "text-3xl"
              }`}
            >
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-white/66 md:text-[0.95rem]">{project.summary}</p>
          </div>

          <div>
            <div className="flex items-center gap-2 text-xs font-black uppercase text-white/82">
              <CheckCircle2 size={15} className="text-[var(--project-accent)]" />
              Key features
            </div>
            <ul className={`mt-3 grid gap-2 ${isFeatured ? "sm:grid-cols-2" : ""}`}>
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-2 text-sm leading-6 text-white/66">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--project-accent)]" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-[0.72rem] font-black text-white/76"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-6 grid gap-2 sm:grid-cols-2">
          <ProjectAction href={project.liveUrl} icon={<ExternalLink size={15} />} ariaLabel={`${project.title} live demo`}>
            Live Demo
          </ProjectAction>
          <ProjectAction href={project.sourceUrl} icon={<Github size={15} />} ariaLabel={`${project.title} GitHub`}>
            GitHub
          </ProjectAction>
          <ProjectAction
            icon={<Layers3 size={15} />}
            active={detailMode === "case-study"}
            ariaExpanded={detailMode === "case-study"}
            ariaControls={detailId}
            onClick={() => onDetailToggle("case-study")}
          >
            Case Study
          </ProjectAction>
          <ProjectAction
            icon={<ChevronDown size={15} className={detailMode === "details" ? "rotate-180" : ""} />}
            active={detailMode === "details"}
            ariaExpanded={detailMode === "details"}
            ariaControls={detailId}
            onClick={() => onDetailToggle("details")}
          >
            View Details
          </ProjectAction>
        </div>

        <AnimatePresence initial={false} mode="wait">
          {detailMode && <ProjectDetailPanel key={detailMode} id={detailId} project={project} mode={detailMode} />}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}

function ProjectDetailPanel({ id, project, mode }: { id: string; project: Project; mode: DetailMode }) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.28, ease }}
      className="overflow-hidden"
    >
      <div className="mt-6 border-t border-white/10 pt-6">
        {mode === "case-study" ? (
          <div>
            <div className="grid gap-4 md:grid-cols-3">
              <CaseBlock label="Problem" text={project.problem} />
              <CaseBlock label="Goal" text={project.goal} />
              <CaseBlock label="Architecture" text={project.architecture} />
            </div>
            <ArchitectureTrail category={project.category} />
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-[0.95fr_1.05fr]">
            <div className="grid gap-4">
              <CaseBlock label="Challenge" text={project.challenges} />
              <CaseBlock label="Solution" text={project.solution} />
              <CaseBlock label="Lesson learned" text={project.lessons} />
            </div>
            <div>
              <div className="flex items-center gap-2 text-sm font-black text-white">
                <Boxes size={16} className="text-[var(--project-accent)]" />
                Engineering proof points
              </div>
              <ul className="mt-3 grid gap-2">
                {project.decisions.map((decision) => (
                  <li key={decision} className="flex gap-2 text-sm leading-6 text-white/64">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--project-secondary)]" />
                    {decision}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-[0.72rem] font-black text-white/74"
                  >
                    {metric}
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
    <div className="mt-5 overflow-hidden rounded-lg border border-white/10 bg-black/18 p-3">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {steps.map((step, index) => (
          <div key={step} className="relative rounded-lg border border-white/10 bg-white/[0.06] px-3 py-3 text-center">
            <p className="text-[0.68rem] font-black uppercase text-white/76">{step}</p>
            {index < steps.length - 1 && (
              <span
                className="absolute -right-2 top-1/2 hidden h-px w-4 -translate-y-1/2 bg-[var(--project-accent)] sm:block"
                aria-hidden="true"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function CaseBlock({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="text-sm font-black text-white">{label}</p>
      <p className="mt-1 text-sm leading-6 text-white/62">{text}</p>
    </div>
  );
}

function ProjectAction({
  href,
  icon,
  children,
  ariaLabel,
  ariaExpanded,
  ariaControls,
  active = false,
  onClick,
}: {
  href?: string;
  icon: ReactNode;
  children: ReactNode;
  ariaLabel?: string;
  ariaExpanded?: boolean;
  ariaControls?: string;
  active?: boolean;
  onClick?: () => void;
}) {
  const className = `group/action inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border px-3 py-2 text-xs font-black uppercase transition duration-300 ${
    active
      ? "border-white bg-white text-[#080907] shadow-[0_16px_42px_rgba(255,255,255,0.16)]"
      : "border-white/12 bg-white/[0.06] text-white/76 hover:border-white/26 hover:bg-white/[0.11] hover:text-white"
  }`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} className={className}>
        {icon}
        {children}
        <ArrowUpRight size={13} className="transition-transform group-hover/action:-translate-y-0.5 group-hover/action:translate-x-0.5" />
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      className={className}
    >
      {icon}
      {children}
    </button>
  );
}

function VisualBadge({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <span className="inline-flex min-h-9 items-center gap-2 rounded-lg border border-white/14 bg-black/34 px-3 py-2 text-[0.68rem] font-black uppercase text-white/82 shadow-[0_12px_32px_rgba(0,0,0,0.22)] backdrop-blur-xl">
      {icon}
      {label}
    </span>
  );
}

function MetaPill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-[0.68rem] font-black uppercase text-white/72">
      {children}
    </span>
  );
}

function handlePointerMove(event: PointerEvent<HTMLElement>) {
  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;
  const rotateY = (x - 50) * 0.055;
  const rotateX = (50 - y) * 0.045;

  card.style.setProperty("--spotlight-x", `${x.toFixed(2)}%`);
  card.style.setProperty("--spotlight-y", `${y.toFixed(2)}%`);
  card.style.setProperty("--tilt-x", `${rotateX.toFixed(2)}deg`);
  card.style.setProperty("--tilt-y", `${rotateY.toFixed(2)}deg`);
}

function handlePointerLeave(event: PointerEvent<HTMLElement>) {
  const card = event.currentTarget;

  card.style.setProperty("--spotlight-x", "50%");
  card.style.setProperty("--spotlight-y", "20%");
  card.style.setProperty("--tilt-x", "0deg");
  card.style.setProperty("--tilt-y", "0deg");
}

function layoutClass(size: Project["visual"]["size"]) {
  if (size === "featured") {
    return "lg:col-span-7 lg:row-span-2";
  }

  if (size === "small") {
    return "lg:col-span-6 lg:col-start-4";
  }

  return "lg:col-span-5";
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
