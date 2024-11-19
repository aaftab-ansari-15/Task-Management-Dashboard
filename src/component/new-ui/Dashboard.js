import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import CalendarComp from "../features/CalendarComp";
import "../features/Calendar.css";
import TaskList from "../task-related/TaskList";
import { Divider, Typography } from "@mui/material";
import BasicDateCalendar from "../features/MuiCalendar";
import "../features/Calendar.css";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027 !important" ,
    color: "#eef5ff !important"

  }),
}));
const Dashboard = () => {
  return (
    <Box
      sx={{
        p: 4,
        pt: "5vh",
        borderRadius: 2,
        backgroundColor: "#C9E6F0",
      }}
    >
      <Grid container sx={{ mb: 2}} spacing={3}>
        <Grid size={4} sx={{}}>
          <Item className="calendar-item" sx={{height:"350px", borderRadius:4, backgroundColor:"#9d9bff"}}>
            <BasicDateCalendar />
            {/* <CalendarComp /> */}
          </Item>
        </Grid>
        <Grid size={8} sx={{}}>
          <Item sx={{color:"#3d3d41", height:"350px", borderRadius:4, backgroundColor:"#5cd669"}}>
            <TaskList />
          </Item>
        </Grid>
      </Grid>
      <Grid container sx={{mb: 2}} spacing={3}>
        <Grid size={4} sx={{}}>
          <Item sx={{ color:"#3d3d41", borderRadius:4,color:"", backgroundColor:"#3cd9b1"}}>
          <Typography className="bottomGridHeading" variant="h5">
              Category
            </Typography>
            <Divider className="shadowDivider" sx={{ my: 2 }} />
            <Box sx={{overflowY: "auto",maxHeight:"240px"}}>
            </Box>
          </Item>
        </Grid>
        <Grid size={4} sx={{}}>
          <Item sx={{ color:"#3d3d41", borderRadius:4, color:"", backgroundColor:"#eda7ff"}}>
          <Typography color="#3d3d41" className="bottomGridHeading" variant="h5">
              Priority
            </Typography>
            <Divider className="shadowDivider" sx={{ my: 2 }} />
            <Box sx={{overflowY: "auto",maxHeight:"240px"}}>
            </Box>
          </Item>
        </Grid>
        <Grid size={4} sx={{}}>
          <Item sx={{ color:"#3d3d41", borderRadius:4, color:"", backgroundColor:"#f6bb54"}}>
          <Typography className="bottomGridHeading" variant="h5">
              Notification
            </Typography>
            <Divider className="shadowDivider" sx={{ my: 2 }} />
            <Box sx={{overflowY: "auto",maxHeight:"240px"}}>
            </Box>
          </Item>
        </Grid>
      </Grid>
      
     
    </Box>
  );
};

export default Dashboard;
