import React from "react";
import { Box, Divider, Typography } from "@mui/material";

const TaskTrackTime = () => {
  return (
    <>
      <Typography className="bottomGridHeading" variant="h6">
        Track Task Time
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ overflowY: "auto", maxHeight: "240px" }}></Box>
    </>
  );
};

export default TaskTrackTime;
