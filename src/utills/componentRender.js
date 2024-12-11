import AddCategory from "../component/forms/AddCategory";
import AddTaskInUser from "../component/forms/AddTaskInUser";
import UpdateTaskInUser from "../component/forms/UpdateTaskInUser";
import TasksListOldUI from "../component/layout/old-ui/TasksListOldUI";
import Dashboard from "../component/layout/new-ui/Dashboard";
import MyTasks from "../component/layout/new-ui/MyTasks";
import TaskNotification from "../component/layout/new-ui/TaskNotification";
import AboutPage from "../component/layout/new-ui/AboutPage";
import ErrorPage from "../component/layout/new-ui/ErrorPage";
import {
  ABOUT,
  DASHBOARD,
  MY_TASKS,
  NOTIFICATIONS,
  TASKS_LIST_OLD_UI,
} from "../constants/componentsName.";

export const renderMainLayoutComponent = (componentName) => {
  switch (componentName) {
    case DASHBOARD:
      return <Dashboard />;
    case TASKS_LIST_OLD_UI:
      return <TasksListOldUI />;
    case MY_TASKS:
      return <MyTasks />;
    case NOTIFICATIONS:
      return <TaskNotification />;
    case ABOUT:
      return <AboutPage />;
    default:
      return <ErrorPage />;
  }
};
export const renderForm = (formName) => {
  switch (formName) {
    case "AddTask":
      return <AddTaskInUser />;
    case "UpdateTask":
      return <UpdateTaskInUser />;
    case "AddCategory":
      return <AddCategory />;
    default:
      return <ErrorPage />;
  }
};
