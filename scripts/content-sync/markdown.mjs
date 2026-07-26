import fs from "node:fs";
import matter from "gray-matter";

function cleanInlineMarkdown(value) {
  return value
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_`]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function parseSections(markdown) {
  const sections = new Map();
  let activeSection = "";
  let activeLevel = 0;
  const recognizedSections = new Set([
    "status",
    "context",
    "decision",
    "rationale",
    "alternatives considered",
    "consequences",
    "implementation",
    "related records",
    "objective",
    "background",
    "engineering philosophy",
    "engineering decisions",
    "work completed",
    "validation",
    "challenges",
    "lessons learned",
    "evidence",
    "result",
    "next steps",
  ]);

  for (const line of markdown.replace(/\r\n?/g, "\n").split("\n")) {
    const heading = line.match(/^(#{1,6})\s+(.+?)\s*$/);
    if (heading) {
      const level = heading[1].length;
      const name = cleanInlineMarkdown(heading[2]).toLowerCase();
      if (recognizedSections.has(name)) {
        activeSection = name;
        activeLevel = level;
        if (!sections.has(activeSection)) sections.set(activeSection, []);
      } else if (activeSection && level > activeLevel) {
        sections.get(activeSection).push(cleanInlineMarkdown(heading[2]));
      } else {
        activeSection = "";
        activeLevel = 0;
      }
      continue;
    }
    if (activeSection) sections.get(activeSection).push(line);
  }

  return new Map(
    [...sections].map(([name, lines]) => [name, lines.join("\n").trim()]),
  );
}

export function readMarkdownDocument(file) {
  const raw = fs.readFileSync(file.filePath, "utf8").replace(/^\uFEFF/, "");
  const parsed = matter(raw);
  const stats = fs.statSync(file.filePath);
  return {
    ...file,
    frontmatter: parsed.data,
    body: parsed.content.replace(/\r\n?/g, "\n"),
    sections: parseSections(parsed.content),
    modifiedDate: stats.mtime.toISOString().slice(0, 10),
  };
}

export function markdownToParagraphs(value = "") {
  return value
    .split(/\n\s*\n/)
    .map((paragraph) => cleanInlineMarkdown(
      paragraph
        .split("\n")
        .map((line) => line.replace(/^\s*(?:[-*+]|\d+\.)\s+/, ""))
        .join(" "),
    ))
    .filter((paragraph) => paragraph && paragraph !== "---");
}

export function markdownToItems(value = "") {
  const items = value
    .split("\n")
    .map((line) => line.match(/^\s*(?:[-*+]|\d+\.)\s+(.+)$/)?.[1])
    .filter(Boolean)
    .map(cleanInlineMarkdown)
    .filter((item) => item !== "---");
  return items.length ? items : markdownToParagraphs(value);
}

export function firstContentLine(body) {
  return body
    .split("\n")
    .map(cleanInlineMarkdown)
    .find((line) => line && line !== "---" && !line.startsWith("#"));
}
