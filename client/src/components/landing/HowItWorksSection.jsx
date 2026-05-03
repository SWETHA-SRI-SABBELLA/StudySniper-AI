import React from "react";

const STEPS = [
  {
    num: "01",
    icon: "📝",
    title: "Add your subjects & topics",
    desc: "Enter your subjects, set the exam date, and rate your confidence level for each topic. Takes less than 5 minutes.",
    color: "#7C6EFF",
  },
  {
    num: "02",
    icon: "📄",
    title: "Upload your study materials",
    desc: "Drop in your syllabus PDFs, past question papers, and notes. AI extracts what matters and what's likely to appear in the exam.",
    color: "#00E5B4",
  },
  {
    num: "03",
    icon: "🤖",
    title: "AI analyzes and prioritizes",
    desc: "Claude classifies every topic based on weightage, your confidence, and days remaining. You get a precision-targeted study plan.",
    color: "#FFB344",
  },
  {
    num: "04",
    icon: "📅",
    title: "Follow your smart schedule",
    desc: "A daily hour-by-hour schedule is generated. Miss a session? The plan auto-adapts so you're always on track.",
    color: "#FF4C5E",
  },
  {
    num: "05",
    icon: "🎯",
    title: "Track, adapt, and win",
    desc: "Monitor your readiness score, get AI coaching on weak spots, and activate Survival Mode when the exam gets close.",
    color: "#34D399",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 relative" id="how-it-works">
      {/* Background accent */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-[#7C6EFF]/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="tag tag-accent inline-flex mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7C6EFF] animate-pulse" />
            How it works
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-800 tracking-tight text-sniper-text mb-4">
            From zero to exam-ready{" "}
            <span className="gradient-text">in 12 minutes</span>
          </h2>
          <p className="text-sniper-textSub text-lg max-w-xl mx-auto font-body">
            StudySniper does the heavy lifting so you can focus on actually studying.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-[#7C6EFF]/20 to-transparent -translate-x-1/2" />

          <div className="space-y-8">
            {STEPS.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={step.num}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isLeft ? "lg:text-right" : "lg:text-left"}`}>
                    <div
                      className={`glass rounded-2xl border border-white/5 p-6 card-hover max-w-md ${
                        isLeft ? "lg:ml-auto" : "lg:mr-auto"
                      }`}
                    >
                      <div
                        className={`flex items-center gap-3 mb-3 ${
                          isLeft ? "lg:flex-row-reverse" : ""
                        }`}
                      >
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
                          style={{ background: step.color + "15" }}
                        >
                          {step.icon}
                        </div>
                        <div>
                          <div
                            className="text-xs font-mono mb-0.5"
                            style={{ color: step.color }}
                          >
                            STEP {step.num}
                          </div>
                          <h3 className="font-display font-600 text-sniper-text text-[15px]">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-sniper-textSub text-sm font-body leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:flex w-12 h-12 rounded-full glass border border-white/10 items-center justify-center text-lg shrink-0 z-10">
                    {step.icon}
                  </div>

                  {/* Empty side */}
                  <div className="flex-1 hidden lg:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
