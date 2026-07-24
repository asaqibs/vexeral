"use client";

import { FormEvent, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { SectionHeader } from "./section-header";
import { Reveal } from "./motion";

/*
  CONTACT DETAILS — replace these placeholders before launch:
  - WHATSAPP_URL: your WhatsApp Business number, e.g. https://wa.me/15551234567
  - CONTACT_EMAIL: your real inbox
  - CALENDAR_URL: your Calendly / Cal.com booking link
  The form currently opens a pre-filled email; wire it to your n8n
  webhook or form backend when ready.
*/
const WHATSAPP_URL = "https://wa.me/00000000000";
const CONTACT_EMAIL = "hello@vexeral.com";
const CALENDAR_URL = "#book-a-call";

const industries = [
  "Healthcare",
  "Logistics",
  "Real Estate",
  "E-commerce",
  "Education",
  "Travel",
  "Professional Services",
  "Blue-Collar / Field Services",
  "Hospitality",
  "Automotive",
  "Home Services",
  "Other",
];

const bottlenecks = [
  "Missed leads",
  "Slow follow-up",
  "No review system",
  "Manual admin",
  "Other",
];

const channels = [
  {
    href: WHATSAPP_URL,
    title: "Message us on WhatsApp",
    body: "Our own WhatsApp bot answers it. Message us and experience firsthand exactly what your customers would.",
    icon: (
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
    ),
  },
  {
    href: `mailto:${CONTACT_EMAIL}`,
    title: "Email us",
    body: CONTACT_EMAIL,
    icon: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-10 6L2 7" />
      </>
    ),
  },
  {
    href: CALENDAR_URL,
    title: "Book a call directly",
    body: "Pick a time on our calendar — 15 minutes, no pitch, just a look at your biggest bottleneck.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </>
    ),
  },
];

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    const data = new FormData(e.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Business: ${data.get("business")}`,
      `Industry: ${data.get("industry")}`,
      `Team size: ${data.get("teamSize")}`,
      `Biggest bottleneck: ${data.get("bottleneck")}`,
    ].join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      "Automation inquiry — " + data.get("business")
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="contact" className="border-b border-border py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <SectionHeader
            variant="medium"
            title="Let's"
            titleMuted="talk."
            lead="Tell us where your leads are slipping through, and we'll show you exactly how automation closes the gap."
          />
        </Reveal>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <Reveal className="space-y-4">
            {channels.map((channel) => (
              <a
                key={channel.title}
                href={channel.href}
                className="group block cursor-pointer border border-border bg-card p-6 transition-colors duration-300 hover:border-vlight/40"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-border text-vlight transition-colors duration-300 group-hover:border-vlight/50">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {channel.icon}
                    </svg>
                  </span>
                  <span className="font-serif text-xl text-ink">
                    {channel.title}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {channel.body}
                </p>
              </a>
            ))}
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="border border-border bg-card p-7 lg:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className="bg-elevated text-ink placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="business" className="mb-1.5 block text-sm font-medium text-foreground">
                    Business name
                  </label>
                  <Input
                    id="business"
                    name="business"
                    required
                    autoComplete="organization"
                    placeholder="Your company"
                    className="bg-elevated text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="industry" className="mb-1.5 block text-sm font-medium text-foreground">
                    Industry
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    required
                    defaultValue=""
                    className="min-h-[44px] w-full min-w-0 rounded-lg border border-input bg-elevated px-2.5 py-1 text-sm text-foreground transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 cursor-pointer"
                  >
                    <option value="" disabled>
                      Select your industry
                    </option>
                    {industries.map((i) => (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="teamSize" className="mb-1.5 block text-sm font-medium text-foreground">
                    Team size
                  </label>
                  <Input
                    id="teamSize"
                    name="teamSize"
                    required
                    type="number"
                    placeholder="e.g. 12"
                    className="bg-elevated text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="bottleneck" className="mb-1.5 block text-sm font-medium text-foreground">
                    Biggest current bottleneck
                  </label>
                  <select
                    id="bottleneck"
                    name="bottleneck"
                    required
                    defaultValue=""
                    className="min-h-[44px] w-full min-w-0 rounded-lg border border-input bg-elevated px-2.5 py-1 text-sm text-foreground transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 cursor-pointer"
                  >
                    <option value="" disabled>
                      Where are you losing the most time or leads?
                    </option>
                    {bottlenecks.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="mt-7 w-full rounded-full"
                variant="default"
                size="lg"
              >
                {isSubmitting ? "Sending..." : "Send Inquiry"}
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
