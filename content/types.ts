export interface ContentRecord {
  slug: string;
  title: string;
  summary: string;
  publishedAt?: string;
  updatedAt?: string;
  tags?: readonly string[];
}

export interface ProjectContent extends ContentRecord {
  status: "planned" | "active" | "complete" | "archived";
  technologies: readonly string[];
}
