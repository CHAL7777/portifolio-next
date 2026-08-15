"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    // Only on non-touch devices
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      glow.style.display = "none";
      return;
    }

    const handlePointerMove = (e: PointerEvent) => {
      requestAnimationFrame(() => {
        glow.style.setProperty("--glow-x", `${e.clientX}px`);
        glow.style.setProperty("--glow-y", `${e.clientY}px`);
        glow.style.opacity = "1";
      });
    };

    const handlePointerLeave = () => {
      glow.style.opacity = "0";
    };

    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed inset-0 z-[60] opacity-0 transition-opacity duration-500"
      style={{
        background:
          "radial-gradient(420px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(0, 229, 255, 0.05), transparent 60%)",
      }}
      aria-hidden="true"
    />
  );
}
