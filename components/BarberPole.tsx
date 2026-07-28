/**
 * Animated barber-pole accent — the pole-red/pole-blue micro-accents in motion.
 * Decorative only (aria-hidden); transform-only animation, disabled under
 * prefers-reduced-motion (see globals.css).
 */
export function BarberPole({ className = "h-28 w-3" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`relative overflow-hidden rounded-full border border-cream/20 ${className}`}
    >
      <div className="pole-stripe animate-pole absolute inset-x-0 -inset-y-1/2 will-change-transform" />
    </div>
  );
}
