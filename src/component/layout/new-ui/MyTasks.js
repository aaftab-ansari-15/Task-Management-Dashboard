import React from "react";
import { Item } from "../../../style/genral";
import { Box, Grid2 } from "@mui/material";
import MyTaskManagementPanel from "./my-tasks/MyTaskManagementPanel";
import MyTaskAllTasksDisplay from "./my-tasks/MyTaskAllTasksDisplay";
import MyTasksInProgress from "./my-tasks/MyTasksInProgress";

const MyTasks = () => {
  return (
    <Box sx={{ px: "2rem", pt: "2rem" }}>
      <Grid2 container sx={{ height: "85vh" }}>
        <Grid2 size={3} sx={{ height: "100%",pr:2 }}>
          <Item sx={{ width: "100%", height: "100%" }}>
            <MyTaskManagementPanel />
          </Item>
        </Grid2>

        <Grid2
          size={9}
          container
          direction="column"
          sx={{ height: "100%" }}
        >
          <Grid2 size={12} p={0} sx={{ height: "37%",pb:2 }}>
            <Item sx={{ width: "100%", height: "100%" }}>
              <MyTasksInProgress />
            </Item>
          </Grid2>

          <Grid2 size={12} sx={{ height: "63%" }}>
            <Item sx={{ width: "100%", height: "100%" }}>
              <MyTaskAllTasksDisplay />
            </Item>
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default MyTasks;
