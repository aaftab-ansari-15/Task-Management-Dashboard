import { Box, Button, Divider, Grid2, Typography } from "@mui/material";
import { DateRangeIcon } from "@mui/x-date-pickers";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import TaskCategoryIcons from "../../../icons/TaskCategoryIcon";
import { useDispatch } from "react-redux";
import {
  setInProgressTask,
  setIsAnyTaskInProgress,
  updateTaskForm,
} from "../../../../redux/uiSlice";
import { deleteTask } from "../../../../redux/tasksSlice";
import MyTaskInProgressTracker from "./MyTaskInProgressTracker";

const MyTasksInProgress = () => {
  const dispatch = useDispatch();
  const inProgressTask = useSelector((state) => state.ui.inProgressTask);
  const handleRemoveTaskFromInProgress = () => {
    if (inProgressTask.status === "In-progress") {
      alert("Stop the timer first to remove this task");
    } else {
      dispatch(setIsAnyTaskInProgress(false));
      dispatch(setInProgressTask({}));
    }
  };
  return (
    <Box textAlign={"start"}>
      <Box p={1} mb={1} sx={{ bgcolor: "secondary.main" }}>
        <Typography fontWeight={"bolder"} variant="h6">
          In-Progress Task
        </Typography>
      </Box>
      <Divider sx={{ my: 1 }} />
      {Object.keys(inProgressTask).length > 0 ? (
        <Grid2 container spacing={1}>
          <Grid2
            size={8}
            bgcolor={"myTaskCard.main"}
            sx={{ position: "relative" }}
          >
            <Box p={2} display="flex" flexDirection="column">
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box display="flex" alignItems="center" gap={1}>
                  <TaskCategoryIcons category={inProgressTask.category} />
                  <Typography fontWeight="bold" variant="body1">
                    {inProgressTask.title}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                  <DateRangeIcon sx={{ fontSize: "1.2rem" }} />
                  <Typography sx={{ color: "text.secondary" }} variant="body2">
                    {inProgressTask.dueDate}
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ my: 1 }} />

              <Typography sx={{ color: "text.secondary", mb: 1 }}>
                {inProgressTask.description}
              </Typography>

              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box display="flex" gap={2}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 0.5,
                    }}
                  >
                    <span style={{ color: "orange", fontWeight: "bold" }}>
                      Priority:{" "}
                    </span>
                    {inProgressTask.priority}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 0.5,
                    }}
                  >
                    <span style={{ color: "orange", fontWeight: "bold" }}>
                      Status:
                    </span>{" "}
                    {inProgressTask.status}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 0.5,
                    }}
                  >
                    <span style={{ color: "orange", fontWeight: "bold" }}>
                      Time spent:
                    </span>{" "}
                    {inProgressTask.timeSpent}
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  position: "absolute",
                  bottom: 16,
                  right: 16,
                }}
              >
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleRemoveTaskFromInProgress}
                >
                  Remove Task
                </Button>
              </Box>
            </Box>
          </Grid2>

          <Grid2 size={4} bgcolor="myTaskCard.main">
            <MyTaskInProgressTracker />
          </Grid2>
        </Grid2>
      ) : (
        <Box sx={{ color: "text.disabled", m: 3 }}>
          <Typography variant="h4">Select task from below</Typography>
        </Box>
      )}
    </Box>
  );
};

export default MyTasksInProgress;
