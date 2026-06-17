import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Dauntless LLC — Building America's Top Sales Teams",
  description:
    "Dauntless LLC identifies, recruits, and places high-performance sales talent across the United States. Specializing in D2D, pest control, solar, fiber, and insurance.",
  keywords: [
    "sales staffing",
    "sales recruiting",
    "door to door recruiting",
    "D2D sales",
    "sales talent",
    "workforce development",
  ],
  openGraph: {
    title: "Dauntless LLC — Building America's Top Sales Teams",
    description:
      "We identify, recruit, and place high-performance sales talent across the United States. From the first conversation to a signed offer — we deliver.",
    url: "https://dauntlessllc.com",
    siteName: "Dauntless LLC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dauntless LLC — Building America's Top Sales Teams",
    description:
      "We identify, recruit, and place high-performance sales talent across the United States.",
  },
  metadataBase: new URL("https://dauntlessllc.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
