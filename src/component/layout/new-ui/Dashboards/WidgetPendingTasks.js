import React, { useEffect, useState } from "react";
import { Box, Divider, Grid2, Tooltip, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useTheme } from "@emotion/react";
import TaskCategoryIcon from "../../../icons/TaskCategoryIcon";
import { useDispatch } from "react-redux";
const WidgetPendingTasks = () => {
  const theme = useTheme();
  const getTasksListData = useSelector(
    (state) => state.ui.displayDashboardTasks
  );
  const selectedDate = useSelector((state) => state.ui.selectedDate);
  const [pendingTasksListData, setPendingTasksListData] = useState([]);

  useEffect(() => {
    const pendingTasks = getTasksListData.filter((task) => {
      return task.status === "Pending" || task.status === "In-progress";
    });
    setPendingTasksListData(pendingTasks);
  }, [getTasksListData]);

  return (
    <>
      <Grid2 mt={1} container alignItems={"center"}>
        <Grid2 size={8}>
          <Typography className="dashboard-widget-title" variant="h6">
            Pending tasks
          </Typography>
        </Grid2>
        <Grid2 size={4}>
          <Typography
            fontFamily={"monospace"}
            fontWeight={"bolder"}
            variant="body1"
          >
            {selectedDate}
          </Typography>
        </Grid2>
      </Grid2>
      <Divider sx={{ mt: 2 }} />
      <Box
        sx={{
          overflow: "auto",
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
          {pendingTasksListData.length > 0 ? (
            pendingTasksListData.map((task, index) => {
              return (
                <React.Fragment key={task.taskId}>
                  <Box sx={{ py: 2 }}>
                    <Grid2 container spacing={2} alignItems={"center"}>
                      <Grid2
                        size={2}
                        sx={{ display: "flex", justifyContent: "start" }}
                      >
                        <TaskCategoryIcon category={task.category} />
                      </Grid2>
                      <Grid2 size={10}>
                        <Tooltip
                          title={
                            <Typography variant="body2">
                              {task.title}
                            </Typography>
                          }
                        >
                          <Typography
                            textAlign={"start"}
                            variant="body1"
                            sx={{
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
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
                No pending Task on this date
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default WidgetPendingTasks;