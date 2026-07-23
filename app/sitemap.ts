import type { MetadataRoute } from "next";

import { applicationMetadata } from "@/constants";
import { documentationEntries } from "@/content/documentation";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: applicationMetadata.siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...["about", "lab", "projects", "documentation", "contact", "blog"].map((route) => ({
      url: `${applicationMetadata.siteUrl}/${route}`,
      changeFrequency: "monthly" as const,
      priority: route === "projects" ? 0.9 : 0.7,
    })),
    ...projects.map((project) => ({
      url: `${applicationMetadata.siteUrl}/projects/${project.slug}`,
      lastModified: project.updatedAt,
      changeFrequency: "monthly" as const,
      priority: project.status === "active" ? 0.8 : 0.5,
    })),
    ...documentationEntries.map((entry) => ({
      url: `${applicationMetadata.siteUrl}/documentation/${entry.slug}`,
      lastModified: entry.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
