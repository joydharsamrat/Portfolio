import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import ProjectDetails from "../Pages/projects/projectDetails";
import BlogDetails from "../Pages/Blogs/BlogDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/project/:id",
        element: <ProjectDetails />,
      },
      {
        path: "/blog/:slug",
        element: <BlogDetails />,
      },
    ],
  },
]);
