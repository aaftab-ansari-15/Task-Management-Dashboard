import { Box, Divider, Typography } from "@mui/material";
import "../../features/Calendar.css";
import React from "react";
import { DashboardsHeading } from "../../features/DashboardsHeading";

const Category = () => {
  return (
    <>
      <DashboardsHeading
        headingName={"Caetegory"}
        className={"bottomGridHeading"}
        width1={"100%"}
        width2={"50%"}
      />
      <Divider className="shadowDivider" sx={{ my: 2 }} />
      <Box sx={{ overflowY: "auto", maxHeight: "240px" }}></Box>
    </>
  );
};

export default Category;
