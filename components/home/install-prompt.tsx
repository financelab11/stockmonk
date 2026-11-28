"use client";

import { useEffect, useState } from "react";
import { Download, X } from "lucide-react";
import { trackEvent } from "@/lib/events";

type InstallEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

const DISMISSED_KEY = "stockmonk:install-dismissed:v1";

export function InstallPrompt() {
  const [promptEvent, setPromptEvent] = useState<InstallEvent | null>(null);
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    try {
      setDismissed(window.localStorage.getItem(DISMISSED_KEY) === "1");
    } catch {
      setDismissed(false);
    }

    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as Navigator & { standalone?: boolean }).standalone;
    if (standalone) return;

    const onPrompt = (event: Event) => {
      event.preventDefault();
      setPromptEvent(event as InstallEvent);
      trackEvent("pwa_install_prompt_shown", { surface: "homepage" });
    };
    const onInstalled = () => {
      setPromptEvent(null);
      trackEvent("pwa_installed", { surface: "homepage" });
    };

    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  if (!promptEvent || dismissed) return null;

  return (
    <div className="mt-4 flex items-start gap-2.5 rounded-lg border border-hairline bg-warm px-3 py-2.5">
      <Download
        aria-hidden="true"
        className="mt-0.5 size-4 shrink-0 text-accent"
      />
      <div className="min-w-0 flex-1">
        <p className="text-[12px] font-semibold text-graphite">
          Keep Stockmonk one tap away
        </p>
        <p className="mt-0.5 text-[11px] leading-relaxed text-steel">
          Install the app for offline access to pages you have already visited.
        </p>
        <button
          type="button"
          onClick={async () => {
            await promptEvent.prompt();
            const choice = await promptEvent.userChoice;
            if (choice.outcome === "accepted") trackEvent("pwa_installed");
            setPromptEvent(null);
          }}
          className="mt-2 text-[11px] font-semibold text-accent hover:underline"
        >
          Install app
        </button>
      </div>
      <button
        type="button"
        aria-label="Dismiss install prompt"
        onClick={() => {
          setDismissed(true);
          try {
            window.localStorage.setItem(DISMISSED_KEY, "1");
          } catch {
            // Ignore storage failures.
          }
        }}
        className="rounded p-0.5 text-steel hover:text-graphite"
      >
        <X aria-hidden="true" className="size-3.5" />
      </button>
    </div>
  );
}
