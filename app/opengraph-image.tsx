import { profile } from "@/app/data/portfolio";
import { ImageResponse } from "next/og";

export const alt = `${profile.name} — Software Engineer & Full-Stack Web Developer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0a0b0d",
          color: "#f4f2ed",
          fontFamily: "sans-serif",
          backgroundImage:
            "linear-gradient(rgba(244,242,237,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(244,242,237,0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 22, letterSpacing: 4, color: "#8b8b85" }}>
          <span style={{ color: "#ff4a1c" }}>00</span>
          <span>CHALDEV.VERCEL.APP</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 108, fontWeight: 700, letterSpacing: -5, lineHeight: 0.95 }}>{profile.name}</div>
          <div style={{ fontSize: 34, color: "#cfcec9" }}>Software Engineer · Full-Stack Web Developer</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, letterSpacing: 3, color: "#8b8b85" }}>
          <span>REACT · NEXT.JS · TYPESCRIPT · NODE · FASTAPI · POSTGRESQL</span>
          <span style={{ color: "#ff4a1c" }}>OPEN TO WORK</span>
        </div>
      </div>
    ),
    size,
  );
}
