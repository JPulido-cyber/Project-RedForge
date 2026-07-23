import type { Project } from "@/content/projects";
import { ProjectSection } from "./project-section";

export function EngineeringChallenges({ challenges }: { challenges: Project["challenges"] }) {
  return (
    <ProjectSection id="challenges" label="06 / Decisions" title="Engineering Challenges">
      {challenges.length ? <div className="challenge-grid">{challenges.map((challenge) => <article key={challenge.title}><h3>{challenge.title}</h3><p>{challenge.context}</p><strong>Resolution</strong><p>{challenge.resolution}</p></article>)}</div> : <p className="project-empty-state">Challenges and resolutions will be recorded during implementation.</p>}
    </ProjectSection>
  );
}
