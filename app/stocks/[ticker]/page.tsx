import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResearchArticle } from "@/components/article/research-article";
import { SupportingProfile } from "@/components/article/supporting-profile";
import { JsonLd } from "@/components/seo/json-ld";
import { getStockStory } from "@/content/stocks";
import { generateStockStory } from "@/lib/generated-story";
import {
  ALL_TICKERS,
  BENCHMARK_TICKER,
  RESEARCH_TICKERS,
} from "@/config/universe";
import {
  getPrices,
  getResearchBundle,
  getResearchCompanies,
  getTicker,
} from "@/lib/data";
import { articleJsonLd, breadcrumbJsonLd, profilePageJsonLd } from "@/lib/seo";
import { resolveStory } from "@/lib/story-tokens";

export const revalidate = false;
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

  const bundle = getResearchBundle(data.ticker);
  const story =
    getStockStory(data.ticker) ?? (bundle ? generateStockStory(bundle) : null);
  const title = story
    ? story.title
    : `${data.name} (${data.ticker}) — company profile`;
  const description = story
    ? resolveStory(story, {
        data,
        consensus: bundle?.consensus ?? null,
        segments: bundle?.segments ?? null,
      }).dek
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
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: `${data.name} research`,
        },
      ],
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

  const bundle = getResearchBundle(data.ticker);
  const story =
    getStockStory(data.ticker) ?? (bundle ? generateStockStory(bundle) : null);
  // Load only a handful of neighbouring names for the related cards instead of
  // every research bundle on each of the 500 statically generated pages.
  const researchCompanies = getResearchCompanies();
  const index = researchCompanies.findIndex(
    (company) => company.ticker === data.ticker,
  );
  const related = [1, 2, 3]
    .map((offset) =>
      index >= 0
        ? researchCompanies[(index + offset) % researchCompanies.length]
        : null,
    )
    .filter(
      (company): company is NonNullable<typeof company> => company != null,
    )
    .map((company) => getResearchBundle(company.ticker))
    .filter((bundle): bundle is NonNullable<typeof bundle> => bundle != null);

  if (story && bundle) {
    const resolved = resolveStory(story, {
      data,
      consensus: bundle.consensus,
      segments: bundle.segments,
    });
    const jsonLd = [
      articleJsonLd({
        ticker: data.ticker,
        name: data.name,
        title: resolved.title,
        description: resolved.dek,
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
        <ResearchArticle bundle={bundle} story={story} related={related} />
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
