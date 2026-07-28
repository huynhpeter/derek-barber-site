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
  title: "2Wheels1Beard — Derek Beatty, Barber in Arizona",
  description:
    "Fresh fades, sharp beards, zero bad vibes. Derek Beatty (2Wheels1Beard) is an independent barber in Arizona. Book online — walk-ins welcome when the chair's open.",
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
  /** Doubles as the accessible name + lightbox caption */
  label: string;
  /** Tailwind gradient classes for the placeholder art */
  gradient: string;
};

// PLACEHOLDER tiles — swap for real photos from Derek
// (later: YouTube Data API feed, then Instagram — see BRIEF.md)
export const portfolio: PortfolioTile[] = [
  { label: "Skin fade", gradient: "from-violet/40 via-ink-soft to-ink" },
  { label: "Beard sculpt", gradient: "from-sunset/35 via-ink-soft to-ink" },
  { label: "Taper + line-up", gradient: "from-pole-blue/30 via-ink-soft to-ink" },
  { label: "The full 2W1B", gradient: "from-violet/30 via-sunset/15 to-ink" },
  { label: "Kids cut", gradient: "from-pole-red/25 via-ink-soft to-ink" },
  { label: "Fresh off the bike", gradient: "from-sunset/25 via-violet/20 to-ink" },
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
  duration: string;
  blurb: string;
};

// PLACEHOLDER pricing — source of truth will be Cutcal
export const services: Service[] = [
  {
    name: "Haircut",
    price: "$35",
    duration: "30 min",
    blurb: "Clean fade, taper, or scissor cut. Dialed to you.",
  },
  {
    name: "Cut + Beard",
    price: "$50",
    duration: "45 min",
    blurb: "The full 2W1B treatment. Cut up top, beard sculpted.",
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
    blurb: "Patience included. Ages 12 and under.",
  },
];
