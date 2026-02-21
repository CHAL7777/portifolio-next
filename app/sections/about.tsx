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
import Image from "next/image";
import { useRef } from "react";
import { Compass, Gauge, Layers3, MapPin, Rocket, ShieldCheck, Sparkles } from "lucide-react";

const principles = [
  {
    title: "Performance First",
    description: "Fast loading, responsive interactions, and smooth motion are treated as baseline product quality.",
    Icon: Gauge,
  },
  {
    title: "System Thinking",
    description: "I build reusable structures so teams can scale features without rewriting foundations.",
    Icon: Layers3,
  },
  {
    title: "Product Focus",
    description: "Each interface decision is tied to user clarity, conversion goals, and measurable impact.",
    Icon: Compass,
  },
];

const milestones = [
  { year: "2023", label: "Started coding seriously" },
  { year: "2024", label: "Shipped first full-stack apps" },
  { year: "2025", label: "Focused on performance and DX" },
  { year: "2026", label: "Building premium product systems" },
];

const stats = [
  { value: "20+", label: "Projects built" },
  { value: "95+", label: "Lighthouse target" },
  { value: "12h", label: "Avg response window" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const ambientY = useTransform(scrollYProgress, [0, 1], [120, -90]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -52]);
  const badgeRotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const springTiltX = useSpring(tiltX, { stiffness: 220, damping: 22, mass: 0.55 });
  const springTiltY = useSpring(tiltY, { stiffness: 220, damping: 22, mass: 0.55 });
  const spotlight = useMotionTemplate`radial-gradient(340px circle at ${glowX}% ${glowY}%, rgba(19, 93, 204, 0.24), transparent 74%)`;

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !portraitRef.current) {
      return;
    }
    const bounds = portraitRef.current.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    tiltX.set((0.5 - y) * 10);
    tiltY.set((x - 0.5) * 10);
    glowX.set(x * 100);
    glowY.set(y * 100);
  };

  const handlePointerLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
    glowX.set(50);
    glowY.set(50);
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-white px-6 py-32 transition-colors duration-500 dark:bg-slate-950 md:px-10 lg:px-12"
    >
      <motion.div
        aria-hidden
        style={prefersReducedMotion ? undefined : { y: ambientY }}
        className="pointer-events-none absolute -left-24 top-16 h-[520px] w-[520px] rounded-full bg-[#0EA5E9]/12 blur-[130px]"
      />
      <div className="pointer-events-none absolute -right-24 bottom-[-5%] h-[520px] w-[520px] rounded-full bg-[#135DCC]/10 blur-[130px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_34%,transparent_76%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_1px,transparent_1px)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-start gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              className="mb-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#135DCC] dark:text-[#7CC6FF]"
            >
              <Sparkles size={14} />
              About Me
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-black leading-[1.06] tracking-tight text-slate-900 dark:text-white md:text-6xl"
            >
              Building products where
              <span className="block bg-gradient-to-r from-[#135DCC] via-[#0EA5E9] to-[#D19A2A] bg-clip-text text-transparent">
                design meets engineering.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: 0.08 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg"
            >
              I&apos;m a full-stack developer based in Ethiopia, focused on turning ideas into robust web products.
              My process combines thoughtful UX, scalable code, and performance-minded delivery.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.14 }}
              className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400"
            >
              I care about creating interfaces that feel effortless while staying maintainable for teams and future
              features.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ delay: 0.18 }}
              className="mt-10 grid gap-3 sm:grid-cols-3"
            >
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-200 bg-white/80 p-4 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/65"
                >
                  <p className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">{item.value}</p>
                  <p className="mt-1 text-[10px] font-black uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ delay: 0.22 }}
              className="mt-10 grid gap-4 md:grid-cols-3"
            >
              {principles.map((principle, index) => (
                <motion.article
                  key={principle.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ delay: index * 0.07 }}
                  whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                  className="rounded-2xl border border-slate-200 bg-white/75 p-5 transition-colors hover:border-[#135DCC]/40 dark:border-slate-800 dark:bg-slate-900/65"
                >
                  <principle.Icon size={18} className="mb-3 text-[#135DCC] dark:text-[#7CC6FF]" />
                  <h3 className="text-sm font-black uppercase tracking-[0.12em] text-slate-900 dark:text-white">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {principle.description}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </div>

          <div className="relative lg:col-span-5">
            <motion.div
              ref={portraitRef}
              onPointerMove={handlePointerMove}
              onPointerLeave={handlePointerLeave}
              style={
                prefersReducedMotion
                  ? { y: portraitY }
                  : {
                      y: portraitY,
                      rotateX: springTiltX,
                      rotateY: springTiltY,
                      transformPerspective: 1200,
                    }
              }
              className="group relative aspect-[4/5] overflow-hidden rounded-[2.4rem] border border-slate-200/70 shadow-[0_30px_80px_-35px_rgba(2,6,23,0.35)] dark:border-slate-800"
            >
              <motion.div
                aria-hidden
                style={prefersReducedMotion ? undefined : { background: spotlight }}
                className="pointer-events-none absolute inset-0 z-[2] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <Image
                src="/img/chala.jpg"
                alt="Chala Gobena portrait"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-108"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent opacity-75" />

              <div className="absolute bottom-8 left-8 z-10 rounded-2xl border border-white/20 bg-white/10 p-4 text-white backdrop-blur-md">
                <p className="text-[10px] font-black uppercase tracking-[0.14em] text-white/70">Location</p>
                <p className="mt-1 flex items-center gap-2 text-sm font-bold">
                  <MapPin size={14} />
                  Addis Ababa, Ethiopia
                </p>
              </div>
            </motion.div>

            <motion.div
              style={prefersReducedMotion ? undefined : { rotate: badgeRotate }}
              className="absolute -right-5 -top-6 z-20 hidden rounded-2xl bg-[#135DCC] px-4 py-3 text-white shadow-2xl shadow-[#135DCC]/32 md:block"
            >
              <p className="text-[10px] font-black uppercase tracking-[0.16em]">Current Focus</p>
              <p className="mt-1 text-sm font-bold">Shipping quality fast</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.55 }}
              transition={{ delay: 0.12 }}
              className="mt-6 rounded-2xl border border-slate-200 bg-white/80 p-5 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/65"
            >
              <p className="mb-3 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                <Rocket size={13} />
                Growth Timeline
              </p>
              <div className="space-y-3">
                {milestones.map((item) => (
                  <div key={item.year} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 rounded-md bg-[#135DCC]/10 px-2 py-0.5 text-[10px] font-black uppercase tracking-[0.14em] text-[#135DCC] dark:text-[#7CC6FF]">
                      {item.year}
                    </span>
                    <span className="font-medium text-slate-600 dark:text-slate-300">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white/75 p-5 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/60"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400">
            <ShieldCheck size={12} />
            Type-safe architecture
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400">
            Product quality workflow
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400">
            Clear communication
          </span>
        </motion.div>
      </div>
    </section>
  );
}
