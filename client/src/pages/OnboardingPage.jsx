import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const STEPS = ["Welcome", "Exam details", "Subjects & Topics", "Confidence check", "Ready!"];

const SAMPLE_SUBJECTS = ["DBMS", "Data Structures", "Operating Systems", "Computer Networks", "Algorithms"];

export default function OnboardingPage() {
  const navigate = useNavigate();
  const [step, setStep]           = useState(0);
  const [examName, setExamName]   = useState("");
  const [examDate, setExamDate]   = useState("");
  const [subjects, setSubjects]   = useState([]);
  const [subjectInput, setSubjectInput] = useState("");
  const [topics, setTopics]       = useState({});
  const [confidence, setConfidence] = useState({});
  const [loading, setLoading]     = useState(false);

  const addSubject = (s) => {
    const val = s || subjectInput.trim();
    if (val && !subjects.includes(val)) {
      setSubjects([...subjects, val]);
      setSubjectInput("");
    }
  };

  const removeSubject = (s) => setSubjects(subjects.filter((x) => x !== s));

  const daysLeft = examDate
    ? Math.max(0, Math.ceil((new Date(examDate) - new Date()) / (1000 * 60 * 60 * 24)))
    : null;

  const handleFinish = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-sniper-bg flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-100 pointer-events-none" />
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

      <div className="relative z-10 w-full max-w-lg">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#7C6EFF] to-[#5B4EFF] flex items-center justify-center text-sm">
            🎯
          </div>
          <span className="font-display font-700 text-lg text-sniper-text">
            Study<span className="text-[#7C6EFF]">Sniper</span>
          </span>
        </div>

        {/* Step progress bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            {STEPS.map((s, i) => (
              <div key={s} className="flex items-center gap-1">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-display font-700 transition-all"
                  style={{
                    background: i < step ? "#7C6EFF" : i === step ? "#7C6EFF20" : "transparent",
                    border: i <= step ? "1.5px solid #7C6EFF" : "1.5px solid rgba(255,255,255,0.1)",
                    color: i <= step ? (i < step ? "white" : "#7C6EFF") : "#6B7280",
                  }}
                >
                  {i < step ? "✓" : i + 1}
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    className="h-px w-8 sm:w-12 transition-all"
                    style={{ background: i < step ? "#7C6EFF" : "rgba(255,255,255,0.08)" }}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="text-center text-xs text-sniper-muted font-body">
            Step {step + 1} of {STEPS.length} — {STEPS[step]}
          </div>
        </div>

        {/* Card */}
        <div className="glass rounded-2xl border border-white/8 p-7">

          {/* ── STEP 0: Welcome ───────────────────────── */}
          {step === 0 && (
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h2 className="font-display font-800 text-2xl text-sniper-text mb-3 tracking-tight">
                Welcome to StudySniper
              </h2>
              <p className="text-sniper-textSub text-sm font-body leading-relaxed mb-6">
                Let's set up your AI-powered study plan. It takes about 3 minutes and we'll 
                generate a personalized exam strategy just for you.
              </p>
              <div className="flex flex-col gap-2.5 mb-6">
                {[
                  { icon: "🤖", text: "AI classifies your topics by priority" },
                  { icon: "📅", text: "Auto-generates hour-by-hour study schedule" },
                  { icon: "📊", text: "Tracks readiness and detects weak areas" },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-3 bg-white/3 rounded-xl p-3 text-sm text-sniper-textSub font-body">
                    <span className="text-base">{icon}</span>
                    {text}
                  </div>
                ))}
              </div>
              <button onClick={() => setStep(1)} className="btn-primary w-full py-3">
                Let's get started →
              </button>
            </div>
          )}

          {/* ── STEP 1: Exam details ──────────────────── */}
          {step === 1 && (
            <div>
              <h2 className="font-display font-700 text-xl text-sniper-text mb-1 tracking-tight">
                Tell us about your exam
              </h2>
              <p className="text-sniper-muted text-sm font-body mb-6">
                This helps AI build the right urgency and strategy.
              </p>
              <div className="space-y-4">
                <div>
                  <label className="text-xs text-sniper-muted font-body mb-1.5 block">Exam name</label>
                  <input
                    type="text"
                    value={examName}
                    onChange={(e) => setExamName(e.target.value)}
                    className="input-dark"
                    placeholder="e.g. Advanced DBMS Semester Exam"
                  />
                </div>
                <div>
                  <label className="text-xs text-sniper-muted font-body mb-1.5 block">Exam date</label>
                  <input
                    type="date"
                    value={examDate}
                    onChange={(e) => setExamDate(e.target.value)}
                    className="input-dark"
                    style={{ colorScheme: "dark" }}
                  />
                  {daysLeft !== null && (
                    <div className="mt-2 flex items-center gap-2">
                      <div
                        className="text-xs px-3 py-1 rounded-full border font-mono"
                        style={{
                          background: daysLeft < 7 ? "#FF4C5E15" : daysLeft < 14 ? "#FFB34415" : "#7C6EFF15",
                          color: daysLeft < 7 ? "#FF7A87" : daysLeft < 14 ? "#FFD07A" : "#A99EFF",
                          borderColor: daysLeft < 7 ? "#FF4C5E30" : daysLeft < 14 ? "#FFB34430" : "#7C6EFF30",
                        }}
                      >
                        {daysLeft} days remaining
                      </div>
                      {daysLeft < 7 && (
                        <span className="text-xs text-[#FF7A87]">🚨 Survival Mode will be active</span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ── STEP 2: Subjects ──────────────────────── */}
          {step === 2 && (
            <div>
              <h2 className="font-display font-700 text-xl text-sniper-text mb-1 tracking-tight">
                Add your subjects
              </h2>
              <p className="text-sniper-muted text-sm font-body mb-5">
                Type a subject or pick from suggestions.
              </p>

              {/* Input */}
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  value={subjectInput}
                  onChange={(e) => setSubjectInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && addSubject()}
                  className="input-dark flex-1"
                  placeholder="Type subject name..."
                />
                <button
                  onClick={() => addSubject()}
                  className="btn-primary px-4 py-2 text-sm"
                >
                  Add
                </button>
              </div>

              {/* Suggestions */}
              <div className="flex flex-wrap gap-2 mb-5">
                {SAMPLE_SUBJECTS.filter((s) => !subjects.includes(s)).map((s) => (
                  <button
                    key={s}
                    onClick={() => addSubject(s)}
                    className="text-xs px-3 py-1.5 rounded-full border border-white/8 bg-white/3 text-sniper-muted hover:text-sniper-textSub hover:border-white/15 transition-all font-body"
                  >
                    + {s}
                  </button>
                ))}
              </div>

              {/* Selected subjects */}
              {subjects.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {subjects.map((s, i) => {
                    const colors = ["#7C6EFF", "#FF4C5E", "#FFB344", "#34D399", "#00E5B4"];
                    const c = colors[i % colors.length];
                    return (
                      <div
                        key={s}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-body"
                        style={{ background: c + "15", color: c, borderColor: c + "30" }}
                      >
                        {s}
                        <button
                          onClick={() => removeSubject(s)}
                          className="opacity-60 hover:opacity-100 text-xs leading-none"
                        >
                          ×
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}

              {subjects.length === 0 && (
                <div className="text-center py-6 text-sniper-muted text-sm font-body">
                  No subjects added yet. Type above or pick a suggestion.
                </div>
              )}
            </div>
          )}

          {/* ── STEP 3: Confidence sliders ────────────── */}
          {step === 3 && (
            <div>
              <h2 className="font-display font-700 text-xl text-sniper-text mb-1 tracking-tight">
                Rate your confidence
              </h2>
              <p className="text-sniper-muted text-sm font-body mb-5">
                Be honest — AI uses this to detect weak areas and prioritize your plan.
              </p>
              <div className="space-y-5">
                {subjects.length > 0 ? subjects.map((s, i) => {
                  const colors = ["#7C6EFF","#FF4C5E","#FFB344","#34D399","#00E5B4"];
                  const c = colors[i % colors.length];
                  const val = confidence[s] ?? 50;
                  return (
                    <div key={s}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-sniper-textSub font-body">{s}</span>
                        <span className="text-sm font-mono" style={{ color: c }}>{val}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={val}
                        onChange={(e) => setConfidence({ ...confidence, [s]: Number(e.target.value) })}
                        className="w-full accent-[#7C6EFF] h-1.5 cursor-pointer"
                        style={{ accentColor: c }}
                      />
                      <div className="flex justify-between text-[10px] text-sniper-muted mt-1">
                        <span>No idea 😰</span>
                        <span>
                          {val < 35 ? "Need serious work" : val < 60 ? "Getting there" : val < 80 ? "Pretty good" : "Confident! 💪"}
                        </span>
                        <span>Expert 🧠</span>
                      </div>
                    </div>
                  );
                }) : (
                  <div className="text-center py-6 text-sniper-muted text-sm font-body">
                    No subjects added. Go back to Step 2 to add subjects.
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ── STEP 4: Ready ─────────────────────────── */}
          {step === 4 && (
            <div className="text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h2 className="font-display font-800 text-2xl text-sniper-text mb-3 tracking-tight">
                You're all set!
              </h2>
              <p className="text-sniper-textSub text-sm font-body leading-relaxed mb-6">
                AI is analyzing your inputs and building your personalized study plan.
                Your dashboard will be ready in seconds.
              </p>
              <div className="glass rounded-xl border border-white/8 p-4 mb-6 text-left space-y-2">
                {examName && (
                  <div className="flex items-center gap-2 text-sm font-body">
                    <span className="text-[#34D399]">✓</span>
                    <span className="text-sniper-muted">Exam:</span>
                    <span className="text-sniper-textSub">{examName}</span>
                  </div>
                )}
                {examDate && (
                  <div className="flex items-center gap-2 text-sm font-body">
                    <span className="text-[#34D399]">✓</span>
                    <span className="text-sniper-muted">Date:</span>
                    <span className="text-sniper-textSub">{examDate} ({daysLeft} days)</span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-sm font-body">
                  <span className="text-[#34D399]">✓</span>
                  <span className="text-sniper-muted">Subjects:</span>
                  <span className="text-sniper-textSub">{subjects.length > 0 ? subjects.join(", ") : "DBMS (demo)"}</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-body">
                  <span className="text-[#34D399]">✓</span>
                  <span className="text-sniper-muted">AI plan:</span>
                  <span className="text-[#7C6EFF]">Generating now...</span>
                </div>
              </div>
              <button
                onClick={handleFinish}
                disabled={loading}
                className="btn-primary w-full py-3 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                    Building your AI study plan...
                  </>
                ) : (
                  <>Launch my dashboard →</>
                )}
              </button>
            </div>
          )}

          {/* Nav buttons */}
          {step > 0 && step < 4 && (
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setStep(step - 1)}
                className="btn-ghost flex-1 py-2.5 text-sm"
              >
                ← Back
              </button>
              <button
                onClick={() => setStep(step + 1)}
                className="btn-primary flex-1 py-2.5 text-sm"
              >
                Continue →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
