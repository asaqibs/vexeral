import { SectionHeader } from "./section-header";
import { Reveal } from "./motion";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

export function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12">
        <Reveal>
          <SectionHeader variant="minor" title="Why we" titleMuted="built Vexeral." />
        </Reveal>
        <Reveal className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Businesses don&rsquo;t lose customers and revenue because their
              teams aren&rsquo;t capable. They lose them because manual
              follow-up can&rsquo;t keep pace with how fast leads and
              customers expect a response today. Vexeral exists to close that
              gap — with automation built around how each business actually
              operates.
            </p>
            <p>
              Vexeral is run by a small, focused team. You get direct access
              to the people building your automation, not a support ticket
              queue. It&rsquo;s a founder-led agency with a dedicated
              technical partner handling builds — lean by design, so nothing
              gets lost between sales and delivery.
            </p>
            <p>
              What we lead with is process: deep research into how businesses
              in each industry actually operate, and automation built around
              real workflows — not generic templates.
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                k: "Founder-led",
                v: "Direct access to the people doing the work",
              },
              {
                k: "Research-first",
                v: "Every build starts with how your business actually runs",
              },
              {
                k: "No templates",
                v: "Workflows mapped to your operation, not retrofitted",
              },
            ].map((item) => (
              <Card
                key={item.k}
                className="p-6 transition-colors duration-300 hover:border-primary/40"
              >
                <CardHeader className="!p-0">
                  <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">
                    {item.k}
                  </div>
                </CardHeader>
                <CardContent className="!p-0">
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.v}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
