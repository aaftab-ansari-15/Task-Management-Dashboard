import { CheckBox } from "@mui/icons-material";
import { Button, Divider, Tooltip, Typography } from "@mui/material";
import { Box, Grid } from "@mui/system";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setTaskForTaskList } from "../../redux/useFullSlice";
import TaskStatusIcon from "./TaskStatusIcon";
import { addTaskForm } from "../../redux/modalSlice";
import AddIcon from '@mui/icons-material/Add';

const TaskList = () => {
  const dispatch = useDispatch();
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
  }, [getPickUpDate]);
  const handleChange = (e) => {
    // const { name, checked } = e.target;
    console.log(getTasksListData);
  };
  const handleAddClick = () => {
    dispatch(addTaskForm({ state: true, data: getPickUpDate }));
  };
  console.log(getTasksListData)
  return (
    <>
      <Box mx={4} my={2} display={"flex"} justifyContent={"space-between"}>
        <Box>
          <Typography fontWeight={"bolder"} textAlign={"start"} variant="h5">
            My Tasks
          </Typography>
        </Box>
        <Box sx={{ alignItems: "center" }}>
          <Tooltip title="Add Task on this date">
            <Button onClick={handleAddClick}>
              <AddIcon sx={{ fontSize: "bolder", fontWeight: "bolder" }} />
            </Button>
          </Tooltip>
        </Box>
      </Box>
      <Divider className="shadowDivider" sx={{ my: 2 }} />
      <Box sx={{ overflowY: "auto", maxHeight: "230px" }}>
        <Box sx={{ p: 1 }}>
          {getTasksListData.length>0 ? (
            getTasksListData.map((task, index) => {
              return (
                <Grid
                  key={task.taskId}
                  container
                  spacing={2}
                  sx={{ mx: 1, my: 2 }}
                >
                  <Grid size={1}>
                    <CheckBox
                      id="taskDone"
                      name="taskDone"
                      checked={true}
                      onChange={handleChange}
                      sx={{
                        "& .MuiSvgIcon-root": { fontSize: 50 },
                        color: "#472aa0",
                        backgroundColor: "#C9E6F0",
                      }}
                    />
                  </Grid>
                  <Grid size={5}>
                    <Typography ml={2} textAlign={"start"} variant="h6">
                      {task.title}
                    </Typography>
                  </Grid>
                  <Grid size={3}>
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
                  <Grid size={3}>
                    <Typography ml={2} textAlign={"start"} variant="h6">
                      {task.priority}
                    </Typography>
                  </Grid>
                </Grid>
              );
            })
          ) : (
            <Box sx={{fontSize:"xxx-large", fontWeight:"900"}}>No Task on this date</Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default TaskList;
