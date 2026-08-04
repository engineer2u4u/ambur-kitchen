"use client";

import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { MENU, type MenuItem } from "@/lib/menu";
import { colors, cream, goldA } from "@/lib/theme";
import { useTilt } from "@/hooks/useTilt";

type Diet = "all" | "veg" | "nonveg";
type DesktopView = "grid" | "list";
type MobileView = "photo" | "compact";

const HEADER_OFFSET = 104;
/** Mobile header + sticky chip row. */
const MOBILE_OFFSET = 148;

const DIETS: [Diet, string, string][] = [
  ["all", "ALL", colors.goldLight],
  ["veg", "VEG", colors.veg],
  ["nonveg", "NON-VEG", colors.nonVeg],
];

const sectionId = (cat: string) =>
  "cat-" + cat.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/** Segmented-control button, used by the desktop sidebar toggles. */
function seg(active: boolean): CSSProperties {
  return {
    flex: 1,
    fontFamily: "var(--font-jost), Jost, sans-serif",
    fontSize: 11,
    letterSpacing: "1.5px",
    cursor: "pointer",
    padding: "9px 4px",
    border: "none",
    background: active
      ? `linear-gradient(135deg,${colors.goldLight},${colors.gold})`
      : "transparent",
    color: active ? colors.navy : cream(0.65),
    fontWeight: active ? 600 : 400,
    transition: "all .25s ease",
  };
}

/** Pill button, used by the mobile filter dock. */
function pill(active: boolean): CSSProperties {
  return {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: "12px 4px",
    cursor: "pointer",
    fontFamily: "var(--font-jost), Jost, sans-serif",
    fontSize: 11,
    letterSpacing: "1.5px",
    fontWeight: active ? 600 : 400,
    border: active
      ? "1px solid rgba(219,165,90,.8)"
      : `1px solid ${goldA(0.28)}`,
    background: active
      ? `linear-gradient(135deg,${colors.goldLight},${colors.gold})`
      : "rgba(19,35,74,.5)",
    color: active ? colors.navy : cream(0.7),
    boxShadow: active ? "0 0 16px -4px rgba(219,165,90,.6)" : "none",
    transition: "all .3s ease",
  };
}

/**
 * A single dish. One DOM shape; `data-dv` / `data-mv` let the stylesheet
 * present it as a grid card, a list row, a photo row or a compact row.
 */
function DishCard({
  item,
  desktopView,
  mobileView,
  animation,
  delay,
}: {
  item: MenuItem;
  desktopView: DesktopView;
  mobileView: MobileView;
  animation: string;
  delay: number;
}) {
  const tilt = useTilt(9);
  const dotColor = item.veg ? colors.veg : colors.nonVeg;
  const dietLabel = item.veg ? "Vegetarian" : "Non-vegetarian";

  return (
    <article
      className="dish-card"
      data-dv={desktopView}
      data-mv={mobileView}
      onMouseMove={desktopView === "grid" ? tilt.onMouseMove : undefined}
      onMouseLeave={desktopView === "grid" ? tilt.onMouseLeave : undefined}
      style={{ animation: `${animation} .5s ${delay}s both` }}
    >
      <div
        className="dish-thumb"
        style={{
          backgroundImage: `url(${item.img}), linear-gradient(135deg,#13234a,#0E1B36)`,
        }}
      >
        <span
          className="dish-dot-thumb"
          title={dietLabel}
          style={{ background: dotColor }}
        />
        <span className="dish-price-badge">€ {item.p}</span>
      </div>

      <div className="dish-body">
        <div className="dish-head">
          <h3 className="dish-name">{item.n}</h3>
          <span
            className="dish-dot-inline"
            title={dietLabel}
            style={{ background: dotColor }}
          />
          <span className="dish-price-inline">€ {item.p}</span>
        </div>
        <p className="dish-desc">{item.d}</p>
      </div>
    </article>
  );
}

export default function MenuBrowser() {
  const [cat, setCat] = useState("All");
  const [diet, setDiet] = useState<Diet>("all");
  const [desktopView, setDesktopView] = useState<DesktopView>("grid");
  const [mobileView, setMobileView] = useState<MobileView>("photo");
  const [spy, setSpy] = useState("");
  const [dockOpen, setDockOpen] = useState(false);
  // Flipping between two identical keyframes restarts the entry stagger.
  const [epoch, setEpoch] = useState(0);

  const chipRowRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  // Scroll spy + reading-progress bar.
  useEffect(() => {
    const onScroll = () => {
      const bar = progressRef.current;
      if (bar) {
        const max =
          document.documentElement.scrollHeight - window.innerHeight;
        const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
        bar.style.width = Math.min(100, Math.max(0, pct)) + "%";
      }

      const secs = document.querySelectorAll("[data-menu-sec]");
      let current = "";
      secs.forEach((s) => {
        if (s.getBoundingClientRect().top < window.innerHeight * 0.35) {
          current = s.getAttribute("data-menu-sec") ?? "";
        }
      });
      setSpy((prev) => (prev === current ? prev : current));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Keep the active chip in view as the reader scrolls.
  useEffect(() => {
    const row = chipRowRef.current;
    if (!row) return;
    const chip = row.querySelector<HTMLElement>(
      `[data-chip="${spy || "All"}"]`,
    );
    if (chip) {
      row.scrollTo({ left: Math.max(0, chip.offsetLeft - 60), behavior: "smooth" });
    }
  }, [spy]);

  const groups = useMemo(
    () =>
      MENU.map((g, i) => ({ ...g, num: "0" + (i + 1) }))
        .filter((g) => cat === "All" || g.cat === cat)
        .map((g) => ({
          ...g,
          items: g.items.filter(
            (it) => diet === "all" || (diet === "veg" ? it.veg : !it.veg),
          ),
        }))
        .filter((g) => g.items.length > 0),
    [cat, diet],
  );

  const total = MENU.reduce((n, g) => n + g.items.length, 0);
  const shown = groups.reduce((n, g) => n + g.items.length, 0);

  const catNames = ["All", ...MENU.map((g) => g.cat)];
  const animation = epoch % 2 ? "fadeUpB" : "fadeUpA";

  const scrollToCat = (name: string, offset: number) => {
    const el = document.getElementById(sectionId(name));
    if (!el) return false;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
    return true;
  };

  /** Desktop sidebar: filters to a chapter, or scrolls when showing all. */
  const pickCat = (name: string) => {
    if (name !== "All" && cat === "All" && scrollToCat(name, HEADER_OFFSET)) {
      return;
    }
    setCat(name);
    setSpy("");
    if (name === "All") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /** Mobile chips only jump — the list always shows every chapter. */
  const jumpToCat = (name: string) => {
    if (name === "All") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    scrollToCat(name, MOBILE_OFFSET);
  };

  const changeDiet = (d: Diet) => {
    setDiet(d);
    setEpoch((e) => e + 1);
  };

  return (
    <>
      {/* ---------- Mobile: sticky chapter chips + progress ---------- */}
      <div
        className="only-mobile"
        style={{
          position: "sticky",
          top: 57,
          zIndex: 50,
          background: "rgba(10,20,40,.92)",
          backdropFilter: "blur(14px)",
          borderBottom: `1px solid ${goldA(0.18)}`,
        }}
      >
        <div
          ref={chipRowRef}
          data-snap
          style={{
            display: "flex",
            gap: 8,
            overflowX: "auto",
            padding: "12px 16px 8px",
            scrollbarWidth: "none",
          }}
        >
          {catNames.map((name, i) => {
            const active = name === "All" ? !spy : spy === name;
            return (
              <button
                key={name}
                data-chip={name}
                onClick={() => jumpToCat(name)}
                aria-current={active}
                style={{
                  flex: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  cursor: "pointer",
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: 16,
                  fontWeight: 600,
                  padding: "9px 14px",
                  border: active
                    ? "1px solid rgba(192,134,61,.7)"
                    : `1px solid ${goldA(0.25)}`,
                  background: active
                    ? `linear-gradient(135deg,${colors.goldLight},${colors.gold})`
                    : "rgba(19,35,74,.4)",
                  color: active ? colors.navy : cream(0.8),
                  boxShadow: active
                    ? "0 0 18px -4px rgba(219,165,90,.55)"
                    : "none",
                  transition: "all .25s ease",
                }}
              >
                <span
                  style={{
                    fontFamily: "ui-monospace, monospace",
                    fontSize: 10,
                    color: active ? colors.navy : goldA(0.6),
                    flex: "none",
                  }}
                >
                  {i === 0 ? "••" : "0" + i}
                </span>
                <span style={{ whiteSpace: "nowrap" }}>{name}</span>
              </button>
            );
          })}
        </div>
        <div style={{ height: 2, background: goldA(0.12) }}>
          <div
            ref={progressRef}
            style={{
              height: "100%",
              width: "0%",
              background: `linear-gradient(90deg,${colors.goldLight},${colors.gold})`,
              boxShadow: "0 0 8px rgba(219,165,90,.5)",
            }}
          />
        </div>
      </div>

      <main
        className="menu-layout page-pad"
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1340,
          margin: "0 auto",
          padding: "30px 48px 90px",
          display: "flex",
          gap: 48,
          alignItems: "flex-start",
        }}
      >
        {/* ---------- Desktop sidebar ---------- */}
        <aside
          className="menu-sidebar only-desktop"
          style={{
            position: "sticky",
            top: HEADER_OFFSET,
            width: 230,
            flex: "none",
            flexDirection: "column",
            gap: 26,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontFamily: "ui-monospace, monospace",
                fontSize: 10.5,
                letterSpacing: "3px",
                color: cream(0.4),
                marginBottom: 12,
              }}
            >
              // CHAPTERS
            </div>
            {catNames.map((name, i) => {
              const active =
                name === "All"
                  ? cat === "All" && !spy
                  : cat === name || (cat === "All" && spy === name);
              return (
                <button
                  key={name}
                  onClick={() => pickCat(name)}
                  aria-current={active}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    textAlign: "left",
                    cursor: "pointer",
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: 18,
                    fontWeight: 600,
                    padding: "9px 12px",
                    border: "none",
                    borderLeft: `2px solid ${
                      active ? colors.gold : goldA(0.18)
                    }`,
                    background: active
                      ? `linear-gradient(90deg,${goldA(0.14)},transparent)`
                      : "transparent",
                    color: active ? colors.goldLight : cream(0.78),
                    transition: "all .25s ease",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "ui-monospace, monospace",
                      fontSize: 11,
                      color: active ? colors.goldLight : goldA(0.55),
                      width: 24,
                      flex: "none",
                    }}
                  >
                    {i === 0 ? "••" : "0" + i}
                  </span>
                  <span>{name}</span>
                </button>
              );
            })}
          </div>

          <div>
            <div
              style={{
                fontFamily: "ui-monospace, monospace",
                fontSize: 10.5,
                letterSpacing: "3px",
                color: cream(0.4),
                marginBottom: 10,
              }}
            >
              // DIET
            </div>
            <div
              style={{
                display: "flex",
                border: `1px solid ${goldA(0.3)}`,
                padding: 3,
                gap: 3,
                background: "rgba(10,20,40,.5)",
                backdropFilter: "blur(8px)",
              }}
            >
              {DIETS.map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => changeDiet(key)}
                  aria-pressed={diet === key}
                  style={seg(diet === key)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div
              style={{
                fontFamily: "ui-monospace, monospace",
                fontSize: 10.5,
                letterSpacing: "3px",
                color: cream(0.4),
                marginBottom: 10,
              }}
            >
              // VIEW
            </div>
            <div
              style={{
                display: "flex",
                border: `1px solid ${goldA(0.3)}`,
                padding: 3,
                gap: 3,
                background: "rgba(10,20,40,.5)",
                backdropFilter: "blur(8px)",
              }}
            >
              <button
                onClick={() => setDesktopView("grid")}
                aria-pressed={desktopView === "grid"}
                style={seg(desktopView === "grid")}
              >
                ▦ GRID
              </button>
              <button
                onClick={() => setDesktopView("list")}
                aria-pressed={desktopView === "list"}
                style={seg(desktopView === "list")}
              >
                ☰ LIST
              </button>
            </div>
          </div>

          <div
            style={{
              border: `1px solid ${goldA(0.25)}`,
              background: "rgba(19,35,74,.35)",
              backdropFilter: "blur(8px)",
              padding: "18px 20px",
            }}
          >
            {[
              ["Vegetarian", colors.veg],
              ["Non-vegetarian", colors.nonVeg],
            ].map(([label, col], i) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 12,
                  color: cream(0.7),
                  marginBottom: i === 0 ? 6 : 0,
                }}
              >
                <span
                  style={{
                    width: 9,
                    height: 9,
                    borderRadius: "50%",
                    background: col,
                    flex: "none",
                  }}
                />{" "}
                {label}
              </div>
            ))}
          </div>
        </aside>

        {/* ---------- Dish list (shared) ---------- */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {groups.map((g) => {
            let n = 0;
            return (
              <section
                key={g.cat}
                id={sectionId(g.cat)}
                data-menu-sec={g.cat}
                className="menu-section"
                style={{
                  position: "relative",
                  marginBottom: 70,
                  scrollMarginTop: 110,
                }}
              >
                <div
                  aria-hidden
                  className="menu-section-num"
                  style={{
                    position: "absolute",
                    top: -58,
                    right: -8,
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: 170,
                    fontWeight: 700,
                    lineHeight: 1,
                    color: goldA(0.07),
                    pointerEvents: "none",
                    userSelect: "none",
                  }}
                >
                  {g.num}
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 18,
                    marginBottom: 6,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "ui-monospace, monospace",
                      fontSize: 13,
                      letterSpacing: "2px",
                      color: colors.gold,
                    }}
                  >
                    {g.num}
                  </span>
                  <h2
                    className="menu-section-title"
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: 38,
                      fontWeight: 600,
                      color: colors.goldLight,
                      margin: 0,
                    }}
                  >
                    {g.cat}
                  </h2>
                  <div
                    style={{
                      flex: 1,
                      height: 1,
                      background: `linear-gradient(90deg,${goldA(
                        0.4,
                      )},transparent)`,
                    }}
                  />
                </div>

                {g.note && (
                  <p
                    style={{
                      margin: "0 0 14px",
                      fontSize: 13.5,
                      fontStyle: "italic",
                      color: cream(0.55),
                      textWrap: "pretty",
                    }}
                  >
                    {g.note}
                  </p>
                )}

                <div
                  className={
                    desktopView === "grid" ? "dish-wrap-grid" : "dish-wrap-list"
                  }
                >
                  {g.items.map((it) => (
                    <DishCard
                      key={it.n}
                      item={it}
                      desktopView={desktopView}
                      mobileView={mobileView}
                      animation={animation}
                      delay={Math.min(n++ * 0.04, 0.4)}
                    />
                  ))}
                </div>
              </section>
            );
          })}

          {groups.length === 0 && (
            <p
              style={{
                textAlign: "center",
                marginTop: 80,
                color: cream(0.5),
              }}
            >
              No dishes match this filter.
            </p>
          )}
        </div>
      </main>

      {/* ---------- Mobile: floating filter dock ---------- */}
      <div
        className="only-mobile"
        style={{
          position: "fixed",
          left: 14,
          right: 14,
          bottom: 14,
          zIndex: 55,
          background: "rgba(8,16,32,.92)",
          backdropFilter: "blur(16px)",
          border: `1px solid ${goldA(0.45)}`,
          boxShadow:
            "0 14px 40px -10px rgba(0,0,0,.8), 0 0 24px -8px rgba(192,134,61,.35)",
          overflow: "hidden",
        }}
      >
        <button
          onClick={() => setDockOpen((v) => !v)}
          aria-expanded={dockOpen}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            width: "100%",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "14px 18px",
            color: colors.cream,
            fontFamily: "var(--font-jost), Jost, sans-serif",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: colors.goldLight,
                animation: "dockPulse 2.2s ease-out infinite",
              }}
            />
            <span
              style={{
                fontSize: 12,
                letterSpacing: "2.5px",
                fontWeight: 500,
                color: colors.goldLight,
              }}
            >
              FILTERS
            </span>
          </span>
          <span
            style={{
              fontFamily: "ui-monospace, monospace",
              fontSize: 11,
              letterSpacing: "2px",
              color: cream(0.65),
            }}
          >
            {shown} / {total} DISHES
          </span>
          <span
            style={{
              color: colors.goldLight,
              fontSize: 12,
              transform: dockOpen ? "rotate(180deg)" : "none",
              transition: "transform .4s ease",
              flex: "none",
            }}
          >
            ▴
          </span>
        </button>

        <div
          style={{
            padding: dockOpen ? "0 18px 18px" : "0 18px",
            maxHeight: dockOpen ? 240 : 0,
            opacity: dockOpen ? 1 : 0,
            transition:
              "max-height .5s cubic-bezier(.22,1,.36,1), opacity .35s ease, padding .35s ease",
          }}
        >
          <div
            style={{
              fontFamily: "ui-monospace, monospace",
              fontSize: 10,
              letterSpacing: "3px",
              color: goldA(0.7),
              margin: "2px 0 8px",
            }}
          >
            // DIET
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {DIETS.map(([key, label, col]) => (
              <button
                key={key}
                onClick={() => changeDiet(key)}
                aria-pressed={diet === key}
                style={pill(diet === key)}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: col,
                    flex: "none",
                    boxShadow: diet === key ? "none" : `0 0 8px ${col}66`,
                  }}
                />
                {label}
              </button>
            ))}
          </div>

          <div
            style={{
              fontFamily: "ui-monospace, monospace",
              fontSize: 10,
              letterSpacing: "3px",
              color: goldA(0.7),
              margin: "16px 0 8px",
            }}
          >
            // VIEW
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {(
              [
                ["photo", "▦ PHOTO"],
                ["compact", "☰ COMPACT"],
              ] as [MobileView, string][]
            ).map(([key, label]) => (
              <button
                key={key}
                onClick={() => {
                  setMobileView(key);
                  setEpoch((e) => e + 1);
                }}
                aria-pressed={mobileView === key}
                style={pill(mobileView === key)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
