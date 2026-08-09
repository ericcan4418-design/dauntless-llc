import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";

// Satoshi is loaded via @import in globals.css (Fontshare CDN)
// Instrument Serif used for all display headlines
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dauntless — We Build Entrepreneurs",
  description:
    "Dauntless is a D2D sales channel for people who want more than a job. We teach you how to sell, lead, invest, and build. No experience required.",
  metadataBase: new URL("https://dauntless-llc.vercel.app"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={instrumentSerif.variable}>
      <body>{children}</body>
    </html>
  );
}
