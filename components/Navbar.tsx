"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "About", href: "#about" },
    { label: "Industries", href: "#what-we-do" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D1627]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-white font-black text-xl tracking-widest uppercase">
            DAUNTLESS
          </span>
          <span className="w-2 h-2 rounded-full bg-[#F59E0B] inline-block" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          {links.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className="hover:text-[#F59E0B] transition-colors cursor-pointer bg-transparent border-0 font-medium"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="mailto:eric@dauntlessllc.com"
          className="hidden md:inline-flex items-center bg-[#F59E0B] text-[#0D1627] font-bold text-sm px-5 py-2.5 rounded hover:bg-[#D97706] transition-colors shadow-md shadow-[#F59E0B]/20"
        >
          Partner With Us
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white/80 hover:text-[#F59E0B] transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0D1627] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className="text-white/80 hover:text-[#F59E0B] transition-colors text-left text-base font-medium bg-transparent border-0 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <a
            href="mailto:eric@dauntlessllc.com"
            className="bg-[#F59E0B] text-[#0D1627] font-bold text-sm px-5 py-3 rounded text-center hover:bg-[#D97706] transition-colors mt-2"
          >
            Partner With Us
          </a>
        </div>
      )}
    </header>
  );
}
