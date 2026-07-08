import Reveal from "@/components/reveal";
import { toolchain } from "@/app/data/portfolio";

export default function LogoMarquee() {
  return (
    <section className="border-y border-[var(--line)] bg-[var(--surface-strong)] py-8 backdrop-blur-xl">
      <div className="site-shell">
        <Reveal>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="section-kicker">Working stack</p>
              <p className="mt-2 text-xl font-black text-[var(--ink)]">
                Tools chosen for product clarity, backend reliability, and AI workflows
              </p>
            </div>
            <div className="no-scrollbar flex gap-3 overflow-x-auto pb-1 lg:max-w-3xl">
              {toolchain.map((logo) => (
                <div
                  key={logo.name}
                  className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-3 py-2 text-sm font-black text-[var(--ink)]"
                >
                  <logo.Icon className="text-lg text-[var(--accent)]" aria-hidden="true" />
                  {logo.name}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
