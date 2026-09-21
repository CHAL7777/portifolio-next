import type { ReactNode } from "react";
import Reveal from "./reveal";

/** Numbered, left-aligned section header with a dashed rule. */
export default function SectionHeading({
  index,
  kicker,
  title,
  lede,
  action,
  id,
}: {
  index: string;
  kicker: string;
  title: ReactNode;
  lede?: ReactNode;
  action?: ReactNode;
  id?: string;
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
        <Reveal delay={0.05} className="md:col-span-7">
          <h2 id={id} className="display-title text-[2rem] sm:text-5xl lg:text-[3.5rem]">
            {title}
          </h2>
        </Reveal>

        {(lede || action) && (
          <Reveal delay={0.1} className="md:col-span-5">
            {lede && <p className="body-copy max-w-md text-base">{lede}</p>}
            {action && <div className={lede ? "mt-6" : ""}>{action}</div>}
          </Reveal>
        )}
      </div>
    </header>
  );
}
