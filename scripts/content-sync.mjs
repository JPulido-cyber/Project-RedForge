import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { mapAdrDocument } from "./content-sync/adapters/adr.mjs";
import { mapEngineeringLogDocument } from "./content-sync/adapters/engineering-log.mjs";
import { mapMilestoneDocument } from "./content-sync/adapters/milestone.mjs";
import { resolveVaultPath } from "./content-sync/config.mjs";
import { discoverDocuments } from "./content-sync/discovery.mjs";
import { renderGeneratedModule } from "./content-sync/generate.mjs";
import { readMarkdownDocument } from "./content-sync/markdown.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputPath = path.join(root, "content", "documentation", "generated.ts");
const adapters = new Map([
  ["adr", mapAdrDocument],
  ["engineering-log", mapEngineeringLogDocument],
  ["milestone", mapMilestoneDocument],
]);

async function synchronize() {
  const vaultPath = resolveVaultPath({ cwd: root });
  const discovered = discoverDocuments(vaultPath);
  const mapped = discovered.map((file) => {
    const adapter = adapters.get(file.type);
    if (!adapter) throw new Error(`No adapter registered for document type: ${file.type}`);
    return adapter(readMarkdownDocument(file));
  });

  const sourceIds = new Set();
  for (const record of mapped) {
    if (sourceIds.has(record.sourceId)) throw new Error(`Duplicate documentation source id: ${record.sourceId}`);
    sourceIds.add(record.sourceId);
  }

  const entries = mapped
    .map((record) => record.entry)
    .sort((left, right) => left.slug.localeCompare(right.slug, "en"));
  const { assertValidDocumentationEntries } = await import(
    pathToFileURL(path.join(root, "content", "documentation", "validate.ts")).href
  );
  assertValidDocumentationEntries(entries);

  const nextOutput = renderGeneratedModule(entries);
  const currentOutput = fs.existsSync(outputPath) ? fs.readFileSync(outputPath, "utf8") : "";
  if (nextOutput !== currentOutput) fs.writeFileSync(outputPath, nextOutput, "utf8");

  const counts = mapped.reduce((summary, record) => {
    const category = record.entry.category;
    summary.set(category, (summary.get(category) ?? 0) + 1);
    return summary;
  }, new Map());
  console.log(`Synchronized ${entries.length} documentation records.`);
  for (const [category, count] of counts) console.log(`- ${category}: ${count}`);
  console.log("Generated content/documentation/generated.ts");
  console.log("Validation passed.");
}

synchronize().catch((error) => {
  console.error(`Content synchronization failed: ${error instanceof Error ? error.message : String(error)}`);
  process.exitCode = 1;
});
