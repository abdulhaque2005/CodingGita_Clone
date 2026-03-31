import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { CheckCircle2, Calendar as CalendarIcon, Clock } from "lucide-react";
import { attendanceMockData } from "../utils/attendanceData";

export default function SemesterAttendance() {
  const [selectedSemester, setSelectedSemester] = useState(attendanceMockData[1]);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30 pb-10">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
        <header className="mb-8 px-2">
          <h1 className="text-3xl font-bold text-white tracking-tight">Semester Attendance</h1>
          <p className="text-neutral-400 mt-1 text-sm">View your attendance statistics by semester</p>
        </header>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-5 backdrop-blur-md">
              <h2 className="text-sm font-semibold text-neutral-400 mb-4 px-1 uppercase tracking-wider">Semesters</h2>
              <div className="space-y-2">
                {attendanceMockData.map((sem) => (
                  <button
                    key={sem.id}
                    onClick={() => setSelectedSemester(sem)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-200 border ${
                      selectedSemester.id === sem.id
                        ? "bg-blue-600/10 border-blue-500/50 text-white shadow-[0_0_20px_rgba(37,99,235,0.1)]"
                        : "bg-transparent border-transparent text-neutral-400 hover:bg-neutral-800/50 hover:text-neutral-200"
                    }`}
                  >
                    <div className="font-bold text-sm">{sem.name}</div>
                    <div className="text-[11px] mt-1 opacity-60">
                      {sem.startDate} - {sem.endDate}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 space-y-6">
            <section className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-6 lg:p-8 backdrop-blur-md relative overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-white">{selectedSemester.name}</h2>
                  <p className="text-neutral-500 text-sm mt-1 font-medium">{selectedSemester.startDate} - {selectedSemester.endDate}</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-black text-white">{selectedSemester.overallAttendance}%</div>
                  <div className="text-neutral-500 text-[11px] font-bold uppercase tracking-widest mt-1">Attendance</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-10">
                <div className="flex justify-between items-center mb-2">
                   <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Overall Attendance</span>
                   <span className="text-xs font-bold text-neutral-200">{selectedSemester.overallAttendance}%</span>
                </div>
                <div className="h-2.5 w-full bg-neutral-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500 rounded-full transition-all duration-500 ease-out shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                    style={{ width: `${selectedSemester.overallAttendance}%` }}
                  />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {[
                  { label: "Total Marked", value: selectedSemester.totalMarked, color: "text-white" },
                  { label: "Present Count", value: selectedSemester.presentCount, color: "text-green-500" },
                  { label: "Absent Count", value: selectedSemester.absentCount, color: "text-red-500" },
                  { label: "Bonus Attendance", value: `+${selectedSemester.bonusAttendance}`, color: "text-green-500" },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-black/40 border border-neutral-800/50 p-5 rounded-xl hover:border-neutral-700 transition-colors">
                    <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-1.5">{stat.label}</p>
                    <p className={`text-2xl font-black ${stat.color}`}>{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* Detailed Info */}
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4">Status Breakdown</h3>
                  <div className="space-y-3">
                    {[
                      { label: "Present Count", value: selectedSemester.presentCount, color: "bg-green-500/20 text-green-400" },
                      { label: "Absent Count", value: selectedSemester.absentCount, color: "bg-red-500/20 text-red-500" },
                      { label: "Leave Days", value: selectedSemester.leaveDays, color: "bg-yellow-500/20 text-yellow-500" },
                      { label: "Intern Leave Days", value: selectedSemester.internLeaveDays, color: "bg-purple-500/20 text-purple-400" },
                      { label: "Bonus Attendance", value: selectedSemester.bonusAttendance, color: "bg-emerald-500/20 text-emerald-400" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between group">
                        <span className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">{item.label}</span>
                        <span className={`w-8 h-6 flex items-center justify-center rounded text-[11px] font-bold ${item.color}`}>
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4">Period Information</h3>
                  <div className="space-y-4">
                    {[
                      { label: "Start Date", value: selectedSemester.startDate, icon: CalendarIcon },
                      { label: "End Date", value: selectedSemester.endDate, icon: CalendarIcon },
                      { label: "Duration", value: selectedSemester.duration, icon: Clock },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <item.icon size={14} className="text-neutral-600" />
                          <span className="text-sm text-neutral-400">{item.label}</span>
                        </div>
                        <span className="text-sm text-neutral-300 font-medium">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Attendance Status */}
            <section className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-6 backdrop-blur-md">
              <h2 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-4 px-1">Attendance Status</h2>
              <div className="flex items-center gap-3 text-green-400 px-1">
                <CheckCircle2 size={18} />
                <p className="text-sm font-medium">{selectedSemester.statusMessage}</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
