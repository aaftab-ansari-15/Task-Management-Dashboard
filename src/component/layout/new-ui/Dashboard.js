import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import BasicDateCalendar from "../../features/MuiCalendar";
import Category from "./Dashboards/WidgetCategory";
import CompletedTasks from "./Dashboards/WidgetCompletedTasks";
import TaskTrackTime from "./Dashboards/WidgetTaskTrackTime";
import TaskList from "./Dashboards/WidgetTaskList";
import { Item } from "../../../style/genral";

const Dashboard = () => {
  return (
    <Box
      sx={{
        px: "100px",
        pt: 3,
      }}
    >
      <Grid container spacing={3}>
        <Grid size={4} sx={{}}>
          <Item sx={{ height: "44vh",borderRadius: 2, }}>
            <BasicDateCalendar />
          </Item>
        </Grid>
        <Grid size={8} sx={{}}>
          <Item sx={{ height: "44vh", borderRadius: 2, }}>
            <TaskList />
          </Item>
        </Grid>
      </Grid>
      <Grid container sx={{ mt: 2 }} spacing={3}>
        <Grid size={4} sx={{}}>
          <Item
            sx={{
              height: "310px",
              borderRadius: 2,
            }}
          >
            <Category />
          </Item>
        </Grid>
        <Grid size={4} sx={{}}>
          <Item sx={{ height: "310px", borderRadius: 2, }}>
            <CompletedTasks />
          </Item>
        </Grid>
        <Grid size={4} sx={{}}>
          <Item 
            sx={{
              height: "310px",
              borderRadius: 2,
            }}
          >
            <TaskTrackTime />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
