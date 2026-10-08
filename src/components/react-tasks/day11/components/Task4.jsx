import React, { useState } from "react";

const Task4 = () => {
  const [employeelist, setEmployeelist] = useState([
    { id: 1, name: "Arun", salary: 25000 },
    { id: 2, name: "Priya", salary: 30000 },
    { id: 3, name: "Kumar", salary: 28000 }
  ]);

  // Add Employee
  const addEmployee = () => {
    setEmployeelist([
      ...employeelist,
      {
        id: 4,
        name: "Bala",
        salary: 32000
      }
    ]);
  };

  // Update Salary
  const updateSalary = () => {
    setEmployeelist(
      employeelist.map((e) => {
        return e.id === 2
          ? { ...e, salary: 35000 }
          : e;
      })
    );
  };

  return (
    <div className="py-8 bg-blue-100 flex flex-col justify-center items-center gap-5 min-h-[420px] rounded-xl">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-black mb-2">
        EMPLOYEE LIST
      </h1>

      {/* Card */}
      <div className="bg-white w-96 max-w-full p-6 rounded-2xl shadow-lg">
        {/* Employee List */}
        <div className="flex flex-col gap-3 justify-center items-center">
          {employeelist.map((e, i) => {
            return (
              <div
                key={i + 1}
                className="bg-gray-100 p-3 rounded-lg w-full text-left"
              >
                <h1 className="text-sm font-bold text-gray-700">
                  ID: {e.id}
                </h1>

                <h1 className="text-base font-bold text-gray-800">
                  Name: {e.name}
                </h1>

                <h1 className="text-sm font-bold text-emerald-600">
                  Salary: ₹{e.salary}
                </h1>
              </div>
            );
          })}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mt-5">
          <button
            onClick={addEmployee}
            className="bg-green-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-600 transition-all cursor-pointer shadow-xs active:scale-95"
          >
            ADD EMPLOYEE
          </button>

          <button
            onClick={updateSalary}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 transition-all cursor-pointer shadow-xs active:scale-95"
          >
            UPDATE SALARY
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task4;
