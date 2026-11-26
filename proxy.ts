import { NextResponse, type NextRequest } from "next/server";
import { isScoreTicker, RESEARCH_TICKERS } from "@/config/universe";

/**
 * The stock report route is intentionally dynamic so 500 pages share one
 * function. This guard keeps unknown tickers as real 404s instead of a 200
 * response that only contains the not-found UI.
 */
export function proxy(request: NextRequest) {
  const match = /^\/stocks\/([^/]+)\/?$/.exec(request.nextUrl.pathname);
  if (!match) return NextResponse.next();

  let ticker = match[1];
  try {
    ticker = decodeURIComponent(ticker);
  } catch {
    // keep the raw value
  }
  const normalized = ticker.toUpperCase();
  if (RESEARCH_TICKERS.includes(normalized)) {
    return NextResponse.next();
  }
  if (isScoreTicker(normalized)) {
    return NextResponse.redirect(
      new URL(`/stocks/${encodeURIComponent(normalized)}/scores`, request.url),
    );
  }

  return new NextResponse(
    `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Company not found Â· Stockmonk</title></head><body style="font-family:Georgia,serif;max-width:40rem;margin:4rem auto;padding:0 1.5rem;color:#12122b"><p style="font-size:.75rem;letter-spacing:.08em;text-transform:none;color:#6b6b83">Stockmonk</p><h1 style="font-size:2rem;line-height:1.15">This company is not in the library</h1><p style="line-height:1.6;color:#3f3f5a">The ticker you requested is not in the covered universe. Try the Discover page, the screener or search for another company.</p><p><a href="/discover" style="color:#e4572e">Browse the coverage universe</a></p></body></html>`,
    { status: 404, headers: { "content-type": "text/html; charset=utf-8" } },
  );
}

export const config = {
  matcher: ["/stocks/:path*"],
};
