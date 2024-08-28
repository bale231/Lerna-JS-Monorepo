import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Root from "./components/Root.jsx";
import Register from "./components/Register.jsx";
import Dashboard from "./components/pages/Dashboard.jsx";

function redirectIfNotUserLogged() {
  if (!sessionStorage.getItem("email")) {
    return redirect("/");
  } else {
    return null;
  }
}

function redirectIfUserLogged() {
  if (sessionStorage.getItem("email")) {
    return redirect("/dashboard");
  } else {
    return null;
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <App />, loader: redirectIfUserLogged },
      {
        path: "/dashboard",
        element: <Dashboard />,
        loader: redirectIfNotUserLogged,
      },
      { path: "/register", element: <Register /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
