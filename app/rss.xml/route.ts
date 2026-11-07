import { getNewsfeed } from "@/lib/data";
import { SITE } from "@/lib/constants";

export const revalidate = 900;

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const items = getNewsfeed().slice(0, 40);
  const entries = items
    .map((item) => {
      const url = `${SITE.url}${item.href}`;
      const date = new Date(`${item.date.slice(0, 10)}T12:00:00Z`).toUTCString();
      return `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${date}</pubDate>
      <description>${escapeXml(item.summary)}</description>
      <category>${escapeXml(item.tag)}</category>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Stockmonk — data updates</title>
    <link>${SITE.url}/newsfeed</link>
    <description>Earnings results, estimate updates, filing changes and price-range observations from the Stockmonk dataset.</description>
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE.url}/rss.xml" rel="self" type="application/rss+xml" />
${entries}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=900, stale-while-revalidate=86400",
    },
  });
}
