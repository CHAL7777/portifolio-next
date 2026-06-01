import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import Image from "next/image";

const metrics = [
  { value: "20+", label: "projects" },
  { value: "3+", label: "years building" },
  { value: "Full-stack", label: "focus" },
];

export default function Hero() {
  return (
    <section id="hero" className="pt-16 pb-12 md:pt-24 md:pb-20">
      <div className="site-shell">
        <div className="grid gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:items-end">
          <div>
            <p className="section-label reveal">Frontend and full-stack developer</p>
            <h1 className="display-title reveal stagger-1 mt-5 max-w-4xl text-6xl text-[var(--ink)] sm:text-7xl lg:text-8xl">
              I build simple web products that feel clear, fast, and useful.
            </h1>
            <p className="body-copy reveal stagger-2 mt-7 max-w-2xl text-lg md:text-xl">
              I&apos;m Chala Gobena, a product-minded developer based in Ethiopia. I turn rough ideas,
              dashboards, content sites, and service platforms into polished interfaces that are easy to use
              and maintain.
            </p>

            <div className="reveal stagger-3 mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#projects" className="simple-button button-primary">
                See work
                <ArrowUpRight size={16} />
              </a>
              <a href="mailto:chalagobena43@gmail.com" className="simple-button button-secondary">
                Contact me
                <Mail size={16} />
              </a>
            </div>

            <div className="reveal stagger-4 mt-10 grid max-w-2xl grid-cols-3 border-y border-[var(--line)]">
              {metrics.map((item, index) => (
                <div key={item.label} className={`py-5 pr-4 reveal stagger-${Math.min(index + 2, 5)}`}>
                  <p className="text-2xl font-black text-[var(--ink)] md:text-3xl">{item.value}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-[var(--muted)]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="reveal stagger-5 mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-bold text-[var(--muted)]">
              <span className="inline-flex items-center gap-2">
                <MapPin size={16} className="text-[var(--accent)]" />
                Addis Ababa, Ethiopia
              </span>
              <a
                href="https://github.com/CHAL7777"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-[var(--ink)]"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/chala-gobena-01a22b346"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-[var(--ink)]"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="simple-card reveal-scale stagger-3 overflow-hidden bg-[var(--surface)]">
            <div className="relative aspect-[4/5] min-h-[26rem]">
              <Image src="/img/chala.jpg" alt="Chala Gobena" fill priority className="object-cover" />
            </div>
            <div className="border-t border-[var(--line)] p-5">
              <p className="section-label">Available for selected work</p>
              <p className="body-copy mt-2 text-sm">
                Best fit: product websites, admin dashboards, full-stack prototypes, and frontend polish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
