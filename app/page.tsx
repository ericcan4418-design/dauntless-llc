import { MapPin, Phone, Mail, CheckCircle, ArrowRight, Users, Clock, Globe, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-[#070E09] text-white">

      {/* ── NAV ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#070E09]/95 backdrop-blur-md border-b border-[#1F3A24]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#16A34A] rounded flex items-center justify-center">
              <span className="text-white font-black text-sm">D</span>
            </div>
            <span className="text-white font-bold text-lg tracking-wide">DAUNTLESS LLC</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/60">
            <a href="#difference" className="hover:text-[#4ADE80] transition-colors">Why Dauntless</a>
            <a href="#process" className="hover:text-[#4ADE80] transition-colors">Our Process</a>
            <a href="#verticals" className="hover:text-[#4ADE80] transition-colors">Verticals</a>
            <a href="#results" className="hover:text-[#4ADE80] transition-colors">Results</a>
            <a href="#contact" className="hover:text-[#4ADE80] transition-colors">Contact</a>
          </nav>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 bg-[#16A34A] text-white font-semibold text-sm px-5 py-2.5 rounded hover:bg-[#15803D] transition-colors"
          >
            Work With Us <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* BG texture */}
        <div className="absolute inset-0 bg-[#070E09]" />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{backgroundImage: 'radial-gradient(circle at 25% 40%, #16A34A 0%, transparent 60%), radial-gradient(circle at 75% 70%, #166534 0%, transparent 60%)'}} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4ADE80]/30 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-28 pb-20">
          {/* Label */}
          <div className="inline-flex items-center gap-2 border border-[#1F3A24] bg-[#111F15] rounded-full px-4 py-2 mb-10">
            <div className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
            <span className="text-[#4ADE80] text-xs font-semibold tracking-widest uppercase">D2D Sales Recruiting · Nationwide</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-6xl md:text-8xl font-black tracking-tight mb-6 leading-[0.95]">
            We Build<br />
            <span className="text-[#4ADE80]">Elite Teams.</span>
          </h1>

          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            Dauntless LLC sources, screens, and places high-performance direct sales reps into pest control, solar, fiber, and insurance programs—in 48 hours or less.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#contact"
              className="flex items-center gap-2 bg-[#16A34A] text-white font-bold px-8 py-4 rounded text-base hover:bg-[#15803D] transition-colors shadow-lg shadow-[#16A34A]/20"
            >
              Work With Us <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#difference"
              className="flex items-center gap-2 border border-[#1F3A24] text-white/70 font-semibold px-8 py-4 rounded text-base hover:border-[#16A34A] hover:text-[#4ADE80] transition-colors"
            >
              See How We're Different
            </a>
          </div>

          {/* Inline stat pills */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#16A34A]" /> 500+ Reps Placed</span>
            <span className="w-px h-4 bg-white/20" />
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#16A34A]" /> 48hr Avg Placement</span>
            <span className="w-px h-4 bg-white/20" />
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#16A34A]" /> All 50 States</span>
            <span className="w-px h-4 bg-white/20" />
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#16A34A]" /> Zero Cost to Candidates</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20">
          <div className="w-px h-12 bg-gradient-to-b from-[#16A34A]/40 to-transparent" />
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-[#16A34A] py-5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: "500+", label: "Reps Placed" },
            { num: "48hr", label: "Avg Placement Speed" },
            { num: "50", label: "States Covered" },
            { num: "4", label: "Active Verticals" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-white font-black text-3xl">{s.num}</div>
              <div className="text-white/70 text-sm font-medium mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── THE DAUNTLESS DIFFERENCE // 001 ── */}
      <section id="difference" className="py-28 px-6 bg-[#0C1A10]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-[#4ADE80] text-xs font-semibold tracking-widest uppercase mb-3">THE DAUNTLESS DIFFERENCE // 001</p>
            <h2 className="font-serif text-5xl md:text-6xl font-black leading-tight mb-6">
              Not a job board.<br />
              <span className="text-[#4ADE80]">A recruiting machine.</span>
            </h2>
            <p className="text-white/55 text-lg max-w-2xl leading-relaxed">
              There are thousands of recruiting firms. Here's what separates every Dauntless placement from the rest of the market.
            </p>
          </div>

          {/* Comparison table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left">
                  <th className="py-4 pr-8 text-white/40 font-medium w-1/4">What matters</th>
                  <th className="py-4 px-6 text-[#4ADE80] font-bold text-center bg-[#111F15] border border-[#1F3A24] rounded-t-xl">Dauntless LLC</th>
                  <th className="py-4 px-6 text-white/40 font-medium text-center">Job Boards</th>
                  <th className="py-4 px-6 text-white/40 font-medium text-center">Generic Recruiters</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Candidate quality", "Pre-screened, motivated, D2D-ready", "Unfiltered volume", "Resume-only vetting"],
                  ["Time to placement", "48 hours average", "1–3 weeks", "2–4 weeks"],
                  ["Industry knowledge", "D2D specialists only", "None", "Generalist"],
                  ["Onboarding support", "Full pre-field prep included", "None", "None"],
                  ["Cost to clients", "Performance-aligned", "Flat posting fee", "30% of salary"],
                  ["Nationwide reach", "All 50 states", "Limited markets", "Regional only"],
                ].map(([label, dauntless, boards, generic], i) => (
                  <tr key={label} className={i % 2 === 0 ? "bg-[#070E09]" : "bg-transparent"}>
                    <td className="py-4 pr-8 text-white/60 font-medium">{label}</td>
                    <td className="py-4 px-6 text-[#4ADE80] font-semibold text-center bg-[#111F15] border-x border-[#1F3A24]">{dauntless}</td>
                    <td className="py-4 px-6 text-white/40 text-center">{boards}</td>
                    <td className="py-4 px-6 text-white/40 text-center">{generic}</td>
                  </tr>
                ))}
                <tr>
                  <td className="py-4 pr-8" />
                  <td className="py-3 px-6 bg-[#111F15] border border-[#1F3A24] rounded-b-xl text-center">
                    <a href="#contact" className="inline-flex items-center gap-2 bg-[#16A34A] text-white text-xs font-bold px-4 py-2 rounded hover:bg-[#15803D] transition-colors">
                      Work With Us <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </td>
                  <td /><td />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── OUR PROCESS // 002 ── */}
      <section id="process" className="py-28 px-6 bg-[#070E09]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <p className="text-[#4ADE80] text-xs font-semibold tracking-widest uppercase mb-3">OUR PROCESS // 002</p>
            <h2 className="font-serif text-5xl md:text-6xl font-black mb-6">
              Reps in the field.<br />
              <span className="text-[#4ADE80]">In three steps.</span>
            </h2>
            <p className="text-white/55 text-lg max-w-xl mx-auto">
              We run a tight process. No drawn-out timelines, no HR bureaucracy. You tell us what you need — we deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-0 relative">
            {/* connector line */}
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-px bg-gradient-to-r from-[#1F3A24] via-[#16A34A]/40 to-[#1F3A24]" />

            {[
              {
                n: "01",
                title: "Tell Us What You Need",
                body: "Share your vertical, market, headcount target, and timeline. We scope the engagement in one call — usually under 30 minutes.",
                icon: Phone,
              },
              {
                n: "02",
                title: "We Source & Screen",
                body: "Our pipeline pulls from 50 states. Every candidate is screened for drive, coachability, and fit before they ever reach you.",
                icon: Users,
              },
              {
                n: "03",
                title: "Your Rep Is in the Field",
                body: "We handle the placement, intro, and pre-field prep. Your new rep arrives ready to produce — not guessing.",
                icon: TrendingUp,
              },
            ].map(({ n, title, body, icon: Icon }) => (
              <div key={n} className="relative flex flex-col items-center text-center p-8">
                <div className="w-20 h-20 rounded-full bg-[#111F15] border-2 border-[#16A34A] flex items-center justify-center mb-6 z-10">
                  <span className="text-[#4ADE80] font-black text-xl">{n}</span>
                </div>
                <Icon className="w-6 h-6 text-[#16A34A] mb-4" />
                <h3 className="text-white font-bold text-xl mb-3">{title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VERTICALS // 003 ── */}
      <section id="verticals" className="py-28 px-6 bg-[#0C1A10]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-[#4ADE80] text-xs font-semibold tracking-widest uppercase mb-3">INDUSTRIES WE SERVE // 003</p>
            <h2 className="font-serif text-5xl md:text-6xl font-black mb-6">
              Four verticals.<br />
              <span className="text-[#4ADE80]">One playbook.</span>
            </h2>
            <p className="text-white/55 text-lg max-w-2xl">
              We don't recruit for everyone. We recruit for the four highest-velocity D2D verticals in the country — and we know them cold.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                emoji: "🐛",
                label: "Pest Control",
                tag: "Summer + Year-Round",
                desc: "High-volume D2D summer routes. We source relocated reps, regional team builders, and full-time technicians. Our pest control pipeline is the largest in our network.",
                stats: ["$20–30K / summer typical", "80–120 doors/day cadence", "Housing + relocation handled"],
              },
              {
                emoji: "☀️",
                label: "Solar",
                tag: "Year-Round · Highest Ceiling",
                desc: "Residential and commercial solar sales. High-ticket, residual upside. We screen specifically for reps who can close at the door — not just knock.",
                stats: ["$3–8K / month average", "Residual commission structure", "All major solar markets"],
              },
              {
                emoji: "🌐",
                label: "Fiber & Telecom",
                tag: "Year-Round",
                desc: "D2D and in-home internet & telecom sales. Consistent programs with strong training. Great entry point for new reps scaling into bigger verticals.",
                stats: ["Consistent monthly volume", "ISP & fiber providers", "In-home + door-to-door"],
              },
              {
                emoji: "🛡️",
                label: "Insurance",
                tag: "Licensed + Pre-Licensed",
                desc: "P&C, life, and health placement. Warm leads available in some programs. Highest residual income potential across all four verticals.",
                stats: ["$1–2K / week common", "30+ warm leads in select programs", "Long-term residual upside"],
              },
            ].map(({ emoji, label, tag, desc, stats }) => (
              <div
                key={label}
                className="bg-[#111F15] border border-[#1F3A24] rounded-2xl p-8 hover:border-[#16A34A]/60 transition-colors group"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{emoji}</span>
                  <span className="text-[#4ADE80] text-xs font-semibold bg-[#16A34A]/10 border border-[#16A34A]/30 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                </div>
                <h3 className="text-white font-bold text-2xl mb-3 group-hover:text-[#4ADE80] transition-colors">{label}</h3>
                <p className="text-white/55 text-sm leading-relaxed mb-5">{desc}</p>
                <ul className="space-y-2">
                  {stats.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-white/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#16A34A] flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULTS // 004 ── */}
      <section id="results" className="py-28 px-6 bg-[#070E09]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#4ADE80] text-xs font-semibold tracking-widest uppercase mb-3">BY THE NUMBERS // 004</p>
            <h2 className="font-serif text-5xl md:text-6xl font-black mb-4">
              The results<br />
              <span className="text-[#4ADE80]">speak for themselves.</span>
            </h2>
            <p className="text-white/55 text-lg max-w-xl mx-auto">
              Real placements. Real numbers. No inflated projections.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { n: "500+", sub: "Reps placed", detail: "across all 50 states" },
              { n: "48hr", sub: "Avg placement speed", detail: "from brief to intro" },
              { n: "4", sub: "Active verticals", detail: "pest · solar · fiber · insurance" },
              { n: "$0", sub: "Cost to candidates", detail: "always free to apply" },
            ].map(({ n, sub, detail }) => (
              <div key={n} className="bg-[#111F15] border border-[#1F3A24] rounded-2xl p-6 text-center">
                <div className="text-[#4ADE80] font-black text-5xl mb-2">{n}</div>
                <div className="text-white font-semibold text-sm mb-1">{sub}</div>
                <div className="text-white/40 text-xs">{detail}</div>
              </div>
            ))}
          </div>

          {/* Earnings grid */}
          <div className="bg-[#111F15] border border-[#1F3A24] rounded-2xl p-8">
            <h3 className="text-white font-bold text-xl mb-6 text-center">What top performers earn by vertical</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { v: "Pest Control", earn: "$20–30K", period: "per summer season" },
                { v: "Solar", earn: "$80–250K", period: "per year" },
                { v: "Insurance", earn: "$60–200K", period: "per year" },
                { v: "Fiber / Telecom", earn: "$50–100K", period: "per year" },
              ].map(({ v, earn, period }) => (
                <div key={v}>
                  <div className="text-[#4ADE80] font-black text-3xl mb-1">{earn}</div>
                  <div className="text-white/70 text-sm font-medium mb-1">{period}</div>
                  <div className="text-white/35 text-xs">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS // 005 ── */}
      <section className="py-28 px-6 bg-[#0C1A10]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#4ADE80] text-xs font-semibold tracking-widest uppercase mb-3">WHAT THEY SAY // 005</p>
            <h2 className="font-serif text-5xl font-black">
              Real people.<br />
              <span className="text-[#4ADE80]">Real results.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Marcus T.",
                vertical: "Pest Control · Texas",
                date: "Summer 2026",
                quote: "Zero sales experience. Dauntless got me placed in a pest control program in 36 hours. I cleared $6,800 my first month. Best decision I've made.",
              },
              {
                name: "Jordan W.",
                vertical: "Solar · California",
                date: "Q1 2026",
                quote: "I'd been applying to solar jobs for three weeks with no response. Dauntless had me on the phone with a hiring manager the next day. $140K my first full year.",
              },
              {
                name: "Priya S.",
                vertical: "Insurance · Florida",
                date: "March 2026",
                quote: "I appreciated that they told me exactly what to expect before I started — pay cycle, culture, everything. No surprises. Placed with a program I'm still with.",
              },
            ].map(({ name, vertical, date, quote }) => (
              <div key={name} className="bg-[#111F15] border border-[#1F3A24] rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-[#16A34A]/20 border border-[#16A34A]/40 flex items-center justify-center">
                    <span className="text-[#4ADE80] font-bold text-sm">{name[0]}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{name}</div>
                    <div className="text-white/40 text-xs">{vertical} · {date}</div>
                  </div>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">"{quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT // 006 ── */}
      <section id="contact" className="py-28 px-6 bg-[#070E09]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#4ADE80] text-xs font-semibold tracking-widest uppercase mb-3">WORK WITH US // 006</p>
          <h2 className="font-serif text-5xl md:text-6xl font-black mb-6">
            Ready to build<br />
            <span className="text-[#4ADE80]">your team?</span>
          </h2>
          <p className="text-white/55 text-lg mb-12 leading-relaxed max-w-xl mx-auto">
            Whether you need one rep or a hundred, we can move fast. Tell us about your program and we'll respond same business day.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              { icon: Mail, label: "Email", value: "eric@dauntlessllc.com", href: "mailto:eric@dauntlessllc.com" },
              { icon: Phone, label: "Call / Text", value: "+1 (801) 555-0100", href: "tel:+18015550100" },
              { icon: MapPin, label: "Based In", value: "Salt Lake City, UT — Operating Nationwide", href: "#" },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="bg-[#111F15] border border-[#1F3A24] rounded-xl p-5 text-left hover:border-[#16A34A]/60 transition-colors group"
              >
                <Icon className="w-5 h-5 text-[#16A34A] mb-3" />
                <div className="text-white/40 text-xs uppercase tracking-wider mb-1">{label}</div>
                <div className="text-white/80 text-sm font-medium group-hover:text-[#4ADE80] transition-colors">{value}</div>
              </a>
            ))}
          </div>

          <a
            href="mailto:eric@dauntlessllc.com"
            className="inline-flex items-center gap-2 bg-[#16A34A] text-white font-bold px-12 py-5 rounded text-base hover:bg-[#15803D] transition-colors shadow-xl shadow-[#16A34A]/15"
          >
            Send Us a Message <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#040A06] border-t border-[#1F3A24] py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-[#16A34A] rounded flex items-center justify-center">
              <span className="text-white font-black text-xs">D</span>
            </div>
            <span className="text-white/60 font-semibold">Dauntless LLC</span>
            <span className="ml-1">· Salt Lake City, UT · EIN 99-1956370</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="hover:text-[#4ADE80] transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-[#4ADE80] transition-colors">Terms of Service</a>
          </div>
          <div>© {new Date().getFullYear()} Dauntless LLC. All rights reserved.</div>
        </div>
      </footer>

    </div>
  );
}
