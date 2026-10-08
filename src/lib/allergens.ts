/**
 * The thirteen allergens that must be declared under Dutch and EU
 * food-information law. Numbers match the printed menu and `MenuItem.a`.
 */
export type Allergen = {
  no: number;
  en: string;
  nl: string;
  /** What the category covers, English */
  includes: string;
  icon: string;
};

export const ALLERGENS: Allergen[] = [
  {
    no: 1,
    en: "Gluten-containing grains",
    nl: "Glutenbevattende granen",
    includes: "Wheat, rye, barley, oats",
    icon: "/images/allergens/01-gluten-containing-grains.svg",
  },
  {
    no: 2,
    en: "Crustaceans",
    nl: "Schaaldieren",
    includes: "Crab, lobster, prawns",
    icon: "/images/allergens/02-crustaceans.svg",
  },
  {
    no: 3,
    en: "Eggs",
    nl: "Eieren",
    includes: "Whole egg and egg products",
    icon: "/images/allergens/03-eggs.svg",
  },
  {
    no: 4,
    en: "Fish",
    nl: "Vis",
    includes: "Fish and fish derivatives",
    icon: "/images/allergens/04-fish.svg",
  },
  {
    no: 5,
    en: "Peanuts",
    nl: "Pinda’s",
    includes: "Groundnuts and peanut oil",
    icon: "/images/allergens/05-peanuts.svg",
  },
  {
    no: 6,
    en: "Soybeans",
    nl: "Soja",
    includes: "Soy, soy sauce, tofu",
    icon: "/images/allergens/06-soybeans.svg",
  },
  {
    no: 7,
    en: "Milk",
    nl: "Melk",
    includes: "Including lactose, ghee, paneer, curd",
    icon: "/images/allergens/07-milk.svg",
  },
  {
    no: 8,
    en: "Tree nuts",
    nl: "Noten",
    includes:
      "Almonds, hazelnuts, walnuts, cashews, pecans, Brazil nuts, pistachios, macadamia",
    icon: "/images/allergens/08-tree-nuts.svg",
  },
  {
    no: 9,
    en: "Celery",
    nl: "Selderij",
    includes: "Celery stalk, leaf and seed",
    icon: "/images/allergens/09-celery.svg",
  },
  {
    no: 10,
    en: "Mustard",
    nl: "Mosterd",
    includes: "Mustard seed, powder and paste",
    icon: "/images/allergens/10-mustard.svg",
  },
  {
    no: 11,
    en: "Sesame seeds",
    nl: "Sesamzaad",
    includes: "Seeds, paste and sesame oil",
    icon: "/images/allergens/11-sesame-seeds.svg",
  },
  {
    no: 12,
    en: "Sulphur dioxide & sulphites",
    nl: "Zwaveldioxide en sulfieten",
    includes: "Above 10 mg/kg or 10 mg/L",
    icon: "/images/allergens/12-sulphur-dioxide-and-sulphites.svg",
  },
  {
    no: 13,
    en: "Molluscs",
    nl: "Weekdieren",
    includes: "Mussels, oysters, squid",
    icon: "/images/allergens/13-molluscs.svg",
  },
];

export const ALLERGEN_BY_NO = new Map(ALLERGENS.map((a) => [a.no, a]));

/** Statements the kitchen requires alongside the allergen list. */
export const KITCHEN_NOTES = {
  halal: {
    en: "HALAL ONLY — all our meat is 100% halal.",
    nl: "UITSLUITEND HALAL — al ons vlees is 100% halal.",
  },
  freshlyCooked: {
    en: "Every dish is cooked fresh to order — please allow 10–15 minutes.",
    nl: "Elk gerecht wordt vers voor u bereid — wij vragen u om 10–15 minuten geduld.",
  },
  traces: {
    en: "Our dishes are cooked in a single kitchen where gluten, dairy, nuts, mustard, sesame, fish and shellfish are all in use, so traces cannot be ruled out. Tell us about an allergy or intolerance when you order — the kitchen will confirm what is safe for you.",
    nl: "Onze gerechten worden bereid in één keuken waar gluten, zuivel, noten, mosterd, sesam, vis en schaaldieren worden gebruikt; sporen zijn niet uit te sluiten. Meld uw allergie of intolerantie bij het bestellen — de keuken laat u weten wat veilig is.",
  },
} as const;
