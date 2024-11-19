import React from "react";
import { DashboardsHeading } from "../../features/DashboardsHeading";
import { Box, Divider } from "@mui/material";

const TaskTrackTime = () => {
  return (
    <>
      <DashboardsHeading
        headingName={"Track Time"}
        className={"bottomGridHeading"}
        width1={"100%"}
        width2={"50%"}
      />
      <Divider className="shadowDivider" sx={{ my: 2 }} />
      <Box sx={{ overflowY: "auto", maxHeight: "240px" }}></Box>
    </>
  );
};

export default TaskTrackTime;
