import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { renderForm } from "../../utills/componentRender";

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
