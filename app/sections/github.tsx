/* eslint-disable @next/next/no-img-element */
import { profile, repositories } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import { ArrowUpRight, Code2, GitFork, Github, Star } from "lucide-react";

const statsImage = `https://github-readme-stats.vercel.app/api?username=${profile.githubUsername}&show_icons=true&hide_border=true&bg_color=00000000&title_color=10B981&text_color=94A3B8&icon_color=10B981`;
const languageImage = `https://github-readme-stats.vercel.app/api/top-langs/?username=${profile.githubUsername}&layout=compact&hide_border=true&bg_color=00000000&title_color=10B981&text_color=94A3B8`;
const graphImage = `https://ghchart.rshah.org/10B981/${profile.githubUsername}`;

export default function GitHubSection() {
  return (
    <section id="github" className="section-band bg-[var(--background)] relative overflow-hidden">
      <div className="site-shell relative z-10">
        <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
          <Reveal>
            <div>
              <p className="section-kicker">GitHub Open Source & Activity</p>
              <h2 className="display-title mt-4 text-4xl text-[var(--ink)] md:text-5xl font-black">
                Public work, commits, and repository signals.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div>
              <p className="body-copy max-w-2xl text-lg leading-relaxed">
                My GitHub profile shows consistent code iterations, system architecture practice, and full-stack projects built with modern tooling.
              </p>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="button-base button-primary inline-flex items-center gap-2 mt-5 text-xs font-black"
              >
                <Github size={15} />
                <span>View @{profile.githubUsername} on GitHub</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="glass-card interactive-card overflow-hidden p-6 rounded-2xl border border-[var(--line)] bg-[var(--surface)] shadow-md transition-all hover:border-[var(--accent)]">
              <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
                <div className="flex items-center gap-2.5 text-sm font-black text-[var(--ink)]">
                  <Github size={18} className="text-emerald-400" />
                  <span>GitHub Stats Overview</span>
                </div>
                <span className="text-xs font-mono font-bold text-emerald-400">@{profile.githubUsername}</span>
              </div>
              <div className="mt-4 rounded-xl bg-[#0c0f0c] p-3 border border-white/10">
                <img
                  src={statsImage}
                  alt={`${profile.githubUsername} GitHub stats`}
                  loading="lazy"
                  className="w-full rounded-lg object-contain"
                />
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.06}>
            <article className="glass-card interactive-card overflow-hidden p-6 rounded-2xl border border-[var(--line)] bg-[var(--surface)] shadow-md transition-all hover:border-[var(--accent)]">
              <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
                <div className="flex items-center gap-2.5 text-sm font-black text-[var(--ink)]">
                  <Code2 size={18} className="text-amber-400" />
                  <span>Top Languages & Stack</span>
                </div>
                <span className="text-xs font-mono font-bold text-amber-400">Production</span>
              </div>
              <div className="mt-4 rounded-xl bg-[#0c0f0c] p-3 border border-white/10">
                <img
                  src={languageImage}
                  alt={`${profile.githubUsername} most-used languages`}
                  loading="lazy"
                  className="w-full rounded-lg object-contain"
                />
              </div>
            </article>
          </Reveal>
        </div>

        {/* Contribution Graph */}
        <Reveal delay={0.08}>
          <article className="glass-card mt-6 overflow-hidden p-6 rounded-2xl border border-[var(--line)] bg-[var(--surface)] shadow-lg">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-[var(--line)] pb-4">
              <div>
                <p className="text-base font-black text-[var(--ink)]">Contribution Activity Matrix</p>
                <p className="body-copy mt-0.5 text-xs text-[var(--muted)]">Public repository commits & pull requests.</p>
              </div>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rule-link text-xs font-bold text-[var(--accent)]"
              >
                <span>Full Commit History</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
            <div className="mt-5 overflow-x-auto rounded-xl bg-[#0a0d0a] p-4 border border-white/10">
              <img
                src={graphImage}
                alt={`${profile.githubUsername} GitHub contribution graph`}
                loading="lazy"
                className="min-w-[720px] w-full"
              />
            </div>
          </article>
        </Reveal>

        {/* Highlighted Repositories */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {repositories.map((repo, index) => (
            <Reveal key={repo.name} delay={index * 0.06}>
              <article className="glass-card interactive-card group flex h-full flex-col p-6 rounded-xl border border-[var(--line)] bg-[var(--surface)] shadow-md transition-all hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--line)] bg-[var(--surface-strong)] text-[var(--ink)] group-hover:text-emerald-400 transition-colors">
                    <Github size={20} />
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[var(--accent)]">
                    <Star size={13} className="text-amber-400 fill-amber-400" />
                    Public Repo
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-black text-[var(--ink)] leading-snug">{repo.name}</h3>
                <p className="body-copy mt-2 text-xs leading-relaxed text-[var(--muted)]">{repo.description}</p>

                <div className="mt-auto pt-5">
                  <div className="flex flex-wrap gap-1.5 pb-4 border-b border-[var(--line)]">
                    {repo.tags.map((tag) => (
                      <span key={tag} className="tag text-[0.68rem] font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={profile.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rule-link mt-4 text-xs font-bold"
                  >
                    <span>View Repository</span>
                    <ArrowUpRight size={13} />
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

