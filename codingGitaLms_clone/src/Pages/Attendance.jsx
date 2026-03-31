import React from "react";
import Navbar from "../components/Navbar";

export default function Attendance() {
  return (
    <div className="min-h-screen pt-4 bg-black text-white font-sans selection:bg-blue-500/30">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 mt-16">
        <h1 className="text-xl font-bold mb-6 text-neutral-100 px-4">Overview</h1>

        <div className="mx-4 bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 shadow-2xl">
          <div className="mb-6">
            <h2 className="text-lg font-bold text-neutral-100">Today's Attendance</h2>
            <p className="text-xs text-neutral-500 font-medium mt-1">Date: {new Date().toISOString().split("T")[0]}</p>
          </div>

          <div className="bg-black border border-neutral-800 rounded-lg p-4 flex items-center justify-between group hover:border-neutral-700 transition-colors">
            <div className="space-y-1">
              <h3 className="text-[13px] font-bold text-neutral-200 uppercase tracking-wide">
                SU0201 - ReactJS
              </h3>
              <p className="text-[11px] text-neutral-500 font-medium">
                Marked by: Ankita
              </p>
            </div>
            
            <div className="bg-green-900/20 text-green-500 border border-green-900/30 px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest shadow-[0_0_12px_rgba(34,197,94,0.1)] group-hover:shadow-[0_0_15px_rgba(34,197,94,0.2)] transition-all">
              present
            </div>
          </div>

          <div className="bg-black border border-neutral-800 rounded-lg p-4 flex items-center justify-between group hover:border-neutral-700 transition-colors my-5">
            <div className="space-y-1">
              <h3 className="text-[13px] font-bold text-neutral-200 uppercase tracking-wide">
               SU0202 - NodeJS
              </h3>
              <p className="text-[11px] text-neutral-500 font-medium">
                Marked by: Ankita
              </p>
            </div>
            
            <div className="bg-green-900/20 text-green-500 border border-green-900/30 px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest shadow-[0_0_12px_rgba(34,197,94,0.1)] group-hover:shadow-[0_0_15px_rgba(34,197,94,0.2)] transition-all">
              present
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
