"use client";

import { navItems, profile } from "@/app/data/portfolio";
import { ArrowUp, ArrowUpRight, Github, Linkedin, Mail, Send } from "lucide-react";
import Image from "next/image";

const socialLinks = [
  { label: "GitHub", href: profile.links.github, Icon: Github },
  { label: "LinkedIn", href: profile.links.linkedin, Icon: Linkedin },
  { label: "Telegram", href: profile.links.telegram, Icon: Send },
  { label: "Email", href: profile.links.email, Icon: Mail },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[var(--line)] bg-[var(--background)] py-12 relative">
      <div className="site-shell grid gap-10 lg:grid-cols-[1fr_auto_auto] lg:items-start">
        <div>
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-full border border-[var(--accent)] shadow-sm">
              <Image src={profile.avatar} alt={profile.name} width={36} height={36} className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="text-xl font-black text-[var(--ink)] leading-tight">{profile.name}</p>
              <p className="text-xs font-bold text-[var(--accent)]">{profile.role}</p>
            </div>
          </div>
          <p className="body-copy mt-3 max-w-md text-sm leading-relaxed text-[var(--muted)]">{profile.headline}</p>
          <div className="mt-4 flex items-center gap-2 text-xs font-bold text-[var(--muted)]">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>{profile.location} • {profile.timezone}</span>
          </div>
          <p className="mt-6 text-xs font-bold text-[var(--muted)]">
            © {currentYear} {profile.name}. Built with Next.js & Tailwind CSS.
          </p>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-wider text-[var(--accent)]">Navigation</p>
          <div className="mt-4 grid gap-2">
            {[...navItems, { label: "Resume", href: "#resume" }].map((link) => (
              <a key={link.href} href={link.href} className="rule-link text-xs font-bold">
                <span>{link.label}</span>
                <ArrowUpRight size={12} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-wider text-[var(--accent)]">Connect</p>
          <div className="mt-4 grid gap-2.5">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target={link.href.startsWith("mailto:") ? undefined : "_blank"} rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"} className="inline-flex items-center gap-2 text-xs font-bold text-[var(--muted)] transition-colors hover:text-[var(--ink)]">
                <link.Icon size={14} className="text-[var(--accent)]" />
                <span>{link.label}</span>
              </a>
            ))}
          </div>
          <button type="button" onClick={scrollToTop} className="mt-6 inline-flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-3 py-2 text-xs font-bold text-[var(--ink)] transition-colors hover:border-[var(--accent)]">
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
