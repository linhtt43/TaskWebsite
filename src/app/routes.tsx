import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import TaskList from "./pages/TaskList";
import Calendar from "./pages/Calendar";
import Members from "./pages/Members";
import Departments from "./pages/Departments";
import Settings from "./pages/Settings";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "tasks", Component: TaskList },
      { path: "calendar", Component: Calendar },
      { path: "members", Component: Members },
      { path: "departments", Component: Departments },
      { path: "settings", Component: Settings },
      { path: "help", Component: Help },
      { path: "*", Component: NotFound },
    ],
  },
]);
