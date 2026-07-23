import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectExperience } from "@/components/project-experience";
import { PlatformShell } from "@/components/layout";
import { getProject, projects } from "@/content/projects";

export const dynamicParams = false;

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata(
  props: ProjectPageProps,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Project RedForge`,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary, type: "article" },
  };
}

export default async function ProjectPage(props: ProjectPageProps) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) notFound();
  return <PlatformShell><ProjectExperience project={project} /></PlatformShell>;
}
