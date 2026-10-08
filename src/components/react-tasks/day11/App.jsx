import React, { useState } from 'react';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Task3 from './components/Task3';
import Task4 from './components/Task4';
import Task5 from './components/Task5';

const tasksData = [
  { id: 1, taskNum: 'Task 1', component: Task1 },
  { id: 2, taskNum: 'Task 2', component: Task2 },
  { id: 3, taskNum: 'Task 3', component: Task3 },
  { id: 4, taskNum: 'Task 4', component: Task4 },
  { id: 5, taskNum: 'Task 5', component: Task5 },
];

const Day11App = () => {
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  const activeTask = tasksData.find((t) => t.id === selectedTaskId);

  return (
    <div className="w-full p-4 sm:p-5">
      {/* 1. INITIAL VIEW: ONLY TASK 1 TO TASK 5 CARDS WITH "VIEW OUTPUT" */}
      {selectedTaskId === null ? (
        <div className="animate-fade-slide-up">
          {/* 5 TASK CARDS (ONLY TASK NUMBER & VIEW OUTPUT - NO EXTRA CONTENT) */}
          <div className="flex flex-wrap gap-3.5 sm:gap-4 items-stretch justify-center max-w-5xl mx-auto">
            {tasksData.map((task) => (
              <div
                key={task.id}
                onClick={() => setSelectedTaskId(task.id)}
                className="w-full sm:w-[calc((100%-16px)/2)] md:w-[calc((100%-32px)/3)] lg:w-[calc((100%-64px)/5)] group relative rounded-2xl bg-[#f0f7fc] hover:bg-[#e4f1fb] border-2 border-[#93c5fd] shadow-[4px_4px_0px_#bfdbfe] hover:shadow-[5px_5px_0px_#93c5fd] hover:-translate-y-1.5 p-4 flex flex-col justify-between transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Top Stripe */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#bae6fd] via-[#7dd3fc] to-[#38bdf8] group-hover:h-2 transition-all duration-300" />
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer pointer-events-none" />

                {/* Only Task Name */}
                <div className="pt-2">
                  <span className="px-3 py-1.5 rounded-xl bg-[#0284c7] text-white font-mono font-black text-sm shadow-[1.5px_1.5px_0px_#0369a1] group-hover:scale-105 transition-transform inline-block">
                    {task.taskNum}
                  </span>
                </div>

                {/* Only View Output */}
                <div className="mt-4 pt-3 border-t border-[#bfdbfe]">
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-[#0284c7]">
                    <span className="group-hover:translate-x-0.5 transition-transform">
                      View Output
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* 2. TASK OUTPUT VIEW */
        <div className="space-y-4 animate-fade-slide-up">
          {/* Quick Task Switcher Bar */}
          <div className="p-2.5 bg-[#faf6ee] rounded-2xl border-2 border-[#d6c7b2] shadow-xs flex flex-wrap items-center justify-between gap-3">
            {/* Back to All 5 Cards Button */}
            <button
              onClick={() => setSelectedTaskId(null)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border-2 border-[#1e293b] text-[#1e293b] hover:bg-[#f1f5f9] shadow-[2px_2px_0px_#1e293b] active:translate-x-[1px] active:translate-y-[1px] font-mono text-xs font-bold transition-all cursor-pointer group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              <span>Task Cards</span>
            </button>

            {/* 5 Task Switcher Cards */}
            <div className="flex flex-wrap items-center gap-1.5">
              {tasksData.map((task) => {
                const isActive = task.id === selectedTaskId;
                return (
                  <button
                    key={task.id}
                    onClick={() => setSelectedTaskId(task.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#0284c7] text-white shadow-[2px_2px_0px_#075985] scale-105'
                        : 'bg-white hover:bg-sky-50 text-slate-700 border border-slate-300 hover:border-sky-300'
                    }`}
                  >
                    {task.taskNum}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Task Live Output Display */}
          <div className="rounded-2xl border-2 border-slate-200 overflow-hidden shadow-xs bg-slate-50 min-h-[460px] flex flex-col justify-center">
            {activeTask && <activeTask.component />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Day11App;
