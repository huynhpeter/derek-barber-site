// Off until Cutcal is ready: hides every "Book" button/link and the
// "book online" copy. Flip to true to bring them all back.
export const bookingEnabled = false;

export const site = {
  name: "2Wheels1Beard",
  barber: "Derek Beatty",
  // TODO: switch back to https://cutcal.app/2wheels1beard once the domain is live
  bookingUrl: "https://cutcal.huynhxpeter-8ea.workers.dev/2wheels1beard",
  instagram: "https://www.instagram.com/2wheels1beard",
  youtube: "https://youtube.com/@2Wheels1Beard",
  location: {
    shop: "Andy's Barbershop",
    address: "650 N Estrella Pkwy, Goodyear, AZ 85338",
    street: "650 N Estrella Pkwy",
    city: "Goodyear",
    state: "AZ",
    zip: "85338",
    // Shop landline (Andy's), not Derek's personal number
    phone: "(623) 932-3301",
    phoneHref: "tel:+16239323301",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Andy%27s+Barbershop%2C+650+N+Estrella+Pkwy%2C+Goodyear%2C+AZ+85338",
  },
  hours: [
    { days: "Mon – Tue", time: "9:00 AM – 6:00 PM" },
    { days: "Wed – Fri", time: "9:00 AM – 6:30 PM" },
    { days: "Sat", time: "9:00 AM – 6:00 PM" },
    { days: "Sun", time: "9:00 AM – 4:00 PM" },
  ],
} as const;

export const seo = {
  // PLACEHOLDER domain — user is registering 2wheels1beard.com
  siteUrl: "https://2wheels1beard.com",
  title: "2Wheels1Beard | Derek Beatty, Barber in Goodyear, AZ",
  description:
    `Derek Beatty (2Wheels1Beard) is an independent barber at Andy's Barbershop in Goodyear, Arizona. Fades, tapers, and beard trims. ${
    bookingEnabled ? "Book online, or walk in" : "Walk in"
  } when the chair is open.`,
  keywords: [
    "barber",
    "Goodyear barber",
    "Arizona barber",
    "Andy's Barbershop",
    "fade",
    "beard trim",
    "haircut",
    "2Wheels1Beard",
    "Derek Beatty",
    "book a haircut",
  ],
  // schema.org openingHours, mirrors `site.hours`
  openingHours: [
    "Mo-Tu 09:00-18:00",
    "We-Fr 09:00-18:30",
    "Sa 09:00-18:00",
    "Su 09:00-16:00",
  ],
  priceRange: "$10 - $50",
} as const;

export type PortfolioTile = {
  /** Doubles as the lightbox caption */
  label: string;
  /** Path under /public */
  src: string;
  /** Accessible description of the photo */
  alt: string;
};

// STOCK stand-ins (Unsplash license, free for commercial use) — swap for
// real photos from Derek. Source photo ids, in tile order:
// 1622286342621, 1517832606299, 1599351431202, 1503951914875,
// 1585747860715, 1558981403 (images.unsplash.com/photo-<id>).
// (later: YouTube Data API feed, then Instagram — see BRIEF.md)
export const portfolio: PortfolioTile[] = [
  {
    label: "Skin fade",
    src: "/images/portfolio/skin-fade.jpg",
    alt: "Barber working a fade with a straight razor",
  },
  {
    label: "Beard sculpt",
    src: "/images/portfolio/beard-sculpt.jpg",
    alt: "Scissors shaping a full beard, black and white",
  },
  {
    label: "Taper + line-up",
    src: "/images/portfolio/taper-line-up.jpg",
    alt: "Straight razor cleaning up a taper behind the ear",
  },
  {
    label: "Cut and beard",
    src: "/images/portfolio/cut-and-beard.jpg",
    alt: "Client leaned back for a scissor beard trim",
  },
  {
    label: "The chair",
    src: "/images/portfolio/the-chair.jpg",
    alt: "Barbershop interior with a leather chair under warm lights",
  },
  {
    label: "Fresh off the bike",
    src: "/images/portfolio/fresh-off-the-bike.jpg",
    alt: "Orange motorcycle parked against a dark brick wall",
  },
];

export const nav = [
  { label: "Work", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Shop", href: "#shop" },
  { label: "Find Me", href: "#contact" },
] as const;

export type Service = {
  name: string;
  price: string;
  blurb: string;
};

export const services: Service[] = [
  {
    name: "Haircut",
    price: "$36",
    blurb: "Fade, taper, or scissor cut.",
  },
  {
    name: "Cut + Beard",
    price: "$50",
    blurb: "Haircut plus a full beard trim and shape.",
  },
  {
    name: "Beard Trim / Shave",
    price: "$28",
    blurb: "Line-up and shape, or a straight-razor shave, with a hot-towel finish.",
  },
  {
    name: "Eyebrow Shaping",
    price: "$10",
    blurb: "Cleaned up and shaped with a straight razor.",
  },
];
