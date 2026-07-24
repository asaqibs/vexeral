"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    title: "Discovery call",
    body: "A 15-minute call to understand your biggest bottleneck.",
  },
  {
    title: "Build",
    body: "We configure your automation stack based on your tier and industry.",
  },
  {
    title: "Testing",
    body: "Every workflow is tested against real scenarios before it ever touches a live lead or customer.",
  },
  {
    title: "Deployment",
    body: "Your automation goes live — usually within days.",
  },
  {
    title: "Ongoing support",
    body: "We monitor performance and make adjustments as your needs change.",
  },
];

const CYCLE_MS = 5000;

/** Animated node mesh: pulsing violet dots joined by lines that draw themselves. */
function NetworkMesh() {
  const nodes = Array.from({ length: 20 }, (_, i) => ({
    x: 10 + (i % 5) * 20,
    y: 12 + Math.floor(i / 5) * 25,
  }));

  return (
    <div className="relative h-full w-full" aria-hidden="true">
      <style>{`
        @keyframes hiw-draw {
          0%   { stroke-dashoffset: 1000; opacity: 0; }
          15%  { opacity: 1; }
          70%  { opacity: 0.7; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hiw-line { animation: none !important; opacity: 0.4; stroke-dasharray: none; }
          .hiw-dot { animation: none !important; }
        }
      `}</style>
      <svg className="absolute inset-0 h-full w-full" style={{ pointerEvents: "none" }}>
        {nodes.slice(0, -1).map((n, i) => {
          const next = nodes[i + 1];
          return (
            <line
              key={`line-${i}`}
              x1={`${n.x}%`}
              y1={`${n.y}%`}
              x2={`${next.x}%`}
              y2={`${next.y}%`}
              className="hiw-line"
              style={{
                stroke: "#8b5cf6",
                strokeWidth: 1.2,
                fill: "none",
                strokeDasharray: 1000,
                animation: "hiw-draw 3s ease-in-out infinite",
                animationDelay: `${i * 0.15}s`,
              }}
            />
          );
        })}
      </svg>
      {nodes.map((n, i) => (
        <div
          key={`dot-${i}`}
          className="hiw-dot absolute h-1.5 w-1.5 rounded-full bg-vmid"
          style={{
            left: `${n.x}%`,
            top: `${n.y}%`,
            animation: `dot-pulse 2s ease-in-out ${i * 0.1}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
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
      if (!isPaused) setActiveStep((prev) => (prev + 1) % steps.length);
    }, CYCLE_MS);
    return () => clearInterval(interval);
  }, [isPaused]);

  function handleStepClick(index: number) {
    setActiveStep(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  }

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative overflow-hidden border-b border-border bg-card py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-primary/[0.04] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Header — title left, animated mesh right */}
        <div className="mb-12 grid items-end gap-4 lg:mb-16 lg:grid-cols-2 lg:gap-12">
          <div className="text-center sm:text-left lg:pb-16">
            <h2
              className={`font-serif text-5xl font-medium leading-[0.9] tracking-[-0.03em] transition-all delay-100 duration-1000 md:text-6xl lg:text-[80px] ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
              }`}
            >
              <span className="block text-foreground">Call.</span>
              <span className="block text-primary/40">Build.</span>
              <span className="block text-primary/15">Launch.</span>
            </h2>
          </div>

          <div
            className={`relative hidden h-[280px] transition-all delay-200 duration-1000 lg:block lg:h-[420px] ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <NetworkMesh />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-card via-transparent to-transparent" />
          </div>
        </div>

        {/* Step cards */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {steps.map((step, index) => (
            <button
              key={step.title}
              type="button"
              onClick={() => handleStepClick(index)}
              className={`relative cursor-pointer rounded-lg border bg-background p-6 text-left transition-all duration-500 lg:p-7 ${
                activeStep === index
                  ? "border-primary/60"
                  : "border-border hover:border-primary/45"
              }`}
            >
              {/* Number + progress line */}
              <div className="mb-7 flex items-center gap-4">
                <span
                  className={`font-serif text-3xl transition-colors duration-300 ${
                    activeStep === index ? "text-primary" : "text-muted-foreground/20"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="h-px flex-1 overflow-hidden bg-border">
                  {activeStep === index && (
                    <div
                      className="animate-progress-fill h-full bg-primary/50"
                      style={{ animationDuration: `${CYCLE_MS}ms` }}
                    />
                  )}
                </div>
              </div>

              <h3 className="font-serif text-xl text-foreground lg:text-2xl">
                {step.title}
              </h3>
              <p
                className={`mt-3 text-sm leading-relaxed text-muted-foreground transition-opacity duration-300 ${
                  activeStep === index ? "opacity-100" : "opacity-60"
                }`}
              >
                {step.body}
              </p>

              {/* Active indicator */}
              <div
                className={`absolute inset-x-0 bottom-0 h-1 origin-left bg-primary transition-transform duration-500 ${
                  activeStep === index ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
