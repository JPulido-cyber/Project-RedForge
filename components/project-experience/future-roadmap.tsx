import { ProjectSection } from "./project-section";

export function FutureRoadmap({ items }: { items: readonly string[] }) {
  return (
    <ProjectSection id="roadmap" label="11 / Next" title="Future Roadmap">
      <ol className="roadmap-list">{items.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol>
    </ProjectSection>
  );
}
