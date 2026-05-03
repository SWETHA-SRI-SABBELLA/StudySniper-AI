import React, { useEffect, useRef, useState } from "react";

const TESTIMONIALS = [
  {
    name: "Rahul Sharma",
    role: "B.Tech CSE — VIT Vellore",
    avatar: "#7C6EFF",
    initials: "RS",
    score: "+22 marks",
    scoreLabel: "in DBMS mid-sem",
    text: "I was completely lost 10 days before my DBMS exam. StudySniper showed me exactly what to focus on and what to skip. The Survival Mode is genuinely a lifesaver.",
    stars: 5,
  },
  {
    name: "Ananya Krishnan",
    role: "MCA — Manipal University",
    avatar: "#00E5B4",
    initials: "AK",
    score: "94/100",
    scoreLabel: "in Data Structures",
    text: "The spaced repetition engine is what made the difference. I actually remembered everything on exam day instead of blanking out. The AI coach explained concepts better than my professor!",
    stars: 5,
  },
  {
    name: "Priya Mehta",
    role: "B.Sc CS — Christ University",
    avatar: "#FFB344",
    initials: "PM",
    score: "3× faster",
    scoreLabel: "revision speed",
    text: "Uploading my past papers and having AI extract the probable questions was absolutely genius. Out of 9 questions in my exam, 6 were predicted by StudySniper.",
    stars: 5,
  },
  {
    name: "Karthik Iyer",
    role: "GATE aspirant",
    avatar: "#FF4C5E",
    initials: "KI",
    score: "AIR 342",
    scoreLabel: "in GATE CS 2025",
    text: "Used StudySniper for 3 months of GATE prep. The topic prioritization by marks weightage was incredibly accurate. It focused me on the right areas at the right times.",
    stars: 5,
  },
  {
    name: "Divya Reddy",
    role: "B.Tech IT — JNTU",
    avatar: "#34D399",
    initials: "DR",
    score: "Distinc–tion",
    scoreLabel: "in all 4 subjects",
    text: "I used to study randomly and panic before exams. StudySniper gave me structure and confidence. The readiness score going up every day kept me motivated.",
    stars: 5,
  },
  {
    name: "Arjun Nair",
    role: "M.Tech AI — IIT Hyderabad",
    avatar: "#7C6EFF",
    initials: "AN",
    score: "8.9 GPA",
    scoreLabel: "this semester",
    text: "The Pomodoro timer integrated with the subject tracker is brilliant. I know exactly what I studied, for how long, and what I need to review. Nothing like this existed before.",
    stars: 5,
  },
];

function StarRow({ n }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(n)].map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#FFB344">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const col1 = TESTIMONIALS.slice(0, 3);
  const col2 = TESTIMONIALS.slice(3);

  return (
    <section className="py-24 relative" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="tag tag-safe inline-flex mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse" />
            Student stories
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-800 tracking-tight text-sniper-text mb-4">
            Real students.{" "}
            <span className="gradient-text">Real results.</span>
          </h2>
          <p className="text-sniper-textSub text-lg max-w-xl mx-auto font-body">
            From last-minute panics to confident top scores — here's what StudySniper users say.
          </p>
        </div>

        {/* Masonry-ish 2-col layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="glass rounded-2xl border border-white/5 p-5 card-hover flex flex-col"
            >
              {/* Stars */}
              <StarRow n={t.stars} />

              {/* Quote */}
              <p className="text-sniper-textSub text-sm font-body leading-relaxed mt-3 mb-4 flex-1">
                "{t.text}"
              </p>

              {/* Score badge */}
              <div className="bg-[#7C6EFF]/8 border border-[#7C6EFF]/15 rounded-xl px-3 py-2 mb-4 flex items-center gap-3">
                <div>
                  <div className="font-display font-700 text-lg gradient-text leading-none">{t.score}</div>
                  <div className="text-[10px] text-sniper-muted mt-0.5">{t.scoreLabel}</div>
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-display font-700 text-white shrink-0"
                  style={{ background: t.avatar }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-500 text-sniper-text font-body">{t.name}</div>
                  <div className="text-xs text-sniper-muted">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
