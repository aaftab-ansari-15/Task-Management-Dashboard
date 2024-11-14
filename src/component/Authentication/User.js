import React from "react";
import { useSelector } from "react-redux";
import Dashboard from "../new-ui/Dashboard";
import MyTasksListOldUI from "../old-ui/MyTasksListOldUI";
import MyTasksListNewUi from "../new-ui/MyTasksListNewUi";
import TaskNotification from "../task-related/TaskNotification";
import AddTaskInUser from "../task-related/AddTaskInUser";
import UpdateTaskInUser from "../task-related/UpdateTaskInUser";
import { Box, Drawer } from "@mui/material";
import { useTheme } from "@emotion/react";
import Navbar from "../features/Navbar";
import SideBar from "../features/SideBar";
import { useDispatch } from "react-redux";
import { sideBarModal } from "../../redux/modalSlice";
const User = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const componentName = useSelector((state) => state.modal.componentName);
  const isSideBar = useSelector((state) => state.modal.isSideBar);
  const handleSideBarClose = () => {
    dispatch(sideBarModal(false));
  };
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
      <Navbar />
      <Drawer
        open={isSideBar}
        onClose={handleSideBarClose}
        PaperProps={{
          sx: {
            color: "text.primary",
            borderRadius: 4, // Apply border radius to the drawer's inner paper
            top: "0px", // You can set the top margin here as well if needed
            bottom: "0px",
            // mt:2,
            // ml:2,
            // height:"97vh",
            // bgcolor: "#85e0f9",
          },
        }}
      >
        <SideBar />
      </Drawer>
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
