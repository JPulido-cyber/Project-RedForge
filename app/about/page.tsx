import type { Metadata } from "next";

import { PlatformShell, Section } from "@/components/layout";
import { AboutNarrative, OperatorCard } from "@/components/operator";

export const metadata: Metadata = {
  title: "Engineer Profile",
  description: "The leadership background, engineering purpose, and offensive cybersecurity direction behind Project RedForge.",
};

export default function AboutPage() {
  return (
    <PlatformShell>
      <Section className="about-layout">
        <OperatorCard />
        <AboutNarrative />
      </Section>
    </PlatformShell>
  );
}
