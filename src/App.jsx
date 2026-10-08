import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import DailyTaskView from './components/DailyTaskView';
import TeamTaskView from './components/TeamTaskView';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f3eb] text-[#0f172a] flex flex-col font-sans relative selection:bg-[#ea580c] selection:text-white">
      {/* WARM RETRO AMBIENT BACKGROUND BLOBS */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-[#dfc7aa]/35 blur-3xl animate-blob-1" />
        <div className="absolute top-1/3 -right-24 w-[500px] h-[500px] rounded-full bg-[#cda783]/25 blur-3xl animate-blob-2" />
        <div className="absolute -bottom-24 left-1/3 w-[480px] h-[480px] rounded-full bg-[#e8d5be]/40 blur-3xl animate-blob-1" />
      </div>

      {/* HEADER / NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT AREA - REACT ROUTER DOM ROUTES */}
      <main className="w-full flex-1">
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route 
            path="/daily-task/*" 
            element={
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <DailyTaskView />
              </div>
            } 
          />
          <Route 
            path="/team-task" 
            element={
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <TeamTaskView />
              </div>
            } 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}
