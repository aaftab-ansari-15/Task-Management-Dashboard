import React from "react";
import { Box, Divider } from "@mui/material";
import AddTaskInUser from "./AddTaskInUser";
import UpdateTaskInUser from "./UpdateTaskInUser";
import ShowUserTasks from "./ShowUserTasks";
import TaskNotification from "./TaskNotification";
import Filter from "./Filter";
import Sort from "./Sort";
import { useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles"; // To access the theme inside components

const User = () => {
  // Get the current theme using useTheme hook
  const theme = useTheme();

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
          <Box sx={{ width: "50vw" }}>Box</Box>
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
    </>
  );
};

export default User;
