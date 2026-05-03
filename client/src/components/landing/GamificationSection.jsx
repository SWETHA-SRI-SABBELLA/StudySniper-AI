import React from "react";

const BADGES = [
  { icon: "🔥", name: "7-Day Streak",    desc: "Study 7 days in a row",   color: "#FF4C5E", earned: true  },
  { icon: "⚡", name: "Speed Learner",   desc: "Cover 5 topics in a day", color: "#FFB344", earned: true  },
  { icon: "🎯", name: "Sniper Shot",     desc: "100% on a mock quiz",     color: "#7C6EFF", earned: true  },
  { icon: "🏆", name: "Exam Survivor",   desc: "Pass Survival Mode",      color: "#00E5B4", earned: false },
  { icon: "📚", name: "Bookworm",        desc: "Upload 5 PDFs",           color: "#34D399", earned: true  },
  { icon: "🤖", name: "AI Whisperer",    desc: "50 AI Coach messages",    color: "#7C6EFF", earned: false },
];

const LEADERBOARD = [
  { rank: 1, name: "Arjun N.",   xp: 4820, streak: 14, avatar: "#7C6EFF" },
  { rank: 2, name: "Priya M.",   xp: 4210, streak: 11, avatar: "#FF4C5E" },
  { rank: 3, name: "You (Satya)",xp: 2840, streak: 7,  avatar: "#00E5B4", isYou: true },
  { rank: 4, name: "Rahul S.",   xp: 2610, streak: 5,  avatar: "#FFB344" },
  { rank: 5, name: "Ananya K.",  xp: 1990, streak: 3,  avatar: "#34D399" },
];

export default function GamificationSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="tag tag-warn inline-flex mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFB344] animate-pulse" />
            Gamification
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-800 tracking-tight text-sniper-text mb-4">
            Study hard.{" "}
            <span className="gradient-text-warm">Earn rewards.</span>
          </h2>
          <p className="text-sniper-textSub text-lg max-w-xl mx-auto font-body">
            XP points, streaks, badges, and leaderboards make studying feel less like a chore and more like a game you're winning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Badges */}
          <div>
            <div className="text-sm font-display font-600 text-sniper-textSub uppercase tracking-wider mb-4">
              Achievement Badges
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {BADGES.map((b) => (
                <div
                  key={b.name}
                  className={`glass rounded-2xl border p-4 text-center card-hover transition-all ${
                    b.earned ? "border-white/8" : "border-white/3 opacity-40"
                  }`}
                >
                  <div
                    className="w-12 h-12 rounded-xl mx-auto mb-2 flex items-center justify-center text-2xl"
                    style={{ background: b.color + (b.earned ? "20" : "08") }}
                  >
                    {b.icon}
                  </div>
                  <div className="text-xs font-display font-600 text-sniper-text mb-0.5">{b.name}</div>
                  <div className="text-[10px] text-sniper-muted font-body">{b.desc}</div>
                  {b.earned && (
                    <div
                      className="mt-2 text-[10px] px-2 py-0.5 rounded-full border inline-block"
                      style={{ background: b.color + "15", color: b.color, borderColor: b.color + "30" }}
                    >
                      Earned ✓
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Leaderboard + XP */}
          <div className="space-y-4">
            {/* XP progress card */}
            <div className="glass rounded-2xl border border-white/8 p-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-xs text-sniper-muted font-body mb-0.5">Your XP this week</div>
                  <div className="font-display font-800 text-3xl gradient-text">2,840 XP</div>
                </div>
                <div className="text-center">
                  <div className="font-display font-700 text-2xl text-[#FF4C5E]">🔥 7</div>
                  <div className="text-[10px] text-sniper-muted">day streak</div>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between text-[11px]">
                  <span className="text-sniper-muted">Level 8 — "Topic Master"</span>
                  <span className="text-[#7C6EFF]">2840 / 3200 XP</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: "88%" }} />
                </div>
                <div className="text-[10px] text-sniper-muted text-right">360 XP to Level 9</div>
              </div>
            </div>

            {/* Leaderboard */}
            <div className="glass rounded-2xl border border-white/8 p-5">
              <div className="text-sm font-display font-600 text-sniper-textSub uppercase tracking-wider mb-4">
                Weekly Leaderboard
              </div>
              <div className="space-y-2">
                {LEADERBOARD.map((u) => (
                  <div
                    key={u.rank}
                    className={`flex items-center gap-3 p-2.5 rounded-xl transition-all ${
                      u.isYou
                        ? "bg-[#7C6EFF]/10 border border-[#7C6EFF]/20"
                        : "hover:bg-white/3"
                    }`}
                  >
                    {/* Rank */}
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-display font-700 shrink-0"
                      style={{
                        background:
                          u.rank === 1 ? "#FFB34430"
                          : u.rank === 2 ? "#FFFFFF15"
                          : u.rank === 3 ? "#FF4C5E20"
                          : "transparent",
                        color:
                          u.rank === 1 ? "#FFB344"
                          : u.rank === 2 ? "#9BA3B2"
                          : u.rank === 3 ? "#FF4C5E"
                          : "#6B7280",
                      }}
                    >
                      {u.rank === 1 ? "🥇" : u.rank === 2 ? "🥈" : u.rank === 3 ? "🥉" : u.rank}
                    </div>

                    {/* Avatar */}
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-display font-700 text-white shrink-0"
                      style={{ background: u.avatar }}
                    >
                      {u.name[0]}
                    </div>

                    {/* Name */}
                    <div className="flex-1 min-w-0">
                      <div className={`text-sm font-body ${u.isYou ? "text-[#A99EFF] font-500" : "text-sniper-textSub"}`}>
                        {u.name}
                      </div>
                    </div>

                    {/* Streak */}
                    <div className="text-[11px] text-[#FF4C5E] mr-2">🔥 {u.streak}</div>

                    {/* XP */}
                    <div className="text-[11px] font-mono text-sniper-muted">{u.xp.toLocaleString()} XP</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
