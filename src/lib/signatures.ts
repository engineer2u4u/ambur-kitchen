import { MENU } from "./menu";

export type Signature = {
  n: string;
  tag: string;
  tagNl: string;
  p: string;
  /** Full description, used on desktop. */
  d: string;
  /** Trimmed description for the narrower mobile card. */
  dShort: string;
  /** Dutch description. */
  nl: string;
  nlShort: string;
  img: string;
};

/** The four dishes the printed menu itself marks SIGNATURE. */
export const SIGNATURES: Signature[] = [
  {
    n: "Seeraga Samba Mutton Biryani",
    tag: "THE SIGNATURE",
    tagNl: "DE SIGNATUUR",
    p: "21,50",
    d: "Our signature dum biryani — mutton sealed under a heavy lid and slow-cooked over a dying fire, on short, fragrant seeraga samba rice. Served with aubergine curry and raita.",
    dShort:
      "Our signature dum biryani — mutton, sealed and slow-cooked, on fragrant seeraga samba rice.",
    nl: "Onze signatuur-biryani: lamsvlees, verzegeld onder een zwaar deksel en langzaam gegaard, op korte, geurige seeraga-sambarijst. Geserveerd met aubergine-curry en raita.",
    nlShort:
      "Onze signatuur-biryani: lamsvlees, verzegeld en langzaam gegaard op seeraga-sambarijst.",
    img: "/images/sig-biryani.jpg",
  },
  {
    n: "Seeraga Samba Chicken Biryani",
    tag: "AMBUR ORIGINAL",
    tagNl: "ECHT AMBUR",
    p: "19,00",
    d: "Chicken biryani on seeraga samba — a rice so aromatic it needs no saffron. With aubergine curry and raita, exactly as Ambur intended.",
    dShort:
      "Chicken biryani on seeraga samba — a rice so aromatic it needs no saffron.",
    nl: "Kip-biryani van geurige seeraga-sambarijst — zo aromatisch dat saffraan overbodig is. Met aubergine-curry en raita.",
    nlShort:
      "Kip-biryani van geurige seeraga-sambarijst, met aubergine-curry en raita.",
    img: "/images/sig/seeraga-chicken.jpg",
  },
  {
    n: "Mutton Keema Dosa",
    tag: "CHEF'S SPECIAL",
    tagNl: "VAN DE CHEF",
    p: "16,50",
    d: "A dosa griddled lace-crisp and layered with slow-cooked minced mutton, served with chicken salna to dip.",
    dShort:
      "Lace-crisp dosa layered with slow-cooked minced mutton, with chicken salna.",
    nl: "Krokant gebakken dosa met langzaam gegaard lamsgehakt, geserveerd met kippensalna om in te dopen.",
    nlShort: "Krokante dosa met langzaam gegaard lamsgehakt en kippensalna.",
    img: "/images/sig/mutton-keema-dosa.jpg",
  },
  {
    n: "Murgh Dhaniya Shorba",
    tag: "SIGNATURE",
    tagNl: "SIGNATUUR",
    p: "6,50",
    d: "A clear chicken shorba, simmered long and finished with fresh coriander. The quiet opener our regulars order without looking.",
    dShort:
      "A clear chicken shorba, simmered long and finished with fresh coriander.",
    nl: "Heldere kippenshorba, lang getrokken en afgemaakt met verse koriander. De rustige opener die vaste gasten blind bestellen.",
    nlShort: "Heldere kippenshorba, lang getrokken, met verse koriander.",
    img: "/images/sig/shorba.jpg",
  },
];

/** Chapter cards on the home page. Counts come from the menu, never retyped. */
const CHAPTER_ART: Record<string, string> = {
  Soups: "/images/ch-soup.jpg",
  "Small Plates — Veg": "/images/ch-samosa.jpg",
  "Small Plates — Non-veg": "/images/ch-thali.jpg",
  "Combos & Meals": "/images/ch-thali.jpg",
  "Biryani & Rice": "/images/ch-biryani.jpg",
  "Curries — Non-veg": "/images/ch-curry.jpg",
  "Curries — Veg": "/images/ch-curry.jpg",
  Dosa: "/images/ch-dosa.jpg",
  Rolls: "/images/ch-naan.jpg",
  Breads: "/images/ch-naan.jpg",
  "Kids' Menu": "/images/ch-samosa.jpg",
  Desserts: "/images/ch-soup.jpg",
};

/**
 * Seven cards, so the twelve menu sections are merged where they split only by
 * diet — a reader browsing chapters does not need veg and non-veg apart.
 */
const CHAPTER_MAP: [string, string, string[]][] = [
  ["Soups", "Soepen", ["Soups"]],
  [
    "Small Plates",
    "Kleine gerechten",
    ["Small Plates — Veg", "Small Plates — Non-veg"],
  ],
  ["Special Platters", "Speciale schotels", ["Combos & Meals"]],
  ["Biryani & Rice", "Biryani & rijst", ["Biryani & Rice"]],
  [
    "Special Curries",
    "Speciale curry's",
    ["Curries — Non-veg", "Curries — Veg"],
  ],
  ["Dosa & Rolls", "Dosa & rolletjes", ["Dosa", "Rolls"]],
  ["Breads & Sweets", "Brood & zoet", ["Breads", "Kids' Menu", "Desserts"]],
];

const countOf = (sections: string[]) =>
  MENU.filter((g) => sections.includes(g.cat)).reduce(
    (n, g) => n + g.items.length,
    0,
  );

export const CHAPTERS = CHAPTER_MAP.map(([name, nameNl, sections]) => ({
  name,
  nameNl,
  count: countOf(sections),
  img: CHAPTER_ART[sections[0]],
}));

/** Autoplay interval shared by both signature presentations. */
export const SIG_ROTATE_MS = 4500;
