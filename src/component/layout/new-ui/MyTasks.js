import React from "react";
import { Item } from "../../../style/genral";
import { Box, Grid2 } from "@mui/material";
import MyTaskManagementPanel from "./my-tasks/MyTaskManagementPanel";
import MyTaskAllTasksDisplay from "./my-tasks/MyTaskAllTasksDisplay";

const MyTasks = () => {
  return (
    <Box sx={{ px: "3rem", pt: "2rem" }}>
      <Grid2 container spacing={4} sx={{ height: "85vh" }}>
        <Grid2 size={3} sx={{ height: "100%" }}>
          <Item sx={{ width: "100%", height: "100%" }}>
            <MyTaskManagementPanel />
          </Item>
        </Grid2>

        <Grid2
          size={9}
          container
          spacing={4}
          direction="column"
          sx={{ height: "100%" }}
        >
          <Grid2 size={12} sx={{ height: "30%" }}>
            <Item sx={{ width: "100%", height: "100%" }}></Item>
          </Grid2>

          <Grid2 size={12} sx={{ height: "65%" }}>
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
