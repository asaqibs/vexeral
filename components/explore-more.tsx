import Link from "next/link";
import { SectionHeader } from "./section-header";
import { Reveal } from "./motion";

const pages = [
  {
    href: "/industries",
    title: "Industries",
    blurb: "How automation maps to 11 industries, from healthcare to home services.",
  },
  {
    href: "/features",
    title: "What's Included & What to Expect",
    blurb: "The capabilities in every build, and the outcomes automation reliably delivers.",
  },
  {
    href: "/integrations",
    title: "Integrations",
    blurb: "The 20+ tools we connect — WhatsApp, CRMs, calendars, payments, and more.",
  },
  {
    href: "/faq",
    title: "Common Questions",
    blurb: "Setup time, data security, cancellation, tier differences, and more.",
  },
  {
    href: "/about",
    title: "Why We Built Vexeral",
    blurb: "The mission, the team, and how we approach every build.",
  },
];

export function ExploreMore() {
  return (
    <section className="border-b border-border py-16">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <SectionHeader variant="minor" title="Explore" titleMuted="the detail." />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="divide-y divide-border rounded-lg border border-border">
            {pages.map((p, i) => (
              <Link
                key={p.href}
                href={p.href}
                className="group flex items-center justify-between gap-6 px-6 py-5 transition-colors duration-200 hover:bg-muted/30 lg:px-8"
              >
                <div className="flex items-center gap-5">
                  <span className="font-mono text-sm text-muted-foreground/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <span className="font-serif text-lg text-foreground transition-colors duration-200 group-hover:text-primary lg:text-xl">
                      {p.title}
                    </span>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {p.blurb}
                    </p>
                  </div>
                </div>
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 shrink-0 text-muted-foreground transition-all duration-200 group-hover:translate-x-1 group-hover:text-primary"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17L17 7M8 7h9v9" />
                </svg>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
