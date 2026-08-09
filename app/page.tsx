import { ArrowRight } from "lucide-react";
import ApplyForm from "./components/ApplyForm";

/* ─── data ───────────────────────────────────── */

const PILLARS = [
  ["01", "Financial intelligence",  "What to do with the money you earn. Most people make it and lose it. We make sure you don't."],
  ["02", "Financial independence",  "Own your income. Stop renting your life to someone else's schedule and someone else's ceiling."],
  ["03", "True independence",       "Time, location, and decision-making freedom. The kind you can only build — not apply for."],
  ["04", "Leadership",              "How to build, manage, and inspire a team. The skill that turns a job into a business."],
  ["05", "Self-mastery",            "Discipline, mental toughness, health, identity. Everything you build on the outside starts inside."],
  ["06", "Sales",                   "The most transferable skill on earth. Every founder, every executive, every operator — they all sell."],
  ["07", "Business building",       "How real businesses are structured, scaled, and operated. Not theory — from people who've done it."],
  ["08", "Real estate investing",   "How to put your income to work. Buy assets, build equity, stop trading time for money forever."],
  ["09", "Network & mentorship",    "The right people in your corner. Mentors who've been where you're going. A network that opens doors."],
];

const PATH = [
  ["01", "Learn",   "Day one to first close. D2D from scratch — scripts, objections, mindset, the close. You'll learn more in 30 days than most people learn in four years."],
  ["02", "Earn",    "First $4K–$8K month. Build the habit of winning through reps, consistency, and a process that actually works."],
  ["03", "Lead",    "Build your own team. Earn residuals. Learn to duplicate yourself. Income stops being tied to your hours."],
  ["04", "Launch",  "Seven figures within our org — or we back you when you want to start your own thing. Either path, we're in your corner."],
];

const FAQS = [
  ["Do I need sales experience?", "No — and we prefer people who don't. Bad habits are harder to fix than no habits. If you're coachable, we can teach you everything."],
  ["Is this commission only?", "Yes. And that's actually the best thing about it. No one caps what you earn. You're not waiting on a review cycle or a manager to decide your value. Your effort is the ceiling."],
  ["How fast can I start earning?", "Most reps earn in their first week. First-month average is $4K+. Some people clear $8K month one. Depends entirely on how hard you go."],
  ["What does training look like?", "Full onboarding before day one. Proven scripts, live roleplay, objection frameworks, and field training with people actively producing. You arrive ready — not guessing."],
  ["What if I want to start my own business?", "That's one of our actual goals for you. We teach you to build — and when you're ready, we want to be one of your first resources. Mentorship, network, capital conversations."],
  ["In person or remote?", "Field sales is in person — you're at the door. Training and business-building has both. We work around your market and situation."],
];

/* ─── divider ─────────────────────────────────── */
const HR = () => <hr className="border-border" />;

/* ─── section tag ─────────────────────────────── */
function Tag({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-2 mb-10">
      <span className="text-[#1A6B3A] text-[11px] font-semibold tracking-[0.12em] uppercase font-mono">{n}</span>
      <span className="text-faint text-[11px] tracking-[0.12em] uppercase">{label}</span>
    </div>
  );
}

/* ─── page ────────────────────────────────────── */
export default function Home() {
  return (
    <div className="bg-[#FAFAF8] text-ink">

      {/* ── NAV ── */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#FAFAF8]/90 backdrop-blur border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-serif text-[15px] tracking-tight">Dauntless</span>
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
            {[["#filter","Who It's For"],["#what","What We Build"],["#path","The Path"],["#apply","Apply"]].map(([h,l]) => (
              <a key={h} href={h} className="hover:text-ink transition-colors">{l}</a>
            ))}
          </nav>
          <a href="#apply" className="flex items-center gap-1.5 bg-[#1A6B3A] text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-[#166032] transition-colors">
            Apply now
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="max-w-6xl mx-auto px-6 pt-40 pb-28">
        <p className="text-[#1A6B3A] text-[11px] font-semibold tracking-[0.14em] uppercase mb-8">
          Dauntless · D2D Sales Channel · Est. 2024
        </p>

        <h1 className="font-serif text-[clamp(3.2rem,7.5vw,6rem)] leading-[1.0] tracking-tight mb-8 max-w-4xl">
          We don't build salespeople.<br />
          We build <em className="text-[#1A6B3A]">entrepreneurs.</em>
        </h1>

        <p className="text-muted text-xl max-w-xl leading-relaxed mb-4">
          If you have the will to push through the hard part, the humility to be coached, and the hunger to build something real — we'll teach you everything else.
        </p>
        <p className="text-faint text-base max-w-lg leading-relaxed mb-12">
          No degree. No experience. No connections. Just show up ready to work and ready to learn.
        </p>

        <div className="flex flex-wrap items-center gap-3 mb-20">
          <a href="#apply" className="inline-flex items-center gap-2 bg-[#1A6B3A] text-white font-medium px-6 py-3 rounded-md hover:bg-[#166032] transition-colors text-sm">
            Start your application <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#filter" className="inline-flex items-center gap-2 border border-border text-muted font-medium px-6 py-3 rounded-md hover:border-[#1A6B3A]/40 hover:text-ink transition-colors text-sm">
            See if this is for you
          </a>
        </div>

        {/* inline stats — no colored bar, just clean row */}
        <div className="flex flex-wrap gap-x-12 gap-y-4">
          {[["500+","reps in the network"],["$4K+","avg first month"],["48 hr","start to field"],["50","states covered"]].map(([v,l]) => (
            <div key={l}>
              <div className="text-[#1A6B3A] font-serif text-3xl font-normal">{v}</div>
              <div className="text-faint text-xs mt-0.5">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <HR />

      {/* ── THE FILTER ── */}
      <section id="filter" className="max-w-6xl mx-auto px-6 py-24">
        <Tag n="01" label="Who This Is For" />

        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.1] mb-8">
              We're not for everyone.<br /><em className="text-[#1A6B3A]">We mean that.</em>
            </h2>
          </div>
          <div className="pt-2">
            <p className="text-muted leading-relaxed">
              There is a specific type of person this works for. Not a background, not a degree, not a personality type — a mindset. If you have it, you'll know. If you're not sure, you probably don't have it yet.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-14">
          <div className="bg-paper rounded-xl p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-faint mb-5">Not for you if…</p>
            <div className="space-y-3">
              {[
                "You want a salary with a ceiling and someone else deciding your value.",
                "You're not willing to hear that you're wrong — and actually change.",
                "You need comfort before you're willing to try something.",
                "You're looking for a shortcut instead of a foundation.",
              ].map(s => (
                <div key={s} className="flex gap-3 text-sm text-muted leading-relaxed">
                  <span className="text-faint mt-0.5 flex-shrink-0">—</span>{s}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#1A6B3A]/[0.04] border border-[#1A6B3A]/20 rounded-xl p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#1A6B3A] mb-5">This is for you if…</p>
            <div className="space-y-3">
              {[
                "You're willing to throw away your ego and be taught from scratch.",
                "You're done with other people setting the limit on what you earn.",
                "You want to build something — not just work somewhere.",
                "You have the will to push through the uncomfortable parts without quitting.",
              ].map(s => (
                <div key={s} className="flex gap-3 text-sm text-ink leading-relaxed">
                  <span className="text-[#1A6B3A] mt-0.5 flex-shrink-0">→</span>{s}
                </div>
              ))}
            </div>
          </div>
        </div>

        <blockquote className="border-l-2 border-[#1A6B3A] pl-5">
          <p className="font-serif text-xl text-muted italic leading-relaxed max-w-2xl">
            "The only requirements are will, coachability, and the guts to do the uncomfortable thing when it would be easier to quit. Everything else — we teach you."
          </p>
        </blockquote>
      </section>

      <HR />

      {/* ── WHAT WE BUILD ── */}
      <section id="what" className="max-w-6xl mx-auto px-6 py-24">
        <Tag n="02" label="What We Build" />

        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.1]">
            Most companies teach you how to sell.<br />
            <em className="text-[#1A6B3A]">We teach you how to live.</em>
          </h2>
          <p className="text-muted leading-relaxed pt-2">
            Sales is how we start. What we're actually building is a foundation — the skills, habits, and knowledge that make you dangerous for the rest of your life, whether you stay in our org or run your own.
          </p>
        </div>

        {/* Clean editorial numbered list — not icon cards */}
        <div className="divide-y divide-border">
          {PILLARS.map(([n, title, body]) => (
            <div key={n} className="grid grid-cols-[3rem_1fr_2fr] gap-6 py-5 group">
              <span className="text-[#1A6B3A] text-xs font-mono font-semibold mt-0.5">{n}</span>
              <span className="font-medium text-sm text-ink">{title}</span>
              <span className="text-muted text-sm leading-relaxed">{body}</span>
            </div>
          ))}
        </div>
      </section>

      <HR />

      {/* ── THE PATH ── */}
      <section id="path" className="max-w-6xl mx-auto px-6 py-24">
        <Tag n="03" label="The Path" />

        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.1]">
            Four stages.<br />
            <em className="text-[#1A6B3A]">One direction.</em>
          </h2>
          <p className="text-muted leading-relaxed pt-2">
            This isn't a job description. It's a career arc. Where you start is D2D. Where you go is up to how much you want it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PATH.map(([n, title, body]) => (
            <div key={n} className="bg-paper rounded-xl p-7">
              <div className="flex items-start justify-between mb-4">
                <span className="font-serif text-5xl text-border leading-none select-none">{n}</span>
                <span className="text-[#1A6B3A] text-xs font-semibold tracking-widest uppercase">{title}</span>
              </div>
              <p className="text-muted text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <HR />

      {/* ── RESULTS ── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <Tag n="04" label="Real Results" />

        <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.1] mb-16">
          What reps actually earn.<br />
          <em className="text-[#1A6B3A]">No projections. No fluff.</em>
        </h2>

        {/* Earnings — clean row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mb-16">
          {[
            ["$4K+",     "avg first month",    "all verticals"],
            ["$20–30K",  "per summer",         "pest control"],
            ["$80–250K", "per year",           "solar & insurance"],
            ["500+",     "reps in network",    "all 50 states"],
          ].map(([n, label, sub]) => (
            <div key={n} className="bg-[#FAFAF8] p-7">
              <div className="font-serif text-4xl text-[#1A6B3A] mb-2">{n}</div>
              <div className="text-sm font-medium text-ink mb-0.5">{label}</div>
              <div className="text-xs text-faint">{sub}</div>
            </div>
          ))}
        </div>

        {/* Testimonials — Raycast-style, not cards */}
        <div className="divide-y divide-border">
          {[
            { name: "Marcus T.",  ctx: "Pest Control · Texas · Summer 2026",  q: "Zero sales experience. First month I cleared $6,800. Now I'm leading a team of four. Best decision I've made." },
            { name: "Jordan W.",  ctx: "Solar · California · Q1 2026",         q: "Three weeks applying online, nothing. Applied here, was in training that week. $140K my first full year." },
            { name: "Priya S.",   ctx: "Insurance · Florida · March 2026",     q: "They told me exactly what to expect — no surprises, no BS. Knew exactly what I was getting into. Still here." },
          ].map(({ name, ctx, q }) => (
            <div key={name} className="py-7 grid md:grid-cols-[14rem_1fr] gap-6">
              <div>
                <div className="text-sm font-medium text-ink">{name}</div>
                <div className="text-xs text-faint mt-0.5">{ctx}</div>
              </div>
              <p className="text-muted text-sm leading-relaxed">"{q}"</p>
            </div>
          ))}
        </div>
      </section>

      <HR />

      {/* ── WHO WE ARE ── */}
      <section className="bg-paper border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <Tag n="05" label="Who We Are" />

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.15] mb-7">
                Built by someone who<br />
                <em className="text-[#1A6B3A]">actually did it.</em>
              </h2>
              <div className="space-y-4 text-muted text-sm leading-relaxed">
                <p>Dauntless was built by a 21-year-old who made his first million in D2D. Not because he was naturally gifted. Because he found the right people, stayed coachable, and refused to quit when most would have.</p>
                <p>He saw too many people with real ambition burn out because they had no guidance, no financial education, and no one in their corner who actually cared about where they ended up.</p>
                <p className="text-ink font-medium">Dauntless exists to fix that. If you have the will, we have the blueprint.</p>
              </div>
            </div>

            <div className="divide-y divide-border">
              {[
                "$1M+ earned by age 21 through D2D",
                "Built recruiting, management, and tech infrastructure for a national sales org",
                "Operates across pest control, solar, fiber, and insurance",
                "500+ reps placed nationwide across all 50 states",
              ].map(s => (
                <div key={s} className="flex gap-3 py-4 text-sm text-muted">
                  <span className="text-[#1A6B3A] flex-shrink-0 mt-0.5">—</span>{s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <Tag n="06" label="Questions" />

        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.15] mb-14">
          Straight answers.<br />
          <em className="text-[#1A6B3A]">No runaround.</em>
        </h2>

        <div className="divide-y divide-border max-w-3xl">
          {FAQS.map(([q, a]) => (
            <div key={q} className="py-6">
              <p className="font-medium text-ink mb-2.5">{q}</p>
              <p className="text-muted text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <HR />

      {/* ── APPLY ── */}
      <section id="apply" className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-[1fr_480px] gap-20 items-start">

          {/* left */}
          <div className="md:sticky md:top-24">
            <Tag n="07" label="Apply" />
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.1] mb-6">
              Your next chapter<br />
              <em className="text-[#1A6B3A]">starts here.</em>
            </h2>
            <p className="text-muted leading-relaxed mb-8 max-w-md text-sm">
              Fill this out. We review it and get you on a Zoom call — usually within 24 hours. Come ready to be real about where you are and where you want to go.
            </p>
            <div className="divide-y divide-border">
              {["No experience required", "First month average: $4K+", "Zoom call within 24 hours", "Zero cost to join"].map(s => (
                <div key={s} className="py-3 flex items-center gap-2.5 text-sm text-muted">
                  <span className="w-1 h-1 rounded-full bg-[#1A6B3A] flex-shrink-0" />{s}
                </div>
              ))}
            </div>
          </div>

          {/* right — form */}
          <div className="border border-border rounded-2xl bg-white p-8 shadow-sm">
            <ApplyForm />
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-border py-7 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-faint">
          <div className="flex items-center gap-2">
            <span className="font-serif text-ink text-sm">Dauntless LLC</span>
            <span>· Salt Lake City, UT · EIN 99-1956370</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="/privacy" className="hover:text-ink transition-colors">Privacy Policy</a>
            <a href="/terms"   className="hover:text-ink transition-colors">Terms of Service</a>
          </div>
          <span>© {new Date().getFullYear()} Dauntless LLC. All rights reserved.</span>
        </div>
      </footer>

    </div>
  );
}
