import { SITE } from "./constants";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: `${SITE.url}/brand/logo-mark.png`,
    description: SITE.description,
    sameAs: [] as string[],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/discover?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}

export function articleJsonLd({
  ticker,
  name,
  title,
  description,
  date,
  path = `/stocks/${ticker}`,
  language = "en-US",
}: {
  ticker: string;
  name: string;
  title: string;
  description: string;
  date: string;
  path?: string;
  language?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    inLanguage: language,
    isAccessibleForFree: true,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE.url}${path}`,
    },
    author: {
      "@type": "Organization",
      name: "Stockmonk Research Desk",
      url: `${SITE.url}/editorial-guidelines`,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/brand/logo-mark.png`,
      },
    },
    about: {
      "@type": "Corporation",
      name,
      tickerSymbol: ticker,
      url: `${SITE.url}${path}`,
    },
    image: [`${SITE.url}/og.png`],
  };
}

export function profilePageJsonLd({
  ticker,
  name,
  description,
  date,
  path = `/stocks/${ticker}`,
}: {
  ticker: string;
  name: string;
  description: string;
  date: string;
  path?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateModified: date,
    mainEntity: {
      "@type": "Corporation",
      name,
      tickerSymbol: ticker,
      description,
      url: `${SITE.url}${path}`,
    },
    isPartOf: {
      "@type": "WebSite",
      name: SITE.name,
      url: SITE.url,
    },
  };
}
