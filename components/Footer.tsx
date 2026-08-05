import Image from "next/image";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-charcoal/10">
      <div className="pole-stripe h-1 w-full opacity-60" />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <Image
            src="/images/logo-text.png"
            alt="2Wheels1Beard"
            width={1203}
            height={249}
            className="mx-auto h-8 w-auto sm:mx-0"
          />
          <p className="mt-2 text-xs text-stone">
            © {new Date().getFullYear()} {site.barber}. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-5 text-sm text-stone">
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="hover:text-charcoal"
          >
            Instagram
          </a>
          <a
            href={site.youtube}
            target="_blank"
            rel="noreferrer"
            className="hover:text-charcoal"
          >
            YouTube
          </a>
          <a href={site.bookingUrl} className="text-sunset hover:text-charcoal">
            Book Now
          </a>
        </div>
      </div>
    </footer>
  );
}
