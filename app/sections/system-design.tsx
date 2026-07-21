import { systemFlows, systemPrinciples } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import { Cloud, Database, KeyRound, Layers3, RadioTower, Route, ServerCog, Workflow } from "lucide-react";

const architectureTopics = [
  {
    title: "Microservices boundaries",
    text: "Separate services only when ownership, scaling, or deployment pressure makes the extra complexity worth it.",
    Icon: Layers3,
  },
  {
    title: "API communication",
    text: "Requests need clear contracts, versioning strategy, validation, and error shapes the frontend can use.",
    Icon: Route,
  },
  {
    title: "Authentication flow",
    text: "Identity should be boring and traceable: session rules, token handling, permission checks, and safe failure states.",
    Icon: KeyRound,
  },
  {
    title: "Database architecture",
    text: "Schema decisions should protect integrity first, then query performance, then reporting and future product questions.",
    Icon: Database,
  },
  {
    title: "Caching and queues",
    text: "Use cache for repeat reads and queues for slow or unreliable work, with invalidation rules written down early.",
    Icon: RadioTower,
  },
  {
    title: "Cloud deployment",
    text: "A deployable system needs environment boundaries, logs, build checks, and a simple rollback story.",
    Icon: Cloud,
  },
  {
    title: "Scalable backend",
    text: "Scaling starts with clear data ownership and observability before it becomes an infrastructure problem.",
    Icon: ServerCog,
  },
  {
    title: "AI pipeline",
    text: "AI features need context retrieval, prompt contracts, output validation, and review paths where mistakes are expensive.",
    Icon: Workflow,
  },
];

export default function SystemDesign() {
  return (
    <section id="system-design" className="section-band bg-[var(--background)]">
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
          <Reveal>
            <div>
              <p className="section-kicker">System design</p>
              <h2 className="display-title mt-4 text-4xl text-[var(--ink)] md:text-4xl">
                I think in flows, boundaries, and failure modes.
              </h2>
              <p className="body-copy mt-5 text-lg">
                A good system does not need to be complicated. It needs to make the important paths clear:
                who can do what, where the data lives, what happens when something fails, and how the team can
                evolve it later.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <ArchitectureMap />
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {systemPrinciples.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 0.06}>
              <article className="solid-card interactive-card h-full p-5">
                <p className="text-sm font-black text-[var(--accent)]">Principle {index + 1}</p>
                <h3 className="mt-4 text-xl font-black text-[var(--ink)]">{principle.title}</h3>
                <p className="body-copy mt-3 text-sm">{principle.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {architectureTopics.map((topic, index) => (
            <Reveal key={topic.title} delay={index * 0.035}>
              <article className="glass-card interactive-card h-full p-5">
                <topic.Icon className="h-7 w-7 text-[var(--accent-2)]" />
                <h3 className="mt-5 text-lg font-black text-[var(--ink)]">{topic.title}</h3>
                <p className="body-copy mt-2 text-sm">{topic.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArchitectureMap() {
  return (
    <div className="cinematic-surface p-5 md:p-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-kicker">Request path</p>
          <h3 className="mt-2 text-2xl font-black text-[var(--ink)]">A production feature is more than a route.</h3>
        </div>
        <p className="text-sm font-bold text-[var(--muted)]">Auth / cache / queue / data / logs</p>
      </div>

      <div className="relative mt-6 overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--surface-strong)] p-4">
        <div className="absolute inset-0 architectural-grid opacity-35" />
        <div className="relative grid gap-3 sm:grid-cols-4">
          {systemFlows.map((step, index) => (
            <div
              key={step}
              className="relative min-h-24 rounded-lg border border-[var(--line)] bg-[var(--surface)] p-3 shadow-[var(--shadow-soft)]"
            >
              <p className="text-xs font-black text-[var(--accent)]">0{index + 1}</p>
              <p className="mt-3 text-sm font-black text-[var(--ink)]">{step}</p>
              <div className="absolute bottom-3 left-3 right-3 h-1 overflow-hidden rounded-full bg-[var(--tag-bg)]">
                <span
                  className="block h-full rounded-full bg-[linear-gradient(90deg,var(--accent),var(--accent-2))]"
                  style={{ width: `${42 + index * 7}%` }}
                />
              </div>
              {index < systemFlows.length - 1 && (
                <span
                  className="absolute -right-2 top-1/2 hidden h-px w-4 bg-[var(--accent)] sm:block"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <p className="body-copy mt-5 text-sm">
        I like to sketch this path before implementation. It exposes missing permissions, unclear ownership,
        slow work that should move to a queue, and frontend states that need to exist before launch.
      </p>
    </div>
  );
}
