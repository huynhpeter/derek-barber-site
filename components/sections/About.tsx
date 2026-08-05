import Image from "next/image";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-charcoal/10">
            <Image
              src="/images/derek.jpg"
              alt="Derek Beatty working on a client's haircut"
              width={1600}
              height={1066}
              className="h-auto w-full"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <h2 className="font-display text-5xl tracking-wide text-charcoal sm:text-6xl">
            About <span className="text-violet">Derek</span>
          </h2>
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
