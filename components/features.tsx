import { SectionHeader } from "./section-header";
import { Reveal, Stagger, StaggerItem } from "./motion";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

const features = [
  {
    title: "24/7 automated replies",
    body: "Across chat and voice — your business answers even when your team is off the clock.",
  },
  {
    title: "Human handoff",
    body: "When a conversation needs a real person, it's routed to one — with full context.",
  },
  {
    title: "Multilingual support",
    body: "Serve customers in the language they message you in.",
  },
  {
    title: "Voice + text in one system",
    body: "Voice and text automation combined — one system, every channel covered.",
  },
  {
    title: "CRM integration",
    body: "Every conversation and lead logged where your team already works.",
  },
  {
    title: "Calendar booking",
    body: "Booking built directly into every conversation — chat, voice, or web.",
  },
  {
    title: "Analytics dashboard",
    body: "Track response time, leads captured, and conversion in one view.",
  },
];

export function Features() {
  return (
    <section id="features" className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12">
        <Reveal>
          <SectionHeader variant="minor" title="What's" titleMuted="included." />
        </Reveal>
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {features.map((f, i) => (
            <StaggerItem
              key={f.title}
              className={i === 0 ? "sm:col-span-2 lg:col-span-2" : ""}
            >
              <Card className="p-6 transition-colors duration-300 hover:border-primary/40">
                <CardHeader className="!p-0">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <CardTitle className="mt-4 font-serif text-lg">{f.title}</CardTitle>
                </CardHeader>
                <CardContent className="!p-0">
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {f.body}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
