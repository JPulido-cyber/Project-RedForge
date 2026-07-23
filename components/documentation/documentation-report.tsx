import Link from "next/link";

import type { DocumentationEntry } from "@/content/documentation";

import { EvidenceRenderer } from "./evidence-renderer";

export function DocumentationReport({ entry }: { entry: DocumentationEntry }) {
  return (
    <article className="engineering-report">
      <header className="engineering-report-hero">
        <Link href={{ pathname: "/documentation" }}>← Documentation index</Link>
        <div className="engineering-report-title">
          <div>
            <p className="technical-eyebrow">{entry.category}</p>
            <h1>{entry.title}</h1>
            <p>{entry.summary}</p>
          </div>
          <dl>
            <div><dt>Status</dt><dd>{entry.status}</dd></div>
            <div><dt>Date</dt><dd>{entry.date}</dd></div>
            <div><dt>Updated</dt><dd>{entry.updatedAt}</dd></div>
            <div><dt>Source</dt><dd>{entry.source.label}</dd></div>
          </dl>
        </div>
      </header>
      <nav className="engineering-report-nav" aria-label="Report sections">
        {["Objective", "Summary", "Decisions", "Lessons", "Evidence", "Next steps"].map((label) => <a href={`#${label.toLowerCase().replaceAll(" ", "-")}`} key={label}>{label}</a>)}
      </nav>
      <div className="engineering-report-body">
        <section id="objective"><p className="technical-eyebrow">Objective</p><h2>Engineering objective</h2><p>{entry.objective}</p></section>
        <section id="summary"><p className="technical-eyebrow">Engineering summary</p><h2>Work performed</h2>{entry.engineeringSummary.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>
        <section id="decisions"><p className="technical-eyebrow">Technical decisions</p><h2>Decisions and rationale</h2><div className="decision-grid">{entry.technicalDecisions.map((decision) => <article key={decision.title}><h3>{decision.title}</h3><p>{decision.rationale}</p></article>)}</div></section>
        <section id="lessons"><p className="technical-eyebrow">Lessons learned</p><h2>Engineering lessons</h2><ul className="report-list">{entry.lessonsLearned.map((lesson) => <li key={lesson}>{lesson}</li>)}</ul></section>
        <section id="evidence"><p className="technical-eyebrow">Evidence</p><h2>Reviewed engineering evidence</h2><p className="evidence-boundary">Verified or reviewed evidence is separated from conceptual architecture and evidence-pending material.</p><EvidenceRenderer items={entry.evidence} /></section>
        <section id="next-steps"><p className="technical-eyebrow">Next steps</p><h2>Planned engineering actions</h2><ol className="report-list">{entry.nextSteps.map((step) => <li key={step}>{step}</li>)}</ol></section>
        <aside className="redaction-notice"><strong>Publishing review</strong><p>Source reviewed. Redactions: {entry.source.redactions.length ? entry.source.redactions.join(", ") : "None required"}.</p></aside>
      </div>
    </article>
  );
}
