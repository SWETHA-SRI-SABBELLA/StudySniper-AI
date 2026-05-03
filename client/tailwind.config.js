/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        sniper: {
          bg:       "#09090F",
          surface:  "#111118",
          card:     "#16161F",
          border:   "#ffffff0f",
          accent:   "#7C6EFF",
          accent2:  "#00E5B4",
          danger:   "#FF4C5E",
          warn:     "#FFB344",
          safe:     "#34D399",
          muted:    "#6B7280",
          text:     "#F1F0FF",
          textSub:  "#9B97B8",
        },
      },
      animation: {
        "fade-up":    "fadeUp 0.6s ease forwards",
        "fade-in":    "fadeIn 0.4s ease forwards",
        "float":      "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "scan":       "scan 3s linear infinite",
        "glow":       "glow 2s ease-in-out infinite alternate",
        "slide-right":"slideRight 0.5s ease forwards",
        "counter":    "counter 2s ease forwards",
      },
      keyframes: {
        fadeUp:    { "0%": { opacity: 0, transform: "translateY(24px)" }, "100%": { opacity: 1, transform: "translateY(0)" } },
        fadeIn:    { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
        float:     { "0%,100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-12px)" } },
        scan:      { "0%": { top: "0%" }, "100%": { top: "100%" } },
        glow:      { "0%": { boxShadow: "0 0 20px #7C6EFF30" }, "100%": { boxShadow: "0 0 60px #7C6EFF60" } },
        slideRight:{ "0%": { transform: "translateX(-20px)", opacity: 0 }, "100%": { transform: "translateX(0)", opacity: 1 } },
      },
      backdropBlur: { xs: "2px" },
      backgroundImage: {
        "grid-pattern": "linear-gradient(rgba(124,110,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,110,255,0.04) 1px, transparent 1px)",
        "hero-glow":    "radial-gradient(ellipse 80% 60% at 50% -20%, rgba(124,110,255,0.25), transparent)",
        "card-shine":   "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%)",
      },
      backgroundSize: {
        "grid": "40px 40px",
      },
    },
  },
  plugins: [],
};
