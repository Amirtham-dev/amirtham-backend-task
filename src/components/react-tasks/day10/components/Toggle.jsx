import { useState } from "react";

function Toggle() {
  const [show, setShow] = useState(false);

  const toggleDetails = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="task-card">
      <h2>Task 3 - Toggle</h2>

      <div className="btn-group">
        <button onClick={toggleDetails}>
          {show ? "Hide Details" : "Show Details"}
        </button>
      </div>

      {show ? (
        <div className="details-box">
          <h3>Student Details</h3>
          <p>Name: Arun</p>
          <p>Age: 22</p>
          <p>Course: React</p>
        </div>
      ) : null}
    </div>
  );
}

export default Toggle;
