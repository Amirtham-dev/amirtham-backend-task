import React from 'react';
import profileImg from '../assets/profile.jpg';
import { 
  Mail, 
  Layers, 
  Sparkles, 
  ArrowUpRight, 
  Code2, 
  Database, 
  Server, 
  Atom, 
  Cpu, 
  Braces, 
  Globe, 
  Palette, 
  Layout, 
  GitBranch,
  User
} from 'lucide-react';

export default function HomeView() {
  const skills = [
    {
      name: 'MongoDB',
      icon: Database,
      category: 'Database',
      iconBg: 'bg-[#16a34a]',
      cardBg: 'bg-[#f2f9f3]',
      border: 'border-[#a7f3d0]',
      shadow: 'shadow-[3px_3px_0px_#bbf7d0]',
      textHover: 'group-hover:text-[#166534]',
      tagText: 'text-[#166534]'
    },
    {
      name: 'Express.js',
      icon: Server,
      category: 'Backend',
      iconBg: 'bg-[#db2777]',
      cardBg: 'bg-[#fdf2f4]',
      border: 'border-[#fbcfe8]',
      shadow: 'shadow-[3px_3px_0px_#fce7f3]',
      textHover: 'group-hover:text-[#be185d]',
      tagText: 'text-[#be185d]'
    },
    {
      name: 'React.js',
      icon: Atom,
      category: 'Frontend',
      iconBg: 'bg-[#0284c7]',
      cardBg: 'bg-[#f0f7fc]',
      border: 'border-[#93c5fd]',
      shadow: 'shadow-[3px_3px_0px_#bfdbfe]',
      textHover: 'group-hover:text-[#0369a1]',
      tagText: 'text-[#0369a1]'
    },
    {
      name: 'Node.js',
      icon: Cpu,
      category: 'Runtime',
      iconBg: 'bg-[#16a34a]',
      cardBg: 'bg-[#f2f9f3]',
      border: 'border-[#a7f3d0]',
      shadow: 'shadow-[3px_3px_0px_#bbf7d0]',
      textHover: 'group-hover:text-[#166534]',
      tagText: 'text-[#166534]'
    },
    {
      name: 'JavaScript (ES6+)',
      icon: Braces,
      category: 'Language',
      iconBg: 'bg-[#8c7355]',
      cardBg: 'bg-[#faf6ee]',
      border: 'border-[#d6c7b2]',
      shadow: 'shadow-[3px_3px_0px_#ede3d4]',
      textHover: 'group-hover:text-[#614d3a]',
      tagText: 'text-[#614d3a]'
    },
    {
      name: 'RESTful APIs',
      icon: Globe,
      category: 'Architecture',
      iconBg: 'bg-[#0284c7]',
      cardBg: 'bg-[#f0f7fc]',
      border: 'border-[#93c5fd]',
      shadow: 'shadow-[3px_3px_0px_#bfdbfe]',
      textHover: 'group-hover:text-[#0369a1]',
      tagText: 'text-[#0369a1]'
    },
    {
      name: 'Tailwind CSS',
      icon: Palette,
      category: 'Styling',
      iconBg: 'bg-[#0284c7]',
      cardBg: 'bg-[#f0f7fc]',
      border: 'border-[#93c5fd]',
      shadow: 'shadow-[3px_3px_0px_#bfdbfe]',
      textHover: 'group-hover:text-[#0369a1]',
      tagText: 'text-[#0369a1]'
    },
    {
      name: 'HTML5 & CSS3',
      icon: Layout,
      category: 'Web Core',
      iconBg: 'bg-[#db2777]',
      cardBg: 'bg-[#fdf2f4]',
      border: 'border-[#fbcfe8]',
      shadow: 'shadow-[3px_3px_0px_#fce7f3]',
      textHover: 'group-hover:text-[#be185d]',
      tagText: 'text-[#be185d]'
    },
    {
      name: 'Git & GitHub',
      icon: GitBranch,
      category: 'Version Control',
      iconBg: 'bg-[#1e293b]',
      cardBg: 'bg-[#f0f4f8]',
      border: 'border-[#94a3b8]',
      shadow: 'shadow-[3px_3px_0px_#cbd5e1]',
      textHover: 'group-hover:text-[#0f172a]',
      tagText: 'text-[#0f172a]'
    }
  ];

  return (
    <div className="relative w-full overflow-hidden animate-fade-slide-up">
      
      {/* MILD VINTAGE AMBIENT LIGHTING (SKY BLUE, BABY PINK, PISTA GREEN, BEIGE) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-dot-matrix opacity-25" />
        <div className="absolute -top-10 -left-10 w-[500px] h-[500px] rounded-full bg-[#bae6fd]/25 blur-3xl animate-blob-1" />
        <div className="absolute top-1/4 -right-10 w-[600px] h-[600px] rounded-full bg-[#fbcfe8]/20 blur-3xl animate-blob-2" />
        <div className="absolute -bottom-10 left-1/3 w-[500px] h-[500px] rounded-full bg-[#a7f3d0]/20 blur-3xl animate-blob-1" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-10">
          
          {/* LEFT COLUMN: HERO PROFILE CARD - MILD BEIGE WITH NAVY CONTRAST */}
          <div className="w-full lg:w-88 shrink-0">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#faf6ee] hover:bg-[#f6eee0] border-2 border-[#94a3b8] shadow-[5px_5px_0px_#1e293b] flex flex-col items-center text-center relative overflow-hidden group transition-all duration-300">
              
              {/* Top Accent Stripe: Sky Blue, Baby Pink & Pista Green */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#93c5fd] via-[#fbcfe8] to-[#a7f3d0]" />

              {/* Profile Photo with Rotating Halo */}
              <div className="relative p-2 group mt-2">
                <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-[#93c5fd] via-[#fbcfe8] to-[#a7f3d0] opacity-50 blur-xl animate-spin-slow group-hover:opacity-80 group-hover:blur-2xl transition-all duration-700" />
                
                {/* Framed Image */}
                <div className="relative p-1.5 rounded-full bg-white shadow-[3px_3px_0px_#1e293b] border-2 border-[#1e293b]">
                  <img 
                    src={profileImg} 
                    alt="Amirtham Kumar" 
                    className="w-44 h-44 sm:w-52 sm:h-52 object-cover rounded-full animate-float-slow transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Name */}
              <h1 className="mt-5 text-3xl sm:text-4xl font-outfit font-black text-[#1e293b] tracking-tight leading-tight">
                Amirtham Kumar
              </h1>

              {/* Full Stack Developer Badge with Shimmer - Mild Sky Blue */}
              <div className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-[#f0f7fc] border-2 border-[#93c5fd] text-[#0369a1] font-mono font-bold text-xs sm:text-sm tracking-wide shadow-[2px_2px_0px_#93c5fd] relative overflow-hidden group">
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer pointer-events-none" />
                <Code2 className="w-4 h-4 text-[#0284c7] shrink-0" />
                <span className="font-outfit font-black text-[#1e293b]">
                  Full Stack Developer
                </span>
                <Sparkles className="w-3.5 h-3.5 text-[#0284c7] animate-pulse" />
              </div>

              {/* Live Status Beacon - Mild Pista Green */}
              <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2f9f3] border border-[#a7f3d0] text-xs font-bold text-[#166534] shadow-2xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
                </span>
                <span>Available for Opportunities</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: SUMMARY, SKILLS & CONNECT CARDS */}
          <div className="flex-1 space-y-7 min-w-0 w-full">
            
            {/* 1. PROFESSIONAL SUMMARY CARD - MILD BEIGE */}
            <div className="group p-6 sm:p-7 rounded-3xl bg-[#faf6ee] hover:bg-[#f6eee0] border-2 border-[#d6c7b2] shadow-[5px_5px_0px_#cbb89d] hover:shadow-[3px_3px_0px_#cbb89d] hover:translate-x-[1px] hover:translate-y-[1px] transition-all duration-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#93c5fd] via-[#fbcfe8] to-[#a7f3d0]" />

              <div className="flex items-center gap-2.5 mb-3">
                <div className="p-1.5 rounded-lg bg-[#1e293b] text-white shadow-[2px_2px_0px_#64748b]">
                  <User className="w-3.5 h-3.5" />
                </div>
                <h2 className="text-[#1e293b] font-outfit font-black text-sm uppercase tracking-wider">
                  Professional Summary
                </h2>
              </div>

              <p className="text-[#334155] text-sm sm:text-base leading-relaxed font-medium">
                Passionate and dedicated MERN Stack Developer skilled in building end-to-end web applications with MongoDB, Express.js, React.js, and Node.js. Experienced in developing responsive user interfaces, scalable backend RESTful APIs, and clean, maintainable code.
              </p>
            </div>

            {/* 2. TECHNICAL SKILLS CARDS GRID - MILD PASTEL PALETTE */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-[#1e293b] text-white shadow-[2px_2px_0px_#64748b]">
                  <Layers className="w-3.5 h-3.5" />
                </div>
                <h2 className="text-[#1e293b] font-outfit font-black text-sm uppercase tracking-wider">
                  Technical Skills
                </h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-3.5">
                {skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className={`group flex items-center gap-3 p-3.5 rounded-2xl ${skill.cardBg} hover:opacity-95 border-2 ${skill.border} ${skill.shadow} hover:shadow-[1px_1px_0px_#1e293b] hover:translate-x-[1px] hover:translate-y-[1px] transition-all duration-200 cursor-default select-none relative overflow-hidden`}
                    >
                      <div className={`p-2 rounded-xl ${skill.iconBg} text-white group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-[1px_1px_0px_rgba(0,0,0,0.15)] shrink-0`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className={`text-xs sm:text-sm font-outfit font-black truncate text-[#1e293b] ${skill.textHover} transition-colors`}>
                          {skill.name}
                        </div>
                        <div className={`text-[10px] font-mono font-bold uppercase tracking-wider ${skill.tagText}`}>
                          {skill.category}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* 3. CONNECT & COLLABORATE CARDS - MILD VINTAGE COLORS */}
            <div className="space-y-3 pt-1">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-[#1e293b] text-white shadow-[2px_2px_0px_#64748b]">
                  <Globe className="w-3.5 h-3.5" />
                </div>
                <h2 className="text-[#1e293b] font-outfit font-black text-sm uppercase tracking-wider">
                  Connect & Collaborate
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {/* 1. EMAIL - MILD BABY PINK */}
                <a
                  href="mailto:srid57117@gmail.com"
                  className="group relative flex items-center justify-between p-4 rounded-2xl bg-[#fdf2f4] hover:bg-[#fce7eb] border-2 border-[#fbcfe8] shadow-[3px_3px_0px_#fce7f3] hover:shadow-[1px_1px_0px_#fbcfe8] hover:translate-x-[1px] hover:translate-y-[1px] transition-all duration-200 cursor-pointer overflow-hidden"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-[#db2777] text-white flex items-center justify-center group-hover:scale-110 transition-all shadow-[1.5px_1.5px_0px_#9d174d] shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono font-black uppercase tracking-wider text-[#be185d]">
                        Email
                      </div>
                      <div className="text-xs font-outfit font-black text-[#1e293b] truncate group-hover:text-[#db2777] transition-colors">
                        srid57117@gmail.com
                      </div>
                    </div>
                  </div>
                  <div className="text-[#db2777] group-hover:text-[#be185d] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </a>

                {/* 2. GITHUB - MILD NAVY BLUE */}
                <a
                  href="https://github.com/Amirtham-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-between p-4 rounded-2xl bg-[#f0f4f8] hover:bg-[#e4ecf4] border-2 border-[#94a3b8] shadow-[3px_3px_0px_#cbd5e1] hover:shadow-[1px_1px_0px_#94a3b8] hover:translate-x-[1px] hover:translate-y-[1px] transition-all duration-200 cursor-pointer overflow-hidden"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-[#1e293b] text-white flex items-center justify-center group-hover:scale-110 transition-all shadow-[1.5px_1.5px_0px_#0f172a] shrink-0">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono font-black uppercase tracking-wider text-[#0f172a]">
                        GitHub
                      </div>
                      <div className="text-xs font-outfit font-black text-[#1e293b] truncate group-hover:text-[#0f172a] transition-colors">
                        Amirtham-dev
                      </div>
                    </div>
                  </div>
                  <div className="text-[#1e293b] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </a>

                {/* 3. LINKEDIN - MILD SKY BLUE */}
                <a
                  href="https://www.linkedin.com/in/amirtham-kumar-818aa7373?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-between p-4 rounded-2xl bg-[#f0f7fc] hover:bg-[#e4f1fb] border-2 border-[#93c5fd] shadow-[3px_3px_0px_#bfdbfe] hover:shadow-[1px_1px_0px_#93c5fd] hover:translate-x-[1px] hover:translate-y-[1px] transition-all duration-200 cursor-pointer overflow-hidden"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-[#0284c7] text-white flex items-center justify-center group-hover:scale-110 transition-all shadow-[1.5px_1.5px_0px_#0369a1] shrink-0">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono font-black uppercase tracking-wider text-[#0284c7]">
                        LinkedIn
                      </div>
                      <div className="text-xs font-outfit font-black text-[#1e293b] truncate group-hover:text-[#0284c7] transition-colors">
                        Amirtham Kumar
                      </div>
                    </div>
                  </div>
                  <div className="text-[#0284c7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
