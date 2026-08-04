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
  street: "Streetname 12",
  postal: "1234 AB City, Netherlands",
  addressLine: "Streetname 12, City, Netherlands",
  phone: "+31 6 0000 0000",
  phoneHref: "tel:+31600000000",
  email: "hello@theamburkitchen.nl",
  hoursShort: "Tue–Sun 12:00–22:00",
} as const;

export const cream = (alpha: number) => `rgba(242,236,223,${alpha})`;
export const goldA = (alpha: number) => `rgba(192,134,61,${alpha})`;
