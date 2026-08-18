import { ArrowRight } from "lucide-react";
import ApplyForm from "./components/ApplyForm";
import VideoCard from "./components/VideoCard";

/*
 * VIDEO SLOTS — swap null → URL when Eric sends the clips
 * MP4 from Cloudflare / Vercel CDN / any direct URL works.
 * YouTube: use the embed URL format: https://www.youtube.com/embed/VIDEO_ID?autoplay=1
 */
const HERO_VIDEO_SRC   = null; // e.g. "/videos/hero-loop.mp4" or CF stream URL
const HERO_VIDEO_POSTER = null; // e.g. "/images/hero-poster.jpg"

/* ── data ──────────────────────────────────────────── */

const PILLARS = [
  ["01", "Financial intelligence",  "What to do with the money you earn. Most people make it and lose it. We make sure you don't."],
  ["02", "Financial independence",  "Own your income. Stop renting your life to someone else's schedule and ceiling."],
  ["03", "True independence",       "Time, location, and decision-making freedom. The kind you can only build — not apply for."],
  ["04", "Leadership",              "How to build, manage, and inspire a team. The skill that turns a job into a business."],
  ["05", "Self-mastery",            "Discipline, mental toughness, health. Everything you build outside starts inside."],
  ["06", "Sales",                   "The most transferable skill on earth. Every founder, every operator — they all sell."],
  ["07", "Business building",       "How businesses are structured, scaled, and operated. Not theory — from people who've done it."],
  ["08", "Real estate",             "How to put your income to work. Assets, equity, stop trading time for money forever."],
  ["09", "Network & mentorship",    "The right people in your corner. Mentors who've been where you're going."],
];

const PATH = [
  ["01", "Learn",  "Day one to first close. D2D from scratch — scripts, objections, mindset. You'll learn more in 30 days than most people do in four years."],
  ["02", "Earn",   "First $4K–$8K month. Build the discipline of winning through consistency and a process that actually works."],
  ["03", "Lead",   "Build your own team. Earn residuals. Learn to duplicate yourself. Income stops being tied to your hours."],
  ["04", "Launch", "Seven figures within our org — or we back you when you want to start your own. Either path, we're in your corner."],
];

const FAQS = [
  ["Do I need experience?",                    "No — we prefer people who don't. Bad habits are harder to fix than no habits. If you're coachable, we teach you everything."],
  ["Is this commission only?",                 "Yes. And that's the best thing about it. No one caps what you earn. You're not waiting on a review cycle. Your effort is the ceiling."],
  ["How fast can I start earning?",            "Most reps earn in their first week. First-month average is $4K+. Some clear $8K month one. Depends entirely on how hard you go."],
  ["What does training look like?",            "Full onboarding before day one. Proven scripts, live roleplay, objection frameworks, field training with people actively producing."],
  ["What if I want to start my own business?", "That's one of our actual goals for you. We teach you to build — and when you're ready, we're one of your first resources."],
  ["In person or remote?",                     "Field sales is in person — at the door. Business-building and training has both. We work around your market."],
];

/* ── components ─────────────────────────────────────── */

function Divider() {
  return <div className="border-t border-border" />;
}

function SectionTag({ n, label }: { n: string; label: string }) {
  return (
    <p className="flex items-center gap-2.5 mb-10 text-[11px] tracking-[0.14em] uppercase">
      <span className="text-green">{n}</span>
      <span className="text-faint">{label}</span>
    </p>
  );
}

/* ── page ──────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="bg-[#F9F8F6] text-ink">

      {/* ═══ NAV ═══════════════════════════════════════ */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#F9F8F6]/90 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-serif text-base tracking-tight">Dauntless</span>
          <nav className="hidden md:flex items-center gap-7 text-[13px] text-muted">
            {[["#filter","Who It's For"],["#what","What We Build"],["#path","The Path"],["#apply","Apply"]].map(([h,l])=>(
              <a key={h} href={h} className="hover:text-ink transition-colors">{l}</a>
            ))}
          </nav>
          <a href="#apply" className="text-[13px] font-medium bg-green text-white px-4 py-2 rounded-lg hover:bg-green-hover transition-colors flex items-center gap-1.5">
            Apply <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* ═══ HERO ═══════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 pt-44 pb-32 grain">
        {/* eyebrow */}
        <p className="text-green text-[11px] font-semibold tracking-[0.14em] uppercase mb-10">
          D2D Sales · Entrepreneur Development · Est. 2024
        </p>

        {/* headline — Stripe-style italic contrast */}
        <h1 className="font-serif text-display-xl mb-9 max-w-4xl">
          <em>We build</em><br />
          entrepreneurs.
        </h1>

        {/* one-liner — Raycast-tight */}
        <p className="text-[1.2rem] text-muted max-w-lg leading-relaxed mb-12">
          The D2D sales channel for people who want more than a job — and are willing to do what it takes to build something real.
        </p>

        <div className="flex flex-wrap items-center gap-3 mb-20">
          <a href="#apply" className="inline-flex items-center gap-2 bg-green text-white font-medium px-7 py-3.5 rounded-lg hover:bg-green-hover transition-colors text-[14px]">
            Start your application <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#filter" className="inline-flex items-center gap-2 border border-border text-muted px-7 py-3.5 rounded-lg hover:border-green/40 hover:text-ink transition-colors text-[14px]">
            See if this is for you
          </a>
        </div>

        {/* stats — inline, no banner */}
        <div className="flex flex-wrap gap-x-14 gap-y-5 border-t border-border pt-10">
          {[["500+","reps in network"],["$4K+","avg first month"],["48 hr","to the field"],["50","states"]].map(([v,l])=>(
            <div key={l}>
              <div className="font-serif text-[2.25rem] text-green leading-none">{v}</div>
              <div className="text-faint text-xs mt-1.5 tracking-wide">{l}</div>
            </div>
          ))}
        </div>

        {/* ── Hero video slot — shows when HERO_VIDEO_SRC is set ── */}
        {HERO_VIDEO_SRC && (
          <div className="mt-14">
            {/* lazy import to avoid SSR issues */}
            <div className="relative w-full overflow-hidden rounded-2xl border border-border shadow-sm" style={{aspectRatio:"16/9"}}>
              <video
                src={HERO_VIDEO_SRC}
                poster={HERO_VIDEO_POSTER ?? undefined}
                autoPlay muted loop playsInline preload="metadata"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
            </div>
            <p className="text-[12px] text-faint mt-2">Watch: what month one actually looks like</p>
          </div>
        )}
      </section>

      {/* ═══ SOCIAL PROOF STRIP — Superhuman-style ════ */}
      <div className="border-y border-border bg-paper grain">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center gap-3 sm:gap-8">
          <p className="text-[12px] text-faint tracking-wide shrink-0">Placed into programs at</p>
          <div className="flex flex-wrap items-center gap-6 text-[13px] font-medium text-muted">
            {["Aptive Environmental","Vivint Smart Home","Trinity Solar","American Income Life","Clearlink / DISH"].map(co=>(
              <span key={co} className="opacity-60 hover:opacity-100 transition-opacity">{co}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ THE FILTER ════════════════════════════════ */}
      <section id="filter" className="max-w-6xl mx-auto px-6 py-28">
        <SectionTag n="01" label="Who This Is For" />

        <div className="grid md:grid-cols-2 gap-16 mb-14">
          <h2 className="font-serif text-display-lg max-w-md">
            We're not for everyone.<br />
            <em className="text-green">We mean that.</em>
          </h2>
          <div className="pt-1 space-y-5 text-[15px] text-muted leading-relaxed">
            <p>There is a specific type of person this works for. Not a background, not a degree — a mindset. Coachable, hungry, willing to do the uncomfortable thing without quitting.</p>
            <p>If you need to be comfortable before you try, this isn't for you. If you're done letting other people set the ceiling on what you earn, keep reading.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="border border-border rounded-xl p-7 bg-white">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-faint mb-5">Not for you if…</p>
            <div className="space-y-3.5">
              {["You want a salary with someone else deciding your worth.","You're not willing to hear you're wrong — and actually change.","You need comfort before you're willing to try.","You want a shortcut instead of a foundation."].map(s=>(
                <div key={s} className="flex gap-3 text-[14px] text-muted leading-relaxed">
                  <span className="text-faint shrink-0 mt-0.5">—</span>{s}
                </div>
              ))}
            </div>
          </div>
          <div className="border border-green/25 rounded-xl p-7 bg-green-faint">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-green mb-5">This is for you if…</p>
            <div className="space-y-3.5">
              {["You're willing to throw your ego away and be taught from scratch.","You're done with other people deciding what you're worth.","You want to build something — not just work somewhere.","You have the will to push through the hard part without quitting."].map(s=>(
                <div key={s} className="flex gap-3 text-[14px] text-ink leading-relaxed">
                  <span className="text-green shrink-0 mt-0.5">→</span>{s}
                </div>
              ))}
            </div>
          </div>
        </div>

        <blockquote className="mt-12 border-l-[2.5px] border-green pl-5">
          <p className="font-serif text-[1.25rem] italic text-muted leading-relaxed max-w-2xl">
            "The only requirements are will, coachability, and the guts to do the uncomfortable thing when it would be easier to quit. Everything else — we teach you."
          </p>
        </blockquote>
      </section>

      <Divider />

      {/* ═══ WHAT WE BUILD ══════════════════════════════ */}
      <section id="what" className="max-w-6xl mx-auto px-6 py-28">
        <SectionTag n="02" label="What We Build" />

        <div className="grid md:grid-cols-2 gap-16 mb-16 items-end">
          <h2 className="font-serif text-display-lg">
            Most companies teach<br />you how to sell.<br />
            <em className="text-green">We teach you how to live.</em>
          </h2>
          <p className="text-[15px] text-muted leading-relaxed">
            Sales is how we start. But what we're building is a foundation — the skills, habits, and knowledge that make you dangerous for the rest of your life, whether you stay in our org or run your own.
          </p>
        </div>

        {/* Editorial numbered list — no icon boxes */}
        <div className="divide-y divide-border">
          {PILLARS.map(([n, title, body]) => (
            <div key={n} className="grid grid-cols-[2.5rem_1fr] md:grid-cols-[2.5rem_12rem_1fr] items-baseline gap-x-5 gap-y-1 py-5 group cursor-default">
              <span className="text-green text-[11px] font-mono font-semibold tracking-wider">{n}</span>
              <span className="font-medium text-[14px] text-ink">{title}</span>
              <span className="col-start-2 md:col-start-3 text-[14px] text-muted leading-relaxed">{body}</span>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ═══ THE PATH ══════════════════════════════════ */}
      <section id="path" className="bg-paper grain">
        <div className="max-w-6xl mx-auto px-6 py-28">
          <SectionTag n="03" label="The Path" />

          <div className="grid md:grid-cols-2 gap-16 items-end mb-16">
            <h2 className="font-serif text-display-lg">
              Four stages.<br />
              <em className="text-green">One direction.</em>
            </h2>
            <p className="text-[15px] text-muted leading-relaxed">
              This isn't a job description. It's a career arc. Where you start is D2D. Where you go is entirely up to how badly you want it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {PATH.map(([n, title, body]) => (
              <div key={n} className="bg-white border border-border rounded-xl p-7 group hover:border-green/30 transition-colors">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-[3.5rem] text-border leading-none select-none">{n}</span>
                  <span className="text-green text-[11px] font-semibold tracking-widest uppercase">{title}</span>
                </div>
                <p className="text-[14px] text-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ RESULTS ════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 py-28">
        <SectionTag n="04" label="Real Results" />

        <h2 className="font-serif text-display-lg mb-16">
          What reps actually earn.<br />
          <em className="text-green">No projections. No fluff.</em>
        </h2>

        {/* Earnings grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mb-16">
          {[
            ["$4K+",    "avg first month",    "all verticals"],
            ["$20–30K", "per summer season",  "pest control"],
            ["$80–250K","per year top earn",  "solar & insurance"],
            ["500+",    "reps in network",    "all 50 states"],
          ].map(([n,l,s])=>(
            <div key={n} className="bg-[#F9F8F6] p-8">
              <div className="font-serif text-[2.5rem] text-green leading-none mb-2">{n}</div>
              <div className="text-[13px] font-medium text-ink mb-0.5">{l}</div>
              <div className="text-[12px] text-faint">{s}</div>
            </div>
          ))}
        </div>

        {/* ── Pest Control Vertical — Hawx Verified Numbers ── */}
        <div className="mt-16 mb-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-green mb-1">Our Verticals</p>
          <p className="text-[14px] text-muted mb-6">What our reps earn selling pest control with Hawx.</p>
          <div className="grid grid-cols-3 gap-px bg-border">
            {[
              ["$714,617", "avg top 10 earners",  "pest control · Hawx"],
              ["$482,077", "avg top 20 earners",  "pest control · Hawx"],
              ["$101,284", "avg top 100 earners", "pest control · Hawx"],
            ].map(([n,l,s])=>(
              <div key={n} className="bg-[#F9F8F6] p-8">
                <div className="font-serif text-[2.5rem] text-green leading-none mb-2">{n}</div>
                <div className="text-[13px] font-medium text-ink mb-0.5">{l}</div>
                <div className="text-[12px] text-faint">{s}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Incentive Trips ── */}
        <div className="mt-16 border border-border rounded-2xl p-10 bg-white">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-green mb-3">Where the top reps go</p>
              <h3 className="font-serif text-[2rem] leading-tight mb-4">
                The money is one part.<br />
                <em className="text-green">The life is the other.</em>
              </h3>
              <p className="text-[14px] text-muted leading-relaxed">Every year, the people who put in the work get taken somewhere. Fully paid. No fine print. We’ve done Greece, a European cruise, Costa Rica, Spain. The trips change. The standard doesn’t — you earn it, you’re on it.</p>
              <p className="text-[14px] text-muted leading-relaxed mt-3">Same goes for training. We invest in the people who invest in themselves — real sales education, leadership development, and access to some of the top minds in D2D.</p>
            </div>
            <div className="divide-y divide-border">
              {[
                ["Greece",           "Mediterranean. Fully paid."],
                ["European Cruise",  "The whole team, open sea."],
                ["Costa Rica",       "Leadership retreat."],
                ["Spain",            "Top producer trip."],
              ].map(([place, desc]) => (
                <div key={place} className="py-4 flex gap-4 items-baseline">
                  <span className="font-serif text-[1.4rem] text-green leading-none shrink-0">{place}</span>
                  <span className="text-[13px] text-muted">{desc}</span>
                </div>
              ))}
              <div className="pt-5">
                <p className="text-[12px] text-faint">Past team trips. New destination announced each year for top earners.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials — VideoCard (text-only until clips arrive, then add src/poster) */}
        <div className="divide-y divide-border">
          <VideoCard
            name="Marcus T."
            context="Pest Control · Texas · Summer 2026"
            quote="Zero experience going in. First month I cleared $6,800. Now I'm leading a team of four."
            src={undefined}   // TODO: swap in clip URL when received
            poster={undefined}
          />
          <VideoCard
            name="Jordan W."
            context="Solar · California · Q1 2026"
            quote="Three weeks applying online, nothing. Applied here, was in training that week. $140K year one."
            src={undefined}
            poster={undefined}
          />
          <VideoCard
            name="Priya S."
            context="Insurance · Florida · March 2026"
            quote="No surprises, no BS. Told me exactly what to expect before I started. Still here."
            src={undefined}
            poster={undefined}
          />
        </div>
      </section>

      <Divider />

      {/* ═══ WHO WE ARE ════════════════════════════════ */}
      <section className="bg-paper grain">
        <div className="max-w-6xl mx-auto px-6 py-28">
          <SectionTag n="05" label="Who We Are" />
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-display-lg mb-7">
                Built by someone who<br />
                <em className="text-green">actually did it.</em>
              </h2>
              <div className="space-y-4 text-[15px] text-muted leading-relaxed">
                <p>Dauntless was founded by a 21-year-old who made his first million in D2D. Not because he was talented — because he found the right people, stayed coachable, and refused to quit.</p>
                <p>He watched too many people with real ambition burn out because they had no guidance, no financial education, and no one in their corner who genuinely cared about where they ended up.</p>
                <p className="text-ink font-medium">Dauntless exists to fix that. If you have the will, we have the blueprint.</p>
              </div>
            </div>
            <div className="divide-y divide-border">
              {[
                "$1M+ earned before 21 through D2D",
                "National sales org — recruiting, management, and tech infrastructure",
                "Active across pest control, solar, fiber, and insurance",
                "500+ reps placed across all 50 states",
              ].map(s=>(
                <div key={s} className="py-4 flex gap-3 text-[14px] text-muted">
                  <span className="text-green shrink-0 mt-0.5">—</span>{s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 py-28">
        <SectionTag n="06" label="Questions" />
        <div className="grid md:grid-cols-[1fr_2.5fr] gap-16 items-start">
          <h2 className="font-serif text-display-md md:sticky md:top-24">
            Straight answers.<br />
            <em className="text-green">No runaround.</em>
          </h2>
          <div className="divide-y divide-border">
            {FAQS.map(([q,a])=>(
              <div key={q} className="py-6">
                <p className="font-medium text-[15px] text-ink mb-2.5">{q}</p>
                <p className="text-[14px] text-muted leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ═══ APPLY ══════════════════════════════════════ */}
      <section id="apply" className="max-w-6xl mx-auto px-6 py-28">
        <div className="grid md:grid-cols-[1fr_460px] gap-20 items-start">

          <div className="md:sticky md:top-24">
            <SectionTag n="07" label="Apply" />
            <h2 className="font-serif text-display-lg mb-5">
              Your next chapter<br />
              <em className="text-green">starts here.</em>
            </h2>
            <p className="text-[15px] text-muted leading-relaxed mb-10 max-w-sm">
              Fill this out. We review it and book a Zoom call with you — usually within 24 hours. Come ready to be honest about where you are and where you want to go.
            </p>
            <div className="divide-y divide-border">
              {["No experience required","First month avg: $4K+","Zoom call within 24 hrs","Zero cost to you"].map(s=>(
                <div key={s} className="py-3.5 flex items-center gap-2.5 text-[14px] text-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-green shrink-0"/>{s}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-border rounded-2xl p-8 shadow-sm shadow-black/[0.04]">
            <ApplyForm />
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ════════════════════════════════════ */}
      <footer className="border-t border-border py-7 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-[12px] text-faint">
          <div className="flex items-center gap-2">
            <span className="font-serif text-ink text-sm">Dauntless LLC</span>
            <span>· Salt Lake City, UT · EIN 99-1956370</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="/privacy" className="hover:text-ink transition-colors">Privacy Policy</a>
            <a href="/terms"   className="hover:text-ink transition-colors">Terms of Service</a>
          </div>
          <span>© {new Date().getFullYear()} Dauntless LLC.</span>
        </div>
      </footer>

    </div>
  );
}
