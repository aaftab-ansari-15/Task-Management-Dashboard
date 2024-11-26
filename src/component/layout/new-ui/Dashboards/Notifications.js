import React from "react";
import { Box, Divider, Typography } from "@mui/material";

const Notifications = () => {
  return (
    <>
      <Typography className="bottomGridHeading" variant="h6">
        Notification
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ overflowY: "auto", maxHeight: "240px" }}></Box>
    </>
  );
};

export default Notifications;
