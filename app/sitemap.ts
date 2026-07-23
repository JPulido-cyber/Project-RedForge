import type { MetadataRoute } from "next";

import { applicationMetadata } from "@/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: applicationMetadata.siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
