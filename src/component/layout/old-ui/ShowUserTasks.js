import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import UserTaskTable from "./UserTaskTable";
import { Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";
const priorityOrder = { Low: 1, Medium: 2, High: 3 };
const ShowUserTasks = () => {
  const user = useSelector((state) => state.user.currentUser);
  const allTasks = useSelector((state) => state.tasks.tasks);
  const getFilters = useSelector((state) => state.filter);
  const getSort = useSelector((state) => state.sort);
  const userAllTasks = allTasks.filter((task) => {
    return task.userId === user.email;
  });
  const [usersFilterTasks, setUsersFilterTasks] = useState(userAllTasks);
  const [searchFilter, setSearchFilter] = useState("");
  useEffect(() => {
    const filteredTasks = userAllTasks.filter((task) => {
      return (
        (getFilters.priority === "" || getFilters.priority === task.priority) &&
        (getFilters.category === "" || getFilters.category === task.category) &&
        (getFilters.status === "" || getFilters.status === task.status)
      );
    });
    setUsersFilterTasks(filteredTasks);
  }, [getFilters, allTasks]);

  useEffect(() => {
    if (getSort.sortBy === "priority") {
      if (getSort.sortOrder === "asc") {
        const sortedTask = userAllTasks.sort((a, b) => {
          const priorityA = priorityOrder[a.priority] || 0;
          const priorityB = priorityOrder[b.priority] || 0;
          return priorityA - priorityB; // Ascending by priority
        });
        setUsersFilterTasks(sortedTask);
      } else if (getSort.sortOrder === "desc") {
        const sortedTask = userAllTasks.sort((a, b) => {
          const priorityA = priorityOrder[a.priority] || 0;
          const priorityB = priorityOrder[b.priority] || 0;
          return priorityB - priorityA; // Descending by priority
        });
        setUsersFilterTasks(sortedTask);
      }
    } else if (getSort.sortBy === "dueDate") {
      if (getSort.sortOrder === "asc") {
        const sortedTask = userAllTasks.sort((a, b) => {
          const dateA = new Date(a.dueDate);
          const dateB = new Date(b.dueDate);
          return dateA - dateB; // Ascending order by date
        });
        setUsersFilterTasks(sortedTask);
      } else if (getSort.sortOrder === "desc") {
        const sortedTask = userAllTasks.sort((a, b) => {
          const dateA = new Date(a.dueDate);
          const dateB = new Date(b.dueDate);
          return dateB - dateA; // Descending order by date
        });
        setUsersFilterTasks(sortedTask);
      }
    } else if (getSort.sortBy === "" && getSort.sortOrder === "") {
      setUsersFilterTasks(userAllTasks);
    }
  }, [getSort, allTasks]);

  useEffect(() => {
    const searchedTask = userAllTasks.filter((task) => {
      return task.title.toLowerCase().includes(searchFilter.toLowerCase());
    });
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
          <h4>User Name: {user.name}</h4>
        </Box>
        <Box>
          <h2>User's All Tasks</h2>
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

export default ShowUserTasks;
