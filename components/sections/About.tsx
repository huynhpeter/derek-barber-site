import { BarberPole } from "@/components/BarberPole";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <Reveal>
          <div className="relative">
            {/* PLACEHOLDER — portrait / bike photo of Derek */}
            <div className="flex aspect-[4/5] items-center justify-center rounded-2xl border border-charcoal/10 bg-paper-soft text-stone/50">
              <span className="text-sm">Derek + the bike</span>
            </div>
            {/* animated barber-pole micro-accent */}
            <BarberPole className="absolute -right-3 top-8 h-32 w-3 sm:-right-4 sm:h-40" />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <h2 className="font-display text-5xl tracking-wide text-charcoal sm:text-6xl">
            About <span className="text-violet">Derek</span>
          </h2>
          {/* PLACEHOLDER copy — get the real story from Derek */}
          <p className="mt-4 text-stone">
            Derek grew up in Nebraska and cuts hair in Arizona now. When
            he&apos;s not behind the chair he&apos;s out riding in the desert.
            That&apos;s where the name comes from.
          </p>
          <p className="mt-4 text-stone">
            He takes his time on every cut and finishes clean. If the Suns are
            playing, the game is on in the shop.
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.25em] text-stone">
            Suns · Celtics · Huskers
          </p>
        </Reveal>
      </div>
    </section>
  );
}
