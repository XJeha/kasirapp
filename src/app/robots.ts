import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

// Wajib untuk static export: hasilkan robots.txt saat build.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: new URL(siteConfig.url).host,
  };
}
