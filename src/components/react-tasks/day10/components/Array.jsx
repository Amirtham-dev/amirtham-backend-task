import { useState } from "react";

function Array() {
  const [skills, setSkills] = useState([
    "HTML",
    "CSS",
    "JavaScript"
  ]);

  const addReact = () => {
    setSkills([...skills, "React"]);
  };

  const updateJavaScript = () => {
    setSkills(
      skills.map((skill) =>
        skill === "JavaScript"
          ? "Advanced JavaScript"
          : skill
      )
    );
  };

  return (
    <div className="task-card">
      <h2>Task 1 - Array</h2>

      <div className="skills-list">
        {skills.map((skill, index) => (
          <p key={index}>{skill}</p>
        ))}
      </div>

      <div className="btn-group">
        <button onClick={addReact}>
          Add React
        </button>

        <button onClick={updateJavaScript}>
          Update JavaScript
        </button>
      </div>
    </div>
  );
}

export default Array;
