import type { Project } from "@/content/projects";
import { ProjectSection } from "./project-section";

export function ProjectOverview({ project }: { project: Project }) {
  return (
    <ProjectSection id="overview" label="01 / Context" title="Project Overview">
      <div className="project-prose">{project.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
    </ProjectSection>
  );
}
