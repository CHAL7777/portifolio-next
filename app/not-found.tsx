import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center bg-[var(--background)] text-[var(--foreground)]">
      <div className="site-shell py-24">
        <div className="section-index">
          <span className="meta-mono text-[var(--accent)]">404</span>
          <span className="meta-mono">Route not found</span>
        </div>
        <h1 className="display-title mt-8 text-4xl sm:text-6xl">Nothing lives at this address.</h1>
        <p className="body-copy mt-5 max-w-md">The page may have moved, or the link was mistyped. Everything on this site is reachable from the home page.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="button-base button-primary">
            <ArrowLeft size={15} aria-hidden="true" />
            Back home
          </Link>
          <Link href="/#work" className="button-base button-secondary">
            View work
          </Link>
        </div>
      </div>
    </main>
  );
}
