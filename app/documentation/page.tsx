import type { Metadata } from "next";
import Link from "next/link";

import { PlatformShell, Section } from "@/components/layout";
import {
  documentationEntries,
  getDocumentationCategorySummaries,
} from "@/content/documentation";

export const metadata: Metadata = {
  title: "Engineering Documentation",
  description: "Reviewed engineering logs, architecture decisions, and milestone records from Project RedForge.",
};

export default function DocumentationPage() {
  const publishedEntries = [...documentationEntries]
    .filter((entry) => entry.publishingState === "published")
    .sort((left, right) =>
      right.updatedAt.localeCompare(left.updatedAt)
      || right.date.localeCompare(left.date)
      || right.title.localeCompare(left.title),
    );
  const categorySummaries = getDocumentationCategorySummaries(publishedEntries);

  return (
    <PlatformShell>
      <Section className="documentation-heading">
        <p className="technical-eyebrow">Engineering record system</p>
        <h1>Knowledge. Documented. Shared.</h1>
        <p>Engineering Logs are the primary record of work. Architecture decisions preserve long-lived rationale, while milestones document verified program outcomes.</p>
      </Section>
      <Section className="documentation-layout">
        <aside className="documentation-rail forged-panel">
          <p className="rail-label">Record types</p>
          {categorySummaries.map(({ category, count, description, label }) => (
            <div className="documentation-category" key={category}>
              <span>{label} <small>{count}</small></span>
              <p>{description}</p>
            </div>
          ))}
          <div className="rail-divider" />
          <p className="rail-label">Workflow</p>
          <span>Obsidian draft</span><span>Review & redaction</span><span>Repository validation</span><span>Deployment</span>
        </aside>
        <div className="documentation-list">
          {publishedEntries.map((entry) => (
            <article className="documentation-card forged-panel" key={entry.slug}>
              <div><span className="evidence-chip">{entry.status}</span><p className="technical-eyebrow">{entry.category}</p><h2>{entry.title}</h2><p>{entry.summary}</p></div>
              <div className="documentation-tags">{entry.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <Link href={{ pathname: `/documentation/${entry.slug}` }}>Read engineering report <span aria-hidden>→</span></Link>
            </article>
          ))}
        </div>
      </Section>
    </PlatformShell>
  );
}
