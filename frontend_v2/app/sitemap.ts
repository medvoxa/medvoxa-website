import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://medvoxa.com";

  return [
    {
      url: base,
      lastModified: new Date().toISOString(),
      priority: 1,
    },
    {
      url: `${base}/about`,
      lastModified: new Date().toISOString(),
      priority: 0.8,
    },
    {
      url: `${base}/services`,
      lastModified: new Date().toISOString(),
      priority: 0.8,
    },
    {
      url: `${base}/providers`,
      lastModified: new Date().toISOString(),
      priority: 0.8,
    },
    {
      url: `${base}/investors`,
      lastModified: new Date().toISOString(),
      priority: 0.8,
    },
    {
      url: `${base}/careers`,
      lastModified: new Date().toISOString(),
      priority: 0.7,
    },
    {
      url: `${base}/contact`,
      lastModified: new Date().toISOString(),
      priority: 0.7,
    },
  ];
}
