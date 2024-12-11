import React, { useState } from "react";
import { Box, Grid, Divider, Typography, Tooltip, Grid2 } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useTheme } from "@emotion/react";
import TaskCategoryIcon from "../../../icons/TaskCategoryIcon";
const WidgetCompletedTasks = () => {
  const theme = useTheme();
  const getTasksListData = useSelector(
    (state) => state.ui.displayDashboardTasks
  );
  const getPickUpDate = useSelector((state) => state.ui.pickUpDate);
  const [getCompletedTasksListData, setGetCompletedTasksListData] = useState(
    []
  );
  useEffect(() => {
    const completedTasks = getTasksListData.filter((task) => {
      return task.status === "Completed";
    });
    setGetCompletedTasksListData(completedTasks);
  }, [getTasksListData]);
  return (
    <>
      <Grid2 mt={1} container sx={{ alignItems: "center" }}>
        <Grid2 size={8}>
          <Typography className="dashboard-widget-title" variant="h6">
            Completed tasks
          </Typography>
        </Grid2>
        <Grid2 size={4}>
          <Typography
            fontFamily={"monospace"}
            fontWeight={"bolder"}
            variant="body1"
          >
            {getPickUpDate}
          </Typography>
        </Grid2>
      </Grid2>

      <Divider sx={{ mt: 2 }} />
      <Box
        sx={{
          overflowY: "auto",
          maxHeight: "240px",
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
        <Box sx={{ px: 3 }}>
          {getCompletedTasksListData.length > 0 ? (
            getCompletedTasksListData.map((task, index) => {
              return (
                <React.Fragment key={task.taskId}>
                  <Box
                    sx={{
                      py: 2,
                      cursor: "pointer",
                      ":hover": {
                        backgroundColor: theme.palette.primary.light,
                        color: "black",
                      },
                    }}
                    className="dashboard-tasklist-task"
                  >
                    <Grid2 container spacing={2} alignItems={"center"}>
                      <Grid2
                        size={3}
                        sx={{ display: "flex", justifyContent: "start" }}
                      >
                        <TaskCategoryIcon category={task.category} />
                      </Grid2>
                      <Grid2 size={9}>
                        <Tooltip
                          title={
                            <Typography variant="body1">
                              {task.title}
                            </Typography>
                          }
                        >
                          <Typography
                            textAlign={"start"}
                            variant="body1"
                            sx={{
                              textOverflow: "ellipsis", // Shows ellipsis by default
                              whiteSpace: "nowrap", // Prevents text wrapping by default
                              overflow: "hidden", // Hides overflowing text
                            }}
                          >
                            {task.title}
                          </Typography>
                        </Tooltip>
                      </Grid2>
                    </Grid2>
                  </Box>
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
              <Typography fontSize="larger" fontWeight="700">
                No completed Task on this date
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default WidgetCompletedTasks;
