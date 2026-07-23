import type { Metadata } from "next";

import { PlatformShell, Section } from "@/components/layout";
import { OperatorActions, OperatorCard, OperatorStats } from "@/components/operator";

export const metadata: Metadata = {
  title: "Operator Profile",
  description: "The professional engineering profile behind Project RedForge.",
};

export default function AboutPage() {
  return (
    <PlatformShell>
      <Section className="platform-hero dossier-hero">
        <div>
          <p className="technical-eyebrow">Operator profile</p>
          <h1>The Engineer Behind RedForge</h1>
          <p>Military leadership, technical development, and a disciplined transition into cybersecurity engineering.</p>
        </div>
        <div className="platform-hero-grid" aria-hidden />
      </Section>
      <Section className="dossier-layout">
        <OperatorCard />
        <div className="forged-panel dossier-main">
          <div className="panel-heading"><span>Personnel dossier</span><span>RF-001</span></div>
          <OperatorStats />
          <div className="skills-rail" aria-label="Core skills">
            {["Python", "Networking", "Windows", "Linux", "Active Directory", "Splunk", "Cloud Security"].map((skill) => <span key={skill}>{skill}</span>)}
          </div>
          <OperatorActions />
        </div>
      </Section>
      <Section className="principle-rail">
        <div><p className="technical-eyebrow">Engineering philosophy</p><p>Cybersecurity is about understanding systems, thinking critically, and building solutions that stand under pressure.</p></div>
        <div><p className="technical-eyebrow">Current objective</p><p>Build enterprise-grade environments, automate operations, hunt threats, and continuously improve.</p></div>
        <strong>Build. Secure. Defend.</strong>
      </Section>
    </PlatformShell>
  );
}
