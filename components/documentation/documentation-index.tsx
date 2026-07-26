"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { Section } from "@/components/layout";
import type {
  DocumentationCategory,
  DocumentationStatus,
} from "@/content/documentation";

interface DocumentationIndexItem {
  slug: string;
  title: string;
  summary: string;
  category: DocumentationCategory;
  status: DocumentationStatus;
  tags: readonly string[];
}

interface CategorySummary {
  category: DocumentationCategory;
  filter: string;
  label: string;
  description: string;
  count: number;
}

interface DocumentationIndexProps {
  entries: readonly DocumentationIndexItem[];
  categories: readonly CategorySummary[];
}

export function DocumentationIndex({ categories, entries }: DocumentationIndexProps) {
  const searchParams = useSearchParams();
  const requestedFilter = searchParams.get("type");
  const selectedCategory = categories.find(({ filter }) => filter === requestedFilter);
  const visibleEntries = selectedCategory
    ? entries.filter(({ category }) => category === selectedCategory.category)
    : entries;

  return (
    <Section className="documentation-layout">
      <aside className="documentation-rail forged-panel">
        <nav aria-label="Filter documentation by record type" className="documentation-filter">
          <p className="rail-label">Record types</p>
          <Link
            aria-current={selectedCategory ? undefined : "page"}
            className={!selectedCategory ? "active" : undefined}
            href="/documentation"
            scroll={false}
          >
            <span>All records <small>{entries.length}</small></span>
            <p>View the complete reviewed engineering record system.</p>
          </Link>
          {categories.map(({ category, count, description, filter, label }) => (
            <Link
              aria-current={selectedCategory?.category === category ? "page" : undefined}
              className={selectedCategory?.category === category ? "active" : undefined}
              href={{ pathname: "/documentation", query: { type: filter } }}
              key={category}
              scroll={false}
            >
              <span>{label} <small>{count}</small></span>
              <p>{description}</p>
            </Link>
          ))}
        </nav>
        <div className="rail-divider" />
        <p className="rail-label">Workflow</p>
        <span>Obsidian draft</span><span>Review & redaction</span><span>Repository validation</span><span>Deployment</span>
      </aside>
      <div className="documentation-results">
        <p aria-live="polite" className="documentation-result-count">
          Showing {visibleEntries.length} {selectedCategory?.label ?? "reviewed records"}
        </p>
        <div className="documentation-list">
          {visibleEntries.map((entry) => (
            <article className="documentation-card forged-panel" key={entry.slug}>
              <div><span className="evidence-chip">{entry.status}</span><p className="technical-eyebrow">{entry.category}</p><h2>{entry.title}</h2><p>{entry.summary}</p></div>
              <div className="documentation-tags">{entry.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <Link href={{ pathname: `/documentation/${entry.slug}` }}>Read engineering report <span aria-hidden>→</span></Link>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
