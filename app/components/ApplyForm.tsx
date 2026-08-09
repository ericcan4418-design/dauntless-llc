"use client";
import { useState, FormEvent } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

type Field = {
  first_name: string; last_name: string; email: string; phone: string;
  city: string; state: string; situation: string; why_apply: string;
};
const EMPTY: Field = { first_name:"", last_name:"", email:"", phone:"", city:"", state:"", situation:"", why_apply:"" };

export default function ApplyForm() {
  const [f, setF]       = useState<Field>(EMPTY);
  const [status, setS]  = useState<"idle"|"submitting"|"error">("idle");
  const [err, setErr]   = useState("");

  const set = (k: keyof Field) =>
    (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
      setF(p => ({ ...p, [k]: e.target.value }));

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setS("submitting"); setErr("");
    try {
      const res  = await fetch("/api/apply", { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify(f) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      window.location.href = data.redirect;
    } catch (ex: unknown) {
      setS("error");
      setErr(ex instanceof Error ? ex.message : "Something went wrong. Please try again.");
    }
  };

  const input = "w-full border-b border-[#E5E5E0] bg-transparent px-0 py-3 text-sm text-ink placeholder-[#C8C8C3] focus:outline-none focus:border-[#1A6B3A] transition-colors";
  const label = "block text-[11px] font-semibold uppercase tracking-[0.1em] text-[#9D9D99] mb-1";

  return (
    <form onSubmit={submit} className="space-y-7">
      <div className="grid grid-cols-2 gap-6">
        <div><label className={label}>First name *</label><input required className={input} placeholder="Marcus" value={f.first_name} onChange={set("first_name")} /></div>
        <div><label className={label}>Last name</label><input className={input} placeholder="Thompson" value={f.last_name} onChange={set("last_name")} /></div>
      </div>

      <div><label className={label}>Phone *</label><input required type="tel" className={input} placeholder="+1 (555) 000-0000" value={f.phone} onChange={set("phone")} /></div>
      <div><label className={label}>Email *</label><input required type="email" className={input} placeholder="you@email.com" value={f.email} onChange={set("email")} /></div>

      <div className="grid grid-cols-2 gap-6">
        <div><label className={label}>City</label><input className={input} placeholder="Phoenix" value={f.city} onChange={set("city")} /></div>
        <div><label className={label}>State</label><input className={input} placeholder="AZ" value={f.state} onChange={set("state")} /></div>
      </div>

      <div>
        <label className={label}>Current situation</label>
        <select className={input + " appearance-none cursor-pointer"} value={f.situation} onChange={set("situation")}>
          <option value="" disabled>Select one…</option>
          <option value="student">Student</option>
          <option value="employed">Employed — looking for more</option>
          <option value="unemployed">Unemployed / in-between</option>
          <option value="entrepreneur">Already trying to build something</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className={label}>Why do you want this?</label>
        <textarea
          className={input + " resize-none h-24 pt-3"}
          placeholder="Be real. We're not looking for the polished answer — we want the honest one."
          value={f.why_apply}
          onChange={set("why_apply")}
        />
      </div>

      {err && <p className="text-red-500 text-sm">{err}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full flex items-center justify-center gap-2 bg-[#1A6B3A] hover:bg-[#166032] disabled:opacity-60 text-white font-medium py-3.5 rounded-md transition-colors text-sm"
      >
        {status === "submitting"
          ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting…</>
          : <>Book your Zoom call <ArrowRight className="w-4 h-4" /></>
        }
      </button>

      <p className="text-[11px] text-[#C8C8C3] text-center leading-relaxed">
        By applying you agree to be contacted by our team. No spam.{" "}
        <a href="/privacy" className="underline hover:text-faint transition-colors">Privacy Policy</a>
      </p>
    </form>
  );
}
