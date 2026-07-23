import type { DocumentationEntry } from "./types";

const isoDate = /^\d{4}-\d{2}-\d{2}$/;
const unsafeContentPatterns = [
  { label: "IPv4 address", pattern: /\b(?:\d{1,3}\.){3}\d{1,3}\b/ },
  { label: "credential assignment", pattern: /\b(?:password|passwd|token|api[_-]?key|secret)\s*[:=]\s*\S+/i },
  { label: "private administrative URL", pattern: /https?:\/\/(?:localhost|127\.0\.0\.1|10\.|172\.(?:1[6-9]|2\d|3[01])\.|192\.168\.)/i },
] as const;

export function assertValidDocumentationEntries(entries: readonly DocumentationEntry[]) {
  const slugs = new Set<string>();

  for (const entry of entries) {
    if (slugs.has(entry.slug)) throw new Error(`Duplicate documentation slug: ${entry.slug}`);
    slugs.add(entry.slug);

    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(entry.slug)) {
      throw new Error(`Invalid documentation slug: ${entry.slug}`);
    }
    if (!isoDate.test(entry.date) || !isoDate.test(entry.updatedAt)) {
      throw new Error(`Documentation dates must use YYYY-MM-DD: ${entry.slug}`);
    }
    if (entry.publishingState === "published") {
      if (!entry.objective || !entry.engineeringSummary.length || !entry.technicalDecisions.length || !entry.lessonsLearned.length || !entry.evidence.length || !entry.nextSteps.length) {
        throw new Error(`Published documentation is incomplete: ${entry.slug}`);
      }
      if (!entry.source.reviewed) {
        throw new Error(`Published documentation must have a reviewed source: ${entry.slug}`);
      }
    }

    for (const evidence of entry.evidence) {
      if (evidence.src && !evidence.alt) {
        throw new Error(`Evidence with an asset requires alt text: ${entry.slug}/${evidence.id}`);
      }
      const reviewText = [evidence.description, evidence.content ?? ""].join("\n");
      for (const unsafe of unsafeContentPatterns) {
        if (unsafe.pattern.test(reviewText)) {
          throw new Error(`Potential ${unsafe.label} found in publishable evidence: ${entry.slug}/${evidence.id}`);
        }
      }
    }
  }
}
