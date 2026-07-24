import type { Metadata } from "next";
import { ScrollProgress } from "@/components/scroll-progress";
import { Nav } from "@/components/nav";
import { BackBar } from "@/components/back-bar";
import { Features } from "@/components/features";
import { Expectations } from "@/components/expectations";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Automation Features & Capabilities",
  description:
    "Advanced AI customer support bots, automated lead follow-up software, and CRM synchronization. Build a high-leverage growth engine.",
};

export default function FeaturesPage() {
  return (
    <main>
      <ScrollProgress />
      <Nav />
      <BackBar current="What's Included" />
      <Features />
      <Expectations />
      <FinalCta />
      <Footer />
    </main>
  );
}
