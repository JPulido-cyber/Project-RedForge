import type { Metadata } from "next";
import Link from "next/link";

import { PlatformShell, Section } from "@/components/layout";
import { ProjectStatus, ProjectTags } from "@/components/projects";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Engineering Portfolio",
  description: "The Project RedForge engineering program portfolio.",
};

export default function ProjectsPage() {
  return (
    <PlatformShell>
      <Section className="portfolio-layout">
        <aside className="portfolio-rail">
          <p className="technical-eyebrow">Engineering portfolio</p>
          <h1>Projects</h1>
          <p>Hands-on engineering records built to develop practical skills, solve real problems, and document growth.</p>
          <div className="rail-divider" />
          <p className="rail-label">Lifecycle</p>
          <span>Active / In progress</span>
          <span>Planned / Future</span>
          <span>Evidence governed</span>
        </aside>
        <div className="portfolio-content">
          <div className="portfolio-heading">
            <div><p className="technical-eyebrow">All projects</p><h2>Engineering Portfolio</h2></div>
            <p>{projects.length} typed project records</p>
          </div>
          <div className="program-grid">
            {projects.map((project, index) => (
              <Link className="program-card" href={`/projects/${project.slug}`} key={project.slug}>
                <div className="program-card-top"><span>{String(index + 1).padStart(2, "0")}</span><ProjectStatus status={project.status === "active" ? "active" : project.status === "complete" ? "operational" : "planned"} /></div>
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
                <ProjectTags tags={project.technologies.slice(0, 4).map((technology) => technology.name.split(" — ")[0])} />
                <div className="program-card-footer"><span>{project.phase}</span><span aria-hidden>→</span></div>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </PlatformShell>
  );
}
