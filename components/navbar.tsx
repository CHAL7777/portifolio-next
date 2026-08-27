"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Download, Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { navItems, profile } from "../app/data/portfolio";
import ThemeToggle from "./theme-toggle";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);

      const sections = navItems.map((item) => item.href.replace("#", ""));
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "border-b border-[var(--line)] bg-[var(--nav-bg)] py-2 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent py-4"
      }`}
    >
      <nav className="site-shell flex min-h-14 items-center justify-between gap-3 sm:gap-5">
        {/* Logo */}
        <a href="#hero" className="group inline-flex min-w-0 items-center gap-3 text-[var(--ink)]" aria-label="Go to hero">
          <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-[3px] border border-[var(--line-strong)]">
            <Image
              src={profile.avatar}
              alt={profile.name}
              width={36}
              height={36}
              className="h-full w-full object-cover"
            />
          </div>
          <span className="min-w-0 leading-tight">
            <span className="display-title block truncate text-sm">{profile.name}</span>
            <span className="meta-mono hidden truncate text-[0.62rem] sm:block">{profile.role}</span>
          </span>
        </a>

        {/* Desktop Floating Pill Nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className="meta-mono relative px-3 py-2.5 text-[0.68rem] transition-colors"
              >
                <span className={isActive ? "text-[var(--ink)]" : "hover:text-[var(--ink)]"}>
                  {item.label}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-x-2 bottom-1 h-px bg-[var(--accent)]"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button-base button-secondary hidden min-h-10 px-4 py-1.5 text-[0.68rem] sm:inline-flex"
          >
            <Download size={14} />
            <span>Resume</span>
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-[3px] border border-[var(--line)] text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[var(--nav-height,3.5rem)] z-40 bg-[var(--background)] lg:hidden"
          >
            <div className="site-shell flex flex-col gap-2 pt-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3, ease }}
                  className="group flex items-center justify-between border-b border-[var(--line)] py-5 text-[var(--ink)] transition-colors hover:text-[var(--accent)]"
                >
                  <span className="display-title text-2xl">{item.label}</span>
                  <ArrowUpRight size={18} className="text-[var(--muted)] transition-colors group-hover:text-[var(--accent)]" />
                </motion.a>
              ))}
              <motion.a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05, duration: 0.3 }}
                className="button-base button-primary mt-4 justify-center text-sm"
              >
                <Download size={16} />
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
