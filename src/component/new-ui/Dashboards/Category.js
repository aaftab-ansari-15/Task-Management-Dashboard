import { Box, Divider, ListItem, Typography } from "@mui/material";
import "../../features/Calendar.css";
import React from "react";
import { DashboardsHeading } from "../../features/DashboardsHeading";

const Category = () => {
  return (
    <>
      <DashboardsHeading
        headingName={"Caetegory"}
        className={"bottomGridHeading"}
        width1={"70%"}
        width2={"35%"}
      />
      <Divider className="shadowDivider" sx={{ my: 2 }} />
      <Box sx={{ border:"2px solid", }}>
      <ListItem>ads</ListItem>
      <ListItem>ads</ListItem>
      <ListItem>ads</ListItem>
      <ListItem>ads</ListItem>
      <ListItem>ads</ListItem>
      <ListItem>ads</ListItem>
      </Box>
    </>
  );
};

export default Category;
