import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#7C6EFF] to-[#5B4EFF] flex items-center justify-center text-sm">
                🎯
              </div>
              <span className="font-display font-700 text-[15px] text-sniper-text">
                Study<span className="text-[#7C6EFF]">Sniper</span>
              </span>
            </div>
            <p className="text-xs text-sniper-muted font-body leading-relaxed">
              AI-powered exam preparation platform for college students and competitive exam aspirants.
            </p>
            <div className="flex gap-3 mt-4">
              {["𝕏", "in", "gh"].map((s) => (
                <button
                  key={s}
                  className="w-8 h-8 rounded-lg glass border border-white/6 flex items-center justify-center text-xs text-sniper-muted hover:text-sniper-text hover:border-white/15 transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            {
              title: "Product",
              links: ["Features", "How it works", "Pricing", "Changelog"],
            },
            {
              title: "Resources",
              links: ["Documentation", "API Reference", "Blog", "Community"],
            },
            {
              title: "Company",
              links: ["About", "Privacy Policy", "Terms of Service", "Contact"],
            },
          ].map((col) => (
            <div key={col.title}>
              <div className="text-xs font-display font-600 text-sniper-text uppercase tracking-wider mb-3">
                {col.title}
              </div>
              <div className="flex flex-col gap-2">
                {col.links.map((l) => (
                  <button
                    key={l}
                    className="text-sm text-sniper-muted hover:text-sniper-textSub text-left transition-colors font-body"
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="text-xs text-sniper-muted font-body">
            © 2026 StudySniper. Built with ❤️ for students who refuse to fail.
          </span>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse" />
            <span className="text-xs text-sniper-muted font-body">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
