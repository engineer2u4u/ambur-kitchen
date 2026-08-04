"use client";

import { useEffect, useRef } from "react";

/**
 * Drifts an absolutely-positioned background layer against page scroll.
 *
 * Attach the returned ref to the background element. It must overhang its
 * container (e.g. `inset: "-120px 0"`) so the travel never exposes an edge,
 * and the container needs `overflow: hidden` to clip that overhang.
 */
export function useParallax() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bg = ref.current;
    if (!bg) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const parent = bg.parentElement;
        if (!parent) return;
        const r = parent.getBoundingClientRect();
        // Gentler travel on mobile, matching the mobile design.
        const factor = window.innerWidth <= 900 ? 0.15 : 0.18;
        bg.style.transform = `translateY(${r.top * factor}px)`;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return ref;
}
