import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { ChevronLeft, ChevronRight } from "lucide-react";

const LEGEND_ITEMS = [
  { label: "Assignment", color: "bg-blue-600" },
  { label: "holiday", color: "bg-[#e91e63]" },
  { label: "exam", color: "bg-[#f44336]" },
  { label: "class test", color: "bg-[#ff9800]" },
  { label: "result announcement", color: "bg-[#9c27b0]" },
  { label: "orientation", color: "bg-[#00bcd4]" },
  { label: "convocation", color: "bg-[#e91e63]" },
  { label: "Personal reasons", color: "bg-[#ffc107]" },
  { label: "Festival celebration", color: "bg-[#ff9800]" },
  { label: "Hackathon participation", color: "bg-[#00bcd4]" },
  { label: "College events (seminars, workshops, competitions, etc.)", color: "bg-blue-400" },
  { label: "Sick leave / medical reasons", color: "bg-[#ff9800]" },
  { label: "Placement drives", color: "bg-[#4caf50]" },
  { label: "Company work (official tasks or visits)", color: "bg-[#3f51b5]" },
  { label: "Interviews", color: "bg-[#009688]" },
  { label: "Family functions", color: "bg-[#e91e63]" },
  { label: "Emergency situations", color: "bg-[#f44336]" },
  { label: "Travel-related reasons", color: "bg-[#2196f3]" },
  { label: "Duty leave", color: "bg-[#9c27b0]" },
  { label: "Others", color: "bg-[#607d8b]" },
];

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 2, 1)); // Match March 2026 from image
  const [selectedDate, setSelectedDate] = useState(new Date(2026, 2, 28));

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const goToToday = () => {
    setCurrentDate(new Date(2026, 2, 1));
    setSelectedDate(new Date(2026, 2, 28));
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const numDays = daysInMonth(year, month);
  const startDay = firstDayOfMonth(year, month);

  const daysGrid = [];
  for (let i = 0; i < startDay; i++) daysGrid.push(null);
  for (let i = 1; i <= numDays; i++) daysGrid.push(i);

  const isSelected = (day) => {
    return selectedDate.getDate() === day &&
      selectedDate.getMonth() === month &&
      selectedDate.getFullYear() === year;
  };

  return (
    <div className="min-h-screen pt-4 bg-black text-white font-sans selection:bg-blue-500/30">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 mt-16">
        <h1 className="text-xl font-bold mb-6 text-neutral-100 px-4">Calendar</h1>

        <div className="flex flex-col lg:flex-row gap-8 justify-center items-start w-full px-4">
          {/* CALENDAR MAIN SECTION */}
          <div className="flex-1 bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow-2xl h-fit">
            
            {/* Header: Exact button placement from original */}
            <div className="flex items-center justify-between mb-8 border-b border-neutral-800 pb-6">
              <div className="flex items-center gap-1">
                <button 
                  onClick={prevMonth} 
                  className="w-8 h-8 flex items-center justify-center bg-neutral-800 rounded-md text-neutral-400 hover:text-white border border-neutral-700 transition-all text-xs"
                >
                   &larr;
                </button>
                <button 
                  onClick={goToToday} 
                  className="px-4 py-1.5 bg-neutral-800 rounded-md text-[11px] font-bold text-neutral-200 hover:text-white border border-neutral-700 transition-all uppercase tracking-wider"
                >
                  Today
                </button>
              </div>

              <h2 className="text-lg font-bold text-neutral-200">
                {monthNames[month]} {year}
              </h2>

              <div className="flex items-center">
                 <button 
                  onClick={nextMonth} 
                  className="w-8 h-8 flex items-center justify-center bg-neutral-800 rounded-md text-neutral-400 hover:text-white border border-neutral-700 transition-all text-xs"
                >
                  &rarr;
                </button>
              </div>
            </div>

            {/* Legend: 4-Column Grid like original */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-4 mb-10 text-[10px] text-neutral-500 font-bold uppercase tracking-widest">
              {LEGEND_ITEMS.slice(0, 20).map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${item.color} shrink-0`} />
                  <span className="truncate leading-none">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Grid Container */}
            <div className="flex justify-center w-full">
               <div className="grid grid-cols-7 gap-1 h-fit w-fit">
                {/* Day Headers */}
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
                  <div key={day} className="w-20 h-8 flex items-center justify-center text-[10px] font-bold text-neutral-600 uppercase tracking-widest">
                    {day}
                  </div>
                ))}

                {/* Day Cells - 80x80 Blocks, Date in top-left */}
                {daysGrid.map((day, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => day && setSelectedDate(new Date(year, month, day))}
                    className={`
                      w-26 h-20 rounded-md transition-all cursor-pointer flex p-2 border shrink-0
                      ${!day ? "bg-transparent border-transparent pointer-events-none" : "bg-[#121212] border-neutral-800 hover:bg-neutral-800/60"}
                      ${day && isSelected(day) ? "ring-2 ring-blue-500 ring-inset border-blue-500 z-10" : ""}
                    `}
                  >
                    {day && (
                      <div className="flex flex-col h-full w-full relative">
                        <span className={`
                          text-[11px] font-bold transition-colors
                          ${isSelected(day) ? "text-blue-400" : "text-neutral-500 group-hover:text-neutral-200"}
                        `}>
                          {day}
                        </span>
                        
                        {/* Attendance Marker at bottom center (for days 23-28 as in original image) */}
                        {[28].includes(day) && month === 2 && (
                          <div className="mt-auto flex justify-center pb-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SIDEBAR - Direct reproduction of sections */}
          <div className="w-full lg:w-[340px] lg:h-[700px] bg-neutral-900 border border-neutral-800 rounded-xl p-8 flex flex-col gap-8 shadow-2xl h-fit lg:sticky lg:top-24">
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                {selectedDate.toLocaleDateString('en-GB')}
              </h3>
            </div>

            <section className="space-y-3">
              <h4 className="text-[12px] font-bold text-neutral-300 uppercase tracking-widest">Events</h4>
              <p className="text-[15px] text-neutral-500 font-normal">No events </p>
            </section>

            <section className="space-y-3">
              <h4 className="text-[12px] font-bold text-neutral-300 uppercase tracking-widest">Leaves</h4>
              <p className="text-[15px] text-neutral-500 font-light">No leaves</p>
            </section>

            <section className="space-y-4">
              <h4 className="text-[12px] font-bold text-neutral-300 uppercase tracking-widest">Attendance</h4>
              <div className="space-y-2">
                <p className="text-[13px] text-neutral-400 font-medium uppercase">Subject entries:</p>
                <div className="flex items-center gap-2 text-[12px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
                  <span className="text-neutral-300 font-bold">ReactJS — present</span>
                </div>
              </div>
            </section>

            <section className="space-y-3">
              <h4 className="text-[13px] font-medium text-neutral-400 uppercase tracking-widest">Assignments</h4>
              <p className="text-[12px] text-neutral-500 font-medium">None due for today.</p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
