import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, TextField } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import { Button } from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { deleteTasks } from "../redux/tasksSlice";
import { changeTaskMode } from "../redux/modalSlice";
import TaskStatusIcon from "./TaskStatusIcon";
import Counter from "./Counter";
const ShowUserTasks = () => {
  const dispatch = useDispatch();
  // const countRefs = useRef();
  const user = useSelector((state) => state.user);
  const tasks = useSelector((state) => state.tasks);
  const [searchTerm, setSearchTerm] = useState("");
  const [userTasks, setUserTasks] = useState([]);
  const [priorityFilter, setPriorityFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [draggingIndex, setDraggingIndex] = useState(null);

  const userTask1 = tasks.tasks.filter(
    (task) => task.userId === user.user.email
  );
  const userTask2 = userTask1.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  useEffect(() => {
    setUserTasks(userTask2);
  }, [tasks, searchTerm, user.user.email]);

  //Task Update
  const handleTaskUpdateClick = (task) => {
    dispatch(changeTaskMode(task));
    // dispatch(updateTasks(task)); used in UpdateTaskInUser.
  };

  //Task Delete
  const handleTaskDeleteClick = (task) => {
    dispatch(deleteTasks(task));
    console.log("task deleted", task);
  };

  // Filter
  const handleCategoryFilterClick = () => {
    if (userTask1.length > 0) {
      if (categoryFilter === "" || categoryFilter === "Personal") {
        const filteredTask = userTask1.filter(
          (task) => task.category === "Study"
        );
        setUserTasks(filteredTask);
        setCategoryFilter("Study");
        console.log("Study");
      } else if (categoryFilter === "Study") {
        const filteredTask = userTask1.filter(
          (task) => task.category === "Work"
        );
        setUserTasks(filteredTask);
        setCategoryFilter("Work");
        console.log("Work");
      } else if (categoryFilter === "Work") {
        const filteredTask = userTask1.filter(
          (task) => task.category === "Personal"
        );
        setUserTasks(filteredTask);
        setCategoryFilter("Personal");
        console.log("Personal");
      }
    }
  };
  const handlePriorityFilterClick = () => {
    if (userTask1.length > 0) {
      if (priorityFilter === "" || priorityFilter === "Medium") {
        const filteredTask = userTask1.filter(
          (task) => task.priority === "High"
        );
        setUserTasks(filteredTask);
        setPriorityFilter("High");
        console.log("High");
      } else if (priorityFilter === "High") {
        const filteredTask = userTask1.filter(
          (task) => task.priority === "Low"
        );
        setUserTasks(filteredTask);
        setPriorityFilter("Low");
        console.log("Low");
      } else if (priorityFilter === "Low") {
        const filteredTask = userTask1.filter(
          (task) => task.priority === "Medium"
        );
        setUserTasks(filteredTask);
        setPriorityFilter("Medium");
        console.log("Medium");
      }
    }
  };
  const handleStatusFilterClick = () => {
    if (userTask1.length > 0) {
      if (statusFilter === "" || statusFilter === "In-progress") {
        const filteredTask = userTask1.filter(
          (task) => task.status === "Pending"
        );
        setUserTasks(filteredTask);
        setStatusFilter("Pending");
        console.log("Pending", filteredTask);
      } else if (statusFilter === "Pending") {
        const filteredTask = userTask1.filter(
          (task) => task.status === "Completed"
        );
        setUserTasks(filteredTask);
        setStatusFilter("Completed");
        console.log("Completed", filteredTask);
      } else if (statusFilter === "Completed") {
        const filteredTask = userTask1.filter(
          (task) => task.status === "In-progress"
        );
        setUserTasks(filteredTask);
        setStatusFilter("In-progress");
        console.log("In-progress", filteredTask);
      }
    } else {
      console.log("nothing status fileter");
    }
  };
  // Search filter
  const handleSearchFilterOnChange = (e) => {
    setSearchTerm(e.target.value);
    console.log();
    if (e.target.value === null || e.target.value === "") {
      setUserTasks(userTask1);
    } else {
      setUserTasks(userTask2);
    }
  };

  // Sorting
  const handleDefaultSortingClick = () => {
    setUserTasks(userTask1);
  };
  const handleDueDateSortingClick = () => {
    const sortedTasks = [...userTasks].sort((a, b) => {
      const dateA = new Date(a.dueDate);
      const dateB = new Date(b.dueDate);

      return dateA - dateB;
    });
    setUserTasks(sortedTasks);
  };

  const handlePrioritySortingClick = () => {
    const sortedTasks = [...userTasks].sort((a, b) => {
      const priority = ["Low", "Medium", "High"];
      return priority.indexOf(a.priority) - priority.indexOf(b.priority);
    });
    setUserTasks(sortedTasks);
  };
  // Handle drag and drop
  const handleDragStart = (index) => {
    setDraggingIndex(index);
  };

  const handleDragEnd = () => {
    setDraggingIndex(null);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (draggingIndex === index) return;
    const reorderedTasks = [...userTasks];
    const draggedItem = reorderedTasks[draggingIndex];
    reorderedTasks.splice(draggingIndex, 1); // Remove the dragged item
    reorderedTasks.splice(index, 0, draggedItem); // Add it back in the new position
    setUserTasks(reorderedTasks);
    setDraggingIndex(index); // Update dragged index
  };
  return (
    <Box sx={{ width: "100%", marginLeft: "20px" }}>
      <TextField
        sx={{ width: "50%" }}
        label={<span className="custom-label">Search</span>} // Use custom label
        variant="outlined"
        value={searchTerm}
        onChange={(e) => handleSearchFilterOnChange(e)}
        fullWidth
      />
      <Divider sx={{ mt: "10px" }} />
      <TableContainer component={Paper} sx={{ mt: "10px" }}>
        <Table aria-label="userTaskTable">
          <TableHead>
            <TableRow>
              <TableCell>
                Index
                <Button onClick={() => handleDefaultSortingClick()}>
                  <SwapVertIcon />
                </Button>
              </TableCell>
              <TableCell>
                Status
                <Button onClick={() => handleStatusFilterClick()}>
                  <FilterAltIcon />
                </Button>
              </TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>
                Due Date
                <Button onClick={() => handleDueDateSortingClick()}>
                  <SwapVertIcon />
                </Button>
              </TableCell>
              <TableCell>Time Spent</TableCell>
              <TableCell>
                Category
                <Button onClick={() => handleCategoryFilterClick()}>
                  <FilterAltIcon />
                </Button>
              </TableCell>
              <TableCell>
                Priority
                <Button
                  onClick={() => handlePriorityFilterClick()}
                  sx={{
                    marginLeft: "10px",
                    marginRight: "10px",
                    padding: 0,
                    minWidth: 0,
                  }}
                >
                  <FilterAltIcon />
                </Button>
                <Button
                  onClick={() => handlePrioritySortingClick()}
                  sx={{ padding: 0, minWidth: 0 }}
                >
                  <SwapVertIcon />
                </Button>
              </TableCell>
              <TableCell>Update</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userTasks.map((task, index) => (
              <TableRow
                key={task.title}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                className={`draggable ${
                  draggingIndex === index ? "dragging" : ""
                }`} // Apply dragging class
                draggable="true"
                onDragStart={() => handleDragStart(index)}
                onDragEnd={handleDragEnd}
                onDragOver={(e) => handleDragOver(e, index)}
              >
                <TableCell component="th" scope="task">
                  {index + 1}
                </TableCell>
                <TableCell sx={{ width: "150px" }}>
                  <TaskStatusIcon status={task.status} />
                </TableCell>
                <TableCell>{task.title}</TableCell>
                <TableCell>{task.description}</TableCell>
                <TableCell>{task.dueDate}</TableCell>
                <TableCell>
                  {task.status === "In-progress" ? <Counter /> : task.timeSpent}
                </TableCell>
                <TableCell>{task.category}</TableCell>
                <TableCell>{task.priority}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="warning"
                    onClick={() => handleTaskUpdateClick(task, index)}
                    fullWidth
                  >
                    Update
                  </Button>
                </TableCell>
                <TableCell>
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
  );
};

export default ShowUserTasks;
