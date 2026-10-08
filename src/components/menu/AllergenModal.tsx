"use client";

import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ALLERGENS, KITCHEN_NOTES } from "@/lib/allergens";
import { useLang, pick, t } from "@/lib/LanguageProvider";

export default function AllergenModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { lang } = useLang();
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => onClose(), [onClose]);

  useEffect(() => {
    if (!open) return;

    closeRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  if (!open) return null;

  /* Portalled to <body>: the sticky menu layout would otherwise become the
     containing block for position:fixed and strand the panel mid-page. */
  return createPortal(
    <div
      className="alg-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="alg-title"
      onClick={close}
    >
      <div className="alg-modal" onClick={(e) => e.stopPropagation()}>
        <button
          ref={closeRef}
          type="button"
          className="alg-close"
          aria-label="Close"
          onClick={close}
        >
          ×
        </button>

        <h2 id="alg-title" className="alg-title">
          {t(lang, "allergenGuide")}
        </h2>
        <p className="alg-intro">{t(lang, "allergenIntro")}</p>

        <div className="alg-grid">
          {ALLERGENS.map((a) => (
            <div className="alg-item" key={a.no}>
              {/* Decorative — the name below carries the meaning. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={a.icon} alt="" aria-hidden />
              <div className="alg-no">{a.no}</div>
              <div className="alg-name">{pick(lang, a.en, a.nl)}</div>
              <div className="alg-includes">{a.includes}</div>
            </div>
          ))}
        </div>

        <p className="alg-traces">
          {pick(lang, KITCHEN_NOTES.traces.en, KITCHEN_NOTES.traces.nl)}
        </p>
      </div>
    </div>,
    document.body,
  );
}
