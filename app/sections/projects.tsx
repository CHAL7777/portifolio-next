"use client";

import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import {
  ArrowUpRight,
  ExternalLink,
  FolderOpen,
  GitFork,
  Github,
  Layers,
  Sparkles,
  Star,
} from "lucide-react";
import { useMemo, useRef, useState } from "react";

interface Project {
  id: number;
  title: string;
  summary: string;
  tags: string[];
  image: string;
  liveUrl: string;
  sourceUrl: string;
  stars: number;
  forks: number;
  category: "Full Stack" | "Frontend";
  featured: boolean;
  year: number;
  highlight: string;
}

const projectData: Project[] = [
  {
    id: 1,
    title: "Latest Food Delivery Web App",
    summary:
      "Modern ordering experience with responsive menu flows, polished UI states, and production deployment.",
    tags: ["Next.js", "Tailwind", "Supabase"],
    image: "/docs/latest.png",
    liveUrl: "https://food-delivery-rho-rouge.vercel.app/",
    sourceUrl: "https://github.com/CHAL7777",
    stars: 9,
    forks: 6,
    category: "Full Stack",
    featured: true,
    year: 2026,
    highlight: "Latest release",
  },
  {
    id: 2,
    title: "E-Commerce Dashboard",
    summary:
      "Analytics dashboard for 10k+ daily events with inventory insights, heatmaps, and forecast-ready data views.",
    tags: ["Next.js 14", "TypeScript", "Prisma", "Recharts"],
    image: "/docs/ecco.png",
    liveUrl: "https://eccommercebychal.netlify.app",
    sourceUrl: "https://github.com/CHAL7777",
    stars: 6,
    forks: 6,
    category: "Full Stack",
    featured: true,
    year: 2025,
    highlight: "10k+ daily events",
  },
  {
    id: 3,
    title: "Ethiopian E-book Site",
    summary:
      "Multilingual digital library with clean browsing, online reading, and simple downloads across devices.",
    tags: ["Next.js", "Tailwind", "Supabase"],
    image: "/docs/saas.png",
    liveUrl: "https://ethio-book-site.vercel.app/",
    sourceUrl: "https://github.com/CHAL7777",
    stars: 89,
    forks: 2,
    category: "Full Stack",
    featured: false,
    year: 2025,
    highlight: "Multi-language library",
  },
  {
    id: 4,
    title: "Omnifood Delivery",
    summary:
      "Conversion-focused marketing site tuned for loading performance and smooth interaction patterns.",
    tags: ["HTML5", "Sass", "Vanilla JS"],
    image: "/docs/food.png",
    liveUrl: "https://omnifoodchaldev.netlify.app/",
    sourceUrl: "https://github.com/CHAL7777",
    stars: 45,
    forks: 6,
    category: "Frontend",
    featured: false,
    year: 2024,
    highlight: "98/100 Lighthouse",
  },
  {
    id: 5,
    title: "Coffee Shop Classic",
    summary:
      "No-framework web build focused on fundamentals, semantic markup, and CSS Grid craftsmanship.",
    tags: ["CSS Grid", "HTML", "DOM API"],
    image: "/docs/coffe.png",
    liveUrl: "https://coffebychaldev.netlify.app/",
    sourceUrl: "https://github.com/CHAL7777",
    stars: 9,
    forks: 6,
    category: "Frontend",
    featured: false,
    year: 2023,
    highlight: "No-framework build",
  },
];

const categories = ["All", ...Array.from(new Set(projectData.map((project) => project.category)))];

export default function ProjectsPro() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const headlineY = useTransform(scrollYProgress, [0, 1], [18, -18]);
  const ambientY = useTransform(scrollYProgress, [0, 1], [90, -110]);
  const ambientOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [0.2, 0.36, 0.16]);

  const filteredProjects = useMemo(() => {
    const base =
      activeCategory === "All"
        ? projectData
        : projectData.filter((project) => project.category === activeCategory);

    return [...base].sort((a, b) => {
      const yearDiff = b.year - a.year;
      if (yearDiff !== 0) {
        return yearDiff;
      }
      return Number(b.featured) - Number(a.featured);
    });
  }, [activeCategory]);

  const totalFeatured = useMemo(
    () => projectData.filter((project) => project.featured).length,
    []
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative overflow-hidden bg-slate-50 py-32 dark:bg-[#0B0F19]"
    >
      <motion.div
        aria-hidden
        style={prefersReducedMotion ? undefined : { y: ambientY, opacity: ambientOpacity }}
        className="pointer-events-none absolute right-[-90px] top-[8%] h-[560px] w-[560px] rounded-full bg-[#135DCC]/10 blur-[150px]"
      />
      <div className="pointer-events-none absolute -left-24 bottom-[8%] h-[520px] w-[520px] rounded-full bg-[#D19A2A]/10 blur-[140px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_78%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_1px,transparent_1px)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-16 grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              className="mb-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#135DCC] dark:text-[#7CC6FF]"
            >
              <FolderOpen size={15} />
              Selected Projects
            </motion.p>

            <motion.h2
              style={prefersReducedMotion ? undefined : { y: headlineY }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65 }}
              className="text-4xl font-black leading-[1.05] tracking-tight text-slate-900 dark:text-white md:text-6xl"
            >
              Product work focused on
              <span className="block bg-gradient-to-r from-[#135DCC] via-[#0EA5E9] to-[#D19A2A] bg-clip-text text-transparent">
                speed and craft.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.08 }}
              className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg"
            >
              A curated set of products spanning full-stack platforms and frontend builds, each designed for clean UX
              and performance.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.12 }}
            className="grid gap-3 sm:grid-cols-3 lg:col-span-4 lg:grid-cols-1"
          >
            <InfoPill label="Projects" value={String(projectData.length)} />
            <InfoPill label="Featured" value={String(totalFeatured)} />
            <InfoPill
              label="Latest Year"
              value={String(Math.max(...projectData.map((project) => project.year)))}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <LayoutGroup id="project-filters">
            <div className="flex flex-wrap gap-2 rounded-full border border-slate-200/80 bg-white/80 p-1.5 shadow-sm backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/60">
              {categories.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className="relative rounded-full px-4 py-2 text-sm font-bold"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="active-filter-pill"
                        transition={{ type: "spring", stiffness: 380, damping: 34 }}
                        className="absolute inset-0 rounded-full bg-slate-900 shadow-md dark:bg-white"
                      />
                    )}
                    <span
                      className={`relative z-10 transition-colors ${
                        isActive
                          ? "text-white dark:text-slate-900"
                          : "text-slate-500 hover:text-[#135DCC] dark:text-slate-400 dark:hover:text-[#7CC6FF]"
                      }`}
                    >
                      {category}
                    </span>
                  </button>
                );
              })}
            </div>
          </LayoutGroup>

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
          </p>
        </motion.div>

        <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="https://github.com/CHAL7777"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-black uppercase tracking-[0.12em] text-white transition-all hover:-translate-y-1 hover:bg-[#135DCC] dark:bg-white dark:text-slate-900 dark:hover:bg-[#0EA5E9] dark:hover:text-white"
          >
            Full Archive
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-6 py-3 text-sm font-bold text-slate-700 transition-colors hover:border-[#135DCC] hover:text-[#135DCC] dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:text-[#7CC6FF]"
          >
            Let&apos;s Collaborate
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const prefersReducedMotion = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const springRotateX = useSpring(rotateX, { stiffness: 210, damping: 18, mass: 0.6 });
  const springRotateY = useSpring(rotateY, { stiffness: 210, damping: 18, mass: 0.6 });
  const imageScale = useSpring(1, { stiffness: 180, damping: 18, mass: 0.45 });
  const spotlight = useMotionTemplate`radial-gradient(330px circle at ${glowX}% ${glowY}%, rgba(14, 165, 233, 0.24), transparent 75%)`;

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) {
      return;
    }
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    rotateX.set((0.5 - y) * 11);
    rotateY.set((x - 0.5) * 11);
    glowX.set(x * 100);
    glowY.set(y * 100);
    imageScale.set(1.05);
  };

  const handlePointerLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    glowX.set(50);
    glowY.set(50);
    imageScale.set(1);
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          delay: index * 0.05,
          duration: 0.45,
          ease: [0.16, 1, 0.3, 1],
        },
      }}
      exit={{ opacity: 0, y: 16, scale: 0.98 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={
        prefersReducedMotion
          ? undefined
          : {
              rotateX: springRotateX,
              rotateY: springRotateY,
              transformPerspective: 1200,
            }
      }
      className={`group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-shadow duration-500 hover:shadow-2xl hover:shadow-[#135DCC]/18 dark:border-slate-800 dark:bg-[#111625] ${
        project.featured ? "md:col-span-2" : ""
      }`}
    >
      <motion.div
        aria-hidden
        style={prefersReducedMotion ? undefined : { background: spotlight }}
        className="pointer-events-none absolute inset-0 z-[1] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative h-64 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="absolute left-4 top-4 z-20 flex items-center gap-2">
          <span className="rounded-full border border-white/20 bg-white/90 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-lg backdrop-blur-md dark:bg-slate-950/90 dark:text-white">
            {project.category}
          </span>
          {project.featured && (
            <span className="rounded-full border border-[#D19A2A]/45 bg-[#D19A2A]/20 px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-[#FFF3CC] backdrop-blur-md">
              Featured
            </span>
          )}
        </div>

        <div className="absolute right-4 top-4 z-20 flex gap-2 translate-y-[-10px] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <a
            href={project.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title} source code`}
            className="rounded-full border border-white/20 bg-white/10 p-2.5 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-black"
          >
            <Github size={18} />
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title} live demo`}
            className="rounded-full bg-[#135DCC] p-2.5 text-white shadow-lg shadow-[#135DCC]/30 transition-colors hover:bg-[#0EA5E9]"
          >
            <ExternalLink size={18} />
          </a>
        </div>

        {project.image ? (
          <motion.div style={prefersReducedMotion ? undefined : { scale: imageScale }} className="h-full w-full">
            <Image src={project.image} alt={project.title} fill className="object-cover" />
          </motion.div>
        ) : (
          <div className="flex h-full w-full items-center justify-center text-slate-300 dark:text-slate-700">
            <Layers size={48} />
          </div>
        )}
      </div>

      <div className="relative z-[2] flex flex-grow flex-col p-6 md:p-8">
        <div className="mb-4 flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">
          <span>{project.year}</span>
          <span className="flex items-center gap-1 text-[#135DCC] dark:text-[#7CC6FF]">
            <Sparkles size={13} />
            {project.highlight}
          </span>
        </div>

        <h3 className="mb-2 text-xl font-black text-slate-900 transition-colors group-hover:text-[#135DCC] dark:text-white md:text-2xl">
          {project.title}
        </h3>
        <p className="mb-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400 md:text-base">
          {project.summary}
        </p>

        <div className="mb-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-slate-200 bg-slate-100 px-2.5 py-1 text-[10px] font-bold text-slate-600 dark:border-slate-700/50 dark:bg-slate-800 dark:text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-6 dark:border-slate-800">
          <div className="flex items-center gap-4 text-xs font-bold text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1">
              <Star size={14} className="fill-[#D19A2A] text-[#D19A2A]" />
              {project.stars}
            </span>
            <span className="flex items-center gap-1">
              <GitFork size={14} />
              {project.forks}
            </span>
          </div>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-black text-[#135DCC] transition-all hover:gap-2 dark:text-[#7CC6FF]"
          >
            Case Study <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function InfoPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/75 px-4 py-3 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/65">
      <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">{label}</p>
      <p className="mt-1 text-xl font-black tracking-tight text-slate-900 dark:text-white">{value}</p>
    </div>
  );
}
