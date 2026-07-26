# Cadence Photography

Next.js site for Cadence Photography. Built with Next.js 16 (App Router),
Tailwind CSS v4, and TypeScript. Sanity CMS schema is included but not yet
wired up — see "Connecting Sanity" below.

## Pages

- `/` — Home
- `/portfolio` — Full gallery (contact-sheet style, placeholder frames)
- `/about` — Bio and studio values
- `/pricing` — Booking packages
- `/contact` — Contact form (not wired to a backend yet)
- `/blog` — Journal / blog listing (placeholder posts)

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Design system

Colors, fonts, and the "cadence reveal" scroll-in animation are defined in
`app/globals.css` and `app/layout.tsx`. Palette:

- Charcoal `#1A1917` — text, dark sections
- Paper `#F3EFE7` — background
- Brass `#A9824C` — primary accent
- Sage `#6B7A6E` / Rust `#9C5B45` — secondary accents

Fonts: Fraunces (display), Inter (body), JetBrains Mono (captions/labels).

**Note:** on first build, Next.js needs to download these fonts from Google
Fonts. If you're building in a sandboxed environment with no internet
access, this step will fail — it works normally on a real machine or on
Vercel.

## Replacing placeholder content

- **Photos:** `components/PhotoFrame.tsx` currently renders styled gradient
  placeholders instead of real images. Once real photos exist, swap this
  for a `next/image` component pointing at Sanity's CDN (see below).
- **Copy:** bio text on `/about`, prices on `/pricing`, and posts on `/blog`
  are all placeholder — search each page file for the obvious placeholder
  paragraphs and update them.
- **Contact form:** `/contact` renders a form with no backend yet. Easiest
  options: Formspree (formspree.io, drop-in, no code) or a Sanity mutation /
  email API route if you want submissions in the CMS.

## Connecting Sanity (for self-editing)

Schema definitions already exist in `sanity/schemaTypes/` for portfolio
photos, journal posts, pricing packages, and site settings. To activate:

1. Create a free account at sanity.io.
2. From this project's root, run:
   ```bash
   npx sanity init
   ```
   Choose "Create new project," pick a dataset name (`production` is fine),
   and when it asks for a schema, point it at `sanity/schemaTypes/index.ts`.
3. Copy `.env.example` to `.env.local` and fill in the project ID/dataset it
   gives you.
4. Run `npx sanity dev` to open the Studio (a visual dashboard) where photos,
   posts, and pricing can be added without touching code.
5. Update the page components to fetch from Sanity instead of the hardcoded
   placeholder arrays (using `@sanity/client` or `next-sanity`).

## Deploying

Easiest path: push this to a GitHub repo, then import it at vercel.com/new
— it will detect Next.js automatically. Add the Sanity env vars from
`.env.local` in Vercel's project settings before deploying.
