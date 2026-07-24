import fs from "node:fs";
import path from "node:path";

const localConfigName = ".obsidian-publish.json";

export function resolveVaultPath({ cwd = process.cwd(), env = process.env } = {}) {
  const configuredPath = env.OBSIDIAN_VAULT_PATH?.trim();
  if (configuredPath) return path.resolve(configuredPath);

  const configPath = path.join(cwd, localConfigName);
  if (fs.existsSync(configPath)) {
    const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
    if (typeof config.vaultPath !== "string" || !config.vaultPath.trim()) {
      throw new Error(`${localConfigName} must define a non-empty "vaultPath".`);
    }
    return path.resolve(config.vaultPath);
  }

  throw new Error(
    `Obsidian vault not configured. Set OBSIDIAN_VAULT_PATH or create ${localConfigName} from .obsidian-publish.example.json.`,
  );
}

