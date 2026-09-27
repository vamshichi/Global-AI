# Global AI GRCS Summit India 2026 — Website

A premium, editorial Next.js 14 (App Router) + TypeScript + Tailwind CSS website for the
Global AI GRCS Summit India 2026, built from the supplied event brief.

## Stack

- Next.js 14 (App Router), TypeScript
- Tailwind CSS (custom dark editorial design tokens — see `tailwind.config.ts`)
- Framer Motion for restrained scroll-reveal, counters and hover motion
- Lucide React icons
- Self-hosted fonts via `@fontsource/inter` and `@fontsource/newsreader`
  (no external Google Fonts network call at build time)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To build for production:

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx        Root layout, fonts, SEO metadata
  page.tsx           Assembles all sections
  globals.css        Design tokens, base styles, reduced-motion support
components/
  navbar.tsx, hero.tsx, storm-timeline.tsx, stats.tsx,
  experience-card.tsx, experiences-section.tsx, why-attend.tsx,
  agenda.tsx, speaker-card.tsx, speakers-section.tsx,
  partner-section.tsx, delegate-profile.tsx, industry-mix.tsx,
  delegates-section.tsx, venue-section.tsx, insight-card.tsx,
  insights-section.tsx, cta-section.tsx, registration-section.tsx,
  footer.tsx, section-header.tsx
  ui/button.tsx, ui/counter.tsx
data/
  nav.ts, storm.ts, stats.ts, experiences.ts, why-attend.ts,
  agenda.ts, industry.ts, partners.ts, insights.ts, footer.ts
```

## Content notes

- All copy, statistics, agenda sessions, and section structure come directly from the
  supplied brief. No speakers, sponsors, testimonials or contact details were invented.
- The Speakers section uses clearly labeled placeholder cards ("Speaker to be announced")
  until real speaker data is supplied — swap in real names/photos in
  `components/speaker-card.tsx` / `components/speakers-section.tsx`.
- Contact details in the Registration section are placeholders ("Email on request",
  "Phone on request") — replace with real values in `components/registration-section.tsx`.
- The venue map is a stylised placeholder panel, not a real map — wire in Google Maps /
  Mapbox with real coordinates in `components/venue-section.tsx` when available.

## Design system

- Background: near-black void (`#05070B`), deep navy (`#0A0F1A`), charcoal (`#10141D`)
- Type: ivory (`#F3F1EA`), dimmed slate (`#A6ADBB`)
- Accent: electric blue (`#3E6BFF`)
- Sans: Inter (UI/body) — Serif accent: Newsreader italic (editorial pull-quotes, numerals)
- 1px hairline borders, minimal corner radius, no glassmorphism-everywhere

## Accessibility & performance

- Semantic landmarks, visible focus rings, keyboard-navigable nav and agenda accordion
- `prefers-reduced-motion` respected globally in `globals.css`
- `next/image` ready (swap in real photography per the brief's image direction)
- No external font/script network calls required at build time
