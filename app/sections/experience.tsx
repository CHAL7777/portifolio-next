"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  BadgeCheck,
  Briefcase,
  CalendarRange,
  ChartNoAxesCombined,
  Globe,
  GraduationCap,
  MapPin,
  Sparkles,
} from "lucide-react";

interface ExperienceMetric {
  label: string;
  value: string;
}

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  impact: string[];
  metrics: ExperienceMetric[];
  stack: string[];
  active: boolean;
}

const experienceData: ExperienceItem[] = [
  {
    role: "Full Stack Developer",
    company: "Open Source",
    period: "2024 — Present",
    location: "Remote",
    summary:
      "Building performance-focused web products with scalable architecture, reusable UI systems, and secure integrations.",
    impact: [
      "Improved perceived speed through interaction and loading optimization.",
      "Delivered reusable modules to reduce feature development time.",
      "Maintained clean, type-safe codebases for long-term maintainability.",
    ],
    metrics: [
      { label: "Lighthouse", value: "98/100" },
      { label: "Bundle", value: "-30%" },
      { label: "Features", value: "12+" },
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
    active: true,
  },
  {
    role: "Frontend Developer Intern",
    company: "Tech Solutions Inc.",
    period: "2025 — 2026",
    location: "Addis Ababa, ET",
    summary:
      "Collaborated with design and product teams to ship responsive interfaces and modernize UI architecture.",
    impact: [
      "Refined responsive behavior across key pages and components.",
      "Enhanced loading flow with better image strategy and states.",
      "Helped transition legacy logic to modern React patterns.",
    ],
    metrics: [
      { label: "Core Vitals", value: "+25%" },
      { label: "Coverage", value: "85%" },
      { label: "PRs", value: "50+" },
    ],
    stack: ["React", "JavaScript", "Figma", "Git"],
    active: false,
  },
];

const languages = [
  { name: "English", level: "Professional", score: 90 },
  { name: "Afaan Oromoo", level: "Native", score: 100 },
  { name: "Amharic", level: "Native", score: 100 },
];

const careerStats = [
  { label: "Years Building", value: "3+" },
  { label: "Products", value: "20+" },
  { label: "Main Focus", value: "Web UX" },
];

export default function ExperiencePro() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 30%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 220, damping: 28, mass: 0.35 });
  const sideY = useTransform(scrollYProgress, [0, 1], [0, -24]);

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-slate-50 py-32 scroll-mt-24 dark:bg-slate-950"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_78%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute -left-20 top-0 h-[28rem] w-[28rem] rounded-full bg-cyan-500/8 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 top-[20%] h-[28rem] w-[28rem] rounded-full bg-blue-500/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          className="mb-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400"
        >
          <Sparkles size={14} />
          Experience
        </motion.p>

        <div className="mb-14 grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-black leading-[1.06] tracking-tight text-slate-900 dark:text-white md:text-6xl"
            >
              Experience shaped by
              <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
                real product delivery.
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.08 }}
              className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg"
            >
              From open-source builds to collaborative product work, I focus on shipping interfaces that are usable,
              maintainable, and fast.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ delay: 0.12 }}
            className="grid gap-3 sm:grid-cols-3 lg:col-span-4 lg:grid-cols-1"
          >
            {careerStats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/65"
              >
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                  {item.label}
                </p>
                <p className="mt-1 text-xl font-black tracking-tight text-slate-900 dark:text-white">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div ref={timelineRef} className="relative ml-3 space-y-12">
              <div className="absolute bottom-0 left-0 top-0 w-[2px] rounded-full bg-slate-200 dark:bg-slate-800" />
              <motion.div
                aria-hidden
                style={prefersReducedMotion ? undefined : { scaleY: progress, transformOrigin: "top" }}
                className="absolute left-0 top-0 h-full w-[2px] rounded-full bg-gradient-to-b from-blue-500 via-cyan-500 to-indigo-500"
              />

              {experienceData.map((item, index) => (
                <ExperienceCard
                  key={item.role}
                  item={item}
                  index={index}
                  prefersReducedMotion={!!prefersReducedMotion}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              style={prefersReducedMotion ? undefined : { y: sideY }}
              className="sticky top-32 space-y-8"
            >
              <motion.article
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900"
              >
                <p className="mb-4 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.16em] text-blue-600 dark:text-blue-400">
                  <GraduationCap size={13} />
                  Education
                </p>
                <h3 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                  B.Sc. Software Engineering
                </h3>
                <p className="mt-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
                  Haramaya University • 2023 — 2028
                </p>

                <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/70">
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                    Academic Standing
                  </p>
                  <p className="mt-1 text-2xl font-black text-slate-900 dark:text-white">3.6 / 4.0 CGPA</p>
                </div>
              </motion.article>

              <motion.article
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 }}
                viewport={{ once: true, amount: 0.45 }}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <p className="mb-6 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                  <Globe size={13} />
                  Languages
                </p>
                <div className="space-y-6">
                  {languages.map((language, index) => (
                    <div key={language.name}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="font-bold text-slate-800 dark:text-slate-200">{language.name}</span>
                        <span className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">
                          {language.level}
                        </span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800/60">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${language.score}%` }}
                          viewport={{ once: true, amount: 0.7 }}
                          transition={{ duration: 1, delay: index * 0.08, ease: "circOut" }}
                          className="h-full rounded-full bg-blue-600"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.article>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  item,
  index,
  prefersReducedMotion,
}: {
  item: ExperienceItem;
  index: number;
  prefersReducedMotion: boolean;
}) {
  return (
    <article className="group relative pl-10 md:pl-14">
      <div className="absolute -left-[9px] top-6 h-4 w-4 rounded-full bg-slate-200 ring-4 ring-slate-50 transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-600 dark:bg-slate-800 dark:ring-slate-950" />

      <motion.div
        initial={{ opacity: 0, x: -18 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        whileHover={prefersReducedMotion ? undefined : { y: -3 }}
        className="relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white p-7 shadow-lg transition-all hover:border-blue-500/35 hover:shadow-2xl hover:shadow-blue-500/10 dark:border-slate-800 dark:bg-slate-900 md:p-8"
      >
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(460px_circle_at_100%_0%,rgba(56,189,248,0.16),transparent_70%)]" />
        <div className="relative z-10">
          <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">{item.role}</h3>
              <p className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                <span className="inline-flex items-center gap-1.5 font-bold text-slate-700 dark:text-slate-200">
                  <Briefcase size={14} className="text-blue-500" />
                  {item.company}
                </span>
                <span className="inline-flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                  <MapPin size={14} />
                  {item.location}
                </span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-100 px-3 py-1 text-[10px] font-black uppercase tracking-[0.13em] text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                <CalendarRange size={12} />
                {item.period}
              </span>
              {item.active && (
                <span className="inline-flex items-center gap-1 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-emerald-500">
                  <BadgeCheck size={11} />
                  Active
                </span>
              )}
            </div>
          </div>

          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 md:text-base">{item.summary}</p>

          <ul className="mt-5 space-y-2">
            {item.impact.map((point) => (
              <li key={point} className="text-sm text-slate-600 dark:text-slate-400">
                • {point}
              </li>
            ))}
          </ul>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {item.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-slate-100 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-800/40"
              >
                <p className="text-lg font-black tracking-tight text-slate-900 dark:text-white">{metric.value}</p>
                <p className="mt-0.5 text-[9px] font-black uppercase tracking-[0.14em] text-slate-400">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {item.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-slate-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-400"
              >
                {tech}
              </span>
            ))}
            <span className="inline-flex items-center gap-1 rounded-md border border-blue-500/20 bg-blue-500/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-blue-500">
              <ChartNoAxesCombined size={11} />
              Impact
            </span>
          </div>
        </div>
      </motion.div>
    </article>
  );
}
