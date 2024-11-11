import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTasks } from "../redux/tasksSlice";
import { Box } from "@mui/material";

const Counter = ({ task }) => {
  const dispatch = useDispatch();
  const [counters, setCounters] = useState({});

  useEffect(() => {
    let interval;

    if (task.status === "In-progress") {
      interval = setInterval(() => {
        setCounters((prevCounter) => ({
          ...prevCounter,
          [task.taskId]: (prevCounter[task.taskId] || 0) + 1,
        }));
      }, 1000);
    } else {
      const updatedTask = {
        ...task,
        timeSpent: counters[task.taskId],
      };
      dispatch(updateTasks(updatedTask));
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [task]);

  return <>{counters[task.taskId] || task.timeSpent || 0}</>;
};

export default Counter;
