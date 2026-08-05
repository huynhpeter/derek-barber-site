import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <div className="grid gap-10 md:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-5xl tracking-wide text-charcoal sm:text-6xl">
            Find <span className="text-sunset">Me</span>
          </h2>
          <p className="mt-4 text-stone">
            Cutting at <span className="text-charcoal">{site.location.shop}</span>
            <br />
            {site.location.address}
          </p>
          <a
            href={site.location.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-sm font-semibold text-violet underline-offset-4 hover:underline"
          >
            Open in Maps →
          </a>

          <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-sunset/40 px-4 py-2 text-sm text-sunset">
            Walk-ins welcome when the chair is open
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <h3 className="text-sm uppercase tracking-[0.25em] text-stone">
            Hours
          </h3>
          <ul className="mt-4 divide-y divide-charcoal/10">
            {site.hours.map((h) => (
              <li
                key={h.days}
                className="flex items-center justify-between py-3"
              >
                <span className="text-charcoal">{h.days}</span>
                <span className="text-stone">{h.time}</span>
              </li>
            ))}
          </ul>
          <a
            href={site.bookingUrl}
            className="mt-8 inline-block rounded-full bg-violet px-8 py-4 font-bold text-paper shadow-lg shadow-violet/25 transition-transform hover:scale-105"
          >
            Book a Time
          </a>
        </Reveal>
      </div>
    </section>
  );
}
