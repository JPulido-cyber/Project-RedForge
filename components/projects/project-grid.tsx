import type { ProjectItem } from "@/content/types";

import { ProjectCard } from "./project-card";

interface ProjectGridProps {
  projects: readonly ProjectItem[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard {...project} key={project.number} />
      ))}
    </div>
  );
}
