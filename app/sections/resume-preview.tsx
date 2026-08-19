import { profile } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import { ArrowUpRight, CheckCircle2, Download, FileUser } from "lucide-react";

export default function ResumePreview() {
  return (
    <section id="resume" className="section-band relative overflow-hidden">
      <div className="site-shell relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="section-kicker">Curriculum Vitae</p>
            <h2 className="display-title mt-4 text-4xl md:text-5xl">Recruiter-ready resume access.</h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="body-copy mx-auto mt-5 max-w-2xl text-lg">Review career milestones, tech stack, and project delivery records.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="button-base button-primary text-xs"><span>Open PDF</span><ArrowUpRight size={15} /></a>
              <a href={profile.resumeUrl} download className="button-base button-secondary text-xs"><Download size={15} /><span>Download</span></a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.14}>
          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] shadow-[var(--shadow-soft)] backdrop-blur-2xl">
            <div className="flex items-center justify-between border-b border-[var(--line)] p-4 bg-[var(--surface-strong)]">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--line)] bg-[var(--surface)] text-[var(--accent)]"><FileUser size={18} /></div>
                <div>
                  <p className="text-sm font-bold text-[var(--ink)]">{profile.name} — Resume.pdf</p>
                  <p className="text-[0.68rem] text-[var(--muted)] font-medium">Software Engineer</p>
                </div>
              </div>
              <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="rule-link text-xs font-semibold"><span>Expand</span><ArrowUpRight size={13} /></a>
            </div>
            <iframe title={`${profile.name} resume`} src={`${profile.resumeUrl}#view=FitH`} loading="lazy" className="h-[32rem] w-full bg-[var(--surface-solid)]" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
