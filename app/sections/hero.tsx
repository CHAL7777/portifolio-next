"use client";

import { profile } from "@/app/data/portfolio";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const fade = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  });

  return (
    <section id="hero" className="relative flex min-h-[calc(100svh-4rem)] flex-col justify-between overflow-hidden" aria-labelledby="hero-title">
      <div className="site-shell flex flex-1 flex-col justify-center pb-16 pt-14 sm:pt-20">
        <motion.div {...fade(0)} className="section-index max-w-2xl">
          <span className="meta-mono text-[var(--accent)]">00</span>
          <span className="meta-mono">Portfolio — {new Date().getFullYear()}</span>
          <span className="meta-mono ml-auto hidden text-[var(--muted)] sm:inline">{profile.location}</span>
        </motion.div>

        <h1 id="hero-title" className="mt-10 max-w-[14ch] sm:mt-14">
          <motion.span {...fade(0.08)} className="display-hero block">
            Chala
          </motion.span>
          <motion.span {...fade(0.16)} className="display-hero block text-[var(--muted)]">
            Gobena
          </motion.span>
        </h1>

        <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-12 md:items-end">
          <motion.div {...fade(0.26)} className="md:col-span-7">
            <p className="section-kicker">{profile.role}</p>
            <p className="display-lede mt-4 max-w-xl">
              I build full-stack web applications — from the database schema and the API, to interfaces people can actually use. Currently a software engineering student shipping real projects for real users.
            </p>
          </motion.div>

          <motion.div {...fade(0.34)} className="flex flex-col gap-6 md:col-span-5 md:items-end">
            <div className="flex flex-wrap gap-3">
              <Link href="/#work" className="button-base button-primary">
                View my work
                <ArrowDown size={15} aria-hidden="true" />
              </Link>
              <Link href="/#contact" className="button-base button-secondary">
                Let&apos;s work together
              </Link>
            </div>
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2" aria-label="Profiles">
              <li>
                <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="rule-link">
                  <SiGithub size={13} aria-hidden="true" /> GitHub
                </a>
              </li>
              <li>
                <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="rule-link">
                  <SiLinkedin size={13} aria-hidden="true" /> LinkedIn
                </a>
              </li>
              <li>
                <a href={profile.links.email} className="rule-link">
                  {profile.email} <ArrowUpRight size={12} aria-hidden="true" />
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      <motion.div {...fade(0.5)} className="site-shell">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--line)] py-4">
          <span className="meta-mono inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" aria-hidden="true" />
            {profile.availability}
          </span>
          <span className="meta-mono hidden sm:inline">React · Next.js · TypeScript · Node · FastAPI · PostgreSQL</span>
        </div>
      </motion.div>
    </section>
  );
}
