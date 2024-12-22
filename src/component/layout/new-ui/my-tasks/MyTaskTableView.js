import React, { useState } from "react";
import UserTaskTable from "../../old-ui/UserTaskTable";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";

const MyTaskTableView = () => {
  const theme = useTheme();
  const myTasks = useSelector((state) => state.ui.myTasks);
  return (
    <Box
      sx={{
        overflow: "auto",
        maxHeight: "400px",
        "&::-webkit-scrollbar": {
          width: "0.5rem",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: theme.palette.scrollbar.thumb,
          borderRadius: "10px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: theme.palette.scrollbar.track,
          borderRadius: "10px",
          mt: "50px",
        },
      }}
    >
      {myTasks.length > 0 ? (
        <UserTaskTable usersFilterTasks={myTasks} />
      ) : (
        <Box sx={{ color: "text.disabled" }}>Nothing in here..</Box>
      )}
    </Box>
  );
};

export default MyTaskTableView;
