"use client";
import { useState, FormEvent } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

type Field = { first_name: string; last_name: string; email: string; phone: string; city: string; state: string; situation: string; why_apply: string; };
const EMPTY: Field = { first_name: "", last_name: "", email: "", phone: "", city: "", state: "", situation: "", why_apply: "" };

export default function ApplyForm() {
  const [f, setF] = useState<Field>(EMPTY);
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [error, setError] = useState("");

  const set = (k: keyof Field) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setF((prev) => ({ ...prev, [k]: e.target.value }));

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(f),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      window.location.href = data.redirect;
    } catch (err: unknown) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Try again.");
    }
  };

  const inputCls = "w-full bg-[#0B1510] border border-[#1C3320] rounded px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-[#1A7A40] transition-colors";
  const labelCls = "block text-white/50 text-xs uppercase tracking-wider mb-1.5";

  return (
    <form onSubmit={submit} className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>First name *</label>
          <input required className={inputCls} placeholder="Marcus" value={f.first_name} onChange={set("first_name")} />
        </div>
        <div>
          <label className={labelCls}>Last name</label>
          <input className={inputCls} placeholder="Thompson" value={f.last_name} onChange={set("last_name")} />
        </div>
      </div>

      <div>
        <label className={labelCls}>Phone number *</label>
        <input required type="tel" className={inputCls} placeholder="+1 (801) 555-0100" value={f.phone} onChange={set("phone")} />
      </div>

      <div>
        <label className={labelCls}>Email *</label>
        <input required type="email" className={inputCls} placeholder="you@email.com" value={f.email} onChange={set("email")} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>City</label>
          <input className={inputCls} placeholder="Phoenix" value={f.city} onChange={set("city")} />
        </div>
        <div>
          <label className={labelCls}>State</label>
          <input className={inputCls} placeholder="AZ" value={f.state} onChange={set("state")} />
        </div>
      </div>

      <div>
        <label className={labelCls}>Current situation</label>
        <select className={inputCls + " appearance-none cursor-pointer"} value={f.situation} onChange={set("situation")}>
          <option value="" disabled>Select one…</option>
          <option value="student">Student</option>
          <option value="employed">Employed — looking for more</option>
          <option value="unemployed">Unemployed / in-between</option>
          <option value="entrepreneur">Already trying to build something</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className={labelCls}>Why do you want this? (2–3 sentences)</label>
        <textarea
          className={inputCls + " resize-none h-24"}
          placeholder="Be real. We're not looking for the polished answer — we're looking for the honest one."
          value={f.why_apply}
          onChange={set("why_apply")}
        />
      </div>

      {error && <p className="text-red-400 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full flex items-center justify-center gap-2 bg-[#1A7A40] hover:bg-[#166534] disabled:opacity-60 text-white font-semibold py-4 rounded transition-colors text-sm"
      >
        {status === "submitting" ? (
          <><Loader2 className="w-4 h-4 animate-spin" /> Submitting…</>
        ) : (
          <>Book Your Zoom Call <ArrowRight className="w-4 h-4" /></>
        )}
      </button>

      <p className="text-white/25 text-xs text-center leading-relaxed">
        By applying you agree to be contacted by our team.<br />
        We respect your privacy. No spam.{" "}
        <a href="/privacy" className="underline hover:text-white/50 transition-colors">Privacy Policy</a>
      </p>
    </form>
  );
}
