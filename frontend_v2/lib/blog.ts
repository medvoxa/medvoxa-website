import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getAllPosts() {
  const blogPath = path.join(process.cwd(), "content/blog");
  const files = fs.readdirSync(blogPath);

  return files.map((file) => {
    const markdown = fs.readFileSync(path.join(blogPath, file), "utf-8");
    const { data, content } = matter(markdown);

    return {
      slug: file.replace(".md", ""),
      ...data,
      content,
    };
  });
}

export function getFeaturedPosts() {
  const posts = getAllPosts();
  return posts.filter((p) => p.featured === true);
}
