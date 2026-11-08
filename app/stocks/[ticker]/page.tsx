import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResearchArticle } from "@/components/article/research-article";
import { SupportingProfile } from "@/components/article/supporting-profile";
import { JsonLd } from "@/components/seo/json-ld";
import { getStockStory } from "@/content/stocks";
import { ALL_TICKERS, BENCHMARK_TICKER, RESEARCH_TICKERS } from "@/config/universe";
import {
  getNewsfeed,
  getPrices,
  getResearchBundle,
  getResearchBundles,
  getTicker,
} from "@/lib/data";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  profilePageJsonLd,
} from "@/lib/seo";

export const revalidate = 3600;
export const dynamicParams = false;

export function generateStaticParams() {
  return ALL_TICKERS.filter((ticker) => ticker !== BENCHMARK_TICKER).map(
    (ticker) => ({ ticker }),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ticker: string }>;
}): Promise<Metadata> {
  const { ticker } = await params;
  const data = getTicker(ticker);

  if (!data) {
    return { title: "Company not found" };
  }

  const story = getStockStory(data.ticker);
  const title = story
    ? story.title
    : `${data.name} (${data.ticker}) — company profile`;
  const description = story
    ? story.dek
    : `${data.name} (${data.ticker}) profile: price, revenue, margins and key ratios from company filings.`;

  return {
    title,
    description,
    alternates: { canonical: `/stocks/${data.ticker}` },
    openGraph: {
      type: "article",
      title: `${title} · Stockmonk`,
      description,
      url: `/stocks/${data.ticker}`,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: `${data.name} research` }],
      publishedTime: data.updatedAt,
      modifiedTime: data.updatedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · Stockmonk`,
      description,
      images: ["/og.png"],
    },
    other: {
      "article:modified_time": data.updatedAt,
    },
  };
}

export default async function StockPage({
  params,
}: {
  params: Promise<{ ticker: string }>;
}) {
  const { ticker } = await params;
  const data = getTicker(ticker);
  if (!data) notFound();

  const story = getStockStory(data.ticker);
  const bundle = getResearchBundle(data.ticker);
  const news = getNewsfeed();
  const related = getResearchBundles();

  if (story && bundle) {
    const jsonLd = [
      articleJsonLd({
        ticker: data.ticker,
        name: data.name,
        title: story.title,
        description: story.dek,
        date: data.updatedAt.slice(0, 10),
      }),
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Discover", path: "/discover" },
        { name: data.sector, path: "/discover/all-stocks" },
        { name: data.ticker, path: `/stocks/${data.ticker}` },
      ]),
    ];

    return (
      <>
        <JsonLd data={jsonLd} />
        <ResearchArticle
          bundle={bundle}
          story={story}
          news={news}
          related={related}
        />
      </>
    );
  }

  const researchInSector = related.filter((item) => {
    if (!item.data.sector) return false;
    return item.data.sector === data.sector;
  });

  const jsonLd = [
    profilePageJsonLd({
      ticker: data.ticker,
      name: data.name,
      description: data.description,
      date: data.updatedAt.slice(0, 10),
    }),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Discover", path: "/discover" },
      { name: "All stocks", path: "/discover/all-stocks" },
      { name: data.ticker, path: `/stocks/${data.ticker}` },
    ]),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <SupportingProfile
        data={data}
        prices={getPrices(data.ticker, "1Y")}
        researchInSector={
          researchInSector.length
            ? researchInSector
            : related.filter((item) =>
                RESEARCH_TICKERS.includes(
                  item.data.ticker as (typeof RESEARCH_TICKERS)[number],
                ),
              )
        }
      />
    </>
  );
}
