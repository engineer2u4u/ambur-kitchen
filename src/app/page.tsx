import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Hero from "@/components/home/Hero";
import Timeline from "@/components/home/Timeline";
import Signatures from "@/components/home/Signatures";
import SignaturesMobile from "@/components/home/SignaturesMobile";
import StorySection from "@/components/home/StorySection";
import Chapters from "@/components/home/Chapters";
import { colors, cream, goldA } from "@/lib/theme";

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", background: colors.navy }}>
      <Header />
      <Hero />
      <Timeline />

      <Reveal
        as="section"
        className="page-pad"
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "96px 48px 20px",
          textAlign: "center",
        }}
      >
        <div
          className="section-kicker"
          style={{ fontSize: 12, letterSpacing: "5px", color: colors.gold }}
        >
          FROM OUR KITCHEN
        </div>
        <h2
          className="section-title"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: 52,
            fontWeight: 600,
            margin: "14px 0 0",
            color: colors.cream,
          }}
        >
          The Signatures
        </h2>
        <p
          className="section-lede only-desktop"
          style={{
            maxWidth: 540,
            margin: "16px auto 0",
            fontWeight: 300,
            fontSize: 16,
            lineHeight: 1.7,
            color: cream(0.65),
            textWrap: "pretty",
          }}
        >
          Four dishes that made our name — and made Ambur a place of pilgrimage
          for food lovers.
        </p>
        <p
          className="section-lede only-mobile"
          style={{
            maxWidth: 320,
            margin: "12px auto 0",
            fontWeight: 300,
            fontSize: 14.5,
            lineHeight: 1.7,
            color: cream(0.65),
            textWrap: "pretty",
          }}
        >
          Four dishes that made our name. Swipe through.
        </p>
      </Reveal>

      <Signatures />
      <SignaturesMobile />
      <StorySection />
      <Chapters />

      <Reveal
        as="section"
        className="page-pad"
        style={{
          borderTop: `1px solid ${goldA(0.18)}`,
          background: `radial-gradient(ellipse 60% 100% at 50% 0%,${goldA(
            0.1,
          )},transparent 70%),${colors.navyDeep}`,
          padding: "90px 48px",
          textAlign: "center",
        }}
      >
        <h2
          className="section-title"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: 48,
            fontWeight: 600,
            margin: 0,
            color: colors.cream,
            textWrap: "pretty",
          }}
        >
          Your table is waiting
        </h2>
        <p
          className="section-lede"
          style={{
            maxWidth: 480,
            margin: "16px auto 0",
            fontWeight: 300,
            fontSize: 16,
            lineHeight: 1.7,
            color: cream(0.65),
          }}
        >
          Book ahead for weekends — the biryani sells out.
        </p>
        <div
          className="cta-row"
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            marginTop: 32,
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/contact#reserve"
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
            RESERVE A TABLE
          </Link>
          <Link
            href="/contact#order"
            className="btn-ghost"
            style={{
              border: `1px solid ${goldA(0.6)}`,
              color: colors.goldLight,
              padding: "15px 34px",
              fontSize: 13.5,
              letterSpacing: "2.5px",
            }}
          >
            ORDER TAKEAWAY
          </Link>
        </div>
      </Reveal>

      <Footer />
    </div>
  );
}
