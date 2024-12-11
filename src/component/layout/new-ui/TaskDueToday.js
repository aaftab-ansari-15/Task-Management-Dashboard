import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";
const TaskDueToday = () => {
  const currentUser = useSelector((state) => state.users.currentUser);
  const allTasks = useSelector((state) => state.tasks.allTasks);
    const currentUserTasks = allTasks.find(obj => obj.userId === currentUser.email)?.tasks || [];

  const [filteredTitles1, setFilteredTitles1] = useState([]);
  const [filteredTitles2, setFilteredTitles2] = useState([]);
  useEffect(() => {
    const todayDate = new Date();
    let day = String(todayDate.getDate()).padStart(2, "0");
    let month = String(todayDate.getMonth() + 1).padStart(2, "0");
    let year = String(todayDate.getFullYear());
    let formattedDate = `${year}-${month}-${day}`;
    // filteredTask1 is due today tasks
    // filteredTask1 is expired tasks
    const filteredTask1 = currentUserTasks.filter((task) => {
      let date1 = new Date(task.dueDate);
      let date2 = new Date(formattedDate);
      let timeDifference = date1 - date2; // difference in milliseconds
      let daysDifference = timeDifference / (1000 * 60 * 60 * 24);
      return daysDifference > 0 && daysDifference <= 1;
    });
    const filteredTask2 = currentUserTasks.filter((task) => {
      let date1 = new Date(task.dueDate);
      let date2 = new Date(formattedDate);
      let timeDifference = date1 - date2; // difference in milliseconds
      let daysDifference = timeDifference / (1000 * 60 * 60 * 24);
      return daysDifference < 0;
    });
    const titles1 = filteredTask1.map((task) => task.title);
    const titles2 = filteredTask2.map((task) => task.title);
    setFilteredTitles1(titles1);
    setFilteredTitles2(titles2);
  }, [allTasks]);

  return (
    <Box sx={{}}>
      <h3>Due Date Task Notification - This Component is not Completed yet (In-progress)</h3>
      <hr />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Stack sx={{ width: "100%" }} spacing={2}>
          {filteredTitles1.length > 0 ? (
            filteredTitles1.map((title) => {
              return (
                <Alert key={title} variant="filled" severity="warning">
                  <span style={{fontWeight:"bolder"}}>Task:</span> {title} due is in 1 day.
                </Alert>
              );
            })
          ) : (
            <Box sx={{ color: "text.disabled" }}>Nothing in here..</Box>
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default TaskDueToday;
