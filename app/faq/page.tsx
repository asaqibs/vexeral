import type { Metadata } from "next";
import { ScrollProgress } from "@/components/scroll-progress";
import { Nav } from "@/components/nav";
import { BackBar } from "@/components/back-bar";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Common Questions — Vexeral",
  description:
    "Answers on setup time, WhatsApp requirements, CRM integration, data security, maintenance, cancellation, tier differences, and industry fit.",
};

export default function FaqPage() {
  return (
    <main>
      <ScrollProgress />
      <Nav />
      <BackBar current="Common Questions" />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}
