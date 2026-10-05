import { Reveal } from "@/components/Reveal";
import { services, site } from "@/lib/site";

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal>
        <h2 className="font-display text-5xl tracking-wide text-charcoal sm:text-6xl">
          <span className="text-sunset">Services</span> &amp; Pricing
        </h2>
        <p className="mt-3 max-w-lg text-stone">
          Prices are fixed and listed below. Book online, pay at the shop.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {services.map((s, i) => (
          <Reveal key={s.name} delay={i * 0.08}>
            <a
              href={site.bookingUrl}
              className="group flex items-start justify-between gap-4 rounded-xl border border-charcoal/10 bg-paper-soft p-6 transition-colors hover:border-sunset/50"
            >
              <div>
                <h3 className="text-xl font-semibold text-charcoal group-hover:text-sunset">
                  {s.name}
                </h3>
                <p className="mt-1 text-sm text-stone">{s.blurb}</p>
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
