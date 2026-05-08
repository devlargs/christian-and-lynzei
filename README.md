# Christian & Lyn Zei's Wedding

Wedding invitation site for Christian & Lyn Zei's — June 20, 2026 at San Roque Chapel, Olongapo City.

Built with Next.js (App Router) and Bootstrap.

## Getting Started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the dev server with HMR
- `npm run build` — production build
- `npm start` — run the production build
- `npm run lint` — run ESLint

## Project Structure

```
app/                    App Router pages and layout
  layout.tsx            Root layout — metadata, fonts, global head tags
  page.tsx              Single-page invitation (hero, couple, party, gallery, RSVP, gifts)
  RsvpForm.tsx          RSVP form (client component)
  ScrollToTop.tsx       Scroll-to-top button (client component)
  FadeInOnScroll.tsx    IntersectionObserver-based fade-in (client component)
constants/
  cloudfront.ts         CloudFront base URL + photo gallery filename list
public/
  css/style.min.css     Compiled Bootstrap + theme styles
  js/script.min.js      Vendor scripts (carousel, lightbox, bg-holder, etc.)
  img/                  Static UI assets (logos, shapes, favicons)
  images/               Photos served locally (legacy — most photos now on CloudFront)
next.config.ts          Image domains, CSP + security headers, source maps
```

## Environment Variables

| Variable                 | Purpose                                                                      |
| ------------------------ | ---------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`   | Absolute production URL — used for `metadataBase`, OG tags, canonical links. |
| `NEXT_PUBLIC_VERCEL_URL` | Auto-injected on Vercel; used as a fallback for `metadataBase`.              |

Set `NEXT_PUBLIC_SITE_URL` to your production domain (e.g. `https://christianlynzeiweds.com`) before deploying so social previews and OG images resolve to absolute URLs.

## Images

Photos are hosted on CloudFront at the base URL defined in `constants/cloudfront.ts`. To add new gallery photos, append the filename to `PHOTO_GALLERY_IMAGES` in that file. The CloudFront domain is allowlisted in `next.config.ts` under `images.domains`, so all `<Image>` components route through the Next.js image optimizer (WebP/AVIF, long-cached).

## Performance & Accessibility Notes

- Google Fonts are preconnected and loaded directly in `<head>` (not via `@import`) to avoid render-blocking chained requests.
- The hero image uses `priority` on `next/image` for optimal LCP.
- The page exposes a `<main id="main">` landmark and the gallery anchors carry `aria-label` so screen readers announce them with discernible names.
- Strict-ish CSP plus `X-Content-Type-Options`, `Referrer-Policy`, and `Permissions-Policy` are set in `next.config.ts`.

## Deploy

Deploy on [Vercel](https://vercel.com/new) — zero config. Make sure to set `NEXT_PUBLIC_SITE_URL` in the project's environment variables.
