"use client";

import { projects } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { MotionStyle } from "framer-motion";
import {
  ArrowUpRight, Boxes, CheckCircle2, ChevronDown, Code2,
  ExternalLink, Github, Layers3, Maximize2, Search,
  Sparkles, X, ZoomIn,
} from "lucide-react";
import Image from "next/image";
import type { PointerEvent, ReactNode } from "react";
import { useMemo, useState } from "react";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
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
  AI: ["Assessment", "AI Roadmap", "State Recovery", "Analytics"],
};

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
      const searchable = [p.title, p.summary, p.problem, p.goal, p.architecture, p.category, p.role, p.status, p.visual.label, p.technologies.join(" "), p.features.join(" "), p.decisions.join(" ")].join(" ").toLowerCase();
      return matchCat && (!q || searchable.includes(q));
    });
  }, [activeCategory, query]);

  function toggleDetail(title: string, mode: DetailMode) {
    setActiveDetail((c) => (c?.title === title && c.mode === mode ? null : { title, mode }));
  }

  return (
    <section id="projects" aria-labelledby="projects-heading" className="premium-projects section-band relative isolate border-y border-white/[0.06] text-white">
      <div className="site-shell relative z-10">
        <div className="grid gap-8 lg:grid-cols-[0.43fr_0.57fr] lg:items-end">
          <Reveal>
            <div>
              <p className="section-kicker text-[var(--accent)]">Selected work</p>
              <h2 id="projects-heading" className="display-title mt-4 text-4xl text-white md:text-5xl">
                Production-grade products, built with real screenshots.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div>
              <p className="max-w-2xl text-lg leading-8 text-white/60">
                Explore real application interfaces — from food delivery to e-commerce dashboards, content hubs, and AI pathfinders.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]">
                <label className="relative block">
                  <span className="sr-only">Search projects</span>
                  <Search size={17} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
                  <input value={query} onChange={(e) => setQuery(e.target.value)} className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.05] pl-10 pr-4 text-sm font-medium text-white backdrop-blur-xl transition focus:border-[var(--accent)] focus:bg-white/[0.08] focus:outline-none focus:ring-4 focus:ring-[var(--accent)]/10" placeholder="Search tech, features..." type="search" />
                </label>
                <div className="no-scrollbar flex gap-2 overflow-x-auto">
                  {categories.map((cat) => {
                    const isActive = activeCategory === cat;
                    return (
                      <button key={cat} type="button" onClick={() => setActiveCategory(cat)} className={`button-base min-h-12 shrink-0 border px-4 py-2 text-xs ${isActive ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--ink-contrast)] shadow-[0_0_30px_rgba(0,229,255,0.2)]" : "border-white/10 bg-white/[0.05] text-white/60 hover:border-white/20 hover:text-white"}`}>
                        {cat}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12 lg:auto-rows-[minmax(24rem,auto)]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const detailMode = activeDetail?.title === project.title ? activeDetail.mode : null;
              return (
                <ProjectCard key={project.title} project={project} index={index} detailMode={detailMode} onDetailToggle={(mode) => toggleDetail(project.title, mode)} onPreviewImage={() => setPreviewImage({ src: project.image, title: project.title, alt: project.visual.alt })} reduceMotion={Boolean(reduceMotion)} />
              );
            })}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.05] p-8 text-center backdrop-blur-2xl">
            <p className="font-bold text-white">No projects match that search.</p>
            <p className="mt-2 text-sm text-white/50">Try AI, dashboard, checkout, content, or motion.</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {previewImage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setPreviewImage(null)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md md:p-8">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} onClick={(e) => e.stopPropagation()} className="relative max-h-[92vh] max-w-5xl overflow-hidden rounded-2xl border border-white/15 bg-[#0a0c14] p-3 shadow-2xl">
              <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3 px-2">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <div className="h-3 w-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="ml-2 text-xs font-semibold text-white/70">{previewImage.title}</span>
                </div>
                <button type="button" onClick={() => setPreviewImage(null)} className="rounded-lg border border-white/10 bg-white/5 p-1.5 text-white/70 transition hover:bg-white/10 hover:text-white">
                  <X size={18} />
                </button>
              </div>
              <div className="relative max-h-[80vh] overflow-y-auto rounded-xl bg-black">
                <Image src={previewImage.src} alt={previewImage.alt} width={1400} height={900} className="w-full object-contain rounded-lg" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({ project, index, detailMode, onDetailToggle, onPreviewImage, reduceMotion }: { project: Project; index: number; detailMode: DetailMode | null; onDetailToggle: (mode: DetailMode) => void; onPreviewImage: () => void; reduceMotion: boolean }) {
  const slug = slugify(project.title);
  const isFeatured = project.visual.size === "featured";
  const detailId = `${slug}-detail`;
  const titleId = `${slug}-title`;
  const style = { "--project-accent": project.visual.accent, "--project-rgb": project.visual.accentRgb, "--project-secondary": project.visual.secondary } as ProjectStyle;

  return (
    <motion.article id={slug} layout aria-labelledby={titleId} onPointerMove={reduceMotion ? undefined : handlePointerMove} onPointerLeave={reduceMotion ? undefined : handlePointerLeave} initial={reduceMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -14 }} whileHover={reduceMotion ? undefined : { y: -6 }} transition={{ duration: 0.42, delay: reduceMotion ? 0 : index * 0.045, ease }} style={style} className={`premium-project-card group relative isolate flex min-h-[34rem] flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] shadow-[0_26px_90px_rgba(0,0,0,0.35)] backdrop-blur-2xl ${layoutClass(project.visual.size, index)}`}>
      {/* Visual Header */}
      <div className="relative overflow-hidden border-b border-white/[0.06] bg-[#080a12]">
        <div className="flex items-center justify-between border-b border-white/[0.06] bg-[#0c0e18] px-4 py-2 text-xs text-white/40">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
            <span className="ml-2 font-[family-name:var(--mono-font)] text-[0.68rem] text-white/30">{project.liveUrl.replace("https://", "")}</span>
          </div>
          <button type="button" onClick={onPreviewImage} title="Expand" className="flex items-center gap-1 text-[0.68rem] font-semibold text-white/50 hover:text-white transition">
            <ZoomIn size={13} /><span>Expand</span>
          </button>
        </div>
        <button type="button" onClick={onPreviewImage} aria-label={`View screenshot for ${project.title}`} className={`project-visual-shell relative block w-full text-left overflow-hidden cursor-pointer ${isFeatured ? "h-[22rem] md:h-[26rem]" : "h-[18rem]"}`}>
          <Image src={project.image} alt={project.visual.alt} fill sizes={isFeatured ? "(min-width:1024px)54vw,100vw" : "(min-width:1024px)38vw,100vw"} className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,10,18,0.8),transparent_50%,rgba(8,10,18,0.1))]" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/70 px-4 py-2 text-xs font-bold text-white shadow-xl">
              <Maximize2 size={14} className="text-[var(--project-accent)]" />View Full Screenshot
            </span>
          </div>
          <div className="absolute left-4 top-4 rounded-lg border border-white/10 bg-black/50 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-white/80 backdrop-blur-xl">{project.visual.label}</div>
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-2">
            <VisualBadge icon={<Sparkles size={13} />} label={project.category} />
            <VisualBadge icon={<Code2 size={13} />} label={project.role} />
          </div>
        </button>
      </div>

      <div className="relative flex flex-1 flex-col p-5 md:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <MetaPill>{project.year}</MetaPill>
          <MetaPill>{project.status}</MetaPill>
        </div>
        <div className="mt-5 grid gap-4">
          <div>
            <h3 id={titleId} className={`font-bold leading-[1.05] tracking-tight text-white ${isFeatured ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"}`}>{project.title}</h3>
            <p className="mt-3 text-sm leading-6 text-white/55">{project.summary}</p>
          </div>
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase text-white/70"><CheckCircle2 size={15} className="text-[var(--project-accent)]" />Key features</div>
            <ul className={`mt-3 grid gap-2 ${isFeatured ? "sm:grid-cols-2" : ""}`}>
              {project.features.map((f) => (<li key={f} className="flex gap-2 text-sm leading-6 text-white/55"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--project-accent)]" />{f}</li>))}
            </ul>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((t) => (<span key={t} className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-1.5 text-[0.72rem] font-semibold text-white/60">{t}</span>))}
        </div>
        <div className="mt-6 grid gap-2 sm:grid-cols-2">
          <ProjectAction href={project.liveUrl} icon={<ExternalLink size={15} />} ariaLabel={`${project.title} live`}>Live Demo</ProjectAction>
          <ProjectAction href={project.sourceUrl} icon={<Github size={15} />} ariaLabel={`${project.title} GitHub`}>GitHub</ProjectAction>
          <ProjectAction icon={<Layers3 size={15} />} active={detailMode === "case-study"} ariaExpanded={detailMode === "case-study"} ariaControls={detailId} onClick={() => onDetailToggle("case-study")}>Case Study</ProjectAction>
          <ProjectAction icon={<ChevronDown size={15} className={detailMode === "details" ? "rotate-180" : ""} />} active={detailMode === "details"} ariaExpanded={detailMode === "details"} ariaControls={detailId} onClick={() => onDetailToggle("details")}>Details</ProjectAction>
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
    <motion.div id={id} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.28, ease }} className="overflow-hidden">
      <div className="mt-6 border-t border-white/[0.06] pt-6">
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
              <CaseBlock label="Lesson" text={project.lessons} />
            </div>
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-white"><Boxes size={16} className="text-[var(--project-accent)]" />Engineering proof points</div>
              <ul className="mt-3 grid gap-2">
                {project.decisions.map((d) => (<li key={d} className="flex gap-2 text-sm leading-6 text-white/55"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--project-secondary)]" />{d}</li>))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.metrics.map((m) => (<span key={m} className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-1.5 text-[0.72rem] font-semibold text-white/60">{m}</span>))}
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
    <div className="mt-5 overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {steps.map((step, i) => (
          <div key={step} className="relative rounded-lg border border-white/[0.06] bg-white/[0.04] px-3 py-3 text-center">
            <p className="text-[0.68rem] font-bold uppercase text-white/60">{step}</p>
            {i < steps.length - 1 && <span className="absolute -right-2 top-1/2 hidden h-px w-4 -translate-y-1/2 bg-[var(--project-accent)] sm:block" aria-hidden="true" />}
          </div>
        ))}
      </div>
    </div>
  );
}

function CaseBlock({ label, text }: { label: string; text: string }) {
  return (<div><p className="text-sm font-bold text-white">{label}</p><p className="mt-1 text-sm leading-6 text-white/50">{text}</p></div>);
}

function ProjectAction({ href, icon, children, ariaLabel, ariaExpanded, ariaControls, active = false, onClick }: { href?: string; icon: ReactNode; children: ReactNode; ariaLabel?: string; ariaExpanded?: boolean; ariaControls?: string; active?: boolean; onClick?: () => void }) {
  const cn = `group/action inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border px-3 py-2 text-xs font-semibold uppercase transition duration-300 ${active ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--ink-contrast)] shadow-[0_0_25px_rgba(0,229,255,0.2)]" : "border-white/8 bg-white/[0.04] text-white/60 hover:border-white/20 hover:text-white"}`;
  if (href) return (<a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} className={cn}>{icon}{children}<ArrowUpRight size={13} className="transition-transform group-hover/action:-translate-y-0.5 group-hover/action:translate-x-0.5" /></a>);
  return (<button type="button" onClick={onClick} aria-label={ariaLabel} aria-expanded={ariaExpanded} aria-controls={ariaControls} className={cn}>{icon}{children}</button>);
}

function VisualBadge({ icon, label }: { icon: ReactNode; label: string }) {
  return (<span className="inline-flex min-h-9 items-center gap-2 rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-[0.68rem] font-bold uppercase text-white/70 backdrop-blur-xl">{icon}{label}</span>);
}

function MetaPill({ children }: { children: ReactNode }) {
  return (<span className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-1.5 text-[0.68rem] font-semibold uppercase text-white/50 font-[family-name:var(--mono-font)]">{children}</span>);
}

function handlePointerMove(e: PointerEvent<HTMLElement>) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  card.style.setProperty("--spotlight-x", `${x.toFixed(2)}%`);
  card.style.setProperty("--spotlight-y", `${y.toFixed(2)}%`);
  card.style.setProperty("--tilt-x", `${((50 - y) * 0.045).toFixed(2)}deg`);
  card.style.setProperty("--tilt-y", `${((x - 50) * 0.055).toFixed(2)}deg`);
}

function handlePointerLeave(e: PointerEvent<HTMLElement>) {
  const card = e.currentTarget;
  card.style.setProperty("--spotlight-x", "50%");
  card.style.setProperty("--spotlight-y", "20%");
  card.style.setProperty("--tilt-x", "0deg");
  card.style.setProperty("--tilt-y", "0deg");
}

function layoutClass(size: Project["visual"]["size"], index: number) {
  if (size === "featured") return "lg:col-span-7";
  if (index === 1) return "lg:col-span-5";
  if (index === 4) return "lg:col-span-12";
  return "lg:col-span-6";
}

function slugify(v: string) {
  return v.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
