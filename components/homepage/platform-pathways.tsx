import Link from "next/link";

import { Section } from "@/components/layout";
import { homepageContent } from "@/content/homepage";

export function PlatformPathways() {
  return (
    <Section
      className="platform-pathways"
      aria-labelledby="platform-pathways-title"
    >
      <div className="platform-pathways-heading">
        <p className="technical-eyebrow">Continue through the platform</p>
        <h2 id="platform-pathways-title">
          From current state to technical depth
        </h2>
      </div>
      <div className="platform-pathway-grid">
        {homepageContent.pathways.map((pathway, index) => (
          <Link
            className="platform-pathway"
            href={{ pathname: pathway.href }}
            key={pathway.href}
          >
            <span>
              {String(index + 1).padStart(2, "0")} / {pathway.label}
            </span>
            <h3>{pathway.title}</h3>
            <p>{pathway.description}</p>
            <strong>
              Explore <span aria-hidden>→</span>
            </strong>
          </Link>
        ))}
      </div>
    </Section>
  );
}
