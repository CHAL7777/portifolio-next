"use client";

import { useEffect, useRef, useCallback } from "react";

/* ═══════════════════════════════════════════════════════════
   STARFIELD CANVAS — Fluid Night Sky with Stars & Nebula
   ═══════════════════════════════════════════════════════════ */

interface Star {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  alpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  color: string;
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  length: number;
  color: string;
}

interface NebulaCloud {
  x: number;
  y: number;
  radiusX: number;
  radiusY: number;
  color: string;
  alpha: number;
  driftSpeedX: number;
  driftSpeedY: number;
  phaseX: number;
  phaseY: number;
  rotation: number;
  rotationSpeed: number;
}

const STAR_COLORS = [
  "255,255,255",     // white
  "200,220,255",     // cool blue-white
  "180,200,255",     // soft blue
  "0,229,255",       // accent cyan
  "168,85,247",      // accent purple (rare)
  "255,220,180",     // warm yellow
];

const NEBULA_COLORS = [
  { r: 0, g: 229, b: 255 },   // cyan
  { r: 168, g: 85, b: 247 },  // purple
  { r: 100, g: 120, b: 255 }, // indigo
  { r: 255, g: 107, b: 107 }, // coral (faint)
  { r: 34, g: 211, b: 238 },  // teal
  { r: 99, g: 102, b: 241 },  // indigo-500
];

function createStars(count: number, width: number, height: number): Star[] {
  const stars: Star[] = [];
  for (let i = 0; i < count; i++) {
    // More small stars, fewer large ones
    const sizeTier = Math.random();
    let radius: number;
    if (sizeTier < 0.7) radius = Math.random() * 0.8 + 0.3;       // tiny
    else if (sizeTier < 0.92) radius = Math.random() * 1.2 + 0.8;  // medium
    else radius = Math.random() * 1.8 + 1.2;                       // bright

    // Rare accent-colored stars, most are white/blue
    const colorIdx = Math.random() < 0.08
      ? Math.floor(Math.random() * STAR_COLORS.length)
      : Math.floor(Math.random() * 3);

    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius,
      baseAlpha: 0.3 + Math.random() * 0.7,
      alpha: 0.3 + Math.random() * 0.7,
      twinkleSpeed: 0.3 + Math.random() * 2.5,
      twinklePhase: Math.random() * Math.PI * 2,
      color: STAR_COLORS[colorIdx],
    });
  }
  return stars;
}

function createNebulaClouds(count: number, width: number, height: number): NebulaCloud[] {
  const clouds: NebulaCloud[] = [];
  for (let i = 0; i < count; i++) {
    const nc = NEBULA_COLORS[i % NEBULA_COLORS.length];
    const baseRadius = Math.min(width, height) * (0.2 + Math.random() * 0.25);
    clouds.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radiusX: baseRadius * (0.8 + Math.random() * 0.6),
      radiusY: baseRadius * (0.6 + Math.random() * 0.5),
      color: `${nc.r},${nc.g},${nc.b}`,
      alpha: 0.015 + Math.random() * 0.025,
      driftSpeedX: 0.08 + Math.random() * 0.15,
      driftSpeedY: 0.06 + Math.random() * 0.12,
      phaseX: Math.random() * Math.PI * 2,
      phaseY: Math.random() * Math.PI * 2,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.0003,
    });
  }
  return clouds;
}

function createShootingStar(width: number, height: number): ShootingStar {
  const startX = Math.random() * width * 0.8;
  const startY = Math.random() * height * 0.5;
  const angle = (Math.PI / 6) + Math.random() * (Math.PI / 4);
  const speed = 4 + Math.random() * 6;
  const colors = ["0,229,255", "168,85,247", "255,255,255", "34,211,238"];

  return {
    x: startX,
    y: startY,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    life: 1,
    maxLife: 60 + Math.random() * 40,
    length: 40 + Math.random() * 80,
    color: colors[Math.floor(Math.random() * colors.length)],
  };
}

export default function StarfieldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const cloudsRef = useRef<NebulaCloud[]>([]);
  const shootingStarsRef = useRef<ShootingStar[]>([]);
  const animFrameRef = useRef<number>(0);
  const timeRef = useRef<number>(0);
  const shootingTimerRef = useRef<number>(0);

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;

    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(dpr, dpr);

    // Responsive star count
    const area = w * h;
    const starCount = Math.min(Math.floor(area / 2800), 500);

    starsRef.current = createStars(starCount, w, h);
    cloudsRef.current = createNebulaClouds(6, w, h);
    shootingStarsRef.current = [];
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    resize();
    window.addEventListener("resize", resize);

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const animate = () => {
      const w = canvas.width / (Math.min(window.devicePixelRatio || 1, 2));
      const h = canvas.height / (Math.min(window.devicePixelRatio || 1, 2));

      timeRef.current += 0.016; // ~60fps time step
      const t = timeRef.current;

      // Clear
      ctx.clearRect(0, 0, w, h);

      // ─── NEBULA CLOUDS ─────────────────────────────
      ctx.globalCompositeOperation = "screen";
      for (const cloud of cloudsRef.current) {
        cloud.rotation += cloud.rotationSpeed;
        const cx = cloud.x + Math.sin(t * cloud.driftSpeedX + cloud.phaseX) * 60;
        const cy = cloud.y + Math.cos(t * cloud.driftSpeedY + cloud.phaseY) * 40;

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(cloud.rotation);

        const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, cloud.radiusX);
        // Breathing alpha
        const breathe = cloud.alpha + Math.sin(t * 0.3 + cloud.phaseX) * 0.008;
        grad.addColorStop(0, `rgba(${cloud.color},${breathe * 1.5})`);
        grad.addColorStop(0.3, `rgba(${cloud.color},${breathe * 0.8})`);
        grad.addColorStop(0.7, `rgba(${cloud.color},${breathe * 0.3})`);
        grad.addColorStop(1, `rgba(${cloud.color},0)`);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.ellipse(0, 0, cloud.radiusX, cloud.radiusY, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // ─── STARS ─────────────────────────────────────
      ctx.globalCompositeOperation = "screen";
      for (const star of starsRef.current) {
        // Twinkle
        star.alpha =
          star.baseAlpha *
          (0.5 + 0.5 * Math.sin(t * star.twinkleSpeed + star.twinklePhase));

        ctx.beginPath();

        if (star.radius > 1.2) {
          // Bright stars get a glow halo
          const glowGrad = ctx.createRadialGradient(
            star.x, star.y, 0,
            star.x, star.y, star.radius * 4
          );
          glowGrad.addColorStop(0, `rgba(${star.color},${star.alpha})`);
          glowGrad.addColorStop(0.3, `rgba(${star.color},${star.alpha * 0.4})`);
          glowGrad.addColorStop(1, `rgba(${star.color},0)`);
          ctx.fillStyle = glowGrad;
          ctx.arc(star.x, star.y, star.radius * 4, 0, Math.PI * 2);
          ctx.fill();

          // Core
          ctx.beginPath();
          ctx.fillStyle = `rgba(${star.color},${Math.min(star.alpha * 1.5, 1)})`;
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillStyle = `rgba(${star.color},${star.alpha})`;
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // ─── SHOOTING STARS ────────────────────────────
      shootingTimerRef.current += 1;
      if (shootingTimerRef.current > 180 + Math.random() * 300) {
        shootingStarsRef.current.push(createShootingStar(w, h));
        shootingTimerRef.current = 0;
      }

      ctx.globalCompositeOperation = "lighter";
      shootingStarsRef.current = shootingStarsRef.current.filter((ss) => {
        ss.x += ss.vx;
        ss.y += ss.vy;
        ss.life -= 1 / ss.maxLife;

        if (ss.life <= 0 || ss.x > w + 100 || ss.y > h + 100) return false;

        const alpha = ss.life * 0.8;
        const tailX = ss.x - (ss.vx / Math.sqrt(ss.vx * ss.vx + ss.vy * ss.vy)) * ss.length * ss.life;
        const tailY = ss.y - (ss.vy / Math.sqrt(ss.vx * ss.vx + ss.vy * ss.vy)) * ss.length * ss.life;

        const grad = ctx.createLinearGradient(tailX, tailY, ss.x, ss.y);
        grad.addColorStop(0, `rgba(${ss.color},0)`);
        grad.addColorStop(0.6, `rgba(${ss.color},${alpha * 0.3})`);
        grad.addColorStop(1, `rgba(${ss.color},${alpha})`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(ss.x, ss.y);
        ctx.stroke();

        // Head glow
        const headGrad = ctx.createRadialGradient(ss.x, ss.y, 0, ss.x, ss.y, 4);
        headGrad.addColorStop(0, `rgba(${ss.color},${alpha})`);
        headGrad.addColorStop(1, `rgba(${ss.color},0)`);
        ctx.fillStyle = headGrad;
        ctx.beginPath();
        ctx.arc(ss.x, ss.y, 4, 0, Math.PI * 2);
        ctx.fill();

        return true;
      });

      ctx.globalCompositeOperation = "source-over";

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [resize]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-40"
      aria-hidden="true"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
