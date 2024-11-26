import React from "react";
import { Box, Divider, Typography } from "@mui/material";

const CompletedTasks = () => {
  return (
    <>
      <Typography className="bottomGridHeading" variant="h6">
        Completed Tasks
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ overflowY: "auto", maxHeight: "240px" }}></Box>
    </>
  );
};

export default CompletedTasks;
