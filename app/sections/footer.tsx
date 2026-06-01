import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--line)] bg-[var(--background)] py-10">
      <div className="site-shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-2xl font-black text-[var(--ink)]">Chala Gobena</p>
          <p className="body-copy mt-2 max-w-md text-sm">
            Product-minded full-stack developer building simple, polished web products.
          </p>
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-[var(--muted)]">
            © {currentYear} Chala Gobena
          </p>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-3">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="rule-link text-sm">
              {link.label}
              <ArrowUpRight size={13} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
