"use client";

import { useState } from "react";
import Image from "next/image";
import AllergenModal from "@/components/menu/AllergenModal";
import { KITCHEN_NOTES } from "@/lib/allergens";
import { useLang, pick, t } from "@/lib/LanguageProvider";

/** The kitchen's standing notices, stated before the dishes rather than after. */
export default function MenuIntro() {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <section className="menu-intro page-pad">
      <div className="menu-intro-inner">
        <Image
          className="halal-mark"
          src="/images/halal-100.png"
          alt={pick(lang, KITCHEN_NOTES.halal.en, KITCHEN_NOTES.halal.nl)}
          width={320}
          height={321}
        />

        <div className="menu-intro-main">
          <span className="halal-badge">
            {pick(lang, KITCHEN_NOTES.halal.en, KITCHEN_NOTES.halal.nl)}
          </span>
          <p className="kitchen-note" style={{ margin: "12px 0 0" }}>
            {pick(
              lang,
              KITCHEN_NOTES.freshlyCooked.en,
              KITCHEN_NOTES.freshlyCooked.nl,
            )}
          </p>
          <p className="kitchen-note" style={{ margin: "8px 0 0" }}>
            {pick(lang, KITCHEN_NOTES.traces.en, KITCHEN_NOTES.traces.nl)}
          </p>
        </div>

        <button
          type="button"
          className="alg-open-btn"
          onClick={() => setOpen(true)}
        >
          {t(lang, "allergenGuide")} →
        </button>
      </div>

      <AllergenModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
