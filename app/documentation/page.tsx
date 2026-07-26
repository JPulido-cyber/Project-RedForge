import type { Metadata } from "next";
import { Suspense } from "react";

import { DocumentationIndex } from "@/components/documentation";
import { PlatformShell, Section } from "@/components/layout";
import {
  documentationCategories,
  documentationEntries,
  getDocumentationCategorySummaries,
} from "@/content/documentation";

export const metadata: Metadata = {
  title: "Engineering Documentation",
  description: "Reviewed engineering logs, architecture decisions, and milestone records from Project RedForge.",
};

export default function DocumentationPage() {
  const coreCategories = new Set<string>(documentationCategories);
  const publishedEntries = [...documentationEntries]
    .filter((entry) =>
      entry.publishingState === "published"
      && coreCategories.has(entry.category),
    )
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
      <Suspense fallback={<Section className="documentation-layout"><p className="documentation-loading">Loading engineering records…</p></Section>}>
        <DocumentationIndex categories={categorySummaries} entries={publishedEntries} />
      </Suspense>
    </PlatformShell>
  );
}
