"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackEvent, type AnalyticsEvent } from "@/lib/events";

export function TrackedLink({
  href,
  event,
  eventProps,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  event: AnalyticsEvent;
  eventProps?: Record<string, string | number | boolean | null | undefined>;
  children: ReactNode;
}) {
  return (
    <a
      {...props}
      href={href}
      onClick={(click) => {
        trackEvent(event, { href, ...eventProps });
        props.onClick?.(click);
      }}
    >
      {children}
    </a>
  );
}
