"use client";

import type { IconType } from "react-icons";
import { motion } from "framer-motion";
import {
  SiFigma,
  SiGithub,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const logos: Array<{ name: string; Icon: IconType }> = [
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Supabase", Icon: SiSupabase },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Prisma", Icon: SiPrisma },
  { name: "Vercel", Icon: SiVercel },
  { name: "GitHub", Icon: SiGithub },
  { name: "Figma", Icon: SiFigma },
];

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const DURATION_MS = 700;
const STAGGER_MS_MIN = 120;
const STAGGER_MS_SPAN = 30; // will be used to spread 120-150ms

function staggerMs(index: number) {
  // Deterministic spread between 120ms..150ms without needing randomness.
  // index 0 => 120ms, index 9 => 150ms
  const t = index / Math.max(1, logos.length - 1);
  return STAGGER_MS_MIN + Math.round(STAGGER_MS_SPAN * t);
}

export default function LogoShowcase() {
  return (
    <section
      className="border-y border-[var(--line)] bg-[var(--surface)] py-12"
      aria-labelledby="logo-showcase-title"
    >
      <div className="site-shell">
        <div className="mb-9 max-w-2xl">
          <h2
            id="logo-showcase-title"
            className="font-black text-[var(--ink)] text-lg md:text-xl"
          >
            The tools behind my best work
          </h2>
          <p className="body-copy mt-2 text-sm">
            A focused stack for clean interfaces, useful products, and reliable releases.
          </p>
        </div>

        <ul
          className="grid grid-cols-2 gap-3 sm:grid-cols-5 md:gap-4 lg:grid-cols-5"
          aria-label="Technology logos"
        >
          {logos.map((logo, index) => (
            <motion.li
              key={logo.name}
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: DURATION_MS / 1000,
                ease,
                delay: index * (staggerMs(index) / 1000),
              }}
              className="group"
            >
              <div
                className="flex h-full items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface-alt)]/60 px-3 py-3 transition-all duration-300 will-change-transform group-hover:-translate-y-0.5 group-hover:border-[rgba(17,17,17,0.28)] dark:group-hover:border-[rgba(244,240,232,0.25)]"
                aria-label={logo.name}
              >
                <logo.Icon className="h-7 w-7 text-[var(--ink)]/80 transition-colors duration-300 group-hover:text-[var(--ink)]" />
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

