export type Signature = {
  n: string;
  tag: string;
  p: string;
  /** Full description, used on desktop. */
  d: string;
  /** Trimmed description for the narrower mobile card. */
  dShort: string;
  img: string;
};

export const SIGNATURES: Signature[] = [
  {
    n: "Ambur Mutton Biryani",
    tag: "THE LEGEND",
    p: "21",
    d: "Basmati rice layered over slow-cooked mutton, sealed and steamed. Served with aubergine curry and raita, exactly as the biryani masters of Ambur intended.",
    dShort:
      "Basmati rice layered over slow-cooked mutton, sealed and steamed. Served with aubergine curry and raita.",
    img: "/images/sig-biryani.jpg",
  },
  {
    n: "Crunchy Fish Fry",
    tag: "FROM THE COAST",
    p: "15",
    d: "Whole fish scored to the bone, packed with a dark chilli-pepper masala and fried until the crust shatters. Served on banana leaf with lime, onion and chutney.",
    dShort:
      "Whole fish scored to the bone, packed with dark chilli masala and fried until the crust shatters.",
    img: "/images/sig-fish-fry.jpg",
  },
  {
    n: "Malabar Parotta & Chicken Salna",
    tag: "STREET CLASSIC",
    p: "15",
    d: "Hand-slapped parotta pulled into a hundred layers, torn and dipped into a fiery chicken salna. The taste of a Tamil Nadu highway at midnight.",
    dShort:
      "Hand-slapped parotta pulled into a hundred layers, torn and dipped into a fiery chicken salna.",
    img: "/images/sig-parotta-salna.jpg",
  },
  {
    n: "Minced Mutton Egg Roll",
    tag: "TAWA FAVOURITE",
    p: "12",
    d: "Spiced mutton keema and egg scrambled together on the tawa, rolled hot into a flaky parotta. Built to be eaten standing up.",
    dShort:
      "Spiced mutton keema and egg scrambled on the tawa, rolled hot into a flaky parotta.",
    img: "/images/sig-keema-roll.jpg",
  },
];

export const CHAPTERS = [
  { name: "Soups", count: 4, img: "/images/ch-soup.jpg" },
  { name: "Small Plates", count: 23, img: "/images/ch-samosa.jpg" },
  { name: "Special Platters", count: 8, img: "/images/ch-thali.jpg" },
  { name: "Biryani & Rice", count: 8, img: "/images/ch-biryani.jpg" },
  { name: "Special Curries", count: 16, img: "/images/ch-curry.jpg" },
  { name: "Dosa Specials", count: 7, img: "/images/ch-dosa.jpg" },
  { name: "Breads & Sides", count: 5, img: "/images/ch-naan.jpg" },
];

/** Autoplay interval shared by both signature presentations. */
export const SIG_ROTATE_MS = 4500;
