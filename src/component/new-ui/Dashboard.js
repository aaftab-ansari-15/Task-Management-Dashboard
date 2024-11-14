import { Box } from "@mui/material";
import React from "react";

const Dashboard = () => {
  return (
    <Box
      sx={{
        border: `solid 2px primary.main`, // Use primary color from theme
        m: 2,
        padding: 2,
        color: "text.primary",
      }}
    >Dashboard</Box>
  );
};

export default Dashboard;
