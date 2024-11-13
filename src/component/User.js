import React from "react";
import { useSelector } from "react-redux";
import Dashboard from "./Dashboard";
import MyTasksListOldUI from "./MyTasksListOldUI";
import MyTasksListNewUi from "./MyTasksListNewUi";
import TaskNotification from "./TaskNotification";
import AddTaskInUser from "./AddTaskInUser";
import UpdateTaskInUser from "./UpdateTaskInUser";
import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";

const User = () => {
  const theme = useTheme();
  const componentName = useSelector((state) => state.modal.componentName);

  const renderComponent = () => {
    switch (componentName) {
      case "Dashboard":
        return <Dashboard />;
      case "MyTasksListOldUi":
        return <MyTasksListOldUI />;
      case "MyTasksListNewUi":
        return <MyTasksListNewUi />;
      case "TaskNotification":
        return <TaskNotification />;
      default:
        return null;
    }
  };

  return (
    <>
      <Box
        sx={{
          border: `solid 2px ${theme.palette.primary.main}`, // Use primary color from theme
          m: 2,
          padding: 2,
          bgcolor: "background.paper",
          color: "text.primary",
        }}
      >
        {renderComponent()}
      </Box>

      <UpdateTaskInUser />
      <AddTaskInUser />
    </>
  );
};

export default User;
