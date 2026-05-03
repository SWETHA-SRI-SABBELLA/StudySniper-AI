import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ── Animated typing text ─────────────────────────── */
const PHRASES = [
  "smarter, not harder",
  "with AI-powered focus",
  "and beat the exam",
  "like a top ranker",
];

function TypewriterText() {
  const [idx, setIdx]     = useState(0);
  const [char, setChar]   = useState(0);
  const [del, setDel]     = useState(false);
  const [text, setText]   = useState("");

  useEffect(() => {
    const phrase  = PHRASES[idx];
    let timeout;

    if (!del && char <= phrase.length) {
      setText(phrase.slice(0, char));
      timeout = setTimeout(() => setChar(c => c + 1), 60);
    } else if (!del && char > phrase.length) {
      timeout = setTimeout(() => setDel(true), 1800);
    } else if (del && char >= 0) {
      setText(phrase.slice(0, char));
      timeout = setTimeout(() => setChar(c => c - 1), 30);
    } else {
      setDel(false);
      setIdx(i => (i + 1) % PHRASES.length);
    }
    return () => clearTimeout(timeout);
  }, [char, del, idx]);

  return (
    <span className="gradient-text">
      {text}
      <span className="inline-block w-0.5 h-[0.9em] bg-[#7C6EFF] ml-0.5 align-middle animate-pulse" />
    </span>
  );
}

/* ── Floating topic cards ─────────────────────────── */
const FLOAT_CARDS = [
  { label: "Transactions",    badge: "Master It",  color: "#7C6EFF", conf: 82,  top: "12%",  left: "-5%",  delay: "0s" },
  { label: "SQL Joins",       badge: "Cram It",    color: "#FF4C5E", conf: 55,  top: "55%",  left: "-8%",  delay: "1.5s" },
  { label: "ER Diagrams",     badge: "Skim It",    color: "#FFB344", conf: 90,  top: "78%",  right: "-4%", delay: "0.8s" },
  { label: "Normalization",   badge: "Master It",  color: "#7C6EFF", conf: 68,  top: "18%",  right: "-6%", delay: "2s" },
  { label: "Indexing",        badge: "Cram It",    color: "#FF4C5E", conf: 44,  top: "42%",  right: "-10%",delay: "0.3s" },
];

function FloatingCard({ label, badge, color, conf, top, left, right, delay }) {
  return (
    <div
      style={{
        position: "absolute",
        top,
        left,
        right,
        animationDelay: delay,
        animationDuration: "5s",
      }}
      className="animate-float glass rounded-xl p-3 w-44 hidden lg:block"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-body text-sniper-textSub">{label}</span>
        <span
          className="tag text-[10px] px-2 py-0.5"
          style={{
            background: color + "18",
            color,
            border: `1px solid ${color}30`,
          }}
        >
          {badge}
        </span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${conf}%` }} />
      </div>
      <div className="flex justify-between mt-1.5">
        <span className="text-[10px] text-sniper-muted">Confidence</span>
        <span className="text-[10px] font-mono" style={{ color }}>{conf}%</span>
      </div>
    </div>
  );
}

/* ── Dashboard preview mini card ─────────────────── */
function DashboardPreview() {
  return (
    <div className="relative mx-auto max-w-lg">
      {/* Glow behind */}
      <div className="absolute inset-0 bg-[#7C6EFF] opacity-10 blur-[80px] rounded-full" />

      {/* Main preview card */}
      <div className="relative glass rounded-2xl border border-white/8 overflow-hidden glow-accent">
        {/* Fake browser bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
          <div className="w-3 h-3 rounded-full bg-[#FF4C5E]/70" />
          <div className="w-3 h-3 rounded-full bg-[#FFB344]/70" />
          <div className="w-3 h-3 rounded-full bg-[#34D399]/70" />
          <div className="ml-3 flex-1 h-5 bg-white/4 rounded-md flex items-center px-3">
            <span className="text-[10px] font-mono text-sniper-muted">studysniper.app/dashboard</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Exam countdown banner */}
          <div className="flex items-center justify-between bg-[#FF4C5E]/10 border border-[#FF4C5E]/20 rounded-xl px-4 py-3 mb-4">
            <div>
              <div className="text-[10px] text-[#FF7A87] font-mono uppercase tracking-wider">Advanced DBMS</div>
              <div className="text-sm font-display font-600 text-sniper-text mt-0.5">Exam in <span className="text-[#FF4C5E]">12 days</span></div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-display font-800 text-[#FF4C5E]">68%</div>
              <div className="text-[10px] text-sniper-muted">Ready</div>
            </div>
          </div>

          {/* Priority pills row */}
          <div className="flex gap-2 mb-4 flex-wrap">
            {[
              { l: "6 Master It",  c: "#7C6EFF" },
              { l: "4 Cram It",    c: "#FF4C5E" },
              { l: "7 Skim It",    c: "#FFB344" },
              { l: "5 Skip It",    c: "#6B7280" },
            ].map(({ l, c }) => (
              <span
                key={l}
                className="text-[10px] font-body px-2.5 py-1 rounded-full border"
                style={{ background: c + "15", color: c, borderColor: c + "30" }}
              >
                {l}
              </span>
            ))}
          </div>

          {/* Topic bars */}
          <div className="space-y-2.5">
            {[
              { name: "ACID + Transactions", pct: 42, color: "#FF4C5E" },
              { name: "Normalization",        pct: 68, color: "#FFB344" },
              { name: "ER Diagrams",          pct: 88, color: "#34D399" },
              { name: "SQL Advanced",         pct: 55, color: "#7C6EFF" },
            ].map(({ name, pct, color }) => (
              <div key={name}>
                <div className="flex justify-between mb-1">
                  <span className="text-[11px] text-sniper-textSub">{name}</span>
                  <span className="text-[11px] font-mono" style={{ color }}>{pct}%</span>
                </div>
                <div className="progress-track">
                  <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, background: color }} />
                </div>
              </div>
            ))}
          </div>

          {/* AI insight strip */}
          <div className="mt-4 flex items-start gap-3 bg-[#7C6EFF]/8 border border-[#7C6EFF]/15 rounded-xl p-3">
            <div className="text-base mt-0.5">🎯</div>
            <div>
              <div className="text-[10px] text-[#A99EFF] font-body font-500 uppercase tracking-wider mb-0.5">AI Coach</div>
              <div className="text-[11px] text-sniper-textSub leading-relaxed">
                Focus on Transactions today — it's 15% of your exam but only 42% confident.
              </div>
            </div>
          </div>
        </div>

        {/* Scan line animation */}
        <div className="scan-line" />
      </div>

      {/* Floating cards around */}
      {FLOAT_CARDS.map((c) => (
        <FloatingCard key={c.label} {...c} />
      ))}
    </div>
  );
}

/* ── Hero Section ─────────────────────────────────── */
export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-16 noise">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-100 pointer-events-none" />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

      {/* Purple orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7C6EFF] opacity-5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#00E5B4] opacity-5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Copy ────────────────────────────── */}
          <div>
            {/* Eyebrow tag */}
            <div
              className="inline-flex items-center gap-2 tag tag-accent mb-6"
              style={{ animationDelay: "0ms" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C6EFF] animate-pulse" />
              AI-powered exam preparation
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl lg:text-6xl font-800 leading-[1.1] tracking-tight text-sniper-text mb-2">
              Study
            </h1>
            <h1 className="font-display text-5xl lg:text-6xl font-800 leading-[1.1] tracking-tight text-sniper-text mb-4">
              <TypewriterText />
            </h1>

            <p className="font-body text-sniper-textSub text-lg leading-relaxed max-w-md mb-8">
              StudySniper is your AI study operating system. It prioritizes topics, 
              builds smart schedules, detects weaknesses, and adapts when you fall behind — 
              all powered by Claude AI.
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap gap-3 mb-10">
              <button
                onClick={() => navigate("/login")}
                className="btn-primary flex items-center gap-2 text-base px-7 py-3.5"
              >
                Start for free
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <button className="btn-ghost flex items-center gap-2 text-base px-7 py-3.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Watch demo
              </button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {["#7C6EFF","#FF4C5E","#FFB344","#34D399","#00E5B4"].map((c, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-sniper-bg flex items-center justify-center text-[10px] font-display font-700 text-white"
                    style={{ background: c }}
                  >
                    {["S","R","A","K","P"][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#FFB344">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <div className="text-xs text-sniper-muted font-body">
                  Trusted by <span className="text-sniper-textSub font-500">2,400+</span> students
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Dashboard preview ──────────────── */}
          <div className="relative">
            <DashboardPreview />
          </div>
        </div>

        {/* ── Stats bar ─────────────────────────────── */}
        <div className="mt-20 glass rounded-2xl border border-white/5 p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "2,400+",  label: "Students using StudySniper",  color: "#7C6EFF" },
            { value: "89%",     label: "Students improved exam scores", color: "#34D399" },
            { value: "3.2×",    label: "Faster topic coverage",         color: "#00E5B4" },
            { value: "12 min",  label: "Average setup time",            color: "#FFB344" },
          ].map(({ value, label, color }) => (
            <div key={label} className="text-center">
              <div
                className="font-display text-3xl font-800 tracking-tight mb-1"
                style={{ color }}
              >
                {value}
              </div>
              <div className="text-xs text-sniper-muted font-body leading-snug">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
