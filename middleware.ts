import type { NextRequest } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";

export async function middleware(request: NextRequest) {
  return updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Refresh sessions on application routes, skipping static assets, image
     * optimisation, the service worker and pre-built data files.
     */
    "/((?!_next/static|_next/image|favicon.ico|manifest.webmanifest|robots.txt|sitemap.xml|rss.xml|serwist|sw.js|data/|icons/|logos/|fonts/).*)",
  ],
};
