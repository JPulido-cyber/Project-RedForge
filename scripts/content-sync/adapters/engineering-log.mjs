import {
  markdownToItems,
  markdownToParagraphs,
} from "../markdown.mjs";

function section(document, name) {
  return document.sections.get(name.toLowerCase()) ?? "";
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
  const summary = String(document.frontmatter.summary ?? "").trim();
  const date = normalizeDate(document.frontmatter.date, document.sourceName);
  const objective = markdownToParagraphs(section(document, "Objective"));
  const background = markdownToParagraphs(section(document, "Background"));
  const result = markdownToParagraphs(section(document, "Result"));
  const decisions = mapDecisions(section(document, "Engineering Decisions"));
  const lessons = markdownToItems(section(document, "Lessons Learned"));
  const validation = markdownToItems(section(document, "Validation"));
  const nextSteps = markdownToItems(section(document, "Next Steps"));
  const tags = stringList(document.frontmatter.tags);

  if (!/^ENG-\d{3}$/.test(id)) throw new Error(`${document.sourceName}: engineering log id must use ENG-NNN.`);
  if (!title || !summary || !objective.length || !background.length || !decisions.length || !lessons.length || !validation.length || !nextSteps.length) {
    throw new Error(`${document.sourceName}: verified engineering log is missing required publishable sections.`);
  }
  if (String(document.frontmatter.status ?? "").toLowerCase() !== "verified") {
    throw new Error(`${document.sourceName}: only verified engineering logs may be synchronized.`);
  }

  return {
    sourceId: id,
    entry: {
      slug: `${id.toLowerCase()}-centralized-telemetry-pipeline-deployment`,
      title: `${id} — ${title}`,
      summary,
      category: "Engineering Log",
      status: "Implemented",
      publishingState: "published",
      date,
      updatedAt: date,
      objective: objective.join(" "),
      engineeringSummary: [...background, ...result],
      technicalDecisions: decisions,
      lessonsLearned: lessons,
      evidence: [
        {
          id: `${id.toLowerCase()}-validation`,
          title: "Centralized telemetry validation record",
          description: "Reviewed engineering-log evidence records end-to-end collection and retrieval from both managed Windows systems. No event counts, internal addressing, or screenshots are published.",
          kind: "validation",
          status: "verified",
          checklist: validation.map((label) => ({ label, state: "passed" })),
        },
        {
          id: `${id.toLowerCase()}-pipeline-configuration`,
          title: "Sanitized telemetry pipeline record",
          description: "Documentation evidence of the implemented telemetry path. Sensitive configuration values are intentionally excluded.",
          kind: "configuration",
          status: "reviewed",
          language: "yaml",
          content: [
            "record: ENG-010",
            "endpointInstrumentation: Microsoft Sysmon",
            "forwarder: Splunk Universal Forwarder",
            "analysisPlatform: Splunk Enterprise",
            "managedSources:",
            "  - RF-DC01",
            "  - RF-WIN11-01",
            "validation: Controlled endpoint activity retrieved with SPL",
          ].join("\n"),
        },
        {
          id: `${id.toLowerCase()}-screenshots`,
          title: "Telemetry validation screenshots",
          description: "Supporting screenshots are documented in the private engineering record but are not published until asset-level security and privacy review is complete.",
          kind: "screenshot",
          status: "pending",
        },
      ],
      nextSteps,
      projectSlug: "enterprise-home-lab",
      tags: uniqueTags(["Telemetry", "Splunk", "Sysmon", "Windows", ...tags.filter((tag) => tag.toLowerCase() !== "redforge")]),
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
