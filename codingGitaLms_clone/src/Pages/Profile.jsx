import React from "react";
import Navbar from "../components/Navbar";
import { User, Mail, Phone, MapPin, Globe, Github, Linkedin, Twitter, Youtube, GraduationCap, Calendar, BookOpen, Fingerprint } from "lucide-react";

export default function Profile() {
  const [isEditing, setIsEditing] = React.useState(false);
  const data = localStorage.getItem("user");
  const user = data ? JSON.parse(data) : null;

  if (!user) return <div className="min-h-screen bg-neutral-950 flex items-center justify-center text-white">No user data found</div>;

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-blue-500/30">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
            <p className="text-neutral-400 mt-1">View and update your personal information</p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => setIsEditing(!isEditing)}
              className={`px-4 py-2 border rounded-md text-sm font-medium transition-colors ${
                isEditing ? "bg-green-600 border-green-500 hover:bg-green-700" : "bg-neutral-900 border-neutral-800 hover:bg-neutral-800"
              }`}
            >
              {isEditing ? "Save Changes" : "Edit Profile"}
            </button>
            <button className="px-4 py-2 bg-blue-600 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/20">
              Reset Password
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* PROFILE SUMMARY SIDEBAR */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 text-center space-y-4">
              <div className="relative inline-block">
                <div className="w-32 h-32 rounded-full border-4 border-neutral-800 overflow-hidden mx-auto bg-neutral-800 flex items-center justify-center shadow-xl">
                  {user.profileImage ? (
                    <img src={user.profileImage} alt={user.name} className="w-full h-full object-cover" />
                  ) : (
                    <User size={64} className="text-neutral-500" />
                  )}
                </div>
                <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-4 border-neutral-900 rounded-full" />
              </div>

              <div>
                <h2 className="text-xl font-bold uppercase tracking-wider">{user.name}</h2>
                <p className="text-blue-400 font-medium text-sm mt-1">Student</p>
                <p className="text-neutral-500 text-xs mt-2 font-mono">
                  {user.university} • {user.uid}
                </p>
              </div>

              <div className="flex flex-col gap-2 pt-4">
                <button className="w-full py-2.5 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-sm font-semibold transition-all">
                  Edit Profile
                </button>
                <button className="w-full py-2.5 border border-neutral-800 hover:bg-neutral-900 rounded-lg text-sm font-semibold transition-all text-neutral-400">
                  Reset Password
                </button>
              </div>
            </div>

            {/* QUICK STATS */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 space-y-4">
              <h3 className="text-sm font-bold uppercase text-neutral-500 tracking-widest">Academics Overview</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                   <span className="text-sm text-neutral-400">Semester</span>
                   <span className="text-sm font-semibold">{user.attendance?.semester || "N/A"}</span>
                </div>
                <div className="flex items-center justify-between">
                   <span className="text-sm text-neutral-400">Subjects</span>
                   <span className="text-sm font-semibold">{user.subjects?.length || 0}</span>
                </div>
                <div className="flex items-center justify-between">
                   <span className="text-sm text-neutral-400">Section</span>
                   <span className="text-sm font-semibold">A</span>
                </div>
              </div>
            </div>
          </div>

          {/* MAIN CONTENT AREA */}
          <div className="lg:col-span-8 space-y-6">
            {/* DETAILS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "ENROLLMENT NUMBER", value: user.uid, icon: <Fingerprint size={16} /> },
                { label: "COURSE", value: "B.Tech", icon: <GraduationCap size={16} /> },
                { label: "BRANCH", value: "Computer Science", icon: <BookOpen size={16} /> },
                { label: "SEMESTER", value: user.attendance?.semester || "Semester 2", icon: <Calendar size={16} /> },
                { label: "GENDER", value: "Male", icon: <User size={16} /> },
                { label: "ALTERNATE EMAIL", value: "—", icon: <Mail size={16} /> },
                { label: "ALTERNATE PHONE", value: "—", icon: <Phone size={16} /> },
                { label: "GUARDIAN", value: "—", icon: <User size={16} /> },
              ].map((item, idx) => (
                <div key={idx} className="bg-neutral-900/50 border border-neutral-800 p-4 rounded-xl flex items-start gap-4 hover:border-neutral-700 transition-colors">
                  <div className="mt-1 p-2 rounded-lg bg-neutral-800 text-blue-400">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-neutral-550 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-sm font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CONTACT & LINKS */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-sm">
              <div className="px-6 py-4 border-b border-neutral-800 bg-neutral-800/20">
                <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-400">Contact & Links</h3>
              </div>
              <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">MOBILE</p>
                  <p className="text-sm">{user.mobile || "—"}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">PARENT MOBILE</p>
                  <p className="text-sm">7870929584</p>
                </div>
                 <div className="space-y-1">
                  <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">UNIVERSITY EMAIL</p>
                  <p className="text-sm text-blue-400 hover:underline cursor-pointer">{user.email}</p>
                </div>
                 <div className="space-y-1">
                  <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">CURRENT EMAIL</p>
                  <p className="text-sm text-blue-400 hover:underline cursor-pointer">{user.email}</p>
                </div>
                 <div className="space-y-1 sm:col-span-2">
                  <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">ADDRESS</p>
                  <p className="text-sm">Araria, bihar</p>
                </div>
                 <div className="space-y-1 sm:col-span-2">
                  <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">PORTFOLIO</p>
                  <p className="text-sm text-neutral-600">—</p>
                </div>
              </div>
            </div>

            {/* SOCIAL LINKS GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: "GITHUB", icon: <Github size={18} /> },
                { label: "LINKEDIN", icon: <Linkedin size={18} /> },
                { label: "TWITTER", icon: <Twitter size={18} /> },
                { label: "YOUTUBE", icon: <Youtube size={18} /> },
              ].map((social, idx) => (
                <div key={idx} className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-neutral-800 transition-colors cursor-pointer group">
                  <div className="text-neutral-500 group-hover:text-blue-400 transition-colors">
                    {social.icon}
                  </div>
                  <p className="text-[10px] font-bold text-neutral-500 group-hover:text-neutral-300 tracking-widest">{social.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
