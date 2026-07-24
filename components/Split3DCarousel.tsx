"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "motion/react";
import { Badge } from "./ui/badge";

const ICONS = {
  brain: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a4 4 0 0 1 4 4c0 .8-.2 1.5-.6 2.1a8 8 0 0 1 2.8 2.8A4 4 0 0 1 18 12a4 4 0 0 1-4 4" />
      <path d="M12 2a4 4 0 0 0-4 4c0 .8.2 1.5.6 2.1a8 8 0 0 0-2.8 2.8A4 4 0 0 0 6 12a4 4 0 0 0 4 4" />
      <path d="M12 22v-6" />
      <path d="M8 16v-2" />
      <path d="M16 16v-2" />
      <path d="M9 12h6" />
      <path d="M12 8v4" />
    </svg>
  ),
  gear: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  zap: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10" />
    </svg>
  ),
  trending: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
};

const SCENES = [
  {
    id: "cognitive",
    title: "Cognitive Intelligence",
    tag: "Voice & Chat Agents",
    desc: "Natural language understanding across every channel your customers use.",
    icon: ICONS.brain,
    features: [
      "Context-aware conversations that remember every interaction",
      "Multi-channel deployment in under 48 hours",
      "Automatic escalation routing to human agents",
    ],
    layout: "center",
  },
  {
    id: "operational",
    title: "Operational Precision",
    tag: "Workflow & CRM Automation",
    desc: "Your tools connected and multi-step processes automated end to end.",
    icon: ICONS.gear,
    features: [
      "Unified CRM sync across every platform in your stack",
      "Trigger-based multi-step workflow automation with no code",
      "Real-time performance analytics dashboards",
    ],
    layout: "side",
  },
  {
    id: "engagement",
    title: "Engagement Velocity",
    tag: "Lead Capture & Qualification",
    desc: "High-conversion entry points that ensure no lead is left unanswered.",
    icon: ICONS.zap,
    features: [
      "Instant lead capture from every inbound channel",
      "Missed-call text-back sequences deployed in seconds",
      "AI-powered qualification scoring",
    ],
    layout: "side-reverse",
  },
  {
    id: "growth",
    title: "Growth Architecture",
    tag: "Scaling & Retention Systems",
    desc: "Advanced systems designed to maximize lifetime value.",
    icon: ICONS.trending,
    features: [
      "Automated review generation at scale",
      "Retention drips that compound customer lifetime value",
      "Scalable infrastructure for 10x growth",
    ],
    layout: "center",
  },
];

function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (!mounted) return false;
  return reduced;
}

function TiltScene({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const x = useSpring(0, { stiffness: 150, damping: 25 });
  const y = useSpring(0, { stiffness: 150, damping: 25 });

  const handleMouse = useCallback(
    (e: React.MouseEvent) => {
      if (reduced) return;
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      x.set((e.clientX - rect.left - rect.width / 2) / 40);
      y.set(-(e.clientY - rect.top - rect.height / 2) / 40);
    },
    [reduced, x, y],
  );

  const handleLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ perspective: reduced ? undefined : 1200, rotateX: reduced ? 0 : y, rotateY: reduced ? 0 : x }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}

function LargeIcon({ icon, className = "" }: { icon: React.ReactNode; className?: string }) {
  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <div className="opacity-[0.04] [&>svg]:h-auto [&>svg]:w-full [&>svg]:max-w-none">
        {icon}
      </div>
    </div>
  );
}

export default function Split3DCarousel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [mouseX, mouseY]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const spring = useSpring(scrollYProgress, { stiffness: 60, damping: 25 });
  const progress = reduced ? scrollYProgress : spring;

  const smoothMouseX = useSpring(mouseX, { stiffness: 80, damping: 30 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 80, damping: 30 });

  const bgDriftX = useTransform(smoothMouseX, [0, 1], [-25, 25]);
  const bgDriftY = useTransform(smoothMouseY, [0, 1], [-25, 25]);

  const bgMoveY = useTransform(progress, [0, 1], reduced ? [0, 0] : [0, -180]);

  const titleOpacity = useTransform(progress, [0, 0.06], [1, 1]);
  const titleY = useTransform(progress, [0, 0.15], reduced ? [0, 0] : [0, -20]);

  const counterValue = useTransform(progress, (v: number): string => {
    if (v < 0.25) return "01";
    if (v < 0.50) return "02";
    if (v < 0.75) return "03";
    return "04";
  });

  const scenes = SCENES.map((scene, i) => {
    const enter = i * 0.25;
    const exit = (i + 1) * 0.25;

    const opacityNormal = useTransform(progress, [enter - 0.08, enter, exit, exit + 0.08], [0, 1, 1, 0]);
    const yNormal = useTransform(progress, [enter - 0.08, enter], [40, 0]);
    const scaleNormal = useTransform(progress, [enter - 0.08, enter], [0.96, 1]);

    const opacityReduced = useTransform(progress, [0, 1], [1, 1]);
    const yReduced = useTransform(progress, [0, 1], [0, 0]);
    const scaleReduced = useTransform(progress, [0, 1], [1, 1]);

    return {
      ...scene,
      opacity: reduced ? opacityReduced : opacityNormal,
      y: reduced ? yReduced : yNormal,
      scale: reduced ? scaleReduced : scaleNormal,
    };
  });

  const activeScene = useTransform(progress, (v: number): number => {
    if (v < 0.25) return 0;
    if (v < 0.50) return 1;
    if (v < 0.75) return 2;
    return 3;
  });

  const highBg = useTransform(activeScene, [0, 1, 2, 3], [
    "rgba(167,139,250,0.04)",
    "rgba(129,140,248,0.04)",
    "rgba(196,181,253,0.04)",
    "rgba(99,102,241,0.04)",
  ]);

  const ringBg = useTransform(activeScene, [0, 1, 2, 3], [
    "rgba(167,139,250,0.08)",
    "rgba(129,140,248,0.08)",
    "rgba(196,181,253,0.08)",
    "rgba(99,102,241,0.08)",
  ]);

  const SCROLL_HEIGHT = `${SCENES.length * 80}vh`;

  if (reduced) {
    return (
      <section ref={sectionRef} className="relative" style={{ height: SCROLL_HEIGHT }}>
        <div className="sticky top-0 flex h-dvh items-center overflow-hidden">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12 w-full">
            <div className="mb-14">
              <h2 className="font-serif text-4xl font-medium leading-[0.95] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[64px]">
                What we
                <br />
                <span className="text-primary/70">deliver.</span>
              </h2>
            </div>
            <div className="space-y-8">
              {SCENES.map((scene, i) => (
                <div key={scene.id}>
                  <SceneContent
                    scene={scene}
                    accentGradient="from-primary/15 via-primary/5 to-transparent"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="relative" style={{ height: SCROLL_HEIGHT }}>
      <div className="sticky top-0 flex h-dvh items-center overflow-hidden">
        {/* Base dot grid — persistent */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(139,92,246,0.07) 0.5px, transparent 0.5px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse at center, black 25%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 25%, transparent 75%)",
          }}
          aria-hidden="true"
        />

        {/* Background glow — scene-reactive */}
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{ backgroundColor: highBg }}
          aria-hidden="true"
        />

        {/* Blob 1 — mouse-reactive */}
        <motion.div
          className="pointer-events-none absolute -right-24 -top-24 h-[400px] w-[400px] rounded-full blur-[120px]"
          style={{ x: bgDriftX, y: bgDriftY, backgroundColor: ringBg }}
          aria-hidden="true"
        />

        {/* Blob 2 — scroll parallax */}
        <motion.div
          className="pointer-events-none absolute -bottom-32 -left-24 h-[350px] w-[350px] rounded-full bg-primary/[0.03] blur-[100px]"
          style={{ y: bgMoveY }}
          aria-hidden="true"
        />

        {/* Rotating ring — scene-reactive */}
        <motion.div
          className="pointer-events-none absolute right-[12%] top-[15%] h-48 w-48 rounded-full border"
          style={{ rotate: useTransform(progress, [0, 1], [0, 25]), borderColor: ringBg }}
          aria-hidden="true"
        />

        {/* Counters */}
        <motion.div
          className="pointer-events-none fixed bottom-10 right-10 z-50 flex items-center gap-2 font-mono text-xs tracking-[0.15em] text-muted-foreground/50"
          style={{ opacity: titleOpacity }}
        >
          <motion.span className="tabular-nums text-muted-foreground/80">
            {counterValue}
          </motion.span>
          <span className="tracking-[0.3em]">——</span>
          <span className="text-muted-foreground/30">04</span>
        </motion.div>

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1400px] flex-col px-6 lg:px-12">
          {/* Title — persistent header */}
          <motion.div className="pt-12 lg:pt-16" style={{ y: titleY }}>
            <h2 className="font-serif text-4xl font-medium leading-[0.95] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[64px]">
              What we
              <br />
              <span className="text-primary/70">deliver.</span>
            </h2>
          </motion.div>

          {/* Scene stage — fills remaining height */}
          <div className="relative flex flex-1 items-center">
            {scenes.map((scene, i) => {
              const accentColor = [
                "from-primary/15 via-primary/5 to-transparent",
                "from-indigo-500/10 via-indigo-500/3 to-transparent",
                "from-violet-400/10 via-violet-400/3 to-transparent",
                "from-indigo-400/10 via-indigo-400/3 to-transparent",
              ][i];

              const isFirst = i === 0;

              return (
                <motion.div
                  key={scene.id}
                  className="absolute inset-0 flex items-center"
                  style={{ opacity: scene.opacity }}
                >
                  <motion.div
                    className="w-full"
                    style={{ y: scene.y, scale: scene.scale }}
                  >
                    {isFirst ? (
                      <TiltScene>
                        <SceneContent scene={scene} accentGradient={accentColor} />
                      </TiltScene>
                    ) : (
                      <SceneContent scene={scene} accentGradient={accentColor} />
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function SceneContent({
  scene,
  accentGradient,
}: {
  scene: (typeof SCENES)[0];
  accentGradient: string;
}) {
  const { icon, tag, title, desc, features, layout } = scene;

  const watermark = (
    <LargeIcon
      icon={icon}
      className="absolute right-[-10%] top-[-10%] w-[60%] sm:w-[50%] lg:w-[40%]"
    />
  );

  if (layout === "center") {
    return (
      <div className="relative rounded-2xl border border-primary/10 bg-gradient-to-br from-primary/[0.04] to-card/50 p-8 backdrop-blur-sm lg:p-14">
        {watermark}
        <div className="relative max-w-2xl">
          <Badge variant="default" className="mb-4 w-fit">
            {tag}
          </Badge>
          <h3 className="font-serif text-3xl leading-[0.95] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl">
            {title}
          </h3>
          <p className="mt-4 max-w-xl text-base text-muted-foreground lg:text-lg">
            {desc}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {features.map((f) => (
              <span
                key={f}
                className="inline-flex items-center gap-1.5 rounded-full border border-primary/15 bg-primary/[0.04] px-3 py-1.5 text-xs text-muted-foreground"
              >
                <span className="h-1 w-1 rounded-full bg-primary/60" />
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (layout === "side") {
    return (
      <div className="relative grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="relative order-2 lg:order-1">
          <div className="rounded-2xl border border-primary/10 bg-gradient-to-br from-primary/[0.04] to-card/50 p-8 backdrop-blur-sm lg:p-12">
            <Badge variant="default" className="mb-3 w-fit">
              {tag}
            </Badge>
            <h3 className="font-serif text-2xl leading-[0.95] tracking-[-0.02em] text-foreground sm:text-3xl lg:text-4xl">
              {title}
            </h3>
            <p className="mt-3 max-w-lg text-sm text-muted-foreground lg:text-base">
              {desc}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {features.map((f) => (
                <span
                  key={f}
                  className="inline-flex items-center gap-1.5 rounded-full border border-primary/15 bg-primary/[0.04] px-3 py-1.5 text-xs text-muted-foreground"
                >
                  <span className="h-1 w-1 rounded-full bg-primary/60" />
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="order-1 flex items-center justify-center lg:order-2">
          <div className="flex h-48 w-48 items-center justify-center lg:h-64 lg:w-64">
            <div className="text-primary/10 [&>svg]:h-auto [&>svg]:w-full [&>svg]:max-w-none">
              {icon}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
      <div className="flex items-center justify-center">
        <div className="flex h-48 w-48 items-center justify-center lg:h-64 lg:w-64">
          <div className="text-primary/10 [&>svg]:h-auto [&>svg]:w-full [&>svg]:max-w-none">
            {icon}
          </div>
        </div>
      </div>
      <div>
        <div className="rounded-2xl border border-primary/10 bg-gradient-to-br from-primary/[0.04] to-card/50 p-8 backdrop-blur-sm lg:p-12">
          <Badge variant="default" className="mb-3 w-fit">
            {tag}
          </Badge>
          <h3 className="font-serif text-2xl leading-[0.95] tracking-[-0.02em] text-foreground sm:text-3xl lg:text-4xl">
            {title}
          </h3>
          <p className="mt-3 max-w-lg text-sm text-muted-foreground lg:text-base">
            {desc}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {features.map((f) => (
              <span
                key={f}
                className="inline-flex items-center gap-1.5 rounded-full border border-primary/15 bg-primary/[0.04] px-3 py-1.5 text-xs text-muted-foreground"
              >
                <span className="h-1 w-1 rounded-full bg-primary/60" />
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
