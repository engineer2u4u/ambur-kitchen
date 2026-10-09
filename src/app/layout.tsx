import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { LanguageProvider } from "@/lib/LanguageProvider";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cormorant",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: {
    default: "The Ambur Kitchen — Soul of Indian Cuisine",
    template: "%s · The Ambur Kitchen",
  },
  description:
    "Heritage Ambur biryani and South Indian cooking in the Netherlands — slow-cooked, spice-layered and served with Dutch warmth.",
  icons: { icon: "/images/logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
