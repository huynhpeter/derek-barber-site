import Image from "next/image";
import { bookingEnabled, nav, site } from "@/lib/site";

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-charcoal/10 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <Image
            src="/images/logo-mascot.png"
            alt=""
            width={48}
            height={48}
            className="h-12 w-12"
          />
          <Image
            src="/images/logo-text.png"
            alt="2Wheels1Beard"
            width={1203}
            height={249}
            className="h-6 w-auto sm:h-7"
          />
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
        {bookingEnabled && (
          <a
            href={site.bookingUrl}
            className="rounded-full bg-sunset px-4 py-2 text-sm font-semibold text-paper transition-transform hover:scale-105 sm:px-5"
          >
            Book Now
          </a>
        )}
      </div>
    </header>
  );
}
