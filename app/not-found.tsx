import Link from "next/link";
import { Compass, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container-page max-w-[720px] py-16 text-center">
      <p className="kicker">404</p>
      <h1 className="display mt-2 text-[38px] leading-tight tracking-[-0.03em] text-ink sm:text-[48px]">
        That page is not in the library.
      </h1>
      <p className="mx-auto mt-2 max-w-md text-[13px] leading-relaxed text-muted">
        The ticker may not be covered, or the link may be outdated. Try the
        Discover page or search the 69-company universe.
      </p>
      <div className="mt-5 flex flex-wrap justify-center gap-2">
        <Link href="/" className="btn btn-primary">
          <Home aria-hidden="true" className="size-4" />
          Home
        </Link>
        <Link href="/discover" className="btn btn-ghost">
          <Compass aria-hidden="true" className="size-4" />
          Discover
        </Link>
      </div>
    </div>
  );
}
