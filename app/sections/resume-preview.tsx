import { profile } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import { ArrowUpRight, CheckCircle2, Download, FileUser, Sparkles } from "lucide-react";

export default function ResumePreview() {
  return (
    <section id="resume" className="section-band bg-[var(--surface-alt)] relative overflow-hidden">
      <div className="site-shell relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
          <Reveal>
            <div>
              <p className="section-kicker">Curriculum Vitae</p>
              <h2 className="display-title mt-4 text-4xl text-[var(--ink)] md:text-5xl font-black">
                Recruiter-ready resume access.
              </h2>
              <p className="body-copy mt-5 text-lg leading-relaxed">
                Review key career milestones, tech stack summary, project delivery records, and verified credentials directly in the PDF preview.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-base button-primary justify-center text-xs font-black"
                >
                  <span>Open Full PDF</span>
                  <ArrowUpRight size={15} />
                </a>
                <a
                  href={profile.resumeUrl}
                  download="Chala_Gudeta_Software_Engineer_Resume.pdf"
                  className="button-base button-secondary justify-center text-xs font-black"
                >
                  <Download size={15} />
                  <span>Download Resume PDF</span>
                </a>
              </div>

              <div className="mt-8 rounded-xl border border-[var(--line)] bg-[var(--surface)] p-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[var(--accent)]">
                  <CheckCircle2 size={14} />
                  <span>Key Resume Sections</span>
                </div>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  <span className="tag text-[0.68rem]">Full-Stack Engineering</span>
                  <span className="tag text-[0.68rem]">AI Pathfinder System</span>
                  <span className="tag text-[0.68rem]">PostgreSQL & Node.js</span>
                  <span className="tag text-[0.68rem]">Next.js & React</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass-card overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] shadow-2xl">
              <div className="flex items-center justify-between border-b border-[var(--line)] p-4 bg-[var(--surface-strong)]">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--line)] bg-[var(--surface)] text-[var(--accent)]">
                    <FileUser size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-black text-[var(--ink)]">{profile.name} — Resume.pdf</p>
                    <p className="text-[0.68rem] text-[var(--muted)] font-medium">Software Engineer • Verified Document</p>
                  </div>
                </div>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rule-link text-xs font-bold"
                >
                  <span>Expand</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
              <iframe
                title={`${profile.name} resume preview`}
                src={`${profile.resumeUrl}#view=FitH`}
                loading="lazy"
                className="h-[32rem] w-full bg-[#111311]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

