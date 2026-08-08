import Reveal from "@/components/reveal";
import { toolchain } from "@/app/data/portfolio";
import { Layers } from "lucide-react";

export default function LogoMarquee() {
  return (
    <section className="border-y border-[var(--line)] bg-[var(--surface-strong)]/80 py-8 backdrop-blur-xl">
      <div className="site-shell">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--line)] bg-[var(--surface)] text-[var(--accent)] shadow-sm">
                <Layers size={20} />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-wider text-[var(--accent)]">Production Stack</p>
                <p className="mt-0.5 text-lg font-black text-[var(--ink)]">
                  Battle-tested tools for full-stack engineering, databases, and AI workflows
                </p>
              </div>
            </div>

            <div className="no-scrollbar flex flex-wrap gap-2.5 lg:max-w-2xl">
              {toolchain.map((logo) => (
                <div
                  key={logo.name}
                  className="inline-flex items-center gap-2 rounded-xl border border-[var(--line)] bg-[var(--surface)] px-3.5 py-2 text-xs font-bold text-[var(--ink)] shadow-sm transition-all hover:border-[var(--accent)] hover:shadow-md"
                >
                  <logo.Icon className="text-base text-[var(--accent)]" aria-hidden="true" />
                  <span>{logo.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

