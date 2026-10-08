import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { colors, cream, goldA } from "@/lib/theme";
import { TOTAL_DISHES } from "@/lib/menu";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ambur, on the old Chennai–Bangalore highway, is the unlikely capital of one of India's greatest biryani traditions. We bring it to the Netherlands.",
};

const STATS = [
  { value: "100+", label: "YEARS OF RECIPE HERITAGE" },
  { value: String(TOTAL_DISHES), label: "DISHES ON THE MENU" },
  { value: "0", label: "SHORTCUTS TAKEN" },
];

const framedImage = (src: string) => (
  <div
    className="about-frame"
    style={{ border: `1px solid ${goldA(0.35)}`, padding: 14 }}
  >
    <div
      className="about-image"
      style={{
        height: 420,
        backgroundImage: `url(${src}), linear-gradient(135deg,#13234a,#0E1B36)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  </div>
);

const headingStyle = {
  fontFamily: "var(--font-cormorant), serif",
  fontSize: 38,
  fontWeight: 600,
  margin: 0,
  color: colors.goldLight,
  textWrap: "pretty",
} as const;

const bodyStyle = {
  fontWeight: 300,
  fontSize: 16,
  lineHeight: 1.85,
  color: cream(0.75),
  textWrap: "pretty",
} as const;

export default function AboutPage() {
  return (
    <div style={{ minHeight: "100vh", background: colors.navy }}>
      <Header />

      <section
        className="page-pad page-hero"
        style={{
          padding: "150px 48px 60px",
          textAlign: "center",
          background: `radial-gradient(ellipse 70% 90% at 50% -20%,${goldA(
            0.14,
          )},transparent 60%),${colors.navy}`,
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
          OUR STORY
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
            textWrap: "pretty",
          }}
        >
          From Ambur, with fire
        </h1>
      </section>

      <main
        className="page-pad"
        style={{ maxWidth: 1080, margin: "0 auto", padding: "0 48px 90px" }}
      >
        <section
          className="split-2"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 56,
            alignItems: "center",
            marginTop: 20,
          }}
        >
          {framedImage("/images/about-1.jpg")}
          <div>
            <h2 className="about-heading" style={headingStyle}>
              The town that taught India biryani
            </h2>
            <p className="about-body" style={{ ...bodyStyle, margin: "18px 0 0" }}>
              Ambur is a small leather-trading town on the old Chennai–Bangalore
              highway — and the unlikely capital of one of India&apos;s greatest
              biryani traditions. Here, biryani is made with seeraga samba, a
              tiny, intensely aromatic rice, layered with meat that has soaked
              overnight in curd and hand-ground spice.
            </p>
            <p className="about-body" style={{ ...bodyStyle, margin: "16px 0 0" }}>
              The Ambur Kitchen carries that tradition to the Netherlands. Our
              masalas are ground in-house, our curries built from scratch each
              morning, and our biryani cooked in sealed pots the way it has been
              for over a century.
            </p>
          </div>
        </section>

        <section
          className="stats-3"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 24,
            marginTop: 90,
          }}
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              style={{
                border: `1px solid ${goldA(0.22)}`,
                background: colors.navyPanel,
                padding: "34px 30px",
                textAlign: "center",
              }}
            >
              <div
                className="stat-value"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: 44,
                  color: colors.goldLight,
                  lineHeight: 1,
                }}
              >
                {s.value}
              </div>
              <div
                className="stat-label"
                style={{
                  fontSize: 12,
                  letterSpacing: "3px",
                  color: cream(0.55),
                  marginTop: 10,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </section>

        <section
          className="split-2"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 56,
            alignItems: "center",
            marginTop: 90,
          }}
        >
          <div>
            <h2 className="about-heading section-title" style={headingStyle}>
              Cooked slow.{" "}
              <br />
              Served warm.
            </h2>
            <p className="about-body" style={{ ...bodyStyle, margin: "18px 0 0" }}>
              From Sunday-morning mutton paya to midnight-craving Chicken 65, our
              menu is a road trip through Tamil Nadu — the Arcot royal kitchens,
              the Malabar coast, and the highway dhabas in between. Vegetarians
              eat like royalty here too: gunpowder idlis, ghee podi dosas and
              kurumas rich with coconut and cashew.
            </p>
            <Link
              href="/menu"
              style={{
                display: "inline-block",
                marginTop: 26,
                borderBottom: `1px solid ${colors.gold}`,
                paddingBottom: 4,
                fontSize: 13,
                letterSpacing: "2.5px",
              }}
            >
              SEE THE FULL MENU →
            </Link>
          </div>
          {framedImage("/images/about-2.jpg")}
        </section>
      </main>

      <Footer />
    </div>
  );
}
