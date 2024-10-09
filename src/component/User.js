import React from "react";

import { useSelector } from "react-redux";
import AddTaskInUser from "./AddTaskInUser";
import ShowUserTasks from "./ShowUserTasks";

const User = () => {
  // const tasks = useSelector((state) => state.tasks);

  return (
    <>
      <AddTaskInUser />
      <hr />
      <ShowUserTasks />
    </>
  );
};

export default User;
