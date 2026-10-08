import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState("arun");
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const [studentname, setStudentName] = useState("");
  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    setName("kumar");
  };

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleToggle = () => {
    setShow(!show);
  };

  const handleChange = (e) => {
    setStudentName(e.target.value);
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="p-4 sm:p-6 space-y-4 max-w-xl mx-auto">
      {/* 1. Name State */}
      <div className="bg-green-300 p-4 rounded-2xl flex flex-col items-center justify-center gap-2 shadow-xs">
        <h1 className="text-2xl font-bold text-slate-900">Name:{name}</h1>
        <button 
          onClick={handleClick} 
          className="bg-blue-400 hover:bg-blue-500 text-white font-medium p-2 px-5 rounded-2xl cursor-pointer transition-all active:scale-95 shadow-xs"
        >
          click me
        </button>
      </div>

      {/* 2. Counter State */}
      <div className="bg-blue-300 p-4 rounded-2xl flex flex-col items-center justify-center gap-2 shadow-xs">
        <h1 className="text-2xl font-bold text-slate-900">COUNT: {count}</h1>
        <div className="flex flex-wrap gap-2 justify-center">
          <button 
            onClick={handleIncrease} 
            className="bg-green-400 hover:bg-green-500 text-white font-medium p-2 px-4 rounded-2xl cursor-pointer transition-all active:scale-95 shadow-xs"
          >
            Increase
          </button>
          <button 
            onClick={handleDecrease} 
            className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-medium p-2 px-4 rounded-2xl cursor-pointer transition-all active:scale-95 shadow-xs"
          >
            Decrease
          </button>
          <button 
            onClick={handleReset} 
            className="bg-red-400 hover:bg-red-500 text-white font-medium p-2 px-4 rounded-2xl cursor-pointer transition-all active:scale-95 shadow-xs"
          >
            Reset
          </button>
        </div>
      </div>

      {/* 3. Toggle Visibility */}
      <div className="bg-purple-300 p-4 rounded-2xl flex flex-col items-center justify-center gap-2 shadow-xs">
        <button 
          onClick={handleToggle} 
          className="bg-purple-400 hover:bg-purple-500 text-white font-medium p-2 px-6 rounded-2xl cursor-pointer transition-all active:scale-95 shadow-xs"
        >
          click
        </button>
        {show && <h2 className="text-2xl font-semibold text-purple-950 animate-fade-slide-up">Welcome to React</h2>}
      </div>

      {/* 4. Controlled Student Name Input */}
      <div className="bg-yellow-300 p-4 rounded-2xl flex flex-col items-center justify-center gap-2 shadow-xs">
        <input
          type="text"
          value={studentname}
          onChange={handleChange}
          placeholder="Enter student name"
          className="bg-white border border-yellow-500 rounded-xl px-4 py-2 text-center text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-yellow-600 shadow-inner w-64"
        />
        <h2 className="text-2xl font-semibold text-slate-900">Name: {studentname}</h2>
      </div>

      {/* 5. Likes Counter */}
      <div className="bg-orange-300 p-4 rounded-2xl flex flex-col items-center justify-center gap-2 shadow-xs">
        <h2 className="text-2xl font-semibold text-slate-900">Likes: {likes}</h2>
        <button
          onClick={handleLike}
          className="bg-pink-400 hover:bg-pink-500 text-white font-medium p-2 px-6 rounded-2xl cursor-pointer transition-all active:scale-95 shadow-xs"
        >
          Like
        </button>
      </div>
    </div>
  );
};

export default App;
