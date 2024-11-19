import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import "../../features/Calendar.css";
import { DashboardsHeading } from "../../features/DashboardsHeading";

const Notifications = () => {
  return (
    <>
      <DashboardsHeading
        headingName={"Notification"}
        className={"bottomGridHeading"}
        width1={"100%"}
        width2={"50%"}
      />

      <Divider className="shadowDivider" sx={{ my: 2 }} />
      <Box sx={{ overflowY: "auto", maxHeight: "240px" }}></Box>
    </>
  );
};

export default Notifications;
