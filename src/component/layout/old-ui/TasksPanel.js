import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import UserTaskTable from "./UserTaskTable";
import { Box } from "@mui/material";
import { Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  sortTasksByDueDate,
  sortTasksByPriority,
} from "../../../utills/sorting";
import { filterTasks, searchTasks } from "../../../utills/filter";

const TasksPanel = () => {
  const currentUser = useSelector((state) => state.users.currentUser);
  const allTasks = useSelector((state) => state.tasks.allTasks);
  const getFilters = useSelector((state) => state.filter);
  const getSort = useSelector((state) => state.sort);
  const currentUserTasks =
    allTasks.find((obj) => obj.userId === currentUser.email)?.tasks || [];
  const [usersFilterTasks, setUsersFilterTasks] = useState(currentUserTasks);
  const [searchFilter, setSearchFilter] = useState("");
  useEffect(() => {
    const filteredTasks = filterTasks(currentUserTasks, getFilters);
    setUsersFilterTasks(filteredTasks);
  }, [getFilters, allTasks]);

  useEffect(() => {
    if (getSort.sortBy === "priority" && getSort.sortOrder !== "") {
      const sortedTask = sortTasksByPriority(
        usersFilterTasks,
        getSort.sortOrder
      );
      setUsersFilterTasks(sortedTask);
    } else if (getSort.sortBy === "dueDate" && getSort.sortOrder !== "") {
      const sortedTask = sortTasksByDueDate(
        usersFilterTasks,
        getSort.sortOrder
      );
      setUsersFilterTasks(sortedTask);
    } else if (getSort.sortBy === "" && getSort.sortOrder === "") {
      setUsersFilterTasks(usersFilterTasks);
    }
  }, [getSort, allTasks]);

  useEffect(() => {
    const searchedTask = searchTasks(currentUserTasks, searchFilter)
    setUsersFilterTasks(searchedTask);
  }, [searchFilter, allTasks]);

  const handleSearchBar = (e) => {
    setSearchFilter(e.target.value);
  };
  return (
    <Box
      sx={{
        width: "-webkit-fill-available",
        border: "2px solid #8958c1",
        margin: 1,
        padding: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <h4>User Name: {currentUser.name}</h4>
        </Box>
        <Box>
          <h2>ALL TASKS</h2>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <SearchIcon />
          <Input
            color="secondary"
            placeholder="Search Task By Title"
            value={searchFilter}
            onChange={handleSearchBar}
          />
        </Box>
      </Box>
      <hr />
      <UserTaskTable usersFilterTasks={usersFilterTasks} />
    </Box>
  );
};

export default TasksPanel;
