import React, { useState } from "react";
import "./App.css";

const seniorDev = {
  name: "ZOHAIR SIR",
  dedication: 100,
  hardWork: 100,
  codingSkills: "exceptional",
  holidaysTaken: 0,
};

function App() {
  const [showMessage, setShowMessage] = useState(false);

  const celebrateBirthday = (dev) => {
    return (
      <div>
        <h2>🎉 HAPPY BIRTHDAY TO YOU, {dev.name}! 🎉</h2>
        <p>
          You're the ultimate example of dedication (
          <strong>{dev.dedication}%</strong>), hard work (
          <strong>{dev.hardWork}%</strong>), and{" "}
          <strong>{dev.codingSkills}</strong> at coding!
        </p>
        <p>
          Wishing you a bug-free, code-filled, and absolutely amazing year
          ahead!
        </p>
        <p style={{ fontSize: "small", fontStyle: "italic" }}>
          from TS team member
        </p>
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <h1>Birthday Celebration 🎂</h1>
      <button
        style={styles.button}
        onClick={() => setShowMessage(!showMessage)}
      >
        {showMessage ? "Hide Message" : "Celebrate Birthday"}
      </button>
      {showMessage && (
        <div style={styles.message}>{celebrateBirthday(seniorDev)}</div>
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: "center",
    padding: "20px",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
  message: {
    marginTop: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
};

export default App;
