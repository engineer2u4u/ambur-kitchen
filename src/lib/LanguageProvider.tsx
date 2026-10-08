"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "nl";

const KEY = "ak-lang";

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "en",
  setLang: () => {},
});

/**
 * The static export is prerendered in English, so the stored choice is applied
 * after mount rather than during the first render — otherwise a Dutch reader
 * hydrates against English markup and React throws the tree away.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved === "nl" || saved === "en") setLangState(saved);
    } catch {
      /* private window, or site data blocked — English is a fine default */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(KEY, l);
    } catch {
      /* the choice just will not survive a reload */
    }
  }, []);

  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);

/** Picks the right half of an English/Dutch pair. */
export const pick = (lang: Lang, en: string, nl: string) =>
  lang === "nl" && nl ? nl : en;

/** UI copy that is not part of the menu data. */
export const UI = {
  all: { en: "ALL", nl: "ALLES" },
  veg: { en: "VEG", nl: "VEGETARISCH" },
  vegan: { en: "VEGAN", nl: "VEGAN" },
  nonveg: { en: "NON-VEG", nl: "VLEES & VIS" },
  showing: { en: "Showing", nl: "Getoond" },
  of: { en: "of", nl: "van" },
  dishes: { en: "dishes", nl: "gerechten" },
  vegetarian: { en: "Vegetarian", nl: "Vegetarisch" },
  nonVegetarian: { en: "Non-vegetarian", nl: "Vlees & vis" },
  chefsSpecial: { en: "Chef's special", nl: "Specialiteit van de chef" },
  spice: { en: "Spice", nl: "Pittigheid" },
  allergenGuide: { en: "Allergen guide", nl: "Allergenenwijzer" },
  allergenIntro: {
    en: "The thirteen declarable allergens under Dutch and EU food-information law. The numbers beside each dish refer to this list.",
    nl: "De dertien wettelijk te vermelden allergenen volgens de Nederlandse en EU-wetgeving. De nummers bij elk gerecht verwijzen naar deze lijst.",
  },
  contains: { en: "Contains", nl: "Bevat" },
  everyDish: { en: "Good to know", nl: "Handig om te weten" },
} as const;

export const t = (lang: Lang, k: keyof typeof UI) => UI[k][lang];
