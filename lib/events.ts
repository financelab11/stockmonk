"use client";

export type AnalyticsEvent =
  | "homepage_view"
  | "hero_primary_cta_clicked"
  | "hero_secondary_cta_clicked"
  | "intelligence_tab_changed"
  | "company_card_clicked"
  | "theme_card_clicked"
  | "portfolio_category_changed"
  | "portfolio_card_clicked"
  | "research_report_opened"
  | "quick_screen_selected"
  | "screener_opened"
  | "watchlist_company_added"
  | "watchlist_company_removed"
  | "pwa_install_prompt_shown"
  | "pwa_installed";

type EventProps = Record<string, string | number | boolean | null | undefined>;

type AnalyticsWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>;
};

let lastPageView = "";

/**
 * Lightweight, provider-agnostic event bridge. It emits a GTM-style
 * `dataLayer` event and a DOM CustomEvent. When an analytics endpoint is
 * configured it also sends a keepalive beacon. No cookies or personal data are
 * collected here.
 */
export function trackEvent(event: AnalyticsEvent, props: EventProps = {}) {
  if (typeof window === "undefined") return;

  const payload = {
    event,
    ...props,
    path: window.location.pathname,
    ts: Date.now(),
  };

  const analyticsWindow = window as AnalyticsWindow;
  analyticsWindow.dataLayer ??= [];
  analyticsWindow.dataLayer.push(payload);
  window.dispatchEvent(
    new CustomEvent("stockmonk:analytics", { detail: payload }),
  );

  const endpoint = process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT;
  if (endpoint && navigator.sendBeacon) {
    try {
      navigator.sendBeacon(endpoint, JSON.stringify(payload));
    } catch {
      // Analytics must never interfere with navigation.
    }
  }
}

/** Fire once per pathname, even across React strict-mode remounts. */
export function trackPageView(event: AnalyticsEvent, props: EventProps = {}) {
  if (typeof window === "undefined") return;
  const key = `${event}:${window.location.pathname}`;
  if (lastPageView === key) return;
  lastPageView = key;
  trackEvent(event, props);
}
