"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLang, pick } from "@/lib/LanguageProvider";
import { colors, cream, goldA } from "@/lib/theme";
import { SIGNATURES } from "@/lib/signatures";
import { useIsMobile } from "@/hooks/useMediaQuery";

const GAP = 14;
const AUTO_MS = 4000;
/** How long autoplay stays out of the way after the reader takes over. */
const RESUME_MS = 8000;

export default function SignaturesMobile() {
  const { lang } = useLang();
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const isMobile = useIsMobile();

  // Keep the dots in step with wherever the reader has scrolled to.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const step = () =>
      track.firstElementChild
        ? (track.firstElementChild as HTMLElement).offsetWidth + GAP
        : 314;

    const onScroll = () => {
      const i = Math.max(
        0,
        Math.min(SIGNATURES.length - 1, Math.round(track.scrollLeft / step())),
      );
      setIndex((prev) => (prev === i ? prev : i));
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  // Autoplay, but only while this presentation is the visible one.
  useEffect(() => {
    const track = trackRef.current;
    if (!track || !isMobile) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let paused = false;
    let resumeTimer: ReturnType<typeof setTimeout>;

    const pause = () => {
      paused = true;
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => {
        paused = false;
      }, RESUME_MS);
    };

    const step = () =>
      track.firstElementChild
        ? (track.firstElementChild as HTMLElement).offsetWidth + GAP
        : 314;

    track.addEventListener("pointerdown", pause, { passive: true });
    track.addEventListener("wheel", pause, { passive: true });

    const id = setInterval(() => {
      if (paused) return;
      const s = step();
      const max = (SIGNATURES.length - 1) * s;
      const next = track.scrollLeft >= max - 10 ? 0 : track.scrollLeft + s;
      track.scrollTo({ left: next, behavior: "smooth" });
    }, AUTO_MS);

    return () => {
      clearInterval(id);
      clearTimeout(resumeTimer);
      track.removeEventListener("pointerdown", pause);
      track.removeEventListener("wheel", pause);
    };
  }, [isMobile]);

  const goTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const step = track.firstElementChild
      ? (track.firstElementChild as HTMLElement).offsetWidth + GAP
      : 314;
    track.scrollTo({ left: i * step, behavior: "smooth" });
  };

  return (
    <div className="only-mobile">
      <div
        ref={trackRef}
        data-snap
        style={{
          display: "flex",
          gap: GAP,
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          padding: "26px 24px 6px",
          scrollbarWidth: "none",
        }}
      >
        {SIGNATURES.map((s) => (
          <article
            key={s.n}
            style={{
              flex: "none",
              width: "clamp(300px,44vw,560px)",
              scrollSnapAlign: "center",
              border: `1px solid ${goldA(0.3)}`,
              background: "rgba(19,35,74,.42)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: 200,
                position: "relative",
                backgroundImage: `url(${s.img}), linear-gradient(135deg,#13234a,#0E1B36)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 10,
                  left: 10,
                  width: 26,
                  height: 26,
                  borderTop: `2px solid ${colors.goldLight}`,
                  borderLeft: `2px solid ${colors.goldLight}`,
                }}
              />
              <span
                style={{
                  position: "absolute",
                  bottom: 10,
                  right: 10,
                  background: "rgba(8,16,32,.8)",
                  backdropFilter: "blur(8px)",
                  border: `1px solid ${goldA(0.45)}`,
                  color: colors.goldLight,
                  fontSize: 15,
                  fontWeight: 500,
                  padding: "6px 14px",
                }}
              >
                € {s.p}
              </span>
            </div>

            <div style={{ padding: "18px 20px 22px" }}>
              <div
                style={{
                  fontSize: 10.5,
                  letterSpacing: "3.5px",
                  color: colors.gold,
                }}
              >
                {pick(lang, s.tag, s.tagNl)}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: 26,
                  fontWeight: 600,
                  margin: "8px 0 0",
                  color: colors.cream,
                  textWrap: "pretty",
                }}
              >
                {s.n}
              </h3>
              <p
                style={{
                  margin: "10px 0 0",
                  fontSize: 13.5,
                  fontWeight: 300,
                  lineHeight: 1.65,
                  color: cream(0.68),
                  textWrap: "pretty",
                }}
              >
                {pick(lang, s.dShort, s.nlShort)}
              </p>
              <Link
                href="/menu"
                style={{
                  display: "inline-block",
                  marginTop: 14,
                  borderBottom: `1px solid ${colors.gold}`,
                  paddingBottom: 3,
                  fontSize: 11.5,
                  letterSpacing: "2.5px",
                }}
              >
                FIND IT ON THE MENU →
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 4,
          marginTop: 6,
        }}
      >
        {SIGNATURES.map((s, i) => (
          <button
            key={s.n}
            onClick={() => goTo(i)}
            aria-label={`Go to ${s.n}`}
            aria-current={i === index}
            style={{
              width: 44,
              padding: "14px 4px",
              border: "none",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                display: "block",
                height: 4,
                background:
                  i === index
                    ? `linear-gradient(90deg,${colors.goldLight},${colors.gold})`
                    : goldA(0.25),
                transition: "background .3s ease",
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
