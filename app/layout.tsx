import type { Metadata } from "next";
import { Instrument_Serif, Geist } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dauntless — We Build Entrepreneurs",
  description:
    "Dauntless is a D2D sales channel for people who want more than a job. We teach you how to sell, lead, invest, and build. No experience required — just will and coachability.",
  keywords: ["D2D sales", "entrepreneur", "sales training", "financial independence", "recruiting"],
  openGraph: {
    title: "Dauntless — We Build Entrepreneurs",
    description:
      "No experience required. Just will, coachability, and the hunger to build something real.",
    url: "https://dauntless-llc.vercel.app",
    siteName: "Dauntless",
    type: "website",
  },
  metadataBase: new URL("https://dauntless-llc.vercel.app"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${geist.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
