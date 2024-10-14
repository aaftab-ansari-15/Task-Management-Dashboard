import React from "react";

import AddTaskInUser from "./AddTaskInUser";
import UpdateTaskInUser from "./UpdateTaskInUser";
import ShowUserTasks from "./ShowUserTasks";
import { useSelector } from "react-redux";

const User = () => {
  const taskMode = useSelector((state) => state.modal.taskMode);

  return (
    <>
    {taskMode ? <UpdateTaskInUser /> : <AddTaskInUser />}
      
      <hr />
      <ShowUserTasks />
    </>
  );
};

export default User;
