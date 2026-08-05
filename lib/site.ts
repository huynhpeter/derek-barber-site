export const site = {
  name: "2Wheels1Beard",
  barber: "Derek Beatty",
  bookingUrl: "https://cutcal.app/2wheels1beard",
  instagram: "https://www.instagram.com/2wheels1beard",
  youtube: "https://youtube.com/@2Wheels1Beard",
  location: {
    // PLACEHOLDER — real shop name/address from Derek
    shop: "[Shop Name]",
    address: "[Street Address], Arizona",
    mapsUrl: "https://maps.google.com",
  },
  hours: [
    // PLACEHOLDER — mirror Cutcal availability once live
    { days: "Tue – Fri", time: "9:00 AM – 6:00 PM" },
    { days: "Sat", time: "9:00 AM – 4:00 PM" },
    { days: "Sun – Mon", time: "Closed" },
  ],
} as const;

export const seo = {
  // PLACEHOLDER domain — user is registering 2wheels1beard.com
  siteUrl: "https://2wheels1beard.com",
  title: "2Wheels1Beard | Derek Beatty, Barber in Arizona",
  description:
    "Derek Beatty (2Wheels1Beard) is an independent barber in Arizona. Fades, tapers, and beard trims. Book online, or walk in when the chair is open.",
  keywords: [
    "barber",
    "Arizona barber",
    "fade",
    "beard trim",
    "haircut",
    "2Wheels1Beard",
    "Derek Beatty",
    "book a haircut",
  ],
  // PLACEHOLDER — schema.org openingHours, mirror `site.hours` once real
  openingHours: ["Tu-Fr 09:00-18:00", "Sa 09:00-16:00"],
  priceRange: "$20 - $50",
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
  { label: "Shop", href: "#shop" },
  { label: "Find Me", href: "#contact" },
] as const;

export type Service = {
  name: string;
  price: string;
  duration: string;
  blurb: string;
};

// PLACEHOLDER pricing — source of truth will be Cutcal
export const services: Service[] = [
  {
    name: "Haircut",
    price: "$35",
    duration: "30 min",
    blurb: "Fade, taper, or scissor cut.",
  },
  {
    name: "Cut + Beard",
    price: "$50",
    duration: "45 min",
    blurb: "Haircut plus a full beard trim and shape.",
  },
  {
    name: "Beard Trim",
    price: "$20",
    duration: "20 min",
    blurb: "Line-up, shape, and hot-towel finish.",
  },
  {
    name: "Kids Cut",
    price: "$25",
    duration: "30 min",
    blurb: "Ages 12 and under.",
  },
];
