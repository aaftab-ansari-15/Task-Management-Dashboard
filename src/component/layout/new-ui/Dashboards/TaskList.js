import React from "react";
import {
  Collapse,
  Divider,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box, Grid } from "@mui/system";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setTaskForTaskList } from "../../../../redux/useFullSlice";
import TaskStatusIcon from "../../../features/TaskStatusIcon";
import {
  addTaskForm,
  taskAlert,
  updateTaskFrom,
} from "../../../../redux/modalSlice";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { useTheme } from "@emotion/react";
import TaskAlert from "../../../features/TaskAlert";
import TaskPriorityIcon from "../../../features/TaskPriorityIcon";
import "../../../../style/dashboards.css";
const TaskList = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const taskAlertState = useSelector((state) => state.modal.isTaskAlert);
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
  const handleTaskClick = (task) => {
    dispatch(taskAlert({ alertState: true, taskAlertData: task }));
  };
  const handleAddClick = () => {
    dispatch(
      addTaskForm({ formState: true, data: { dueDate: getPickUpDate } })
    );
  };
  const handleTaskUpdateClick = (task) => {
    dispatch(updateTaskFrom({ arg1: true, arg2: task }));
  };
  return (
    <>
      <TaskAlert />
      <Box
        ml={2}
        mr={4}
        my={1}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Typography className="bottomGridHeading1" variant="h6">
          My tasks ({getTasksListData.length})
        </Typography>
        <Box sx={{ alignItems: "center" }}>
          <Tooltip
            title={
              <Typography variant="body1">
                Create a task for ({getPickUpDate})
              </Typography>
            }
          >
            <IconButton sx={{ borderRadius: 4 }} onClick={handleAddClick}>
              <AddIcon sx={{}} />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Divider sx={{ mt: 2 }} />
      <Box
        // className="style-scrollbar"
        sx={{
          mt: 4,
          overflowY: "auto",
          maxHeight: taskAlertState ? "150px" : "200px",
          "&::-webkit-scrollbar": {
            width: "0.5rem",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: theme.palette.scrollbar.thumb,
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: theme.palette.scrollbar.track,
            borderRadius: "10px",
            my:3
          },
        }}
      >
        <Box
          sx={{
            px: 3,
            pointerEvents: taskAlertState ? "none" : "auto",
            backgroundColor: taskAlertState
              ? "rgba(0, 0, 0, 0.1)"
              : "transparent",
            opacity: taskAlertState ? 0.6 : 1,
          }}
        >
          {getTasksListData.length > 0 ? (
            getTasksListData.map((task, index) => {
              return (
                <React.Fragment key={task.taskId}>
                  <Grid
                    container
                    alignItems={"center"}
                    sx={{
                      py: 2,
                      cursor: "pointer",
                      ":hover": {
                        backgroundColor: theme.palette.primary.light,
                        color: "black",
                      },
                    }}
                  >
                    <Grid
                      size={10}
                      container
                      onClick={() => handleTaskClick(task)}
                      className="dashboard-tasklist-task"
                    >
                      <Grid size={1}>
                        {task.status === "Completed" ? (
                          <CheckCircleOutlineIcon
                            sx={{
                              borderRadius: 4,
                              bgcolor: theme.palette.primary.main,
                            }}
                          />
                        ) : (
                          <RadioButtonUncheckedIcon
                            sx={{
                              borderRadius: 4,
                              bgcolor: theme.palette.primary.main,
                            }}
                          />
                        )}
                      </Grid>
                      <Grid size={6}>
                        <Tooltip
                          title={
                            <Typography variant="body1">
                              {task.title}
                            </Typography>
                          }
                        >
                          <Typography
                            ml={2}
                            maxWidth={"210px"}
                            textAlign={"start"}
                            variant="body1"
                            sx={{
                              textDecoration:
                                task.status === "Completed"
                                  ? "line-through"
                                  : "none",
                              textOverflow: "ellipsis", // Shows ellipsis by default
                              whiteSpace: "nowrap", // Prevents text wrapping by default
                              overflow: "hidden", // Hides overflowing text
                            }}
                          >
                            {task.title}
                          </Typography>
                        </Tooltip>
                      </Grid>
                      <Grid container size={5}>
                        <Grid size={4}>
                          <Typography textAlign={"start"} variant="body1">
                            {task.category}
                          </Typography>
                        </Grid>
                        <Grid size={4}>
                          <TaskPriorityIcon priority={task.priority} />
                        </Grid>
                        <Grid size={4}>
                          <TaskStatusIcon status={task.status} />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid size={2}>
                      <Tooltip
                        title={<Typography variant="body1">edit</Typography>}
                      >
                        <IconButton
                          sx={{ p: 0 }}
                          onClick={() => handleTaskUpdateClick(task)}
                        >
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                    </Grid>
                  </Grid>
                  {getTasksListData.length - 1 > index ? <Divider /> : <></>}
                </React.Fragment>
              );
            })
          ) : (
            <Box
              sx={{
                width: "100%",
                height: "200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography fontSize="x-large" fontWeight="700">
                No Task on this date
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default TaskList;
