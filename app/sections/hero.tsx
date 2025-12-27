"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { FiArrowRight, FiGithub, FiDownload } from "react-icons/fi"; // Optional: Install react-icons

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "Full Stack Web Apps",
    "Scalable Solutions",
    "Modern UI/UX Design",
    "Performant APIs"
  ];

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    texts[textIndex].slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, texts[textIndex].length, {
      type: "tween",
      duration: 1.5,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
      onUpdate(latest) {
        if (latest === 0) {
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      },
    });
    return controls.stop;
  }, [textIndex]);

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 relative overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500">
      
      {/* 1. LAYERED BACKGROUND DECOR */}
      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v2H20v-2h16zm0-5v2H20v-2h16zm18 11v2H6v-2h48zm0-5v2H6v-2h48zM36 19v2H20v-2h16zm0-5v2H20v-2h16zM36 9v2H20V9h16zm0-5v2H20V4h16z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} 
      />
      
      {/* Animated Glows */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" 
      />

      {/* 2. MAIN CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center z-10 max-w-4xl"
      >
        {/* Status Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Available for new projects
        </motion.div>

        <h1 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
          Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Chal Dev</span>
        </h1>

        <div className="text-xl md:text-4xl font-medium text-slate-600 dark:text-slate-400 min-h-[60px] flex items-center justify-center gap-3">
          <span className="hidden sm:inline">Expert in building</span>
          <div className="relative">
            <motion.span className="text-slate-900 dark:text-white font-bold">
              {displayText}
            </motion.span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-[3px] h-6 md:h-9 bg-blue-600 ml-1 align-middle"
            />
          </div>
        </div>

        <p className="mt-6 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Turning complex problems into elegant, high-performing web experiences with 
          modern technologies and user-centric design.
        </p>

        {/* 3. CALL TO ACTION BUTTONS */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#projects" className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-xl shadow-blue-500/25 flex items-center gap-2">
            View My Work
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <div className="flex gap-4">
            <a href="#contact" className="px-8 py-4 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-all flex items-center gap-2">
              Contact Me
            </a>
            <button className="p-4 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-all shadow-sm" title="Download CV">
              <FiDownload />
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* 4. SCROLL INDICATOR */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-slate-300 dark:border-slate-700 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-blue-600 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}