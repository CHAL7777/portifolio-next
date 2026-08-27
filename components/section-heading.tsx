import type { ReactNode } from "react";
import Reveal from "./reveal";

/**
 * Numbered, left-aligned editorial header with a dashed rule.
 * Replaces the centered kicker/title/lede stack every section used to repeat.
 */
export default function SectionHeading({
  index,
  kicker,
  title,
  lede,
  action,
}: {
  index: string;
  kicker: string;
  title: ReactNode;
  lede?: string;
  action?: ReactNode;
}) {
  return (
    <header>
      <Reveal>
        <div className="section-index">
          <span className="meta-mono text-[var(--accent)]">{index}</span>
          <span className="meta-mono">{kicker}</span>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-x-12 gap-y-6 md:grid-cols-12 md:items-end">
        <Reveal delay={0.06} className="md:col-span-7">
          <h2 className="display-title text-[2.15rem] leading-[0.95] sm:text-5xl lg:text-6xl">
            {title}
          </h2>
        </Reveal>

        {(lede || action) && (
          <Reveal delay={0.12} className="md:col-span-5">
            {lede && <p className="body-copy max-w-md text-base">{lede}</p>}
            {action && <div className="mt-6">{action}</div>}
          </Reveal>
        )}
      </div>
    </header>
  );
}
