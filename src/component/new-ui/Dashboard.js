import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import CalendarComp from "../features/CalendarComp";
import "../features/Calendar.css";
import { useSelector } from "react-redux";
import TaskList from "../task-related/TaskList";
import { Divider, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTaskForTaskList } from "../../redux/useFullSlice";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));
const Dashboard = () => {
  const dispatch = useDispatch();
  const getPickUpDate = useSelector((state) => state.useFull.pickUpDate);
  const user = useSelector((state) => state.user.user);
  const allTasks = useSelector((state) => state.tasks.tasks);
  const userAllTasks = allTasks.filter((task) => {
    return task.userId === user.email;
  });
  useEffect(() => {
    const getFormateOfDate = () => {
      const date = new Date(getPickUpDate);
      const formattedDate = date.toLocaleDateString("en-CA");
      return formattedDate;
    };
    const enteredDate = getFormateOfDate();
    const getTasks = userAllTasks.filter((task) => {
      return task.dueDate === enteredDate;
    });
    dispatch(setTaskForTaskList(getTasks));
  }, [getPickUpDate]);

  return (
    <Box
      sx={{
        p: 4,
        pt: "5vh",
        borderRadius: 2,
        backgroundColor: "#C9E6F0",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}></Grid>
        <Grid
          container
          sx={{
            alignItems: "stretch",
            mb: 2,
          }}
          spacing={3}
        >
          <Grid size={5} sx={{}}>
            <Item className="calendar-item">
              <CalendarComp />
            </Item>
          </Grid>
          <Grid size={7} sx={{}}>
            <Item className="calendar-item">
              <CalendarComp />
            </Item>
          </Grid>
        </Grid>
        <Grid size={12} sx={{ mt: 2 }}>
          <Item>
            <Box>
              <Typography textAlign={"start"} ml={4} my={2} variant="h5">
                My Tasks
              </Typography>
              <Divider sx={{ my: 2 }} />
              <TaskList />
            </Box>
          </Item>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
