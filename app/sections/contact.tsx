"use client";

import { Check, Copy, Github, Linkedin, Mail, Send } from "lucide-react";
import { useRef, useState } from "react";

const contactLinks = [
  { label: "GitHub", href: "https://github.com/CHAL7777", Icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/chala-gobena-01a22b346", Icon: Linkedin },
  { label: "Telegram", href: "https://t.me/chaldev", Icon: Send },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [copied, setCopied] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("chalagobena43@gmail.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/xojavqep", {
        method: "POST",
        body: new FormData(event.currentTarget),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      formRef.current?.reset();
      setStatus("success");
      window.setTimeout(() => setStatus("idle"), 3500);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-band bg-[var(--surface-alt)]">
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr]">
          <div>
            <p className="section-label">[Part 06 / 06] Contact</p>
            <h2 className="display-title mt-4 text-5xl text-[var(--ink)] md:text-6xl">
              Tell me what you want to build.
            </h2>
            <p className="body-copy mt-5 text-lg">
              Send the project idea, page you want improved, or product you want to launch. I&apos;ll reply with
              a practical next step.
            </p>

            <div className="mt-8 grid gap-3">
              <button
                type="button"
                onClick={copyEmail}
                className="simple-card flex items-center justify-between gap-4 p-4 text-left"
              >
                <span>
                  <span className="block text-xs font-black uppercase tracking-[0.14em] text-[var(--muted)]">
                    Email
                  </span>
                  <span className="mt-1 block font-bold text-[var(--ink)]">chalagobena43@gmail.com</span>
                </span>
                {copied ? <Check size={18} className="text-[var(--accent-2)]" /> : <Copy size={18} />}
              </button>

              <div className="grid gap-3 sm:grid-cols-3">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="simple-card flex items-center justify-between gap-3 p-4 text-sm font-black text-[var(--ink)]"
                  >
                    {link.label}
                    <link.Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="simple-card p-5 md:p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Name" name="name" type="text" placeholder="Your name" />
              <Field label="Email" name="email" type="email" placeholder="you@example.com" />
            </div>
            <div className="mt-4">
              <Field label="Project" name="project_type" type="text" placeholder="Website, dashboard, app..." />
            </div>
            <div className="mt-4">
              <label className="mb-2 block text-xs font-black uppercase tracking-[0.14em] text-[var(--muted)]">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={6}
                placeholder="What are you trying to build or improve?"
                className="w-full rounded-md border border-[var(--line)] bg-[var(--input-bg)] px-4 py-3 text-sm text-[var(--ink)] outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent-2)]"
              />
            </div>
            <button type="submit" disabled={status === "loading"} className="simple-button button-primary mt-5 w-full">
              {status === "loading" ? "Sending..." : "Send message"}
              <Mail size={16} />
            </button>
            {status === "success" && <p className="mt-3 text-sm font-bold text-[var(--accent-2)]">Message sent.</p>}
            {status === "error" && <p className="mt-3 text-sm font-bold text-red-700">Could not send. Try email instead.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-black uppercase tracking-[0.14em] text-[var(--muted)]">{label}</label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-md border border-[var(--line)] bg-[var(--input-bg)] px-4 py-3 text-sm text-[var(--ink)] outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent-2)]"
      />
    </div>
  );
}
