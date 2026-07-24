"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "./ui/card";

const reasons = [
  {
    title: "Fast deployment",
    body: "Most builds are live within days, not months.",
    icon: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10" />,
  },
  {
    title: "Custom-built solutions",
    body: "Not a generic automation tool retrofitted for your business — built around how you operate.",
    icon: (
      <>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </>
    ),
  },
  {
    title: "Done-for-you delivery",
    body: "Your team never touches anything technical. We handle the entire build, integration, and launch.",
    icon: (
      <>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
      </>
    ),
  },
  {
    title: "Secure & scalable",
    body: "Systems built to handle growth without breaking.",
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
  {
    title: "Transparent pricing",
    body: "Fixed tiers, no hidden fees, and no long sales process.",
    icon: (
      <>
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.83z" />
        <circle cx="7" cy="7" r="1" />
      </>
    ),
  },
  {
    title: "Ongoing support",
    body: "We maintain and improve your automation after launch — not just at setup.",
    icon: (
      <>
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </>
    ),
  },
];

const chips = [
  "Founder-led",
  "Done-for-you",
  "No lock-in · 30-day notice",
  "Fixed-tier pricing",
];

/* Deterministic sparse glyph field (seeded, so SSR and client render match). */
function asciiRow(row: number) {
  let out = "";
  for (let col = 0; col < 110; col++) {
    const v = (row * 31 + col * 17 + row * col) % 23;
    out += v === 0 ? "+" : v === 11 ? "·" : " ";
  }
  return out;
}

export function WhyUs() {
  const [activeReason, setActiveReason] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
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

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) setActiveReason((prev) => (prev + 1) % reasons.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  function handleReasonClick(index: number) {
    setActiveReason(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  }

  return (
    <section
      id="why-vexeral"
      ref={sectionRef}
      className="relative overflow-hidden bg-ink py-24 text-canvas lg:py-32"
    >
      {/* Faint glyph field background */}
      <div
        className="pointer-events-none absolute inset-0 select-none overflow-hidden whitespace-pre font-mono text-[10px] leading-tight text-canvas/[0.05]"
        aria-hidden="true"
      >
        {Array.from({ length: 60 }, (_, i) => asciiRow(i)).join("\n")}
      </div>

      {/* Glass loop ornament — light section shows off the refraction */}
      <div
        className={`pointer-events-none absolute -top-16 right-[3%] z-[1] hidden w-[280px] select-none transition-all delay-300 duration-1000 lg:block xl:w-[320px] ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
        aria-hidden="true"
      >
        <img
          src="/shapes/shape-loop.webp"
          alt=""
          loading="lazy"
          decoding="async"
          className="animate-shape-float w-full"
          style={{ filter: "drop-shadow(0 30px 50px rgba(0,0,0,0.22))" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 text-center sm:text-left lg:mb-20">
          <h2
            className={`font-serif text-4xl font-medium leading-[0.95] tracking-[-0.03em] transition-all duration-1000 sm:text-5xl lg:text-[80px] ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Why businesses
            <br />
            <span className="text-primary/50">work with us.</span>
          </h2>
        </div>

        {/* Main content */}
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Large statement card */}
          <Card
            className={`relative min-h-[360px] p-8 transition-all duration-700 lg:col-span-7 lg:p-12 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <span className="font-mono text-sm text-vmid/60">
              Delivery, not dashboards
            </span>
            <div className="mt-8">
              <span className="font-serif text-6xl leading-none lg:text-8xl">
                Days,
                <span className="text-vmid/40"> not months.</span>
              </span>
              <span className="mt-4 block max-w-md text-vmid/60">
                From the discovery call to a live system answering your leads —
                without your team touching anything technical.
              </span>
            </div>

            {/* Commitment chips */}
            <div className="relative mt-8 flex flex-wrap gap-2 lg:absolute lg:inset-x-8 lg:bottom-8">
              {chips.map((chip, index) => (
                <Card
                  key={chip}
                  className={`px-3 py-1 font-mono text-xs text-primary/70 transition-all duration-500 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  {chip}
                </Card>
              ))}
            </div>
          </Card>

          {/* Cycling reason stack */}
          <div className="flex flex-col gap-3 lg:col-span-5">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className={`cursor-default rounded-lg px-5 py-4 transition-all duration-500 ${
                  activeReason === index
                    ? "bg-primary/10"
                    : "hover:bg-primary/[0.04]"
                } ${isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
                style={{ transitionDelay: `${index * 80}ms` }}
                onClick={() => handleReasonClick(index)}
                onMouseEnter={() => handleReasonClick(index)}
              >
                <div className="flex items-start gap-3">
                  <span className={`mt-0.5 font-mono text-sm font-medium ${
                    activeReason === index ? "text-primary" : "text-canvas/40"
                  }`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-medium text-canvas">{reason.title}</h3>
                    <p className="mt-0.5 text-sm leading-relaxed text-canvas/60">
                      {reason.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
