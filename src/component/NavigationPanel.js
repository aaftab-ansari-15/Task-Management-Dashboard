import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import AddTaskInUser from "./AddTaskInUser";
import UpdateTaskInUser from "./UpdateTaskInUser";
import ShowUserTasks from "./ShowUserTasks";
import TaskNotification from "./TaskNotification";
import Filter from "./Filter";
import Sort from "./Sort";
import { useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles"; // To access the theme inside components
import { useDispatch } from "react-redux";
import { addTaskFrom, changeComponent } from "../redux/modalSlice";
const NavigationPanel = () => {
  const dispatch = useDispatch();
  //Task Add
  const handleAddTaskClick = () => {
    dispatch(addTaskFrom(true));
  };
  const handleNotificationClick = () => {
    dispatch(changeComponent("TaskNotification"));
  };
  return (
    <Box sx={{ width: "50vw" }}>
      <Box sx={{ display: "flex", my: 2 }}>
        <Box sx={{ width: "60%", mx: 2 }}>
          <Button
            fullWidth
            onClick={handleAddTaskClick}
            sx={{
              backgroundColor: "#0f9ae9",
              color: "white",
            }}
          >
            <Typography variant="h6">Dashboard</Typography>
          </Button>
        </Box>
        <Box sx={{ width: "40%", mx: 2 }}>
          <Button
            fullWidth
            onClick={handleAddTaskClick}
            sx={{
              backgroundColor: "#00a173",
              color: "white",
            }}
          >
            <Typography variant="h6">Add New Task</Typography>
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", my: 2 }}>
        <Box sx={{ width: "40%", mx: 2 }}>
          <Button
            fullWidth
            onClick={handleAddTaskClick}
            sx={{
              backgroundColor: "#e90f99",
              color: "white",
            }}
          >
            <Typography variant="h6">Task List</Typography>
          </Button>
        </Box>
        <Box sx={{ width: "60%", mx: 2 }}>
          <Button
            fullWidth
            onClick={handleNotificationClick}
            sx={{
              backgroundColor: "#f98715",
              color: "white",
            }}
          >
            <Typography variant="h6">Notifications</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default NavigationPanel;
