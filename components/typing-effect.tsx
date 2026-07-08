"use client";

import { useEffect, useMemo, useState } from "react";

export default function TypingEffect({ phrases }: { phrases: string[] }) {
  const safePhrases = useMemo(() => phrases.filter(Boolean), [phrases]);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (safePhrases.length === 0) return;

    const phrase = safePhrases[phraseIndex];
    const isComplete = length === phrase.length;
    const isEmpty = length === 0;
    const delay = deleting ? 34 : isComplete ? 1250 : 58;

    const timeout = window.setTimeout(() => {
      if (!deleting && isComplete) {
        setDeleting(true);
        return;
      }

      if (deleting && isEmpty) {
        setDeleting(false);
        setPhraseIndex((current) => (current + 1) % safePhrases.length);
        return;
      }

      setLength((current) => current + (deleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [deleting, length, phraseIndex, safePhrases]);

  if (safePhrases.length === 0) return null;

  return (
    <span className="inline-flex min-h-[1.4em] items-center text-[var(--accent)]">
      {safePhrases[phraseIndex].slice(0, length)}
      <span className="ml-1 inline-block h-[1.05em] w-[2px] animate-caret bg-[var(--accent)]" aria-hidden="true" />
    </span>
  );
}
