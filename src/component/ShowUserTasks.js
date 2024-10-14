import { Box, TextField } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";

import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { deleteTasks } from "../redux/tasksSlice";
import { changeTaskMode } from "../redux/modalSlice";
import { useState } from "react";
const ShowUserTasks = () => {
  console.log("hello");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const tasks = useSelector((state) => state.tasks);
  const [searchTerm, setSearchTerm] = useState("");
  const userTask1 = tasks.tasks.filter(
    (task) => task.userId === user.user.email
  );
  const userTask2 = userTask1.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const [userTasks, setUserTasks] = useState(userTask2);
  const [priorityFilter, setPriorityFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const handleTaskUpdateClick = (task) => {
    dispatch(changeTaskMode(task));
    // dispatch(updateTasks(task));
    console.log("update");
  };
  const handleTaskDeleteClick = (task) => {
    dispatch(deleteTasks(task));
    console.log("task deleted", task);
  };
  const handleCategoryFilterClick = () => {
    setUserTasks(userTask2);
    if (userTasks.length > 0) {
      if (categoryFilter === "" || categoryFilter === "Personal") {
        const filteredTask = userTasks.filter(
          (task) => task.category === "Study"
        );
        setUserTasks(filteredTask);
        setCategoryFilter("Study");
        console.log("Study");
      } else if (categoryFilter === "Study") {
        const filteredTask = userTasks.filter(
          (task) => task.category === "Work"
        );
        setUserTasks(filteredTask);
        setCategoryFilter("Work");
        console.log("Work");
      } else if (categoryFilter === "Work") {
        const filteredTask = userTasks.filter(
          (task) => task.category === "Personal"
        );
        setUserTasks(filteredTask);
        setCategoryFilter("Personal");
        console.log("Personal");
      }
    }
    // setTimeout(() => {

    // }, 1000);
  };
  const handlePriorityFilterClick = () => {
    setUserTasks(userTask2);
    if (userTasks.length > 0) {
      if (priorityFilter === "" || priorityFilter === "Medium") {
        const filteredTask = userTasks.filter(
          (task) => task.priority === "High"
        );
        setUserTasks(filteredTask);
        setPriorityFilter("High");
        console.log("High");
      } else if (priorityFilter === "High") {
        const filteredTask = userTasks.filter(
          (task) => task.priority === "Low"
        );
        setUserTasks(filteredTask);
        setPriorityFilter("Low");
        console.log("Low");
      } else if (priorityFilter === "Low") {
        const filteredTask = userTasks.filter(
          (task) => task.priority === "Medium"
        );
        setUserTasks(filteredTask);
        setPriorityFilter("Medium");
        console.log("Medium");
      }
    }
    // setTimeout(() => {

    // }, 1000);
  };
  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
    console.log();
    if (e.target.value === null || e.target.value === "") {
      setUserTasks(userTask1);
    } else {
      setUserTasks(userTask2);
    }
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "100%", maxWidth: 1000 }}>
        <TextField
          sx={{ width: "50%" }}
          label={<span className="custom-label">Search</span>} // Use custom label
          variant="outlined"
          value={searchTerm}
          onChange={(e) => handleOnChange(e)}
          fullWidth
        />
        <Divider />
        <TableContainer component={Paper} sx={{ mt: "10px" }}>
          <Table sx={{ minWidth: 1000 }} aria-label="userTaskTable">
            <TableHead>
              <TableRow>
                <TableCell>Index</TableCell>
                <TableCell>Title</TableCell>
                <TableCell align="right">Description</TableCell>
                <TableCell align="right">Due Date</TableCell>
                <TableCell align="right">
                  Category
                  <Button
                    onClick={() => {
                      handleCategoryFilterClick();
                    }}
                  >
                    <SwapVertIcon />
                  </Button>
                </TableCell>
                <TableCell align="right">
                  Priority
                  <Button onClick={() => handlePriorityFilterClick()}>
                    <SwapVertIcon />
                  </Button>
                </TableCell>
                <TableCell align="right">Update</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userTasks.map((task, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="task">
                    {index + 1}
                  </TableCell>
                  <TableCell>{task.title}</TableCell>
                  <TableCell align="right">{task.description}</TableCell>
                  <TableCell align="right">{task.dueDate}</TableCell>
                  <TableCell align="right">{task.category}</TableCell>
                  <TableCell align="right">{task.priority}</TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      color="warning"
                      onClick={() => handleTaskUpdateClick(task)}
                      fullWidth
                    >
                      Update
                    </Button>
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleTaskDeleteClick(task)}
                      fullWidth
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default ShowUserTasks;
