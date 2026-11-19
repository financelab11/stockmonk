import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // These patterns intentionally synchronise React state with browser
      // APIs (localStorage, matchMedia, IntersectionObserver) after mount.
      "react-hooks/set-state-in-effect": "off",
      "@next/next/no-img-element": "off",
      // Plain anchors are intentional on static content pages: they avoid
      // hydrating a Link component for every card in a large grid.
      "@next/next/no-html-link-for-pages": "off",
    },
  },
  {
    files: ["**/*.cjs"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    ".vercel/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
