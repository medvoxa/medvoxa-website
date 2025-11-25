import { getAllPosts } from "@/lib/blog";

export default function sitemap() {
  const base = "https://medvoxa.com";

  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/careers",
    "/pricing",
    "/providers",
    "/partner-program",
    "/investors",
    "/solutions",
    "/solutions/rcm-automation",
    "/solutions/intelligent-claims",
  ];

  const blogPosts = getAllPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const pages = staticRoutes.map((route) => ({
    url: base + route,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  return [...pages, ...blogPosts];
}
