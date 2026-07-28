import { Reveal } from "@/components/Reveal";
import { services, site } from "@/lib/site";

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal>
        <h2 className="font-display text-5xl tracking-wide text-cream sm:text-6xl">
          <span className="text-sunset">Services</span> &amp; Pricing
        </h2>
        <p className="mt-3 max-w-lg text-steel">
          Fixed prices, no surprises. Book online and pay in the chair.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {services.map((s, i) => (
          <Reveal key={s.name} delay={i * 0.08}>
            <a
              href={site.bookingUrl}
              className="group flex items-start justify-between gap-4 rounded-xl border border-cream/10 bg-ink-soft p-6 transition-colors hover:border-sunset/50"
            >
              <div>
                <h3 className="text-xl font-semibold text-cream group-hover:text-sunset">
                  {s.name}
                </h3>
                <p className="mt-1 text-sm text-steel">{s.blurb}</p>
                <p className="mt-3 text-xs uppercase tracking-widest text-steel">
                  {s.duration}
                </p>
              </div>
              <span className="font-display text-3xl text-violet">
                {s.price}
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
