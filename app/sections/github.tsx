/* eslint-disable @next/next/no-img-element */
import { profile, repositories } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import { ArrowUpRight, Code2, Github, Star } from "lucide-react";

const statsImage = `https://github-readme-stats.vercel.app/api?username=${profile.githubUsername}&show_icons=true&hide_border=true&bg_color=00000000&title_color=00E5FF&text_color=9399b3&icon_color=00E5FF`;
const languageImage = `https://github-readme-stats.vercel.app/api/top-langs/?username=${profile.githubUsername}&layout=compact&hide_border=true&bg_color=00000000&title_color=00E5FF&text_color=9399b3`;
const graphImage = `https://ghchart.rshah.org/00E5FF/${profile.githubUsername}`;

export default function GitHubSection() {
  return (
    <section id="github" className="section-band relative overflow-hidden">
      <div className="site-shell relative z-10">
        {/* Centered header */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="section-kicker">GitHub Open Source & Activity</p>
            <h2 className="display-title mt-4 text-4xl md:text-5xl">Public work, commits, and repository signals.</h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="body-copy mx-auto mt-5 max-w-2xl text-lg">My GitHub profile shows consistent code iterations and full-stack projects built with modern tooling.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="button-base button-primary inline-flex items-center gap-2 mt-6 text-xs">
              <Github size={15} /><span>View @{profile.githubUsername}</span><ArrowUpRight size={14} />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="overflow-hidden p-6 rounded-2xl border border-[var(--line)] bg-[var(--surface)] backdrop-blur-2xl transition-colors hover:border-[var(--line-strong)]">
              <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
                <div className="flex items-center gap-2.5 text-sm font-bold text-[var(--ink)]"><Github size={18} className="text-[var(--accent)]" /><span>GitHub Stats</span></div>
                <span className="text-xs font-[family-name:var(--mono-font)] font-medium text-[var(--accent)]">@{profile.githubUsername}</span>
              </div>
              <div className="mt-4 rounded-xl bg-[var(--surface-solid)] p-3 border border-[var(--line)]">
                <img src={statsImage} alt={`${profile.githubUsername} stats`} loading="lazy" className="w-full rounded-lg object-contain" />
              </div>
            </article>
          </Reveal>
          <Reveal delay={0.06}>
            <article className="overflow-hidden p-6 rounded-2xl border border-[var(--line)] bg-[var(--surface)] backdrop-blur-2xl transition-colors hover:border-[var(--line-strong)]">
              <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
                <div className="flex items-center gap-2.5 text-sm font-bold text-[var(--ink)]"><Code2 size={18} className="text-[var(--accent-2)]" /><span>Top Languages</span></div>
                <span className="text-xs font-[family-name:var(--mono-font)] font-medium text-[var(--accent-2)]">Production</span>
              </div>
              <div className="mt-4 rounded-xl bg-[var(--surface-solid)] p-3 border border-[var(--line)]">
                <img src={languageImage} alt={`${profile.githubUsername} languages`} loading="lazy" className="w-full rounded-lg object-contain" />
              </div>
            </article>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <article className="mt-6 overflow-hidden p-6 rounded-2xl border border-[var(--line)] bg-[var(--surface)] shadow-[var(--shadow-soft)] backdrop-blur-2xl">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-[var(--line)] pb-4">
              <div>
                <p className="text-base font-bold text-[var(--ink)]">Contribution Activity</p>
                <p className="body-copy mt-0.5 text-xs">Public repository commits & pull requests.</p>
              </div>
              <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="rule-link text-xs font-semibold"><span>Full History</span><ArrowUpRight size={13} /></a>
            </div>
            <div className="mt-5 overflow-x-auto rounded-xl bg-[var(--surface-solid)] p-4 border border-[var(--line)]">
              <img src={graphImage} alt={`${profile.githubUsername} contributions`} loading="lazy" className="min-w-[720px] w-full" />
            </div>
          </article>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {repositories.map((repo, i) => (
            <Reveal key={repo.name} delay={i * 0.06}>
              <article className="flex h-full flex-col p-6 rounded-xl border border-[var(--line)] bg-[var(--surface)] backdrop-blur-2xl transition-colors hover:border-[var(--line-strong)]">
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--line)] bg-[var(--surface-strong)] text-[var(--muted)]"><Github size={20} /></div>
                  <span className="inline-flex items-center gap-1 text-xs font-[family-name:var(--mono-font)] font-medium text-[var(--accent)]"><Star size={13} className="text-[var(--accent-2)]" />Public</span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-[var(--ink)] leading-snug">{repo.name}</h3>
                <p className="body-copy mt-2 text-xs leading-relaxed">{repo.description}</p>
                <div className="mt-auto pt-5">
                  <div className="flex flex-wrap gap-1.5 pb-4 border-b border-[var(--line)]">
                    {repo.tags.map((t) => (<span key={t} className="tag text-[0.68rem]">{t}</span>))}
                  </div>
                  <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="rule-link mt-4 text-xs font-semibold"><span>View Repo</span><ArrowUpRight size={13} /></a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
