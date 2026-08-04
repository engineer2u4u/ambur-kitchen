"use client";

import { useCallback, useRef, type MouseEvent } from "react";

/**
 * Pointer-driven 3D tilt, as used on the signature card and menu cards.
 * Returns props to spread onto the element being tilted.
 *
 * @param intensity Maximum rotation in degrees (original: 10 on home, 9 on menu).
 */
export function useTilt(intensity = 10) {
  const ref = useRef<HTMLDivElement | null>(null);

  const onMouseMove = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      const card = e.currentTarget as HTMLElement;
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `rotateY(${px * intensity}deg) rotateX(${
        py * -intensity
      }deg) translateY(-6px) scale(1.02)`;
      card.style.transition = "box-shadow .4s ease, border-color .4s ease";
    },
    [intensity],
  );

  const onMouseLeave = useCallback((e: MouseEvent<HTMLElement>) => {
    const card = e.currentTarget as HTMLElement;
    card.style.transition =
      "transform .5s ease, box-shadow .4s ease, border-color .4s ease";
    card.style.transform = "none";
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
