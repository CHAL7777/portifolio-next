"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Award, Code2, MapPin, Heart, Target, Zap, Coffee, Music, Terminal } from "lucide-react";

// --- Sub-component: Professional Code Signature ---
const CodeCard = () => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    className="hidden lg:block absolute -left-20 bottom-10 z-30 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700 shadow-2xl font-mono text-[10px] text-blue-300"
  >
    <div className="flex gap-1.5 mb-2">
      <div className="w-2 h-2 rounded-full bg-red-500" />
      <div className="w-2 h-2 rounded-full bg-yellow-500" />
      <div className="w-2 h-2 rounded-full bg-green-500" />
    </div>
    <p><span className="text-purple-400">const</span> developer = {"{"}</p>
    <p className="ml-4">name: <span className="text-emerald-400">&apos;Chal Dev&apos;</span>,</p>
    <p className="ml-4">role: <span className="text-emerald-400">&apos;Full Stack&apos;</span>,</p>
    <p className="ml-4">coffee: <span className="text-emerald-400">true</span>,</p>
    <p className="ml-4">origin: <span className="text-emerald-400">&apos;Ethiopia&apos;</span></p>
    <p>{"}"};</p>
  </motion.div>
);

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const rotateBadge = useTransform(scrollYProgress, [0, 1], [0, 15]);

  const journeyMilestones = [
    { year: "2023", title: "Genesis", description: "Wrote my first line of code." },
    { year: "2024", title: "Evolution", description: "Mastered the MERN stack." },
    { year: "2025", title: "Scaling", description: "Building for the world." },
  ];

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="py-32 px-6 md:px-12 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden relative"
    >
      {/* BACKGROUND DECOR */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: CONTENT (7 Columns) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Pro Label */}
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <Terminal size={14} className="text-blue-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Developer_Profile</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Bridging imagination <br />
                <span className="text-slate-400">& with </span> 
                <span className="relative inline-block text-blue-600">
                  efficient code.
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 338 12" fill="none">
                    <path d="M1 9.5C54.5 4.5 149 -1.5 337 9.5" stroke="#2563eb" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </span>
              </h2>

              <div className="grid sm:grid-cols-2 gap-8 text-slate-600 dark:text-slate-400">
                <p className="text-lg leading-relaxed">
                  I don&apos;t just build websites; I engineer solutions. Based in 
                  <span className="text-slate-900 dark:text-white font-bold italic"> Ethiopia</span>, 
                  I leverage the power of the MERN stack to create seamless user journeys that convert.
                </p>
                <p className="text-lg leading-relaxed">
                  My philosophy is simple: <span className="text-blue-500">Performance</span> is a feature. 
                  Every millisecond saved in loading is a win for the user and the business.
                </p>
              </div>

              {/* STATS BENTO */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {journeyMilestones.map((m, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 transition-colors hover:border-blue-500/50"
                  >
                    <p className="text-3xl font-black text-blue-600 dark:text-blue-400 mb-1">{m.year}</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-2">{m.title}</p>
                    <p className="text-[11px] leading-tight text-slate-500">{m.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT: VISUAL (5 Columns) */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <motion.div 
              style={{ y: yImage }}
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden group shadow-2xl"
            >
              <Image 
                src="/img/chala.jpg" 
                alt="Chal Dev"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Glassmorphic Location Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-10 left-10 flex items-center gap-4">
                 <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                    <MapPin className="text-white" size={24} />
                 </div>
                 <div>
                    <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Currently In</p>
                    <p className="text-white font-bold text-lg">Addis Ababa, ET</p>
                 </div>
              </div>
            </motion.div>

            {/* Code Snippet Floating */}
            <CodeCard />

            {/* Pro Floating Status Badge */}
            <motion.div 
              style={{ rotate: rotateBadge }}
              className="absolute -top-6 -right-6 p-6 rounded-3xl bg-blue-600 text-white shadow-2xl shadow-blue-500/40 z-20 hidden md:block"
            >
              <Award size={32} />
              <div className="mt-4">
                <p className="text-[10px] font-bold opacity-70 uppercase">Vibe</p>
                <p className="font-black text-lg">Always Coding</p>
              </div>
            </motion.div>
          </div>

        </div>

        {/* BOTTOM: INTERESTS BAR */}
        <div className="mt-24 flex flex-wrap justify-center gap-10 opacity-40 hover:opacity-100 transition-opacity">
           {[
             { icon: Music, text: "Jazz & Piano" },
             { icon: Coffee, text: "Specialty Beans" },
             { icon: Target, text: "Problem Obsessed" },
             { icon: Zap, text: "Fast Iteration" }
           ].map((Item, idx) => (
             <div key={idx} className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all cursor-default group">
                <Item.icon size={20} className="group-hover:text-blue-500" />
                <span className="text-sm font-bold tracking-widest uppercase">{Item.text}</span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}