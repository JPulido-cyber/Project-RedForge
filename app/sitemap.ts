import type { MetadataRoute } from "next";

import { applicationMetadata } from "@/constants";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: applicationMetadata.siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projects.map((project) => ({
      url: `${applicationMetadata.siteUrl}/projects/${project.slug}`,
      lastModified: project.updatedAt,
      changeFrequency: "monthly" as const,
      priority: project.status === "active" ? 0.8 : 0.5,
    })),
  ];
}
