import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Assignments() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-blue-500/30">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="flex items-center justify-between mb-8">
          <div>
             <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Assignments</h1>
             <p className="text-neutral-400 text-sm mt-1">Search, filter and sort your assignments.</p>
          </div>
          <Link to="/dashboard" className="text-xs sm:text-sm font-medium hover:text-white text-neutral-400 transition-colors">
            Back to dashboard
          </Link>
        </div>

        <div className="space-y-6">
          <div className="">
            <input className="border-1 border-zinc-500 focus:outline-none w-[30vw] h-[5vh] rounded-[0.4rem] px-2" type="text" name="" id="" placeholder="search by heading "/>
          </div>
        </div>

      </main>
    </div>
  );
}
