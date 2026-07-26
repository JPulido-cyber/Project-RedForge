import type { Metadata } from "next";

import { PlatformShell, Section } from "@/components/layout";
import { AboutNarrative, OperatorCard } from "@/components/operator";
import { aboutContent } from "@/content/about";

export const metadata: Metadata = {
  title: "Engineer Profile",
  description: "The leadership background, engineering purpose, and offensive cybersecurity direction behind Project RedForge.",
};

export default function AboutPage() {
  return (
    <PlatformShell>
      <Section className="platform-hero dossier-hero">
        <div>
          <p className="technical-eyebrow">{aboutContent.hero.eyebrow}</p>
          <h1>{aboutContent.hero.title}</h1>
          <p>{aboutContent.hero.description}</p>
        </div>
        <div className="platform-hero-grid" aria-hidden />
      </Section>
      <Section className="about-layout">
        <OperatorCard />
        <AboutNarrative />
      </Section>
    </PlatformShell>
  );
}
