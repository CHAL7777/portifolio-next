"use client";

import { profile } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import { ArrowUpRight, Check, Loader2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { SiGithub, SiLinkedin, SiTelegram } from "react-icons/si";

type Status = { state: "idle" } | { state: "sending" } | { state: "sent" } | { state: "error"; message: string };

const channels = [
  { label: "Email", value: profile.email, href: profile.links.email, Icon: null },
  { label: "GitHub", value: `@${profile.githubUsername}`, href: profile.links.github, Icon: SiGithub },
  { label: "LinkedIn", value: "chala-gobena", href: profile.links.linkedin, Icon: SiLinkedin },
  { label: "Telegram", value: "@chaldev", href: profile.links.telegram, Icon: SiTelegram },
];

export default function Contact() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(json.error || "Something went wrong. Please email me directly.");
      form.reset();
      setStatus({ state: "sent" });
    } catch (err) {
      setStatus({ state: "error", message: err instanceof Error ? err.message : "Something went wrong." });
    }
  }

  return (
    <section id="contact" className="section-band scroll-mt-16" aria-labelledby="contact-title">
      <div className="site-shell">
        <SectionHeading
          index="06"
          kicker="Contact"
          id="contact-title"
          title="Have something worth building?"
          lede="Freelance projects, internships, or a junior engineering role — tell me what you're working on. I read everything and reply from my own inbox."
        />

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <ul className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {channels.map(({ label, value, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="group flex items-center justify-between gap-4 py-4 transition-colors hover:text-[var(--accent)]"
                  >
                    <span className="flex items-center gap-3">
                      {Icon ? <Icon size={15} className="text-[var(--muted)]" aria-hidden="true" /> : <span className="meta-mono text-[var(--accent)]">@</span>}
                      <span className="meta-mono">{label}</span>
                    </span>
                    <span className="flex items-center gap-2 text-sm text-[var(--ink)] group-hover:text-[var(--accent)]">
                      {value}
                      <ArrowUpRight size={13} aria-hidden="true" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="body-copy mt-6 text-sm">
              Based in {profile.location} ({profile.timezone}). Happy to work across timezones.
            </p>
          </Reveal>

          <Reveal delay={0.05} className="lg:col-span-7">
            <form onSubmit={onSubmit} className="drafted border border-[var(--line)] bg-[var(--surface-solid)] p-5 sm:p-7" noValidate={false}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="blueprint-field">
                  <label htmlFor="contact-name" className="meta-mono">
                    Name
                  </label>
                  <input id="contact-name" name="name" type="text" required minLength={2} autoComplete="name" className="input-field" placeholder="Your name" />
                </div>
                <div className="blueprint-field">
                  <label htmlFor="contact-email" className="meta-mono">
                    Email
                  </label>
                  <input id="contact-email" name="email" type="email" required autoComplete="email" className="input-field" placeholder="you@company.com" />
                </div>
                <div className="blueprint-field sm:col-span-2">
                  <label htmlFor="contact-message" className="meta-mono">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    minLength={10}
                    rows={6}
                    className="input-field resize-y"
                    placeholder="What are you building, and where could I help?"
                  />
                </div>
                {/* Honeypot: hidden from people, filled by bots, rejected by the API. */}
                <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                  <label htmlFor="contact-company">Company</label>
                  <input id="contact-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-[var(--muted)]" role="status" aria-live="polite">
                  {status.state === "sent" && (
                    <span className="inline-flex items-center gap-1.5 text-[var(--ink)]">
                      <Check size={13} className="text-[var(--accent)]" aria-hidden="true" /> Sent. I&apos;ll reply to your email.
                    </span>
                  )}
                  {status.state === "error" && <span className="text-[var(--accent)]">{status.message}</span>}
                  {(status.state === "idle" || status.state === "sending") && "No newsletter, no tracking — just a message to my inbox."}
                </p>
                <button type="submit" disabled={status.state === "sending"} className="button-base button-primary disabled:cursor-wait disabled:opacity-70">
                  {status.state === "sending" ? (
                    <>
                      <Loader2 size={15} className="animate-spin" aria-hidden="true" /> Sending
                    </>
                  ) : (
                    <>
                      Send message <ArrowUpRight size={15} aria-hidden="true" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
