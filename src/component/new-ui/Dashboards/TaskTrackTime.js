import React from "react";
import { DashboardsHeading } from "../../features/DashboardsHeading";
import { Box, Divider } from "@mui/material";

const TaskTrackTime = () => {
  return (
    <>
      <DashboardsHeading
        headingName={"TrackTime"}
        className={"bottomGridHeading"}
        width1={"70%"}
        width2={"40%"}
      />
      <Divider className="shadowDivider" sx={{ my: 2 }} />
      <Box sx={{ overflowY: "auto", maxHeight: "240px" }}></Box>
    </>
  );
};

export default TaskTrackTime;
