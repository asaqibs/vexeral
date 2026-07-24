"use client";

import { useEffect, useRef, useState } from "react";

const outcomes = [
  {
    value: "<60s",
    label: "Response time reduced",
    sub: "Leads and customers get a reply within 60 seconds — instead of hours.",
    graph: { freq1: 0.28, freq2: 0.09, freqT: 0.5, speed: 0.018, baseline: 0.35, amplitude: 0.55 },
  },
  {
    value: "24/7",
    label: "More leads converted",
    sub: "Automated follow-up recovers leads that would otherwise go cold.",
    graph: { freq1: 0.45, freq2: 0.18, freqT: 1.1, speed: 0.032, baseline: 0.4, amplitude: 0.45, violet: true },
  },
  {
    value: "0",
    label: "Repetitive admin left on your plate",
    sub: "Removing manual data entry and follow-up frees your team for higher-value work.",
    graph: { freq1: 0.22, freq2: 0.07, freqT: 0.4, speed: 0.015, baseline: 0.25, amplitude: 0.6 },
  },
];

/** Animated dot waveform strip, purely decorative. */
function DotGraph({
  height = 32,
  freq1 = 0.35,
  freq2 = 0.12,
  freqT = 0.7,
  speed = 0.025,
  baseline = 0.3,
  amplitude = 0.5,
  violet = false,
}: {
  height?: number;
  freq1?: number;
  freq2?: number;
  freqT?: number;
  speed?: number;
  baseline?: number;
  amplitude?: number;
  violet?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef(0);
  const timeRef = useRef(7.3);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const W = canvas.offsetWidth || 300;
    const H = height;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const render = () => {
      ctx.clearRect(0, 0, W, H);
      const t = timeRef.current;
      const cols = Math.floor(W / 8);

      for (let i = 0; i < cols; i++) {
        const raw =
          baseline + amplitude * Math.sin(i * freq1 + t) * Math.cos(i * freq2 + t * freqT);
        const v = Math.max(0, Math.min(1, raw));
        const dotY = H - 4 - v * (H - 8);
        const x = i * 8 + 4;
        const alpha = 0.15 + v * 0.55;
        const r = 1.5 + v * 1.2;

        ctx.beginPath();
        ctx.arc(x, dotY, r, 0, Math.PI * 2);
        ctx.fillStyle = violet
          ? `rgba(167, 139, 250, ${alpha})`
          : `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      }

      if (!reduce) {
        timeRef.current += speed;
        frameRef.current = requestAnimationFrame(render);
      }
    };

    render();
    return () => cancelAnimationFrame(frameRef.current);
  }, [height, freq1, freq2, freqT, speed, baseline, amplitude, violet]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: `${height}px`, display: "block" }}
      aria-hidden="true"
    />
  );
}

export function Expectations() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="results"
      ref={sectionRef}
      className="relative overflow-hidden border-b border-border py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 text-center sm:text-left lg:mb-20">
          <h2
            className={`font-serif text-4xl font-medium leading-[0.95] tracking-[-0.03em] text-foreground transition-all duration-1000 sm:text-5xl lg:text-[64px] ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            What you can
            <br />
            <span className="text-primary/70">expect.</span>
          </h2>
          <p
            className={`mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground transition-all delay-100 duration-1000 sm:text-xl ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            We&rsquo;re a new agency, so we won&rsquo;t show you invented
            numbers. Here&rsquo;s what the mechanics of automation reliably
            deliver:
          </p>
        </div>

        {/* Outcome cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {outcomes.map((outcome, index) => (
            <div
              key={outcome.label}
              className={`flex flex-col justify-between gap-6 border border-border bg-white/[0.02] p-8 transition-all duration-700 lg:p-10 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div>
                <div className="font-serif text-5xl tracking-tight text-foreground lg:text-6xl">
                  {outcome.value}
                </div>
                <div className="mt-6">
                  <DotGraph height={32} {...outcome.graph} />
                </div>
              </div>
              <div>
                <div className="text-lg text-foreground">{outcome.label}</div>
                <div className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {outcome.sub}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/*
          ROI STATISTICS PLACEHOLDER — replace this row with measured client
          results (response times, conversion lift, hours saved) once real
          engagement data exists. Do not add invented numbers.
        */}
        <div
          className={`mt-16 border-t border-border pt-8 transition-all delay-500 duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
            Real client ROI statistics will be published here as our first
            engagements complete
          </span>
        </div>
      </div>
    </section>
  );
}
