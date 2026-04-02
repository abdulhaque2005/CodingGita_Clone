import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Login from "./components/Login";
import StudentDashboard from "./Pages/studentDashboard";
import Calendar from "./Pages/Calendar";
import Attendance from "./Pages/Attendance";
import SemesterAttendance from "./Pages/SemesterAttendance";
import Profile from "./Pages/Profile";
import Chat from "./Pages/Chat";
import Leave from "./Pages/Leave";
import Feedback from "./pages/Feedback";
import Events from "./Pages/Events";
import Assignments from "./Pages/Assignments";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<StudentDashboard />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/attendance" element={<Attendance />} />
      <Route path="/semester-attendance" element={<SemesterAttendance />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/apply-leave" element={<Leave />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/events" element={<Events />} />
      <Route path="/assignments" element={<Assignments />} />
    </Routes>
  );
}

export default App;
