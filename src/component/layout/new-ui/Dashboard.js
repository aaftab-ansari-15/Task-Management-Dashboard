import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import CalendarComp from "../../features/CalendarComp";
import { Divider, Typography } from "@mui/material";
import BasicDateCalendar from "../../features/MuiCalendar";
import Category from "./Dashboards/Category";
import Notifications from "./Dashboards/Notifications";
import CompletedTasks from "./Dashboards/CompletedTasks";
import TaskTrackTime from "./Dashboards/TaskTrackTime";
import TaskList from "./Dashboards/TaskList";
import "./../../../style/dashboards.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "",
    color: "",
  }),
}));
const Dashboard = () => {
  return (
    <Box
      sx={{
        px: "100px",
        pt: 4,
        borderRadius: 2,
        backgroundColor: "",
      }}
    >
      <Grid container spacing={3}>
        <Grid size={4} sx={{}}>
          <Item sx={{ height: "44vh", borderRadius: 4 }}>
            <BasicDateCalendar />
            {/* <CalendarComp /> */}
          </Item>
        </Grid>
        <Grid size={8} sx={{}}>
          <Item
            
            sx={{ height: "44vh", borderRadius: 4, backgroundColor: "" }}
          >
            <TaskList />
          </Item>
        </Grid>
      </Grid>
      <Grid container sx={{ mt: 2 }} spacing={3}>
        <Grid size={4} sx={{}}>
          <Item
            
            sx={{
              color: "#3d3d41",
              borderRadius: 4,
              color: "",
              backgroundColor: "",
            }}
          >
            <Category />
          </Item>
        </Grid>
        <Grid size={4} sx={{}}>
          <Item
            
            sx={{
              color: "#3d3d41",
              borderRadius: 4,
              color: "",
              backgroundColor: "",
            }}
          >
            <TaskTrackTime />
          </Item>
        </Grid>
        <Grid size={4} sx={{}}>
          <Item
            
            sx={{
              color: "#3d3d41",
              borderRadius: 4,
              color: "",
              backgroundColor: "",
            }}
          >
            <CompletedTasks />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;