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
import { addTaskForm, taskAlert } from "../../../../redux/modalSlice";
import AddIcon from "@mui/icons-material/Add";
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
          My Task ({getTasksListData.length})
        </Typography>
        <Box sx={{ alignItems: "center" }}>
          <Tooltip
            title={
              <Typography variant="body1">
                Create a task for ({getPickUpDate})
              </Typography>
            }
          >
            <IconButton
              sx={{ bgcolor: theme.palette.primary.main, borderRadius: 4 }}
              onClick={handleAddClick}
            >
              <AddIcon sx={{ color: "black" }} />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Divider sx={{ mt: 2 }} />
      <Box
        // className="style-scrollbar"
        sx={{
          mt: 3,
          overflowY: "auto",
          maxHeight: taskAlertState ? "150px" : "200px",
          "&::-webkit-scrollbar": {
            width: "0.5rem",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: theme.palette.primary.main,
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: theme.palette.text.primary,
            borderRadius: "10px",
          },
        }}
      >
        <Box sx={{ px: 3 }}>
          {getTasksListData.length > 0 ? (
            getTasksListData.map((task, index) => {
              return (
                <Box
                  key={task.taskId}
                  onClick={() => handleTaskClick(task)}
                  sx={{
                    cursor: "pointer",
                    ":hover": {
                      backgroundColor: theme.palette.primary.light,
                      color: "black",
                    },
                  }}
                  className="dashboard-tasklist-task"
                >
                  <Grid container spacing={2} sx={{ py: 2 }}>
                    <Grid size={2}>
                      {task.status === "Completed" ? (
                        <CheckCircleOutlineIcon
                          sx={{
                            color: theme.palette.primary.dark,
                          }}
                        />
                      ) : (
                        <RadioButtonUncheckedIcon
                          sx={{
                            color: theme.palette.primary.dark,
                          }}
                        />
                      )}
                    </Grid>
                    <Grid size={4}>
                      <Tooltip
                        title={
                          <Typography variant="body1">{task.title}</Typography>
                        }
                      >
                        <Typography
                          ml={2}
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
                    <Grid size={2}>
                      <Tooltip
                        title={
                          <Typography variant="body1">category</Typography>
                        }
                      >
                        <Typography ml={2} textAlign={"start"} variant="body1">
                          {task.category}
                        </Typography>
                      </Tooltip>
                    </Grid>
                    <Grid size={2}>
                      <TaskPriorityIcon priority={task.priority} />
                    </Grid>
                    <Grid size={2}>
                      <TaskStatusIcon status={task.status} />
                    </Grid>
                  </Grid>
                  {getTasksListData.length - 1 > index ? <Divider /> : <></>}
                </Box>
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
