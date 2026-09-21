"use client";

import { navItems, profile } from "@/app/data/portfolio";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import ThemeToggle from "./theme-toggle";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const menuId = useId();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track the section in view on the home page. IntersectionObserver instead of
  // per-scroll offset math, so it costs nothing while the page is idle.
  useEffect(() => {
    if (!isHome) return;
    const ids = navItems.map((item) => item.href.split("#")[1]).filter(Boolean);
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.2, 0.5] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome]);

  // Close the drawer on Escape or when the viewport grows. Route changes are
  // handled by the Link onClick handlers below.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,border-color] duration-300 ${
        scrolled || open
          ? "border-b border-[var(--line)] bg-[var(--nav-bg)] backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:bg-[var(--accent)] focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <nav className="site-shell flex h-16 items-center justify-between gap-4" aria-label="Primary">
        <Link href="/" onClick={() => setOpen(false)} className="group inline-flex items-center gap-2.5 text-[var(--ink)]" aria-label="Chala Gobena — home">
          <span className="meta-mono text-[var(--accent)]" aria-hidden="true">
            ~/
          </span>
          <span className="display-title text-[0.95rem] tracking-[-0.02em]">chaldev</span>
          <span className="hidden h-1.5 w-1.5 rounded-full bg-[var(--accent)] sm:block" aria-hidden="true" />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const id = item.href.split("#")[1];
            const isActive = isHome && active === id;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  className={`meta-mono relative block px-3 py-2 text-[0.68rem] transition-colors hover:text-[var(--ink)] ${
                    isActive ? "text-[var(--ink)]" : ""
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 bottom-0.5 h-px bg-[var(--accent)]"
                      transition={reduceMotion ? { duration: 0 } : { type: "spring", bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/#contact" onClick={() => setOpen(false)} className="button-base button-secondary hidden min-h-10 px-4 py-1.5 text-[0.66rem] sm:inline-flex">
            Let&apos;s talk
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-[3px] border border-[var(--line)] text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls={menuId}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id={menuId}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-[var(--background)] lg:hidden"
          >
            <ul className="site-shell flex flex-col pt-6">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.3, ease }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between border-b border-[var(--line)] py-5 text-[var(--ink)] transition-colors hover:text-[var(--accent)]"
                  >
                    <span className="display-title text-2xl">{item.label}</span>
                    <ArrowUpRight size={18} className="text-[var(--muted)] group-hover:text-[var(--accent)]" aria-hidden="true" />
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="site-shell mt-8 flex flex-wrap gap-x-6 gap-y-3 pb-10">
              <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="rule-link">
                GitHub <ArrowUpRight size={12} aria-hidden="true" />
              </a>
              <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="rule-link">
                LinkedIn <ArrowUpRight size={12} aria-hidden="true" />
              </a>
              <a href={profile.links.email} className="rule-link">
                Email
              </a>
              <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="rule-link">
                Résumé <ArrowUpRight size={12} aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
