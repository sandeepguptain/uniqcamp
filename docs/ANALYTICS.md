# Analytics (Google Analytics 4)

The site uses **Google Analytics 4 (GA4)** for page views, scroll depth, clicks, form submissions, and outbound link tracking.

## Setup

1. **Get your Measurement ID**  
   In [Google Analytics](https://analytics.google.com/): Admin → Data Streams → your Web stream → copy the **Measurement ID** (e.g. `G-XXXXXXXXXX`).

2. **Configure the app**  
   - **Local / dev:** In the project root, copy `.env.example` to `.env` and set:
     ```bash
     VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
     ```
   - **Production (e.g. Vercel):** In your hosting dashboard (e.g. Vercel → Project → Settings → Environment Variables), add:
     - `VITE_GA_MEASUREMENT_ID` = `G-XXXXXXXXXX`  
     Redeploy after adding the variable.

3. **Verify**  
   With the ID set, open the site and check GA4 Realtime (or DebugView if you use the GA debugger) for `page_view` and other events.

## What is tracked

### Automatic (no code changes)

| Type | Description |
|------|-------------|
| **Page views** | On initial load and on every route change (path + hash). |
| **Scroll depth** | 25%, 50%, 75%, and 90% of the page (per page; resets on navigation). |

### Custom events (wired in the app)

| Event | Trigger | Parameters |
|-------|--------|------------|
| **click** | Hero “Request a Demo” | `link_name`: `hero_request_demo` |
| **click** | Hero “Learn More” | `link_name`: `hero_learn_more` |
| **click** | CTA banner “Request a Demo” | `link_name`: `cta_request_demo` |
| **click** | CTA banner “Contact us” | `link_name`: `cta_contact_us` |
| **click** | Home “Get in touch” – “Contact us” | `link_name`: `home_contact_us` |
| **click** | Home “Get in touch” – “See Solutions” | `link_name`: `home_see_solutions` |
| **click** | Header nav (sections) | `link_name`: `nav_hero`, `nav_solutions`, `nav_why_choose`, etc. |
| **click** | Header “Contact” | `link_name`: `nav_contact` |
| **click** | Header “School Login” / “Parent Login” | `link_name`: label, `outbound_url`: URL |
| **form_submit_success** | Contact/Demo form submitted successfully | `form_name`: `demo_request` |
| **form_submit_error** | Contact/Demo form submit failed | `form_name`: `demo_request` |
| **scroll** | User reaches 25 / 50 / 75 / 90% scroll | `scroll_depth`: 25, 50, 75, or 90 |

## Implementation

- **`src/analytics.ts`** – GA4 init, `sendPageView`, and helpers: `trackEvent`, `trackClick`, `trackFormSubmit`, `trackOutboundLink`, `trackScrollDepth`, `isAnalyticsEnabled`.
- **`src/components/GoogleAnalytics.tsx`** – Renders inside the Router; calls `initAnalytics()` on mount, sends a page view on route change, and attaches scroll-depth tracking (25/50/75/90%).

If `VITE_GA_MEASUREMENT_ID` is not set, all analytics calls are no-ops (no errors, no tracking).

## Adding new tracking

- **CTA or in-app link:** use `trackClick(linkName, optionalDestinationUrl)` from `src/analytics.ts`.
- **Outbound link:** use `trackOutboundLink(url, linkName)`.
- **Form submit:** use `trackFormSubmit(formName, success)` (e.g. `demo_request`, `true`/`false`).
- **Custom event:** use `trackEvent(eventName, params)`.

Example:

```ts
import { trackClick } from "../analytics";

<button onClick={() => trackClick("my_cta", "/contact")}>Contact</button>
```
