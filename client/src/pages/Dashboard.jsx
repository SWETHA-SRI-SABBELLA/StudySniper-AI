import React from "react";
import { useNavigate } from "react-router-dom";

// This is a placeholder — Module 3 builds the full Dashboard
export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-sniper-bg flex items-center justify-center">
      <div className="text-center">
        <div className="text-4xl mb-4">🎯</div>
        <div className="font-display text-2xl font-700 text-sniper-text mb-2">
          Dashboard
        </div>
        <div className="text-sniper-muted text-sm mb-6">
          Full dashboard coming in Module 3
        </div>
        <button onClick={() => navigate("/")} className="btn-ghost text-sm px-6 py-2.5">
          ← Back to landing
        </button>
      </div>
    </div>
  );
}
