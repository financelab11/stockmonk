import { createSerwistRoute } from "@serwist/turbopack";

export const { dynamic, dynamicParams, revalidate, generateStaticParams, GET } =
  createSerwistRoute({
    additionalPrecacheEntries: [
      { url: "/offline", revision: process.env.VERCEL_GIT_COMMIT_SHA ?? "v1" },
    ],
    swSrc: "app/sw.ts",
    useNativeEsbuild: true,
    globIgnores: [
      "**/screenshots/**",
      "**/stockmonk-logo.png",
      "**/og.png",
      "**/prices/**",
      "**/*.map",
    ],
    maximumFileSizeToCacheInBytes: 3 * 1024 * 1024,
  });
