import React from "react";
import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import TaskInfo from "./component/TaskInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "taskId/:taskId",
    element: <TaskInfo />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
