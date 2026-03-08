/**
 * Google Analytics (GA4). Set VITE_GA_MEASUREMENT_ID in .env (e.g. G-XXXXXXXXXX).
 * Covers: page views, custom events, clicks, form submissions, outbound links.
 */

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

function getOrCreateDataLayer() {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
}

function getOrCreateGtag() {
  if (typeof window === "undefined") return;
  window.gtag = window.gtag ?? function () {
    window.dataLayer.push(arguments);
  };
}

let initialized = false;

export function initAnalytics() {
  if (!MEASUREMENT_ID || typeof document === "undefined") return;
  if (initialized) return;
  initialized = true;

  getOrCreateDataLayer();
  getOrCreateGtag();
  window.gtag("js", new Date());
  window.gtag("config", MEASUREMENT_ID, {
    send_page_view: false,
    allow_google_signals: true,
    allow_ad_personalization_signals: true,
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

export function sendPageView(path: string, title?: string) {
  if (!MEASUREMENT_ID || typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_title: title ?? document.title,
  });
}

/** Send any custom event to GA4 */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean | undefined>
) {
  if (!MEASUREMENT_ID || typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", eventName, params);
}

/** Track button/link clicks (CTAs, nav, etc.) */
export function trackClick(linkName: string, destination?: string) {
  trackEvent("click", {
    link_name: linkName,
    outbound_url: destination ?? undefined,
  });
}

/** Track form interactions (submit, start) */
export function trackFormSubmit(formName: string, success: boolean) {
  trackEvent(success ? "form_submit_success" : "form_submit_error", {
    form_name: formName,
  });
}

/** Track outbound / external link clicks */
export function trackOutboundLink(url: string, linkName?: string) {
  trackEvent("click", {
    link_name: linkName ?? "outbound",
    outbound_url: url,
  });
}

/** Track scroll depth (e.g. 25, 50, 75, 90 percent) */
export function trackScrollDepth(percent: number) {
  trackEvent("scroll", { scroll_depth: percent });
}

export function isAnalyticsEnabled() {
  return Boolean(MEASUREMENT_ID);
}
