"use client";

import { useEffect, useState } from "react";

export const MOBILE_QUERY = "(max-width: 900px)";

/**
 * Tracks a media query after mount.
 *
 * Returns `false` during SSR and the first paint, so this must only gate
 * *effects* (timers, observers) — never what gets rendered, or the markup
 * would not match on hydration. Which variant is visible is decided in CSS.
 */
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    setMatches(mql.matches);

    const onChange = (e: MediaQueryListEvent) => setMatches(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

export const useIsMobile = () => useMediaQuery(MOBILE_QUERY);
