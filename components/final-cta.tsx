"use client";

import { useEffect, useRef, useState } from "react";

export function FinalCta() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 40 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-b border-border py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div
          className={`relative border border-border transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setMousePos({
              x: ((e.clientX - rect.left) / rect.width) * 100,
              y: ((e.clientY - rect.top) / rect.height) * 100,
            });
          }}
        >
          {/* Cursor-following spotlight */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(139,92,246,0.14), transparent 40%)`,
            }}
          />

          <div className="relative z-10 flex items-center justify-between gap-12 px-8 py-16 lg:px-16 lg:py-24">
            <div className="flex-1 text-center sm:text-left">
              <h2 className="max-w-3xl font-serif text-4xl font-medium leading-[0.95] tracking-[-0.03em] text-ink sm:text-5xl lg:text-[72px]">
                Every hour you wait,
                <br />
                <span className="text-vlight/70">another lead goes unanswered.</span>
              </h2>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Fifteen minutes is all it takes to find out where your business
                is leaking revenue — and what it costs to fix it.
              </p>
              <div className="mt-10">
                <a
                  href="/#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-9 py-4 text-base font-medium text-primary-foreground transition-all hover:bg-primary/80"
                >
                  Book a Free Strategy Call
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
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
              </div>
              <p className="mt-8 font-mono text-xs uppercase tracking-[0.16em] text-mute">
                15 minutes · No pitch · No commitment
              </p>
            </div>

            {/* Crystal render — fills the reference design's right image slot */}
            <div
              className="pointer-events-none hidden w-[380px] shrink-0 select-none xl:block"
              aria-hidden="true"
            >
              <img
                src="/shapes/shape-crystal.webp"
                alt=""
                loading="lazy"
                decoding="async"
                className="animate-shape-float-slow w-full"
                style={{
                  filter: "drop-shadow(0 40px 70px rgba(139,92,246,0.35))",
                }}
              />
            </div>
          </div>

          {/* Decorative corners */}
          <div
            aria-hidden="true"
            className="absolute right-0 top-0 h-16 w-16 border-b border-l border-border lg:h-24 lg:w-24"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-16 w-16 border-r border-t border-border lg:h-24 lg:w-24"
          />
        </div>
      </div>
    </section>
  );
}
