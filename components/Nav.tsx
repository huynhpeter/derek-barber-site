import { nav, site } from "@/lib/site";

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-charcoal/10 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#top"
          className="font-display text-xl tracking-wide text-charcoal sm:text-2xl"
        >
          2<span className="text-violet">W</span>1
          <span className="text-sunset">B</span>
        </a>
        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 text-sm text-stone sm:flex"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-charcoal"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={site.bookingUrl}
          className="rounded-full bg-sunset px-4 py-2 text-sm font-semibold text-paper transition-transform hover:scale-105 sm:px-5"
        >
          Book Now
        </a>
      </div>
    </header>
  );
}
