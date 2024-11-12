import React from "react";
import { Box, Button, Divider } from "@mui/material";
import AddTaskInUser from "./AddTaskInUser";
import UpdateTaskInUser from "./UpdateTaskInUser";
import ShowUserTasks from "./ShowUserTasks";
import TaskNotification from "./TaskNotification";
import Filter from "./Filter";
import Sort from "./Sort";
import { useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles"; // To access the theme inside components
import { useDispatch } from "react-redux";
import { addTaskFrom } from "../redux/modalSlice";

const User = () => {
  // Get the current theme using useTheme hook
  const theme = useTheme();
  const dispatch = useDispatch()
  //Task Add
  const handleAddTaskClick = () => {
    dispatch(addTaskFrom(true));
  };

  return (
    <>
      <Box
        sx={{
          border: `solid 2px ${theme.palette.primary.main}`, // Use primary color from theme
          m: 2,
          padding: 2,
        }}
      >
        <Box sx={{ height: "150px", display: "flex", overflow: "hidden" }}>
          <Box sx={{ width: "50vw" }}>
            <Button
              variant="outlined"
              color="success"
              onClick={handleAddTaskClick}
              sx={{ backgroundColor: "#14b003", width: "50%", color: "white" }}
            >
              Add Task
            </Button>
          </Box>
          <Divider
            sx={{
              mr: 2,
              border: `1px solid ${theme.palette.secondary.main}`, // Use secondary color for divider
            }}
          />
          <Box
            sx={{
              width: "50vw",
              display: "flex",
            }}
          >
            <Box sx={{}}>
              <Filter />
            </Box>
            <Box sx={{ marginLeft: 5 }}>
              <Sort />
            </Box>
          </Box>
        </Box>
        <ShowUserTasks />
      </Box>

      {/* Uncomment and use TaskNotification if needed */}
      {/* 
      <Box
        sx={{
          width: "15%",
          border: `solid 2px ${theme.palette.error.main}`, // Example using error color for notification box border
          marginLeft: 1,
          marginRight: 1,
          padding: 2,
        }}
      >
        <TaskNotification />
      </Box> 
      */}
      <UpdateTaskInUser />
      <AddTaskInUser />
      {/* <TaskNotification /> */}
    </>
  );
};

export default User;
