import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { updateTask } from "../../../../redux/tasksSlice";
import { useSelector, useDispatch } from "react-redux";
import { setInProgressTask } from "../../../../redux/uiSlice";
import { formatTime, timeToSeconds } from "../../../../utills/genral";

const MyTaskInProgressTracker = () => {
  const dispatch = useDispatch();
  const inProgressTask = useSelector((state) => state.ui.inProgressTask);
  const currentUser = useSelector((state) => state.users.currentUser);
  const [time, setTime] = useState(timeToSeconds(inProgressTask.timeSpent));
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    const handleUnload = () => {
      if (isRunning) {
        const updatedTask = {
          ...inProgressTask,
          status: "Pending",
          timeSpent: formatTime(time),
        };
        dispatch(
          updateTask({
            data: updatedTask,
            userId: currentUser.email,
            taskId: updatedTask.taskId,
          })
        );
        dispatch(setInProgressTask(updatedTask));
      }
    };
    window.addEventListener("beforeunload", handleUnload);
    return () => window.removeEventListener("beforeunload", handleUnload);
  }, [isRunning, time]);
  const handleStart = () => {
    setIsRunning(true);
    const updatedTask = {
      ...inProgressTask,
      status: "In-progress",
    };
    dispatch(
      updateTask({
        data: updatedTask,
        userId: currentUser.email,
        taskId: updatedTask.taskId,
      })
    );
    dispatch(setInProgressTask(updatedTask));
  };

  const handlePause = () => {
    setIsRunning(false);
    const updatedTask = {
      ...inProgressTask,
      status: "Pending",
      timeSpent: formatTime(time),
    };
    dispatch(
      updateTask({
        data: updatedTask,
        userId: currentUser.email,
        taskId: updatedTask.taskId,
      })
    );
    dispatch(setInProgressTask(updatedTask));
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={2}
      borderRadius={1}
    >
      <Box mt={2} display="flex" gap={2}>
        <Box
          bgcolor="secondary.dark"
          sx={{ borderRadius: 2, border: "1px solid", p: 2 }}
        >
          <Typography variant="h4" fontWeight="bold">
            {formatTime(time)}
          </Typography>
        </Box>
        {!isRunning ? (
          <Button
            fullWidth
            variant="contained"
            color="text.primary"
            sx={{ bgcolor: "taskTrackButton.start", fontWeight: "bold" }}
            onClick={handleStart}
          >
            Start
          </Button>
        ) : (
          <Button
            fullWidth
            variant="contained"
            color="text.primary"
            sx={{ bgcolor: "taskTrackButton.pause", fontWeight: "bold" }}
            onClick={handlePause}
          >
            Pause
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default MyTaskInProgressTracker;
