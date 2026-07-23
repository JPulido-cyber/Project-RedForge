const sections = [
  ["Overview", "overview"],
  ["Architecture", "architecture"],
  ["Timeline", "timeline"],
  ["Challenges", "challenges"],
  ["Evidence", "evidence"],
  ["Roadmap", "roadmap"],
] as const;

export function ProjectNavigation() {
  return (
    <nav className="project-section-navigation" aria-label="Project sections">
      {sections.map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}
    </nav>
  );
}
