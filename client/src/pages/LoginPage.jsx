import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const [mode, setMode] = useState("login"); // "login" | "signup"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (mode === "signup") {
        await signup(name, email, password);
      } else {
        await login(email, password);
      }

      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      alert(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-sniper-bg flex items-center justify-center relative overflow-hidden noise">
      
      {/* Background */}
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

          {/* Toggle */}
          <div className="flex gap-1 bg-white/4 rounded-xl p-1 mb-7">
            {["login", "signup"].map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`flex-1 py-2 rounded-lg text-sm font-body font-500 transition-all ${
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

            {/* Name (Signup only) */}
            {mode === "signup" && (
              <div>
                <label className="text-xs text-sniper-muted mb-1.5 block">
                  Full name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input-dark"
                  placeholder="Your name"
                  required
                />
              </div>
            )}

            {/* Email */}
            <div>
              <label className="text-xs text-sniper-muted mb-1.5 block">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-dark"
                placeholder="you@email.com"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-xs text-sniper-muted mb-1.5 block">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-dark"
                placeholder="••••••••"
                required
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-3 mt-2"
            >
              {loading
                ? mode === "login"
                  ? "Signing in..."
                  : "Creating account..."
                : mode === "login"
                ? "Sign in to StudySniper"
                : "Create free account"}
            </button>

          </form>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-sniper-muted mt-5">
          Free forever for students · No credit card required
        </p>

      </div>
    </div>
  );
}