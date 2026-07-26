import fs from "node:fs";
import path from "node:path";

const supportedSources = [
  {
    type: "adr",
    directory: path.join("Enterprise Home Lab", "Architecture Decisions"),
    pattern: /^ADR-\d+.*\.md(?:\.md)?$/i,
  },
  {
    type: "engineering-log",
    directory: path.join("Enterprise Home Lab", "Engineering Logs"),
    pattern: /^ENG-010(?:\s|—|-).*\.md(?:\.md)?$/i,
  },
];

function assertWithinVault(vaultPath, candidatePath) {
  const relative = path.relative(vaultPath, candidatePath);
  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    throw new Error(`Refusing to read a path outside the configured vault: ${candidatePath}`);
  }
}

export function discoverDocuments(vaultPath) {
  if (!fs.existsSync(vaultPath) || !fs.statSync(vaultPath).isDirectory()) {
    throw new Error(`Configured Obsidian vault does not exist or is not a directory: ${vaultPath}`);
  }

  const documents = [];
  for (const source of supportedSources) {
    const directoryPath = path.resolve(vaultPath, source.directory);
    assertWithinVault(vaultPath, directoryPath);
    if (!fs.existsSync(directoryPath)) continue;

    const names = fs.readdirSync(directoryPath, { encoding: "utf8", withFileTypes: true })
      .filter((entry) => entry.isFile() && source.pattern.test(entry.name))
      .map((entry) => entry.name)
      .sort((left, right) => left.localeCompare(right, "en"));

    for (const name of names) {
      const filePath = path.join(directoryPath, name);
      assertWithinVault(vaultPath, filePath);
      documents.push({ type: source.type, filePath, sourceName: name });
    }
  }

  return documents;
}
