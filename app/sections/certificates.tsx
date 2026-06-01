import { ArrowUpRight, Download, ShieldCheck } from "lucide-react";
import Image from "next/image";

const certificates = [
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "Udacity",
    date: "2025",
    credentialId: "UD-AI-9920",
    image: "/docs/ai.png",
    track: "AI",
  },
  {
    title: "Programming Fundamentals",
    issuer: "Udacity",
    date: "2025",
    credentialId: "UD-PROG-4412",
    image: "/docs/web.png",
    track: "Programming",
  },
  {
    title: "Web Programming",
    issuer: "Hucisa",
    date: "2024",
    credentialId: "HU-WEB-2024",
    image: "/docs/web-h.jpg",
    track: "Web",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="section-band bg-[var(--surface-alt)]">
      <div className="site-shell">
        <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
          <div>
            <p className="section-label">[Part 05 / 06] Certification</p>
            <h2 className="display-title mt-4 text-5xl text-[var(--ink)] md:text-6xl">
              Learning that supports the work.
            </h2>
          </div>
          <p className="body-copy max-w-2xl text-lg">
            A small record of courses and certificates connected to the way I build: web fundamentals,
            programming, and applied AI.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {certificates.map((certificate) => (
            <article key={certificate.credentialId} className="simple-card overflow-hidden">
              <a
                href={certificate.image}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border-b border-[var(--line)] bg-[var(--input-bg)]"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    fill
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </a>

              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="tag">{certificate.track}</span>
                  <span className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-[0.12em] text-[var(--accent-2)]">
                    <ShieldCheck size={14} />
                    {certificate.date}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black leading-tight text-[var(--ink)]">{certificate.title}</h3>
                <p className="body-copy mt-2 text-sm">{certificate.issuer}</p>
                <p className="mt-4 font-mono text-xs text-[var(--muted)]">{certificate.credentialId}</p>

                <div className="mt-5 flex gap-2">
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
          ))}
        </div>
      </div>
    </section>
  );
}
