"use client";

import { Download, Menu, Moon, Sparkles, Sun, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { navItems, profile } from "../app/data/portfolio";

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

  const toggleTheme = () => {
    const nextTheme = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", nextTheme);
    window.localStorage.setItem("theme", nextTheme ? "dark" : "light");
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-[var(--line)] bg-[var(--nav-bg)]/90 backdrop-blur-xl shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="site-shell flex min-h-14 items-center justify-between gap-5">
        <a href="#hero" className="group inline-flex items-center gap-3 text-[var(--ink)]" aria-label="Go to hero">
          <div className="relative h-9 w-9 overflow-hidden rounded-full border border-[var(--accent)] shadow-sm">
            <Image
              src={profile.avatar}
              alt={profile.name}
              width={36}
              height={36}
              className="h-full w-full object-cover transition-transform group-hover:scale-110"
            />
          </div>
          <span className="leading-tight sm:block">
            <span className="block text-sm font-black tracking-tight">{profile.name}</span>
            <span className="block text-[0.68rem] font-bold text-[var(--muted)]">{profile.role}</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-1 rounded-full border border-[var(--line)] bg-[var(--surface-strong)]/80 p-1.5 backdrop-blur-xl lg:flex shadow-sm">
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${
                  isActive
                    ? "bg-[var(--accent)] text-black shadow-sm"
                    : "text-[var(--muted)] hover:bg-[var(--tag-bg)] hover:text-[var(--ink)]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button-base button-primary hidden min-h-9 px-3.5 py-1.5 text-xs font-black sm:inline-flex"
          >
            <Download size={14} />
            <span>Resume</span>
          </a>

          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] transition-colors hover:bg-[var(--tag-bg)]"
            aria-label="Toggle color theme"
          >
            <Sun size={17} className="hidden dark:block text-amber-400" />
            <Moon size={17} className="block dark:hidden text-slate-700" />
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] transition-colors hover:bg-[var(--tag-bg)] lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="border-b border-[var(--line)] bg-[var(--surface-strong)] backdrop-blur-2xl lg:hidden shadow-xl">
          <div className="site-shell grid gap-1.5 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-bold text-[var(--ink)] hover:bg-[var(--tag-bg)]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="button-base button-primary mt-2 justify-center text-xs font-black"
            >
              <Download size={15} />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

