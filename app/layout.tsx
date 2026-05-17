import type { Metadata } from "next";
import { Space_Mono, Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

const SITE = "https://m4-playground.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "M4 Playground — MSCREATIVE.SYSTEMS™",
  description:
    "Interactive playground for the M4 mascot. 5 palettes, 4 Codex shoes, 8 canonical postures, live SMIL animation. SPEC v3.1.",
  openGraph: {
    title: "M4 Playground — MSCREATIVE.SYSTEMS™",
    description:
      "Render the M4 mascot live: palettes, Codex shoes, postures, canonical SMIL motion.",
    url: SITE,
    siteName: "M4 Playground",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, type: "image/svg+xml" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "M4 Playground — MSCREATIVE.SYSTEMS™",
    description: "Render the M4 mascot live. SPEC v3.1.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceMono.variable} ${inter.variable} ${firaCode.variable}`}
    >
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
