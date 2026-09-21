import { pinnedRepos, profile, type Repo } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import { ArrowUpRight, Star } from "lucide-react";
import { SiGithub } from "react-icons/si";

type GitHubRepo = {
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
  stargazers_count: number;
  pushed_at: string;
  fork: boolean;
  archived: boolean;
};

/**
 * Pull the most recently pushed public repos straight from GitHub, revalidated
 * daily. If the API is rate-limited or down, fall back to a verified static list
 * so the section never shows fabricated numbers.
 */
async function getRepos(): Promise<{ repos: Repo[]; live: boolean }> {
  try {
    const res = await fetch(`https://api.github.com/users/${profile.githubUsername}/repos?sort=pushed&per_page=30&type=owner`, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 60 * 60 * 24 },
    });
    if (!res.ok) throw new Error(`GitHub ${res.status}`);
    const data = (await res.json()) as GitHubRepo[];
    const repos = data
      .filter((r) => !r.fork && !r.archived)
      .slice(0, 6)
      .map<Repo>((r) => ({
        name: r.name,
        description: r.description,
        language: r.language,
        url: r.html_url,
        stars: r.stargazers_count,
        updatedAt: r.pushed_at,
      }));
    return repos.length ? { repos, live: true } : { repos: pinnedRepos, live: false };
  } catch {
    return { repos: pinnedRepos, live: false };
  }
}

function formatDate(iso?: string) {
  if (!iso) return null;
  return new Date(iso).toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export default async function GitHubSection() {
  const { repos, live } = await getRepos();

  return (
    <section id="github" className="section-band scroll-mt-16" aria-labelledby="github-title">
      <div className="site-shell">
        <SectionHeading
          index="05"
          kicker="Open source"
          id="github-title"
          title="The code is public. Go read it."
          lede={live ? "Most recently pushed public repositories, fetched from GitHub and refreshed daily." : "A selection of public repositories."}
          action={
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="button-base button-secondary">
              <SiGithub size={15} aria-hidden="true" />
              github.com/{profile.githubUsername}
            </a>
          }
        />

        <ul className="mt-12 grid gap-px border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {repos.map((repo, i) => (
            <Reveal as="li" key={repo.url} delay={Math.min(i * 0.04, 0.2)} className="bg-[var(--background)]">
              <a href={repo.url} target="_blank" rel="noopener noreferrer" className="group flex h-full flex-col p-5 transition-colors hover:bg-[var(--surface)] sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-mono text-sm font-medium text-[var(--ink)] group-hover:text-[var(--accent)]">{repo.name}</h3>
                  <ArrowUpRight size={15} className="shrink-0 text-[var(--muted)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </div>
                <p className="body-copy mt-3 flex-1 text-sm">{repo.description ?? "No description provided."}</p>
                <div className="meta-mono mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-[var(--line)] pt-3">
                  {repo.language && (
                    <span className="inline-flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--blueprint)]" aria-hidden="true" />
                      {repo.language}
                    </span>
                  )}
                  {repo.stars > 0 && (
                    <span className="inline-flex items-center gap-1">
                      <Star size={11} aria-hidden="true" /> {repo.stars}
                    </span>
                  )}
                  {repo.updatedAt && <span className="ml-auto">{formatDate(repo.updatedAt)}</span>}
                </div>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
