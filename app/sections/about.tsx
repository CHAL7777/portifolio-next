import { certificates, education, profile, timeline } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="section-band scroll-mt-16" aria-labelledby="about-title">
      <div className="site-shell">
        <SectionHeading
          index="04"
          kicker="About"
          id="about-title"
          title="A student who ships, based in Addis Ababa."
          action={
            <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="button-base button-secondary">
              Download résumé
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          }
        />

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="drafted relative aspect-[4/5] max-w-sm overflow-hidden border border-[var(--line)] bg-[var(--surface-solid)]">
              <Image
                src={profile.avatar}
                alt={`Portrait of ${profile.name}`}
                fill
                sizes="(min-width: 1024px) 30vw, 24rem"
                className="object-cover grayscale-[20%]"
              />
            </div>
            <dl className="mt-6 grid max-w-sm grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="meta-mono">Based in</dt>
                <dd className="mt-1 text-[var(--ink)]">{profile.location}</dd>
              </div>
              <div>
                <dt className="meta-mono">Timezone</dt>
                <dd className="mt-1 text-[var(--ink)]">{profile.timezone}</dd>
              </div>
              <div className="col-span-2">
                <dt className="meta-mono">Status</dt>
                <dd className="mt-1 text-[var(--ink)]">{profile.availability}</dd>
              </div>
            </dl>
          </Reveal>

          <div className="lg:col-span-8">
            <Reveal className="max-w-2xl space-y-5">
              <p className="display-lede">
                I&apos;m a software engineering student at Haramaya University and a self-taught full-stack developer. I started with HTML and CSS, got hooked on the moment a page does something, and have been building end-to-end web apps since.
              </p>
              <p className="body-copy">
                What I care about is the whole thing working: a schema that fits the domain, an API that&apos;s predictable, and a UI that doesn&apos;t make people think. Most of the projects on this page started as a real inconvenience — a hotel with no way to book online, students with scattered study material — and turned into something deployed.
              </p>
              <p className="body-copy">
                I&apos;m looking for freelance work, internships, and junior engineering roles where I can learn from people who have shipped at scale. I write clear commits, ask questions early, and prefer a working demo over a long meeting.
              </p>
            </Reveal>

            <Reveal className="mt-12">
              <h3 className="section-kicker">Timeline</h3>
              <ol className="mt-5 border-l border-[var(--line)]">
                {timeline.map((entry) => (
                  <li key={entry.period + entry.title} className="relative pb-8 pl-6 last:pb-0">
                    <span className="absolute -left-[3px] top-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                    <span className="meta-mono">{entry.period}</span>
                    <p className="mt-1.5 font-medium text-[var(--ink)]">
                      {entry.title} <span className="text-[var(--muted)]">· {entry.organization}</span>
                    </p>
                    <p className="body-copy mt-1.5 text-sm">{entry.text}</p>
                  </li>
                ))}
              </ol>
            </Reveal>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <Reveal>
                <h3 className="section-kicker">Education</h3>
                <p className="mt-4 font-medium text-[var(--ink)]">{education.degree}</p>
                <p className="body-copy text-sm">{education.institution}</p>
                <p className="meta-mono mt-1">{education.period}</p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Relevant coursework">
                  {education.coursework.map((c) => (
                    <li key={c} className="tag">
                      {c}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.05}>
                <h3 className="section-kicker">Certificates</h3>
                <ul className="mt-4 divide-y divide-[var(--line)] border-y border-[var(--line)]">
                  {certificates.map((c) => (
                    <li key={c.title} className="flex items-center justify-between gap-4 py-3">
                      <div>
                        <p className="text-sm font-medium text-[var(--ink)]">{c.title}</p>
                        <p className="text-xs text-[var(--muted)]">{c.issuer}</p>
                      </div>
                      <span className="meta-mono">{c.year}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
