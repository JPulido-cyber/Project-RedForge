export const applicationMetadata = {
  name: "RedForge",
  shortName: "RedForge",
  description:
    "Engineering systems, infrastructure experiments, and operational documentation.",
  locale: "en_US",
  defaultTitle: "RedForge",
  titleTemplate: "%s | RedForge",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;
