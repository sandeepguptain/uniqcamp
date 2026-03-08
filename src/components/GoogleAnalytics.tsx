import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  initAnalytics,
  sendPageView,
  trackScrollDepth,
  isAnalyticsEnabled,
} from "../analytics";

const SCROLL_DEPTHS = [25, 50, 75, 90];

/**
 * Loads GA4 script, tracks page views, and scroll depth.
 * Add once inside your Router (e.g. in App or Layout).
 */
export default function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    if (!isAnalyticsEnabled()) return;
    initAnalytics();
  }, []);

  useEffect(() => {
    if (!isAnalyticsEnabled()) return;
    const path = location.pathname + location.hash;
    sendPageView(path || "/");
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!isAnalyticsEnabled()) return;
    const sent = new Set<number>();
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const percent = Math.round((scrollTop / docHeight) * 100);
      SCROLL_DEPTHS.forEach((depth) => {
        if (percent >= depth && !sent.has(depth)) {
          sent.add(depth);
          trackScrollDepth(depth);
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  return null;
}
