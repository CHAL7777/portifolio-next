"use client";

import { certificates } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Download, Maximize2, ShieldCheck, X, ZoomIn } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Certificates() {
  const [activeCert, setActiveCert] = useState<{ src: string; title: string; issuer: string } | null>(null);

  return (
    <section id="certificates" className="section-band bg-[var(--background)]">
      <div className="site-shell">
        <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
          <Reveal>
            <div>
              <p className="section-kicker">Certifications</p>
              <h2 className="display-title mt-4 text-4xl text-[var(--ink)] md:text-4xl">
                Verified credentials & specialized tracks.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="body-copy max-w-2xl text-lg">
              Formal learning milestones in AI systems, modern web programming, and core software engineering fundamentals. Click any credential to preview.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {certificates.map((certificate, index) => (
            <Reveal key={certificate.credentialId} delay={index * 0.06}>
              <article className="glass-card interactive-card group flex h-full flex-col overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--surface)] shadow-md transition-all hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-xl">
                <button
                  type="button"
                  onClick={() =>
                    setActiveCert({
                      src: certificate.image,
                      title: certificate.title,
                      issuer: certificate.issuer,
                    })
                  }
                  className="relative block w-full border-b border-[var(--line)] bg-[#0d0f0d] p-4 cursor-pointer overflow-hidden"
                  aria-label={`Preview ${certificate.title} certificate`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-black/40">
                    <Image
                      src={certificate.image}
                      alt={`${certificate.title} certificate`}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/80 px-3 py-1.5 text-xs font-bold text-white shadow-lg">
                        <ZoomIn size={14} className="text-emerald-400" />
                        Preview Certificate
                      </span>
                    </div>
                  </div>
                </button>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="tag font-bold text-xs">{certificate.track}</span>
                    <span className="inline-flex items-center gap-1 text-xs font-black text-[var(--accent-2)]">
                      <ShieldCheck size={14} />
                      {certificate.date}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-black leading-tight text-[var(--ink)]">{certificate.title}</h3>
                  <p className="body-copy mt-1.5 text-sm font-semibold text-[var(--muted)]">{certificate.issuer}</p>
                  <p className="mt-3 font-mono text-xs text-[var(--muted)]">ID: {certificate.credentialId}</p>

                  <div className="mt-auto pt-5 flex items-center justify-between gap-3 border-t border-[var(--line)]">
                    <button
                      type="button"
                      onClick={() =>
                        setActiveCert({
                          src: certificate.image,
                          title: certificate.title,
                          issuer: certificate.issuer,
                        })
                      }
                      className="rule-link text-xs font-bold"
                    >
                      <span>Expand View</span>
                      <Maximize2 size={13} />
                    </button>
                    <a
                      href={certificate.image}
                      download={`${certificate.title.toLowerCase().replace(/\s+/g, "-")}-certificate`}
                      className="rule-link text-xs font-bold text-[var(--accent)]"
                    >
                      <span>Download</span>
                      <Download size={13} />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Certificate Lightbox Modal */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md md:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[92vh] max-w-4xl overflow-hidden rounded-2xl border border-white/20 bg-[#0d0f0d] p-4 shadow-2xl"
            >
              <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3 px-2">
                <div>
                  <h3 className="text-sm font-bold text-white">{activeCert.title}</h3>
                  <p className="text-xs text-white/60">{activeCert.issuer}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveCert(null)}
                  className="rounded-lg border border-white/14 bg-white/10 p-1.5 text-white/80 transition hover:bg-white/20 hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="relative max-h-[78vh] overflow-y-auto rounded-xl bg-black p-2">
                <Image
                  src={activeCert.src}
                  alt={activeCert.title}
                  width={1200}
                  height={850}
                  className="w-full object-contain rounded-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

