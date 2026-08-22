import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReservationForm from "@/components/contact/ReservationForm";
import { colors, cream, goldA, restaurant } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Visit, reserve or order takeaway from The Ambur Kitchen — address, opening hours and table reservations.",
};

const HOURS: [string, string, boolean?][] = [
  ["Mon – Fri", "17:00 – 22:00"],
  ["Sat – Sun", "12:00 – 22:00"],
];

const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2451.6343156671223!2d4.309501076991126!3d52.08638646824203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b73978a3d209%3A0x916d4964403bd793!2sKrishna%20Vilas%20Den%20Haag%20-%20Indian%20Vegetarian%2FVegan%20restaurant!5e0!3m2!1sen!2sin!4v1786734749888!5m2!1sen!2sin";

const ORDER_LINKS = [
  { label: "THUISBEZORGD", href: "#" },
  { label: "UBER EATS", href: "#" },
  { label: "CALL TO ORDER", href: restaurant.phoneHref },
];

const panelStyle = {
  border: `1px solid ${goldA(0.22)}`,
  background: colors.navyPanel,
  padding: "32px 34px",
} as const;

const panelHeading = {
  fontFamily: "var(--font-cormorant), serif",
  fontSize: 28,
  fontWeight: 600,
  color: colors.goldLight,
} as const;

/** Hover/focus veil for the panels that aren't taking real bookings yet. */
function SoonVeil({ note }: { note: string }) {
  return (
    <div className="soon-veil" aria-hidden>
      <div className="soon-veil-title">COMING SOON</div>
      <p className="soon-veil-note" style={{ margin: 0 }}>
        {note}
      </p>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div style={{ minHeight: "100vh", background: colors.navy }}>
      <Header />

      <section
        className="page-pad page-hero"
        style={{
          padding: "150px 48px 40px",
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
          VISIT · RESERVE · ORDER
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
          Find us
        </h1>
      </section>

      <main
        className="page-pad contact-main"
        style={{ maxWidth: 1160, margin: "0 auto", padding: "20px 48px 90px" }}
      >
        <div
          className="split-2 contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.1fr",
            gap: 56,
            alignItems: "start",
          }}
        >
          <div
            className="contact-info-col"
            style={{ display: "flex", flexDirection: "column", gap: 28 }}
          >
            <div className="contact-panel" style={panelStyle}>
              <h2
                className="contact-panel-title"
                style={{ ...panelHeading, margin: "0 0 18px" }}
              >
                The Restaurant
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  fontWeight: 300,
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: cream(0.78),
                }}
              >
                <div>
                  {restaurant.street}
                  <br />
                  {restaurant.postal}
                </div>
                <div>
                  <a href={restaurant.phoneHref}>{restaurant.phone}</a>
                </div>
                <div>
                  <a href={`mailto:${restaurant.email}`}>{restaurant.email}</a>
                </div>
              </div>

              <div
                style={{
                  marginTop: 22,
                  paddingTop: 20,
                  borderTop: `1px solid ${goldA(0.15)}`,
                }}
              >
                <div
                  style={{
                    fontSize: 11.5,
                    letterSpacing: "3px",
                    color: colors.gold,
                    marginBottom: 10,
                  }}
                >
                  OPENING HOURS
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    gap: "6px 24px",
                    fontWeight: 300,
                    fontSize: 14.5,
                    color: cream(0.75),
                  }}
                >
                  {HOURS.map(([day, time, closed]) => (
                    <div key={day} style={{ display: "contents" }}>
                      <span>{day}</span>
                      <span style={closed ? { color: cream(0.45) } : undefined}>
                        {time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              id="order"
              className="contact-panel soon-wrap"
              style={{ ...panelStyle, scrollMarginTop: 104 }}
            >
              <SoonVeil note="Takeaway ordering opens when our doors do." />
              <h2
                className="contact-panel-title"
                style={{ ...panelHeading, margin: "0 0 8px" }}
              >
                Order takeaway
              </h2>
              <p
                style={{
                  margin: "0 0 18px",
                  fontWeight: 300,
                  fontSize: 14.5,
                  color: cream(0.65),
                }}
              >
                Biryani travels well. Order for pickup or delivery:
              </p>
              <div
                className="order-links"
                style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
              >
                {ORDER_LINKS.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="btn-ghost"
                    style={{
                      border: `1px solid ${goldA(0.5)}`,
                      color: colors.goldLight,
                      padding: "12px 22px",
                      fontSize: 12.5,
                      letterSpacing: "2px",
                    }}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

          </div>

          <div className="contact-form-col soon-wrap">
            <ReservationForm />
            <SoonVeil note="Reservations open when our doors do." />
          </div>
        </div>

        <div
          className="contact-map"
          style={{
            marginTop: 56,
            border: `1px solid ${goldA(0.22)}`,
            height: 380,
            overflow: "hidden",
          }}
        >
          <iframe
            src={MAP_EMBED}
            title={`Map to ${restaurant.name}`}
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
