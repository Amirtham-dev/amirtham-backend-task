import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/amirtham-logo.png';
import { Home, CheckSquare, Users } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { 
      path: '/', 
      label: 'Home', 
      icon: Home,
      isActive: (pathname) => pathname === '/' || pathname === '/home',
      activeGradient: 'bg-[#1e293b]',
      activeShadow: 'shadow-[2px_2px_0px_#0f172a]',
      dotColor: 'bg-sky-300 shadow-[0_0_8px_#38bdf8]',
      hoverText: 'hover:text-[#1e293b]',
      hoverBg: 'hover:bg-[#f0f4f8]',
      hoverShadow: 'hover:shadow-[0_2px_10px_rgba(148,163,184,0.2)]',
      iconInactive: 'text-[#64748b]',
      glowUnderline: 'bg-[#1e293b]'
    },
    { 
      path: '/daily-task', 
      label: 'Daily task', 
      icon: CheckSquare,
      isActive: (pathname) => pathname.startsWith('/daily-task'),
      activeGradient: 'bg-[#1e293b]',
      activeShadow: 'shadow-[2px_2px_0px_#0f172a]',
      dotColor: 'bg-sky-300 shadow-[0_0_8px_#38bdf8]',
      hoverText: 'hover:text-[#1e293b]',
      hoverBg: 'hover:bg-[#f0f4f8]',
      hoverShadow: 'hover:shadow-[0_2px_10px_rgba(148,163,184,0.2)]',
      iconInactive: 'text-[#64748b]',
      glowUnderline: 'bg-[#1e293b]'
    },
    { 
      path: '/team-task', 
      label: 'Team task', 
      icon: Users,
      isActive: (pathname) => pathname.startsWith('/team-task'),
      activeGradient: 'bg-[#1e293b]',
      activeShadow: 'shadow-[2px_2px_0px_#0f172a]',
      dotColor: 'bg-sky-300 shadow-[0_0_8px_#38bdf8]',
      hoverText: 'hover:text-[#1e293b]',
      hoverBg: 'hover:bg-[#f0f4f8]',
      hoverShadow: 'hover:shadow-[0_2px_10px_rgba(148,163,184,0.2)]',
      iconInactive: 'text-[#64748b]',
      glowUnderline: 'bg-[#1e293b]'
    }
  ];

  return (
    <header className="sticky top-0 z-50 animate-navbar-entrance transition-all duration-300">
      {/* FROSTED WARM BEIGE HEADER */}
      <div className="relative bg-[#faf6ee]/95 backdrop-blur-2xl border-b-2 border-[#d6c7b2] shadow-[0_4px_20px_rgba(30,41,59,0.04)] overflow-hidden">
        
        {/* Subtle mild ambient lighting in header */}
        <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-[#bae6fd]/20 blur-2xl pointer-events-none" />
        <div className="absolute -top-10 -right-10 w-52 h-52 rounded-full bg-[#fbcfe8]/20 blur-2xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* LEFT SIDE: GLOWING LOGO CARD */}
            <Link 
              to="/"
              className="flex items-center cursor-pointer group select-none py-1"
            >
              <div className="relative flex items-center justify-center p-1.5 transition-all duration-500 group-hover:scale-105">
                {/* Rotating mild pastel aura behind logo */}
                <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-[#93c5fd] via-[#fbcfe8] to-[#a7f3d0] opacity-50 blur-md animate-spin-slow group-hover:opacity-85 group-hover:blur-lg transition-all duration-500" />
                
                {/* Floating Logo image with retro border and shadow */}
                <div className="relative p-0.5 rounded-full bg-[#faf6ee] shadow-[2px_2px_0px_#94a3b8] border-2 border-[#94a3b8]">
                  <img 
                    src={logoImg} 
                    alt="Amirtham Logo" 
                    className="h-14 sm:h-16 w-auto object-contain rounded-full bg-[#faf6ee] p-0.5 animate-float-slow group-hover:rotate-1 transition-transform duration-300"
                  />
                </div>
              </div>
            </Link>

            {/* RIGHT SIDE: RETRO WARM PILL NAVBAR */}
            <nav className="hidden md:flex items-center">
              {/* Retro border wrapper for the pill bar */}
              <div className="p-1 rounded-full bg-[#f5eee1] border-2 border-[#94a3b8] shadow-[2px_2px_0px_#1e293b]">
                <div className="flex items-center p-1 rounded-full bg-[#faf6ee] gap-2">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const active = item.isActive(location.pathname);

                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`relative group flex items-center gap-2.5 px-5 sm:px-6 py-2.5 rounded-full text-sm font-outfit tracking-wide font-bold transition-all duration-300 cursor-pointer overflow-hidden select-none ${
                          active
                            ? `text-white ${item.activeGradient} ${item.activeShadow} scale-[1.02]`
                            : `text-[#1e293b] ${item.hoverText} ${item.hoverBg} ${item.hoverShadow} hover:-translate-y-0.5`
                        }`}
                      >
                        {/* Shimmer light beam animation on active button */}
                        {active && (
                          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer pointer-events-none" />
                        )}

                        {/* Icon */}
                        <Icon className={`w-4 h-4 transition-all duration-300 ${
                          active 
                            ? 'text-white scale-110 drop-shadow-xs' 
                            : `${item.iconInactive} group-hover:scale-110 group-hover:-translate-y-0.5`
                        }`} />

                        {/* Label */}
                        <span className="relative z-10 transition-colors duration-300">
                          {item.label}
                        </span>

                        {/* Active glowing beacon dot */}
                        {active && (
                          <span className="relative flex h-2 w-2 ml-0.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-300 opacity-75" />
                            <span className={`relative inline-flex rounded-full h-2 w-2 ${item.dotColor}`} />
                          </span>
                        )}

                        {/* Hover underline accent line for inactive */}
                        {!active && (
                          <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 ${item.glowUnderline} rounded-full transition-all duration-300 group-hover:w-3/5 opacity-0 group-hover:opacity-100`} />
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </nav>

            {/* MOBILE HAMBURGER BUTTON */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-11 h-11 flex flex-col items-center justify-center gap-1.5 rounded-xl bg-[#faf6ee] text-[#1e293b] border-2 border-[#94a3b8] shadow-[2px_2px_0px_#1e293b] focus:outline-hidden hover:bg-[#f0f4f8] transition-all duration-300 cursor-pointer active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                aria-label="Toggle menu"
              >
                {/* 3-bar animated transform to X */}
                <span className={`w-5 h-0.5 bg-[#1e293b] rounded-full transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2 bg-[#1e293b]' : ''
                }`} />
                <span className={`w-5 h-0.5 bg-[#1e293b] rounded-full transition-all duration-300 ${
                  isOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
                }`} />
                <span className={`w-5 h-0.5 bg-[#1e293b] rounded-full transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-2 bg-[#1e293b]' : ''
                }`} />
              </button>
            </div>

          </div>
        </div>

        {/* MILD PASTEL RETRO ACCENT STRIPE (BOTTOM LINE) */}
        <div className="h-[3px] w-full bg-gradient-to-r from-[#93c5fd] via-[#fbcfe8] via-[#a7f3d0] via-[#93c5fd] to-[#fbcfe8] animate-gradient-x shadow-[0_1px_8px_rgba(148,163,184,0.15)]" />
      </div>

      {/* MOBILE RESPONSIVE DRAWER */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
      }`}>
        <div className="border-b-2 border-[#b8956e] bg-[#faf5ec]/95 backdrop-blur-2xl px-4 py-4 shadow-xl">
          <div className="p-1.5 rounded-2xl bg-[#f5eee2] border-2 border-[#b8956e] space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = item.isActive(location.pathname);

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`w-full flex items-center justify-between py-3 px-4 rounded-xl text-sm font-outfit font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                    active
                      ? `text-[#faf5ec] ${item.activeGradient} ${item.activeShadow}`
                      : `text-[#5c3d28] hover:bg-[#ede2cf]`
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${active ? 'text-[#faf5ec]' : item.iconInactive}`} />
                    <span>{item.label}</span>
                  </div>
                  {active && (
                    <span className={`h-2.5 w-2.5 rounded-full ${item.dotColor} animate-pulse`} />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
