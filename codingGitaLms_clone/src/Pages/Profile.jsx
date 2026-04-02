import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { X } from "lucide-react";

// Helper component for small individual detail cards (used in Top Right Grid and inside larger sections)
const DetailBlock = ({ label, value, isLink }) => (
  <div className="border border-neutral-800/80 bg-neutral-900/30 rounded-xl p-4 flex flex-col justify-center">
    <p className="text-[10px] font-semibold text-neutral-500 uppercase tracking-widest mb-1.5">{label}</p>
    {isLink && value !== "—" ? (
      <a href={value.includes('@') ? `mailto:${value}` : value} target={value.includes('@') ? "_self" : "_blank"} rel="noreferrer" className="text-sm font-medium text-blue-500 hover:underline truncate">
        {value}
      </a>
    ) : (
      <p className="text-[13px] font-medium text-neutral-200">{value}</p>
    )}
  </div>
);

export default function Profile() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  // State for user loaded from localStorage
  const [user, setUser] = useState(null);

  // State for form fields inside Edit Modal
  const [formData, setFormData] = useState({
    profileImage: "",
    address: "",
    email: "",
    parentMobile: "",
    portfolio: "",
    resume: "",
    github: "",
    linkedin: "",
    twitter: "",
    youtube: ""
  });

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      const parsed = JSON.parse(data);
      setUser(parsed);
      setFormData({
        profileImage: parsed.profileImage || "",
        address: parsed.address || "Araria,bihar",
        email: parsed.email || "abdulhaque4171@gmail.com",
        parentMobile: parsed.parentMobile || "7870929584",
        portfolio: parsed.portfolio || "",
        resume: parsed.resume || "",
        github: parsed.github || "",
        linkedin: parsed.linkedin || "",
        twitter: parsed.twitter || "",
        youtube: parsed.youtube || ""
      });
    }
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const updatedUser = { ...user, ...formData };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser)); // Persist changes
    setIsEditModalOpen(false); // Close modal
  };

  if (!user) return <div className="min-h-screen bg-neutral-950 flex items-center justify-center text-white">Loading...</div>;

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500/30 pb-16">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 space-y-6">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Profile</h1>
            <p className="text-neutral-400 text-sm mt-1">View and update your personal information</p>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsResetModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors shadow-lg shadow-blue-900/20"
            >
              Reset Password
            </button>
            <button 
              onClick={() => setIsEditModalOpen(true)}
              className="bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-white text-sm font-medium px-5 py-2 rounded-md transition-colors"
            >
              Edit
            </button>
          </div>
        </div>

        {/* TOP ROW: Sidebar + Details Grid */}
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* LEFT: Profile Summary Card */}
          <div className="lg:w-[35%] bg-[#0a0a0a] border border-neutral-800 rounded-2xl p-6 flex flex-col items-center justify-center h-fit shadow-md">
            <div className="w-28 h-28 rounded-full border-4 border-neutral-800 overflow-hidden mb-4 bg-neutral-800">
              {user.profileImage ? (
                <img src={user.profileImage} alt={user.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-neutral-800">
                  <img src="https://ui-avatars.com/api/?name=ABDUL+HAQUE&background=18181A&color=fff" className="w-full h-full" alt="avatar"/>
                </div>
              )}
            </div>
            <h2 className="text-xl font-bold uppercase tracking-widest text-white mb-1">{user.name || "Student"}</h2>
            <p className="text-neutral-400 text-[13px] mb-1">Student</p>
            <p className="text-neutral-500 text-[11px] mb-6 tracking-wide">
              {user.university} • {user.uid}
            </p>
            
            <div className="flex w-full gap-3">
              <button 
                onClick={() => setIsEditModalOpen(true)}
                className="flex-1 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-white text-xs font-semibold py-2.5 rounded-lg transition-colors"
              >
                Edit Profile
              </button>
              <button 
                onClick={() => setIsResetModalOpen(true)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-2.5 rounded-lg transition-colors"
              >
                Reset Password
              </button>
            </div>
          </div>

          {/* RIGHT: Individual Details Grid */}
          <div className="lg:w-[65%] grid grid-cols-1 sm:grid-cols-2 gap-4">
            <DetailBlock label="ENROLLMENT NUMBER" value={user.uid} />
            <DetailBlock label="COURSE" value="B.Tech" />
            <DetailBlock label="BRANCH" value="Computer Science" />
            <DetailBlock label="SEMESTER" value={user.attendance?.semester || "Semester 2"} />
            <DetailBlock label="GENDER" value="Male" />
            <DetailBlock label="ALTERNATE EMAIL" value={user.email || "abdulhaque4171@gmail.com"} isLink={true} />
            <DetailBlock label="ALTERNATE PHONE" value="—" />
            <DetailBlock label="GUARDIAN" value="—" />
          </div>

        </div>

        {/* CONTACT & LINKS SECTION */}
        <div className="bg-[#0a0a0a] border border-neutral-800 rounded-2xl p-6 shadow-md mt-6">
          <h3 className="text-[17px] font-bold text-white mb-5 tracking-wide">Contact & Links</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <DetailBlock label="MOBILE" value="6482366299" />
            <DetailBlock label="PARENT MOBILE" value={user.parentMobile || "7870929584"} />
            <DetailBlock label="UNIVERSITY EMAIL" value="abdulhaque4171@gmail.com" isLink={true} />
            <DetailBlock label="CURRENT EMAIL" value={user.email || "abdulhaque4171@gmail.com"} isLink={true} />
            <DetailBlock label="ADDRESS" value={user.address || "Araria,bihar"} />
            <DetailBlock label="PORTFOLIO" value={user.portfolio || "—"} isLink={!!user.portfolio} />
            <DetailBlock label="RESUME" value={user.resume || "—"} isLink={!!user.resume} />
            <DetailBlock label="GITHUB" value={user.github || "—"} isLink={!!user.github} />
            <DetailBlock label="LINKEDIN" value={user.linkedin || "—"} isLink={!!user.linkedin} />
            <DetailBlock label="TWITTER" value={user.twitter || "—"} isLink={!!user.twitter} />
            <DetailBlock label="YOUTUBE" value={user.youtube || "—"} isLink={!!user.youtube} />
          </div>
        </div>

        {/* ACADEMICS SECTION */}
        <div className="bg-[#0a0a0a] border border-neutral-800 rounded-2xl p-6 shadow-md mt-6">
          <h3 className="text-[17px] font-bold text-white mb-5 tracking-wide">Academics</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <DetailBlock label="UNIVERSITY" value={user.university || "SUxCG 714"} />
            <DetailBlock label="UNIVERSITY UID" value={user.uid} />
            <DetailBlock label="DATE OF BIRTH" value="—" />
            <DetailBlock label="ADMISSION YEAR" value="—" />
            <DetailBlock label="CURRENT YEAR" value="—" />
            <DetailBlock label="SECTION" value="—" />
            <div className="border border-neutral-800/80 bg-neutral-900/30 rounded-xl p-4 flex flex-col justify-center sm:col-span-1">
               <p className="text-[10px] font-semibold text-neutral-500 uppercase tracking-widest mb-1.5">SUBJECTS</p>
               <p className="text-[13px] font-medium text-neutral-200 truncate pr-2">
                 SU11, SU12, SU13, SU14, SU15, SU16, SU0208, SU0207, SU0201, SU...
               </p>
            </div>
            <DetailBlock label="MENTORS" value="Ankita" />
          </div>
        </div>

      </main>

      {/* EDIT PROFILE MODAL */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-[#0a0a0a] border border-neutral-800 rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between p-5 border-b border-neutral-800">
              <h2 className="text-lg font-bold text-white">Edit Profile</h2>
              <button onClick={() => setIsEditModalOpen(false)} className="text-neutral-400 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs text-neutral-400 mb-1.5 block">Avatar URL</label>
                  <input type="text" name="profileImage" value={formData.profileImage} onChange={handleInputChange} className="bg-[#121212] border border-neutral-800 rounded-lg p-2.5 w-full text-sm outline-none focus:border-neutral-600 transition-colors text-white" placeholder="https://res.cloudinary.com/..." />
                </div>
                <div>
                  <label className="text-xs text-neutral-400 mb-1.5 block">Address</label>
                  <input type="text" name="address" value={formData.address} onChange={handleInputChange} className="bg-[#121212] border border-neutral-800 rounded-lg p-2.5 w-full text-sm outline-none focus:border-neutral-600 transition-colors text-white" placeholder="Araria,bihar" />
                </div>
                <div>
                  <label className="text-xs text-neutral-400 mb-1.5 block">Current Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="bg-[#121212] border border-neutral-800 rounded-lg p-2.5 w-full text-sm outline-none focus:border-neutral-600 transition-colors text-white" placeholder="abdulhaque4171@gmail.com" />
                </div>
                <div>
                  <label className="text-xs text-neutral-400 mb-1.5 block">Parent Mobile (Optional)</label>
                  <input type="text" name="parentMobile" value={formData.parentMobile} onChange={handleInputChange} className="bg-[#121212] border border-neutral-800 rounded-lg p-2.5 w-full text-sm outline-none focus:border-neutral-600 transition-colors text-white" placeholder="7870929584" />
                </div>
                <div>
                  <label className="text-xs text-neutral-400 mb-1.5 block">Portfolio Link</label>
                  <input type="text" name="portfolio" value={formData.portfolio} onChange={handleInputChange} className="bg-[#121212] border border-neutral-800 rounded-lg p-2.5 w-full text-sm outline-none focus:border-neutral-600 transition-colors text-white" placeholder="https://..." />
                </div>
                <div>
                  <label className="text-xs text-neutral-400 mb-1.5 block">Resume Link</label>
                  <input type="text" name="resume" value={formData.resume} onChange={handleInputChange} className="bg-[#121212] border border-neutral-800 rounded-lg p-2.5 w-full text-sm outline-none focus:border-neutral-600 transition-colors text-white" placeholder="https://..." />
                </div>
                <div>
                  <label className="text-xs text-neutral-400 mb-1.5 block">Github Link</label>
                  <input type="text" name="github" value={formData.github} onChange={handleInputChange} className="bg-[#121212] border border-neutral-800 rounded-lg p-2.5 w-full text-sm outline-none focus:border-neutral-600 transition-colors text-white" placeholder="https://github.com/..." />
                </div>
                <div>
                  <label className="text-xs text-neutral-400 mb-1.5 block">LinkedIn Link</label>
                  <input type="text" name="linkedin" value={formData.linkedin} onChange={handleInputChange} className="bg-[#121212] border border-neutral-800 rounded-lg p-2.5 w-full text-sm outline-none focus:border-neutral-600 transition-colors text-white" placeholder="https://linkedin.com/in/..." />
                </div>
                <div>
                  <label className="text-xs text-neutral-400 mb-1.5 block">Twitter Link</label>
                  <input type="text" name="twitter" value={formData.twitter} onChange={handleInputChange} className="bg-[#121212] border border-neutral-800 rounded-lg p-2.5 w-full text-sm outline-none focus:border-neutral-600 transition-colors text-white" placeholder="https://x.com/..." />
                </div>
                <div>
                  <label className="text-xs text-neutral-400 mb-1.5 block">YouTube Link</label>
                  <input type="text" name="youtube" value={formData.youtube} onChange={handleInputChange} className="bg-[#121212] border border-neutral-800 rounded-lg p-2.5 w-full text-sm outline-none focus:border-neutral-600 transition-colors text-white" placeholder="https://youtube.com/..." />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 p-5 border-t border-neutral-800 bg-[#080808]">
              <button 
                onClick={() => setIsEditModalOpen(false)} 
                className="px-5 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-medium transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleSave}
                className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* RESET PASSWORD MODAL */}
      {isResetModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-[#0a0a0a] border border-neutral-800 rounded-2xl w-full max-w-md shadow-2xl p-6">
            <h2 className="text-lg font-bold text-white mb-3">Reset Password?</h2>
            <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
              Are you sure you want to reset your password? A one-time password (OTP) will be sent to your registered email.
            </p>
            <div className="flex justify-end gap-3">
              <button 
                onClick={() => setIsResetModalOpen(false)} 
                className="px-5 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-medium transition-colors"
              >
                No
              </button>
              <button 
                onClick={() => {
                   // Functionality for OTP here, closing for now
                   setIsResetModalOpen(false);
                   alert("A password reset OTP has been sent to your registered email.");
                }}
                className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
