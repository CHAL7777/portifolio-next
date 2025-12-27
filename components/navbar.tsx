"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // 1. UPDATED NAV ITEMS ARRAY
  const navItems = ["About","Skills",  "Projects", "Certificates","Experience","Contact"];

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    setMounted(true);
    const theme = localStorage.getItem("theme");
    if (theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }

    const handleScroll = () => {
      // 2. UPDATED SECTIONS FOR SCROLL TRACKING
      const sections = ["hero", "about", "experience", "skills", "certificates", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    setDarkMode(isDark);
  };

  if (!mounted) return null;

  return (
    <nav className="fixed top-0 left-0 w-full z-[9999] px-4 py-4 pointer-events-none">
      
      <div className="max-w-6xl mx-auto relative group pointer-events-auto">
        <motion.div
          className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-[10001] rounded-full"
          style={{ scaleX }}
        />

        <div className="flex justify-between items-center p-3 md:p-4 rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-white/20 dark:border-slate-800/50 shadow-2xl transition-all duration-500">
          
          <a 
            href="#hero" 
            onClick={(e) => scrollToSection(e, "hero")}
            className="text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent ml-2 hover:scale-105 transition-transform"
          >
            Chal.
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const id = item.toLowerCase();
              const isActive = activeSection === id;
              return (
                <a 
                  key={item} 
                  href={`#${id}`}
                  onClick={(e) => scrollToSection(e, id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive ? "text-blue-600 dark:text-blue-400" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {item}
                  {isActive && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute inset-0 bg-blue-500/10 dark:bg-blue-400/10 rounded-xl -z-10 border border-blue-500/20 dark:border-blue-400/20"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </a>
              );
            })}
            
            <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-800 mx-2" />

            <button 
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-lg hover:rotate-12 transition-all"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button onClick={toggleTheme} className="p-2 text-xl">
               {darkMode ? "☀️" : "🌙"}
            </button>
            <button 
              className="p-2 text-2xl" 
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 p-4 rounded-3xl bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border border-slate-200 dark:border-slate-800 shadow-2xl pointer-events-auto md:hidden flex flex-col gap-2"
          >
            {navItems.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={(e) => scrollToSection(e, item.toLowerCase())}
                className={`p-4 rounded-2xl text-lg font-bold transition-all ${
                  activeSection === item.toLowerCase() 
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30" 
                  : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}