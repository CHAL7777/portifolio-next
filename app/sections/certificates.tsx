import { certificates } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import { ArrowUpRight, Download, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function Certificates() {
  return (
    <section id="certificates" className="section-band bg-[var(--background)]">
      <div className="site-shell">
        <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
          <Reveal>
            <div>
              <p className="section-kicker">Certifications</p>
              <h2 className="display-title mt-4 text-4xl text-[var(--ink)] md:text-6xl">
                Learning records that support the stack.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="body-copy max-w-2xl text-lg">
              Certificates in programming, web development, and AI fundamentals that complement hands-on project
              work.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {certificates.map((certificate, index) => (
            <Reveal key={certificate.credentialId} delay={index * 0.06}>
              <article className="glass-card interactive-card h-full overflow-hidden">
                <a
                  href={certificate.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border-b border-[var(--line)] bg-[var(--surface-solid)]"
                >
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={certificate.image}
                      alt={`${certificate.title} certificate`}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.025]"
                    />
                  </div>
                </a>

                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="tag">{certificate.track}</span>
                    <span className="inline-flex items-center gap-1 text-xs font-black text-[var(--accent-2)]">
                      <ShieldCheck size={14} />
                      {certificate.date}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-black leading-tight text-[var(--ink)]">{certificate.title}</h3>
                  <p className="body-copy mt-2 text-sm">{certificate.issuer}</p>
                  <p className="mt-4 font-mono text-xs text-[var(--muted)]">{certificate.credentialId}</p>

                  <div className="mt-5 flex gap-4">
                    <a href={certificate.image} target="_blank" rel="noopener noreferrer" className="rule-link text-sm">
                      Preview
                      <ArrowUpRight size={14} />
                    </a>
                    <a href={certificate.image} download className="rule-link text-sm">
                      Download
                      <Download size={14} />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
