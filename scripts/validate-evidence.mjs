import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifestPath = path.join(root, "Evidence", "Published", "manifest.json");
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));

function sha256(filePath) {
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex").toUpperCase();
}

const ids = new Set();
const websitePaths = new Set();

for (const asset of manifest.assets) {
  if (asset.status !== "APPROVED") throw new Error(`${asset.id}: only APPROVED assets may be published.`);
  if (ids.has(asset.id)) throw new Error(`Duplicate evidence id: ${asset.id}`);
  if (websitePaths.has(asset.website)) throw new Error(`Duplicate website evidence path: ${asset.website}`);
  ids.add(asset.id);
  websitePaths.add(asset.website);

  const reviewedPath = path.join(root, asset.reviewed);
  const websitePath = path.join(root, asset.website);
  if (!fs.existsSync(reviewedPath)) throw new Error(`${asset.id}: reviewed source is missing.`);
  if (!fs.existsSync(websitePath)) throw new Error(`${asset.id}: website copy is missing.`);

  const reviewedHash = sha256(reviewedPath);
  const websiteHash = sha256(websitePath);
  if (reviewedHash !== asset.sha256) throw new Error(`${asset.id}: reviewed hash does not match its approval record.`);
  if (websiteHash !== reviewedHash) throw new Error(`${asset.id}: website copy does not match Reviewed.`);
}

const rawImages = fs.readdirSync(path.join(root, "Evidence", "Raw"), { withFileTypes: true })
  .filter((entry) => entry.isFile() && /\.(?:avif|gif|ico|jpe?g|png|svg|webp)$/i.test(entry.name));
if (rawImages.length) throw new Error("Raw evidence images must not be committed or published.");

console.log(`Evidence validation passed for ${manifest.assets.length} published assets.`);
