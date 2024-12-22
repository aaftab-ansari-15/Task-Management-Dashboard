import AddCategory from "../component/forms/AddCategory";
import AddTaskInUser from "../component/forms/AddTaskInUser";
import UpdateTaskInUser from "../component/forms/UpdateTaskInUser";
import TasksListOldUI from "../component/layout/old-ui/TasksListOldUI";
import Dashboard from "../component/layout/new-ui/Dashboard";
import MyTasks from "../component/layout/new-ui/MyTasks";
import Profile from "../component/layout/new-ui/Profile";
import TaskDueToday from "../component/layout/new-ui/TaskDueToday";
import AboutPage from "../component/layout/new-ui/AboutPage";
import ErrorPage from "../component/layout/new-ui/ErrorPage";
import {
  ABOUT,
  DASHBOARD,
  MY_TASKS,
  NOTIFICATIONS,
  PROFILE,
  TASKS_LIST_OLD_UI,
} from "../constants/componentsName.";
import MyTaskGridView from "../component/layout/new-ui/my-tasks/MyTaskGridView";
import MyTaskListView from "../component/layout/new-ui/my-tasks/MyTaskListView";
import MyTaskTableView from "../component/layout/new-ui/my-tasks/MyTaskTableView";

export const renderMainLayoutComponent = (componentName) => {
  switch (componentName) {
    case DASHBOARD:
      return <Dashboard />;
    case TASKS_LIST_OLD_UI:
      return <TasksListOldUI />;
    case MY_TASKS:
      return <MyTasks />;
    case PROFILE:
      return <Profile />;
    case NOTIFICATIONS:
      return <TaskDueToday />;
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
      return null;
  }
};
export const renderMyTaskViewComponent = (myTaskView) => {
  switch (myTaskView) {
    case "grid":
      return <MyTaskGridView />;
    case "list":
      return <MyTaskListView />;
    case "table":
      return <MyTaskTableView />;
    default:
      return null;
  }
};
