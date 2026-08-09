import {
  ArrowRight,
  DollarSign,
  TrendingUp,
  Globe,
  Users,
  Shield,
  Briefcase,
  Building2,
  Network,
  Flame,
} from "lucide-react";
import ApplyForm from "./components/ApplyForm";

/* ─── data ─────────────────────────────────────────────── */

const PILLARS = [
  { Icon: DollarSign, title: "Financial intelligence",     body: "What to do with the money you earn. Most people make it and lose it. We make sure you don't." },
  { Icon: Shield,     title: "Financial independence",     body: "Own your income. Stop renting your life to someone else's schedule and someone else's ceiling." },
  { Icon: Globe,      title: "True independence",          body: "Time, location, and decision-making freedom. The kind you can only build — not apply for." },
  { Icon: Users,      title: "Leadership",                 body: "How to build, manage, and inspire a team. The skill that turns a job into a business." },
  { Icon: Flame,      title: "Self-mastery",               body: "Discipline, mental toughness, health, identity. Everything you build on the outside starts inside." },
  { Icon: TrendingUp, title: "Sales",                      body: "The most transferable skill on earth. Every founder, every executive, every operator — they all sell." },
  { Icon: Briefcase,  title: "Business building",          body: "How real businesses are actually structured, scaled, and operated. Not theory. From people who've done it." },
  { Icon: Building2,  title: "Real estate investing",      body: "How to put your income to work. Buy assets. Build equity. Stop trading time for money forever." },
  { Icon: Network,    title: "Network & mentorship",       body: "The right people in your corner. Mentors who've been where you're going. A network that opens doors." },
];

const PATH = [
  { n: "01", title: "Learn the craft",     body: "Day one to first close. D2D from the ground up — scripts, objections, mindset, closing. You'll learn more in your first 30 days than most people learn in four years of college." },
  { n: "02", title: "Earn",                body: "First $4K–$8K month. You build the discipline of winning. Not luck — reps, consistency, and a process that works." },
  { n: "03", title: "Lead",                body: "Build your own team. Earn residuals. Learn to duplicate yourself. This is where income stops being tied to your hours." },
  { n: "04", title: "Launch",              body: "Seven-figure earner within our org, or we back you when you want to start your own business. Either path — we're in your corner." },
];

const FAQS = [
  { q: "Do I need sales experience?",           a: "No — and honestly, we prefer people who don't. Bad habits are harder to unlearn than no habits at all. If you're coachable, we can teach you everything." },
  { q: "Is this commission only?",              a: "Yes. And here's why that's actually the best thing about it: no one can cap what you earn. You're not waiting for a review cycle or a manager to decide you deserve more. Your effort is the only ceiling." },
  { q: "How fast can I start earning?",         a: "Most reps earn in their first week. First-month average across all verticals is $4K+. Some reps clear $8K month one. It depends entirely on how hard you go." },
  { q: "What does training look like?",         a: "Full onboarding before day one. Proven scripts, live roleplay, objection frameworks, and field training with people who are actively producing. You arrive ready, not guessing." },
  { q: "What if I want to start my own business eventually?", a: "That's actually one of our goals. We teach you how to build, and when you're ready, we want to be one of your first resources — whether that's mentorship, network, or capital conversations." },
  { q: "Is this remote or in person?",          a: "Field sales is in person — you're at the door. Training and the business-building side has both. We work with you around your market and situation." },
];

/* ─── section label ─────────────────────────────────────── */
function Label({ n, text }: { n: string; text: string }) {
  return (
    <div className="flex items-center gap-3 mb-7">
      <span className="text-[#22C55E] text-xs font-mono tracking-widest">{n}</span>
      <div className="h-px w-6 bg-[#1C3320]" />
      <span className="text-white/30 text-[11px] font-semibold tracking-widest uppercase">{text}</span>
    </div>
  );
}

/* ─── page ──────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="bg-[#070E09] text-white">

      {/* ══ NAV ══ */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#070E09]/95 backdrop-blur border-b border-[#1C3320]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded bg-[#1A7A40] flex items-center justify-center">
              <span className="text-white font-black text-xs">D</span>
            </div>
            <span className="text-white font-bold text-sm tracking-wide uppercase">Dauntless</span>
          </div>
          <nav className="hidden md:flex items-center gap-7">
            {[["#filter","Who This Is For"],["#what","What We Build"],["#path","The Path"],["#apply","Apply"]].map(([h,l])=>(
              <a key={h} href={h} className="text-white/45 text-sm hover:text-white transition-colors">{l}</a>
            ))}
          </nav>
          <a href="#apply" className="hidden md:flex items-center gap-1.5 bg-[#1A7A40] text-white text-sm font-semibold px-4 py-2 rounded hover:bg-[#166534] transition-colors">
            Apply Now <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* ══ HERO ══ */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-16 pb-24">
        <div className="max-w-4xl mx-auto text-center">

          <p className="text-[#22C55E] text-xs font-mono tracking-widest uppercase mb-10">
            Dauntless · D2D Sales Channel · Entrepreneur Development
          </p>

          <h1 className="font-serif text-[clamp(3rem,9vw,6.5rem)] font-black leading-[0.92] tracking-tight mb-8">
            We don't just<br />build salespeople.<br />
            <em className="not-italic text-[#22C55E]">We build entrepreneurs.</em>
          </h1>

          <p className="text-white/55 text-xl max-w-2xl mx-auto leading-relaxed mb-6">
            If you have the will to push through the hard part, the humility to be coachable, and the hunger to build something real — we'll teach you everything else.
          </p>
          <p className="text-white/35 text-base max-w-xl mx-auto leading-relaxed mb-12">
            No experience required. No degree. No connections. Just show up ready to work and ready to learn.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#apply" className="flex items-center gap-2 bg-[#1A7A40] text-white font-semibold px-8 py-4 rounded hover:bg-[#166534] transition-colors text-sm">
              Start Your Application <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#filter" className="flex items-center gap-2 border border-[#1C3320] text-white/45 font-medium px-8 py-4 rounded hover:border-[#1A7A40] hover:text-white transition-colors text-sm">
              See If This Is For You
            </a>
          </div>

          {/* anchor stats */}
          <div className="mt-16 grid grid-cols-3 gap-0 divide-x divide-[#1C3320] max-w-lg mx-auto">
            {[["500+","reps in the network"],["$4K+","avg first month"],["48hr","start to field"]].map(([v,l])=>(
              <div key={l} className="px-6 text-center">
                <div className="text-[#22C55E] font-mono font-bold text-2xl">{v}</div>
                <div className="text-white/30 text-xs mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ THE FILTER ══ */}
      <section id="filter" className="py-28 px-6 bg-[#0B1510] border-y border-[#1C3320]">
        <div className="max-w-4xl mx-auto">
          <Label n="01" text="Who This Is For" />

          <h2 className="font-serif text-5xl md:text-6xl font-black mb-12 leading-tight">
            We're not for everyone.<br />
            <span className="text-[#22C55E]">We mean that.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-white/35 text-xs font-semibold uppercase tracking-widest mb-5">This isn't for you if…</p>
              <div className="space-y-4">
                {[
                  "You want a salary with a ceiling and someone else deciding your worth.",
                  "You're not willing to be told you're wrong — and actually listen.",
                  "You need to be comfortable before you're willing to try.",
                  "You're looking for a shortcut instead of a foundation.",
                ].map((s) => (
                  <div key={s} className="flex gap-3 text-white/35 text-sm leading-relaxed">
                    <span className="text-white/20 mt-0.5 flex-shrink-0">—</span>
                    {s}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[#22C55E] text-xs font-semibold uppercase tracking-widest mb-5">This is exactly for you if…</p>
              <div className="space-y-4">
                {[
                  "You're willing to throw away your ego and be taught from scratch.",
                  "You're done with other people setting the limit on what you can earn.",
                  "You want to build something — not just work somewhere.",
                  "You have the will to push through the uncomfortable parts without quitting.",
                ].map((s) => (
                  <div key={s} className="flex gap-3 text-white/75 text-sm leading-relaxed">
                    <span className="text-[#1A7A40] mt-0.5 flex-shrink-0">→</span>
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 border-l-2 border-[#1A7A40] pl-6">
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
              "The only requirements are will, coachability, and the guts to do the uncomfortable thing when it would be easier to quit. Everything else — the skills, the knowledge, the network — we teach you."
            </p>
          </div>
        </div>
      </section>

      {/* ══ WHAT WE BUILD ══ */}
      <section id="what" className="py-28 px-6 bg-[#070E09]">
        <div className="max-w-7xl mx-auto">
          <Label n="02" text="What We Build" />

          <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
            <h2 className="font-serif text-5xl md:text-6xl font-black leading-tight">
              Most companies teach you<br />how to sell.<br />
              <span className="text-[#22C55E]">We teach you how to live.</span>
            </h2>
            <p className="text-white/50 leading-relaxed text-lg">
              Sales is how we start. But what we're actually building is a foundation — the skills, habits, and knowledge that make you dangerous for the rest of your life, whether that's inside our organization or running your own.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1C3320]">
            {PILLARS.map(({ Icon, title, body }) => (
              <div key={title} className="bg-[#070E09] p-7 hover:bg-[#0B1510] transition-colors group">
                <div className="w-9 h-9 rounded border border-[#1C3320] bg-[#0F1D12] flex items-center justify-center mb-5 group-hover:border-[#1A7A40]/50 transition-colors">
                  <Icon className="w-4 h-4 text-[#1A7A40]" />
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ THE PATH ══ */}
      <section id="path" className="py-28 px-6 bg-[#0B1510] border-y border-[#1C3320]">
        <div className="max-w-7xl mx-auto">
          <Label n="03" text="The Path" />

          <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
            <h2 className="font-serif text-5xl md:text-6xl font-black leading-tight">
              Four stages.<br />
              <span className="text-[#22C55E]">One direction.</span>
            </h2>
            <p className="text-white/50 leading-relaxed">
              This isn't a job description. It's a career arc. Where you start is D2D. Where you go from there is up to how much you want it.
            </p>
          </div>

          <div className="space-y-px">
            {PATH.map(({ n, title, body }, i) => (
              <div key={n} className="flex gap-0 bg-[#0B1510]">
                <div className="w-20 md:w-28 flex-shrink-0 bg-[#070E09] flex items-start justify-center pt-8 border-r border-[#1C3320]">
                  <span className="text-white/10 font-mono font-black text-4xl md:text-5xl">{n}</span>
                </div>
                <div className="flex-1 p-8 border-b border-[#1C3320]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1A7A40]" />
                    <h3 className="text-white font-bold text-xl">{title}</h3>
                  </div>
                  <p className="text-white/45 leading-relaxed max-w-2xl">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ RESULTS ══ */}
      <section className="py-28 px-6 bg-[#070E09]">
        <div className="max-w-7xl mx-auto">
          <Label n="04" text="Real Results" />

          <h2 className="font-serif text-5xl font-black mb-16 leading-tight">
            What reps actually earn.<br />
            <span className="text-[#22C55E]">No projections. No fluff.</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1C3320] mb-px">
            {[
              { n: "$4K+",    label: "avg first month",    sub: "across all verticals"       },
              { n: "$20–30K", label: "per summer season",  sub: "pest control typical"       },
              { n: "$80–250K",label: "per year top earns", sub: "solar & insurance"          },
              { n: "500+",    label: "reps in network",    sub: "across all 50 states"       },
            ].map(({ n, label, sub }) => (
              <div key={n} className="bg-[#070E09] p-8">
                <div className="text-[#22C55E] font-mono font-bold text-3xl mb-2">{n}</div>
                <div className="text-white font-semibold text-sm mb-1">{label}</div>
                <div className="text-white/30 text-xs">{sub}</div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              { name: "Marcus T.", context: "Pest Control · Texas · Summer 2026",    quote: "Zero sales experience. I was skeptical the whole way to day one. First month I cleared $6,800. Now I'm leading a team of four." },
              { name: "Jordan W.", context: "Solar · California · Q1 2026",          quote: "Three weeks applying online, nothing. Applied here, had a call the next morning, was in training that week. $140K my first full year in." },
              { name: "Priya S.",  context: "Insurance · Florida · March 2026",      quote: "What sold me was that they actually explained the business model — no surprises, no BS. I knew exactly what I was getting into. Still here." },
            ].map(({ name, context, quote }) => (
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

      {/* ══ WHO WE ARE ══ */}
      <section className="py-28 px-6 bg-[#0B1510] border-y border-[#1C3320]">
        <div className="max-w-4xl mx-auto">
          <Label n="05" text="Who We Are" />
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-black mb-6 leading-tight">
                Built by someone who<br />
                <span className="text-[#22C55E]">actually did it.</span>
              </h2>
              <p className="text-white/55 leading-relaxed mb-5">
                Dauntless was built by a 21-year-old who made his first million in D2D. Not because he was naturally gifted at sales. Because he found the right people, stayed coachable, and refused to quit when most people would have.
              </p>
              <p className="text-white/55 leading-relaxed mb-5">
                He saw too many people with real ambition burn out because they had no guidance, no financial education, and no one in their corner who actually gave a damn about where they ended up.
              </p>
              <p className="text-white/70 leading-relaxed font-medium">
                Dauntless exists to fix that. If you have the will, we have the blueprint.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "$1M+ earned by age 21 in D2D",
                "Built recruiting, management, and tech infrastructure for a national sales org",
                "Operates across pest control, solar, fiber, and insurance",
                "Backed by a team that's collectively placed 500+ reps nationwide",
              ].map((s) => (
                <div key={s} className="flex gap-3 border border-[#1C3320] rounded-lg px-4 py-3 bg-[#0F1D12]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E] flex-shrink-0 mt-1.5" />
                  <span className="text-white/60 text-sm leading-relaxed">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="py-28 px-6 bg-[#070E09]">
        <div className="max-w-3xl mx-auto">
          <Label n="06" text="Common Questions" />
          <h2 className="font-serif text-4xl font-black mb-12 leading-tight">
            Straight answers.<br />
            <span className="text-[#22C55E]">No runaround.</span>
          </h2>

          <div className="space-y-px">
            {FAQS.map(({ q, a }) => (
              <div key={q} className="border-b border-[#1C3320] py-6">
                <p className="text-white font-semibold mb-3">{q}</p>
                <p className="text-white/50 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ APPLY FORM ══ */}
      <section id="apply" className="py-28 px-6 bg-[#0B1510] border-t border-[#1C3320]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <div className="md:sticky md:top-24">
            <Label n="07" text="Apply" />
            <h2 className="font-serif text-5xl md:text-6xl font-black mb-6 leading-tight">
              Your next chapter<br />
              <span className="text-[#22C55E]">starts here.</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-8 max-w-md">
              Fill out the form. We'll review it and get you on a Zoom call — usually within 24 hours. Come ready to be real about where you are and where you want to go.
            </p>
            <div className="space-y-3">
              {["No experience required","First month average: $4K+","Zoom call usually within 24 hours","Zero cost to join"].map((s)=>(
                <div key={s} className="flex items-center gap-2.5 text-sm text-white/50">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1A7A40] flex-shrink-0" />
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-[#0F1D12] border border-[#1C3320] rounded-2xl p-8">
            <ApplyForm />
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="border-t border-[#1C3320] py-8 px-6 bg-[#040A06]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/25">
          <div className="flex items-center gap-2.5">
            <div className="w-5 h-5 rounded bg-[#1A7A40] flex items-center justify-center">
              <span className="text-white font-black text-[10px]">D</span>
            </div>
            <span className="text-white/40 font-semibold">Dauntless LLC</span>
            <span>· Salt Lake City, UT · EIN 99-1956370</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="/privacy" className="hover:text-white/50 transition-colors">Privacy Policy</a>
            <a href="/terms"   className="hover:text-white/50 transition-colors">Terms of Service</a>
          </div>
          <span>© {new Date().getFullYear()} Dauntless LLC. All rights reserved.</span>
        </div>
      </footer>

    </div>
  );
}
