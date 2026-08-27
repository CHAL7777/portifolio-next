"use client";

import { navItems, profile, projects } from "@/app/data/portfolio";
import { ArrowUp, ArrowUpRight, Github, Linkedin, Mail, Send } from "lucide-react";
import Image from "next/image";

const socialLinks = [
  { label: "GitHub", href: profile.links.github, Icon: Github },
  { label: "LinkedIn", href: profile.links.linkedin, Icon: Linkedin },
  { label: "Telegram", href: profile.links.telegram, Icon: Send },
  { label: "Email", href: profile.links.email, Icon: Mail },
];

const emailAddress = profile.links.email.replace(/^mailto:/, "");

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-[var(--line)] bg-[var(--background)]">
      <div className="site-shell">
        {/* ─── Sign-off: the last oversized moment on the sheet ─── */}
        <div className="border-b border-[var(--line)] py-14 md:py-20">
          <div className="section-index">
            <span className="meta-mono text-[var(--accent)]">09</span>
            <span className="meta-mono">Colophon</span>
          </div>

          <a
            href={profile.links.email}
            className="group mt-8 inline-flex max-w-full items-baseline gap-3"
          >
            <span className="display-title break-all text-[1.6rem] leading-[1.05] transition-colors group-hover:text-[var(--accent)] sm:text-4xl lg:text-5xl">
              {emailAddress}
            </span>
            <ArrowUpRight
              className="hidden shrink-0 text-[var(--accent)] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 sm:block"
              size={26}
            />
          </a>

          <p className="body-copy mt-5 max-w-lg text-sm">
            Open to full-time roles and project collaborations. The fastest way to
            reach me is email — I read everything.
          </p>
        </div>

        {/* ─── Title block: identity, index, and channels, ruled like a drawing ─── */}
        <div className="grid gap-10 py-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-[3px] border border-[var(--line-strong)]">
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="display-title text-lg">{profile.name}</p>
                <p className="meta-mono truncate">{profile.role}</p>
              </div>
            </div>
            <p className="body-copy mt-5 max-w-sm text-sm">{profile.headline}</p>
            <div className="meta-mono mt-5 flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
              <span>Available for new work</span>
            </div>
          </div>

          <nav className="md:col-span-3" aria-label="Footer">
            <p className="meta-mono border-b border-[var(--line)] pb-3 text-[var(--accent)]">
              Index
            </p>
            <ul className="mt-5 grid gap-3">
              {navItems.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="rule-link">
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rule-link"
                >
                  <span>Résumé</span>
                  <ArrowUpRight size={12} />
                </a>
              </li>
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="meta-mono border-b border-[var(--line)] pb-3 text-[var(--accent)]">
              Channels
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="rule-link"
                  >
                    <link.Icon size={13} />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-[var(--line)] pt-5">
              <div>
                <dt className="meta-mono">Based in</dt>
                <dd className="meta-mono mt-1.5 text-[var(--ink-soft)]">
                  {profile.location}
                </dd>
              </div>
              <div>
                <dt className="meta-mono">Timezone</dt>
                <dd className="meta-mono mt-1.5 text-[var(--ink-soft)]">
                  {profile.timezone}
                </dd>
              </div>
              <div>
                <dt className="meta-mono">Case studies</dt>
                <dd className="meta-mono mt-1.5 text-[var(--ink-soft)]">
                  {String(projects.length).padStart(2, "0")}
                </dd>
              </div>
              <div>
                <dt className="meta-mono">Built with</dt>
                <dd className="meta-mono mt-1.5 text-[var(--ink-soft)]">
                  Next.js · Tailwind
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* ─── Bottom rule ─── */}
        <div className="flex flex-col gap-4 border-t border-[var(--line)] py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="meta-mono">
            © {currentYear} {profile.name} — All rights reserved
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="meta-mono group inline-flex items-center gap-2 self-start transition-colors hover:text-[var(--accent)] sm:self-auto"
          >
            <span>Back to top</span>
            <ArrowUp
              size={13}
              className="transition-transform group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
