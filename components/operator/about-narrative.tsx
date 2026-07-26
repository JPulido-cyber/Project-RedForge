import Link from "next/link";

import { aboutContent } from "@/content/about";

function NarrativeSection({
  icon,
  eyebrow,
  title,
  paragraphs,
}: {
  icon: string;
  eyebrow: string;
  title: string;
  paragraphs: readonly string[];
}) {
  return (
    <section className="about-linear-section">
      <span className="about-section-icon" aria-hidden>{icon}</span>
      <div>
        <p className="technical-eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </section>
  );
}

export function AboutNarrative() {
  return (
    <div className="about-narrative">
      <NarrativeSection icon="♙" eyebrow={aboutContent.journey.eyebrow} title={aboutContent.journey.title} paragraphs={aboutContent.journey.paragraphs} />
      <NarrativeSection icon="◎" eyebrow={aboutContent.path.eyebrow} title={aboutContent.path.title} paragraphs={aboutContent.path.paragraphs} />

      <section className="about-linear-section about-philosophy" aria-labelledby="engineering-philosophy-title">
        <span className="about-section-icon" aria-hidden>◉</span>
        <div>
          <p className="technical-eyebrow">{aboutContent.philosophy.eyebrow}</p>
          <h2 id="engineering-philosophy-title">{aboutContent.philosophy.displayTitle}</h2>
          <p>{aboutContent.philosophy.paragraphs[0]}</p>
          <ul>
            {aboutContent.philosophy.principles.map((principle) => <li key={principle}>{principle}</li>)}
          </ul>
        </div>
      </section>

      <section className="about-knowledge" aria-labelledby="knowledge-domains-title">
        <div className="about-section-title">
          <span className="about-section-icon" aria-hidden>◇</span>
          <div>
            <p className="technical-eyebrow">Enterprise knowledge domains</p>
            <h2 id="knowledge-domains-title">The knowledge I’m building intentionally</h2>
            <p>These domains provide the operational understanding required to assess enterprise environments effectively.</p>
          </div>
        </div>
        <div className="about-focus-grid">
          {aboutContent.focus.map((group) => (
            <article className="forged-panel" key={group.title}>
              <div className="about-domain-heading"><span aria-hidden>{group.icon}</span><h3>{group.title}</h3></div>
              <p>{group.purpose}</p>
              <ul>{group.disciplines.map((discipline) => <li key={discipline}>{discipline}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="about-actions forged-panel" aria-label="Explore supporting engineering">
        <span className="about-cta-icon" aria-hidden>▧</span>
        <div><p className="technical-eyebrow">Evidence over claims</p><h2>Explore the engineering behind this journey.</h2></div>
        <Link className="command-action" href="/documentation">View engineering records <span aria-hidden>→</span></Link>
      </section>
    </div>
  );
}
