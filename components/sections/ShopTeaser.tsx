import { Reveal } from "@/components/Reveal";

export function ShopTeaser() {
  return (
    <section id="shop" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-violet/30 bg-ink-soft p-10 text-center sm:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet/15 blur-3xl"
          />
          <p className="text-xs uppercase tracking-[0.3em] text-sunset">
            Coming Soon
          </p>
          <h2 className="mt-3 font-display text-5xl tracking-wide text-cream sm:text-6xl">
            The <span className="text-violet">Shop</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-steel">
            Beard oil, merch, and the good stuff — shipped to you or grab it at
            the chair. Drop your email at booking and you&apos;ll be first to
            know.
          </p>
          {/* Future: dropshipping storefront plugs in here (see BRIEF.md) */}
        </div>
      </Reveal>
    </section>
  );
}
