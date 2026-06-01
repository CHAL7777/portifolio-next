"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Certification", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    const nextTheme = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", nextTheme);
    window.localStorage.setItem("theme", nextTheme ? "dark" : "light");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--nav-bg)] backdrop-blur-xl">
      <nav className="site-shell flex min-h-16 items-center justify-between gap-6">
        <a href="#hero" className="text-sm font-black uppercase tracking-[0.18em] text-[var(--ink)]">
          Chala Gobena
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-bold text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
            >
              {item.label}
            </a>
          ))}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="simple-button button-primary py-2">
            Resume
          </a>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)]"
            aria-label="Toggle color theme"
          >
            <Sun size={18} className="hidden dark:block" />
            <Moon size={18} className="block dark:hidden" />
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-[var(--line)] bg-[var(--surface)] lg:hidden">
          <div className="site-shell grid gap-1 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-2 py-3 text-base font-bold text-[var(--ink)]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-2 simple-button button-primary"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
