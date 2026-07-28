import { BarberPole } from "@/components/BarberPole";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <Reveal>
          <div className="relative">
            {/* PLACEHOLDER — portrait / bike photo of Derek */}
            <div className="flex aspect-[4/5] items-center justify-center rounded-2xl border border-cream/10 bg-ink-soft text-steel/50">
              <span className="text-sm">Derek + the bike</span>
            </div>
            {/* animated barber-pole micro-accent */}
            <BarberPole className="absolute -right-3 top-8 h-32 w-3 sm:-right-4 sm:h-40" />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <h2 className="font-display text-5xl tracking-wide text-cream sm:text-6xl">
            About <span className="text-violet">Derek</span>
          </h2>
          {/* PLACEHOLDER copy — get the real story from Derek */}
          <p className="mt-4 text-steel">
            Nebraska-raised, Arizona-based. When he&apos;s not behind the chair
            he&apos;s on two wheels in the desert — hence the name. The beard
            came first; the clippers followed.
          </p>
          <p className="mt-4 text-steel">
            Every cut gets the same treatment: unhurried, dialed-in, and
            finished sharp. Suns games on the shop TV, no bad vibes, no bad
            fades.
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.25em] text-steel">
            Bug Eaters · Snowbird-izona · <span aria-hidden>🏍️ + 🧔</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
