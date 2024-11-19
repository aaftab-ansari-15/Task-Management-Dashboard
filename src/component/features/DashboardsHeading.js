import { Box, Typography } from "@mui/material";
import React from "react";

export const DashboardsHeading = ({
  headingName,
  className,
  width1,
  width2,
}) => {
  return (
    <Box sx={{ width: width1, borderRadius: 5, backgroundColor: "#fbfee6" }}>
      <Box
        className="DashboardBox2Heading"
        sx={{
          width: width2,
          transition: "width 0.3s ease-in-out",
          borderRadius: 4,
          p: 2,
          backgroundColor: "#def641",
        }}
      >
        <Typography className={className} variant="h5">
          {headingName}
        </Typography>
      </Box>
    </Box>
  );
};
