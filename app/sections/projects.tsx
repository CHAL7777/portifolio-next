import { featuredProjects, moreProjects, type Project } from "@/app/data/portfolio";
import ProjectLinks from "@/components/project-links";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function FeaturedProject({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1;
  return (
    <Reveal as="article" className="grid gap-8 border-t border-[var(--line)] py-12 lg:grid-cols-12 lg:gap-12 lg:py-16">
      <Link
        href={`/work/${project.slug}`}
        className={`group drafted relative block overflow-hidden border border-[var(--line)] bg-[var(--surface-solid)] lg:col-span-7 ${flip ? "lg:order-2" : ""}`}
        aria-label={`Open case study: ${project.title}`}
      >
        <div className="relative aspect-[16/10]">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            priority={index === 0}
            className="object-cover object-top transition-transform duration-700 [transition-timing-function:var(--ease-premium)] group-hover:scale-[1.02]"
          />
        </div>
        <span className="meta-mono absolute left-3 top-3 bg-[var(--background)]/85 px-2 py-1 backdrop-blur-sm">{project.year}</span>
      </Link>

      <div className={`flex flex-col lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
        <div className="flex items-center gap-3">
          <span className="meta-mono text-[var(--accent)]">0{index + 1}</span>
          <span className="meta-mono">{project.category}</span>
        </div>
        <h3 className="display-title mt-4 text-3xl sm:text-4xl">
          <Link href={`/work/${project.slug}`} className="transition-colors hover:text-[var(--accent)]">
            {project.title}
          </Link>
        </h3>
        <p className="body-copy mt-4">{project.summary}</p>

        <dl className="mt-6 grid gap-4 border-t border-[var(--line)] pt-5 text-sm">
          <div>
            <dt className="meta-mono">Problem</dt>
            <dd className="body-copy mt-1.5 text-sm">{project.problem}</dd>
          </div>
          <div>
            <dt className="meta-mono">Approach</dt>
            <dd className="body-copy mt-1.5 text-sm">{project.solution}</dd>
          </div>
        </dl>

        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
          {project.technologies.slice(0, 6).map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link href={`/work/${project.slug}`} className="button-base button-primary">
            Read case study
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
          <ProjectLinks project={project} />
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="work" className="section-band scroll-mt-16" aria-labelledby="work-title">
      <div className="site-shell">
        <SectionHeading
          index="01"
          kicker="Selected work"
          id="work-title"
          title={
            <>
              Projects with a problem behind them,
              <br className="hidden sm:block" /> not just a screenshot.
            </>
          }
          lede="Each entry opens into a case study: the problem, the decisions, what broke, and what I'd do differently. Live links are real deployments."
        />

        <div className="mt-12 lg:mt-16">
          {featuredProjects.map((p, i) => (
            <FeaturedProject key={p.slug} project={p} index={i} />
          ))}
        </div>

        <Reveal className="border-t border-[var(--line)] pt-10">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="section-kicker">More work</h3>
            <span className="meta-mono">{moreProjects.length} projects</span>
          </div>
          <ul className="mt-6 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {moreProjects.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/work/${p.slug}`}
                  className="group grid gap-2 py-5 transition-colors hover:text-[var(--accent)] sm:grid-cols-12 sm:items-center sm:gap-6"
                >
                  <span className="meta-mono sm:col-span-1">{p.year}</span>
                  <span className="display-title text-xl sm:col-span-4">{p.title}</span>
                  <span className="body-copy text-sm sm:col-span-5">{p.summary}</span>
                  <span className="meta-mono flex items-center gap-1.5 sm:col-span-2 sm:justify-end">
                    {p.category}
                    <ArrowUpRight size={13} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
