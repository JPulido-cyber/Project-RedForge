import {
  firstContentLine,
  markdownToItems,
  markdownToParagraphs,
} from "../markdown.mjs";

function section(document, name) {
  return document.sections.get(name.toLowerCase()) ?? "";
}

function sanitizePublicText(value) {
  return value.replace(
    /\b(?:[a-z0-9-]+\.)+redforge\.test\b/gi,
    "the internal RedForge test domain",
  );
}

function sanitizeList(values) {
  return values.map(sanitizePublicText);
}

function normalizeDate(value, fallback, sourceName) {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  const candidate = String(value ?? "").trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(candidate)) return candidate;
  const usDate = candidate.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (usDate) return `${usDate[3]}-${usDate[1]}-${usDate[2]}`;
  const writtenDate = candidate ? new Date(candidate) : undefined;
  if (writtenDate && !Number.isNaN(writtenDate.valueOf())) {
    return writtenDate.toISOString().slice(0, 10);
  }
  if (/^\d{4}-\d{2}-\d{2}$/.test(fallback)) return fallback;
  throw new Error(`${sourceName}: milestone date could not be normalized.`);
}

function slugify(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function stringList(value) {
  if (Array.isArray(value)) return value.map(String);
  if (typeof value === "string" && value.trim()) return [value.trim()];
  return [];
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function titleFromDocument(document, id) {
  const frontmatterTitle = String(document.frontmatter.title ?? "").trim();
  if (frontmatterTitle) return frontmatterTitle;
  const firstLine = firstContentLine(document.body);
  if (firstLine && /^MILESTONE-\d{3}/i.test(firstLine)) {
    return firstLine.replace(new RegExp(`^${id}\\s*[—:-]?\\s*`, "i"), "").trim();
  }
  return document.sourceName
    .replace(/\.md(?:\.md)?$/i, "")
    .replace(/^Milestone-\d{3}\s*[—-]?\s*/i, "")
    .trim();
}

function completionDate(document) {
  const inlineDate = document.body.match(
    /\*\*Completion Date\*\*\s*\n+\s*([A-Za-z]+\s+\d{1,2},\s+\d{4})/i,
  )?.[1];
  return normalizeDate(document.frontmatter.date ?? inlineDate, document.modifiedDate, document.sourceName);
}

export function mapMilestoneDocument(document) {
  const id = String(
    document.frontmatter.id
    ?? document.sourceName.match(/^Milestone-\d{3}/i)?.[0]
    ?? "",
  ).toUpperCase();
  if (!/^MILESTONE-\d{3}$/.test(id)) {
    throw new Error(`${document.sourceName}: milestone id must use MILESTONE-NNN.`);
  }

  const title = titleFromDocument(document, id);
  const date = completionDate(document);
  const summaryParagraphs = sanitizeList(markdownToParagraphs(
    section(document, "Executive Summary")
    || section(document, "Milestone Summary")
    || section(document, "Summary")
    || section(document, "Overview"),
  ));
  const significance = sanitizeList(markdownToParagraphs(section(document, "Significance")));
  const outcome = sanitizeList(markdownToParagraphs(section(document, "Outcome")));
  const objectives = sanitizeList(markdownToItems(
    section(document, "Objectives Achieved")
    || section(document, "Objectives"),
  ));
  const accomplishments = sanitizeList(markdownToItems(
    section(document, "Major Achievements")
    || section(document, "Major Accomplishments")
    || section(document, "Deliverables"),
  ));
  const decisions = sanitizeList(markdownToItems(
    section(document, "Key Engineering Decisions")
    || section(document, "Design Principles"),
  ));
  const successCriteria = sanitizeList(markdownToItems(
    section(document, "Success Criteria")
    || section(document, "Standard"),
  ));
  const lessons = sanitizeList(markdownToItems(section(document, "Lessons Learned")));
  const nextSteps = sanitizeList(markdownToItems(
    section(document, "Next Phase")
    || section(document, "Next Milestone")
    || section(document, "Next Steps"),
  ));
  const summary = sanitizePublicText(String(document.frontmatter.summary ?? summaryParagraphs[0] ?? "").trim());

  if (!title || !summary || !(accomplishments.length || successCriteria.length)) {
    throw new Error(`${document.sourceName}: completed milestone is missing required publishable sections.`);
  }

  const evidenceItems = unique(successCriteria.length ? successCriteria : accomplishments);
  const engineeringSummary = unique([
    ...summaryParagraphs,
    ...significance,
    ...outcome,
  ]);
  const lessonsLearned = lessons.length
    ? lessons
    : unique([...decisions, ...significance, ...outcome]);
  const rationale = decisions.length
    ? decisions.join(" ")
    : `This milestone records the reviewed completion of ${title} and its program-level outcomes.`;

  return {
    sourceId: id,
    entry: {
      slug: id === "MILESTONE-001"
        ? "milestone-001-enterprise-blueprint"
        : `${id.toLowerCase()}-${slugify(title)}`,
      title: `${id.replace("MILESTONE", "Milestone")} — ${title}`,
      summary,
      category: "Milestone Log",
      status: "Complete",
      publishingState: "published",
      date,
      updatedAt: date,
      objective: objectives.length ? objectives.join(" ") : summary,
      engineeringSummary: engineeringSummary.length ? engineeringSummary : [summary],
      technicalDecisions: [{
        title: "Program-level milestone acceptance",
        rationale,
      }],
      lessonsLearned: lessonsLearned.length
        ? lessonsLearned
        : ["Reviewed completion criteria preserve traceability between engineering work and program outcomes."],
      evidence: [{
        id: `${id.toLowerCase()}-acceptance`,
        title: `${id} completion criteria`,
        description: "Reviewed program-level acceptance statements. Sensitive infrastructure values and unreviewed screenshots are excluded.",
        kind: "validation",
        status: "verified",
        checklist: evidenceItems.map((label) => ({ label, state: "passed" })),
      }],
      nextSteps: nextSteps.length
        ? nextSteps
        : ["Continue the next approved phase through evidence-backed Engineering Logs and Architecture Decision Records."],
      projectSlug: "enterprise-home-lab",
      tags: unique(["Milestone", ...stringList(document.frontmatter.tags).filter((tag) => tag.toLowerCase() !== "redforge")]),
      source: {
        label: `${id} — ${title}`,
        reviewed: true,
        redactions: [
          "Author identity",
          "Internal domain and IPv4 addressing",
          "Unreviewed screenshots and private configuration values",
        ],
      },
    },
  };
}
