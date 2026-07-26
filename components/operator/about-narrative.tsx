import Link from "next/link";

import { aboutContent } from "@/content/about";

export function AboutNarrative() {
  return (
    <div className="about-narrative">
      <section className="forged-panel about-snapshot" aria-labelledby="professional-snapshot-title">
        <div className="panel-heading"><span id="professional-snapshot-title">Professional snapshot</span><span>RF-001</span></div>
        <dl>
          {aboutContent.snapshot.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
        </dl>
      </section>

      <div className="about-story-grid">
        {[aboutContent.journey, aboutContent.purpose].map((section) => (
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

      <section className="forged-panel about-mission" aria-labelledby="current-mission-title">
        <div><p className="technical-eyebrow">Specialization</p><h2 id="current-mission-title">{aboutContent.mission.title}</h2></div>
        <p>{aboutContent.mission.description}</p>
      </section>

      <section className="about-focus" aria-labelledby="technical-focus-title">
        <div className="about-section-heading">
          <p className="technical-eyebrow">Supporting disciplines</p>
          <h2 id="technical-focus-title">Core technical focus</h2>
          <p>Broad enterprise knowledge developed in service of offensive cybersecurity engineering.</p>
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

      <section className="about-actions forged-panel" aria-label="Resume and contact">
        <div><p className="technical-eyebrow">Continue the conversation</p><h2>Review the work behind the profile.</h2></div>
        <div>
          <Link className="command-action" href="/documentation">Engineering records <span aria-hidden>→</span></Link>
          <Link className="command-action" href="/contact#resume">Resume &amp; contact <span aria-hidden>→</span></Link>
        </div>
      </section>
    </div>
  );
}
