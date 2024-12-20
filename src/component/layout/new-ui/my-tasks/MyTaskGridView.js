import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import React from "react";
import TaskCategoryIcons from "../../../icons/TaskCategoryIcon";
import { DateRangeIcon } from "@mui/x-date-pickers";
import { useSelector } from "react-redux";
import { useTheme } from "@emotion/react";

const MyTaskGridView = () => {
  const theme = useTheme();
  const myTasks = useSelector((state) => state.ui.myTasks);

  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      flexWrap={"wrap"}
      justifyContent={"flex-start"}
      gap={2}
      sx={{
        px: "50px",
        pt: "10px",
        maxWidth: "100%",
        overflow: "auto",
        maxHeight: "400px",
        "&::-webkit-scrollbar": {
          width: "0.5rem",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: theme.palette.scrollbar.thumb,
          borderRadius: "10px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: theme.palette.scrollbar.track,
          borderRadius: "20px",
        },
      }}
    >
      {myTasks.length > 0 ? (
        myTasks.map((task, index) => {
          return (
            <Card
              key={index}
              sx={{
                minWidth: "300px",
                maxWidth: "300px",
                minHeight: "300px",
                bgcolor: "myTaskCard.main",
                textAlign: "start",
              }}
            >
              <CardContent>
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Box sx={{ m: 1 }}>
                    <TaskCategoryIcons category={task.category} />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mt: 1,
                    }}
                  >
                    <DateRangeIcon sx={{ fontSize: "1.2rem" }} />{" "}
                    <Typography
                      sx={{ color: "text.secondary" }}
                      variant="body2"
                    >
                      {task.dueDate}
                    </Typography>
                  </Box>
                </Box>
                <Divider sx={{ my: 1 }} />

                <Box px={1}>
                  <Typography
                    fontWeight={"bolder"}
                    variant="body1"
                    component="div"
                    sx={{ mt: 2 }}
                  >
                    {task.title}
                  </Typography>
                  <Typography sx={{ color: "text.secondary", mt: 1 }}>
                    {task.description}
                  </Typography>
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        mt: 1,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 0.5,
                      }}
                    >
                      Priority: {task.priority}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        mt: 1,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 0.5,
                      }}
                    >
                      Status: {task.status}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          );
        })
      ) : (
        <Box sx={{ color: "text.disabled" }}>Nothing in here..</Box>
      )}
    </Box>
  );
};

export default MyTaskGridView;
