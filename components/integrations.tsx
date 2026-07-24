import { SectionHeader } from "./section-header";
import { BRAND_SVGS } from "./brand-svgs";
import { Reveal, Stagger, StaggerItem } from "./motion";

type Tool = { name: string; note?: string; logos?: string[] };

const tools: Tool[] = [
  { name: "WhatsApp Business API", logos: ["whatsapp"] },
  {
    name: "OpenAI · Claude",
    note: "The engine behind every conversation",
    logos: ["openai", "claude"],
  },
  { name: "Google Calendar", logos: ["googleCalendar"] },
  { name: "Google Sheets", logos: ["googleSheets"] },
  { name: "Google My Business" },
  { name: "HubSpot" },
  { name: "Salesforce", logos: ["salesforce"] },
  { name: "Slack", logos: ["slack"] },
  { name: "Gmail", logos: ["gmail"] },
  { name: "Zapier" },
  { name: "n8n", logos: ["n8n"] },
  { name: "Airtable" },
  { name: "Twilio", logos: ["twilio"] },
  { name: "Microsoft Teams", logos: ["teams"] },
  { name: "Shopify", logos: ["shopify"] },
  { name: "Stripe", logos: ["stripe"] },
  { name: "Mailchimp" },
  { name: "Notion", logos: ["notion"] },
  { name: "Zoom", logos: ["zoom"] },
  { name: "Monday.com · ClickUp", logos: ["clickup"] },
];

function BrandLogo({ svgKey }: { svgKey: string }) {
  const svg = BRAND_SVGS[svgKey];
  if (!svg) return null;
  return (
    <span
      className="brand-logo block h-7 w-7"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

export function Integrations() {
  return (
    <section id="integrations" className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12">
        <Reveal>
          <SectionHeader
            variant="minor"
            title="Works with"
            titleMuted="your stack."
            lead="If your tools aren't listed, they almost certainly still connect — via n8n, Zapier, or a direct API integration."
          />
        </Reveal>
        <Stagger className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {tools.map((t) => (
            <StaggerItem
              key={t.name}
              className="group flex min-h-24 flex-col items-center justify-center gap-2 border border-border bg-card px-3 py-4 text-center transition-colors duration-300 hover:border-primary/40"
            >
              {t.logos ? (
                <span className="flex items-center gap-1.5">
                  {t.logos.map((k) => (
                    <BrandLogo key={k} svgKey={k} />
                  ))}
                </span>
              ) : null}
              <span className="font-mono text-xs text-vlight/80">{t.name}</span>
              {t.note ? (
                <span className="text-[10px] leading-tight text-primary/60">
                  {t.note}
                </span>
              ) : null}
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
