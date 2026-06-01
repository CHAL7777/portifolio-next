import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Food Delivery Web App",
    summary: "A responsive ordering experience with menu browsing, checkout flow, and clean deployment.",
    image: "/docs/latest.png",
    liveUrl: "https://food-delivery-rho-rouge.vercel.app/",
    sourceUrl: "https://github.com/CHAL7777",
    tags: ["Next.js", "Tailwind", "Supabase"],
    year: "2026",
  },
  {
    title: "E-commerce Dashboard",
    summary: "A practical dashboard for sales, inventory, and business insight with a scannable interface.",
    image: "/docs/ecco.png",
    liveUrl: "https://eccommercebychal.netlify.app",
    sourceUrl: "https://github.com/CHAL7777",
    tags: ["TypeScript", "Prisma", "Charts"],
    year: "2025",
  },
  {
    title: "Ethiopian E-book Site",
    summary: "A digital library for browsing, reading, and downloading content across devices.",
    image: "/docs/saas.png",
    liveUrl: "https://ethio-book-site.vercel.app/",
    sourceUrl: "https://github.com/CHAL7777",
    tags: ["Next.js", "Supabase", "Content"],
    year: "2025",
  },
  {
    title: "Study Buddy App",
    summary: "A study planning hub with task tracking, resources, and simple collaboration patterns.",
    image: "/docs/saas-s.png",
    liveUrl: "https://student-sass.vercel.app/",
    sourceUrl: "https://github.com/CHAL7777",
    tags: ["Next.js", "Tailwind", "SaaS"],
    year: "2026",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-band bg-[var(--surface-alt)]">
      <div className="site-shell">
        <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
          <div>
            <p className="section-label">[Part 01 / 06] Selected work</p>
            <h2 className="display-title mt-4 text-5xl text-[var(--ink)] md:text-6xl">
              A few products I have shipped.
            </h2>
          </div>
          <p className="body-copy max-w-2xl text-lg">
            The portfolio is intentionally short: recent work, direct links, and enough context to understand
            what each build does.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="simple-card overflow-hidden">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="group block">
                <div className="relative aspect-[16/10] overflow-hidden bg-[var(--input-bg)]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </a>
              <div className="p-5 md:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-[var(--accent-2)]">
                      {project.year}
                    </p>
                    <h3 className="mt-2 text-2xl font-black tracking-tight text-[var(--ink)]">{project.title}</h3>
                  </div>
                  <div className="flex shrink-0 gap-2">
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} source code`}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)]"
                    >
                      <Github size={17} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live site`}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[var(--ink)] text-[var(--ink-contrast)]"
                    >
                      <ArrowUpRight size={17} />
                    </a>
                  </div>
                </div>
                <p className="body-copy mt-4 text-sm">{project.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
