import type { Metadata } from "next";
import { ScrollProgress } from "@/components/scroll-progress";
import { Nav } from "@/components/nav";
import { BackBar } from "@/components/back-bar";
import { About } from "@/components/about";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "About Vexeral — Growth Engineering Agency",
  description:
    "Vexeral is a growth engineering agency focused on business operational intelligence. We build the systems that help you scale.",
};

export default function AboutPage() {
  return (
    <main>
      <ScrollProgress />
      <Nav />
      <BackBar current="About" />
      <About />
      <FinalCta />
      <Footer />
    </main>
  );
}
