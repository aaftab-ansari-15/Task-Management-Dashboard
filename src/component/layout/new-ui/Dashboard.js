import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import CalendarComp from "../../features/CalendarComp";
import { Divider, Typography } from "@mui/material";
import BasicDateCalendar from "../../common/MuiCalendar";
import Category from "./Dashboards/Category";
import Notifications from "./Dashboards/Notifications";
import CompletedTasks from "./Dashboards/CompletedTasks";
import TaskTrackTime from "./Dashboards/TaskTrackTime";
import TaskList from "./Dashboards/TaskList";
import "./../../../style/dashboards.css";

const Item = styled(Paper)(({ theme }) => ({
  // background: "linear-gradient(135deg, rgba(251, 248, 147, 0.6), rgba(255, 255, 255, 0.4))",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  backdropFilter: "blur(10px)", 
  WebkitBackdropFilter: "blur(10px)", 
  borderRadius: 2,
  border: `1px solid ${theme.palette.divider}`, 
}));
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
            {/* <CalendarComp /> */}
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
