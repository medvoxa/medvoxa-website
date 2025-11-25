import { getAllPosts } from "@/lib/blog";

export async function GET() {
  const posts = getAllPosts();
  const base = "https://medvoxa.com";

  const rss = `
  <rss version="2.0">
    <channel>
      <title>MEDVOXA Blog RSS Feed</title>
      <link>${base}</link>
      <description>AI-driven RCM insights and education</description>

      ${posts
        .map((post) => {
          return `
            <item>
              <title><![CDATA[${post.title}]]></title>
              <link>${base}/blog/${post.slug}</link>
              <pubDate>${new Date(post.date).toUTCString()}</pubDate>
              <description><![CDATA[${post.description}]]></description>
            </item>
          `;
        })
        .join("")}
    </channel>
  </rss>
  `;

  return new Response(rss, {
    headers: { "Content-Type": "application/xml" },
  });
}
