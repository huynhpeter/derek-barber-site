const PHRASE = "Two Wheels · One Beard · Zero Bad Fades · Walk-Ins Welcome · ";

/**
 * Scrolling tagline strip — decorative (aria-hidden), CSS transform animation,
 * paused entirely under prefers-reduced-motion (see globals.css).
 * Two identical halves inside a w-max flex track; the track translates -50%
 * for a seamless loop.
 */
export function Marquee() {
  return (
    <div aria-hidden className="relative overflow-hidden py-8 select-none">
      <div className="-mx-6 -rotate-2 border-y border-cream/10 bg-ink-soft/80 py-3">
        <div className="animate-marquee flex w-max whitespace-nowrap will-change-transform">
          {[0, 1].map((half) => (
            <span
              key={half}
              className="font-display text-2xl tracking-[0.18em] text-cream/60 sm:text-3xl"
            >
              {PHRASE.repeat(4)}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
