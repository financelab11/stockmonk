import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortfolioHeader } from "@/components/portfolios/portfolio-header";
import { PortfolioTabs } from "@/components/portfolios/portfolio-tabs";
import { PortfolioOverview } from "@/components/portfolios/portfolio-overview";
import { PortfolioConstituents } from "@/components/portfolios/portfolio-constituents";
import { Disclaimer } from "@/components/ui/disclaimer";
import { JsonLd } from "@/components/seo/json-ld";
import { getPortfolio, getPortfolioSlugs } from "@/lib/portfolios/data";
import { breadcrumbJsonLd } from "@/lib/seo";

export const revalidate = 3600;
export const dynamicParams = false;

export function generateStaticParams() {
  return getPortfolioSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const portfolio = getPortfolio(slug);
  if (!portfolio) return { title: "Portfolio not found" };
  return {
    title: `${portfolio.name} - US equity model portfolio`,
    description: portfolio.description,
    alternates: { canonical: `/portfolio/${portfolio.slug}` },
    openGraph: {
      title: `${portfolio.name} - Stockmonk Portfolio`,
      description: portfolio.description,
      url: `/portfolio/${portfolio.slug}`,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: portfolio.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${portfolio.name} - Stockmonk Portfolio`,
      description: portfolio.description,
    },
  };
}

export default async function PortfolioDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { slug } = await params;
  const query = await searchParams;
  const portfolio = getPortfolio(slug);
  if (!portfolio) notFound();
  const tab = query.tab === "constituents" ? "constituents" : "overview";

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Portfolio", path: "/portfolio" },
            {
              name: portfolio.name,
              path: `/portfolio/${portfolio.slug}`,
            },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: portfolio.name,
            description: portfolio.description,
            url: `https://stockmonk.app/portfolio/${portfolio.slug}`,
            about: {
              "@type": "Thing",
              name: `${portfolio.primaryCategory} US equity model portfolio`,
            },
            isPartOf: {
              "@type": "CollectionPage",
              name: "Stockmonk Portfolio",
              url: "https://stockmonk.app/portfolio",
            },
          },
        ]}
      />

      <PortfolioHeader portfolio={portfolio} />

      <div className="sticky top-[92px] z-30 border-b border-line bg-surface">
        <div className="container-page">
          <PortfolioTabs
            slug={portfolio.slug}
            active={tab}
            holdingsCount={portfolio.holdingsCount}
          />
        </div>
      </div>

      <div className="container-page py-4 sm:py-5">
        {tab === "constituents" ? (
          <PortfolioConstituents
            constituents={portfolio.constituents}
            allocations={portfolio.allocations}
          />
        ) : (
          <PortfolioOverview portfolio={portfolio} />
        )}

        <div className="mt-4">
          <Disclaimer />
        </div>
      </div>
    </>
  );
}
