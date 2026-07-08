import { navItems, profile } from "@/app/data/portfolio";
import { ArrowUpRight, Github, Linkedin, Mail, Send } from "lucide-react";

const socialLinks = [
  { label: "GitHub", href: profile.links.github, Icon: Github },
  { label: "LinkedIn", href: profile.links.linkedin, Icon: Linkedin },
  { label: "Telegram", href: profile.links.telegram, Icon: Send },
  { label: "Email", href: profile.links.email, Icon: Mail },
  
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--line)] bg-[var(--background)] py-10">
      <div className="site-shell grid gap-8 lg:grid-cols-[1fr_auto_auto] lg:items-start">
        <div>
          <p className="text-2xl font-black text-[var(--ink)]">{profile.name}</p>
          <p className="body-copy mt-2 max-w-md text-sm">{profile.headline}</p>
          <p className="body-copy mt-4 text-sm">{profile.location}</p>
          <p className="mt-5 text-xs font-bold uppercase text-[var(--muted)]">
            Copyright {currentYear} {profile.name}. All rights reserved.
          </p>
        </div>

        <div>
          <p className="text-sm font-black text-[var(--ink)]">Quick links</p>
          <div className="mt-4 grid gap-2">
            {[...navItems, { label: "Resume", href: "#resume" }].map((link) => (
              <a key={link.href} href={link.href} className="rule-link text-sm">
                {link.label}
                <ArrowUpRight size={13} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-black text-[var(--ink)]">Social</p>
          <div className="mt-4 grid gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="inline-flex items-center gap-2 text-sm font-bold text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
              >
                <link.Icon size={15} />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
