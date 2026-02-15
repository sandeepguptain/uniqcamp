/**
 * SEO / site config. Update SITE_URL when you deploy (e.g. via VITE_SITE_URL in .env).
 * Used for share URLs, sitemap, and any client-side canonical if needed.
 */
export const SITE_URL = import.meta.env.VITE_SITE_URL ?? "https://uniqcamp.com";

export const SEO = {
  title: "UniqCamp – School Dismissal & Student Safety Platform",
  description:
    "UniqCamp streamlines student dismissal with smart technology. Efficiency, safety, and transparency for schools, parents, teachers, and drivers.",
  keywords:
    "school dismissal, student safety, pickup management, early dismissal, school app, parent pickup, UniqCamp, student dismissal software, school safety platform",
  ogImage: "/logo.png",
} as const;
