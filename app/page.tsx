import {
  ArrowRight,
  Bug,
  Sun,
  Wifi,
  ShieldCheck,
  MessageSquare,
  ScanSearch,
  Rocket,
  Check,
  Minus,
  Mail,
  Phone,
  MapPin,
  Users,
  Timer,
  Globe,
  Layers,
} from "lucide-react";

/* ─── palette ──────────────────────────────────────────────
   bg          #070E09   deep forest black
   bg-alt      #0B1510   alternate section
   card        #0F1D12   card surfaces
   border      #1C3320   all borders
   green       #1A7A40   primary green (used sparingly)
   green-hi    #22C55E   highlight / data green
   white       #FFFFFF
   muted       rgba(255,255,255,0.50)
──────────────────────────────────────────────────────────── */

const NAV_LINKS = [
  { href: "#why", label: "Why Dauntless" },
  { href: "#process", label: "Process" },
  { href: "#verticals", label: "Verticals" },
  { href: "#results", label: "Results" },
  { href: "#contact", label: "Contact" },
];

const STATS = [
  { value: "500+", label: "Reps placed" },
  { value: "48 hr", label: "Avg placement" },
  { value: "50", label: "States covered" },
  { value: "4", label: "Active verticals" },
];

const WHY_ROWS = [
  { label: "Candidate quality",      us: "Pre-screened, D2D-ready",  boards: "Unfiltered",      generic: "Resume-only" },
  { label: "Time to placement",      us: "48 hours average",          boards: "1–3 weeks",       generic: "2–4 weeks"  },
  { label: "Industry knowledge",     us: "D2D specialists only",      boards: "None",            generic: "Generalist" },
  { label: "Onboarding support",     us: "Pre-field prep included",   boards: "None",            generic: "None"       },
  { label: "Nationwide reach",       us: "All 50 states",             boards: "Limited",         generic: "Regional"   },
  { label: "Cost to candidates",     us: "$0 — always free",          boards: "Varies",          generic: "Varies"     },
];

const VERTICALS = [
  {
    Icon: Bug,
    label: "Pest Control",
    tag: "Summer + Year-Round",
    body: "High-volume D2D summer routes. We source relocated reps, regional team builders, and full-time technicians. Our pest control pipeline is the largest in our network.",
    bullets: ["$20–30K typical per summer", "80–120 doors/day cadence", "Relocation logistics handled"],
  },
  {
    Icon: Sun,
    label: "Solar",
    tag: "Highest Ceiling · Year-Round",
    body: "Residential and commercial solar sales. High-ticket, residual upside. We screen specifically for reps who can close at the door — not just knock.",
    bullets: ["$3–8K/month average", "Residual commission structure", "All major solar markets"],
  },
  {
    Icon: Wifi,
    label: "Fiber & Telecom",
    tag: "Year-Round",
    body: "D2D and in-home internet & telecom sales. Consistent programs with strong training infrastructure. Solid entry point for reps scaling into higher-ticket verticals.",
    bullets: ["Consistent monthly volume", "ISP & fiber providers", "In-home + door-to-door"],
  },
  {
    Icon: ShieldCheck,
    label: "Insurance",
    tag: "Licensed + Pre-Licensed",
    body: "P&C, life, and health placement. Warm leads available in select programs. Highest residual income potential across all four verticals we operate in.",
    bullets: ["$1–2K/week common", "30+ warm leads in select programs", "Long-term residual upside"],
  },
];

const PROCESS_STEPS = [
  {
    n: "01",
    Icon: MessageSquare,
    title: "Tell Us What You Need",
    body: "Share your vertical, market, headcount target, and timeline. We scope the engagement in one call — usually under 30 minutes.",
  },
  {
    n: "02",
    Icon: ScanSearch,
    title: "We Source & Screen",
    body: "Our pipeline pulls from 50 states. Every candidate is filtered for drive, coachability, and fit before they reach you.",
  },
  {
    n: "03",
    Icon: Rocket,
    title: "Your Rep Is in the Field",
    body: "We handle the placement, introduction, and pre-field prep. Your rep arrives ready to produce on day one.",
  },
];

const TESTIMONIALS = [
  {
    name: "Marcus T.",
    context: "Pest Control · Texas · Summer 2026",
    quote: "Zero sales experience. Dauntless had me placed in 36 hours. I cleared $6,800 my first month. Best decision I've made.",
  },
  {
    name: "Jordan W.",
    context: "Solar · California · Q1 2026",
    quote: "Three weeks applying on job boards with no response. Dauntless had me on the phone with a hiring manager the next day. $140K my first full year.",
  },
  {
    name: "Priya S.",
    context: "Insurance · Florida · March 2026",
    quote: "They told me exactly what to expect before I started — pay cycle, culture, everything. No surprises. I'm still with the same program.",
  },
];

const EARNINGS = [
  { vertical: "Pest Control", range: "$20–30K", period: "per summer" },
  { vertical: "Solar",        range: "$80–250K", period: "per year"   },
  { vertical: "Insurance",    range: "$60–200K", period: "per year"   },
  { vertical: "Fiber",        range: "$50–100K", period: "per year"   },
];

/* ─── Section label ──────────────────────────────────────── */
function Label({ n, text }: { n: string; text: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="text-[#22C55E] text-xs font-mono font-semibold tracking-widest">{n}</span>
      <div className="h-px w-8 bg-[#1C3320]" />
      <span className="text-white/35 text-xs font-semibold tracking-widest uppercase">{text}</span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-[#070E09] text-white">

      {/* ══ NAV ══════════════════════════════════════════════ */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#070E09]/96 backdrop-blur border-b border-[#1C3320]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded bg-[#1A7A40] flex items-center justify-center">
              <span className="text-white font-black text-xs tracking-tight">D</span>
            </div>
            <span className="text-white font-bold text-sm tracking-wide uppercase">Dauntless LLC</span>
          </div>

          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(({ href, label }) => (
              <a key={href} href={href} className="text-white/50 text-sm hover:text-white transition-colors">
                {label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:flex items-center gap-1.5 bg-[#1A7A40] text-white text-sm font-semibold px-4 py-2 rounded hover:bg-[#166534] transition-colors"
          >
            Work With Us <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* ══ HERO ═════════════════════════════════════════════ */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-16">
        <div className="max-w-4xl mx-auto text-center">

          <p className="text-[#22C55E] text-xs font-mono tracking-widest uppercase mb-8">
            D2D Sales Recruiting · Nationwide · Est. 2024
          </p>

          <h1 className="font-serif text-[clamp(3.5rem,10vw,7rem)] font-black leading-[0.9] tracking-tight mb-8">
            We Build<br />
            America's Best<br />
            <em className="not-italic text-[#22C55E]">Sales Teams.</em>
          </h1>

          <p className="text-white/55 text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Dauntless LLC sources, screens, and places high-performance D2D reps into pest control, solar, fiber, and insurance programs — in 48 hours or less.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#contact"
              className="flex items-center gap-2 bg-[#1A7A40] text-white font-semibold px-7 py-3.5 rounded hover:bg-[#166534] transition-colors text-sm"
            >
              Work With Us <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#why"
              className="flex items-center gap-2 border border-[#1C3320] text-white/55 font-medium px-7 py-3.5 rounded hover:border-[#1A7A40] hover:text-white transition-colors text-sm"
            >
              See How We're Different
            </a>
          </div>
        </div>
      </section>

      {/* ══ STATS STRIP ══════════════════════════════════════ */}
      <div className="border-y border-[#1C3320] bg-[#0B1510]">
        <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-[#1C3320]">
          {STATS.map(({ value, label }) => (
            <div key={label} className="px-8 text-center first:pl-0 last:pr-0">
              <div className="text-[#22C55E] font-mono font-bold text-3xl mb-1">{value}</div>
              <div className="text-white/40 text-xs uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ══ WHY DAUNTLESS ════════════════════════════════════ */}
      <section id="why" className="py-28 px-6 bg-[#0B1510]">
        <div className="max-w-7xl mx-auto">
          <Label n="01" text="Why Dauntless" />
          <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <h2 className="font-serif text-5xl font-black leading-tight mb-5">
                Not a job board.<br />
                <span className="text-[#22C55E]">A recruiting machine.</span>
              </h2>
              <p className="text-white/50 leading-relaxed">
                There are thousands of platforms claiming to find you reps. Most hand you a resume and call it a day. Dauntless makes direct introductions to motivated, pre-screened candidates — and we do it in 48 hours.
              </p>
            </div>
            <div className="space-y-5">
              {[
                { Icon: Users,  heading: "Direct placement",     body: "We introduce you to candidates personally. No job boards. No inbox black holes." },
                { Icon: Layers, heading: "Vertical specialists",  body: "We only recruit for D2D. Pest control, solar, fiber, insurance — we know these programs cold." },
                { Icon: Timer,  heading: "48-hour turnaround",    body: "Average time from your intake call to a qualified candidate introduction." },
                { Icon: Globe,  heading: "Nationwide reach",      body: "Active candidate pipelines in all 50 states. We source locally and across markets." },
              ].map(({ Icon, heading, body }) => (
                <div key={heading} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded border border-[#1C3320] bg-[#0F1D12] flex items-center justify-center mt-0.5">
                    <Icon className="w-4 h-4 text-[#1A7A40]" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm mb-1">{heading}</div>
                    <div className="text-white/45 text-sm leading-relaxed">{body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#1C3320]">
                  <th className="py-3 pr-6 text-left text-white/30 font-medium text-xs uppercase tracking-wider w-1/4">Criteria</th>
                  <th className="py-3 px-6 text-center text-[#22C55E] font-semibold text-xs uppercase tracking-wider">Dauntless</th>
                  <th className="py-3 px-6 text-center text-white/30 font-medium text-xs uppercase tracking-wider">Job Boards</th>
                  <th className="py-3 px-6 text-center text-white/30 font-medium text-xs uppercase tracking-wider">Generic Recruiters</th>
                </tr>
              </thead>
              <tbody>
                {WHY_ROWS.map(({ label, us, boards, generic }, i) => (
                  <tr key={label} className="border-b border-[#1C3320]/50">
                    <td className="py-4 pr-6 text-white/55 text-sm">{label}</td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex flex-col items-center gap-1">
                        <Check className="w-3.5 h-3.5 text-[#22C55E]" />
                        <span className="text-white/70 text-xs">{us}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex flex-col items-center gap-1">
                        <Minus className="w-3.5 h-3.5 text-white/20" />
                        <span className="text-white/30 text-xs">{boards}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex flex-col items-center gap-1">
                        <Minus className="w-3.5 h-3.5 text-white/20" />
                        <span className="text-white/30 text-xs">{generic}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══ PROCESS ══════════════════════════════════════════ */}
      <section id="process" className="py-28 px-6 bg-[#070E09]">
        <div className="max-w-7xl mx-auto">
          <Label n="02" text="Our Process" />
          <h2 className="font-serif text-5xl font-black mb-16 leading-tight">
            Reps in the field.<br />
            <span className="text-[#22C55E]">In three steps.</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-px bg-[#1C3320]">
            {PROCESS_STEPS.map(({ n, Icon, title, body }) => (
              <div key={n} className="bg-[#070E09] p-8">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-white/15 font-mono font-bold text-4xl leading-none">{n}</span>
                  <div className="w-9 h-9 rounded border border-[#1C3320] bg-[#0F1D12] flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#1A7A40]" />
                  </div>
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ VERTICALS ════════════════════════════════════════ */}
      <section id="verticals" className="py-28 px-6 bg-[#0B1510]">
        <div className="max-w-7xl mx-auto">
          <Label n="03" text="Industries We Serve" />
          <div className="grid md:grid-cols-2 gap-16 items-end mb-16">
            <h2 className="font-serif text-5xl font-black leading-tight">
              Four verticals.<br />
              <span className="text-[#22C55E]">One playbook.</span>
            </h2>
            <p className="text-white/50 leading-relaxed">
              We don't recruit for everyone. We recruit for the four highest-velocity D2D verticals in the country — and we know each one from the inside.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {VERTICALS.map(({ Icon, label, tag, body, bullets }) => (
              <div
                key={label}
                className="border border-[#1C3320] rounded-xl p-8 bg-[#0F1D12] hover:border-[#1A7A40]/50 transition-colors group"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-10 h-10 rounded border border-[#1C3320] bg-[#070E09] flex items-center justify-center group-hover:border-[#1A7A40]/40 transition-colors">
                    <Icon className="w-5 h-5 text-[#1A7A40]" />
                  </div>
                  <span className="text-white/30 text-xs font-medium border border-[#1C3320] px-2.5 py-1 rounded">{tag}</span>
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{label}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-5">{body}</p>
                <div className="border-t border-[#1C3320] pt-5 space-y-2">
                  {bullets.map((b) => (
                    <div key={b} className="flex items-center gap-2.5 text-sm text-white/45">
                      <div className="w-1 h-1 rounded-full bg-[#1A7A40] flex-shrink-0" />
                      {b}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ RESULTS ══════════════════════════════════════════ */}
      <section id="results" className="py-28 px-6 bg-[#070E09]">
        <div className="max-w-7xl mx-auto">
          <Label n="04" text="By the Numbers" />
          <div className="grid md:grid-cols-2 gap-16 items-end mb-16">
            <h2 className="font-serif text-5xl font-black leading-tight">
              The results<br />
              <span className="text-[#22C55E]">speak for themselves.</span>
            </h2>
            <p className="text-white/50 leading-relaxed">
              Real placements across all four verticals. No inflated projections.
            </p>
          </div>

          {/* Big stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1C3320] mb-px">
            {[
              { n: "500+", label: "Reps placed",         sub: "across all 50 states" },
              { n: "48hr", label: "Avg placement speed", sub: "from brief to intro"   },
              { n: "4",    label: "Active verticals",    sub: "pest · solar · fiber · insurance" },
              { n: "$0",   label: "Cost to candidates",  sub: "always free to apply"  },
            ].map(({ n, label, sub }) => (
              <div key={n} className="bg-[#070E09] p-8">
                <div className="text-[#22C55E] font-mono font-bold text-4xl mb-2">{n}</div>
                <div className="text-white font-semibold text-sm mb-1">{label}</div>
                <div className="text-white/30 text-xs">{sub}</div>
              </div>
            ))}
          </div>

          {/* Earnings strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1C3320]">
            {EARNINGS.map(({ vertical, range, period }) => (
              <div key={vertical} className="bg-[#0B1510] p-6 text-center">
                <div className="text-white font-bold text-2xl mb-1">{range}</div>
                <div className="text-white/35 text-xs mb-1">{period}</div>
                <div className="text-white/20 text-xs uppercase tracking-wider">{vertical}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ═════════════════════════════════════ */}
      <section className="py-28 px-6 bg-[#0B1510]">
        <div className="max-w-7xl mx-auto">
          <Label n="05" text="Placements" />
          <h2 className="font-serif text-5xl font-black mb-16 leading-tight">
            Real people.<br />
            <span className="text-[#22C55E]">Real results.</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ name, context, quote }) => (
              <div key={name} className="border border-[#1C3320] rounded-xl p-6 bg-[#0F1D12]">
                <p className="text-white/65 text-sm leading-relaxed mb-6">"{quote}"</p>
                <div className="border-t border-[#1C3320] pt-4">
                  <div className="text-white font-semibold text-sm">{name}</div>
                  <div className="text-white/30 text-xs mt-0.5">{context}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONTACT ══════════════════════════════════════════ */}
      <section id="contact" className="py-28 px-6 bg-[#070E09]">
        <div className="max-w-3xl mx-auto">
          <Label n="06" text="Work With Us" />
          <h2 className="font-serif text-5xl md:text-6xl font-black mb-6 leading-tight">
            Ready to build<br />
            <span className="text-[#22C55E]">your team?</span>
          </h2>
          <p className="text-white/50 text-lg mb-12 leading-relaxed max-w-lg">
            Whether you need one rep or a hundred, we move fast. Tell us about your program and we respond same business day.
          </p>

          <div className="grid sm:grid-cols-3 gap-3 mb-8">
            {[
              { Icon: Mail,   label: "Email",    value: "eric@dauntlessllc.com",    href: "mailto:eric@dauntlessllc.com" },
              { Icon: Phone,  label: "Call",     value: "+1 (801) 555-0100",         href: "tel:+18015550100"             },
              { Icon: MapPin, label: "Location", value: "Salt Lake City — Nationwide", href: "#"                         },
            ].map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="border border-[#1C3320] rounded-lg p-4 bg-[#0F1D12] hover:border-[#1A7A40]/60 transition-colors group"
              >
                <Icon className="w-4 h-4 text-[#1A7A40] mb-2" />
                <div className="text-white/30 text-xs uppercase tracking-wider mb-1">{label}</div>
                <div className="text-white/70 text-sm font-medium group-hover:text-white transition-colors">{value}</div>
              </a>
            ))}
          </div>

          <a
            href="mailto:eric@dauntlessllc.com"
            className="inline-flex items-center gap-2 bg-[#1A7A40] text-white font-semibold px-8 py-4 rounded hover:bg-[#166534] transition-colors text-sm"
          >
            Send a Message <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* ══ FOOTER ═══════════════════════════════════════════ */}
      <footer className="border-t border-[#1C3320] py-8 px-6 bg-[#040A06]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <div className="flex items-center gap-2.5">
            <div className="w-5 h-5 rounded bg-[#1A7A40] flex items-center justify-center">
              <span className="text-white font-black text-[10px]">D</span>
            </div>
            <span className="text-white/50 font-semibold">Dauntless LLC</span>
            <span>· Salt Lake City, UT · EIN 99-1956370</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="/terms"   className="hover:text-white/60 transition-colors">Terms of Service</a>
          </div>
          <span>© {new Date().getFullYear()} Dauntless LLC. All rights reserved.</span>
        </div>
      </footer>

    </div>
  );
}
