import type { NextConfig } from "next";
import { withSerwist } from "@serwist/turbopack";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [32, 48, 64, 96, 128, 256, 384],
  },
  outputFileTracingExcludes: {
    "/*": ["./data/raw/**", "./Refinitiv/**", "./test-results/**"],
  },
  outputFileTracingIncludes: {
    "/api/health/data": [
      "./data/story-freshness.json",
      "./data/consensus/_meta.json",
    ],
    "/stocks/[ticker]": ["./public/data/articles/runtime.json.gz"],
    "/stocks/[ticker]/scores": ["./public/data/v2/companies/**"],
    "/discover": ["./public/data/v2/companies/**"],
    "/framework/scores": [
      "./public/data/v2/companies/**",
      "./public/data/v2/scores.json",
    ],
    "/screener": [
      "./public/data/screener.json",
      "./public/data/screener-factors.json",
    ],
    "/portfolio": ["./public/data/portfolios/index.json"],
    "/portfolio/[slug]": ["./public/data/portfolios/**"],
    "/portfolio/[slug]/report": ["./public/data/portfolios/**"],
  },
  async redirects() {
    return [
      { source: "/india/:path*", destination: "/discover", permanent: true },
      { source: "/gcc/:path*", destination: "/discover", permanent: true },
      {
        source: "/tools/growth-ranker/:path*",
        destination: "/screener",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      {
        source: "/serwist/sw.js",
        headers: [
          {
            key: "Content-Type",
            value: "application/javascript; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "no-cache, no-store, must-revalidate",
          },
        ],
      },
      {
        source: "/sw.js",
        headers: [
          {
            key: "Content-Type",
            value: "application/javascript; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "no-cache, no-store, must-revalidate",
          },
        ],
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default withSerwist(nextConfig);
