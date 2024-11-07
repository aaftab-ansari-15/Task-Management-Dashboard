import React from "react";
import { Box } from "@mui/material";
import AddTaskInUser from "./AddTaskInUser";
import UpdateTaskInUser from "./UpdateTaskInUser";
import ShowUserTasks from "./ShowUserTasks";
import TaskNotification from "./TaskNotification";
import Filter from "./Filter";
import Sort from "./Sort";
import { useSelector } from "react-redux";

const User = () => {
  return (
    <>
      <Box sx={{ margin: 2 }}>
        <Box>
          <h3>Add New Task</h3>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ width: "inherit", border: "solid 2px green" }}>
            <UpdateTaskInUser />
            <AddTaskInUser />
          </Box>
        </Box>
      </Box>
      {/* <hr /> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "85%",
            border: "solid 2px #185EA5",
            marginLeft: 1,
            marginRight: 1,
            padding: 2,
          }}
        >
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
        <Box
          sx={{
            width: "15%",
            border: "solid 2px #C41C1C",
            marginLeft: 1,
            marginRight: 1,
            padding: 2,
          }}
        >
          <TaskNotification />
        </Box>
      </Box>
    </>
  );
};

export default User;
