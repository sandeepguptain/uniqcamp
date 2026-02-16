/**
 * SEO / site config. Update SITE_URL when you deploy (e.g. via VITE_SITE_URL in .env).
 * Used for share URLs, sitemap, and any client-side canonical if needed.
 */
export const SITE_URL = import.meta.env.VITE_SITE_URL ?? "https://uniqcamp.com";

export const SEO = {
  title: "UniqCamp – Student Dispersal Reimagined. Safer. Smarter. Faster.",
  description:
    "UniqCamp reimagines student dispersal from school. Safer, smarter, faster—one platform for schools, parents, and staff.",
  keywords:
    "student dispersal, school dispersal, dispersal reimagined, student safety, pickup management, school app, parent pickup, UniqCamp, dispersal software, school safety platform",
  ogImage: "/logo.png",
} as const;
