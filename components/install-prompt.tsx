"use client";

import { Download, Share } from "lucide-react";
import { useEffect, useState } from "react";

type InstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

export function InstallPrompt({ compact = false }: { compact?: boolean }) {
  const [deferred, setDeferred] = useState<InstallPromptEvent | null>(null);
  const [installed, setInstalled] = useState(false);
  const [ios, setIos] = useState(false);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    setInstalled(window.matchMedia("(display-mode: standalone)").matches);
    setIos(/iPad|iPhone|iPod/.test(navigator.userAgent));

    const onPrompt = (event: Event) => {
      event.preventDefault();
      setDeferred(event as InstallPromptEvent);
    };
    const onInstalled = () => {
      setInstalled(true);
      setDeferred(null);
    };
    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  if (installed) return null;

  if (deferred) {
    return (
      <button
        type="button"
        className={`btn ${compact ? "btn-ghost" : "btn-brand"} text-[12px]`}
        onClick={async () => {
          await deferred.prompt();
          await deferred.userChoice;
          setDeferred(null);
        }}
      >
        <Download aria-hidden="true" className="size-4" />
        Install app
      </button>
    );
  }

  if (ios) {
    return (
      <div className={compact ? "text-[12px] text-muted" : "text-[12px] text-white/70"}>
        <button
          type="button"
          onClick={() => setShowHint((current) => !current)}
          className="inline-flex items-center gap-1.5 underline decoration-current/30 underline-offset-2"
        >
          <Share aria-hidden="true" className="size-3.5" />
          Add to Home Screen
        </button>
        {showHint && (
          <p className="mt-2 max-w-xs leading-relaxed">
            Tap the share icon in Safari, then choose “Add to Home Screen”.
          </p>
        )}
      </div>
    );
  }

  return null;
}
