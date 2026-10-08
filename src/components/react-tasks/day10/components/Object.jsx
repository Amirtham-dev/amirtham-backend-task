import { useState } from "react";

function Object() {
  const [student, setStudent] = useState({
    name: "Arun",
    age: 22,
    course: "React"
  });

  const updateCourse = () => {
    setStudent({
      ...student,
      course: "MERN"
    });
  };

  const addCity = () => {
    setStudent({
      ...student,
      city: "Chennai"
    });
  };

  return (
    <div className="task-card">
      <h2>Task 2 - Object</h2>

      <div className="student-info">
        <p>Name: {student.name}</p>
        <p>Age: {student.age}</p>
        <p>Course: {student.course}</p>
        {student.city && <p>City: {student.city}</p>}
      </div>

      <div className="btn-group">
        <button onClick={updateCourse}>
          Update Course
        </button>

        <button onClick={addCity}>
          Add City
        </button>
      </div>
    </div>
  );
}

export default Object;
