"use client";

import { useEffect, useRef, useState } from "react";
import { colors, cream, goldA } from "@/lib/theme";
import Reveal from "@/components/Reveal";
import { useParallax } from "@/hooks/useParallax";

/** How long each chapter holds before advancing on its own. */
const ADVANCE_MS = 3200;
/** How long autoplay stays out of the way after a reader picks a chapter. */
const RESUME_MS = 7000;

const TIMELINE = [
  {
    year: "1890s",
    title: "The first pots",
    body: "The biryani tradition takes root in Ambur's Nawab-era kitchens.",
  },
  {
    year: "1950s",
    title: "Highway fame",
    body: "Dhabas on the Chennai–Bangalore highway turn Ambur into a food pilgrimage.",
  },
  {
    year: "1990s",
    title: "Third generation",
    body: "Our family's masala blends and sealed-pot ritual pass to a third generation.",
  },
  {
    year: "Today",
    title: "The Netherlands",
    body: "The same pot, the same patience — cooked fresh in our Dutch kitchen.",
  },
];

export default function Timeline() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const resumeRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const bgRef = useParallax();

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(
      () => setActive((a) => (a + 1) % TIMELINE.length),
      ADVANCE_MS,
    );
    return () => clearInterval(id);
  }, [paused]);

  useEffect(() => () => clearTimeout(resumeRef.current), []);

  const pick = (i: number) => {
    setActive(i);
    setPaused(true);
    clearTimeout(resumeRef.current);
    resumeRef.current = setTimeout(() => setPaused(false), RESUME_MS);
  };

  return (
    <Reveal
      as="section"
      className="timeline-section"
      style={{
        position: "relative",
        zIndex: 2,
        background: colors.navyDeep,
        padding: "90px 48px",
        borderTop: `1px solid ${goldA(0.35)}`,
        borderBottom: `1px solid ${goldA(0.35)}`,
        overflow: "hidden",
      }}
    >
      {/* Overhangs top and bottom so the parallax drift never shows an edge. */}
      <div
        ref={bgRef}
        aria-hidden
        style={{
          position: "absolute",
          inset: "-120px 0",
          backgroundImage: 'url("/images/sig-seeraga.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.12,
          filter: "saturate(.6)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg,rgba(8,16,32,.6),rgba(8,16,32,.3) 50%,rgba(8,16,32,.7))",
          pointerEvents: "none",
        }}
      />

      <div
        style={{ maxWidth: 1240, margin: "0 auto", position: "relative" }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              fontSize: 12,
              letterSpacing: "5px",
              color: colors.goldLight,
              border: `1px solid ${goldA(0.35)}`,
              padding: "8px 18px",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: colors.goldLight,
                animation: "glowPulse 2.2s ease-in-out infinite",
              }}
            />
            THE JOURNEY
          </div>
          <h2
            className="section-title"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: 46,
              fontWeight: 600,
              margin: "18px 0 0",
              color: colors.cream,
              textWrap: "pretty",
            }}
          >
            A century on the move
          </h2>
          <p
            className="section-lede"
            style={{
              fontStyle: "italic",
              color: cream(0.55),
              fontSize: 15.5,
              margin: "10px auto 0",
              fontWeight: 300,
            }}
          >
            the story advances on its own — or pick a chapter
          </p>
        </div>

        <div className="tl-grid">
          {TIMELINE.map((item, i) => {
            const isActive = i === active;
            const isDone = i < active;
            const lit = isActive || isDone;

            return (
              <div
                key={item.year}
                className="tl-item"
                onMouseEnter={() => pick(i)}
                onClick={() => pick(i)}
              >
                <div className="tl-track">
                  <span
                    className="tl-line"
                    style={{
                      background:
                        i === 0
                          ? "transparent"
                          : lit
                            ? goldA(0.8)
                            : goldA(0.25),
                    }}
                  />
                  <span
                    className="tl-dot"
                    style={{
                      border: `2px solid ${
                        lit ? colors.goldLight : goldA(0.4)
                      }`,
                      background: isActive ? colors.goldLight : "transparent",
                      boxShadow: isActive
                        ? "0 0 16px rgba(219,165,90,.9)"
                        : "none",
                    }}
                  />
                  <span
                    className="tl-line"
                    style={{
                      background:
                        i === TIMELINE.length - 1
                          ? "transparent"
                          : isDone
                            ? goldA(0.8)
                            : goldA(0.25),
                    }}
                  />
                </div>

                <div className="tl-content">
                  <div
                    className="tl-year"
                    style={{
                      color: isActive ? colors.goldLight : goldA(0.45),
                    }}
                  >
                    {item.year}
                  </div>
                  <h3 className="tl-title">{item.title}</h3>
                  <p
                    className="tl-body"
                    style={{
                      color: isActive ? "rgba(255,255,255,.85)" : cream(0.45),
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}
