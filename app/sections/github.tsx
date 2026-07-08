/* eslint-disable @next/next/no-img-element */
import { profile, repositories } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import { ArrowUpRight, Github, Star } from "lucide-react";

const statsImage = `https://github-readme-stats.vercel.app/api?username=${profile.githubUsername}&show_icons=true&hide_border=true&bg_color=00000000&title_color=0f6b4a&text_color=5f675d&icon_color=a6783a`;
const languageImage = `https://github-readme-stats.vercel.app/api/top-langs/?username=${profile.githubUsername}&layout=compact&hide_border=true&bg_color=00000000&title_color=0f6b4a&text_color=5f675d`;
const graphImage = `https://ghchart.rshah.org/0f6b4a/${profile.githubUsername}`;

export default function GitHubSection() {
  return (
    <section id="github" className="section-band bg-[var(--background)]">
      <div className="site-shell">
        <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
          <Reveal>
            <div>
              <p className="section-kicker">GitHub integration</p>
              <h2 className="display-title mt-4 text-4xl text-[var(--ink)] md:text-6xl">
                Public work, commits, and repository signals.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div>
              <p className="body-copy max-w-2xl text-lg">
                My GitHub profile shows project iterations, technology practice, and a growing portfolio of
                deployable web products.
              </p>
              <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="rule-link mt-5">
                View full GitHub profile
                <ArrowUpRight size={15} />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <article className="glass-card overflow-hidden p-5">
              <div className="flex items-center gap-2 text-sm font-black text-[var(--ink)]">
                <Github size={18} className="text-[var(--accent)]" />
                GitHub stats
              </div>
              <img
                src={statsImage}
                alt={`${profile.githubUsername} GitHub stats`}
                loading="lazy"
                className="mt-4 w-full rounded-lg bg-[var(--surface-solid)]"
              />
            </article>
          </Reveal>

          <Reveal delay={0.06}>
            <article className="glass-card overflow-hidden p-5">
              <div className="flex items-center gap-2 text-sm font-black text-[var(--ink)]">
                <Star size={18} className="text-[var(--accent-4)]" />
                Most-used languages
              </div>
              <img
                src={languageImage}
                alt={`${profile.githubUsername} most-used languages`}
                loading="lazy"
                className="mt-4 w-full rounded-lg bg-[var(--surface-solid)]"
              />
            </article>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <article className="glass-card mt-5 overflow-hidden p-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-black text-[var(--ink)]">Contribution graph</p>
                <p className="body-copy mt-1 text-sm">A quick view of public contribution activity.</p>
              </div>
              <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="rule-link text-sm">
                Open profile
                <ArrowUpRight size={14} />
              </a>
            </div>
            <div className="mt-5 overflow-x-auto rounded-lg bg-[var(--surface-solid)] p-4">
              <img
                src={graphImage}
                alt={`${profile.githubUsername} GitHub contribution graph`}
                loading="lazy"
                className="min-w-[720px] max-w-none"
              />
            </div>
          </article>
        </Reveal>

        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {repositories.map((repo, index) => (
            <Reveal key={repo.name} delay={index * 0.06}>
              <article className="solid-card interactive-card h-full p-5">
                <Github className="h-7 w-7 text-[var(--accent)]" />
                <h3 className="mt-5 text-lg font-black text-[var(--ink)]">{repo.name}</h3>
                <p className="body-copy mt-2 text-sm">{repo.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {repo.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="rule-link mt-5 text-sm">
                  Repository showcase
                  <ArrowUpRight size={14} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
