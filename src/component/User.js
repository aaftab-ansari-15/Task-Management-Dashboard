import React from "react";
import { Box } from "@mui/material";
import AddTaskInUser from "./AddTaskInUser";
import UpdateTaskInUser from "./UpdateTaskInUser";
import ShowUserTasks from "./ShowUserTasks";
import TaskNotification from "./TaskNotification";
import Filter from "./Filter";
import Sort from "./Sort";

const User = () => {
  return (
    <>
      <Box sx={{ margin: 2 }}>
        <Box>Add New Task</Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ width: "70%", border: "solid 2px green" }}>
            <UpdateTaskInUser />
            <AddTaskInUser />
          </Box>
        </Box>
      </Box>
      <hr />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: "85%", border: "solid 2px #185EA5" }}>
          <h2>User's All Tasks</h2>
          <hr />
          <Box sx={{ width: "100%", display: "flex" }}>
            <Box sx={{ width: "60%", marginLeft: 3 }}>
              <Filter />
            </Box>
            <Box sx={{ width: "40%", marginRight: 3 }}>
              <Sort />
            </Box>
          </Box>
          <ShowUserTasks />
        </Box>
        <Box sx={{ width: "15%", border: "solid 2px #C41C1C" }}>
          <TaskNotification />
        </Box>
      </Box>
    </>
  );
};

export default User;
