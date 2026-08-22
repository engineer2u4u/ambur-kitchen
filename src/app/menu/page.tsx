import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuBrowser from "@/components/menu/MenuBrowser";
import { colors, cream, goldA } from "@/lib/theme";
import { MENU, TOTAL_DISHES } from "@/lib/menu";

export const metadata: Metadata = {
  title: "Menu",
  description: `From the biryani lanes of Ambur to the coasts of Malabar — ${MENU.length} chapters, ${TOTAL_DISHES} dishes.`,
};

export default function MenuPage() {
  return (
    <div
      style={{ minHeight: "100vh", background: colors.navy, position: "relative" }}
    >
      {/* Drifting ambient blobs */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          top: -180,
          right: -160,
          width: 560,
          height: 560,
          borderRadius: "50%",
          background: `radial-gradient(circle,${goldA(0.13)},transparent 65%)`,
          filter: "blur(30px)",
          animation: "drift1 18s ease-in-out infinite",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        aria-hidden
        style={{
          position: "fixed",
          bottom: -200,
          left: -180,
          width: 640,
          height: 640,
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(37,72,146,.22),transparent 65%)",
          filter: "blur(30px)",
          animation: "drift2 22s ease-in-out infinite",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Header />

      <section
        className="page-pad page-hero"
        style={{
          position: "relative",
          padding: "150px 48px 30px",
          textAlign: "center",
          background: `radial-gradient(ellipse 70% 90% at 50% -20%,${goldA(
            0.14,
          )},transparent 60%)`,
        }}
      >
        <div
          style={{
            fontSize: 12,
            letterSpacing: "5px",
            color: colors.gold,
            marginBottom: 14,
          }}
        >
          SOUL OF INDIAN CUISINE
        </div>
        <h1
          className="page-title"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: 64,
            fontWeight: 600,
            margin: 0,
            color: colors.cream,
            animation: "fadeUpSm .8s ease both",
          }}
        >
          The Menu
        </h1>
        <p
          className="section-lede"
          style={{
            maxWidth: 560,
            margin: "16px auto 0",
            fontWeight: 300,
            fontSize: 16,
            lineHeight: 1.7,
            color: cream(0.68),
            textWrap: "pretty",
          }}
        >
          From the biryani lanes of Ambur to the coasts of Malabar — {MENU.length}
          chapters, {TOTAL_DISHES} dishes.
        </p>
        <div
          style={{
            height: 1,
            maxWidth: 420,
            margin: "34px auto 0",
            background: `linear-gradient(90deg,transparent,${colors.gold},transparent)`,
            animation: "lineGrow 1.2s .3s ease both",
          }}
        />
      </section>

      <MenuBrowser />
      <Footer />
    </div>
  );
}
