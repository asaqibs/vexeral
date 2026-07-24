import type { Metadata } from "next";
import { ScrollProgress } from "@/components/scroll-progress";
import { Nav } from "@/components/nav";
import { BackBar } from "@/components/back-bar";
import { Integrations } from "@/components/integrations";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "CRM & Workflow Integrations",
  description:
    "Expert automation of WhatsApp Business API, CRM workflows, and automated follow-up systems. We connect your tech stack with AI to scale operations.",
};

export default function IntegrationsPage() {
  return (
    <main>
      <ScrollProgress />
      <Nav />
      <BackBar current="Integrations" />
      <Integrations />
      <FinalCta />
      <Footer />
    </main>
  );
}
