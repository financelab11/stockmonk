"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCw } from "lucide-react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container-page max-w-[720px] py-16 text-center">
      <p className="kicker">Something went wrong</p>
      <h1 className="display mt-2 text-[34px] leading-tight tracking-[-0.03em] text-ink sm:text-[44px]">
        The research desk hit an error.
      </h1>
      <p className="mx-auto mt-2 max-w-md text-[13px] leading-relaxed text-muted">
        The page could not be rendered. Try again, or go back to the coverage
        library. If the problem persists, the data may be temporarily
        unavailable.
      </p>
      <div className="mt-5 flex flex-wrap justify-center gap-2">
        <button type="button" onClick={reset} className="btn btn-primary">
          <RefreshCw aria-hidden="true" className="size-4" />
          Try again
        </button>
        <Link href="/discover" className="btn btn-ghost">
          Browse companies
        </Link>
      </div>
    </div>
  );
}
