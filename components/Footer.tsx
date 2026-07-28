import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-cream/10">
      <div className="pole-stripe h-1 w-full opacity-60" />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-2xl tracking-wide text-cream">
            2Wheels1Beard
          </p>
          <p className="mt-1 text-xs text-steel">
            © {new Date().getFullYear()} {site.barber}. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-5 text-sm text-steel">
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="hover:text-cream"
          >
            Instagram
          </a>
          <a
            href={site.youtube}
            target="_blank"
            rel="noreferrer"
            className="hover:text-cream"
          >
            YouTube
          </a>
          <a href={site.bookingUrl} className="text-sunset hover:text-cream">
            Book Now
          </a>
        </div>
      </div>
    </footer>
  );
}
