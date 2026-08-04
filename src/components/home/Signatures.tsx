"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { colors, cream, goldA } from "@/lib/theme";
import { SIGNATURES, SIG_ROTATE_MS } from "@/lib/signatures";
import { useTilt } from "@/hooks/useTilt";
import { useIsMobile } from "@/hooks/useMediaQuery";

export default function Signatures() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const tilt = useTilt(10);
  const isMobile = useIsMobile();

  // Only rotate while this presentation is the visible one.
  useEffect(() => {
    if (paused || isMobile) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % SIGNATURES.length),
      SIG_ROTATE_MS,
    );
    return () => clearInterval(id);
  }, [paused, isMobile]);

  const cur = SIGNATURES[index];
  const pad = (n: number) => "0" + n;

  return (
    <section
      className="page-pad split-2 only-desktop"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{
        maxWidth: 1240,
        margin: "0 auto",
        padding: "44px 48px 40px",
        display: "grid",
        gridTemplateColumns: "1.15fr 1fr",
        gap: 56,
        alignItems: "center",
        perspective: 1400,
      }}
    >
      <div
        className="sig-card"
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        style={{
          position: "relative",
          height: 470,
          overflow: "hidden",
          border: `1px solid ${goldA(0.35)}`,
          background: "rgba(19,35,74,.42)",
          transformStyle: "preserve-3d",
          willChange: "transform",
          transition: "box-shadow .4s ease, border-color .4s ease",
        }}
      >
        {SIGNATURES.map((s, i) => (
          <div
            key={s.n}
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${s.img}), linear-gradient(135deg,#13234a,#0E1B36)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: i === index ? 1 : 0,
              transform: i === index ? "scale(1.07)" : "scale(1)",
              transition: "opacity 1s ease, transform 6s linear",
            }}
          />
        ))}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg,transparent 55%,rgba(8,16,32,.72) 100%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 14,
            left: 14,
            width: 34,
            height: 34,
            borderTop: `2px solid ${colors.goldLight}`,
            borderLeft: `2px solid ${colors.goldLight}`,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 14,
            right: 14,
            width: 34,
            height: 34,
            borderBottom: `2px solid ${colors.goldLight}`,
            borderRight: `2px solid ${colors.goldLight}`,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 22,
            left: 24,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span
            style={{
              background: "rgba(8,16,32,.8)",
              backdropFilter: "blur(8px)",
              border: `1px solid ${goldA(0.45)}`,
              color: colors.goldLight,
              fontSize: 17,
              fontWeight: 500,
              padding: "8px 18px",
            }}
          >
            € {cur.p}
          </span>
          <span
            style={{
              fontFamily: "ui-monospace, monospace",
              fontSize: 11,
              letterSpacing: "3px",
              color: cream(0.6),
            }}
          >
            {pad(index + 1)} / {pad(SIGNATURES.length)}
          </span>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: -70,
            right: -10,
            fontFamily: "var(--font-cormorant), serif",
            fontSize: 150,
            fontWeight: 700,
            lineHeight: 1,
            color: goldA(0.08),
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          {pad(index + 1)}
        </div>
        <div style={{ fontSize: 11.5, letterSpacing: "4px", color: colors.gold }}>
          {cur.tag}
        </div>
        <h3
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: 42,
            fontWeight: 600,
            margin: "12px 0 0",
            color: colors.cream,
            textWrap: "pretty",
          }}
        >
          {cur.n}
        </h3>
        <p
          style={{
            margin: "16px 0 0",
            fontSize: 16,
            fontWeight: 300,
            lineHeight: 1.75,
            color: cream(0.68),
            textWrap: "pretty",
          }}
        >
          {cur.d}
        </p>
        <Link
          href="/menu"
          style={{
            display: "inline-block",
            marginTop: 24,
            borderBottom: `1px solid ${colors.gold}`,
            paddingBottom: 4,
            fontSize: 12.5,
            letterSpacing: "2.5px",
          }}
        >
          FIND IT ON THE MENU →
        </Link>

        <div style={{ display: "flex", gap: 12, marginTop: 36 }}>
          {SIGNATURES.map((s, i) => (
            <button
              key={s.n}
              onClick={() => setIndex(i)}
              aria-label={`Show ${s.n}`}
              aria-current={i === index}
              style={{
                position: "relative",
                width: 54,
                height: 4,
                padding: 0,
                border: "none",
                cursor: "pointer",
                background: goldA(0.22),
                overflow: "hidden",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "block",
                  background: `linear-gradient(90deg,${colors.goldLight},${colors.gold})`,
                  transform: i === index ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                  transition:
                    i === index
                      ? `transform ${SIG_ROTATE_MS}ms linear`
                      : "transform .3s ease",
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
