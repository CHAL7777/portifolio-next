"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform, animate, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPostgresql, SiGraphql, SiDocker } from "react-icons/si";

// --- 1. MAGNETIC EFFECT WRAPPER ---
// High-end portfolios use magnetic elements to guide user attention
function MagneticWrapper({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * 0.35); // Strength of the pull
    y.set((clientY - centerY) * 0.35);
  };

  const reset = () => { x.set(0); y.set(0); };

  return (
    <motion.div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={reset} style={{ x: springX, y: springY }}>
      {children}
    </motion.div>
  );
}

// --- 2. TECH MARQUEE (Optimized) ---
const TechMarquee = () => {
  const icons = [SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPostgresql, SiGraphql, SiDocker];
  return (
    <div className="group relative mt-24 w-full overflow-hidden py-4">
      <div className="absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent" />
      <div className="absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent" />
      
      <motion.div 
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      >
        {[...Array(4)].map((_, groupIdx) => (
          <div key={groupIdx} className="flex gap-12 items-center">
            {icons.map((Icon, i) => (
              <div key={i} className="flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
                <Icon className="text-3xl" />
                <span className="text-sm font-bold tracking-widest hidden md:block">SKILL_0{i+1}</span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function HeroPro() {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["Full Stack Architect", "UI/UX Engineer", "System Designer"];
  
  // Spotlight with Spring Physics for smoothness
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { damping: 20, stiffness: 200 });
  const smoothMouseY = useSpring(mouseY, { damping: 20, stiffness: 200 });

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-700"
    >
      {/* 1. PROFESSIONAL BACKGROUND DESIGN */}
      <div className="absolute inset-0 z-0">
        {/* Fine-grained Mesh Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
        
        {/* Dynamic Interactive Spotlight */}
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-500"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                450px circle at ${smoothMouseX}px ${smoothMouseY}px,
                rgba(59, 130, 246, 0.08),
                transparent 80%
              )
            `,
          }}
        />
      </div>

      {/* 2. MAIN CONTENT AREA */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-20 w-full max-w-6xl flex flex-col items-center"
      >
        {/* Availability Pill */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="group cursor-pointer mb-12 flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 px-4 py-1.5 backdrop-blur-xl shadow-xl shadow-blue-500/5 transition-all hover:border-blue-500/30"
        >
          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Available for Remote Work</span>
        </motion.div>

        {/* Headline with Staggered Character Animation */}
        <h1 className="text-center text-6xl md:text-9xl font-black tracking-tight text-slate-900 dark:text-white leading-[0.9] mb-8">
          Crafting <br />
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-blue-600 to-indigo-700 dark:from-blue-400 dark:to-indigo-500 italic px-2">
            digital
          </span>
          impact.
        </h1>

        {/* Dynamic Role Switcher */}
        <div className="h-8 mb-12 overflow-hidden text-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={textIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              onAnimationComplete={() => {
                setTimeout(() => setTextIndex((prev) => (prev + 1) % texts.length), 2000);
              }}
              className="text-lg md:text-xl font-mono tracking-tighter text-slate-500"
            >
               &lt; {texts[textIndex]} /&gt;
            </motion.p>
          </AnimatePresence>
        </div>

        {/* 3. CTA & SOCIALS */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <MagneticWrapper>
            <a href="#projects" className="flex items-center gap-3 rounded-2xl bg-slate-950 dark:bg-white px-10 py-5 text-white dark:text-slate-950 font-bold shadow-2xl transition-transform hover:scale-105 active:scale-95">
              Launch Portfolio <FiArrowRight />
            </a>
          </MagneticWrapper>

          <div className="flex items-center gap-3">
             <MagneticWrapper>
                <button className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:text-blue-500 transition-colors">
                  <FiGithub size={22} />
                </button>
             </MagneticWrapper>
             <MagneticWrapper>
                <button className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:text-blue-500 transition-colors">
                  <FiLinkedin size={22} />
                </button>
             </MagneticWrapper>
             <MagneticWrapper>
                <a href="/resume.pdf" className="flex items-center gap-2 rounded-2xl border border-slate-200 dark:border-slate-800 px-6 py-4 font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all">
                  <FiDownload /> CV
                </a>
             </MagneticWrapper>
          </div>
        </div>
      </motion.div>

      {/* 4. INFINITE SKILLS MARQUEE */}
      <TechMarquee />

      {/* Floating Design Elements */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden xl:block">
        <p className="text-[10px] font-mono vertical-text tracking-[0.5em] text-slate-300 dark:text-slate-800 uppercase">Est. 2024 / Portfolio</p>
      </div>
    </section>
  );
}