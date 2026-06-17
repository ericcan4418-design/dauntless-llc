import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#080f1c] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top section */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-white font-black text-xl tracking-widest uppercase">
                DAUNTLESS
              </span>
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] inline-block" />
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Building America&apos;s top direct sales teams — one placement at a time.
            </p>
            <a
              href="mailto:eric@dauntlessllc.com"
              className="inline-flex items-center gap-2 text-[#F59E0B] text-sm hover:text-[#FCD34D] transition-colors"
            >
              <Mail size={16} />
              eric@dauntlessllc.com
            </a>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-white/50 text-sm hover:text-[#F59E0B] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Column */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Industries
            </h4>
            <ul className="space-y-3">
              {["Pest Control", "Solar", "Fiber / Telecom", "Insurance"].map((industry) => (
                <li key={industry}>
                  <a
                    href="#what-we-do"
                    className="text-white/50 text-sm hover:text-[#F59E0B] transition-colors"
                  >
                    {industry}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-white/50 text-sm hover:text-[#F59E0B] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <div>© 2025 Dauntless LLC. All rights reserved.</div>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]/60 inline-block" />
            <span>Salt Lake City, UT · Operating Nationwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
