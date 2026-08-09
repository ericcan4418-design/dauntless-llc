"use client";
import { useState, FormEvent } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

type F = { first_name:string; last_name:string; email:string; phone:string; city:string; state:string; situation:string; why_apply:string };
const EMPTY:F = { first_name:"",last_name:"",email:"",phone:"",city:"",state:"",situation:"",why_apply:"" };

export default function ApplyForm() {
  const [f,setF]      = useState<F>(EMPTY);
  const [st,setSt]    = useState<"idle"|"loading"|"error">("idle");
  const [err,setErr]  = useState("");

  const set = (k:keyof F) =>
    (e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
      setF(p=>({...p,[k]:e.target.value}));

  const submit = async (e:FormEvent) => {
    e.preventDefault();
    setSt("loading"); setErr("");
    try {
      const r = await fetch("/api/apply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f)});
      const d = await r.json();
      if(!r.ok) throw new Error(d.error||"Something went wrong");
      window.location.href = d.redirect;
    } catch(ex:unknown) {
      setSt("error");
      setErr(ex instanceof Error ? ex.message : "Something went wrong. Try again.");
    }
  };

  // Bottom-border-only inputs — premium / editorial feel
  const inp = "w-full bg-transparent border-0 border-b border-border py-3 text-[14px] text-ink placeholder-faint focus:outline-none focus:border-green transition-colors";
  const lbl = "block text-[10px] font-semibold uppercase tracking-[0.12em] text-faint mb-1";

  return (
    <form onSubmit={submit} className="space-y-7">
      <div className="grid grid-cols-2 gap-6">
        <div><label className={lbl}>First name *</label><input required className={inp} placeholder="Marcus" value={f.first_name} onChange={set("first_name")}/></div>
        <div><label className={lbl}>Last name</label><input className={inp} placeholder="Thompson" value={f.last_name} onChange={set("last_name")}/></div>
      </div>
      <div><label className={lbl}>Phone *</label><input required type="tel" className={inp} placeholder="+1 (555) 000-0000" value={f.phone} onChange={set("phone")}/></div>
      <div><label className={lbl}>Email *</label><input required type="email" className={inp} placeholder="you@email.com" value={f.email} onChange={set("email")}/></div>
      <div className="grid grid-cols-2 gap-6">
        <div><label className={lbl}>City</label><input className={inp} placeholder="Phoenix" value={f.city} onChange={set("city")}/></div>
        <div><label className={lbl}>State</label><input className={inp} placeholder="AZ" value={f.state} onChange={set("state")}/></div>
      </div>
      <div>
        <label className={lbl}>Current situation</label>
        <select className={inp+" appearance-none cursor-pointer"} value={f.situation} onChange={set("situation")}>
          <option value="" disabled>Select one…</option>
          <option value="student">Student</option>
          <option value="employed">Employed — want more</option>
          <option value="unemployed">Unemployed / in-between</option>
          <option value="entrepreneur">Already building something</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label className={lbl}>Why do you want this?</label>
        <textarea className={inp+" resize-none h-20 pt-3"} placeholder="Be real. We want the honest answer, not the polished one." value={f.why_apply} onChange={set("why_apply")}/>
      </div>

      {err && <p className="text-red-500 text-[13px]">{err}</p>}

      <button type="submit" disabled={st==="loading"}
        className="w-full flex items-center justify-center gap-2 bg-green hover:bg-green-hover disabled:opacity-50 text-white font-medium py-3.5 rounded-lg transition-colors text-[14px]">
        {st==="loading"
          ? <><Loader2 className="w-4 h-4 animate-spin"/>Submitting…</>
          : <>Book your Zoom call <ArrowRight className="w-4 h-4"/></>
        }
      </button>

      <p className="text-[11px] text-faint text-center">
        By applying you agree to be contacted.{" "}
        <a href="/privacy" className="underline hover:text-muted transition-colors">Privacy Policy</a>
      </p>
    </form>
  );
}
