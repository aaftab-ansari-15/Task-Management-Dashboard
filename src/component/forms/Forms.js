import React from "react";
import { useSelector } from "react-redux";
import AddTaskInUser from "./AddTaskInUser";
import UpdateTaskInUser from "./UpdateTaskInUser";
import AddCategory from "./AddCategory";
import { useEffect } from "react";
import { useState } from "react";
const renderForm = (formName) => {
  switch (formName) {
    case "AddTask":
      return <AddTaskInUser />;
    case "UpdateTask":
      return <UpdateTaskInUser />;
    case "AddCategory":
      return <AddCategory />;
    default:
      return <></>;
  }
};
const Forms = () => {
  const isAddTaskForm = useSelector((state) => state.ui.isAddTaskForm);
  const isUpdateTaskForm = useSelector((state) => state.ui.isUpdateTaskForm);
  const isCategoryFormOpen = useSelector((state) => state.ui.isCategoryForm);
  const [formName, setFormName] = useState("");
  useEffect(() => {
    if (isAddTaskForm) {
      setFormName("AddTask");
    } else if (isUpdateTaskForm) {
      setFormName("UpdateTask");
    } else if (isCategoryFormOpen) {
      setFormName("AddCategory");
    }
  }, [isAddTaskForm, isUpdateTaskForm, isCategoryFormOpen]);
  return renderForm(formName);
};

export default Forms;
