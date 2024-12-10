import React from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import Forms from "../forms/Forms";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { renderMainLayoutComponent } from "../../utills/componentRender";
import "../../style/main-layout.css";

const MainLayout = () => {
  const componentName = useSelector((state) => state.ui.mainLayoutComponent);
  return (
    <Box>
      <Navbar />
      <SideBar />
      {renderMainLayoutComponent(componentName)}
      <Forms />
    </Box>
  );
};

export default MainLayout;
