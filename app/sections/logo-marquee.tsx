import type { IconType } from "react-icons";
import {
  SiFigma,
  SiGithub,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const logos: Array<{ name: string; Icon: IconType }> = [
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Supabase", Icon: SiSupabase },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Prisma", Icon: SiPrisma },
  { name: "Vercel", Icon: SiVercel },
  { name: "GitHub", Icon: SiGithub },
  { name: "Figma", Icon: SiFigma },
];

export default function LogoMarquee() {
  return (
    <section className="overflow-hidden border-y border-[var(--line)] bg-[var(--surface)] py-12">
      <div className="site-shell reveal stagger-2 mb-9 text-center">
        <p className="text-lg font-black text-[var(--ink)] md:text-xl">
          The tools behind my best work
        </p>
        <p className="body-copy mx-auto mt-2 max-w-xl text-sm">
          A focused stack for clean interfaces, useful products, and reliable releases.
        </p>
      </div>

      <div className="site-shell">
        <div className="team-logo-sequence">
          {logos.map((logo, index) => (
            <div
              key={logo.name}
              className="team-logo-item"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="team-logo-content">
                <logo.Icon className="text-3xl" />
                <span>{logo.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
