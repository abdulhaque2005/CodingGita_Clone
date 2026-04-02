import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Events() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-blue-500/30">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Events</h1>
          <Link to="/dashboard" className="text-xs sm:text-sm font-medium hover:text-white text-neutral-400 transition-colors">
            Back to dashboard
          </Link>
        </div>

        <div className="space-y-6">
          {/* Ongoing */}
          <div className="bg-[#18181A] border border-neutral-800 rounded-xl overflow-hidden">
            <div className="px-5 py-4 border-b border-neutral-800">
              <h2 className="text-[1rem] font-bold text-white">Ongoing</h2>
            </div>
            <div className="px-5 py-6 text-neutral-400 text-sm">
              No ongoing events.
            </div>
          </div>

          {/* Upcoming */}
          <div className="bg-[#18181A] border border-neutral-800 rounded-xl overflow-hidden">
             <div className="px-5 py-4 border-b border-neutral-800">
              <h2 className="text-[1rem] font-bold text-white">Upcoming</h2>
            </div>
            <div className="px-5 py-6 text-neutral-400 text-sm">
              No upcoming events.
            </div>
          </div>

          {/* Past */}
          <div className="bg-[#18181A] border border-neutral-800 rounded-xl overflow-hidden">
            <div className="px-5 py-4 border-b border-neutral-800">
              <h2 className="text-[1rem] font-bold text-white">Past</h2>
            </div>
            <div className="px-5 py-6">
              <div className="bg-[#222224] border border-neutral-700/50 p-4 rounded-lg inline-block w-full sm:w-auto sm:min-w-[300px]">
                <h3 className="font-bold text-white text-[15px] mb-1">Diwali Vacation</h3>
                <p className="text-xs text-neutral-400">18/10/2025 — 26/10/2025</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
