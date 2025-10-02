import React from "react";

const Bar = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#1e3a8a] via-[#4c8cff] to-[#7eb5ff] text-white">
      <div className="app-container flex flex-col sm:flex-row items-center justify-between py-2 text-sm gap-2">
        <span className="flex items-center gap-2 font-medium">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
          Winter Relief Drive • Urgent Support Needed in Northern Districts
        </span>
        <a
          href="#impact"
          className="inline-flex items-center gap-1 rounded-full bg-white/15 px-4 py-1 font-semibold backdrop-blur hover:bg-white/25 transition"
        >
          Track Live Impact →
        </a>
      </div>
    </div>
  );
};

export default Bar;
