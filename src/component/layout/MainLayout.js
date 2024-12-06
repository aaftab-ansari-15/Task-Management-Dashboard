import React from "react";
import { useSelector } from "react-redux";
import Dashboard from "./new-ui/Dashboard";
import MyTasksListOldUI from "./old-ui/MyTasksListOldUI";
import TaskNotification from "./new-ui/TaskNotification";
import { Box } from "@mui/material";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import MyTasksList from "./new-ui/MyTasks";
import "../../style/main-layout.css";
import Forms from "../forms/Forms";
import ErrorPage from "./new-ui/ErrorPage";
import AboutPage from "./new-ui/AboutPage";
import { ABOUT, DASHBOARD, MY_TASKS, NOTIFICATIONS, TASKS_LIST_OLD_UI } from "../../constants/componentsName.";
const MainLayout = () => {
  const componentName = useSelector((state) => state.ui.mainLayoutComponent);
  
  const renderMainLayputComponent = () => {
    switch (componentName) {
      case DASHBOARD:
        return <Dashboard />;
      case TASKS_LIST_OLD_UI:
        return <MyTasksListOldUI />;
      case MY_TASKS:
        return <MyTasksList />;
      case NOTIFICATIONS:
        return <TaskNotification />;
      case ABOUT:
        return <AboutPage />;
      default:
        return <ErrorPage />;
    }
  };

  return (
    <Box>
      <Navbar />
      <SideBar />
      {renderMainLayputComponent()}
      <Forms />
    </Box>
  );
};

export default MainLayout;
