import Link from "next/link";
import Image from "next/image";
import { colors, cream, goldA, restaurant } from "@/lib/theme";

export default function Footer() {
  return (
    <footer
      className="site-footer page-pad"
      style={{
        position: "relative",
        zIndex: 1,
        borderTop: `1px solid ${goldA(0.18)}`,
        background: colors.navyDeep,
        padding: "44px 48px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 24,
        flexWrap: "wrap",
      }}
    >
      <div
        className="footer-brand"
        style={{ display: "flex", alignItems: "center", gap: 12 }}
      >
        <Image
          src="/images/logo.png"
          alt=""
          width={52}
          height={52}
          style={{
            height: 52,
            width: "auto",
            filter: "drop-shadow(0 0 10px rgba(219,165,90,.3))",
          }}
        />
        <div>
          <div
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: 18,
              letterSpacing: "2px",
              color: colors.goldLight,
            }}
          >
            {restaurant.name}
          </div>
          <div style={{ fontSize: 12, letterSpacing: "3px", color: cream(0.5) }}>
            {restaurant.tagline}
          </div>
        </div>
      </div>

      <div
        className="footer-meta"
        style={{
          fontSize: 13,
          fontWeight: 300,
          color: cream(0.55),
          textAlign: "right",
          lineHeight: 1.8,
        }}
      >
        {restaurant.addressLine} · {restaurant.phone}
        <br />
        {restaurant.hoursShort} ·{" "}
        <Link href="/contact#reserve">Reserve a table</Link>
      </div>
    </footer>
  );
}
