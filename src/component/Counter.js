import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateTasks } from "../redux/tasksSlice";
import { useSelector } from "react-redux";
const Counter = ({ task }) => {
  const dispatch = useDispatch();
  const [counters, setCounters] = useState([]);

  useEffect(() => {
    let interval;
    if (task.status === "In-progress") {
      interval = setInterval(() => {
        setCounters((prevCounter) => ({
          ...prevCounter,
          [task.taskId]: (prevCounter[task.taskId] || 0) + 1,
        }));
      }, 1000);
    }
    if (task.status !== "In-progress") {
      const updatedTask = {
        ...task,
        timeSpent: counters[task.taskId],
        // status: "Completed"
      };
      dispatch(updateTasks(updatedTask));
      // console.log("Task updated:", updatedTask);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [task.status, task.taskId]);

  return <div>{counters[task.taskId] || task.timeSpent || 0}</div>;
};

export default Counter;
