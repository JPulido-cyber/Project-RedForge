import { Section } from "@/components/layout";
import { homepageContent } from "@/content/homepage";

import { ProjectGrid } from "./project-grid";

export function ProjectsSection() {
  return (
    <Section className="projects-section" id="projects">
      <div className="section-heading">
        <p className="section-label">ENGINEERING PORTFOLIO</p>
        <h2>Featured Projects</h2>
        <p className="section-description">
          Hands-on projects built to develop practical skills, document technical
          decisions, and demonstrate measurable growth.
        </p>
      </div>
      <ProjectGrid projects={homepageContent.projects} />
    </Section>
  );
}
