import React, { useState } from "react";
import { Box, Grid, Divider, Typography, Tooltip, Grid2 } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useTheme } from "@emotion/react";
import TaskPriorityIcon from "../../../features/TaskPriorityIcon";
import TaskStatusIcon from "../../../features/TaskStatusIcon";
import CategoryIcons from "../../../features/CategoryIcons";

const CompletedTasks = () => {
  const theme = useTheme();
  const getTasksListData = useSelector((state) => state.useFull.taskListData);
  const getPickUpDate = useSelector((state) => state.useFull.pickUpDate);
  const [getCompletedTasksListData, setGetCompletedTasksListData] = useState(
    []
  );
  useEffect(() => {
    console.log(getTasksListData);
    const completedTasks = getTasksListData.filter((task) => {
      return task.status === "Completed";
    });
    console.log(completedTasks);
    setGetCompletedTasksListData(completedTasks);
  }, [getTasksListData]);
  return (
    <>
      <Grid2 container sx={{ alignItems: "center" }}>
        <Grid2 size={8}>
          <Typography className="bottomGridHeading" variant="h6">
            Completed Tasks
          </Typography>
        </Grid2>
        <Grid2 size={4}>
          <Typography className="bottomGridHeading" variant="body2">
            {getPickUpDate}
          </Typography>
        </Grid2>
      </Grid2>

      <Divider sx={{ my: 2 }} />
      <Box
        sx={{
          overflowY: "auto",
          maxHeight: "230px",
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
          {getCompletedTasksListData.length > 0 ? (
            getCompletedTasksListData.map((task, index) => {
              return (
                <Box
                  key={task.taskId}
                  sx={{
                    
                    cursor: "pointer", borderRadius: 4,
                    ":hover": {
                      backgroundColor: theme.palette.primary.light,
                      color: "black",
                    },
                  }}
                  className="dashboard-tasklist-task"
                >
                  <Grid2 container spacing={2} sx={{ py: 2 }}>
                    <Grid2 size={6}>
                      <Tooltip
                        title={
                          <Typography variant="body1">{task.title}</Typography>
                        }
                      >
                        <Typography
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
                    </Grid2>
                    <Grid2
                      size={6}
                      sx={{ display: "flex", justifyContent: "end" }}
                    >
                      <CategoryIcons icon={task.category} />
                    </Grid2>
                  </Grid2>
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
              <Typography fontSize="larger" fontWeight="700">
                No Completed Task on this date
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default CompletedTasks;
