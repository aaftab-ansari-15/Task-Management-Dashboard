import React, { useState, useEffect } from "react";
import {
  Button,
  Divider,
  Grid2,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box, Grid } from "@mui/system";
import { useSelector, useDispatch } from "react-redux";
import {
  addTaskForm,
  setDashboardTasks,
  taskAlert,
  updateTaskForm,
} from "../../../../redux/uiSlice";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import TaskStatusIcon from "../../../icons/TaskStatusIcon";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { useTheme } from "@emotion/react";
import TaskAlert from "../../../features/TaskAlert";
import TaskPriorityIcon from "../../../icons/TaskPriorityIcon";

const priorities = ["Low", "Medium", "High", "Clear"];

const WidgetTaskList = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const currentUser = useSelector((state) => state.users.currentUser);
  const selectedDate = useSelector((state) => state.ui.selectedDate);
  const taskAlertState = useSelector((state) => state.ui.isTaskAlert);
  const getTasksListData = useSelector((state) => state.ui.displayDashboardTasks);
  const allTasks = useSelector((state) => state.tasks.allTasks);
  const currentUserTasks = allTasks.find(obj => obj.userId === currentUser.email)?.tasks || [];
  
  const [filterValue, setFilterValue] = useState("Clear");
  useEffect(() => {
    const getTasks = currentUserTasks.filter((task) => {
      const matchesDueDate = task.dueDate === selectedDate;
      const matchesPriority =
        filterValue === "Clear" || task.priority === filterValue;
      return matchesDueDate && matchesPriority;
    });
    dispatch(setDashboardTasks(getTasks));
  }, [selectedDate, allTasks, filterValue]);
  const handleTaskClick = (task) => {
    dispatch(taskAlert({ alertState: true, taskAlertData: task }));
  };
  const handleAddClick = () => {
    dispatch(
      addTaskForm({ formState: true, data: { dueDate: selectedDate } })
    );
  };
  const handleTaskUpdateClick = (task) => {
    dispatch(updateTaskForm({ arg1: true, arg2: task }));
  };
  const handlePriorityFilterClick = (priority) => {
    setFilterValue(priority);
  };
  const getFilterButtonStyles = (priority) => ({
    p: 0,
    textTransform: "none",
    color: theme.palette.text.primary,
    fontWeight: filterValue === priority ? "900" : "normal",
  });

  const getFilterGridStyles = (priority) => ({
    py: "5px",
    bgcolor: filterValue === priority ? theme.palette.primary.grey : "inherit",
    borderRadius: 2,
  });
  return (
    <>
      <TaskAlert />
      <Grid2 container ml={2} mr={3} my={1} alignItems={"center"}>
        <Grid2 size={7}>
          <Typography className="dashboard-widget-task-title" variant="h6">
            My tasks ({getTasksListData.length})
          </Typography>
        </Grid2>

        <Grid2 container size={5} sx={{ alignItems: "center" }}>
          <Grid2
            container
            size={10}
            sx={{
              px: 1,
              py: 1,
              borderRadius: 2,
              border: "1px solid #818181",
              pointerEvents: taskAlertState ? "none" : "auto",
              backgroundColor: taskAlertState
                ? "rgba(0, 0, 0, 0.1)"
                : "transparent",
              opacity: taskAlertState ? 0.6 : 1,
              background: `linear-gradient(135deg, ${theme.palette.secondary.main}99, ${theme.palette.secondary.main}30)`,

            }}
          >
            {priorities.map((priority) => (
              <Grid2 key={priority} size={3} sx={getFilterGridStyles(priority)}>
                <Button
                  onClick={() => handlePriorityFilterClick(priority)}
                  sx={getFilterButtonStyles(priority)}
                >
                  {priority}
                </Button>
              </Grid2>
            ))}
          </Grid2>
          <Grid2
            size={2}
            textAlign={"end"}
            sx={{
              pointerEvents: taskAlertState ? "none" : "auto",
            }}
          >
            <Tooltip
              title={
                <Typography variant="body1">
                  Create a task for ({selectedDate})
                </Typography>
              }
            >
              <IconButton sx={{ borderRadius: 4 }} onClick={handleAddClick}>
                <AddIcon sx={{}} />
              </IconButton>
            </Tooltip>
          </Grid2>
        </Grid2>
      </Grid2>
      <Divider sx={{ mt: 2 }} />
      <Box
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
            my: 3,
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
                    >
                      <Grid size={1}>
                        {task.status === "Completed" ? (
                          <CheckCircleOutlineIcon
                            sx={{
                              borderRadius: 4,
                              bgcolor: theme.palette.primary.main,
                              color: "black",
                            }}
                          />
                        ) : (
                          <RadioButtonUncheckedIcon
                            sx={{
                              borderRadius: 4,
                              bgcolor: theme.palette.primary.main,
                              color: "black",
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
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap", 
                              overflow: "hidden", 
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

export default WidgetTaskList;
