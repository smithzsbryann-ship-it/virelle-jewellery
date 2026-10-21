export type Category = "rings" | "necklaces" | "earrings" | "bracelets";

export type Piece = {
  id: string;
  name: string;
  category: Category;
  price: number;
  image: string;
  note: string;
  copy: string;
  options: Record<string, string[]>;
};

export const WHATSAPP_E164 = "12125550148";
export const ORDER_EMAIL = "orders@virelle.com";

export const PIECES: Piece[] = [
  {
    id: "solitaire",
    name: "Virelle Solitaire",
    category: "rings",
    price: 4850,
    image: "/jewelry/solitaire.jpg",
    note: "Signature",
    copy: "A 1.20ct round brilliant in 18k champagne gold. Quiet, exact, made to be worn every day.",
    options: {
      Metal: ["18k Champagne Gold", "18k White Gold", "Platinum"],
      Size: ["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5"],
    },
  },
  {
    id: "halo",
    name: "Halo Rose",
    category: "rings",
    price: 6200,
    image: "/jewelry/halo.jpg",
    note: "New",
    copy: "A 1.00ct center with a micro-pavé halo in 18k rose gold. Warm light, close to the hand.",
    options: {
      Metal: ["18k Rose Gold", "18k White Gold", "Platinum"],
      Size: ["5", "5.5", "6", "6.5", "7", "7.5", "8"],
    },
  },
  {
    id: "triad",
    name: "Triad",
    category: "rings",
    price: 3950,
    image: "/jewelry/three-stone.jpg",
    note: "Atelier",
    copy: "Three-stone geometry in platinum. A cushion center with tapered sides, set for permanence.",
    options: {
      Metal: ["Platinum", "18k White Gold"],
      Size: ["5", "6", "6.5", "7", "7.5", "8"],
    },
  },
  {
    id: "lumen",
    name: "Lumen Pendant",
    category: "necklaces",
    price: 2450,
    image: "/jewelry/pendant.jpg",
    note: "Everyday",
    copy: "A pear diamond on an adjustable 18k chain. One stone, nothing extra.",
    options: {
      Metal: ["18k Yellow Gold", "18k White Gold", "18k Rose Gold"],
      Length: ['16"', '18"', '20"'],
    },
  },
  {
    id: "station",
    name: "Station Layer",
    category: "necklaces",
    price: 1890,
    image: "/jewelry/layer.jpg",
    note: "Layering",
    copy: "Fine gold chains with graduated diamond stations. Wear one, or both.",
    options: {
      Metal: ["18k Yellow Gold", "18k White Gold"],
      Length: ['16"', '18"'],
    },
  },
  {
    id: "studs",
    name: "Classic Studs",
    category: "earrings",
    price: 3200,
    image: "/jewelry/studs.jpg",
    note: "Essential",
    copy: "1.00ct total weight round brilliants in a four-prong setting. The pair you never take off.",
    options: {
      Metal: ["18k White Gold", "18k Yellow Gold", "Platinum"],
      Weight: ["0.50ct tw", "1.00ct tw", "1.50ct tw"],
    },
  },
  {
    id: "hoops",
    name: "Sculpted Hoops",
    category: "earrings",
    price: 1650,
    image: "/jewelry/hoops.jpg",
    note: "Day",
    copy: "Brushed 18k hoops with a fine line of diamonds along the outer edge.",
    options: {
      Metal: ["18k Yellow Gold", "18k Rose Gold", "18k White Gold"],
      Diameter: ["20mm", "25mm", "30mm"],
    },
  },
  {
    id: "tennis",
    name: "Line Bracelet",
    category: "bracelets",
    price: 5400,
    image: "/jewelry/tennis.jpg",
    note: "Icon",
    copy: "3.00ct total of round diamonds in flexible 18k white gold. Box clasp with a safety.",
    options: {
      Metal: ["18k White Gold", "Platinum"],
      Length: ['6.5"', '7"', '7.5"'],
    },
  },
  {
    id: "cuff",
    name: "Open Cuff",
    category: "bracelets",
    price: 2750,
    image: "/jewelry/cuff.jpg",
    note: "Sculptural",
    copy: "A solid gold cuff with a quiet constellation of diamonds. Adjusts to the wrist.",
    options: {
      Metal: ["18k Yellow Gold", "18k Rose Gold"],
      Fit: ["Small", "Medium", "Large"],
    },
  },
];

export const STORES = [
  { city: "New York", address: "725 Fifth Avenue, New York, NY", hours: "Mon–Sat 10–7" },
  { city: "Los Angeles", address: "9570 Wilshire Blvd, Beverly Hills, CA", hours: "Mon–Sat 10–7" },
  { city: "Chicago", address: "900 N Michigan Ave, Chicago, IL", hours: "Mon–Sat 10–7" },
  { city: "Miami", address: "9700 Collins Ave, Bal Harbour, FL", hours: "Mon–Sat 10–8" },
  { city: "Dallas", address: "8687 N Central Expy, Dallas, TX", hours: "Mon–Sat 10–7" },
  { city: "Houston", address: "5015 Westheimer Rd, Houston, TX", hours: "Mon–Sat 10–7" },
  { city: "San Francisco", address: "150 Post Street, San Francisco, CA", hours: "Mon–Sat 10–6" },
  { city: "Boston", address: "100 Huntington Ave, Boston, MA", hours: "Mon–Sat 10–7" },
  { city: "Atlanta", address: "3393 Peachtree Rd NE, Atlanta, GA", hours: "Mon–Sat 10–7" },
  { city: "Washington", address: "5300 Wisconsin Ave NW, Washington, DC", hours: "Mon–Sat 10–7" },
  { city: "Seattle", address: "600 Pine Street, Seattle, WA", hours: "Mon–Sat 10–7" },
  { city: "Austin", address: "2901 S Capital of Texas Hwy, Austin, TX", hours: "Mon–Sat 10–7" },
];

export const PAYMENTS = [
  "Zelle",
  "Venmo",
  "Cash App",
  "PayPal",
  "Apple Cash",
] as const;

export const GIFT_TIERS = [
  { min: 2500, name: "Silk polishing cloth" },
  { min: 5000, name: "Ivory leather travel pouch" },
  { min: 8000, name: "Petite gold charm" },
  { min: 12000, name: "Atelier candle and handwritten note" },
] as const;

export function giftsFor(goods: number) {
  return GIFT_TIERS.filter((g) => goods >= g.min);
}

export function money(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

export function pieceById(id: string) {
  return PIECES.find((p) => p.id === id);
}
