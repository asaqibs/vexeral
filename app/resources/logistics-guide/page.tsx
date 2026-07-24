import type { Metadata } from "next";
import { ScrollProgress } from "@/components/scroll-progress";
import { Nav } from "@/components/nav";
import { BackBar } from "@/components/back-bar";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "The Automated Lead Pipeline: A Performance Guide for Logistics",
  description:
    "Learn how to modernize your logistics lead pipeline. A performance guide on using AI automation to increase conversion rates and streamline freight operations.",
};

export default function LogisticsGuidePage() {
  return (
    <main className="bg-canvas text-foreground">
      <ScrollProgress />
      <Nav />
      <BackBar current="Logistics Guide" />
      
      <article className="mx-auto max-w-4xl px-6 py-20 lg:py-32">
        <header className="mb-16">
          <h1 className="font-serif text-5xl font-medium leading-[0.95] tracking-[-0.03em] sm:text-6xl">
            The Automated Lead Pipeline: <span className="text-primary/70">A Performance Guide for Logistics</span>
          </h1>
          <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
            How freight forwarders and logistics firms are using operational intelligence to turn digital inquiries into booked loads instantly.
          </p>
        </header>

        <div className="prose prose-lg prose-headings:font-serif prose-headings:font-medium prose-a:text-primary max-w-none">
          <section>
            <h2>1. The Logistics Revenue Leak</h2>
            <p>
              In logistics, speed is the primary product. Yet, most firms operate lead pipelines that are bottlenecked by manual data entry and dispatch communication. 
            </p>
            <p>
              Industry data suggests that the value of a digital lead decays by 80% if not addressed within the first five minutes. When a quote request sits in an inbox waiting for a dispatcher to manually check availability and type a response, you aren't just losing time—you're losing market share to competitors who automate their intake.
            </p>
          </section>

          <section>
            <h2>2. The Anatomy of an Automated Pipeline</h2>
            <p>
              A high-performance logistics pipeline requires a "Zero-Latency" architecture:
            </p>
            <ul>
              <li><strong>Lead Intake:</strong> Inbound WhatsApp, SMS, or web quote requests are captured instantly.</li>
              <li><strong>AI Qualification:</strong> The bot identifies the critical freight details: origin, destination, weight, and timeline.</li>
              <li><strong>Real-time Sync:</strong> Data is pushed immediately into your TMS (Transport Management System) or CRM.</li>
              <li><strong>Instant Quote/Confirmation:</strong> The lead receives a confirmation or instant quote, keeping the conversation alive and high-intent.</li>
            </ul>
          </section>

          <section>
            <h2>3. Core Workflow Automation</h2>
            <p>
              By applying AI to these specific friction points, firms see immediate gains:
            </p>
            <ul>
              <li><strong>WhatsApp/SMS Intake:</strong> Converting mobile-first quote requests without requiring a customer portal or web form.</li>
              <li><strong>Automated Dispatch Coordination:</strong> Automatically flagging urgent loads to the right dispatcher based on lane availability.</li>
              <li><strong>CRM/TMS Synchronization:</strong> Eliminating the "dual-entry" problem where dispatchers must update both an email chain and a system.</li>
            </ul>
          </section>

          <section>
            <h2>4. The Performance Benchmark</h2>
            <p>
              Most logistics firms operate with lead conversion rates hovering around 5-8%. By automating the intake and qualification phase, companies can reasonably target a conversion rate increase to 15-20%.
            </p>
            <p>
              This isn't about replacing dispatchers; it's about removing the data-entry layer of their job. When dispatchers stop acting as data-entry clerks, they start acting as freight experts.
            </p>
          </section>

          <section>
            <h2>5. The Growth Engineering Approach</h2>
            <p>
              "Off-the-shelf" automation tools often fail in logistics because they lack the ability to handle the nuances of freight operations (e.g., complex lane constraints). 
            </p>
            <p>
              At Vexeral, we build operational intelligence layers. We don't just "install a bot"—we audit your specific manual pipeline and build an automation layer that mirrors how your business operates, ensuring your tech stack finally works as hard as your team does.
            </p>
          </section>
        </div>
      </article>

      <FinalCta />
      <Footer />
    </main>
  );
}
