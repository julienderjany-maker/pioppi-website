# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # next lint (eslint-config-next)
```

There is no test suite. Lint and `npm run build` (which type-checks) are the only automated checks.

## Architecture

This is a **single-page marketing website** for Pioppi, a healthy restaurant in Gombe, Kinshasa, built with **Next.js 14 (App Router)**, **React 18**, **TypeScript**, and **Tailwind CSS v3**.

The entire site lives in `app/`:

- `app/page.tsx` — the **whole site**. One `"use client"` component (`Home`) renders every section (Nav, Hero, Ticker, About, Menu, Gallery, Philosophy/Nutrition, Community, Contact, Footer) as inline JSX. All content is hardcoded in module-level data arrays near the top of the file (`navLinks`, `menuItems`, `galleryItems`, `pillars`, `hours`, `socials`, etc.) — edit those arrays to change copy. Navigation is anchor-based scrolling; nav `href`s map to section `id`s via `l.toLowerCase()`, so a nav label and its section `id` must stay in sync.
- `app/layout.tsx` — root layout. Holds all **SEO metadata** (`metadata`, `viewport`) and an inline **JSON-LD `Restaurant` schema** (`restaurantSchema`) injected via a `<script>` tag. Loads Inter (`--font-inter`, sans) and Playfair Display (`--font-playfair`, serif) via `next/font/google`.
- `app/globals.css` — Tailwind directives plus custom keyframe animations (`fadeUp`, `shimmer`, `firefly`, `scrollLine`) and a `prefers-reduced-motion` block that disables them. The `.text-shimmer` and `.firefly` classes are referenced from `page.tsx`.
- `app/robots.ts`, `app/sitemap.ts` — Next.js metadata routes. Both hardcode the production URL `https://pioppi.cafe`.

### Conventions specific to this codebase

- **Brand colors and fonts are defined in `tailwind.config.ts`** under `theme.extend.colors` (e.g. `olive`, `cocoa`, `cream`, `gold`, `ink`, `matcha`, `bronze`). Use these named tokens rather than raw hex values when adding UI. Custom `marquee` and `fade-up` animations are also registered there.
- **Scroll-reveal pattern:** elements get the `reveal opacity-0` classes plus an inline `revealStyle(delay)` (paused `fadeUp` animation). An `IntersectionObserver` in `Home` flips `animationPlayState` to `running` and adds `opacity-100` when they enter the viewport. New animated-on-scroll elements must follow this same pattern to appear.
- **WhatsApp is the primary CTA.** `WHATSAPP_URL` in `page.tsx` is a placeholder (`wa.me/243000000000`) and social `href`s are `"#"` — these are intended to be filled in with real links.
- **Images are placeholders.** The About and Gallery sections render gradient blocks with comments marking where `<Image>` photography should go; `public/hero-boulevard.png` exists and is referenced only in OpenGraph/Twitter metadata.
- Path alias `@/*` maps to the project root (see `tsconfig.json`).
- Brand social icons (Instagram, Facebook, TikTok) are hand-rolled inline SVG components in `page.tsx` because `lucide-react` dropped its brand icons; other icons come from `lucide-react`.
