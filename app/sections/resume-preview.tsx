import { profile } from "@/app/data/portfolio";
import Reveal from "@/components/reveal";
import { ArrowUpRight, Download, FileUser } from "lucide-react";

export default function ResumePreview() {
  return (
    <section id="resume" className="section-band bg-[var(--surface-alt)]">
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr]">
          <Reveal>
            <div>
              <p className="section-kicker">Resume preview</p>
              <h2 className="display-title mt-4 text-4xl text-[var(--ink)] md:text-6xl">
                Recruiter-ready resume access.
              </h2>
              <p className="body-copy mt-5 text-lg">
                Open the PDF directly, download it, or use the contact section for role-specific follow-up.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="button-base button-primary">
                  <ArrowUpRight size={16} />
                  Open resume
                </a>
                <a href={profile.resumeUrl} download className="button-base button-secondary">
                  <Download size={16} />
                  Download PDF
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass-card overflow-hidden">
              <div className="flex items-center gap-3 border-b border-[var(--line)] p-4">
                <FileUser className="h-5 w-5 text-[var(--accent)]" />
                <div>
                  <p className="font-black text-[var(--ink)]">{profile.name} - Resume</p>
                  <p className="body-copy text-sm">PDF preview</p>
                </div>
              </div>
              <iframe
                title={`${profile.name} resume preview`}
                src={`${profile.resumeUrl}#view=FitH`}
                loading="lazy"
                className="h-[32rem] w-full bg-[var(--surface-solid)]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
