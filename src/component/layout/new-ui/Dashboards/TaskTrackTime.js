import React from "react";
import { Box, Divider, Typography } from "@mui/material";

const TaskTrackTime = () => {
  return (
    <>
      <Typography className="bottomGridHeading" variant="h6">
        Track task time 
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ overflowY: "auto", maxHeight: "240px" }}>
      <Typography className="bottomGridHeading" variant="body2">
        This Component is not completed yet (In-progress)
      </Typography>
      </Box>
    </>
  );
};

export default TaskTrackTime;
