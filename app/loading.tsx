export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--background)] text-[var(--foreground)]" role="status" aria-live="polite">
      <div className="flex items-center gap-3">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--accent)]" />
        <span className="meta-mono">Loading</span>
      </div>
    </div>
  );
}
