import {
  firstContentLine,
  markdownToItems,
  markdownToParagraphs,
} from "../markdown.mjs";

function normalizeId(value, sourceName) {
  const candidate = String(value ?? sourceName.match(/^ADR-\d+/i)?.[0] ?? "").toUpperCase();
  if (!/^ADR-\d{3}$/.test(candidate)) {
    throw new Error(`${sourceName}: ADR id must use ADR-NNN.`);
  }
  return candidate;
}

function normalizeDate(value, fallback, sourceName) {
  const candidate = value instanceof Date
    ? value.toISOString().slice(0, 10)
    : String(value ?? fallback);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(candidate)) {
    throw new Error(`${sourceName}: ADR date must use YYYY-MM-DD.`);
  }
  return candidate;
}

function slugify(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function section(document, name) {
  return document.sections.get(name.toLowerCase()) ?? "";
}

function stringList(value) {
  if (Array.isArray(value)) return value.map(String);
  if (typeof value === "string" && value.trim()) return [value.trim()];
  return [];
}

function uniqueTags(tags) {
  const seen = new Set();
  return tags.filter((tag) => {
    const key = tag.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function titleFromDocument(document, id) {
  const frontmatterTitle = String(document.frontmatter.title ?? "").trim();
  if (frontmatterTitle) return frontmatterTitle;
  const firstLine = firstContentLine(document.body);
  if (firstLine) return firstLine.replace(new RegExp(`^${id}\\s*[—:-]?\\s*`, "i"), "").trim();
  return document.sourceName
    .replace(/\.md(?:\.md)?$/i, "")
    .replace(new RegExp(`^${id}\\s*[—-]?\\s*`, "i"), "")
    .trim();
}

function mapStatus(value) {
  const normalized = String(value ?? "").replace(/[*_]/g, "").trim().toLowerCase();
  if (normalized.includes("accepted")) return "Complete";
  if (normalized.includes("implemented")) return "Implemented";
  if (normalized.includes("progress")) return "In Progress";
  if (normalized.includes("pending")) return "Pending Validation";
  if (normalized.includes("future")) return "Future";
  return "Planned";
}

export function mapAdrDocument(document) {
  const id = normalizeId(document.frontmatter.id, document.sourceName);
  const title = titleFromDocument(document, id);
  const date = normalizeDate(document.frontmatter.date, document.modifiedDate, document.sourceName);
  const context = markdownToParagraphs(section(document, "Context"));
  const decision = markdownToParagraphs(section(document, "Decision"));
  const rationale = markdownToParagraphs(section(document, "Rationale"));
  const alternatives = markdownToItems(section(document, "Alternatives Considered"));
  const consequences = markdownToItems(section(document, "Consequences"));
  const implementation = markdownToParagraphs(section(document, "Implementation"));
  const relatedRecords = markdownToItems(section(document, "Related Records"));
  const statusText = document.frontmatter.status ?? section(document, "Status");
  const tags = stringList(document.frontmatter.tags);
  const project = String(document.frontmatter.project ?? "Project RedForge");
  const summary = String(document.frontmatter.summary ?? rationale[0] ?? decision[0] ?? "").trim();

  if (!title || !summary || !decision.length || !rationale.length) {
    throw new Error(`${document.sourceName}: ADR requires a title, Decision, Rationale, and summary.`);
  }

  const decisionRationale = [
    ...rationale,
    ...(alternatives.length ? [`Alternatives considered: ${alternatives.join("; ")}`] : []),
  ].join(" ");
  const lessonsLearned = consequences.length
    ? consequences
    : rationale;

  return {
    sourceId: id,
    entry: {
      slug: `${id.toLowerCase()}-${slugify(title)}`,
      title: `${id} — ${title}`,
      summary,
      category: "Architecture Decision Record",
      status: mapStatus(statusText),
      publishingState: "published",
      date,
      updatedAt: date,
      objective: context[0] ?? `Record the architectural decision for ${title}.`,
      engineeringSummary: context.length
        ? [...context, ...implementation]
        : [...decision, ...rationale, ...implementation],
      technicalDecisions: [{
        title,
        rationale: `${decision.join(" ")} ${decisionRationale}`.trim(),
      }],
      lessonsLearned,
      evidence: [{
        id: `${id.toLowerCase()}-decision-record`,
        title: `${id} reviewed decision record`,
        description: "Reviewed documentation evidence of the architectural decision. This record does not claim deployment or technical validation evidence.",
        kind: "configuration",
        status: "reviewed",
        language: "yaml",
        content: [
          `record: ${id}`,
          `status: ${String(statusText).replace(/[*_\n]/g, " ").replace(/\s+/g, " ").trim()}`,
          `project: ${project}`,
          `tags: ${tags.length ? tags.join(", ") : "architecture"}`,
          `relatedRecords: ${relatedRecords.length ? relatedRecords.join(", ") : "None listed"}`,
        ].join("\n"),
      }],
      nextSteps: [
        "Maintain this decision as the governing architecture record and document material changes in a superseding ADR.",
      ],
      projectSlug: "enterprise-home-lab",
      tags: uniqueTags(["Architecture", ...tags]),
      source: {
        label: `${id} — ${title}`,
        reviewed: true,
        redactions: stringList(document.frontmatter.deciders).length
          ? ["Decider names omitted from generated public content"]
          : [],
      },
    },
  };
}
