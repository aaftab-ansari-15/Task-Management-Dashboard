import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Dashboard from "./Dashboard";
import MyTasksListOldUI from "../old-ui/MyTasksListOldUI";
import TaskNotification from "./TaskNotification";
import AddTaskInUser from "../forms/AddTaskInUser";
import UpdateTaskInUser from "../forms/UpdateTaskInUser";
import { Box, Drawer } from "@mui/material";
import Navbar from "../features/Navbar";
import SideBar from "../features/SideBar";
import { useDispatch } from "react-redux";
import { sideBarModal } from "../../redux/modalSlice";
import MyTasksList from "./MyTasksList";
import { useTheme } from "@emotion/react";
const MainLayout = () => {
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
      case "MyTasksList":
        return <MyTasksList />;
      case "TaskNotification":
        return <TaskNotification />;
      default:
        return null;
    }
  };

  return (
    <Box>
      <Navbar />
      <Drawer
        open={isSideBar}
        onClose={handleSideBarClose}
        PaperProps={{
          sx: {
            borderRadius: 2,
            top: 0,
            bottom: 0,
            bgcolor: theme.palette.background.default,
          },
        }}
      >
        <SideBar />
      </Drawer>
      {renderComponent()}
      <UpdateTaskInUser />
      <AddTaskInUser />
    </Box>
  );
};

export default MainLayout;
