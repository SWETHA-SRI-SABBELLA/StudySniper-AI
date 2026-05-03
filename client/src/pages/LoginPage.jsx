import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [mode, setMode]         = useState("login"); // "login" | "signup"
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [name, setName]         = useState("");
  const [loading, setLoading]   = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate auth — replace with real Firebase/JWT in Module 2
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    navigate("/onboarding");
  };

  return (
    <div className="min-h-screen bg-sniper-bg flex items-center justify-center relative overflow-hidden noise">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-100 pointer-events-none" />
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

      {/* Orbs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#7C6EFF] opacity-6 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#00E5B4] opacity-5 rounded-full blur-[100px]" />

      <div className="relative z-10 w-full max-w-md px-6">
        {/* Logo */}
        <div
          className="flex items-center justify-center gap-2.5 mb-8 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#7C6EFF] to-[#5B4EFF] flex items-center justify-center text-lg">
            🎯
          </div>
          <span className="font-display font-700 text-xl text-sniper-text tracking-tight">
            Study<span className="text-[#7C6EFF]">Sniper</span>
          </span>
        </div>

        {/* Card */}
        <div className="glass rounded-2xl border border-white/8 p-8">
          {/* Tab toggle */}
          <div className="flex gap-1 bg-white/4 rounded-xl p-1 mb-7">
            {["login", "signup"].map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`flex-1 py-2 rounded-lg text-sm font-body font-500 transition-all duration-200 ${
                  mode === m
                    ? "bg-[#7C6EFF] text-white shadow-lg"
                    : "text-sniper-muted hover:text-sniper-textSub"
                }`}
              >
                {m === "login" ? "Sign in" : "Create account"}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name field (signup only) */}
            {mode === "signup" && (
              <div>
                <label className="text-xs text-sniper-muted font-body mb-1.5 block">Full name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input-dark"
                  placeholder="Satya Sri"
                  required
                />
              </div>
            )}

            <div>
              <label className="text-xs text-sniper-muted font-body mb-1.5 block">Email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-dark"
                placeholder="you@college.edu"
                required
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs text-sniper-muted font-body">Password</label>
                {mode === "login" && (
                  <button type="button" className="text-xs text-[#7C6EFF] hover:underline font-body">
                    Forgot password?
                  </button>
                )}
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-dark"
                placeholder="••••••••"
                required
              />
            </div>

            {mode === "signup" && (
              <div className="flex items-start gap-2.5 pt-1">
                <input type="checkbox" id="terms" className="mt-0.5 accent-[#7C6EFF]" required />
                <label htmlFor="terms" className="text-xs text-sniper-muted font-body leading-relaxed">
                  I agree to the{" "}
                  <span className="text-[#7C6EFF] cursor-pointer">Terms of Service</span> and{" "}
                  <span className="text-[#7C6EFF] cursor-pointer">Privacy Policy</span>
                </label>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-3 mt-2 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                  </svg>
                  {mode === "login" ? "Signing in..." : "Creating account..."}
                </>
              ) : (
                <>
                  {mode === "login" ? "Sign in to StudySniper" : "Create free account"}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-white/6" />
            <span className="text-xs text-sniper-muted font-body">or continue with</span>
            <div className="flex-1 h-px bg-white/6" />
          </div>

          {/* Google OAuth placeholder */}
          <button className="btn-ghost w-full flex items-center justify-center gap-2 py-2.5">
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-sniper-muted font-body mt-5">
          Free forever for students · No credit card required
        </p>
      </div>
    </div>
  );
}
