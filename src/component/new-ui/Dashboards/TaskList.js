import { CheckBox, Update } from "@mui/icons-material";
import { Button, Checkbox, Divider, FormControlLabel, FormGroup, Tooltip, Typography } from "@mui/material";
import { Box, Grid } from "@mui/system";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setTaskForTaskList } from "../../../redux/useFullSlice";
import TaskStatusIcon from "../../task-related/TaskStatusIcon";
import { addTaskForm } from "../../../redux/modalSlice";
import AddIcon from "@mui/icons-material/Add";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";
import { DashboardsHeading } from "../../features/DashboardsHeading";
import { useTheme } from "@emotion/react";
import { updateTasks } from "../../../redux/tasksSlice";

const TaskList = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const getPickUpDate = useSelector((state) => state.useFull.pickUpDate);
  const getTasksListData = useSelector((state) => state.useFull.taskListData);
  const user = useSelector((state) => state.user.user);
  const allTasks = useSelector((state) => state.tasks.tasks);
  const userAllTasks = allTasks.filter((task) => {
    return task.userId === user.email;
  });
  useEffect(() => {
    const getTasks = userAllTasks.filter((task) => {
      return task.dueDate === getPickUpDate;
    });
    dispatch(setTaskForTaskList(getTasks));
  }, [getPickUpDate, allTasks]);
  const handleChange = (e, task) => {
    e.preventDefault()
    const { name, checked } = e.target;
    if (name === "taskDone"){
      const updatedTask = {...task, status: checked ? "Completed" : "Pending"}
    dispatch(updateTasks(updatedTask));
      
    }
  };
  const handleAddClick = () => {
    dispatch(
      addTaskForm({ formState: true, data: { dueDate: getPickUpDate } })
    );
  };
  return (
    <>
      <Box mx={4} my={2} display={"flex"} justifyContent={"space-between"}>
        <DashboardsHeading
          headingName={"My Task"}
          className={"bottomGridHeading1"}
          width1={"50%"}
          width2={"30%"}
        />
        <Box sx={{ alignItems: "center" }}>
          <Tooltip title="Add Task on this date">
            <Button onClick={handleAddClick}>
              <AddIcon sx={{ color: "#ff7c00", fontWeight: "900" }} />
            </Button>
          </Tooltip>
        </Box>
      </Box>
      <Divider className="shadowDivider" sx={{ my: 2 }} />
      <Box sx={{ overflowY: "auto", maxHeight: "230px" }}>
        <Box sx={{ p: 1 }}>
          {getTasksListData.length > 0 ? (
            getTasksListData.map((task, index) => {
              return (
                <Grid
                  key={task.taskId}
                  container
                  spacing={2}
                  sx={{ mx: 1, my: 2 }}
                >
                  <Grid size={1}>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        id="taskDone"
                        name="taskDone"
                        checked={task.status !== "Completed" ? false : true}
                        onChange={(e) => handleChange(e, task)}
                        sx={{
                          "& .MuiSvgIcon-root": { fontSize: 50 },
                          color: theme.palette.primary.light1,
                          // bgcolor:theme.palette.primary.light,
                        }}
                      />
                    </FormGroup>
                  </Grid>
                  <Grid size={4}>
                    <Typography ml={2} textAlign={"start"} variant="h6">
                      {task.title}
                    </Typography>
                  </Grid>
                  <Grid size={2}>
                    <Typography ml={2} textAlign={"start"} variant="h6">
                      {task.category}
                    </Typography>
                  </Grid>
                  <Grid size={1}>
                    <Typography ml={2} textAlign={"start"} variant="h6">
                      {task.priority}
                    </Typography>
                  </Grid>
                  <Grid size={4} paddingLeft={"7%"}>
                    <Typography
                      component="div"
                      ml={2}
                      textAlign="start"
                      variant="h6"
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center", // Center-align icon and text horizontally
                      }}
                    >
                      <TaskStatusIcon status={task.status} />
                      {"\u00A0"}
                      <span>{task.status}</span>
                    </Typography>
                  </Grid>
                </Grid>
              );
            })
          ) : (
            <Box sx={{ fontSize: "xxx-large", fontWeight: "900" }}>
              No Task on this date
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default TaskList;
