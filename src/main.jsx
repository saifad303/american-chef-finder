import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./pages/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/blogs",
        element: <BlogPage></BlogPage>,
      },
      {
        path: "/signin",
        element: <SignInPage></SignInPage>,
      },
      {
        path: "/signup",
        element: <SignUpPage></SignUpPage>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
