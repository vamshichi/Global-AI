import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/newsreader/400.css";
import "@fontsource/newsreader/400-italic.css";
import "@fontsource/newsreader/500.css";
import "@fontsource/newsreader/600-italic.css";
import "./globals.css";

const siteUrl = "https://www.aigrcssummit.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Global AI GRCS Summit India 2026 | AI Governance, Risk & Compliance",
  description:
    "Global AI GRCS Summit India 2026 brings together senior leaders, regulators, risk officers, CISOs, CIOs and boards shaping trusted AI governance in India.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Global AI GRCS Summit India 2026",
    description:
      "From AI Adoption to AI Accountability. One day, one room, every regulator, risk officer and board that matters. 26 November 2026, Mumbai.",
    url: siteUrl,
    siteName: "Global AI GRCS Summit India 2026",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global AI GRCS Summit India 2026",
    description: "From AI Adoption to AI Accountability. 26 November 2026, Mumbai.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-void font-sans text-ink antialiased selection:bg-signal selection:text-void">
        {children}
      </body>
    </html>
  );
}
