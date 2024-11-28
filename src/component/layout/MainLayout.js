import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Dashboard from "./new-ui/Dashboard";
import MyTasksListOldUI from "./old-ui/MyTasksListOldUI";
import TaskNotification from "./new-ui/TaskNotification";
import AddTaskInUser from "../forms/AddTaskInUser";
import UpdateTaskInUser from "../forms/UpdateTaskInUser";
import { Box, Drawer } from "@mui/material";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import { useDispatch } from "react-redux";
import { sideBarModal } from "../../redux/modalSlice";
import MyTasksList from "./new-ui/MyTasksList";
import { useTheme } from "@emotion/react";
import "../../style/main-layout.css";
import Forms from "../forms/Forms";
import ErrorPage from "./new-ui/ErrorPage";
import AboutPage from "./new-ui/AboutPage";
const MainLayout = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const componentName = useSelector((state) => state.modal.componentName);
  const isSideBar = useSelector((state) => state.modal.isSideBar);

  const handleSideBarClose = () => {
    dispatch(sideBarModal(false));
  };
  const renderInnerComponent = () => {
    switch (componentName) {
      case "Dashboard":
        return <Dashboard />;
      case "MyTasksListOldUi":
        return <MyTasksListOldUI />;
      case "MyTasksList":
        return <MyTasksList />;
      case "TaskNotification":
        return <TaskNotification />;
      case "About":
        return <AboutPage />;
      default:
        return <ErrorPage />;
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
            width: 310,
            top: 0,
            bottom: 0,
            borderRadius: 2,
            bgcolor: theme.palette.background.default,
          },
        }}
      >
        <SideBar />
      </Drawer>
      {renderInnerComponent()}
      <Forms />
    </Box>
  );
};

export default MainLayout;
