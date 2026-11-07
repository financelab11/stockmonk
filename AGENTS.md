<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Stockmonk conventions

- **Product rule:** never publish buy/sell/hold ratings or Stockmonk price
  targets. Consensus is third-party, attributed and dated. Run
  `pnpm validate:content` after editing stories.
- **Rendering:** React Server Components are the default. Client components are
  limited to stateful islands (watchlist button, charts, share buttons,
  sortable peer table, Fuse search input). Static content uses plain `<a>` tags
  to avoid hydrating a `Link` for every card.
- **Data access:** server components read JSON through `lib/data.ts`
  (`server-only`). Ingestion scripts are the only code allowed to read
  `SIMFIN_API_KEY`; never use `NEXT_PUBLIC_*` for secrets.
- **Types:** every processed file is validated by a Zod schema in
  `lib/schemas.ts`. Add a schema before adding a new data field.
- **Styling:** use the tokens and component classes in `app/globals.css`.
  Avoid ad-hoc hex colours outside the chart theme (`components/charts/chart-theme.ts`).
- **Content:** stories live in `content/stocks/{TICKER}.ts` and follow
  `StockStory`. Quantitative claims must trace to a processed field or a cited
  filing. Use `SourceNote` in every article section.
- **Performance:** keep charts lazy, reserve dimensions, use self-hosted fonts,
  and avoid client components above the fold. The LHCI gate is the source of
  truth (`lighthouserc.json`).
- **Verification:** `pnpm typecheck && pnpm lint && pnpm test && pnpm build &&
  pnpm e2e && pnpm lhci` before shipping. Generated artifacts (`data/`,
  `.next/`, `.lighthouseci/`, screenshots) are not edited by hand.

