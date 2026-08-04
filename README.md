# The Ambur Kitchen

Next.js 16 (App Router, TypeScript) port of the original bundled HTML site for
The Ambur Kitchen — a South Indian restaurant in the Netherlands.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

## Routes

| Route      | Page    | Notes                                                        |
| ---------- | ------- | ------------------------------------------------------------ |
| `/`        | Home    | Hero, journey timeline, signature carousel, parallax story, chapters |
| `/menu`    | Menu    | 71 dishes / 7 chapters, chapter + diet filters, grid & list views |
| `/about`   | About   | Story, stats, imagery                                        |
| `/contact` | Contact | Address, hours, takeaway links, reservation form (`#reserve`) |

## Structure

```
src/
  app/                    route segments + globals.css
  components/
    Header.tsx            desktop nav + mobile clip-path overlay nav
    Footer.tsx
    Reveal.tsx            IntersectionObserver fade-in wrapper
    home/                 Hero, Timeline, Signatures, SignaturesMobile,
                          StorySection, Chapters
    menu/MenuBrowser.tsx  sidebar, chip row, filter dock, dish rendering
    contact/ReservationForm.tsx
  hooks/
    useTilt.ts            pointer-driven 3D card tilt
    useParallax.ts        scroll-driven background drift
    useMediaQuery.ts      post-mount breakpoint match (gates effects only)
  lib/
    menu.ts               menu data (single source of truth)
    signatures.ts         signature dishes + chapter list
    theme.ts              colour tokens + restaurant details
public/images/            31 images extracted from the original bundle
```

## Responsive design

The desktop and mobile designs are separate compositions, not one layout that
shrinks. The breakpoint is **900px**: `max-width: 900px` is mobile,
`min-width: 901px` is desktop.

| Area              | Desktop                     | Mobile                                      |
| ----------------- | --------------------------- | ------------------------------------------- |
| Navigation        | Inline links                | Full-screen clip-path overlay, animated burger |
| Home signatures   | Crossfading card + tilt     | Swipe/snap carousel with dots, autoplay      |
| Home chapters     | Hover-to-expand row         | Tap-to-expand vertical accordion             |
| Menu controls     | Sticky sidebar              | Sticky chip row, progress bar, filter dock   |
| Menu dishes       | Grid / List                 | Photo / Compact (2-line clamp)               |
| Contact           | Info left, form right       | Form first, then info                        |

Three techniques, chosen per case:

1. **One DOM, attribute-driven** — dish cards carry `data-dv` (desktop view)
   and `data-mv` (mobile view); the stylesheet renders the same markup as a
   grid card, list row, photo row or compact row. Chapter panels work the same
   way via `data-active`. No duplicated markup for the 71-dish list.
2. **Both rendered, CSS toggles** — only where the interaction models are
   genuinely incompatible (the signature crossfade vs. the swipe carousel).
   `.only-desktop` / `.only-mobile` control visibility.
3. **`useMediaQuery`** — gates *effects* only (so the hidden carousel does not
   run a timer). It never decides what renders, which would break hydration.

Two ordering rules the stylesheet depends on, both commented in place:

- `.only-desktop` / `.only-mobile` are declared **last**. They compete with
  layout rules that also use `display: … !important`, and at equal specificity
  the later declaration wins.
- Headings that break with `<br>` on desktop keep a `{" "}` before the tag,
  because mobile hides the `<br>` and the words would otherwise run together.

## Notes on the port

- **Fonts** — the original inlined Cormorant Garamond and Jost as base64 woff2.
  These now load through `next/font/google`, which self-hosts them (no external
  requests at runtime).
- **Templating** — the original ran a custom `dc-runtime` DSL (`{{ }}` bindings,
  `sc-for`, `sc-if`, `style-hover`) over React 18 UMD builds. All of it is now
  ordinary React components with `useState` / `useEffect`.
- **Hover states** — `style-hover` attributes became CSS classes in
  `globals.css` (`.btn-primary`, `.chapter-panel`, `.tilt-card`, …).
- **Responsive layout** — ported from the dedicated `Mobile *.dc.html` designs;
  see [Responsive design](#responsive-design) above.
- **Reduced motion** — animations and the parallax/reveal effects are disabled
  under `prefers-reduced-motion: reduce`.
- **Content is unchanged** — all copy, prices, dish descriptions and imagery are
  carried over verbatim from the source files.
- **Journey timeline** — the "A century on the move" section on the home page
  comes from `About Rustic.dc.html`, a different design system (white ground,
  Gilda Display/Lora, a red accent). Its structure, copy and behaviour are
  ported as-is; the styling is mapped onto this site's palette and fonts so it
  sits with the rest of the page. It replaced the scrolling dish ticker.

## Placeholders to replace before launch

The source design shipped with dummy contact details. Update them in
`src/lib/theme.ts` (`restaurant`):

- Address — `Streetname 12, 1234 AB City, Netherlands`
- Phone — `+31 6 0000 0000`
- Email — `hello@theamburkitchen.nl`

Also outstanding:

- `/contact` — the map is a placeholder block; drop in a Google Maps embed.
- `/contact` — the THUISBEZORGD and UBER EATS links point at `#`.
- The reservation form validates and shows a confirmation, but does not submit
  anywhere. Wire it to a route handler, email service or booking provider.
