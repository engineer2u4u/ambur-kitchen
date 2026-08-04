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
    n: "Seeraga Samba Chicken Biryani",
    tag: "AMBUR ORIGINAL",
    p: "19",
    d: "Tiny, intensely fragrant seeraga samba rice — the true Ambur way. A rice so aromatic it needs no saffron, with aubergine curry and raita.",
    dShort:
      "Tiny, intensely fragrant seeraga samba rice — the true Ambur way. So aromatic it needs no saffron.",
    img: "/images/sig-seeraga.jpg",
  },
  {
    n: "Ambur Mutton Paya",
    tag: "SUNDAY RITUAL",
    p: "22",
    d: "Trotters simmered overnight into a silky, peppery broth. Mopped up with appam, Malabar parotta or idiyappam — the breakfast of champions.",
    dShort:
      "Trotters simmered overnight into a silky, peppery broth. Mopped up with appam or Malabar parotta.",
    img: "/images/sig-paya.jpg",
  },
  {
    n: "Ghee Podi Masala Dosa",
    tag: "CROWD FAVOURITE",
    p: "12",
    d: "Ghee-roasted until lace-crisp, dusted with gunpowder podi, wrapped around spiced potato. Unreasonably good.",
    dShort:
      "Ghee-roasted until lace-crisp, dusted with gunpowder podi, wrapped around spiced potato.",
    img: "/images/sig-dosa.jpg",
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
