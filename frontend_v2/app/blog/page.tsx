// app/blog/page.tsx

import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import { buildSEO, schemaBreadcrumb } from "@/lib/seo";

export const metadata = buildSEO({
  title: "Blog — MEDVOXA Insights & Healthcare RCM Knowledge",
  description:
    "Read expert articles on AI-powered RCM, automation, claim accuracy, denials, compliance, and provider workflow optimization.",
  canonical: "https://medvoxa.com/blog",
  keywords: [
    "rcm blog",
    "medical billing articles",
    "claim denial tips",
    "ai healthcare insights",
    "revenue cycle management articles",
  ],
  schema: schemaBreadcrumb([
    { name: "Home", url: "https://medvoxa.com" },
    { name: "Blog", url: "https://medvoxa.com/blog" },
  ]),
});

export default function BlogPage() {
  const blogDir = path.join(process.cwd(), "content/blog");
  const files = fs.readdirSync(blogDir);

  const posts = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");
    const { data } = matter(fileContent);

    return {
      slug: filename.replace(".md", ""),
      title: data.title,
      description: data.description,
      date: data.date,
    };
  });

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-24">
      <h1 className="text-4xl font-semibold mb-12">MEDVOXA Blog</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="p-8 bg-white border border-neutral-200 rounded-xl hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-semibold text-neutral-900">
              {post.title}
            </h2>
            <p className="text-neutral-600 mt-3">{post.description}</p>
            <p className="text-neutral-400 text-sm mt-4">{post.date}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
