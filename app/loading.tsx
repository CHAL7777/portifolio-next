export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--background)] text-[var(--foreground)]">
      <div className="glass-card p-6 text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-[var(--line)] border-t-[var(--accent)]" />
        <p className="mt-4 text-sm font-black text-[var(--ink)]">Loading portfolio</p>
      </div>
    </div>
  );
}
