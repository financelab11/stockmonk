import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResearchArticle } from "@/components/article/research-article";
import { JsonLd } from "@/components/seo/json-ld";
import { getIndiaStockStory } from "@/content/india-stocks";
import { INDIA_TICKERS } from "@/config/india-coverage";
import { generateStockStory } from "@/lib/generated-story";
import {
  getIndiaPeerBundles,
  getIndiaResearchBundle,
  getIndiaTicker,
} from "@/lib/india-data";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const revalidate = 3600;
export const dynamicParams = false;

export function generateStaticParams() {
  return INDIA_TICKERS.map((ticker) => ({ ticker }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ticker: string }>;
}): Promise<Metadata> {
  const { ticker } = await params;
  const data = getIndiaTicker(ticker);
  if (!data) return { title: "India company not found" };
  const bundle = getIndiaResearchBundle(data.ticker);
  const story =
    getIndiaStockStory(data.ticker) ?? (bundle ? generateStockStory(bundle) : null);
  const title = story
    ? story.title
    : `${data.name} (${data.ticker}) — India research`;
  return {
    title,
    description: story?.dek ?? data.description.slice(0, 160),
    alternates: { canonical: `/india/stocks/${data.ticker}` },
    openGraph: {
      title: `${title} · Stockmonk`,
      description: story?.dek ?? data.description.slice(0, 160),
      url: `/india/stocks/${data.ticker}`,
    },
  };
}

export default async function IndiaStockPage({
  params,
}: {
  params: Promise<{ ticker: string }>;
}) {
  const { ticker } = await params;
  const data = getIndiaTicker(ticker);
  if (!data) notFound();

  const bundle = getIndiaResearchBundle(data.ticker);
  const story =
    getIndiaStockStory(data.ticker) ?? (bundle ? generateStockStory(bundle) : null);
  if (!story || !bundle) notFound();

  const related = getIndiaPeerBundles(data.ticker);
  const jsonLd = [
    articleJsonLd({
      ticker: data.ticker,
      name: data.name,
      title: story.title,
      description: story.dek,
      date: data.updatedAt.slice(0, 10),
      path: `/india/stocks/${data.ticker}`,
      language: "en-IN",
    }),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "India Stocks", path: "/india" },
      { name: data.sector, path: "/india/all-stocks" },
      { name: data.ticker, path: `/india/stocks/${data.ticker}` },
    ]),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <ResearchArticle bundle={bundle} story={story} news={[]} related={related} />
    </>
  );
}
