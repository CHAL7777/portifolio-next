"use client";

import { requestPath } from "@/app/data/portfolio";
import { useReducedMotion } from "framer-motion";
import { useId, useState } from "react";

const POSITIONS: Record<string, { x: number; y: number }> = {
  client: { x: 14, y: 50 },
  edge: { x: 34, y: 22 },
  auth: { x: 34, y: 78 },
  api: { x: 50, y: 50 },
  data: { x: 74, y: 26 },
  cache: { x: 74, y: 74 },
};

const WIRES: Array<[string, string]> = [
  ["client", "edge"],
  ["client", "auth"],
  ["edge", "api"],
  ["auth", "api"],
  ["api", "data"],
  ["api", "cache"],
];

/**
 * A request travelling through a real system. ~3kb of inline SVG.
 * Hover / focus / tap a node to read what the layer owns.
 */
export default function SystemDiagram() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState<string | null>(null);
  const gid = useId().replace(/:/g, "");
  const activeNode = requestPath.find((n) => n.id === active) ?? null;

  return (
    <figure className="m-0">
      <svg
        viewBox="6 12 80 80"
        className="w-full overflow-visible"
        role="img"
        aria-label="Diagram of a request travelling from client through edge and auth to the API, then to Postgres and a cache."
      >
        <defs>
          <marker id={`${gid}-arrow`} viewBox="0 0 8 8" refX="6" refY="4" markerWidth="4" markerHeight="4" orient="auto">
            <path d="M0 0 L8 4 L0 8 z" fill="var(--line-strong)" />
          </marker>
        </defs>

        {WIRES.map(([from, to]) => {
          const a = POSITIONS[from];
          const b = POSITIONS[to];
          const lit = active === from || active === to;
          return (
            <g key={`${from}-${to}`}>
              <line
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke={lit ? "var(--accent)" : "var(--line-strong)"}
                strokeWidth="0.35"
                markerEnd={`url(#${gid}-arrow)`}
                style={{ transition: "stroke 300ms var(--ease-premium)" }}
              />
              {!reduceMotion && (
                <line
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  stroke="var(--accent)"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                  className="trace-flow"
                  opacity={lit ? 0.9 : 0.3}
                />
              )}
            </g>
          );
        })}

        {requestPath.map((node) => {
          const pos = POSITIONS[node.id];
          const isActive = active === node.id;
          return (
            <g
              key={node.id}
              transform={`translate(${pos.x} ${pos.y})`}
              onMouseEnter={() => setActive(node.id)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(node.id)}
              onBlur={() => setActive(null)}
              onClick={() => setActive((cur) => (cur === node.id ? null : node.id))}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActive((cur) => (cur === node.id ? null : node.id));
                }
              }}
              tabIndex={0}
              role="button"
              aria-pressed={isActive}
              aria-label={`${node.label}: ${node.detail}`}
              className="cursor-pointer focus:outline-none"
            >
              <rect
                x="-4.4"
                y="-4.4"
                width="8.8"
                height="8.8"
                fill="var(--background)"
                stroke={isActive ? "var(--accent)" : "var(--line-strong)"}
                strokeWidth={isActive ? 0.6 : 0.4}
                style={{ transition: "stroke 300ms var(--ease-premium)" }}
              />
              <circle r="1.15" fill={isActive ? "var(--accent)" : "var(--muted)"} style={{ transition: "fill 300ms" }} />
              <text y="8.6" textAnchor="middle" fill={isActive ? "var(--ink)" : "var(--muted)"} className="diagram-label">
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>

      <figcaption className="mt-5 flex min-h-[3.75rem] flex-col gap-1.5 border-t border-[var(--line)] pt-3 sm:min-h-[2.75rem] sm:flex-row sm:items-start sm:gap-3">
        <span className="meta-mono shrink-0 pt-0.5">{activeNode ? `— ${activeNode.label}` : "Request path"}</span>
        <span className="body-copy text-sm" aria-live="polite">
          {activeNode ? activeNode.detail : "Select a node to read what each layer is responsible for."}
        </span>
      </figcaption>
    </figure>
  );
}
