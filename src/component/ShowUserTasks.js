import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const ShowUserTasks = () => {
  const allTasks = useSelector((state) => state.tasks);
  const getFilters = useSelector((state) => state.filter);
  const getSort = useSelector((state) => state.sort);
  console.log(getFilters, getSort, allTasks);
  return <Box sx={{}}></Box>;
};

export default ShowUserTasks;
