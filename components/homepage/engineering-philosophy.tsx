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
        {homepageContent.principles.map((principle) => (
          <article className="engineering-principle" key={principle.name}>
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
        Understand the Enterprise.{" "}
        <strong>Outthink the Adversary.</strong>
      </p>
    </Section>
  );
}
