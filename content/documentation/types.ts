export type CoreDocumentationCategory =
  | "Engineering Log"
  | "Milestone Log"
  | "Architecture Decision Record";

export type DeferredDocumentationCategory =
  | "Build Guide"
  | "Standard Operating Procedure"
  | "Troubleshooting Note"
  | "Lesson Learned"
  | "Validation Record";

export type DocumentationCategory =
  | CoreDocumentationCategory
  | DeferredDocumentationCategory;

export type DocumentationStatus =
  | "Implemented"
  | "Complete"
  | "In Progress"
  | "Pending Validation"
  | "Evidence Pending"
  | "Planned"
  | "Future";

export type PublishingState = "published" | "review-ready" | "redaction-pending" | "planned";

export type EvidenceKind =
  | "screenshot"
  | "architecture"
  | "terminal"
  | "configuration"
  | "validation";

export type EvidenceStatus = "verified" | "reviewed" | "pending" | "conceptual";

export interface TechnicalDecision {
  title: string;
  rationale: string;
}

export interface EvidenceItem {
  id: string;
  title: string;
  description: string;
  kind: EvidenceKind;
  status: EvidenceStatus;
  src?: string;
  alt?: string;
  language?: string;
  content?: string;
  checklist?: readonly {
    label: string;
    state: "passed" | "recorded" | "pending";
  }[];
}

export interface DocumentationEntry {
  slug: string;
  title: string;
  summary: string;
  category: DocumentationCategory;
  status: DocumentationStatus;
  publishingState: PublishingState;
  date: string;
  updatedAt: string;
  objective: string;
  engineeringSummary: readonly string[];
  technicalDecisions: readonly TechnicalDecision[];
  lessonsLearned: readonly string[];
  evidence: readonly EvidenceItem[];
  nextSteps: readonly string[];
  projectSlug?: string;
  tags: readonly string[];
  source: {
    label: string;
    reviewed: true;
    redactions: readonly string[];
  };
}
