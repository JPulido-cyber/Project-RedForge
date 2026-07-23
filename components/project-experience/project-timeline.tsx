import type { Project } from "@/content/projects";
import { ProjectSection } from "./project-section";

export function ProjectTimeline({ events }: { events: Project["timeline"] }) {
  return (
    <ProjectSection id="timeline" label="05 / Delivery" title="Engineering Timeline">
      <ol className="engineering-timeline">{events.map((event) => <li data-status={event.status} key={`${event.date}-${event.title}`}><time>{event.date}</time><div><h3>{event.title}</h3><p>{event.description}</p></div></li>)}</ol>
    </ProjectSection>
  );
}
