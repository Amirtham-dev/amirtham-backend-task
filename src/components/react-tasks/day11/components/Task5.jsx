import React, { useState } from "react";

const ShowPassword = () => {
  const [password] = useState("react123");
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="py-8 bg-blue-100 flex flex-col justify-center items-center gap-5 min-h-[420px] rounded-xl">
      <h1 className="text-3xl font-bold text-black mb-2">
        SHOW PASSWORD
      </h1>

      <div className="bg-white w-80 p-6 rounded-2xl shadow-lg flex flex-col items-center gap-4">
        <h2 className="text-lg font-semibold text-gray-700">
          Password:
        </h2>

        <div className="h-8 flex items-center justify-center">
          <p className="text-lg font-mono font-bold text-gray-800 tracking-wider">
            {showPassword ? password : "••••••••"}
          </p>
        </div>

        <button
          onClick={togglePassword}
          className="bg-blue-500 text-white py-2 px-5 rounded-lg font-semibold hover:bg-blue-600 transition-all cursor-pointer shadow-xs active:scale-95"
        >
          {showPassword ? "Hide Password" : "Show Password"}
        </button>
      </div>
    </div>
  );
};

export default ShowPassword;
