import { profile } from "@/app/data/portfolio";
import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--background)] p-6 text-[var(--foreground)]">
      <section className="glass-card max-w-xl p-8 text-center">
        <p className="section-kicker">404</p>
        <h1 className="display-title mt-4 text-4xl text-[var(--ink)] md:text-5xl">Page not found.</h1>
        <p className="body-copy mt-4">
          This route does not exist in {profile.name}&apos;s portfolio. Return home to view projects, skills,
          GitHub activity, resume, and contact details.
        </p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="button-base button-primary">
            <Home size={16} />
            Home
          </Link>
          <Link href="/#projects" className="button-base button-secondary">
            <ArrowLeft size={16} />
            Projects
          </Link>
        </div>
      </section>
    </main>
  );
}
