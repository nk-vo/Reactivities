import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../app/layout/App";
import HomePage from "../home/HomePage";
import ActivityDashboard from "../features/activities/dashboard/ActivityDashboard";
import ActivityForm from "../features/activities/form/ActivityForm";
import ActivityDetails from "../features/activities/details/ActivityDetails";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/activities",
        element: <ActivityDashboard />,
      },
      {
        path: "/activities/:id",
        element: <ActivityDetails />,
      },
      {
        path: "/createActivity",
        element: <ActivityForm />,
      },
      {
        path: "/errors",
        element: <div>Errors</div>,
      },
      {
        path: "/server-error",
        element: <div>Server Error</div>,
      },
      {
        path: "/login",
        element: <div>Login</div>,
      },
      {
        path: "/profile",
        element: <div>Profile</div>,
      },
      {
        path: "/register",
        element: <div>Register</div>,
      },
      {
        path: "/errors",
        element: <div>Errors</div>,
      },
      {
        path: "/server-error",
        element: <div>Server Error</div>,
      },
      {
        path: "/login",
        element: <div>Login</div>,
      },
      {
        path: "/profile",
        element: <div>Profile</div>,
      },
      {
        path: "/register",
        element: <div>Register</div>,
      },
    ],
  },
  {
    path: "/about",
    element: <div>About</div>,
  },
];

export const router = createBrowserRouter(routes);
