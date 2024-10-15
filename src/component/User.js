import React from "react";
import { Box } from "@mui/material";
import AddTaskInUser from "./AddTaskInUser";
import UpdateTaskInUser from "./UpdateTaskInUser";
import ShowUserTasks from "./ShowUserTasks";
import { useSelector } from "react-redux";
const User = () => {
  const taskMode = useSelector((state) => state.modal.taskMode);

  return (
    <>
      {taskMode ? <UpdateTaskInUser /> : <AddTaskInUser />}

      <hr />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: "80%", maxWidth: 1500 }}>
          <ShowUserTasks />
        </Box>
        <Box sx={{ width: "20%" }}>Notification</Box>
      </Box>
    </>
  );
};

export default User;
