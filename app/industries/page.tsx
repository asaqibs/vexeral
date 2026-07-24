import type { Metadata } from "next";
import { ScrollProgress } from "@/components/scroll-progress";
import { Nav } from "@/components/nav";
import { BackBar } from "@/components/back-bar";
import { Industries } from "@/components/industries";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "AI Automation for Industries",
  description:
    "Custom AI automation for logistics, real estate process automation, and professional services. Streamline your industry operations with Vexeral.",
};

export default function IndustriesPage() {
  return (
    <main>
      <ScrollProgress />
      <Nav />
      <BackBar current="Industries" />
      <Industries />
      <FinalCta />
      <Footer />
    </main>
  );
}
