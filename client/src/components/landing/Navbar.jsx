import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-2.5 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7C6EFF] to-[#5B4EFF] flex items-center justify-center text-white text-sm font-bold font-display">
            🎯
          </div>
          <span className="font-display font-700 text-[17px] text-sniper-text tracking-tight">
            Study<span className="text-[#7C6EFF]">Sniper</span>
          </span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {["Features", "How it works", "Pricing", "Blog"].map((item) => (
            <button
              key={item}
              className="text-sniper-textSub text-sm font-body hover:text-sniper-text transition-colors duration-150"
            >
              {item}
            </button>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => navigate("/login")}
            className="btn-ghost text-sm px-5 py-2.5"
          >
            Sign in
          </button>
          <button
            onClick={() => navigate("/login")}
            className="btn-primary text-sm px-5 py-2.5"
          >
            Start free →
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-sniper-textSub"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-white/5 px-6 py-4 flex flex-col gap-4 mt-1">
          {["Features", "How it works", "Pricing", "Blog"].map((item) => (
            <button key={item} className="text-sniper-textSub text-sm text-left hover:text-sniper-text">
              {item}
            </button>
          ))}
          <div className="flex flex-col gap-2 pt-2 border-t border-white/5">
            <button onClick={() => navigate("/login")} className="btn-ghost text-sm">Sign in</button>
            <button onClick={() => navigate("/login")} className="btn-primary text-sm">Start free →</button>
          </div>
        </div>
      )}
    </nav>
  );
}
