"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Download, Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { navItems, profile } from "../app/data/portfolio";

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
          ? "border-b border-[var(--line)] bg-[var(--nav-bg)] backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.4)] py-2"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="site-shell flex min-h-14 items-center justify-between gap-5">
        {/* Logo */}
        <a href="#hero" className="group inline-flex items-center gap-3 text-[var(--ink)]" aria-label="Go to hero">
          <div className="relative h-9 w-9 overflow-hidden rounded-full border border-[var(--accent)]/40 shadow-[0_0_15px_rgba(0,229,255,0.15)] transition-shadow group-hover:shadow-[0_0_25px_rgba(0,229,255,0.3)]">
            <Image
              src={profile.avatar}
              alt={profile.name}
              width={36}
              height={36}
              className="h-full w-full object-cover transition-transform group-hover:scale-110"
            />
          </div>
          <span className="leading-tight sm:block">
            <span className="block text-sm font-bold tracking-tight">{profile.name}</span>
            <span className="block text-[0.68rem] font-medium text-[var(--muted)]">{profile.role}</span>
          </span>
        </a>

        {/* Desktop Floating Pill Nav */}
        <div className="hidden items-center gap-0.5 rounded-full border border-[var(--line)] bg-[var(--surface)]/60 p-1 backdrop-blur-2xl lg:flex shadow-[0_0_20px_rgba(0,0,0,0.3)]">
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.href}
                href={item.href}
                className="relative rounded-full px-4 py-2 text-xs font-semibold transition-colors"
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full bg-[var(--accent)] shadow-[0_0_20px_rgba(0,229,255,0.3)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className={`relative z-10 ${isActive ? "text-[var(--ink-contrast)]" : "text-[var(--muted)] hover:text-[var(--ink)]"}`}>
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button-base button-primary hidden min-h-9 px-4 py-1.5 text-xs sm:inline-flex"
          >
            <Download size={14} />
            <span>Resume</span>
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] transition-all hover:border-[var(--accent)] hover:shadow-[0_0_15px_rgba(0,229,255,0.1)] lg:hidden"
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
            className="fixed inset-0 top-[var(--nav-height,3.5rem)] z-40 bg-[var(--background)]/98 backdrop-blur-2xl lg:hidden"
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
                  className="group flex items-center justify-between rounded-xl border border-transparent px-4 py-4 text-xl font-bold text-[var(--ink)] transition-all hover:border-[var(--line)] hover:bg-[var(--surface)]"
                >
                  <span>{item.label}</span>
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
