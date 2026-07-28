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
