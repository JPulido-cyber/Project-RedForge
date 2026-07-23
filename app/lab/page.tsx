import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PlatformShell, Section } from "@/components/layout";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Lab Environment",
  description: "The status-governed target-state Enterprise Home Lab architecture.",
};

const lab = projects.find((project) => project.slug === "enterprise-home-lab")!;

export default function LabPage() {
  const completed = lab.timeline.filter((event) => event.status === "complete");
  const next = lab.timeline.find((event) => event.status !== "complete");
  return (
    <PlatformShell>
      <Section className="lab-heading">
        <div><p className="technical-eyebrow">Lab environment</p><h1>Enterprise Home Lab</h1><p>{lab.subtitle}</p></div>
        <span className="evidence-chip">Target-state architecture</span>
      </Section>
      <Section className="lab-workspace">
        <div className="architecture-canvas forged-panel">
          <div className="panel-heading"><span>Network topology</span><span>Editable SVG</span></div>
          <Image src="/projects/enterprise-home-lab/diagrams/network-topology.svg" alt="Target-state Enterprise Home Lab network topology" width={1200} height={675} priority />
          <p className="architecture-disclaimer">Design artifact — not implementation evidence. Addresses and infrastructure health are intentionally omitted.</p>
        </div>
        <aside className="lab-rail">
          <div className="forged-panel"><p className="technical-eyebrow">Engineering status</p><strong>{lab.phase}</strong><span>Lifecycle: {lab.status}</span><span>Latest verified update: {lab.updatedAt}</span></div>
          <div className="forged-panel"><p className="technical-eyebrow">Verified milestone</p>{completed.map((event) => <span key={event.title}>{event.title}</span>)}</div>
          <div className="forged-panel"><p className="technical-eyebrow">Next milestone</p><strong>{next?.title}</strong><span>{next?.description}</span></div>
          <Link className="command-action" href="/projects/enterprise-home-lab">Open engineering report <span aria-hidden>→</span></Link>
        </aside>
      </Section>
      <Section className="lab-inventory">
        <p className="technical-eyebrow">Technology inventory</p>
        <div className="inventory-grid">{lab.technologies.map((technology) => <article className="forged-panel" key={technology.name}><span>{technology.category}</span><strong>{technology.name}</strong><p>{technology.description}</p></article>)}</div>
      </Section>
    </PlatformShell>
  );
}
