/* eslint-disable @next/next/no-img-element */
import { profile, repositories } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import { ArrowUpRight, Github } from "lucide-react";

const statsImage = `https://github-readme-stats.vercel.app/api?username=${profile.githubUsername}&show_icons=true&hide_border=true&bg_color=00000000&title_color=FF4A1C&text_color=8b8b85&icon_color=FF4A1C`;
const languageImage = `https://github-readme-stats.vercel.app/api/top-langs/?username=${profile.githubUsername}&layout=compact&hide_border=true&bg_color=00000000&title_color=FF4A1C&text_color=8b8b85`;
const graphImage = `https://ghchart.rshah.org/FF4A1C/${profile.githubUsername}`;

export default function GitHubSection() {
  return (
    <section id="github" className="section-band relative">
      <div className="site-shell relative z-10">
        <SectionHeading
          index="07"
          kicker="Open source & activity"
          title={
            <>
              Public work, commits,
              <br />
              and repository signals.
            </>
          }
          lede="My GitHub profile shows consistent code iterations and full-stack projects built with modern tooling."
          action={
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rule-link"
            >
              <Github size={13} /> @{profile.githubUsername} <ArrowUpRight size={13} />
            </a>
          }
        />

        <div className="mt-16 grid gap-px border border-[var(--line)] bg-[var(--line)] lg:grid-cols-2">
          <Reveal>
            <article className="h-full bg-[var(--background)] p-6">
              <p className="meta-mono border-b border-[var(--line)] pb-4">
                Stats — @{profile.githubUsername}
              </p>
              <img
                src={statsImage}
                alt={`${profile.githubUsername} stats`}
                loading="lazy"
                className="mt-4 w-full object-contain"
              />
            </article>
          </Reveal>
          <Reveal delay={0.06}>
            <article className="h-full bg-[var(--background)] p-6">
              <p className="meta-mono border-b border-[var(--line)] pb-4">Top languages</p>
              <img
                src={languageImage}
                alt={`${profile.githubUsername} languages`}
                loading="lazy"
                className="mt-4 w-full object-contain"
              />
            </article>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <article className="drafted mt-6 p-6">
            <div className="flex flex-col gap-2 border-b border-[var(--line)] pb-4 sm:flex-row sm:items-baseline sm:justify-between">
              <p className="meta-mono">Contribution activity</p>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rule-link"
              >
                Full history <ArrowUpRight size={13} />
              </a>
            </div>
            <div className="mt-5 overflow-x-auto">
              <img
                src={graphImage}
                alt={`${profile.githubUsername} contributions`}
                loading="lazy"
                className="w-full min-w-[720px]"
              />
            </div>
          </article>
        </Reveal>

        <div className="mt-6 grid gap-px border border-[var(--line)] bg-[var(--line)] md:grid-cols-3">
          {repositories.map((repo, i) => (
            <Reveal key={repo.name} delay={i * 0.05}>
              <article className="flex h-full flex-col bg-[var(--background)] p-6 transition-colors hover:bg-[var(--surface)]">
                <span className="meta-mono text-[var(--accent)]">
                  R/{String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display-title mt-4 text-lg">{repo.name}</h3>
                <p className="body-copy mt-2 text-sm">{repo.description}</p>
                <div className="mt-auto pt-6">
                  <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-[var(--line)] pt-4">
                    {repo.tags.map((t) => (
                      <span key={t} className="meta-mono text-[var(--ink-soft)]">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={profile.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rule-link mt-5"
                  >
                    View repo <ArrowUpRight size={13} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
