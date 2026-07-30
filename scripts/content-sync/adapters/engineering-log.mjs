import {
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

function normalizeDate(value, sourceName) {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  const candidate = String(value ?? "").trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(candidate)) return candidate;
  const usDate = candidate.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (usDate) return `${usDate[3]}-${usDate[1]}-${usDate[2]}`;
  throw new Error(`${sourceName}: engineering log date must use YYYY-MM-DD or MM/DD/YYYY.`);
}

function stringList(value) {
  if (Array.isArray(value)) return value.map(String);
  if (typeof value === "string" && value.trim()) return [value.trim()];
  return [];
}

function slugify(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function mapDecisions(value) {
  const paragraphs = markdownToParagraphs(value);
  const decisions = [];
  for (let index = 0; index < paragraphs.length; index += 1) {
    const title = paragraphs[index];
    if (!/^Decision \d+\s+[—-]\s+/.test(title)) continue;
    const rationale = [];
    for (let next = index + 1; next < paragraphs.length && !/^Decision \d+\s+[—-]\s+/.test(paragraphs[next]); next += 1) {
      rationale.push(paragraphs[next]);
    }
    if (!rationale.length) continue;
    decisions.push({
      title: title.replace(/^Decision \d+\s+[—-]\s+/, ""),
      rationale: rationale.join(" "),
    });
  }
  return decisions;
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

export function mapEngineeringLogDocument(document) {
  const id = String(document.frontmatter.id ?? "").trim().toUpperCase();
  const title = String(document.frontmatter.title ?? "").trim();
  const summary = sanitizePublicText(String(document.frontmatter.summary ?? "").trim());
  const date = normalizeDate(document.frontmatter.date, document.sourceName);
  const objective = sanitizeList(markdownToParagraphs(section(document, "Objective")));
  const background = sanitizeList(markdownToParagraphs(section(document, "Background")));
  const deployment = sanitizeList(markdownToParagraphs(
    section(document, "Active Directory Deployment")
    || section(document, "Splunk Enterprise Deployment"),
  ));
  const result = sanitizeList(markdownToParagraphs(section(document, "Result")));
  const decisions = mapDecisions(section(document, "Engineering Decisions")).map((decision) => ({
    title: sanitizePublicText(decision.title),
    rationale: sanitizePublicText(decision.rationale),
  }));
  const lessons = sanitizeList(markdownToItems(section(document, "Lessons Learned")));
  const validation = sanitizeList(markdownToItems(section(document, "Validation")));
  const nextSteps = sanitizeList(markdownToItems(section(document, "Next Steps")));
  const tags = stringList(document.frontmatter.tags);

  if (!/^ENG-\d{3}$/.test(id)) throw new Error(`${document.sourceName}: engineering log id must use ENG-NNN.`);
  if (!title || !summary || !objective.length || !(background.length || deployment.length) || !lessons.length || !validation.length || !nextSteps.length) {
    throw new Error(`${document.sourceName}: verified engineering log is missing required publishable sections.`);
  }
  if (String(document.frontmatter.status ?? "").toLowerCase() !== "verified") {
    throw new Error(`${document.sourceName}: only verified engineering logs may be synchronized.`);
  }

  return {
    sourceId: id,
    entry: {
      slug: `${id.toLowerCase()}-${slugify(title)}`,
      title: `${id} — ${title}`,
      summary,
      category: "Engineering Log",
      status: "Implemented",
      publishingState: "published",
      date,
      updatedAt: date,
      objective: objective.join(" "),
      engineeringSummary: [...background, ...deployment, ...result],
      technicalDecisions: decisions.length
        ? decisions
        : [{
          title,
          rationale: `${objective.join(" ")} ${markdownToParagraphs(section(document, "Engineering Philosophy")).join(" ")}`.trim(),
        }],
      lessonsLearned: lessons,
      evidence: [
        {
          id: `${id.toLowerCase()}-validation`,
          title: `${id} validation record`,
          description: "Reviewed validation statements from the verified engineering log. Sensitive operational values and unreviewed assets are not published.",
          kind: "validation",
          status: "verified",
          checklist: validation.map((label) => ({ label, state: "passed" })),
        },
        {
          id: `${id.toLowerCase()}-source-record`,
          title: "Sanitized engineering record",
          description: "Documentation evidence identifying the reviewed source record. Sensitive configuration values and personal metadata are intentionally excluded.",
          kind: "configuration",
          status: "reviewed",
          language: "yaml",
          content: [
            `record: ${id}`,
            `title: ${title}`,
            `status: ${String(document.frontmatter.status)}`,
            `project: ${String(document.frontmatter.project ?? "Project RedForge")}`,
            `evidenceStatus: ${String(document.frontmatter.evidence_status ?? "documented")}`,
          ].join("\n"),
        },
        ...(section(document, "Evidence").toLowerCase().includes("screenshot") ? [{
          id: `${id.toLowerCase()}-screenshots`,
          title: "Supporting engineering evidence",
          description: "Supporting source evidence is referenced by the engineering log but remains outside the public asset pipeline until security, privacy, and provenance review is complete.",
          kind: "screenshot",
          status: "pending",
        }] : []),
      ],
      nextSteps,
      ...(tags.some((tag) => ["telemetry", "splunk", "sysmon", "active-directory"].includes(tag.toLowerCase()))
        ? { projectSlug: "enterprise-home-lab" }
        : {}),
      tags: uniqueTags(["Engineering", ...tags.filter((tag) => tag.toLowerCase() !== "redforge")]),
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
