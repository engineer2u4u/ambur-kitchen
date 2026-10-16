import {
  ALL_DISH_NAMES,
  MENU,
  dishId,
  sectionId,
  type MenuGroup,
} from "./menu";

export type Signature = {
  n: string;
  /** Exact dish name in MENU, so the card can link at that dish. */
  dish: string;
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
    dish: "Ambur Spl Seeraga Samba Mutton Biryani with Aubergine Curry & Raita",
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
    dish: "Ambur Spl Seeraga Samba Chicken Biryani with Aubergine Curry & Raita",
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
    dish: "Spl Mutton Keema Dosa with Chicken Salna",
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
    dish: "Chicken & Coriander Shorba (Murgh Dhaniya)",
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

/**
 * Chapter cards: one per menu section, so the home page and the menu agree on
 * what a chapter is. Name, Dutch name and count all come from the menu — only
 * the cover photo is chosen here.
 */
const CHAPTER_COVER: Record<string, string> = {
  Soups: "Rasam Soup",
  "Small Plates — Veg": "Veg Sampler Platter",
  "Small Plates — Non-veg": "Chicken 65",
  "Combos & Meals": "Spl Ambur Non-veg Meals",
  "Biryani & Rice": "Hyderabad Basmati Mutton Biryani",
  "Curries — Non-veg": "Ambur Special Butter Chicken Masala",
  "Curries — Veg": "Paneer Butter Masala",
  Dosa: "Masala Dosa",
  Rolls: "Minced Mutton Egg Roll",
  Breads: "Tandoori Cheese Garlic Naan",
  "Kids' Menu": "Kid's Meal",
  Desserts: "Gulab Jamun (2 pcs)",
};

/** Falls back to the section's first dish if the named cover ever goes. */
const coverFor = (g: MenuGroup) => {
  const wanted = CHAPTER_COVER[g.cat];
  const hit = wanted ? g.items.find((i) => i.n === wanted) : undefined;
  return (hit ?? g.items[0]).img;
};

export const CHAPTERS = MENU.map((g) => ({
  name: g.cat,
  nameNl: g.catNl,
  count: g.items.length,
  img: coverFor(g),
  href: `/menu/#${sectionId(g.cat)}`,
}));

/** Spelled out for the heading, so it cannot drift from the real count. */
const NUMBER_WORDS = [
  "Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight",
  "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen",
];
const NUMBER_WORDS_NL = [
  "Nul", "Een", "Twee", "Drie", "Vier", "Vijf", "Zes", "Zeven", "Acht",
  "Negen", "Tien", "Elf", "Twaalf", "Dertien", "Veertien", "Vijftien",
];
export const CHAPTER_COUNT_WORD =
  NUMBER_WORDS[CHAPTERS.length] ?? String(CHAPTERS.length);
export const CHAPTER_COUNT_WORD_NL =
  NUMBER_WORDS_NL[CHAPTERS.length] ?? String(CHAPTERS.length);

/**
 * Each signature must name a dish that still exists, or its "find it on the
 * menu" link lands on a dead anchor and the page simply sits at the top.
 * Fails the build rather than shipping a link that quietly does nothing.
 */
const missing = SIGNATURES.filter((s) => !ALL_DISH_NAMES.includes(s.dish));
if (missing.length) {
  throw new Error(
    "Signature dishes not found in MENU: " +
      missing.map((s) => `${s.n} -> ${s.dish}`).join("; "),
  );
}

/** Deep link from a signature card to its dish on the menu. */
export const signatureHref = (s: Signature) => `/menu/#${dishId(s.dish)}`;

/** Autoplay interval shared by both signature presentations. */
export const SIG_ROTATE_MS = 4500;
