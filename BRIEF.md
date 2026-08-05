# 2Wheels1Beard — Site Brief

Portfolio site for **Derek Beatty**, barbering as **2Wheels1Beard** — an independent barber renting a chair in a shop in Arizona. This is a *personal barber brand* site, not a barbershop site.

## Brand

- Hooks: motorcycle ("two wheels") + beard, Phoenix Suns, Boston Celtics, Nebraska Cornhuskers ("BugEaters"), cactus mascot logo on purple.
- Handles: IG `@2wheels1beard`, YouTube `youtube.com/@2Wheels1Beard`.
- Voice: modern, confident, a little playful. Motion-heavy feel.

## Design references

- **dryclean.love** — the animation/motion bar: scroll-driven reveals, smooth flow.
- **scissorsscotch.com** — layout sanity check: functional single-brand service site.

## Palette (light cream/desert theme — switched 2026-08-05 from the original dark purple/orange)

| Token | Hex | Role |
|---|---|---|
| `paper` | `#FAF3E7` | Background — warm cream |
| `paper-soft` | `#F2E8D5` | Card / surface background |
| `charcoal` | `#1C1917` | Text |
| `sunset` | `#C2410C` | Primary / CTAs — burnt desert orange |
| `violet` | `#6D28D9` | Accent — deep logo violet |
| `stone` | `#57534E` | Muted text (6.9:1 on paper, AA) |
| `pole-red` | `#E4353F` | Micro-accent (barber pole) — sparingly |
| `pole-blue` | `#2F6BFF` | Micro-accent (barber pole) — sparingly |

Celtics green / Husker scarlet stay inside the logo & photos only.

## Structure (single page, anchor nav)

1. **Hero** — brand, tagline riffing on two wheels / one beard, primary CTA **Book Now → https://cutcal.app/2wheels1beard**, social buttons (IG, YouTube).
2. **Portfolio** — responsive image grid. *Manual gallery first*; YouTube Data API pull-in later; Instagram API last (requires Business account + Meta app). Deferred, not built now.
3. **Services & pricing** — fixed-duration/fixed-price cards (source of truth is Cutcal; shown here as marketing).
4. **About Derek** — the story: motorcycle, Nebraska roots, the mascot.
5. **Shop teaser** — "coming soon" placeholder; future dropshipping + some pickup product. Nothing functional now, nav slot reserved.
6. **Location / Contact** — shop placeholder, hours, map link, **walk-ins welcome** note.
7. **Footer** — socials, booking link, fine print.

## Booking

All booking goes through **Cutcal** (separate product, separate repo at `~/workspace/cutcal`): the Book Now button links to `https://cutcal.app/2wheels1beard`. No booking logic lives in this repo. See Cutcal's `DESIGN.md` for the platform design.

## Tech

- Next.js (App Router) + TypeScript, static-first — no database, no auth.
- Tailwind (v4, CSS-first tokens), light theme only.
- Motion: `motion` (Framer Motion) + Lenis smooth scroll.
- Deploy: Cloudflare Workers via `@opennextjs/cloudflare` (free tier).
- Mobile-first responsive.

## Deferred

YouTube API portfolio feed · Instagram feed · shop/e-commerce (Shopify Buy Button or Snipcart candidate) · real photography & copy from Derek · custom domain `2wheels1beard.com` (user registering).
