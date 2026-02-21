"use client";

import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";
import {
  SiDocker,
  SiFramer,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const rotatingRoles = [
  "Full-Stack Product Engineer",
  "Interaction-Focused Frontend Builder",
  "Performance-Driven System Thinker",
];

const techItems = [
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "React", Icon: SiReact },
  { name: "Framer Motion", Icon: SiFramer },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Docker", Icon: SiDocker },
];

const highlights = ["Available for 2026 projects", "Remote-ready", "Fast delivery cycles"];

export default function HeroPro() {
  const sectionRef = useRef<HTMLElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 220, damping: 28, mass: 0.45 });
  const smoothY = useSpring(mouseY, { stiffness: 220, damping: 28, mass: 0.45 });
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${smoothX}px ${smoothY}px, rgba(14, 165, 233, 0.24), transparent 72%)`;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const panelY = useTransform(scrollYProgress, [0, 1], [0, -56]);
  const badgeRotate = useTransform(scrollYProgress, [0, 1], [0, 8]);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    const timer = window.setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % rotatingRoles.length);
    }, 2400);
    return () => window.clearInterval(timer);
  }, [prefersReducedMotion]);

  const handlePointerMove = (event: React.MouseEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - bounds.left);
    mouseY.set(event.clientY - bounds.top);
  };

  const marqueeItems = [...techItems, ...techItems, ...techItems];

  return (
    <section
      id="hero"
      ref={sectionRef}
      onMouseMove={handlePointerMove}
      className="relative min-h-screen overflow-hidden bg-slate-50 px-6 pb-24 pt-36 transition-colors duration-700 dark:bg-slate-950 md:px-10 lg:px-12"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_78%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_1px,transparent_1px)]" />
      <motion.div
        aria-hidden
        style={prefersReducedMotion ? undefined : { background: spotlight }}
        className="pointer-events-none absolute inset-0"
      />
      <div className="pointer-events-none absolute -left-16 top-24 h-72 w-72 rounded-full bg-[#0EA5E9]/20 blur-[110px] dark:bg-[#0EA5E9]/12" />
      <div className="pointer-events-none absolute -right-20 top-20 h-[26rem] w-[26rem] rounded-full bg-[#135DCC]/16 blur-[120px]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-16 lg:gap-20">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-slate-500 shadow-lg backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-400"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              Open for remote work
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mb-6 text-xs font-bold uppercase tracking-[0.38em] text-slate-500 dark:text-slate-400"
            >
              Chala Gobena • Portfolio 2026
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.14 }}
              className="text-5xl font-black leading-[0.94] tracking-tight text-slate-900 dark:text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            >
              Interfaces that
              <span className="block bg-gradient-to-r from-[#135DCC] via-[#0EA5E9] to-[#D19A2A] bg-clip-text text-transparent">
                feel alive.
              </span>
            </motion.h1>

            <div className="mt-6 h-8 overflow-hidden sm:h-10">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIndex}
                  initial={{ y: 22, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -22, opacity: 0 }}
                  transition={{ duration: 0.32 }}
                  className="text-sm font-mono tracking-tight text-slate-600 dark:text-slate-300 sm:text-base md:text-lg"
                >
                  &lt; {rotatingRoles[roleIndex]} /&gt;
                </motion.p>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-7 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg"
            >
              I design and ship modern web products with premium motion, clean architecture, and real performance
              gains. Built for teams that care about quality and velocity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition-all hover:-translate-y-1 hover:bg-[#135DCC] dark:bg-white dark:text-slate-900 dark:hover:bg-[#0EA5E9] dark:hover:text-white"
              >
                Explore Work
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-7 py-4 text-sm font-bold text-slate-700 transition-all hover:border-[#135DCC] hover:text-[#135DCC] dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:text-[#7CC6FF]"
              >
                Resume <FiDownload />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="https://github.com/CHAL7777"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white/85 text-slate-600 transition-colors hover:text-[#135DCC] dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/chala-gobena-01a22b346"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white/85 text-slate-600 transition-colors hover:text-[#135DCC] dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <div className="flex flex-wrap gap-2 pl-0 sm:pl-2">
                {highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[11px] font-semibold text-slate-500 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            style={prefersReducedMotion ? undefined : { y: panelY }}
            className="relative lg:col-span-5"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/80 p-7 shadow-[0_30px_80px_-30px_rgba(2,6,23,0.28)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/65">
              <div className="absolute inset-0 bg-[radial-gradient(540px_circle_at_100%_0%,rgba(19,93,204,0.2),transparent_70%)]" />
              <div className="relative z-10 space-y-6">
                <motion.div
                  style={prefersReducedMotion ? undefined : { rotate: badgeRotate }}
                  className="inline-flex items-center gap-2 rounded-full border border-[#135DCC]/20 bg-[#135DCC]/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-[#135DCC] dark:text-[#7CC6FF]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0EA5E9]/80" />
                  Live Mode
                </motion.div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                    Current Focus
                  </p>
                  <h3 className="mt-2 text-2xl font-black leading-tight text-slate-900 dark:text-white">
                    High-converting product interfaces with measurable speed improvements.
                  </h3>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <StatCard label="Avg. Lighthouse" value="95+" />
                  <StatCard label="Delivery Cycle" value="1-2w" />
                  <StatCard label="Core Stack" value="TS/Next" />
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/85 p-4 dark:border-slate-800 dark:bg-slate-950/70">
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                    Workflow
                  </p>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                    Discovery → Architecture → Motion System → Build → Performance QA.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/70 py-4 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/55"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-950" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-slate-50 to-transparent dark:from-slate-950" />
          <motion.div
            animate={prefersReducedMotion ? undefined : { x: ["0%", "-33.333%"] }}
            transition={prefersReducedMotion ? undefined : { duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex w-max items-center gap-10 px-4"
          >
            {marqueeItems.map((item, index) => (
              <div key={`${item.name}-${index}`} className="flex items-center gap-2 text-slate-500 dark:text-slate-300">
                <item.Icon className="text-lg" />
                <span className="text-xs font-bold uppercase tracking-[0.14em]">{item.name}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white/80 p-3 text-center dark:border-slate-800 dark:bg-slate-900/80">
      <p className="text-[9px] font-black uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">{label}</p>
      <p className="mt-1 text-sm font-black text-slate-900 dark:text-white">{value}</p>
    </div>
  );
}
