# Vexeral

Marketing website for Vexeral, a Shariah-compliant growth systems company, built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `app/` - routes: home (single-page landing with sections), about, faq, features, industries, integrations, resources/logistics-guide
- `components/` - home-page sections (hero, trusted-by, problems, services, how-it-works, why-us, pricing, explore-more, contact, final-cta, footer)
- `components/ui/` - shared UI (navbar, footer, logo, button, card, sheet, accordion)
- `lib/utils.ts` - cn helper for tailwind-merge class merging

## Notes

- The contact form is implemented in `components/contact.tsx` but isn't yet wired to an email or CRM provider - add one (e.g. Resend) before relying on it to reach an inbox.
- Brand colors, typography, and design tokens are defined in `DESIGN.md` and implemented via Tailwind CSS custom properties in `app/globals.css`.

## Deploy

Any Next.js host works (Vercel, etc.):

```bash
npm run build
npm run start
```
