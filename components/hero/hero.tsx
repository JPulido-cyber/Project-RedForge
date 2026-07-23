import { Section } from "@/components/layout";

import { HeroBackground } from "./hero-background";
import { HeroContent } from "./hero-content";
import { HeroStatus } from "./hero-status";

export function Hero() {
  return (
    <Section className="hero" id="home">
      <HeroBackground />
      <HeroContent />
      <HeroStatus />
    </Section>
  );
}
