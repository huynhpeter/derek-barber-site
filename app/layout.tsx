import type { Metadata } from "next";
import { Bebas_Neue, Space_Grotesk } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import { seo, site } from "@/lib/site";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: {
    default: seo.title,
    template: "%s | 2Wheels1Beard",
  },
  description: seo.description,
  keywords: [...seo.keywords],
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: seo.title,
    description: seo.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

// schema.org structured data — hours are still PLACEHOLDERS in lib/site.ts
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BarberShop",
  name: site.name,
  url: seo.siteUrl,
  description: seo.description,
  founder: { "@type": "Person", name: site.barber },
  address: {
    "@type": "PostalAddress",
    streetAddress: site.location.street,
    addressLocality: site.location.city,
    addressRegion: site.location.state,
    postalCode: site.location.zip,
    addressCountry: "US",
  },
  containedInPlace: { "@type": "BarberShop", name: site.location.shop },
  openingHours: [...seo.openingHours],
  priceRange: seo.priceRange,
  sameAs: [site.instagram, site.youtube],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bebas.variable} ${grotesk.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-full focus:bg-sunset focus:px-4 focus:py-2 focus:font-semibold focus:text-paper"
        >
          Skip to content
        </a>
        <SmoothScroll>{children}</SmoothScroll>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
