import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTasks } from "../redux/tasksSlice";
import { Box } from "@mui/material";

const Counter = ({ task }) => {
  const [start, setStart] = useState(false); // Controls whether the timer is running or not
  const [count, setCount] = useState(0); // Keeps track of the elapsed time in milliseconds
  const [time, setTime] = useState("00:00:00"); // The formatted time string to display
  const [timeSetting, setTimeSetting] = useState({ m: 0, s: 0 }); // This could be used for custom time settings
  let initTime = new Date(); // Initial timestamp when the timer starts

  // Function to format and display time in mm:ss:ms format
  const showTimer = (ms) => {
    const milliseconds = Math.floor((ms % 1000) / 10)
      .toString()
      .padStart(2, "0");
    const second = Math.floor((ms / 1000) % 60)
      .toString()
      .padStart(2, "0");
    const minute = Math.floor((ms / 1000 / 60) % 60)
      .toString()
      .padStart(2, "0");

    setTime(minute + ":" + second + ":" + milliseconds);
  };

  // Reset the timer to 00:00:00
  const clearTime = () => {
    setTime("00:00:00");
    setCount(0);
  };

  // useEffect to handle timer logic and start/stop functionality
  useEffect(() => {
    // Only start the timer if task status is "In-progress"
    if (task.status === "In-progress") {
      console.log("in prog");
      setStart(false);
    } else {
      console.log("pand");
      setStart(true);
    }

    // If timer is not started, return and do nothing
    if (!start) {
      return;
    }

    // Set up an interval to update the timer
    var id = setInterval(() => {
      var left = count + (new Date() - initTime); // Calculate the elapsed time
      setCount(left); // Update the count state with the new elapsed time
      showTimer(left); // Update the time display with the formatted time
      if (left <= 0) {
        setTime("00:00:00:00"); // Reset timer to zero once the time runs out
        clearInterval(id); // Stop the interval
      }
    }, 1); // Run the timer update every millisecond

    // Cleanup function to clear the interval when component unmounts or when start changes
    return () => clearInterval(id);
  }, [task]); // Dependency array ensures useEffect runs when 'start' or 'count' changes

  return (
    <Box>
      <h1 className="timer">{time}</h1>

      {/* Optional timer control buttons */}
      {/* 
      <button
        className="button"
        style={{ backgroundColor: "gray", color: "#fff" }}
        onClick={clearTime}
      >
        Clear
      </button>
      */}

      {/* 
      {start ? (
        <button
          className="button"
          style={{ backgroundColor: "#820000", color: "red" }}
          onClick={() => setStart(false)}
        >
          Stop
        </button>
      ) : (
        <button className="button" onClick={() => setStart(true)}>
          Start
        </button>
      )}
      */}
    </Box>
  );
};

export default Counter;
