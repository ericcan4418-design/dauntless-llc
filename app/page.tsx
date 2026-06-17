import { Bug, Sun, Globe, Shield, Mail, MapPin, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="bg-[#0D1627] text-white">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D1627] via-[#1a2744] to-[#0D1627]" />
          {/* Gold accent top line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent" />
          {/* Glow blobs */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#F59E0B] blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[#F59E0B] blur-3xl" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-12">
            {/* Trusted badge */}
            <div className="inline-flex items-center gap-2 bg-[#F59E0B]/10 border border-[#F59E0B]/30 rounded-full px-5 py-2 mb-6 animate-pulse">
              <div className="w-2 h-2 rounded-full bg-[#F59E0B]" />
              <span className="text-[#F59E0B] text-sm font-semibold tracking-wider uppercase">
                Trusted by 50+ Companies Nationwide
              </span>
            </div>

            {/* Category badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
              <span className="text-white/60 text-xs font-medium tracking-wider uppercase">
                Sales Staffing &amp; Recruiting
              </span>
            </div>

            <h1
              className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              DAUNTLESS LLC
            </h1>

            <p className="text-xl md:text-2xl text-[#F59E0B] font-semibold mb-6 tracking-wide">
              Building America&apos;s Top Sales Teams
            </p>

            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
              We identify, recruit, and place high-performance sales talent across
              the United States. From the first conversation to a signed offer —
              we deliver.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:eric@dauntlessllc.com"
                className="bg-[#F59E0B] text-[#0D1627] font-bold px-8 py-4 rounded text-base hover:bg-[#D97706] transition-colors shadow-lg shadow-[#F59E0B]/20"
              >
                Contact Us
              </a>
              <a
                href="#about"
                className="border border-white/20 text-white font-semibold px-8 py-4 rounded text-base hover:border-[#F59E0B] hover:text-[#F59E0B] transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
          </div>
        </section>

        {/* Stats Bar — with animated gold glow */}
        <section className="relative bg-[#F59E0B] py-6 overflow-hidden">
          {/* Animated shimmer overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F59E0B] via-[#FCD34D] to-[#F59E0B] opacity-60 animate-pulse" />
          {/* Subtle glow border top/bottom */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "500+", label: "Reps Placed" },
              { value: "10+", label: "Industries Served" },
              { value: "50", label: "States Nationwide" },
              { value: "98%", label: "Client Retention" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-[#0D1627] font-black text-3xl">
                  {stat.value}
                </div>
                <div className="text-[#0D1627]/70 text-sm font-medium mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-px w-8 bg-[#F59E0B]" />
                <span className="text-[#F59E0B] text-sm font-semibold uppercase tracking-wider">
                  About Us
                </span>
              </div>
              <h2
                className="text-4xl md:text-5xl font-black mb-6 leading-tight"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Built to Build <br />
                <span className="text-[#F59E0B]">Elite Teams</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Dauntless LLC was founded with one mission: to connect the nation&apos;s
                best direct sales companies with the talent they need to grow.
                We specialize in identifying, vetting, and placing high-performance
                sales representatives who can perform from day one.
              </p>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                We understand that a great hire isn&apos;t just someone who can sell —
                it&apos;s someone who fits your culture, understands your product, and
                has the drive to build a career. That&apos;s what we recruit for.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Industry expertise",
                  "Nationwide network",
                  "Speed to hire",
                  "Quality guarantee",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#F59E0B]/20 border border-[#F59E0B]/50 flex items-center justify-center flex-shrink-0">
                      <Check size={10} className="text-[#F59E0B]" />
                    </div>
                    <span className="text-white/80 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[#F59E0B]/5 rounded-2xl border border-[#F59E0B]/10 -rotate-3" />
              <div className="relative bg-[#1a2744] rounded-2xl border border-white/10 p-8">
                <h3 className="text-[#F59E0B] font-bold text-xl mb-6">
                  Our Approach
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      step: "01",
                      title: "Source",
                      desc: "Tap into our nationwide candidate network to find qualified, motivated sales talent.",
                    },
                    {
                      step: "02",
                      title: "Screen",
                      desc: "Multi-stage vetting process — background, attitude, track record, and culture fit.",
                    },
                    {
                      step: "03",
                      title: "Place",
                      desc: "Match the right rep to the right company and market. Done fast, done right.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="text-[#F59E0B]/40 font-black text-xl w-8 flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <div className="text-white font-semibold mb-1">
                          {item.title}
                        </div>
                        <div className="text-white/50 text-sm leading-relaxed">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section id="what-we-do" className="py-24 px-6 bg-[#080f1c]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-px w-8 bg-[#F59E0B]" />
                <span className="text-[#F59E0B] text-sm font-semibold uppercase tracking-wider">
                  What We Do
                </span>
                <div className="h-px w-8 bg-[#F59E0B]" />
              </div>
              <h2
                className="text-4xl md:text-5xl font-black mb-4"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Industries We Serve
              </h2>
              <p className="text-white/60 max-w-xl mx-auto">
                We partner with companies across high-velocity sales verticals to
                source and vet candidates who are ready to perform.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                {
                  Icon: Bug,
                  title: "Pest Control",
                  desc: "D2D summer sales, technician recruiting, and regional expansion teams.",
                },
                {
                  Icon: Sun,
                  title: "Solar",
                  desc: "Residential and commercial solar sales reps across all major markets.",
                },
                {
                  Icon: Globe,
                  title: "Fiber / Telecom",
                  desc: "Door-to-door and in-store reps for internet and telecom providers.",
                },
                {
                  Icon: Shield,
                  title: "Insurance",
                  desc: "Licensed and pre-licensed agents for P&C, life, and health lines.",
                },
              ].map(({ Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-[#1a2744] border border-white/10 rounded-xl p-6 hover:border-[#F59E0B]/30 transition-colors group"
                >
                  <div className="mb-4 text-[#F59E0B]">
                    <Icon size={36} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#F59E0B] transition-colors">
                    {title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#1a2744] border border-[#F59E0B]/20 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-3xl font-black mb-4">
                    Direct Sales Recruiting,{" "}
                    <span className="text-[#F59E0B]">Done Right</span>
                  </h3>
                  <p className="text-white/60 leading-relaxed mb-6">
                    From single-market placements to multi-state expansion campaigns,
                    Dauntless LLC has the infrastructure to support your growth.
                    We don&apos;t just send résumés — we build teams.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "High-volume candidate pipelines",
                      "Pre-screened, motivation-vetted applicants",
                      "Nationwide reach, local market knowledge",
                      "Fast turnaround — candidates in days, not weeks",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check
                          size={16}
                          className="text-[#F59E0B] mt-0.5 flex-shrink-0"
                        />
                        <span className="text-white/70 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center">
                  <div className="inline-block bg-[#F59E0B]/10 border border-[#F59E0B]/30 rounded-2xl p-8">
                    <div className="text-6xl font-black text-[#F59E0B] mb-2">D2D</div>
                    <div className="text-white/60 text-sm">
                      Door-to-Door Specialists
                    </div>
                    <div className="mt-6 text-white/40 text-xs leading-relaxed max-w-48 mx-auto">
                      We live and breathe direct sales recruiting. It&apos;s not what
                      we do — it&apos;s all we do.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-[#F59E0B]" />
              <span className="text-[#F59E0B] text-sm font-semibold uppercase tracking-wider">
                Get In Touch
              </span>
              <div className="h-px w-8 bg-[#F59E0B]" />
            </div>
            <h2
              className="text-4xl md:text-5xl font-black mb-6"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Ready to Build Your Team?
            </h2>
            <p className="text-white/60 text-lg mb-12 leading-relaxed">
              Whether you&apos;re hiring one rep or launching a 100-person sales army,
              we&apos;re ready to help. Reach out today.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="bg-[#1a2744] border border-white/10 rounded-xl p-6 text-left hover:border-[#F59E0B]/30 transition-colors">
                <div className="text-[#F59E0B] mb-3">
                  <Mail size={24} />
                </div>
                <div className="text-white/50 text-xs uppercase tracking-wider mb-1">
                  Email
                </div>
                <a
                  href="mailto:eric@dauntlessllc.com"
                  className="text-white font-semibold hover:text-[#F59E0B] transition-colors"
                >
                  eric@dauntlessllc.com
                </a>
              </div>
              <div className="bg-[#1a2744] border border-white/10 rounded-xl p-6 text-left hover:border-[#F59E0B]/30 transition-colors">
                <div className="text-[#F59E0B] mb-3">
                  <MapPin size={24} />
                </div>
                <div className="text-white/50 text-xs uppercase tracking-wider mb-1">
                  Location
                </div>
                <div className="text-white font-semibold">Salt Lake City, UT</div>
                <div className="text-white/40 text-sm">Operating Nationwide</div>
              </div>
            </div>

            <a
              href="mailto:eric@dauntlessllc.com"
              className="inline-flex items-center gap-2 bg-[#F59E0B] text-[#0D1627] font-bold px-10 py-4 rounded text-base hover:bg-[#D97706] transition-colors shadow-lg shadow-[#F59E0B]/20"
            >
              <Mail size={18} />
              Send Us a Message
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
