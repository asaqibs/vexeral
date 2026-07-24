"use client";

import { useEffect, useRef, useState } from "react";
import { RotatingText } from "./rotating-text";

const words = ["architect growth", "eliminate leaks", "maximize LTV", "secure loyalty"];

/** Drifting violet particle field rendered behind the hero copy. */
function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef(0);
  const mouseRef = useRef({ x: 0.5, y: 0.35 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Stable pseudo-random particle field seeded by index
    const COUNT = 90;
    const particles = Array.from({ length: COUNT }, (_, i) => {
      const seed = i * 1.618;
      return {
        bx: (seed * 127.1) % 1,
        by: (seed * 311.7) % 1,
        phase: seed * Math.PI * 2,
        speed: 0.35 + (seed % 0.4),
        radius: 1 + (seed % 2),
        violet: i % 3 !== 0,
      };
    });

    let time = 0;
    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      ctx.clearRect(0, 0, w, h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      particles.forEach((p) => {
        const flowX = Math.sin(time * p.speed * 0.4 + p.phase) * 40;
        const flowY = Math.cos(time * p.speed * 0.3 + p.phase * 0.7) * 26;

        const dx = p.bx - mx;
        const dy = p.by - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - dist * 2.8);

        const x = p.bx * w + flowX + influence * Math.cos(time + p.phase) * 30;
        const y = p.by * h + flowY + influence * Math.sin(time + p.phase) * 30;

        const pulse = Math.sin(time * p.speed + p.phase) * 0.5 + 0.5;
        const alpha = 0.06 + pulse * 0.16 + influence * 0.25;

        ctx.beginPath();
        ctx.arc(x, y, p.radius + pulse * 0.8, 0, Math.PI * 2);
        ctx.fillStyle = p.violet
          ? `rgba(167, 139, 250, ${alpha})`
          : `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      });

      if (!reduce) {
        time += 0.016;
        frameRef.current = requestAnimationFrame(render);
      }
    };
    render();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0"
      style={{ width: "100%", height: "100%" }}
      aria-hidden="true"
    />
  );
}

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="top"
      className="noise-overlay relative flex min-h-dvh flex-col overflow-hidden bg-canvas"
    >
      {/* Background: violet nebula + particle field */}
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute left-1/2 top-[34%] h-[720px] w-[1100px] max-w-[140vw] -translate-x-1/2 -translate-y-1/2 blur-[28px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(139,92,246,0.22), transparent 62%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-vdeep/25 via-transparent to-vmid/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-canvas/80" />
        <HeroParticles />
      </div>

      {/* Floating 3D shape — fills the empty right column on desktop */}
      <div
        className={`pointer-events-none absolute right-[-6%] top-1/2 z-[3] hidden w-[min(42vw,640px)] -translate-y-[55%] select-none transition-all duration-[1400ms] xl:block ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
        }`}
        aria-hidden="true"
      >
        <img
          src="/shapes/shape-torus.webp"
          alt=""
          loading="lazy"
          decoding="async"
          className="animate-shape-float w-full"
          style={{
            filter: "drop-shadow(0 40px 80px rgba(139,92,246,0.35))",
          }}
        />
      </div>

      {/* Subtle grid lines */}
      <div
        className="pointer-events-none absolute inset-0 z-[2] overflow-hidden opacity-20"
        aria-hidden="true"
      >
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute inset-x-0 h-px bg-white/10"
            style={{ top: `${12.5 * (i + 1)}%` }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute inset-y-0 w-px bg-white/10"
            style={{ left: `${8.33 * (i + 1)}%` }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-center px-6 pb-16 pt-36 lg:px-12">
        <div className="lg:max-w-[62%]">
          {/* Eyebrow */}
          <div
            className={`mb-8 transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <span className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.32em] text-vlight/70 sm:text-sm">
              <span className="h-px w-8 bg-vmid/40" />
              AI Automation Agency
            </span>
          </div>

            {/* Headline */}
            <h1
              className={`text-left font-serif text-[clamp(2.25rem,7vw,6rem)] font-medium leading-[0.95] tracking-[-0.03em] text-ink transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <span className="block">Precision AI</span>
              <span className="block">systems, built to</span>
              <span className="block text-vlight">
                <RotatingText
                  words={words}
                  className="align-bottom"
                />
              </span>
            </h1>

          {/* Supporting copy */}
            <p
              className={`mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground transition-all duration-1000 delay-200 sm:text-xl ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              We design high-leverage growth engines for businesses that refuse to let potential leads fade away.
            </p>

          {/* CTAs */}
          <div
            className={`mt-10 flex flex-col items-start gap-4 transition-all duration-1000 delay-[400ms] sm:flex-row ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground transition-all hover:bg-primary/80"
            >
              Book a Free Consultation
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-8 py-3.5 text-base font-medium text-foreground transition-all hover:bg-muted"
            >
              Get a Demo
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
