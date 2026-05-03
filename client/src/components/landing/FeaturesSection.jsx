import React, { useState } from "react";

const FEATURES = [
  {
    icon: "🎯",
    title: "AI Topic Prioritization",
    desc: "Claude classifies every topic into Master It, Cram It, Skim It, or Skip It — based on weightage, difficulty, and your confidence level.",
    color: "#7C6EFF",
    tags: ["Marks weightage", "Difficulty index", "Confidence score"],
    preview: (
      <div className="space-y-2.5 mt-3">
        {[
          { name: "ACID Properties",  badge: "Master It",  c: "#7C6EFF", w: 15 },
          { name: "Normalization",    badge: "Master It",  c: "#7C6EFF", w: 14 },
          { name: "SQL Advanced",     badge: "Cram It",    c: "#FF4C5E", w: 11 },
          { name: "DB History",       badge: "Skip It",    c: "#6B7280", w: 2  },
        ].map(({ name, badge, c, w }) => (
          <div key={name} className="flex items-center gap-3">
            <span className="text-xs text-sniper-textSub flex-1 truncate">{name}</span>
            <span
              className="text-[10px] px-2 py-0.5 rounded-full border"
              style={{ background: c + "15", color: c, borderColor: c + "30" }}
            >
              {badge}
            </span>
            <span className="text-[10px] font-mono text-sniper-muted w-7 text-right">{w}%</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: "📅",
    title: "Smart Study Scheduler",
    desc: "Auto-generates a day-wise, hour-by-hour study plan with built-in breaks. Dynamically replans if you fall behind or miss sessions.",
    color: "#00E5B4",
    tags: ["Hour-by-hour plan", "Adaptive timeline", "Study + breaks"],
    preview: (
      <div className="mt-3">
        {[
          { time: "9:00 AM",  task: "ER Diagrams review",     color: "#7C6EFF", dur: "1.5h" },
          { time: "10:45 AM", task: "Normalization deep dive", color: "#7C6EFF", dur: "1.5h" },
          { time: "1:00 PM",  task: "Transactions mastery",   color: "#FF4C5E", dur: "2h" },
          { time: "3:00 PM",  task: "SQL practice — 20q",     color: "#FFB344", dur: "1h" },
        ].map(({ time, task, color, dur }) => (
          <div key={time} className="flex items-center gap-3 py-1.5 border-b border-white/4 last:border-0">
            <span className="text-[10px] text-sniper-muted w-16 shrink-0 font-mono">{time}</span>
            <div className="w-0.5 h-6 rounded" style={{ background: color }} />
            <span className="text-xs text-sniper-textSub flex-1">{task}</span>
            <span className="text-[10px] text-sniper-muted">{dur}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: "🚨",
    title: "Exam Survival Mode",
    desc: "When the exam is near, AI switches to emergency mode — showing only high-impact topics, fast revision roadmaps, and probable questions.",
    color: "#FF4C5E",
    tags: ["Emergency mode", "Probable questions", "Fast roadmap"],
    preview: (
      <div className="mt-3 bg-[#FF4C5E]/8 border border-[#FF4C5E]/20 rounded-xl p-3">
        <div className="text-[10px] text-[#FF7A87] font-mono uppercase tracking-wider mb-2">🚨 Survival Mode Active</div>
        {[
          "ACID properties with examples (15 marks)",
          "Draw ER diagram for hospital DB (10 marks)",
          "Explain 3NF vs BCNF (10 marks)",
        ].map((q, i) => (
          <div key={i} className="flex items-start gap-2 py-1.5 border-b border-[#FF4C5E]/10 last:border-0">
            <span className="text-[10px] text-[#FF7A87] font-mono shrink-0">Q{i + 1}</span>
            <span className="text-[10px] text-sniper-textSub">{q}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: "🔍",
    title: "AI Weakness Detector",
    desc: "Detects your weak topics and low-confidence areas automatically. Schedules extra revision exactly where you need it most.",
    color: "#FFB344",
    tags: ["Gap analysis", "Auto revision", "Smart alerts"],
    preview: (
      <div className="mt-3 space-y-2">
        {[
          { name: "Concurrency Control", pct: 22, status: "Critical" },
          { name: "Recovery Techniques", pct: 35, status: "Weak" },
          { name: "Transactions",        pct: 42, status: "Needs work" },
        ].map(({ name, pct, status }) => (
          <div key={name}>
            <div className="flex justify-between mb-1">
              <span className="text-[11px] text-sniper-textSub">{name}</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FF4C5E]/15 text-[#FF7A87] border border-[#FF4C5E]/20">{status}</span>
            </div>
            <div className="progress-track">
              <div className="h-full rounded-full" style={{ width: `${pct}%`, background: pct < 40 ? "#FF4C5E" : "#FFB344" }} />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: "📄",
    title: "PDF Intelligence",
    desc: "Upload syllabus, notes, and past papers. AI extracts important questions, repeated concepts, formula sheets, and key definitions automatically.",
    color: "#7C6EFF",
    tags: ["Key concepts", "Formula sheets", "Past papers"],
    preview: (
      <div className="mt-3 space-y-2">
        {[
          { file: "DBMS_Syllabus.pdf",      status: "22 topics extracted", c: "#34D399" },
          { file: "Previous_Papers_2023.pdf", status: "18 repeated qs",    c: "#34D399" },
          { file: "Formula_Sheet.pdf",        status: "Analyzing...",        c: "#FFB344" },
        ].map(({ file, status, c }) => (
          <div key={file} className="flex items-center gap-3 py-2 px-3 bg-white/3 rounded-lg border border-white/4">
            <span className="text-base">📄</span>
            <div className="flex-1 min-w-0">
              <div className="text-[11px] text-sniper-text truncate">{file}</div>
              <div className="text-[10px] mt-0.5" style={{ color: c }}>{status}</div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: "🔄",
    title: "Smart Revision Engine",
    desc: "Uses spaced repetition science — schedules each topic for Day 1, Day 3, Day 7, and pre-exam reviews so nothing slips through.",
    color: "#34D399",
    tags: ["Spaced repetition", "4-stage system", "Memory science"],
    preview: (
      <div className="mt-3">
        {[
          { topic: "ACID Properties",  stages: [1, 1, 0, 0], next: "Today" },
          { topic: "ER Diagrams",      stages: [1, 1, 1, 0], next: "May 2" },
          { topic: "Normalization",    stages: [1, 0, 0, 0], next: "Apr 30" },
        ].map(({ topic, stages, next }) => (
          <div key={topic} className="flex items-center gap-3 py-2 border-b border-white/4 last:border-0">
            <span className="text-[11px] text-sniper-textSub flex-1">{topic}</span>
            <div className="flex gap-1">
              {["D1","D3","D7","Pre"].map((d, i) => (
                <div
                  key={d}
                  className="w-5 h-5 rounded-full border flex items-center justify-center text-[8px] font-mono"
                  style={{
                    background: stages[i] ? "#34D39920" : "transparent",
                    borderColor: stages[i] ? "#34D399" : "rgba(255,255,255,0.1)",
                    color: stages[i] ? "#34D399" : "#6B7280",
                  }}
                >
                  {stages[i] ? "✓" : d}
                </div>
              ))}
            </div>
            <span className="text-[10px] text-sniper-muted w-12 text-right">{next}</span>
          </div>
        ))}
      </div>
    ),
  },
];

export default function FeaturesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 relative" id="features">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="tag tag-accent inline-flex mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7C6EFF] animate-pulse" />
            Core features
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-800 tracking-tight text-sniper-text mb-4">
            Everything you need to{" "}
            <span className="gradient-text">dominate your exam</span>
          </h2>
          <p className="text-sniper-textSub text-lg max-w-2xl mx-auto font-body leading-relaxed">
            Not just a planner. An AI study operating system that thinks ahead, 
            detects your gaps, and builds the perfect strategy for your specific exam.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              onClick={() => setActive(i)}
              className={`glass rounded-2xl p-5 border card-hover cursor-pointer transition-all duration-200 ${
                active === i
                  ? "border-opacity-40 glow-accent"
                  : "border-white/5 hover:border-white/10"
              }`}
              style={active === i ? { borderColor: f.color + "60" } : {}}
            >
              {/* Icon + title */}
              <div className="flex items-start gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
                  style={{ background: f.color + "15" }}
                >
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-display font-600 text-sniper-text text-[15px] leading-snug">{f.title}</h3>
                </div>
              </div>

              <p className="text-sniper-textSub text-sm font-body leading-relaxed mb-3">
                {f.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-0">
                {f.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-2 py-0.5 rounded-full border"
                    style={{
                      background: f.color + "10",
                      color: f.color,
                      borderColor: f.color + "25",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Live preview */}
              {active === i && f.preview}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
