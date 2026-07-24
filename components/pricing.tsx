import { Reveal } from "./motion";

const tiers = [
  {
    name: "Starter",
    setup: "$449",
    monthly: "$220",
    bestFor:
      "Small businesses or solo operators testing automation for the first time.",
    features: [
      "Core lead-capture bot (WhatsApp or chat)",
      "Missed-call text-back",
      "Ongoing support & monitoring",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    setup: "$750",
    monthly: "$385",
    bestFor: "Established teams with moderate lead and customer volume.",
    features: [
      "Everything in Starter",
      "AI voice agent",
      "Review & reputation automation",
      "Weekly performance report",
    ],
    highlight: true,
  },
  {
    name: "Business",
    setup: "$800",
    monthly: "$700",
    bestFor:
      "Multi-location or high-volume businesses ready for full-stack automation, including active lead generation.",
    features: [
      "Everything in Pro",
      "Lead generation bot",
      "AI knowledge base",
      "CRM sync",
      "Appointment scheduling",
    ],
    highlight: false,
  },
];

function Check({ className = "text-primary" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`mt-0.5 h-4 w-4 shrink-0 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function ArrowRight() {
  return (
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
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="relative border-b border-border py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Header — dramatic offset */}
          <div className="mb-16 grid gap-8 lg:mb-20 lg:grid-cols-12">
          <div className="lg:col-span-7 text-center sm:text-left">
            <Reveal>
              <h2 className="font-serif text-5xl font-medium leading-[0.95] tracking-[-0.03em] text-foreground sm:text-6xl lg:text-[80px]">
                Classic 3-tier cards
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:self-end lg:pb-4 text-center sm:text-left">
            <Reveal delay={0.15}>
              <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Fixed tiers, no hidden fees. Setup once, then a flat monthly
                rate that covers hosting, monitoring, and ongoing improvement.
              </p>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                Pro includes everything in Starter · Business includes
                everything in Pro
              </p>
            </Reveal>
          </div>
        </div>

        {/* Tier cards — center card raised */}
        <div className="grid gap-4 lg:grid-cols-3 lg:gap-0">
          {tiers.map((tier, index) => (
              <Reveal
                key={tier.name}
                delay={index * 0.1}
                className={`relative bg-card transition-all duration-500 ${
                  tier.highlight
                    ? "border border-primary/50 shadow-sm"
                    : "border border-border lg:first:-mr-2 lg:last:-ml-2"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap">
                    <span className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 font-mono text-xs uppercase tracking-widest text-primary-foreground">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-3 w-3"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10" />
                      </svg>
                      Recommended for Scaling
                    </span>
                  </div>
                )}

              <div className="p-8 lg:p-10">
                {/* Tier header */}
                <div className="mb-8 border-b border-border pb-8">
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-serif text-2xl text-foreground lg:text-3xl">
                    {tier.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {tier.bestFor}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-5xl text-foreground lg:text-6xl">
                      {tier.monthly}
                    </span>
                    <span className="text-sm text-muted-foreground">/month</span>
                  </div>
                  <p className="mt-2 font-mono text-xs text-muted-foreground">
                    + {tier.setup} one-time setup
                  </p>
                </div>

                {/* Features */}
                <ul className="mb-10 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`group flex w-full items-center justify-center gap-2 rounded-lg py-4 text-sm font-medium transition-all ${
                    tier.highlight
                      ? "bg-primary text-primary-foreground hover:bg-primary/80"
                      : "border border-border text-foreground hover:bg-muted"
                  }`}
                >
                  Book a Free Call
                  <ArrowRight />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Custom quote bar */}
        <Reveal delay={0.2} className="mt-10 lg:mt-14">
          <div className="flex flex-col gap-6 rounded-lg border border-border bg-card p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10">
            <div className="max-w-xl">
              <span className="font-mono text-xs text-muted-foreground">04</span>
              <h3 className="mt-2 font-serif text-2xl text-foreground">Custom Quote</h3>
               <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                For complex enterprise ecosystems or highly specific operational requirements — scoped and architected per build.
               </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-8 py-4 text-sm font-medium text-foreground transition-all hover:bg-muted"
            >
              Talk to us
              <ArrowRight />
            </a>
          </div>
        </Reveal>

        {/* Bottom note */}
        <Reveal delay={0.25}>
          <div className="mt-16 flex flex-col gap-8 border-t border-border pt-12 lg:mt-20 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Check />
                No hidden fees
              </span>
              <span className="flex items-center gap-2">
                <Check />
                Cancel with 30-day notice
              </span>
              <span className="flex items-center gap-2">
                <Check />
                Hosting, monitoring & improvements included
              </span>
            </div>
            <a
              href="#contact"
              className="text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
            >
              Not sure which tier fits? Book a free call
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
