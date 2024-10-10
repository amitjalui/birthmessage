import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const seniorDev = {
  name: "ZOHAIR SIR",
  dedication: 100,
  hardWork: 100,
  codingSkills: "exceptional",
  holidaysTaken: 0,
};

function BirthdayMessage() {
  const [showMessage, setShowMessage] = useState(false);
  const [numConfetti, setNumConfetti] = useState(300); // Start with 300 confetti pieces
  const { width, height } = useWindowSize();

  const handleButtonClick = () => {
    setShowMessage((prevShowMessage) => !prevShowMessage); // Toggle the message visibility
    if (!showMessage) {
      setNumConfetti(300); // Reset the confetti to 300 when message is shown
      // Gradually reduce the confetti pieces over 3 seconds
      setTimeout(() => {
        let decrementInterval = setInterval(() => {
          setNumConfetti((prev) => {
            if (prev <= 0) {
              clearInterval(decrementInterval); // Stop when confetti count reaches zero
              return 0;
            }
            return prev - 10; // Decrease by 10 pieces at a time
          });
        }, 100); // Reduce confetti every 100ms for a smooth effect
      }, 2000); // Start decreasing confetti after 2 seconds
    }
  };

  const celebrateBirthday = (dev) => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h2 style={styles.heading}>🎉 HAPPY BIRTHDAY TO YOU, {dev.name}! 🎉</h2>
        <p style={styles.text}>
          You're the ultimate example of dedication (
          <strong>{dev.dedication}%</strong>), hard work (
          <strong>{dev.hardWork}%</strong>), and{" "}
          <strong>{dev.codingSkills}</strong> at coding!
        </p>
        <p style={styles.text}>
          Wishing you a bug-free, code-filled, and absolutely amazing year
          ahead!
        </p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={styles.fromText}
        >
          from TS team member
        </motion.p>
      </motion.div>
    );
  };

  return (
    <div style={styles.container}>
      <h1>Birthday Celebration 🎂</h1>
      <motion.button
        style={styles.button}
        onClick={handleButtonClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {showMessage ? "Hide Message" : "Celebrate Birthday"}
      </motion.button>

      {showMessage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={styles.message}
        >
          {/* Confetti pop effect */}
          {numConfetti > 0 && (
            <Confetti width={width} height={height} numberOfPieces={numConfetti} />
          )}
          {celebrateBirthday(seniorDev)}
        </motion.div>
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: "center",
    padding: "20px",
    height: "100vh", // Full height to prevent overflow
    overflow: "hidden", // Prevent overflow from animations
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    marginBottom: "20px",
  },
  message: {
    marginTop: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    position: "relative",
    maxHeight: "calc(100vh - 100px)", // Limit message height to avoid overflow
    overflowY: "auto", // Scroll if content overflows
    overflow: "hidden",    
  },
  heading: {
    fontSize: "24px",
    color: "#FF4081",
  },
  text: {
    fontSize: "18px",
  },
  fromText: {
    fontSize: "small",
    fontStyle: "italic",
    marginTop: "10px",
  },
};

export default BirthdayMessage;
