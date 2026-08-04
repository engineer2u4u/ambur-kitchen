import Link from "next/link";
import Image from "next/image";
import { colors, cream, goldA } from "@/lib/theme";

export default function Hero() {
  return (
    <section
      className="hero-section"
      style={{
        position: "relative",
        minHeight: "100vh",
        boxSizing: "border-box",
        padding: "96px 0 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            'url("/images/hero-bg.jpg"), linear-gradient(160deg,#0d1c3d,#0A1428)',
          backgroundSize: "cover",
          backgroundPosition: "center",
          animation: "kenburns 22s ease-out both",
          filter: "brightness(.5) saturate(.85)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg,rgba(10,20,40,.72) 0%,rgba(10,20,40,.45) 45%,#0A1428 100%)",
        }}
      />
      <div
        className="hero-glow"
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 620,
          height: 620,
          borderRadius: "50%",
          background: `radial-gradient(circle,${goldA(0.16)},transparent 65%)`,
          animation: "glowPulse 6s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      <div
        className="hero-inner"
        style={{
          position: "relative",
          textAlign: "center",
          padding: "20px 24px 30px",
          maxWidth: 900,
          boxSizing: "border-box",
        }}
      >
        <Image
          src="/images/hero-emblem.png"
          alt=""
          width={360}
          height={180}
          priority
          className="hero-emblem"
          style={{
            height: 180,
            width: "auto",
            marginBottom: 24,
            animation: "fadeUp 1s ease both",
            filter: "drop-shadow(0 0 22px rgba(219,165,90,.35))",
          }}
        />
        <div
          className="hero-kicker"
          style={{
            fontSize: 13,
            letterSpacing: "6px",
            color: colors.goldLight,
            marginBottom: 18,
            animation: "fadeUp 1s .15s ease both",
          }}
        >
          SOUL OF INDIAN CUISINE ·{" "}
          <span className="only-desktop">NETHERLANDS</span>
          <span className="only-mobile">NL</span>
        </div>
        <h1
          className="hero-title"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: 76,
            fontWeight: 600,
            lineHeight: 1.08,
            margin: 0,
            color: colors.cream,
            animation: "fadeUp 1s .3s ease both",
            textWrap: "pretty",
          }}
        >
          {/* The trailing space keeps the words apart when CSS hides the <br>. */}
          Where the legend of{" "}
          <br />
          <em style={{ color: colors.goldLight }}>Ambur Biryani</em> lives on
        </h1>
        <p
          className="hero-lede"
          style={{
            fontSize: 17,
            fontWeight: 300,
            lineHeight: 1.75,
            color: cream(0.75),
            maxWidth: 560,
            margin: "22px auto 0",
            animation: "fadeUp 1s .45s ease both",
            textWrap: "pretty",
          }}
        >
          Heritage recipes from Tamil Nadu&apos;s biryani capital — slow-cooked,
          spice-layered and served with Dutch warmth.
        </p>
        <div
          className="cta-row"
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            marginTop: 36,
            animation: "fadeUp 1s .6s ease both",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/menu"
            className="btn-primary"
            style={{
              background: `linear-gradient(135deg,${colors.goldLight},${colors.gold})`,
              color: colors.navy,
              padding: "15px 34px",
              fontSize: 13.5,
              letterSpacing: "2.5px",
              fontWeight: 500,
            }}
          >
            EXPLORE THE MENU
          </Link>
          <Link
            href="/contact#reserve"
            className="btn-ghost"
            style={{
              border: `1px solid ${goldA(0.6)}`,
              color: colors.goldLight,
              padding: "15px 34px",
              fontSize: 13.5,
              letterSpacing: "2.5px",
              fontWeight: 400,
            }}
          >
            RESERVE A TABLE
          </Link>
        </div>
        <div
          className="hero-scroll"
          style={{
            marginTop: 52,
            fontSize: 11,
            letterSpacing: "4px",
            color: cream(0.45),
            pointerEvents: "none",
          }}
        >
          SCROLL ↓
        </div>
      </div>
    </section>
  );
}
