import AddCategory from "../component/forms/AddCategory";
import AddTaskInUser from "../component/forms/AddTaskInUser";
import UpdateTaskInUser from "../component/forms/UpdateTaskInUser";
import AboutPage from "../component/layout/new-ui/AboutPage";
import Dashboard from "../component/layout/new-ui/Dashboard";
import ErrorPage from "../component/layout/new-ui/ErrorPage";
import TaskNotification from "../component/layout/new-ui/TaskNotification";
import MyTasksListOldUI from "../component/layout/old-ui/MyTasksListOldUI";

export const renderMainLayoutComponent = (componentName) => {
    switch (componentName) {
      case DASHBOARD:
        return <Dashboard />;
      case TASKS_LIST_OLD_UI:
        return <MyTasksListOldUI />;
      case MY_TASKS:
        return <MyTasksListOldUI />;
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
        return <></>;
    }
  };