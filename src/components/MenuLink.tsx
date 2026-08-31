"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";

/**
 * Stands in for a link to /menu while the menu is unpublished. Renders as an
 * anchor so it inherits the surrounding link styling, but carries no href —
 * that rules out middle-click and "open in new tab" reaching the page too.
 */
export default function MenuLink({
  children,
  className,
  style,
  onClose,
  ariaLabel,
  tabIndex = 0,
}: {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  ariaLabel?: string;
  tabIndex?: number;
  /**
   * Run once the modal is dismissed — the mobile drawer uses it to close
   * itself. Deferring it this way keeps the two body-scroll locks from
   * fighting: a child effect would otherwise re-lock after the parent frees.
   */
  onClose?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    onClose?.();
  }, [onClose]);

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

  return (
    <>
      <a
        role="button"
        tabIndex={tabIndex}
        aria-label={ariaLabel}
        className={className}
        style={{ cursor: "pointer", ...style }}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen(true);
          }
        }}
      >
        {children}
      </a>

      {/*
       * Portalled to <body>: the header sets backdrop-filter and the home
       * panels use transforms, and either makes an ancestor the containing
       * block for position:fixed — which would centre this on the header
       * rather than the viewport.
       */}
      {open &&
        createPortal(
          <div
            className="soon-backdrop"
            role="dialog"
            aria-modal="true"
            aria-labelledby="menu-soon-title"
            onClick={close}
          >
            <div className="soon-modal" onClick={(e) => e.stopPropagation()}>
              <button
                ref={closeRef}
                type="button"
                className="soon-modal-close"
                aria-label="Close"
                onClick={close}
              >
                ×
              </button>

              <div className="soon-modal-kicker">STILL ON THE STOVE</div>

              <h2 id="menu-soon-title" className="soon-modal-title">
                The menu is cooking
              </h2>

              <p className="soon-modal-lede">
                Our chefs are grinding the masalas and sealing the pots. Every
                biryani, dosa and curry lands here the moment the doors open —
                worth the wait, we promise.
              </p>

              <div className="soon-modal-rule" />

              <p className="soon-modal-note">
                We are not yet taking orders or reservations.
              </p>

              <button type="button" className="soon-modal-btn" onClick={close}>
                I&rsquo;LL BE BACK
              </button>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
