# 2Wheels1Beard — Portfolio Site

Personal site for Derek Beatty (2Wheels1Beard), independent barber in Arizona. See [BRIEF.md](./BRIEF.md) for design decisions, palette, and structure. Booking is handled by **Cutcal** (separate repo, `~/workspace/cutcal`) — this site just links to it.

## Stack

Next.js (App Router) + TypeScript · Tailwind v4 (CSS-first tokens in `app/globals.css`) · `motion` (Framer Motion) + Lenis smooth scroll · Cloudflare Workers via `@opennextjs/cloudflare`.

## Develop

```sh
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # tsc --noEmit
npm run build      # next build
```

## Deploy (Cloudflare)

```sh
npx wrangler login   # once
npm run preview      # build + run the Worker locally
npm run deploy       # build + deploy to Cloudflare
```

Custom domain: once `2wheels1beard.com` is registered and on Cloudflare, uncomment the `routes` block in `wrangler.jsonc`.

## Where things live

- `lib/site.ts` — all copy-ish constants: booking URL, socials, hours, placeholder services.
- `components/sections/*` — one component per page section, in page order.
- `components/Reveal.tsx` — the scroll-reveal pattern; wrap new section content in it.
- `components/SmoothScroll.tsx` — Lenis provider (mounted in `app/layout.tsx`).
- `app/globals.css` — palette tokens (Tailwind v4 `@theme`); `.pole-stripe` barber-pole utility.

## Placeholders to replace

Real photos (portfolio grid, About portrait) · real services/prices · shop name + address + Maps link in `lib/site.ts` · hours · About copy from Derek.
