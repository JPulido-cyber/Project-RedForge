import type { MetadataRoute } from "next";

import { applicationMetadata } from "@/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("/sitemap.xml", applicationMetadata.siteUrl).toString(),
  };
}
