"use client";

import { useReducedMotion } from "framer-motion";
import { useId, useState } from "react";

type Node = {
  id: string;
  label: string;
  detail: string;
  x: number;
  y: number;
};

/**
 * The signature visual: a request travelling through a real system.
 * Hovering a node explains the layer. Signals pulse along the wires.
 * ~4kb of inline SVG — no WebGL, no canvas, no image payload.
 */
const NODES: Node[] = [
  { id: "client", label: "Client", detail: "Next.js UI. Optimistic state, validated input.", x: 14, y: 50 },
  { id: "edge", label: "Edge", detail: "Routing, caching, rate limits before compute.", x: 34, y: 22 },
  { id: "api", label: "API", detail: "Typed contracts. Explicit error shapes.", x: 50, y: 50 },
  { id: "auth", label: "Auth", detail: "Identity and permission checks, traceable.", x: 34, y: 78 },
  { id: "data", label: "Postgres", detail: "Source of truth. Constraints over conventions.", x: 74, y: 26 },
  { id: "cache", label: "Cache", detail: "Repeat reads, with invalidation rules written down.", x: 74, y: 74 },
];

const WIRES: Array<[string, string]> = [
  ["client", "edge"],
  ["client", "auth"],
  ["edge", "api"],
  ["auth", "api"],
  ["api", "data"],
  ["api", "cache"],
];

const byId = (id: string) => NODES.find((n) => n.id === id)!;

export default function SystemDiagram() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState<string | null>(null);
  const gid = useId().replace(/:/g, "");

  const activeNode = active ? byId(active) : null;

  return (
    <figure className="m-0">
      <svg
        viewBox="6 12 80 80"
        className="w-full overflow-visible"
        role="img"
        aria-label="Diagram of a request travelling from client through edge, auth, and API to the database and cache."
      >
        <defs>
          <marker
            id={`${gid}-arrow`}
            viewBox="0 0 8 8"
            refX="6"
            refY="4"
            markerWidth="4"
            markerHeight="4"
            orient="auto"
          >
            <path d="M0 0 L8 4 L0 8 z" fill="var(--line-strong)" />
          </marker>
        </defs>

        {/* Wires */}
        {WIRES.map(([from, to]) => {
          const a = byId(from);
          const b = byId(to);
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
                  opacity={lit ? 0.9 : 0.35}
                />
              )}
            </g>
          );
        })}

        {/* Nodes */}
        {NODES.map((node) => {
          const isActive = active === node.id;
          return (
            <g
              key={node.id}
              transform={`translate(${node.x} ${node.y})`}
              onMouseEnter={() => setActive(node.id)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(node.id)}
              onBlur={() => setActive(null)}
              onClick={() => setActive((cur) => (cur === node.id ? null : node.id))}
              tabIndex={0}
              role="button"
              aria-label={`${node.label}: ${node.detail}`}
              className="cursor-pointer focus:outline-none"
            >
              {/* Registration square — drafting language, not a bubble */}
              <rect
                x="-4.4"
                y="-4.4"
                width="8.8"
                height="8.8"
                fill="var(--background)"
                stroke={isActive ? "var(--accent)" : "var(--line-strong)"}
                strokeWidth="0.4"
                style={{ transition: "stroke 300ms var(--ease-premium)" }}
              />
              <circle r="1.15" fill={isActive ? "var(--accent)" : "var(--muted)"} style={{ transition: "fill 300ms" }} />
              <text
                y="8.6"
                textAnchor="middle"
                fill={isActive ? "var(--ink)" : "var(--muted)"}
                className="diagram-label"
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Explanation rail — reserves height so nothing shifts on hover */}
      <figcaption className="mt-5 flex min-h-[3.75rem] flex-col gap-1.5 border-t border-[var(--line)] pt-3 sm:min-h-[2.75rem] sm:flex-row sm:items-start sm:gap-3">
        <span className="meta-mono shrink-0 pt-0.5">
          {activeNode ? `— ${activeNode.label}` : "Request path"}
        </span>
        <span className="body-copy text-sm">
          {activeNode
            ? activeNode.detail
            : "Select a node to read what each layer is responsible for."}
        </span>
      </figcaption>
    </figure>
  );
}
