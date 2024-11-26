import { Alert } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const TaskCompleteAlert = ({task}) => {
    useEffect(() => {
      
    console.log("asd");
    }, [task]);
    
    return (
    <Alert action variant="outlined" severity="info">
      Do you want to complete this task {task.name}
    </Alert>
  );
};

export default TaskCompleteAlert;
