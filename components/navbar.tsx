"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useTransform, useMotionValue } from "framer-motion";
import { Moon, Sun, Menu, X, Rocket, Terminal, Command, Zap } from "lucide-react";

export default function NavbarElite() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = ["About", "Skills", "Projects", "Experience", "Contact"];

  // Framer Motion Values for high-performance scroll tracking
  const { scrollY } = useScroll();
  const scrollYProgress = useSpring(useScroll().scrollYProgress, {
    stiffness: 280,
    damping: 18, // Extra "bouncy" premium feel
  });

  // Adaptive Styling: The bar gets "denser" as you scroll
  const navWidth = useTransform(scrollY, [0, 200], ["100%", "90%"]);
  const navPadding = useTransform(scrollY, [0, 200], ["1.5rem", "0.75rem"]);
  const navShadow = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0,0,0,0)", "rgba(0,0,0,0.1)"]
  );

  useEffect(() => {
    setMounted(true);
    const theme = localStorage.getItem("theme");
    if (theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }

    const handleScroll = () => {
      const sections = ["hero", ...navItems.map(i => i.toLowerCase())];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", darkMode ? "light" : "dark");
  };

  if (!mounted) return null;

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-6 pointer-events-none flex justify-center">
      <motion.div 
        style={{ width: navWidth, padding: navPadding, boxShadow: navShadow }}
        className="max-w-6xl w-full relative pointer-events-auto transition-all duration-500"
      >
        {/* PROGRESS FILAMENT: Now with a glow effect */}
        <motion.div
          className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent origin-center z-50 opacity-50"
          style={{ scaleX: scrollYProgress }}
        />

        <div className="flex justify-between items-center bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl border border-white/20 dark:border-slate-800/50 rounded-[2rem] px-6 py-3 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
          
          {/* BRAND: Using a Command icon for "Developer" vibes */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2 mr-4"
          >
            <div className="w-9 h-9 rounded-xl bg-slate-900 dark:bg-white flex items-center justify-center transition-all group-hover:rotate-[15deg] group-hover:scale-110">
              <Command size={18} className="text-white dark:text-slate-900" strokeWidth={2.5} />
            </div>
            <span className="text-xl font-black tracking-tighter text-slate-900 dark:text-white hidden sm:block">
              CHAL<span className="text-blue-500 italic">.</span>
            </span>
          </button>

          {/* DESKTOP NAV: The "Liquid Pill" */}
          <div className="hidden md:flex items-center bg-slate-100/50 dark:bg-slate-800/40 p-1.5 rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
            {navItems.map((item) => {
              const id = item.toLowerCase();
              const isActive = activeSection === id;
              return (
                <button 
                  key={item} 
                  onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
                  className={`relative px-5 py-2 text-[11px] font-black uppercase tracking-[0.15em] transition-all duration-500 ${
                    isActive ? "text-white" : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"
                  }`}
                >
                  <span className="relative z-10">{item}</span>
                  {isActive && (
                    <motion.div 
                      layoutId="liquidPill"
                      className="absolute inset-0 bg-slate-900 dark:bg-blue-600 rounded-xl shadow-lg shadow-blue-500/20"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* ACTION CLUSTER */}
          <div className="flex items-center gap-3 ml-4">
            <button 
              onClick={toggleTheme}
              className="group p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-blue-500 transition-all"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={darkMode ? "dark" : "light"}
                  initial={{ y: 10, opacity: 0, rotate: 45 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: -10, opacity: 0, rotate: -45 }}
                  transition={{ duration: 0.2 }}
                >
                  {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                </motion.div>
              </AnimatePresence>
            </button>

            <button className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs uppercase tracking-widest hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all">
              Resume <Zap size={14} fill="currentColor" />
            </button>

            {/* MOBILE MENU TRIGGER */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* MOBILE OVERLAY: Bento Style */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 bg-slate-950/20 z-[-1] md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-white dark:bg-slate-900 p-8 pt-24 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item, i) => (
                  <motion.button 
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => {
                       document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                       setIsOpen(false);
                    }}
                    className="flex items-center justify-between p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 text-xl font-black text-slate-900 dark:text-white"
                  >
                    {item}
                    <Rocket size={20} className="text-blue-500" />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}