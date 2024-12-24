import React, { useEffect, useState } from "react";
import { renderMyTaskViewComponent } from "../../../../utills/componentRender";
import { useSelector } from "react-redux";
import {
  sortTasksByDueDate,
  sortTasksByPriority,
} from "../../../../utills/sorting";
import { filterTasks, searchTasks } from "../../../../utills/filter";
import { useDispatch } from "react-redux";
import { setMyTasksForDisplay } from "../../../../redux/uiSlice";
import UserTaskTable from "../../old-ui/UserTaskTable";
import { Box, Divider, Typography } from "@mui/material";

const MyTaskAllTasksDisplay = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.users.currentUser);
  const allTasks = useSelector((state) => state.tasks.allTasks);
  const myTaskView = useSelector((state) => state.ui.myTaskView);
  const getFilters = useSelector((state) => state.filter);
  const getSort = useSelector((state) => state.sort);
  const getSearchedText = useSelector((state) => state.ui.searchFilterText);
  const currentUserTasks =
    allTasks.find((obj) => obj.userId === currentUser.email)?.tasks || [];
  const [myTasks, setMyTasks] = useState(currentUserTasks);

  //search
  useEffect(() => {
    const searchedTask = searchTasks(currentUserTasks, getSearchedText);
    setMyTasks(searchedTask);
  }, [getSearchedText, allTasks]);
  //filter
  useEffect(() => {
    const filteredTasks = filterTasks(currentUserTasks, getFilters);
    setMyTasks(filteredTasks);
  }, [getFilters, allTasks]);
  //sort
  useEffect(() => {
    if (getSort.sortBy === "priority" && getSort.sortOrder !== "") {
      const sortedTask = sortTasksByPriority(myTasks, getSort.sortOrder);
      setMyTasks(sortedTask);
    } else if (getSort.sortBy === "dueDate" && getSort.sortOrder !== "") {
      const sortedTask = sortTasksByDueDate(myTasks, getSort.sortOrder);
      setMyTasks(sortedTask);
    } else if (getSort.sortBy === "" && getSort.sortOrder === "") {
      setMyTasks(currentUserTasks);
    }
  }, [getSort, allTasks]);

  //set My Tasks.
  useEffect(() => {
    dispatch(setMyTasksForDisplay(myTasks));
  }, [myTasks]);

  return (
    <Box>
      <Box p={1} mb={1} sx={{ bgcolor: "secondary.main" }}>
        <Typography
          textAlign={"start"}
          fontWeight={"bolder"}
          variant="h6"
        >
          My Tasks
        </Typography>
      </Box>
      <Divider sx={{ my: 1 }} />
      {renderMyTaskViewComponent(myTaskView)}
    </Box>
  );
};

export default MyTaskAllTasksDisplay;
