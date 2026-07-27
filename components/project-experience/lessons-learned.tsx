import type { Project } from "@/content/projects";
import { ProjectSection } from "./project-section";

export function LessonsLearned({ lessons, retrospective }: { lessons: Project["lessonsLearned"]; retrospective?: Project["retrospective"] }) {
  return (
    <ProjectSection id="lessons" label="08 / Retrospective" title="Lessons Learned">
      {retrospective ? <dl className="project-retrospective">
        <div><dt>Biggest technical challenge</dt><dd>{retrospective.biggestChallenge}</dd></div>
        <div><dt>Solution selected</dt><dd>{retrospective.solutionSelected}</dd></div>
        <div><dt>Tradeoffs considered</dt><dd>{retrospective.tradeoffsConsidered}</dd></div>
        <div><dt>Future improvements</dt><dd>{retrospective.futureImprovements}</dd></div>
      </dl> : null}
      {lessons.length ? <div className="lesson-grid">{lessons.map((lesson) => <blockquote key={lesson.title}><h3>{lesson.title}</h3><p>{lesson.insight}</p></blockquote>)}</div> : <p className="project-empty-state">Lessons will be added after validated milestones.</p>}
    </ProjectSection>
  );
}
