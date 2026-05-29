import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D1627]/95 backdrop-blur border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#F59E0B] rounded flex items-center justify-center">
                <span className="text-[#0D1627] font-black text-sm">D</span>
              </div>
              <span className="text-white font-bold text-lg tracking-wide">
                DAUNTLESS LLC
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
              <a href="#about" className="hover:text-[#F59E0B] transition-colors">
                About
              </a>
              <a href="#what-we-do" className="hover:text-[#F59E0B] transition-colors">
                What We Do
              </a>
              <a href="#contact" className="hover:text-[#F59E0B] transition-colors">
                Contact
              </a>
            </nav>
            <a
              href="mailto:eric@dauntlessllc.com"
              className="hidden md:inline-flex bg-[#F59E0B] text-[#0D1627] font-semibold text-sm px-4 py-2 rounded hover:bg-[#D97706] transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-[#080f1c] border-t border-white/10 py-10">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
            <div>
              <span className="text-white/70 font-semibold">Dauntless LLC</span>
              <span className="ml-2">· Salt Lake City, UT</span>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="/privacy"
                className="hover:text-[#F59E0B] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="hover:text-[#F59E0B] transition-colors"
              >
                Terms of Service
              </a>
            </div>
            <div>© {new Date().getFullYear()} Dauntless LLC. All rights reserved.</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
