import React from "react";
import { useNavigate } from "react-router-dom";

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[300px] bg-[#7C6EFF] opacity-10 blur-[100px] rounded-full" />
        </div>

        <div className="relative glass rounded-3xl border border-[#7C6EFF]/20 p-12 text-center overflow-hidden">
          <div className="scan-line" />
          <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-50 pointer-events-none" />

          <div className="relative z-10">
            <div className="tag tag-accent inline-flex mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C6EFF] animate-pulse" />
              Start today — it's free
            </div>

            <h2 className="font-display text-4xl lg:text-5xl font-800 tracking-tight text-sniper-text mb-4 leading-tight">
              Your exam is coming.
              <br />
              <span className="gradient-text">Are you ready?</span>
            </h2>

            <p className="text-sniper-textSub text-lg font-body leading-relaxed max-w-xl mx-auto mb-8">
              Stop guessing what to study. Let StudySniper's AI analyze your exam,
              prioritize your topics, and build your perfect study plan — in 12 minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => navigate("/login")}
                className="btn-primary text-base px-8 py-4 flex items-center justify-center gap-2"
              >
                Get started for free
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <button className="btn-ghost text-base px-8 py-4">
                No credit card needed
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 flex-wrap">
              {["✓ Free to start", "✓ AI-powered", "✓ Works for any exam", "✓ Mobile friendly"].map((f) => (
                <span key={f} className="text-sm text-sniper-muted font-body">{f}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
