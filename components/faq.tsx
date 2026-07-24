import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion";
import { SectionHeader } from "./section-header";
import { Reveal } from "./motion";

const faqs = [
  {
    q: "How long does setup take?",
    a: "Most builds go live within 2–3 days after the discovery call. Growth and Corporate tiers can take up to a week because they include more integrations.",
  },
  {
    q: "Is WhatsApp Business required?",
    a: "Only for WhatsApp-based automation. We also support web chat, SMS, and voice, depending on your tier and preferred channel.",
  },
  {
    q: "Can it integrate with my CRM?",
    a: "Yes — Salesforce, HubSpot, and most major CRMs connect via direct integration or through n8n and Zapier. If you don't have a CRM yet, we can set one up from scratch.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. All customer and lead data is stored securely and is only accessible to your team.",
  },
  {
    q: "Do you provide maintenance?",
    a: "Yes — every tier includes ongoing support. We monitor, fix, and improve your automation after launch.",
  },
  {
    q: "What if I want to cancel?",
    a: "30-day notice, no lock-in contract.",
  },
  {
    q: "What's the difference between the tiers?",
    a: "Starter stops leads and calls from falling through the cracks. Growth adds a voice agent and review automation. Corporate adds active lead generation and a full custom stack.",
  },
  {
    q: "Do you work with my industry?",
    a: "We've built automation for real estate, healthcare, e-commerce, professional services, field services, and more. If your industry isn't listed, book a call — most automation workflows translate across industries.",
  },
];

export function Faq() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a,
      },
    })),
  };

  return (
    <section id="faq" className="border-b border-border py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <SectionHeader variant="minor" title="Common" titleMuted="questions." />
        </Reveal>
        <Reveal className="mx-auto max-w-3xl">
          <Accordion>
            {faqs.map((f) => (
              <AccordionItem key={f.q} className="border-border">
                <AccordionTrigger className="font-serif text-lg text-foreground">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
