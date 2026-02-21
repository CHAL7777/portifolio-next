"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, Command, Menu, Moon, Sun, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Certificates", id: "certificates" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
] as const;

export default function NavbarElite() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("about");
  const [isHidden, setIsHidden] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const { scrollY, scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 28,
  });
  const shellWidth = useTransform(scrollY, [0, 260], ["100%", "92%"]);
  const shellPadding = useTransform(scrollY, [0, 260], ["1.2rem", "0.65rem"]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (prefersReducedMotion) {
      return;
    }

    const previous = scrollY.getPrevious() ?? latest;
    const diff = latest - previous;

    if (latest < 96) {
      setIsHidden(false);
      return;
    }
    if (Math.abs(diff) < 2) {
      return;
    }
    setIsHidden(diff > 0);
  });

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const shouldEnableDark =
      stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", shouldEnableDark);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0.15, 0.35, 0.65],
      }
    );

    NAV_ITEMS.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [isOpen]);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark");
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <motion.nav
      initial={false}
      animate={prefersReducedMotion ? { y: 0 } : { y: isHidden ? -120 : 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 28 }}
      className="pointer-events-none fixed left-0 top-0 z-[100] flex w-full justify-center px-5 py-5"
    >
      <motion.div
        style={{ width: shellWidth, padding: shellPadding }}
        className="pointer-events-auto relative w-full max-w-6xl transition-all duration-500"
      >
        <motion.div
          aria-hidden
          className="absolute bottom-[2px] left-6 right-6 z-50 h-[2px] origin-left bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60"
          style={{ scaleX: smoothProgress }}
        />

        <div className="flex items-center justify-between rounded-[2rem] border border-white/30 bg-white/65 px-5 py-3 shadow-[0_12px_45px_-20px_rgba(2,6,23,0.35)] backdrop-blur-2xl dark:border-slate-800/60 dark:bg-slate-900/68 sm:px-6">
          <button
            type="button"
            onClick={() => {
              document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
              setIsOpen(false);
            }}
            className="group flex items-center gap-2 mr-4"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 transition-all group-hover:scale-110 group-hover:rotate-[15deg] dark:bg-white">
              <Command size={18} className="text-white dark:text-slate-900" strokeWidth={2.5} />
            </div>
            <span className="hidden text-xl font-black tracking-tighter text-slate-900 dark:text-white sm:block">
              CHAL<span className="text-blue-500 italic">.</span>
            </span>
          </button>

          <LayoutGroup id="navbar-sections">
            <div className="hidden items-center rounded-2xl border border-slate-200/60 bg-slate-100/65 p-1.5 dark:border-slate-700/60 dark:bg-slate-800/45 md:flex">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                      setIsOpen(false);
                    }}
                    className="relative rounded-xl px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em]"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="active-nav-pill"
                        transition={{ type: "spring", stiffness: 340, damping: 30 }}
                        className="absolute inset-0 rounded-xl bg-slate-900 shadow-md dark:bg-blue-600"
                      />
                    )}
                    <span
                      className={`relative z-10 transition-colors duration-300 ${
                        isActive
                          ? "text-white"
                          : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
                      }`}
                    >
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </LayoutGroup>

          <div className="ml-4 flex items-center gap-2.5">
            <motion.button
              type="button"
              onClick={toggleTheme}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.92 }}
              className="group rounded-xl border border-slate-200 bg-white p-2.5 text-slate-600 transition-all hover:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              <Sun size={18} className="hidden dark:block" />
              <Moon size={18} className="block dark:hidden" />
            </motion.button>

            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={prefersReducedMotion ? undefined : { y: -2 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
              className="hidden items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-blue-600 dark:bg-white dark:text-slate-900 dark:hover:bg-blue-500 dark:hover:text-white lg:flex"
            >
              Resume <ArrowUpRight size={14} />
            </motion.a>

            <motion.button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.92 }}
              className="rounded-xl bg-slate-900 p-2.5 text-white dark:bg-white dark:text-slate-900 md:hidden"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[-1] bg-slate-950/30 backdrop-blur-sm md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 280 }}
              className="absolute bottom-0 right-0 top-0 flex w-[80%] max-w-sm flex-col bg-white p-8 pt-24 shadow-2xl dark:bg-slate-900"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-3">
                {NAV_ITEMS.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06 }}
                    onClick={() => {
                      document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                      setIsOpen(false);
                    }}
                    className={`flex items-center justify-between rounded-2xl p-5 text-xl font-black ${
                      activeSection === item.id
                        ? "bg-slate-900 text-white dark:bg-blue-600"
                        : "bg-slate-50 text-slate-900 dark:bg-slate-800/50 dark:text-white"
                    }`}
                  >
                    {item.label}
                    <ArrowUpRight size={20} className={activeSection === item.id ? "text-white" : "text-blue-500"} />
                  </motion.button>
                ))}
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
