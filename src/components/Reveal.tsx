"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Element to render — defaults to <div>. */
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  /** Fraction of the element that must be visible before revealing. */
  threshold?: number;
};

/**
 * Fades + slides its children into view once, mirroring the original
 * `[data-reveal]` IntersectionObserver behaviour.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  style,
  threshold = 0.12,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced-motion: show immediately, skip the observer.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-visible");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return (
    <Tag ref={ref} className={`reveal ${className}`.trim()} style={style}>
      {children}
    </Tag>
  );
}
