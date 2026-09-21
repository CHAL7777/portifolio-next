import type { Project } from "@/app/data/portfolio";
import { ArrowUpRight, Github } from "lucide-react";

/** Live / Source links. Source only renders when a public repo exists. */
export default function ProjectLinks({
  project,
  className = "",
}: {
  project: Pick<Project, "title" | "liveUrl" | "sourceUrl">;
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-center gap-x-6 gap-y-3 ${className}`}>
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="rule-link"
        aria-label={`Open ${project.title} live site (opens in new tab)`}
      >
        Live site <ArrowUpRight size={13} aria-hidden="true" />
      </a>
      {project.sourceUrl && (
        <a
          href={project.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rule-link"
          aria-label={`${project.title} source on GitHub (opens in new tab)`}
        >
          <Github size={13} aria-hidden="true" /> Source
        </a>
      )}
    </div>
  );
}
