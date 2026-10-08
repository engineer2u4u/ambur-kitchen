"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState, type CSSProperties } from "react";
import { useLang, type Lang } from "@/lib/LanguageProvider";
import { colors, cream, goldA, restaurant } from "@/lib/theme";

const NAV = [
  { href: "/", label: "HOME" },
  { href: "/menu", label: "MENU" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
];

/** EN | NL switch. Shares one look between the desktop bar and the drawer. */
function LangSwitch({ size = 11.5 }: { size?: number }) {
  const { lang, setLang } = useLang();
  const opt = (l: Lang): CSSProperties => ({
    fontSize: size,
    letterSpacing: "1.5px",
    padding: "4px 8px",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontFamily: "inherit",
    color: lang === l ? colors.goldLight : cream(0.45),
    fontWeight: lang === l ? 600 : 400,
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        border: `1px solid ${goldA(0.3)}`,
        flex: "none",
      }}
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        style={opt("en")}
      >
        EN
      </button>
      <span aria-hidden style={{ color: goldA(0.4), fontSize: size - 1 }}>
        |
      </span>
      <button
        type="button"
        onClick={() => setLang("nl")}
        aria-pressed={lang === "nl"}
        style={opt("nl")}
      >
        NL
      </button>
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Only the menu is translated, so the switch only appears there.
  // trailingSlash is on, so the path arrives as "/menu/".
  const onMenu = pathname === "/menu" || pathname === "/menu/";

  // Lock the page behind the overlay, and always release the lock on unmount.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the overlay if the viewport grows into the desktop layout.
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 901px)");
    const onChange = (e: MediaQueryListEvent) => e.matches && setOpen(false);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  const desktopLink = (href: string): CSSProperties =>
    pathname === href
      ? {
          color: colors.goldLight,
          borderBottom: `1px solid ${colors.gold}`,
          paddingBottom: 3,
        }
      : { color: colors.cream };

  const bar: CSSProperties = {
    display: "block",
    width: 20,
    height: 2,
    background: colors.goldLight,
    transition: "transform .35s ease, opacity .3s ease",
  };

  return (
    <>
      <header
        className="site-header"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 70,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 48px",
          background: "rgba(10,20,40,.82)",
          backdropFilter: "blur(14px)",
          borderBottom: `1px solid ${goldA(0.18)}`,
        }}
      >
        <Link
          href="/"
          style={{ display: "flex", alignItems: "center", gap: 12 }}
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logo.png"
            alt={restaurant.name}
            width={44}
            height={44}
            priority
            className="brand-mark"
            style={{
              height: 44,
              width: "auto",
              filter: "drop-shadow(0 0 10px rgba(219,165,90,.35))",
            }}
          />
          <span
            className="brand-word"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: 21,
              fontWeight: 600,
              letterSpacing: "2.5px",
              color: colors.goldLight,
            }}
          >
            {restaurant.name}
          </span>
        </Link>

        <nav
          className="only-desktop"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 34,
            fontSize: 13.5,
            letterSpacing: "2.2px",
            fontWeight: 400,
          }}
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
              style={desktopLink(item.href)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact#reserve"
            style={{
              color: colors.navy,
              background: `linear-gradient(135deg,${colors.goldLight},${colors.gold})`,
              padding: "10px 22px",
              letterSpacing: "2px",
              fontWeight: 500,
            }}
          >
            RESERVE
          </Link>
          {onMenu && <LangSwitch />}
        </nav>

        <button
          className="only-mobile"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          style={{
            width: 44,
            height: 44,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
            background: "transparent",
            border: `1px solid ${goldA(0.35)}`,
            cursor: "pointer",
            padding: 0,
            flex: "none",
          }}
        >
          <span
            style={{
              ...bar,
              transform: open ? "translateY(7px) rotate(45deg)" : "none",
            }}
          />
          <span style={{ ...bar, opacity: open ? 0 : 1 }} />
          <span
            style={{
              ...bar,
              transform: open ? "translateY(-7px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </header>

      {/* Full-screen overlay, revealed by a circular clip-path from the burger. */}
      <div
        className="only-mobile"
        // Hidden from assistive tech and keyboard order while closed.
        {...(!open && { inert: "" as unknown as boolean })}
        aria-hidden={!open}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 60,
          background: `radial-gradient(ellipse 90% 60% at 50% 0%, ${goldA(
            0.12,
          )}, transparent 60%), rgba(8,16,32,.97)`,
          backdropFilter: "blur(18px)",
          display: "flex",
          flexDirection: "column",
          padding: "104px 30px 36px",
          clipPath: open
            ? "circle(150% at calc(100% - 36px) 31px)"
            : "circle(0% at calc(100% - 36px) 31px)",
          transition: "clip-path .65s cubic-bezier(.22,1,.36,1)",
          pointerEvents: open ? "auto" : "none",
        }}
      >
        <div
          style={{
            fontFamily: "ui-monospace, monospace",
            fontSize: 10,
            letterSpacing: "3px",
            color: goldA(0.7),
            marginBottom: 20,
          }}
        >
          // NAVIGATION
        </div>

        {NAV.map((item, i) => {
          const rowStyle: CSSProperties = {
            display: "flex",
            alignItems: "baseline",
            gap: 14,
            fontFamily: "var(--font-cormorant), serif",
            fontSize: 36,
            fontWeight: 600,
            padding: "13px 0",
            borderBottom: `1px solid ${goldA(0.14)}`,
            color: pathname === item.href ? colors.goldLight : colors.cream,
            opacity: open ? 1 : 0,
            transform: open ? "none" : "translateY(26px)",
            transition: `opacity .5s ${0.12 + i * 0.07}s ease, transform .5s ${
              0.12 + i * 0.07
            }s ease`,
          };

          const row = (
            <>
              <span
                style={{
                  fontFamily: "ui-monospace, monospace",
                  fontSize: 11,
                  color: goldA(0.6),
                  width: 28,
                  flex: "none",
                }}
              >
                {"0" + (i + 1)}
              </span>
              <span>{item.label}</span>
            </>
          );

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={rowStyle}
            >
              {row}
            </Link>
          );
        })}

        <Link
          href="/contact#reserve"
          onClick={() => setOpen(false)}
          style={{
            marginTop: 28,
            background: `linear-gradient(135deg,${colors.goldLight},${colors.gold})`,
            color: colors.navy,
            textAlign: "center",
            padding: 16,
            fontSize: 13,
            letterSpacing: "2.5px",
            fontWeight: 500,
            opacity: open ? 1 : 0,
            transform: open ? "none" : "translateY(26px)",
            transition: "opacity .5s .42s ease, transform .5s .42s ease",
          }}
        >
          RESERVE A TABLE
        </Link>

        {onMenu && (
          <div
            style={{
              marginTop: 20,
              display: "flex",
              justifyContent: "center",
              opacity: open ? 1 : 0,
              transition: "opacity .5s .48s ease",
            }}
          >
            <LangSwitch size={13} />
          </div>
        )}

        <div
          style={{
            marginTop: "auto",
            fontSize: 12,
            fontWeight: 300,
            letterSpacing: ".5px",
            color: cream(0.5),
            lineHeight: 1.8,
          }}
        >
          {restaurant.addressLine} · {restaurant.phone}
          <br />
          {restaurant.hoursShort}
        </div>
      </div>
    </>
  );
}
