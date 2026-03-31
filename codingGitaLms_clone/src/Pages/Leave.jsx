import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Send, FileText } from "lucide-react";

export default function Leave() {
  const [category, setCategory] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [leaveTime, setLeaveTime] = useState("");
  const [returnTime, setReturnTime] = useState("");
  const [remarks, setRemarks] = useState("");
  const [requests, setRequests] = useState([]);

  const stats = [
    { label: "Total Applications", value: requests.length, color: "text-blue-400" },
    { label: "Pending Review", value: 0, color: "text-yellow-400" },
    { label: "Approved", value: 0, color: "text-green-400" },
    { label: "Rejected", value: 0, color: "text-red-400" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category || !fromDate || !toDate) {
      alert("Please fill in all required fields.");
      return;
    }
    const newRequest = {
      id: Date.now(),
      category,
      fromDate,
      toDate,
      leaveTime,
      returnTime,
      remarks,
      status: "Pending",
      date: new Date().toLocaleDateString(),
    };
    setRequests([newRequest, ...requests]);
    setCategory("");
    setFromDate("");
    setToDate("");
    setLeaveTime("");
    setReturnTime("");
    setRemarks("");
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        {/* Header */}
        <h1 className="text-2xl font-bold text-white">Apply for Leave</h1>
        <p className="text-neutral-400 text-sm mt-1 mb-6">Submit your leave application and track your requests</p>


        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-4">
              <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-neutral-400 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content - Form + Requests */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left - New Leave Application */}
          <div className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                <span className="text-green-400 text-lg">+</span>
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">New Leave Application</h2>
                <p className="text-neutral-500 text-xs">Fill out the form to submit your leave request</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 mt-6">
              {/* Leave Category */}
              <div>
                <label className="text-sm font-medium text-neutral-300 block mb-1.5">Leave Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2.5 text-sm text-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none cursor-pointer"
                >
                  <option value="">Select category</option>
                  <option value="Sick Leave">Sick Leave</option>
                  <option value="Personal Leave">Personal Leave</option>
                  <option value="Family Emergency">Family Emergency</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* From Date / To Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-neutral-300 block mb-1.5">From Date</label>
                  <input
                    type="date"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                    className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2.5 text-sm text-white focus:ring-1 focus:ring-blue-500 outline-none [color-scheme:dark]"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-neutral-300 block mb-1.5">To Date</label>
                  <input
                    type="date"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                    className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2.5 text-sm text-white focus:ring-1 focus:ring-blue-500 outline-none [color-scheme:dark]"
                  />
                </div>
              </div>

              {/* Leave Time / Return Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-neutral-300 block mb-1.5">Leave Time</label>
                  <input
                    type="time"
                    value={leaveTime}
                    onChange={(e) => setLeaveTime(e.target.value)}
                    className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2.5 text-sm text-white focus:ring-1 focus:ring-blue-500 outline-none [color-scheme:dark]"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-neutral-300 block mb-1.5">Return Time</label>
                  <input
                    type="time"
                    value={returnTime}
                    onChange={(e) => setReturnTime(e.target.value)}
                    className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2.5 text-sm text-white focus:ring-1 focus:ring-blue-500 outline-none [color-scheme:dark]"
                  />
                </div>
              </div>

              {/* Remarks */}
              <div>
                <label className="text-sm font-medium text-neutral-300 block mb-1.5">Additional Remarks (Optional)</label>
                <textarea
                  value={remarks}
                  onChange={(e) => setRemarks(e.target.value)}
                  placeholder="Any additional information for your mentor or admin"
                  rows={4}
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:ring-1 focus:ring-blue-500 outline-none resize-y"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <Send size={16} />
                Submit Leave Application
              </button>
            </form>
          </div>

          {/* Right - My Leave Requests */}
          <div className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                <FileText size={16} className="text-blue-400" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">My Leave Requests</h2>
                <p className="text-neutral-500 text-xs">Track the status of your applications</p>
              </div>
            </div>

            {requests.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-xl bg-neutral-800 flex items-center justify-center mb-4">
                  <FileText size={28} className="text-neutral-600" />
                </div>
                <p className="text-neutral-400 text-sm font-medium">No leave requests yet</p>
                <p className="text-neutral-600 text-xs mt-1">Your submitted applications will appear here</p>
              </div>
            ) : (
              <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
                {requests.map((req) => (
                  <div key={req.id} className="bg-neutral-800/50 border border-neutral-700/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-white">{req.category}</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                        {req.status}
                      </span>
                    </div>
                    <div className="text-xs text-neutral-400 space-y-1">
                      <p>From: {req.fromDate} → To: {req.toDate}</p>
                      {req.remarks && <p className="text-neutral-500 italic">"{req.remarks}"</p>}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}