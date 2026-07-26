import Link from "next/link";

import { aboutContent } from "@/content/about";

export function AboutNarrative() {
  return (
    <div className="about-narrative">
      <div className="about-story-grid">
        {[aboutContent.journey, aboutContent.path].map((section) => (
          <section className="forged-panel about-story" key={section.title}>
            <p className="technical-eyebrow">Professional narrative</p>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>
        ))}
      </div>

      <section className="forged-panel about-philosophy" aria-labelledby="engineering-philosophy-title">
        <div>
          <p className="technical-eyebrow">Operating principles</p>
          <h2 id="engineering-philosophy-title">{aboutContent.philosophy.title}</h2>
          {aboutContent.philosophy.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <ul>
          {aboutContent.philosophy.principles.map((principle) => <li key={principle}>{principle}</li>)}
        </ul>
      </section>

      <section className="about-focus" aria-labelledby="technical-focus-title">
        <div className="about-section-heading">
          <p className="technical-eyebrow">Supporting disciplines</p>
          <h2 id="technical-focus-title">Core technical focus</h2>
          <p>These disciplines are intentionally developed to support offensive cybersecurity engineering. The technologies are not the destination; they provide the operational understanding required to assess enterprise environments effectively.</p>
        </div>
        <div className="about-focus-grid">
          {aboutContent.focus.map((group) => (
            <article className="forged-panel" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.purpose}</p>
              <ul>{group.disciplines.map((discipline) => <li key={discipline}>{discipline}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="about-actions forged-panel" aria-label="Explore supporting engineering">
        <div><p className="technical-eyebrow">Evidence over claims</p><h2>Explore the engineering that supports this journey.</h2></div>
        <Link className="command-action" href="/documentation">View engineering records <span aria-hidden>→</span></Link>
      </section>
    </div>
  );
}
