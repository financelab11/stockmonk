import localFont from "next/font/local";

export const inter = localFont({
  src: "./fonts/Inter-Variable.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
  fallback: ["system-ui", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
});

export const newsreader = localFont({
  src: [
    {
      path: "./fonts/Newsreader-Variable.woff2",
      weight: "200 800",
      style: "normal",
    },
    {
      path: "./fonts/Newsreader-Italic-Variable.woff2",
      weight: "200 800",
      style: "italic",
    },
  ],
  variable: "--font-newsreader",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});
