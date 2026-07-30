import type { Metadata } from "next";
import Link from "next/link";

import { EnterpriseLabTopology } from "@/components/lab";
import { LabIcon } from "@/components/lab/lab-icon";
import { PlatformShell, Section } from "@/components/layout";
import { ScreenshotsGallery } from "@/components/project-experience";
import { enterpriseHomeLabEvidence } from "@/content/evidence";
import { enterpriseCapabilities, enterpriseHomeLabTopology, enterpriseRoadmap } from "@/content/lab";

export const metadata: Metadata = {
  title: "Lab Environment",
  description: "The evidence-backed operational Enterprise Home Lab topology and status-governed roadmap.",
};

export default function LabPage() {
  return (
    <PlatformShell>
      <Section className="lab-introduction">
        <div>
          <p className="technical-eyebrow">Lab environment</p>
          <h1>Enterprise Environment</h1>
          <div className="lab-introduction-copy">
            <p>This environment is intentionally engineered to replicate the identity, infrastructure, telemetry, and operational workflows encountered during enterprise offensive security assessments.</p>
            <p>Each implemented system is validated, documented, and connected to engineering records.</p>
            <p>Future capabilities remain visible but are clearly distinguished from verified infrastructure.</p>
          </div>
        </div>
        <aside className="lab-verification" aria-label="Environment verification">
          <strong><span aria-hidden /> Verified environment</strong>
          <dl>
            <div><dt>Status</dt><dd>Operational</dd></div>
            <div><dt>Last validated</dt><dd>{enterpriseHomeLabTopology.updatedAt}</dd></div>
            <div><dt>Telemetry</dt><dd>Active</dd></div>
          </dl>
        </aside>
      </Section>

      <Section className="lab-purpose-strip" aria-label="Environment purpose">
        <article><LabIcon name="target" /><div><strong>Purpose</strong><p>Offensive security development through enterprise replication.</p></div></article>
        <article><LabIcon name="shield" /><div><strong>Approach</strong><p>Build <span>•</span> Validate <span>•</span> Document<br />Assess <span>•</span> Improve</p></div></article>
        <article><LabIcon name="grid" /><div><strong>Focus areas</strong><p>Identity <span>•</span> Infrastructure <span>•</span> Telemetry<br />Detection <span>•</span> Recovery</p></div></article>
        <article><LabIcon name="calendar" /><div><strong>Updated</strong><p>{enterpriseHomeLabTopology.updatedAt}</p></div></article>
      </Section>

      <Section className="lab-topology-section">
        <EnterpriseLabTopology topology={enterpriseHomeLabTopology} />
      </Section>

      <Section className="lab-reviewed-evidence" aria-labelledby="lab-evidence-title">
        <div className="lab-section-heading">
          <p className="technical-eyebrow" id="lab-evidence-title">Reviewed implementation evidence</p>
          <p>Authentic Active Directory, DNS, Group Policy, indexing, and telemetry evidence from the verified environment.</p>
        </div>
        <ScreenshotsGallery images={enterpriseHomeLabEvidence} />
      </Section>

      <Section className="lab-capabilities" aria-labelledby="capabilities-title">
        <div className="lab-section-heading"><p className="technical-eyebrow" id="capabilities-title">Enterprise capability groups</p><p>Organized view of environment capabilities and their operational purpose.</p></div>
        <div className="lab-capability-grid">
          {enterpriseCapabilities.map((capability) => (
            <article key={capability.title}>
              <LabIcon name={capability.icon} />
              <h2>{capability.title}</h2>
              <p>{capability.description}</p>
              <span>Capability group <span aria-hidden>→</span></span>
            </article>
          ))}
        </div>
      </Section>

      <Section className="lab-roadmap" aria-labelledby="roadmap-title">
        <div className="lab-section-heading"><p className="technical-eyebrow" id="roadmap-title">Enterprise capability roadmap</p><p>Planned capabilities and future phases of environment evolution.</p></div>
        <ol>
          {enterpriseRoadmap.map((item) => (
            <li key={item.phase} data-status={item.status}>
              <div className="roadmap-node" />
              <span>{item.phase}</span><h2>{item.title}</h2><strong>{item.status.replace("-", " ")}</strong>
              <ul>{item.items.map((entry) => <li key={entry}>{entry}</li>)}</ul>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="lab-records-cta">
        <div><LabIcon name="search" /><div><strong>Engineering records</strong><p>All systems and capabilities are documented, validated, and linked to engineering records.<br />This environment is continuously improved through testing, assessment, and operational feedback.</p></div></div>
        <Link className="command-action" href="/documentation">View engineering records <span aria-hidden>→</span></Link>
      </Section>
    </PlatformShell>
  );
}
