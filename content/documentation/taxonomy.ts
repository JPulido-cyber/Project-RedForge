import type {
  CoreDocumentationCategory,
  DeferredDocumentationCategory,
  DocumentationEntry,
} from "./types";

export const documentationTaxonomy = [
  {
    category: "Engineering Log",
    filter: "engineering-logs",
    label: "Engineering Logs",
    description: "The complete implementation record for a single engineering effort, including objectives, decisions, work completed, validation, challenges, evidence, lessons learned, results, and next steps.",
  },
  {
    category: "Architecture Decision Record",
    filter: "architecture-decisions",
    label: "Architecture Decision Records",
    description: "Durable records explaining why an architectural or technical decision was made, which alternatives were considered, and how the decision may be superseded later.",
  },
  {
    category: "Milestone Log",
    filter: "milestones",
    label: "Milestones",
    description: "Reviewed program-level outcomes that summarize major achievements spanning multiple Engineering Logs and Architecture Decision Records.",
  },
] as const satisfies readonly {
  category: CoreDocumentationCategory;
  filter: string;
  label: string;
  description: string;
}[];

export const deferredDocumentationCategories = [
  "Build Guide",
  "Standard Operating Procedure",
  "Troubleshooting Note",
  "Lesson Learned",
  "Validation Record",
] as const satisfies readonly DeferredDocumentationCategory[];

export function getDocumentationCategorySummaries(entries: readonly DocumentationEntry[]) {
  return documentationTaxonomy.map((definition) => ({
    ...definition,
    count: entries.filter((entry) => entry.category === definition.category).length,
  }));
}
