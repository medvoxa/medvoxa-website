// app/blog/[slug]/page.tsx

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { buildSEO, schemaBreadcrumb } from "@/lib/seo";

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "content/blog");
  const files = fs.readdirSync(dir);

  return files.map((file) => ({
    slug: file.replace(".md", ""),
  }));
}

export default function BlogPost({ params }) {
  const filePath = path.join(
    process.cwd(),
    "content/blog",
    `${params.slug}.md`
  );

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const html = marked(content);

  return (
    <div className="max-w-[800px] mx-auto px-4 py-24">
      <h1 className="text-4xl font-semibold mb-6">{data.title}</h1>
      <p className="text-neutral-500 text-sm mb-10">{data.date}</p>

      <article
        className="prose prose-neutral max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      ></article>
    </div>
  );
}

export function generateMetadata({ params }) {
  const filePath = path.join(
    process.cwd(),
    "content/blog",
    `${params.slug}.md`
  );
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);

  return buildSEO({
    title: data.title,
    description: data.description,
    canonical: `https://medvoxa.com/blog/${params.slug}`,
    keywords: data.keywords || [],
    schema: schemaBreadcrumb([
      { name: "Home", url: "https://medvoxa.com" },
      { name: "Blog", url: "https://medvoxa.com/blog" },
      {
        name: data.title,
        url: `https://medvoxa.com/blog/${params.slug}`,
      },
    ]),
  });
}
