import { Section } from "@/components/layout";
import { homepageContent } from "@/content/homepage";

export function EngineeringPhilosophy() {
  return (
    <Section
      className="engineering-philosophy"
      aria-labelledby="engineering-philosophy-title"
    >
      <div className="engineering-philosophy-heading">
        <h2 id="engineering-philosophy-title">Discipline. Precision. Progress.</h2>
      </div>
      <div className="engineering-principles">
        {homepageContent.principles.map((principle, index) => (
          <article className="engineering-principle" key={principle.name}>
            <span aria-hidden>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3>{principle.name}</h3>
              <p>{principle.description}</p>
              <small>{principle.phrase}</small>
            </div>
          </article>
        ))}
      </div>
      <p className="engineering-mission">
        <span>Mission:</span>
        Engineer with Discipline.{" "}
        <strong>Advance toward Offensive Cybersecurity.</strong>
      </p>
    </Section>
  );
}
