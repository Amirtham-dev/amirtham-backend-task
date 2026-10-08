import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

export default function TeamTaskView() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Coordinate Sprint goals', assignedTo: 'Team', status: 'In Progress' },
    { id: 2, title: 'Code review for new feature', assignedTo: 'Frontend Team', status: 'Pending' }
  ]);
  const [title, setTitle] = useState('');
  const [assignedTo, setAssignedTo] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title: title.trim(),
        assignedTo: assignedTo.trim() || 'Team',
        status: 'Pending'
      }
    ]);
    setTitle('');
    setAssignedTo('');
  };

  const updateStatus = (id, newStatus) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, status: newStatus } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="bg-[#faf6ee] rounded-3xl p-6 sm:p-8 border-2 border-[#94a3b8] shadow-[5px_5px_0px_#1e293b] max-w-4xl mx-auto relative overflow-hidden animate-fade-slide-up">
      {/* Top Accent Stripe: Sky Blue, Baby Pink & Pista Green */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#93c5fd] via-[#fbcfe8] to-[#a7f3d0]" />

      <h1 className="text-3xl font-outfit font-black text-[#1e293b] mb-6">
        Team Tasks
      </h1>

      {/* ADD TEAM TASK FORM */}
      <form onSubmit={addTask} className="flex flex-col sm:flex-row gap-2.5 mb-6">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Team task title..."
          className="flex-1 px-4 py-2.5 bg-white border-2 border-slate-300 text-[#1e293b] placeholder-slate-400 rounded-xl text-sm font-medium shadow-[2px_2px_0px_#cbd5e1] focus:outline-none focus:ring-2 focus:ring-[#93c5fd]"
        />
        <input
          type="text"
          value={assignedTo}
          onChange={(e) => setAssignedTo(e.target.value)}
          placeholder="Assigned to (optional)..."
          className="sm:w-48 px-4 py-2.5 bg-white border-2 border-slate-300 text-[#1e293b] placeholder-slate-400 rounded-xl text-sm font-medium shadow-[2px_2px_0px_#cbd5e1] focus:outline-none focus:ring-2 focus:ring-[#93c5fd]"
        />
        <button
          type="submit"
          className="flex items-center justify-center gap-1.5 px-5 py-2.5 bg-[#1e293b] hover:bg-[#0f172a] text-white rounded-xl text-sm font-mono font-bold shadow-[2px_2px_0px_#0f172a] hover:translate-x-[1px] hover:translate-y-[1px] transition-all cursor-pointer shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Add Task</span>
        </button>
      </form>

      {/* TEAM TASK LIST */}
      <div className="overflow-x-auto rounded-2xl border-2 border-[#94a3b8] shadow-[3px_3px_0px_#cbd5e1] bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#f0f4f8] border-b-2 border-slate-200 text-[#1e293b] font-mono text-xs font-bold uppercase tracking-wider">
            <tr>
              <th className="py-3 px-4">Task</th>
              <th className="py-3 px-4">Assigned To</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {tasks.length === 0 ? (
              <tr>
                <td colSpan={4} className="py-8 text-center text-slate-400 font-medium">
                  No team tasks yet. Add one above!
                </td>
              </tr>
            ) : (
              tasks.map((task) => (
                <tr key={task.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-4 font-outfit font-black text-[#1e293b]">{task.title}</td>
                  <td className="py-3.5 px-4 text-[#475569] font-medium">{task.assignedTo}</td>
                  <td className="py-3.5 px-4">
                    <select
                      value={task.status}
                      onChange={(e) => updateStatus(task.id, e.target.value)}
                      className={`px-2.5 py-1 text-xs font-mono font-bold rounded-lg border-2 ${
                        task.status === 'Completed' 
                          ? 'bg-[#f2f9f3] text-[#166534] border-[#a7f3d0]' 
                          : task.status === 'In Progress' 
                          ? 'bg-[#f0f7fc] text-[#0369a1] border-[#93c5fd]' 
                          : 'bg-[#fdf2f4] text-[#be185d] border-[#fbcfe8]'
                      } shadow-[1px_1px_0px_rgba(0,0,0,0.08)] focus:outline-none cursor-pointer`}
                    >
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="text-[#db2777] hover:text-[#9d174d] hover:scale-110 transition-transform p-1 cursor-pointer"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
