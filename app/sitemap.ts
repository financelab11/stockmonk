import type { MetadataRoute } from "next";
import { ALL_TICKERS, BENCHMARK_TICKER } from "@/config/universe";
import { INDIA_TICKERS } from "@/config/india-coverage";
import { SITE } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/`, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${SITE.url}/discover`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE.url}/discover/all-stocks`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${SITE.url}/india`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE.url}/india/all-stocks`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${SITE.url}/newsfeed`, lastModified: now, changeFrequency: "hourly", priority: 0.8 },
    { url: `${SITE.url}/framework`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE.url}/watchlist`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${SITE.url}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE.url}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE.url}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE.url}/editorial-guidelines`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE.url}/data-sources`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
  ];

  const stockRoutes: MetadataRoute.Sitemap = ALL_TICKERS.filter(
    (ticker) => ticker !== BENCHMARK_TICKER,
  ).map((ticker) => ({
    url: `${SITE.url}/stocks/${ticker}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const indiaRoutes: MetadataRoute.Sitemap = INDIA_TICKERS.map((ticker) => ({
    url: `${SITE.url}/india/stocks/${ticker}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...stockRoutes, ...indiaRoutes];
}
