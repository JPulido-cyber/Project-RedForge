import type { Metadata } from "next";
import Link from "next/link";

import { EnterpriseLabTopology } from "@/components/lab";
import { PlatformShell, Section } from "@/components/layout";
import { enterpriseHomeLabTopology } from "@/content/lab";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Lab Environment",
  description: "The evidence-backed operational Enterprise Home Lab topology and status-governed roadmap.",
};

const lab = projects.find((project) => project.slug === "enterprise-home-lab")!;

export default function LabPage() {
  const completed = lab.timeline.filter((event) => event.status === "complete");
  const next = lab.timeline.find((event) => event.status !== "complete");
  return (
    <PlatformShell>
      <Section className="lab-heading">
        <div><p className="technical-eyebrow">Lab environment</p><h1>Enterprise Home Lab</h1><p>{lab.subtitle}</p></div>
        <span className="evidence-chip">Verified topology</span>
      </Section>
      <Section className="lab-workspace">
        <div className="architecture-canvas forged-panel">
          <EnterpriseLabTopology topology={enterpriseHomeLabTopology} />
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
