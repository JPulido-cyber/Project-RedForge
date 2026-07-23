export type DocumentationCategory =
  | "Engineering Log"
  | "Milestone Log"
  | "Architecture Decision Record"
  | "Build Guide"
  | "SOP"
  | "Troubleshooting Note"
  | "Lesson Learned"
  | "Validation Record";

export type PublishingState = "review-ready" | "redaction-pending" | "planned";

export interface DocumentationEntry {
  slug: string;
  title: string;
  summary: string;
  category: DocumentationCategory;
  state: PublishingState;
  projectSlug?: string;
  tags: readonly string[];
}
