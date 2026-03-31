import React from "react";
import Navbar from "../components/Navbar";

export default function Chat() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
        <h1 className="text-2xl font-bold text-white">Chat Groups</h1>
        <p className="text-neutral-400 text-sm mt-1">Groups assigned to you and universal groups.</p>

        <p className="text-neutral-500 text-sm mt-6">No groups assigned to you yet.</p>
      </main>
    </div>
  );
}
