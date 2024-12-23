import { Box, Button, Divider, Typography } from "@mui/material";
import { DateRangeIcon } from "@mui/x-date-pickers";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import TaskCategoryIcons from "../../../icons/TaskCategoryIcon";
import { useDispatch } from "react-redux";
import { updateTaskForm } from "../../../../redux/uiSlice";
import { deleteTask } from "../../../../redux/tasksSlice";

const MyTasksInProgressItem = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.users.currentUser);
  const myTasks = useSelector((state) => state.ui.myTasks);
  const [inProgressTask, setInProgressTask] = useState({});
  useEffect(() => {
    const getInprogressTask = myTasks.find(
      (task) => task.status === "In-progress"
    );
    setInProgressTask(getInprogressTask || {});
  }, [myTasks]);
  //Task Update
  const handleTaskUpdateClick = (task) => {
    dispatch(updateTaskForm({ arg1: true, arg2: task }));
  };
  //Task Delete
  const handleTaskDeleteClick = (task) => {
    dispatch(deleteTask({ userId: currentUser.email, taskId: task.taskId }));
    console.log("Task Deleted", task);
  };
  return (
    <Box textAlign={"start"} mx={"25px"}>
      <Box p={1} mb={2} sx={{ bgcolor: "secondary.main" }}>
        <Typography fontWeight={"bolder"} variant="h6">
          In-Progress
        </Typography>
      </Box>

      {Object.keys(inProgressTask).length > 0 ? (
        <Box px={2} display="flex" flexDirection="column" bgcolor={"myTaskCard.main"}>
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
                Priority: {inProgressTask.priority}
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
                Status: {inProgressTask.status}
              </Typography>
            </Box>

            <Box display="flex" gap={1}>
              <Button
                variant="contained"
                color="warning"
                onClick={() => handleTaskUpdateClick(inProgressTask)}
              >
                Update
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => handleTaskDeleteClick(inProgressTask)}
              >
                Delete
              </Button>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box sx={{ color: "text.disabled", m: 3 }}>
          <Typography variant="h4">Nothing in here..</Typography>
        </Box>
      )}
    </Box>
  );
};

export default MyTasksInProgressItem;
