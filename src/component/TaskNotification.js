import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";
const TaskNotification = () => {
  const user = useSelector((state) => state.user);
  const tasks = useSelector((state) => state.tasks);
  const usersTask = tasks.tasks.filter(
    (task) => task.userId === user.user.email
  );
  const [filteredTitles, setFilteredTitles] = useState([]);
  useEffect(() => {
    const todayDate = new Date();
    let day = String(todayDate.getDate()).padStart(2, "0");
    let month = String(todayDate.getMonth() + 1).padStart(2, "0");
    let year = String(todayDate.getFullYear());
    let formattedDate = `${year}-${month}-${day}`;
    const filteredTask = usersTask.filter((task) => {
      let date1 = new Date(task.dueDate);
      let date2 = new Date(formattedDate);
      let timeDifference = date1 - date2; // difference in milliseconds
      let daysDifference = timeDifference / (1000 * 60 * 60 * 24);
      return daysDifference >= 0 && daysDifference <= 1;
    });
    const titles = filteredTask.map((task) => task.title);
    setFilteredTitles(titles);
  }, [tasks]);

  return (
    <div>
      <p>Due Date Task Notification</p>
      <hr />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Stack sx={{ width: "100%" }} spacing={2}>
          {filteredTitles.length > 0 ? (
            filteredTitles.map((title) => {
              return (
                <Alert key={title} variant="filled" severity="warning">
                  Task {title} due is in 1 day.
                </Alert>
              );
            })
          ) : (
            <Box sx={{ color: "text.disabled" }}>Nothing in here..</Box>
          )}
        </Stack>
      </Box>
    </div>
  );
};

export default TaskNotification;
