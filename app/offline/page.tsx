import type { Metadata } from "next";
import Link from "next/link";
import { CloudOff, Compass, Home, Star } from "lucide-react";
import { InstallPrompt } from "@/components/install-prompt";
import { Disclaimer } from "@/components/ui/disclaimer";

export const metadata: Metadata = {
  title: "Offline",
  description:
    "Stockmonk is offline. Previously visited pages and your locally stored watchlist may still be available.",
  robots: { index: false, follow: false },
};

export default function OfflinePage() {
  return (
    <div className="container-page max-w-[720px] py-14">
      <div className="rounded-2xl border border-line bg-surface p-6 text-center shadow-card sm:p-10">
        <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-brand-soft text-brand">
          <CloudOff aria-hidden="true" className="size-6" />
        </span>
        <p className="kicker mt-5">Offline</p>
        <h1 className="display mt-2 text-[32px] leading-tight tracking-[-0.025em] text-ink sm:text-[40px]">
          You are offline
        </h1>
        <p className="mx-auto mt-2 max-w-lg text-[13px] leading-relaxed text-muted">
          Stockmonk could not reach the network. Pages you have already visited
          may still load from the service-worker cache. Your watchlist is stored
          locally and is unaffected.
        </p>

        <div className="mt-6 grid gap-2 sm:grid-cols-3">
          {[
            { href: "/discover", label: "Discover", icon: Compass },
            { href: "/watchlist", label: "Watchlist", icon: Star },
            { href: "/", label: "Home", icon: Home },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-center gap-2 rounded-xl border border-line bg-paper px-3 py-3 text-[12px] font-semibold text-ink hover:bg-paper-deep"
              >
                <Icon aria-hidden="true" className="size-4 text-brand" />
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="mt-6 border-t border-line pt-4">
          <p className="text-[11px] text-muted">
            Tip: install Stockmonk to keep the app shell available when the
            connection drops.
          </p>
          <div className="mt-2 flex justify-center">
            <InstallPrompt />
          </div>
        </div>
      </div>

      <Disclaimer variant="boxed" className="mt-6" />
    </div>
  );
}
