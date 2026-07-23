import type { Metadata } from "next";
import Link from "next/link";

import { PlatformShell, Section } from "@/components/layout";
import { documentationEntries } from "@/content/documentation";

export const metadata: Metadata = {
  title: "Engineering Documentation",
  description: "Reviewed engineering logs, architecture records, guides, and validation records.",
};

export default function DocumentationPage() {
  return (
    <PlatformShell>
      <Section className="documentation-heading">
        <p className="technical-eyebrow">Engineering log & documentation</p>
        <h1>Knowledge. Documented. Shared.</h1>
        <p>Review-governed technical records from real engineering work. Drafts are never published directly from Obsidian.</p>
      </Section>
      <Section className="documentation-layout">
        <aside className="documentation-rail forged-panel">
          <p className="rail-label">Publishing states</p>
          <span>Review ready</span><span>Redaction pending</span><span>Planned</span>
          <div className="rail-divider" />
          <p className="rail-label">Workflow</p>
          <span>Obsidian draft</span><span>Review & redaction</span><span>Repository validation</span><span>Deployment</span>
        </aside>
        <div className="documentation-list">
          {documentationEntries.map((entry) => (
            <article className="documentation-card forged-panel" key={entry.slug}>
              <div><span className="evidence-chip">{entry.state.replaceAll("-", " ")}</span><p className="technical-eyebrow">{entry.category}</p><h2>{entry.title}</h2><p>{entry.summary}</p></div>
              <div className="documentation-tags">{entry.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              {entry.projectSlug ? <Link href={`/projects/${entry.projectSlug}`}>Open related project <span aria-hidden>→</span></Link> : null}
            </article>
          ))}
        </div>
      </Section>
    </PlatformShell>
  );
}
