"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useMemo, useRef } from "react";
import { ArrowUpRight, Compass, Sparkles, Wrench } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiDocker,
  SiFigma,
  SiFramer,
  SiGithub,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

interface SkillItem {
  name: string;
  level: number;
  icon: IconType;
  color: string;
}

interface SkillGroup {
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  glow: string;
  skills: SkillItem[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Systems",
    subtitle: "Interaction + UI",
    description: "Component architecture, motion-driven interfaces, and responsive product workflows.",
    gradient: "from-[#135DCC] via-[#0EA5E9] to-[#14B8A6]",
    glow: "rgba(14, 165, 233, 0.22)",
    skills: [
      { name: "Next.js", level: 90, icon: SiNextdotjs, color: "#94A3B8" },
      { name: "React", level: 92, icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", level: 88, icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind", level: 90, icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Framer Motion", level: 86, icon: SiFramer, color: "#0055FF" },
    ],
  },
  {
    title: "Backend + Data",
    subtitle: "APIs + Persistence",
    description: "Reliable APIs, structured schemas, and practical data modeling for production use.",
    gradient: "from-[#0F766E] via-[#14B8A6] to-[#0284C7]",
    glow: "rgba(20, 184, 166, 0.22)",
    skills: [
      { name: "Node.js", level: 82, icon: SiNodedotjs, color: "#339933" },
      { name: "PostgreSQL", level: 80, icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", level: 76, icon: SiMongodb, color: "#47A248" },
      { name: "Prisma", level: 84, icon: SiPrisma, color: "#2D3748" },
      { name: "Python", level: 72, icon: SiPython, color: "#3776AB" },
    ],
  },
  {
    title: "Product Delivery",
    subtitle: "Workflow + Shipping",
    description: "From design handoff to deployment, optimized for quality and team velocity.",
    gradient: "from-[#B9770E] via-[#D19A2A] to-[#0EA5E9]",
    glow: "rgba(209, 154, 42, 0.24)",
    skills: [
      { name: "GitHub", level: 88, icon: SiGithub, color: "#94A3B8" },
      { name: "Docker", level: 76, icon: SiDocker, color: "#2496ED" },
      { name: "Figma", level: 84, icon: SiFigma, color: "#F24E1E" },
      { name: "Vercel", level: 94, icon: SiVercel, color: "#94A3B8" },
    ],
  },
];

export default function SkillsPro() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const ambientY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const titleY = useTransform(scrollYProgress, [0, 1], [16, -18]);

  const allSkills = useMemo(() => skillGroups.flatMap((group) => group.skills), []);
  const strongest = useMemo(
    () => [...allSkills].sort((a, b) => b.level - a.level).slice(0, 6),
    [allSkills]
  );
  const averageLevel = useMemo(
    () => Math.round(allSkills.reduce((sum, skill) => sum + skill.level, 0) / allSkills.length),
    [allSkills]
  );

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative overflow-hidden bg-slate-50 px-6 py-32 scroll-mt-24 dark:bg-slate-950"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[86%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#0EA5E9]/30 to-transparent" />
      <motion.div
        aria-hidden
        style={prefersReducedMotion ? undefined : { y: ambientY }}
        className="pointer-events-none absolute -left-20 top-16 h-[28rem] w-[28rem] rounded-full bg-[#0EA5E9]/12 blur-[130px]"
      />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[30rem] w-[30rem] rounded-full bg-[#135DCC]/12 blur-[140px]" />
      <div className="pointer-events-none absolute right-[10%] top-[15%] h-[20rem] w-[20rem] rounded-full bg-[#D19A2A]/12 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_1px,transparent_1px)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              className="mb-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#135DCC] dark:text-[#7CC6FF]"
            >
              <Sparkles size={14} />
              Skills
            </motion.p>

            <motion.h2
              style={prefersReducedMotion ? undefined : { y: titleY }}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-black leading-[1.06] tracking-tight text-slate-900 dark:text-white md:text-5xl"
            >
              Technical range built for
              <span className="block bg-gradient-to-r from-[#135DCC] via-[#0EA5E9] to-[#D19A2A] bg-clip-text text-transparent">
                product execution.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: 0.08 }}
              className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-400"
            >
              I combine frontend craftsmanship, backend reliability, and delivery-focused tooling to ship complete
              experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ delay: 0.12 }}
              className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1"
            >
              <StatPill label="Skill Groups" value={String(skillGroups.length)} />
              <StatPill label="Average Proficiency" value={`${averageLevel}%`} />
              <StatPill label="Top Stack Focus" value="React + TS" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ delay: 0.16 }}
              className="mt-8 rounded-2xl border border-slate-200 bg-white/80 p-5 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/65"
            >
              <p className="mb-3 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                <Compass size={13} />
                Strengths
              </p>
              <div className="flex flex-wrap gap-2">
                {strongest.map((skill) => (
                  <span
                    key={skill.name}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-slate-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-400"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
              <a
                href="#projects"
                className="mt-5 inline-flex items-center gap-1 text-xs font-black uppercase tracking-[0.13em] text-[#135DCC] transition-colors hover:text-[#0EA5E9] dark:text-[#7CC6FF]"
              >
                See work using these skills
                <ArrowUpRight size={13} />
              </a>
            </motion.div>
          </div>

          <div className="grid gap-6 lg:col-span-8 md:grid-cols-2">
            {skillGroups.map((group, index) => (
              <SkillPanel key={group.title} group={group} index={index} />
            ))}

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.08 }}
              className="md:col-span-2 rounded-[1.8rem] border border-slate-200 bg-white/85 p-6 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/65"
            >
              <p className="mb-4 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                <Wrench size={13} />
                Delivery Principle
              </p>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
                I optimize for the whole lifecycle: planning, implementation, review, deployment, and iteration.
                Strong code quality and predictable delivery are part of the product, not an afterthought.
              </p>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillPanel({ group, index }: { group: SkillGroup; index: number }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);
  const springX = useSpring(x, { stiffness: 190, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 190, damping: 20, mass: 0.5 });
  const glow = useMotionTemplate`radial-gradient(320px circle at ${gx}% ${gy}%, ${group.glow}, transparent 72%)`;

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!panelRef.current || prefersReducedMotion) {
      return;
    }
    const bounds = panelRef.current.getBoundingClientRect();
    const px = (event.clientX - bounds.left) / bounds.width;
    const py = (event.clientY - bounds.top) / bounds.height;
    x.set((px - 0.5) * 10);
    y.set((0.5 - py) * 10);
    gx.set(px * 100);
    gy.set(py * 100);
  };

  const onPointerLeave = () => {
    x.set(0);
    y.set(0);
    gx.set(50);
    gy.set(50);
  };

  return (
    <motion.article
      ref={panelRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ delay: index * 0.08 }}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      style={
        prefersReducedMotion
          ? undefined
          : { rotateX: springY, rotateY: springX, transformPerspective: 1200 }
      }
      className="group relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white/85 p-6 shadow-sm backdrop-blur-xl transition-all duration-500 hover:shadow-xl hover:shadow-[#0EA5E9]/18 dark:border-slate-800 dark:bg-slate-900/65"
    >
      <motion.div
        aria-hidden
        style={prefersReducedMotion ? undefined : { background: glow }}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="relative z-10">
        <div className="mb-5 flex items-start justify-between gap-3">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
              {group.subtitle}
            </p>
            <h3 className="mt-1 text-xl font-black tracking-tight text-slate-900 dark:text-white">
              {group.title}
            </h3>
          </div>
          <span
            className={`rounded-lg bg-gradient-to-r ${group.gradient} px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-white`}
          >
            Core
          </span>
        </div>

        <p className="mb-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{group.description}</p>

        <div className="space-y-4">
          {group.skills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <div key={skill.name}>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Icon style={{ color: skill.color }} className="text-base" />
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{skill.name}</span>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.12em] text-[#135DCC] dark:text-[#7CC6FF]">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800/60">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 1, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    className={`h-full rounded-full bg-gradient-to-r ${group.gradient}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.article>
  );
}

function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/65">
      <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">{label}</p>
      <p className="mt-1 text-xl font-black tracking-tight text-slate-900 dark:text-white">{value}</p>
    </div>
  );
}
