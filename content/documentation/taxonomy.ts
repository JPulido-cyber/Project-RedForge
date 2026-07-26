import type {
  CoreDocumentationCategory,
  DeferredDocumentationCategory,
  DocumentationEntry,
} from "./types";

export const documentationTaxonomy = [
  {
    category: "Engineering Log",
    label: "Engineering Logs",
    description: "Primary chronological records of objectives, decisions, implementation, validation, evidence, lessons, and next steps.",
  },
  {
    category: "Architecture Decision Record",
    label: "Architecture Decisions",
    description: "Durable decisions that explain why a direction was selected and how it may be superseded.",
  },
  {
    category: "Milestone Log",
    label: "Milestones",
    description: "Program-level outcomes that aggregate multiple engineering records into a verified phase or capability.",
  },
] as const satisfies readonly {
  category: CoreDocumentationCategory;
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

