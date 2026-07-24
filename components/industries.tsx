import { SectionHeader } from "./section-header";
import { Reveal, Stagger, StaggerItem } from "./motion";
import { IconBadge } from "./icons";

const industries = [
  {
    icon: "heart",
    name: "Healthcare",
    line: "Appointment reminders, intake automation, and patient follow-up.",
  },
  {
    icon: "truck",
    name: "Logistics",
    line: "Dispatch coordination, shipment status updates, and customer notifications.",
  },
  {
    icon: "home",
    name: "Real Estate",
    line: "Lead capture, showing requests, seller callbacks, and review automation.",
  },
  {
    icon: "cart",
    name: "E-commerce",
    line: "Order updates, abandoned cart recovery, and customer support automation.",
  },
  {
    icon: "cap",
    name: "Education",
    line: "Enrollment inquiries, admissions follow-up, and student support chatbots.",
  },
  {
    icon: "plane",
    name: "Travel",
    line: "Booking confirmations, itinerary updates, and customer support automation.",
  },
  {
    icon: "briefcase",
    name: "Professional Services",
    detail: "Legal · Accounting · Consulting",
    line: "Client intake, appointment scheduling, and document follow-up.",
  },
  {
    icon: "wrench",
    name: "Blue-Collar & Field Services",
    detail: "HVAC · Plumbing · Electrical · Construction · Contracting · Landscaping",
    line: "Job scheduling, missed-call recovery, dispatch confirmations, and review requests after job completion.",
  },
  {
    icon: "bell",
    name: "Hospitality",
    line: "Reservation confirmations, guest inquiries, and review automation.",
  },
  {
    icon: "car",
    name: "Automotive",
    detail: "Dealerships · Repair shops",
    line: "Service appointment booking, follow-up reminders, and lead qualification.",
  },
  {
    icon: "droplet",
    name: "Home Services",
    detail: "Cleaning · Pest control · Moving",
    line: "Booking automation, missed-call text-back, and recurring service reminders.",
  },
];

export function Industries() {
  return (
    <section id="industries" className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12">
        <Reveal>
          <SectionHeader
            variant="minor"
            title="Built for any business"
            titleMuted="that talks to customers."
          />
        </Reveal>
        <Stagger
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          stagger={0.05}
        >
          {industries.map((ind) => (
            <StaggerItem
              key={ind.name}
              className="group border border-border bg-card p-6 transition-colors duration-300 hover:border-primary/40"
            >
              <div className="flex items-center gap-4">
                <IconBadge name={ind.icon} />
                <div>
                  <h3 className="font-serif text-xl text-foreground">{ind.name}</h3>
                  {ind.detail ? (
                    <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-primary/60">
                      {ind.detail}
                    </div>
                  ) : null}
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {ind.line}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal
          as="span"
          className="mx-auto mt-14 block max-w-3xl text-center font-serif text-2xl leading-snug text-ink/90"
        >
          Different industries, same core problem: businesses lose money when
          leads and customers don&rsquo;t get a fast, consistent response. We
          fix that with automation built around how your business actually
          works.
        </Reveal>
      </div>
    </section>
  );
}
