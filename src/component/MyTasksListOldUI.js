import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import ShowUserTasks from "./ShowUserTasks";
import Filter from "./Filter";
import Sort from "./Sort";
import NavigationPanel from "./NavigationPanel";
import { useTheme } from "@emotion/react";
const MyTasksListOldUI = () => {
  // Get the current theme using useTheme hook
  const theme = useTheme();
  return (
    <Box>
      <Box sx={{ height: "150px", display: "flex", overflow: "hidden" }}>
        <NavigationPanel />
        <Divider
          sx={{
            mr: 2,
            border: `1px solid ${theme.palette.secondary.main}`, // Use secondary color for divider
          }}
        />
        <Box
          sx={{
            width: "50vw",
            display: "flex",
          }}
        >
          <Box sx={{}}>
            <Filter />
          </Box>
          <Box sx={{ marginLeft: 5 }}>
            <Sort />
          </Box>
        </Box>
      </Box>
      <ShowUserTasks />
    </Box>
  );
};

export default MyTasksListOldUI;
