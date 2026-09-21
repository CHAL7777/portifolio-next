import { getProject, profile, projects, siteUrl } from "@/app/data/portfolio";
import BackgroundMain from "@/components/background-main";
import Navbar from "@/components/navbar";
import ProjectLinks from "@/components/project-links";
import Reveal from "@/components/reveal";
import ScrollToTop from "@/components/scroll-to-top";
import Footer from "@/app/sections/footer";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Params = { slug: string };

/** Every project is known at build time; anything else is a real 404. */
export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  const title = `${project.title} — Case study`;
  return {
    title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      type: "article",
      url: `${siteUrl}/work/${project.slug}`,
      title: `${title} — ${profile.name}`,
      description: project.summary,
      images: [{ url: project.image, alt: project.imageAlt }],
    },
    twitter: { card: "summary_large_image", title, description: project.summary, images: [project.image] },
  };
}

function Block({ index, title, children, id }: { index: string; title: string; children: React.ReactNode; id: string }) {
  return (
    <Reveal as="article" className="grid gap-4 border-t border-[var(--line)] py-10 md:grid-cols-12 md:gap-8">
      <div className="flex items-baseline gap-3 md:col-span-4">
        <span className="meta-mono text-[var(--accent)]">{index}</span>
        <h2 id={id} className="display-title text-xl">
          {title}
        </h2>
      </div>
      <div className="md:col-span-8">{children}</div>
    </Reveal>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="body-copy flex gap-3">
          <span className="mt-2.5 h-1 w-3 shrink-0 bg-[var(--accent)]" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: `${siteUrl}/work/${project.slug}`,
    image: `${siteUrl}${project.image}`,
    dateCreated: project.year,
    author: { "@type": "Person", name: profile.name, url: siteUrl },
    keywords: project.technologies.join(", "),
  };

  return (
    <>
      <BackgroundMain />
      <Navbar />
      <main id="main" className="text-[var(--foreground)]">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        {/* 1 · Intro */}
        <section className="site-shell pb-12 pt-10 sm:pt-16" aria-labelledby="project-title">
          <Reveal>
            <Link href="/#work" className="rule-link">
              <ArrowLeft size={13} aria-hidden="true" /> All work
            </Link>
          </Reveal>
          <Reveal delay={0.05} className="section-index mt-8">
            <span className="meta-mono text-[var(--accent)]">{String(index + 1).padStart(2, "0")}</span>
            <span className="meta-mono">{project.category}</span>
            <span className="meta-mono ml-auto">{project.year}</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 id="project-title" className="display-title mt-8 text-4xl sm:text-6xl lg:text-7xl">
              {project.title}
            </h1>
          </Reveal>
          <div className="mt-8 grid gap-8 md:grid-cols-12">
            <Reveal delay={0.15} className="md:col-span-7">
              <p className="display-lede">{project.summary}</p>
              <div className="mt-6">
                <ProjectLinks project={project} />
              </div>
            </Reveal>
            <Reveal delay={0.2} className="md:col-span-5">
              <dl className="grid grid-cols-2 gap-5 border-t border-[var(--line)] pt-5 text-sm md:border-l md:border-t-0 md:pl-8 md:pt-0">
                <div>
                  <dt className="meta-mono">Role</dt>
                  <dd className="mt-1 text-[var(--ink)]">{project.role}</dd>
                </div>
                <div>
                  <dt className="meta-mono">Status</dt>
                  <dd className="mt-1 text-[var(--ink)]">{project.status}</dd>
                </div>
                <div className="col-span-2">
                  <dt className="meta-mono">Stack</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {project.technologies.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </section>

        {/* 2 · Preview */}
        <section className="site-shell" aria-label="Project preview">
          <Reveal className="drafted relative overflow-hidden border border-[var(--line)] bg-[var(--surface-solid)]">
            <div className="relative aspect-[16/9]">
              <Image src={project.image} alt={project.imageAlt} fill priority sizes="(min-width: 1280px) 1200px, 100vw" className="object-cover object-top" />
            </div>
          </Reveal>
        </section>

        <div className="site-shell mt-12 sm:mt-16">
          <Block index="01" id="problem" title="Problem">
            <p className="body-copy text-base">{project.problem}</p>
          </Block>
          <Block index="02" id="goals" title="Goals">
            <List items={project.goals} />
          </Block>
          <Block index="03" id="solution" title="Solution">
            <p className="body-copy text-base">{project.solution}</p>
          </Block>
          <Block index="04" id="features" title="Key features">
            <List items={project.features} />
          </Block>
          <Block index="05" id="architecture" title="Architecture">
            <p className="body-copy text-base">{project.architecture}</p>
            <h3 className="section-kicker mt-8">Technical decisions</h3>
            <div className="mt-4">
              <List items={project.decisions} />
            </div>
          </Block>
          <Block index="06" id="stack" title="Tech stack">
            <ul className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <li key={t} className="tag">
                  {t}
                </li>
              ))}
            </ul>
          </Block>
          <Block index="07" id="challenge" title="Hardest part">
            <p className="body-copy text-base">{project.challenge}</p>
          </Block>
          <Block index="08" id="lessons" title="What I learned">
            <p className="body-copy text-base">{project.lessons}</p>
          </Block>
          <Block index="09" id="result" title="Result">
            <p className="body-copy text-base">{project.result}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="button-base button-primary">
                Open live site <ArrowUpRight size={15} aria-hidden="true" />
              </a>
              {project.sourceUrl && (
                <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="button-base button-secondary">
                  View source <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              )}
            </div>
          </Block>
        </div>

        {/* Prev / next */}
        <nav className="site-shell mt-8 border-t border-[var(--line)] py-10" aria-label="Other projects">
          <div className="grid gap-px border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
            <Link href={`/work/${prev.slug}`} className="group flex flex-col gap-2 bg-[var(--background)] p-6 transition-colors hover:bg-[var(--surface)]">
              <span className="meta-mono inline-flex items-center gap-1.5">
                <ArrowLeft size={12} aria-hidden="true" /> Previous
              </span>
              <span className="display-title text-xl group-hover:text-[var(--accent)]">{prev.title}</span>
            </Link>
            <Link href={`/work/${next.slug}`} className="group flex flex-col gap-2 bg-[var(--background)] p-6 text-right transition-colors hover:bg-[var(--surface)] sm:items-end">
              <span className="meta-mono inline-flex items-center gap-1.5">
                Next <ArrowRight size={12} aria-hidden="true" />
              </span>
              <span className="display-title text-xl group-hover:text-[var(--accent)]">{next.title}</span>
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <Link href="/#work" className="rule-link">
              <ArrowLeft size={13} aria-hidden="true" /> Back to all work
            </Link>
            <Link href="/#contact" className="button-base button-secondary">
              Work with me
            </Link>
          </div>
        </nav>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
