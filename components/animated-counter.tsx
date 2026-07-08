"use client";

import { animate, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const numericValue = Number.parseInt(value, 10);
  const suffix = value.replace(String(numericValue), "");
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const [display, setDisplay] = useState(numericValue ? "0" : value);

  useEffect(() => {
    if (!inView || Number.isNaN(numericValue)) return;

    const unsubscribe = rounded.on("change", (latest) => {
      setDisplay(`${latest}${suffix}`);
    });

    const controls = animate(motionValue, numericValue, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [inView, motionValue, numericValue, rounded, suffix]);

  return <span ref={ref}>{Number.isNaN(numericValue) ? value : display}</span>;
}
