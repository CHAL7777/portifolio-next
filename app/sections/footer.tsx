import { navItems, profile } from "@/app/data/portfolio";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)]">
      <div className="site-shell flex flex-col gap-8 py-10 md:flex-row md:items-end md:justify-between">
        <div>
          <Link href="/" className="display-title text-lg text-[var(--ink)]">
            {profile.name}
          </Link>
          <p className="body-copy mt-2 max-w-xs text-sm">{profile.role}. Built with Next.js, TypeScript, and Tailwind CSS. Deployed on Vercel.</p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="meta-mono transition-colors hover:text-[var(--ink)]">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="meta-mono transition-colors hover:text-[var(--ink)]">
                GitHub
              </a>
            </li>
            <li>
              <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="meta-mono transition-colors hover:text-[var(--ink)]">
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="site-shell flex flex-wrap items-center justify-between gap-2 border-t border-[var(--line)] py-4">
        <span className="meta-mono">© {new Date().getFullYear()} {profile.name}</span>
        <a href={`https://github.com/${profile.githubUsername}/portifolio-next`} target="_blank" rel="noopener noreferrer" className="meta-mono transition-colors hover:text-[var(--ink)]">
          Source on GitHub
        </a>
      </div>
    </footer>
  );
}
