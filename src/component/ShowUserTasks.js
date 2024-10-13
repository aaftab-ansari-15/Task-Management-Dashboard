import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import {updateTasks, deleteTasks} from "../redux/tasksSlice"
import { render } from "@testing-library/react";
import { changeTaskMode } from "../redux/modalSlice";
const ShowUserTasks = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const tasks = useSelector((state) => state.tasks);
  const userTasks = tasks.tasks.filter((task) => {
    return task.userId === user.user.email;
  });
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));
  const handleTaskUpdateClick = (task) => {

    dispatch(changeTaskMode(task));
    // dispatch(updateTasks(task));
    console.log("update");
  };
  const handleTaskDeleteClick = (task) => {
    
    dispatch(deleteTasks(task));
    console.log("task deleted", task);
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "100%", maxWidth: 850 }}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Divider />
        <TableContainer component={Paper} sx={{ mt: "10px" }}>
          <Table sx={{ minWidth: 850 }} aria-label="userTaskTable">
            <TableHead>
              <TableRow>
                <TableCell>Index</TableCell>
                <TableCell>Title</TableCell>
                <TableCell align="right">Description</TableCell>
                <TableCell align="right">Due Date</TableCell>
                <TableCell align="right">Category</TableCell>
                <TableCell align="right">Priority</TableCell>
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
                      color="danger"
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
