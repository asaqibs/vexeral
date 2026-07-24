import { ScrollProgress } from "@/components/scroll-progress";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { TrustedBy } from "@/components/trusted-by";
import { Problems } from "@/components/problems";
import { Services } from "@/components/services";
import Split3DCarousel from "@/components/Split3DCarousel";
import { HowItWorks } from "@/components/how-it-works";
import { WhyUs } from "@/components/why-us";
import { Pricing } from "@/components/pricing";
import { Contact } from "@/components/contact";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { ExploreMore } from "@/components/explore-more";

export default function Home() {
  return (
    <main id="main-content">
      <ScrollProgress />
      <Nav />
      <Hero />
      <TrustedBy />
      <Problems />
      <Services />
      <Split3DCarousel />
      <HowItWorks />
      <WhyUs />
      <Pricing />
      <ExploreMore />
      <Contact />
      <FinalCta />
      <Footer />
    </main>
  );
}
