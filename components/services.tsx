"use client";

import { useEffect, useRef, useState } from "react";
import { IconBadge } from "./icons";
import { Reveal } from "./motion";
import { CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import BorderGlow from "./ui/border-glow";

const servicePillars = [
  {
    pillar: "Engagement Layer",
    description: "High-conversion entry points that ensure no lead is left unanswered.",
    services: [
      {
        icon: "message",
        category: "Chat",
        title: "WhatsApp AI Bots",
        body: "Instant automated replies, lead qualification, and follow-up sequences over WhatsApp — every message answered in seconds.",
      },
      {
        icon: "phone",
        category: "Voice",
        title: "AI Voice Agents",
        body: "Answer calls, capture caller intent, book callbacks, and log everything automatically — no call goes unhandled.",
      },
      {
        icon: "target",
        category: "Growth",
        title: "Lead Generation Bots",
        body: "Website chat widgets that qualify visitors, or outbound systems that actively source new prospects for you.",
      },
      {
        icon: "phoneMissed",
        category: "Recovery",
        title: "Missed-Call Text-Back",
        body: "The moment a call is missed, the caller gets an instant SMS or WhatsApp response — the lead stays warm.",
      },
    ],
  },
  {
    pillar: "Operational Layer",
    description: "The invisible engine that syncs your data and automates your internal workflows.",
    services: [
      {
        icon: "database",
        category: "CRM",
        title: "CRM Automation",
        body: "Your CRM stays clean, synced, and automatically updated across every channel — no more stale records.",
      },
      {
        icon: "workflow",
        category: "Ops",
        title: "Workflow Automation",
        body: "Built on n8n: your tools connected and multi-step processes automated end to end.",
      },
      {
        icon: "book",
        category: "Support",
        title: "AI Knowledge Base",
        body: "A trained assistant that answers customer and internal questions instantly by pulling from your own documentation.",
      },
      {
        icon: "calendar",
        category: "Booking",
        title: "Appointment Booking",
        body: "Bots book directly into your calendar from chat, voice, or web conversations — no back-and-forth.",
      },
    ],
  },
  {
    pillar: "Growth Layer",
    description: "Advanced systems designed to qualify high-intent leads and maximize lifetime value.",
    services: [
      {
        icon: "filter",
        category: "Leads",
        title: "Lead Qualification",
        body: "Every lead automatically scored and routed based on intent, urgency, and fit — your team only talks to buyers.",
      },
      {
        icon: "star",
        category: "Reviews",
        title: "Review & Reputation Automation",
        body: "Reviews auto-requested after every completed job or sale, tracked to completion, with ratings aggregated in one place.",
      },
      {
        icon: "repeat",
        category: "Retention",
        title: "Abandoned-Lead Re-Engagement",
        body: "Drip sequences that reopen conversations with leads who've gone cold — revenue recovered from your existing list.",
      },
      {
        icon: "sparkles",
        category: "Custom",
        title: "Custom AI Solutions",
        body: "For workflows that don't fit a standard package — scoped, built, and deployed around your operation.",
      },
    ],
  },
];

export function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative overflow-hidden border-b border-border py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Header — diagonal split */}
        <div className="mb-16 lg:mb-24">
          <div className="grid items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7 text-center sm:text-left">
              <h2
                className={`font-serif text-5xl font-medium leading-[0.95] tracking-[-0.03em] text-foreground transition-all duration-1000 sm:text-6xl lg:text-[80px] ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                What we
                <br />
                <span className="text-primary/70">build.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pb-4 text-center sm:text-left">
              <p
                className={`text-lg leading-relaxed text-muted-foreground transition-all delay-200 duration-1000 sm:text-xl ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                Chat, voice, CRM, and workflow systems — deployed on their own
                or stacked into one automation layer around your business.
              </p>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="space-y-16 lg:space-y-24">
          {servicePillars.map((pillar, pIdx) => (
            <div key={pillar.pillar} className="space-y-8">
              <Reveal delay={pIdx * 0.2}>
                <div className="space-y-2">
                  <h3 className="font-serif text-3xl text-foreground">{pillar.pillar}</h3>
                  <p className="text-muted-foreground/60 max-w-2xl">{pillar.description}</p>
                </div>
              </Reveal>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {pillar.services.map((service) => (
                    <BorderGlow
                      key={service.title}
                      backgroundColor="#0f0c20"
                      borderRadius={16}
                      glowRadius={24}
                      edgeSensitivity={25}
                      coneSpread={20}
                      glowIntensity={0.8}
                      glowColor="267 100% 76%"
                      fillOpacity={0.3}
                      colors={['#8b5cf6', '#a78bfa', '#c4b5fd']}
                      className={`group transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                    >
                      <div className="relative h-full p-6 lg:p-8">
                        <Badge
                          variant="secondary"
                          className="absolute right-3 top-3 font-mono text-[10px] uppercase tracking-[0.1em]"
                        >
                          {service.category}
                        </Badge>

                        <CardContent className="!p-0">
                          <IconBadge name={service.icon} />
                          <h4 className="mt-5 font-serif text-xl text-foreground">
                            {service.title}
                          </h4>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            {service.body}
                          </p>
                        </CardContent>
                      </div>
                    </BorderGlow>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
