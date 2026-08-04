"use client";

import Link from "next/link";
import { colors, cream, goldA } from "@/lib/theme";
import Reveal from "@/components/Reveal";
import { useParallax } from "@/hooks/useParallax";

export default function StorySection() {
  const bgRef = useParallax();

  return (
    <section
      className="story-section"
      style={{
        position: "relative",
        marginTop: 60,
        padding: "110px 48px",
        overflow: "hidden",
      }}
    >
      <div
        ref={bgRef}
        style={{
          position: "absolute",
          inset: "-120px 0",
          backgroundImage:
            'url("/images/story-parallax.jpg"), linear-gradient(160deg,#0d1c3d,#081020)',
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(.32)",
        }}
      />
      <div
        className="story-overlay"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg,rgba(10,20,40,.9),rgba(10,20,40,.4))",
        }}
      />
      <Reveal
        as="section"
        className="split-2"
        style={{
          position: "relative",
          maxWidth: 1240,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.1fr .9fr",
          gap: 60,
          alignItems: "center",
        }}
      >
        <div>
          <div style={{ fontSize: 12, letterSpacing: "5px", color: colors.gold }}>
            OUR STORY
          </div>
          <h2
            className="section-title"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: 46,
              fontWeight: 600,
              margin: "14px 0 0",
              color: colors.cream,
              textWrap: "pretty",
            }}
          >
            A small town in Tamil Nadu.{" "}
            <br />A big name in biryani.
          </h2>
          <p
            style={{
              fontWeight: 300,
              fontSize: 16,
              lineHeight: 1.8,
              color: cream(0.72),
              margin: "20px 0 0",
              textWrap: "pretty",
            }}
          >
            Ambur, on the old Chennai–Bangalore highway, is where seeraga samba
            rice met slow-cooked meat over open flame — and a legend was born. We
            bring that legacy to the Netherlands: hand-ground masalas, overnight
            marinades and recipes passed down through generations.
          </p>
          <Link
            href="/about"
            style={{
              display: "inline-block",
              marginTop: 28,
              borderBottom: `1px solid ${colors.gold}`,
              paddingBottom: 4,
              fontSize: 13,
              letterSpacing: "2.5px",
            }}
          >
            READ OUR STORY →
          </Link>
        </div>
        <div
          className="story-frame"
          style={{ border: `1px solid ${goldA(0.35)}`, padding: 14 }}
        >
          <div
            className="story-image"
            style={{
              height: 340,
              backgroundImage:
                'url("/images/story.jpg"), linear-gradient(135deg,#13234a,#0E1B36)',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </Reveal>
    </section>
  );
}
