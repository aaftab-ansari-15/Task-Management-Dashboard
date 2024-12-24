import React, { useEffect, useState } from "react";
import { Box, Divider } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import TaskCategoryIcon from "../../icons/TaskCategoryIcon";
import DateRangeIcon from "@mui/icons-material/DateRange";

const TaskDueToday = () => {
  const currentUser = useSelector((state) => state.users.currentUser);
  const allTasks = useSelector((state) => state.tasks.allTasks);
  const currentUserTasks =
    allTasks.find((obj) => obj.userId === currentUser.email)?.tasks || [];

  const [dueTasks, setDueTasks] = useState([]);
  const [expiredTasks, setExpiredTasks] = useState([]);

  useEffect(() => {
    const todayDate = new Date();
    let day = String(todayDate.getDate()).padStart(2, "0");
    let month = String(todayDate.getMonth() + 1).padStart(2, "0");
    let year = String(todayDate.getFullYear());
    let formattedDate = `${year}-${month}-${day}`;
    // filteredTask1 is due today tasks
    const filteredTask1 = currentUserTasks.filter((task) => {
      let date1 = new Date(task.dueDate);
      let date2 = new Date(formattedDate);
      let timeDifference = date1 - date2;
      let daysDifference = timeDifference / (1000 * 60 * 60 * 24);
      return daysDifference >= 0 && daysDifference < 1;
    });
    // filteredTask2 is expired tasks
    const filteredTask2 = currentUserTasks.filter((task) => {
      let date1 = new Date(task.dueDate);
      let date2 = new Date(formattedDate);
      let timeDifference = date1 - date2;
      let daysDifference = timeDifference / (1000 * 60 * 60 * 24);
      return daysDifference < 0;
    });
    setDueTasks(filteredTask1);
    setExpiredTasks(filteredTask2);
  }, [allTasks]);

  return (
    <Box sx={{ mx: "100px", mt: "30px" }}>
      <Typography
        fontWeight={"bolder"}
        variant="h5"
        sx={{ color: "text.secondary" }}
      >
        Notifications ({dueTasks.length})
      </Typography>
      <Box
        display={"flex"}
        flexDirection={"row"}
        flexWrap={"wrap"}
        justifyContent={"flex-start"}
        gap={2}
        sx={{ maxWidth: "100%", mt: 1 }}
      >
        {dueTasks.length > 0 ? (
          dueTasks.map((task, index) => {
            return (
              <Card
                key={index}
                sx={{
                  minWidth: "300px",
                  maxWidth: "300px",
                  minHeight: "300px",
                  bgcolor: "myTaskCard.main",
                }}
              >
                <CardContent>
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <Box sx={{ m: 1 }}>
                      <TaskCategoryIcon category={task.category} />
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

                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", mt: 1 }}
                    >
                      Priority: {task.priority}
                    </Typography>
                    <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                      Due Today
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            );
          })
        ) : (
          <Box sx={{ color: "text.disabled" }}>Nothing in here..</Box>
        )}
      </Box>
    </Box>
  );
};

export default TaskDueToday;
