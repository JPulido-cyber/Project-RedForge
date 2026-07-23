import type { Project } from "@/content/projects";
import { Badge } from "@/components/ui";
import { ProjectSection } from "./project-section";

export function TechnologyStack({ technologies }: { technologies: Project["technologies"] }) {
  return (
    <ProjectSection id="technology" label="04 / Stack" title="Technology Stack">
      <div className="technology-grid">
        {technologies.map((technology) => <article key={technology.name}><Badge variant="brand">{technology.category}</Badge><h3>{technology.name}</h3>{technology.description ? <p>{technology.description}</p> : null}</article>)}
      </div>
    </ProjectSection>
  );
}
