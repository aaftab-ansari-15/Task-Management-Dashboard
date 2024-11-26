import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import React from "react";
export const DashboardsHeading = ({
  headingName,
  className,
  width1,
  width2,
  numberOfTask,
}) => {
  const theme = useTheme();

  return (
    <Typography className={className} variant="h5">
      {headingName}
    </Typography>
    // <Box
    //   className=" DashboardBox2Heading"
    //   sx={{
    //     width: width1,
    //     transition: "width 0.3s ease-in-out",
    //     borderRadius: 5,
    //     bgcolor: theme.palette.primary.light,
    //   }}
    // >
    //   <Box
    //     className=" DashboardBox1Heading"
    //     sx={{
    //       width: width2,
    //       transition: "width 0.3s ease-in-out",
    //       borderRadius: 4,
    //       p: "3px",
    //       bgcolor: theme.palette.primary.main,
    //     }}
    //   >

    //   </Box>
    // </Box>
  );
};
