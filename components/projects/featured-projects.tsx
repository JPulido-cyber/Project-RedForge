import { Section } from "@/components/layout";
import { homepageContent } from "@/content/homepage";
import Link from "next/link";

const previewOrder = [0, 2, 1, 3] as const;

export function FeaturedProjects() {
  return (
    <Section className="featured-preview" aria-labelledby="featured-preview-title">
      <div className="featured-preview-heading">
        <div>
          <p>FEATURED PROJECTS</p>
          <h2 id="featured-preview-title">Latest Work</h2>
        </div>
        <Link href={{ pathname: "/projects" }}>
          VIEW ALL PROJECTS <span aria-hidden>→</span>
        </Link>
      </div>
      <div className="featured-preview-grid">
        {previewOrder.map((projectIndex) => {
          const project = homepageContent.projects[projectIndex];
          return (
            <a className="preview-card" href={project.href} key={project.number}>
              <span className="preview-card-icon">{project.icon}</span>
              <span>
                <strong>{project.title}</strong>
                <small>{project.description}</small>
                <em className={project.status === "planned" ? "planned" : undefined}>
                  {project.status.toUpperCase()}
                </em>
              </span>
            </a>
          );
        })}
      </div>
    </Section>
  );
}
