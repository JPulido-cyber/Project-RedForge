import Link from "next/link";

import { Section } from "@/components/layout";
import { documentationEntries } from "@/content/documentation";

export function EngineeringActivityFeed() {
  const activity = [...documentationEntries]
    .filter((entry) => entry.publishingState === "published")
    .sort(
      (a, b) =>
        b.updatedAt.localeCompare(a.updatedAt) || b.date.localeCompare(a.date),
    )
    .slice(0, 4);

  return (
    <Section
      className="engineering-activity"
      id="engineering-activity"
      aria-labelledby="engineering-activity-title"
    >
      <div className="engineering-activity-heading">
        <div>
          <p className="technical-eyebrow">Latest engineering activity</p>
          <h2 id="engineering-activity-title">Evidence-backed updates</h2>
          <p className="engineering-activity-intro">
            A concise record of what changed, what was validated, and where the
            enterprise is progressing next.
          </p>
        </div>
        <Link href={{ pathname: "/documentation" }}>
          View all engineering records <span aria-hidden>→</span>
        </Link>
      </div>
      <div className="engineering-activity-grid">
        {activity.map((entry) => (
          <Link
            className="engineering-activity-card"
            href={{ pathname: `/documentation/${entry.slug}` }}
            key={entry.slug}
          >
            <div>
              <span>{entry.category}</span>
              <time dateTime={entry.date}>{entry.date}</time>
            </div>
            <h3>{entry.title}</h3>
            <p>{entry.summary}</p>
            <footer>
              <span>{entry.status}</span>
              <span>Read report →</span>
            </footer>
          </Link>
        ))}
      </div>
    </Section>
  );
}
