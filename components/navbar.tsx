"use client";

import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, profile } from "../app/data/portfolio";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", nextTheme);
    window.localStorage.setItem("theme", nextTheme ? "dark" : "light");
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--nav-bg)] backdrop-blur-xl transition-shadow duration-300 ${
        isScrolled ? "shadow-[var(--shadow-soft)]" : ""
      }`}
    >
      <nav className="site-shell flex min-h-16 items-center justify-between gap-5">
        <a href="#hero" className="group inline-flex items-center gap-3 text-[var(--ink)]" aria-label="Go to hero">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--ink)] text-sm font-black text-[var(--ink-contrast)]">
            CG
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-black">{profile.name}</span>
            <span className="block text-xs font-bold text-[var(--muted)]">{profile.role}</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-bold text-[var(--muted)] transition-colors hover:bg-[var(--tag-bg)] hover:text-[var(--ink)]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button-base button-primary hidden min-h-10 px-3 py-2 text-xs sm:inline-flex"
          >
            <Download size={15} />
            Resume
          </a>

          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] transition-colors hover:bg-[var(--tag-bg)]"
            aria-label="Toggle color theme"
          >
            <Sun size={18} className="hidden dark:block" />
            <Moon size={18} className="block dark:hidden" />
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] transition-colors hover:bg-[var(--tag-bg)] lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-[var(--line)] bg-[var(--surface-strong)] lg:hidden">
          <div className="site-shell grid gap-1 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-2 py-3 text-base font-bold text-[var(--ink)] hover:bg-[var(--tag-bg)]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="button-base button-primary mt-2"
            >
              <Download size={16} />
              Download resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
