import type { ProjectItem } from "@/content/types";

import { ProjectStatus } from "./project-status";
import { ProjectTags } from "./project-tags";

export function ProjectCard({
  description,
  href,
  icon,
  number,
  status,
  tags,
  title,
}: ProjectItem) {
  return (
    <article className="project-card">
      <span className="project-number">{number}</span>
      <div className="project-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <ProjectTags tags={tags} />
      <div className="project-footer">
        <ProjectStatus status={status} />
        <a href={href}>
          {status === "planned" ? "VIEW ROADMAP" : "VIEW PROJECT"} &rarr;
        </a>
      </div>
    </article>
  );
}
