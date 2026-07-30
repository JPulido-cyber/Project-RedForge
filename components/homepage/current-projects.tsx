import Link from "next/link";

import { Section } from "@/components/layout";
import { projects } from "@/content/projects";

const currentProjectSlugs = [
  "enterprise-home-lab",
  "active-directory-lab",
  "splunk-detection-lab",
] as const;

export function CurrentProjects() {
  const currentProjects = currentProjectSlugs.map((slug) => {
    const project = projects.find((candidate) => candidate.slug === slug);

    if (!project) {
      throw new Error(`Missing current homepage project: ${slug}`);
    }

    return project;
  });

  return (
    <Section className="current-projects" aria-labelledby="current-projects-title">
      <div className="current-projects-heading">
        <div>
          <p className="technical-eyebrow">Current projects</p>
          <h2 id="current-projects-title">Verified engineering platforms</h2>
        </div>
        <Link href={{ pathname: "/projects" }}>
          View all projects <span aria-hidden>→</span>
        </Link>
      </div>
      <div className="current-projects-grid">
        {currentProjects.map((project, index) => (
          <Link
            className="current-project-card"
            href={{ pathname: `/projects/${project.slug}` }}
            key={project.slug}
          >
            <span className="current-project-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <span className={`current-project-status ${project.status}`}>
                {project.status === "complete" ? "Validated" : project.status}
              </span>
              <h3>{project.title}</h3>
              <p>{project.phase}</p>
            </div>
            <strong aria-hidden>→</strong>
          </Link>
        ))}
      </div>
    </Section>
  );
}
