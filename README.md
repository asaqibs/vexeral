# Vexeral

Shariah-compliant growth systems and high-performance engineering website, built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `app/` - routes: home (single-page with sections), about, features, faq, industries, integrations, resources/logistics-guide
- `components/` - home sections (hero, services, pricing, why-us, contact, footer) and shared UI (button, card, sheet, accordion, tabs)
- `components/ui/` - reusable shadcn-style primitives
- `lib/` - utilities (tailwind-merge/cn helper)
- `public/` - brand assets, SVGs, shapes

## Notes

- Brand colors, typography, and design tokens are defined in `DESIGN.md` and implemented via Tailwind CSS custom properties in `app/globals.css`.
- The purple/violet palette, serif display font (Newsreader), and mono label font (IBM Plex Mono) are part of the "Growth Architect" design system.

## Deploy

Any Next.js host works (Vercel, etc.):

```bash
npm run build
npm run start
```
