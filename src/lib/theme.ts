/**
 * Design tokens lifted from the original Ambur Kitchen design.
 * Kept as plain constants so inline styles and CSS stay in sync.
 */
export const colors = {
  navy: "#0A1428",
  navyDeep: "#081020",
  navyPanel: "#0E1B36",
  navyCard: "#13234a",
  gold: "#C0863D",
  goldLight: "#DBA55A",
  cream: "#F2ECDF",
  veg: "#7FB069",
  nonVeg: "#C0392B",
  error: "#D98878",
} as const;

/** Restaurant details — single source of truth for header/footer/contact. */
export const restaurant = {
  name: "THE AMBUR KITCHEN",
  tagline: "SOUL OF INDIAN CUISINE",
  street: "Hooikade 52",
  postal: "2514 BK Den Haag, Netherlands",
  addressLine: "Hooikade 52, 2514 BK Den Haag, Netherlands",
  phone: "+31 70 887 7990",
  phoneHref: "tel:+31708877990",
  email: "hello@theamburkitchen.nl",
  hoursShort: "Mon–Fri 17:00–22:00 · Sat–Sun 12:00–22:00",
} as const;

export const cream = (alpha: number) => `rgba(242,236,223,${alpha})`;
export const goldA = (alpha: number) => `rgba(192,134,61,${alpha})`;
