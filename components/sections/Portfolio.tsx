import { Reveal } from "@/components/Reveal";

const placeholderTiles = Array.from({ length: 6 }, (_, i) => i);

export function Portfolio() {
  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal>
        <h2 className="font-display text-5xl tracking-wide text-cream sm:text-6xl">
          The <span className="text-violet">Work</span>
        </h2>
        <p className="mt-3 max-w-lg text-steel">
          Cuts, beards, and transformations. Fresh from the chair.
          {/* TODO: replace placeholder tiles with real photos from Derek;
              later: YouTube Data API feed, then Instagram. */}
        </p>
      </Reveal>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
        {placeholderTiles.map((i) => (
          <Reveal key={i} delay={i * 0.06}>
            <div className="flex aspect-square items-center justify-center rounded-xl border border-cream/10 bg-ink-soft text-steel/50 transition-colors hover:border-violet/40">
              <span className="text-sm">Photo {i + 1}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
