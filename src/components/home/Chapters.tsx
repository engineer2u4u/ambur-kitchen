"use client";

import Link from "next/link";
import { useState } from "react";
import { useLang, pick } from "@/lib/LanguageProvider";
import { colors, cream, goldA } from "@/lib/theme";
import { CHAPTERS } from "@/lib/signatures";
import Reveal from "@/components/Reveal";

/** Panel open by default on mobile, matching the mobile design. */
const DEFAULT_OPEN = 3;

export default function Chapters() {
  const { lang } = useLang();
  const [active, setActive] = useState(DEFAULT_OPEN);

  return (
    <Reveal
      as="section"
      className="page-pad"
      style={{
        maxWidth: 1240,
        margin: "0 auto",
        padding: "96px 48px",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: 12, letterSpacing: "5px", color: colors.gold }}>
        EAT YOUR WAY THROUGH
      </div>
      <h2
        className="section-title"
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: 46,
          fontWeight: 600,
          margin: "14px 0 8px",
          color: colors.cream,
        }}
      >
        Seven chapters of flavour
      </h2>
      <p
        className="only-mobile"
        style={{
          margin: "0 0 24px",
          fontSize: 12,
          letterSpacing: "1px",
          color: cream(0.5),
        }}
      >
        Tap a chapter to open it
      </p>
      <div className="only-desktop" style={{ height: 32 }} />

      <div className="chapter-strip">
        {CHAPTERS.map((c, i) => (
          <div
            key={c.name}
            className="chapter-panel"
            data-active={active === i}
            onClick={() => setActive(i)}
            style={{
              backgroundImage: `url(${c.img}), linear-gradient(135deg,#13234a,#0E1B36)`,
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg,rgba(10,20,40,.2) 0%,rgba(8,16,32,.9) 100%)",
              }}
            />
            <div
              className="chapter-content"
              style={{ position: "relative", textAlign: "left" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span
                  style={{
                    fontFamily: "ui-monospace, monospace",
                    fontSize: 11,
                    letterSpacing: "3px",
                    color: colors.goldLight,
                  }}
                >
                  {"0" + (i + 1)}
                </span>
                <span
                  className="chapter-name"
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: 22,
                    fontWeight: 600,
                    color: colors.cream,
                    whiteSpace: "nowrap",
                  }}
                >
                  {pick(lang, c.name, c.nameNl)}
                </span>
              </div>
              <div
                className="chapter-meta"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  fontSize: 11,
                  letterSpacing: "2px",
                  color: cream(0.65),
                  marginTop: 6,
                }}
              >
                <span>
                  {c.count} {lang === "nl" ? "GERECHTEN" : "DISHES"}
                  <span className="ch-arrow"> →</span>
                </span>
                <Link
                  href="/menu"
                  className="ch-open"
                  style={{ letterSpacing: "2px" }}
                >
                  {lang === "nl" ? "OPEN HOOFDSTUK →" : "OPEN CHAPTER →"}
                </Link>
              </div>
            </div>

            {/* Desktop makes the whole panel a link; mobile taps to expand. */}
            <Link
              href="/menu"
              className="chapter-hit"
              aria-label={`${c.name} — ${c.count} dishes`}
              tabIndex={-1}
            />
          </div>
        ))}
      </div>
    </Reveal>
  );
}
