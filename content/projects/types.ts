export type ProjectStatus = "planned" | "active" | "complete" | "archived";

export interface Technology {
  name: string;
  category: "platform" | "infrastructure" | "security" | "automation" | "observability" | "cloud";
  description?: string;
}

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  status: "complete" | "active" | "planned";
}

export interface ArchitectureNode {
  id: string;
  label: string;
  type: "network" | "server" | "service" | "security" | "client" | "cloud";
  description: string;
}

export interface ArchitectureConnection {
  from: ArchitectureNode["id"];
  to: ArchitectureNode["id"];
  label: string;
}

export interface GalleryImage {
  src?: string;
  alt: string;
  caption: string;
}

export interface VideoAsset {
  title: string;
  description: string;
  url?: string;
  poster?: string;
}

export interface DownloadableAsset {
  title: string;
  description: string;
  format: string;
  url?: string;
}

export interface Challenge {
  title: string;
  context: string;
  resolution: string;
}

export interface LessonLearned {
  title: string;
  insight: string;
}

export interface CertificationReference {
  name: string;
  issuer: string;
  url?: string;
}

export interface CodeExample {
  title: string;
  language: string;
  description: string;
  code: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  status: ProjectStatus;
  phase: string;
  updatedAt: string;
  duration?: string;
  role: string;
  objectives: readonly string[];
  overview: readonly string[];
  technologies: readonly Technology[];
  timeline: readonly TimelineEvent[];
  architecture: {
    summary: string;
    nodes: readonly ArchitectureNode[];
    connections: readonly ArchitectureConnection[];
  };
  challenges: readonly Challenge[];
  lessonsLearned: readonly LessonLearned[];
  gallery: readonly GalleryImage[];
  videos: readonly VideoAsset[];
  codeExamples: readonly CodeExample[];
  downloads: readonly DownloadableAsset[];
  certifications: readonly CertificationReference[];
  futureRoadmap: readonly string[];
  relatedProjectSlugs: readonly string[];
}
