import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResearchArticle } from "@/components/article/research-article";
import { JsonLd } from "@/components/seo/json-ld";
import { getGccStockStory } from "@/content/gcc-stories";
import { GCC_PUBLISHED_TICKERS } from "@/config/gcc-coverage";
import {
  getGccPeerBundles,
  getGccResearchBundle,
  getGccTicker,
} from "@/lib/gcc-data";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { resolveStory } from "@/lib/story-tokens";

export const revalidate = 3600;
export const dynamicParams = false;

export function generateStaticParams() {
  return GCC_PUBLISHED_TICKERS.map((ticker) => ({ ticker }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ticker: string }>;
}): Promise<Metadata> {
  const { ticker } = await params;
  const data = getGccTicker(ticker);
  if (!data) return { title: "GCC company not found" };
  const story = getGccStockStory(data.ticker);
  const title = story ? story.title : `${data.name} (${data.ticker}) — GCC research`;
  const description = story
    ? resolveStory(story, data).dek
    : data.description.slice(0, 160);
  return {
    title,
    description,
    alternates: { canonical: `/gcc/stocks/${data.ticker}` },
    openGraph: {
      title: `${title} · Stockmonk`,
      description,
      url: `/gcc/stocks/${data.ticker}`,
    },
  };
}

export default async function GccStockPage({
  params,
}: {
  params: Promise<{ ticker: string }>;
}) {
  const { ticker } = await params;
  const data = getGccTicker(ticker);
  if (!data) notFound();

  const bundle = getGccResearchBundle(data.ticker);
  const story = getGccStockStory(data.ticker);
  if (!story || !bundle) notFound();

  const related = getGccPeerBundles(data.ticker);
  const resolved = resolveStory(story, data);
  const jsonLd = [
    articleJsonLd({
      ticker: data.ticker,
      name: data.name,
      title: resolved.title,
      description: resolved.dek,
      date: data.updatedAt.slice(0, 10),
      path: `/gcc/stocks/${data.ticker}`,
      language: "en",
    }),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "GCC Stocks", path: "/gcc" },
      { name: data.sector, path: "/gcc/all-stocks" },
      { name: data.ticker, path: `/gcc/stocks/${data.ticker}` },
    ]),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <ResearchArticle bundle={bundle} story={story} news={[]} related={related} />
    </>
  );
}
