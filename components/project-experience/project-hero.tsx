import type { Project } from "@/content/projects";
import Link from "next/link";

export function ProjectHero({ project }: { project: Project }) {
  return (
    <header className="project-hero">
      <Link className="project-back-link" href="/#projects">&larr; PROJECT INDEX</Link>
      <div className="project-hero-grid">
        <div>
          <p className="project-kicker">ENGINEERING PROJECT / {project.phase}</p>
          <h1>{project.title}</h1>
          <p className="project-subtitle">{project.subtitle}</p>
        </div>
        <dl className="project-hero-meta">
          <div><dt>Status</dt><dd data-status={project.status}>{project.status}</dd></div>
          <div><dt>Role</dt><dd>{project.role}</dd></div>
          <div><dt>Duration</dt><dd>{project.duration ?? "To be determined"}</dd></div>
          <div><dt>Updated</dt><dd>{project.updatedAt}</dd></div>
        </dl>
      </div>
    </header>
  );
}
