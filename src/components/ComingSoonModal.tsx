"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { restaurant } from "@/lib/theme";

/** Shown once per browser session, so a reader isn't stopped on every page. */
const SEEN_KEY = "ak-coming-soon-seen";

export default function ComingSoonModal() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  const dismiss = useCallback(() => {
    sessionStorage.setItem(SEEN_KEY, "1");
    setOpen(false);
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem(SEEN_KEY)) return;
    setOpen(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    closeRef.current?.focus();

    // The page behind must not scroll while the modal owns the screen.
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, dismiss]);

  if (!open) return null;

  return (
    <div
      className="soon-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="soon-title"
      onClick={dismiss}
    >
      {/* Clicks inside the card shouldn't count as clicking the backdrop. */}
      <div className="soon-modal" onClick={(e) => e.stopPropagation()}>
        <button
          ref={closeRef}
          type="button"
          className="soon-modal-close"
          aria-label="Close"
          onClick={dismiss}
        >
          ×
        </button>

        <div className="soon-modal-kicker">{restaurant.tagline}</div>

        <h2 id="soon-title" className="soon-modal-title">
          Coming soon
        </h2>

        <p className="soon-modal-lede">
          The pots are sealed, the spices are grinding, and the coals are nearly
          lit. Ambur&apos;s biryani is on its way to Den&nbsp;Haag.
        </p>

        <div className="soon-modal-rule" />

        <p className="soon-modal-note">
          Please note: we are not yet taking any orders or reservations. This
          site is a preview — everything you see here goes live when our doors
          do.
        </p>

        <button type="button" className="soon-modal-btn" onClick={dismiss}>
          TAKE A LOOK AROUND
        </button>
      </div>
    </div>
  );
}
