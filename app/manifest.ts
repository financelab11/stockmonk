import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Stockmonk",
    short_name: "Stockmonk",
    description:
      "Independent, data-first equity research for US-listed companies. No ratings, no price targets.",
    id: "/",
    start_url: "/?source=pwa",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#ffffff",
    theme_color: "#1b1464",
    lang: "en-US",
    dir: "ltr",
    categories: ["finance", "news", "education"],
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcuts: [
      {
        name: "Newsfeed",
        short_name: "Newsfeed",
        description: "Data-change updates across the coverage universe",
        url: "/newsfeed",
        icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }],
      },
      {
        name: "Discover",
        short_name: "Discover",
        description: "Featured research and data-quality screens",
        url: "/discover",
        icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }],
      },
      {
        name: "Watchlist",
        short_name: "Watchlist",
        description: "Your local-first watchlist",
        url: "/watchlist",
        icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }],
      },
    ],
  };
}
